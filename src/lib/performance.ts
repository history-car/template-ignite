/**
 * Performance Monitoring Utilities
 * Client-side performance tracking and Core Web Vitals monitoring
 */

import { useEffect, useRef } from "react";

export interface PerformanceMetric {
  name: string;
  value: number;
  rating: "good" | "needs-improvement" | "poor";
  delta?: number;
}

/**
 * Core Web Vitals thresholds (in milliseconds)
 * Based on Google's recommendations
 */
const WEB_VITALS_THRESHOLDS = {
  // Largest Contentful Paint
  LCP: {
    good: 2500,
    poor: 4000,
  },
  // First Input Delay
  FID: {
    good: 100,
    poor: 300,
  },
  // Cumulative Layout Shift
  CLS: {
    good: 0.1,
    poor: 0.25,
  },
  // First Contentful Paint
  FCP: {
    good: 1800,
    poor: 3000,
  },
  // Time to First Byte
  TTFB: {
    good: 800,
    poor: 1800,
  },
  // Interaction to Next Paint
  INP: {
    good: 200,
    poor: 500,
  },
} as const;

/**
 * Rate performance metric value
 */
function getRating(
  name: keyof typeof WEB_VITALS_THRESHOLDS,
  value: number
): "good" | "needs-improvement" | "poor" {
  const thresholds = WEB_VITALS_THRESHOLDS[name];
  if (value <= thresholds.good) return "good";
  if (value <= thresholds.poor) return "needs-improvement";
  return "poor";
}

/**
 * Report performance metric
 * Can be extended to send to analytics service
 */
function reportMetric(metric: PerformanceMetric) {
  if (process.env.NODE_ENV === "development") {
    const emoji =
      metric.rating === "good"
        ? "✅"
        : metric.rating === "needs-improvement"
        ? "⚠️"
        : "❌";
    console.log(
      `${emoji} ${metric.name}: ${metric.value.toFixed(2)}ms (${metric.rating})`
    );
  }

  // Send to analytics service (e.g., Google Analytics, Vercel Analytics)
  if (typeof window !== "undefined" && "gtag" in window) {
    // @ts-ignore
    window.gtag("event", metric.name, {
      value: Math.round(metric.value),
      metric_rating: metric.rating,
      metric_delta: metric.delta,
    });
  }
}

/**
 * Measure Web Vitals using the web-vitals library pattern
 * Compatible with next/web-vitals
 */
export function reportWebVitals(metric: any) {
  const { name, value, delta, rating, id } = metric;

  const performanceMetric: PerformanceMetric = {
    name,
    value,
    rating: rating || getRating(name as any, value),
    delta,
  };

  reportMetric(performanceMetric);
}

/**
 * Manual performance measurement utility
 */
export class PerformanceMonitor {
  private marks: Map<string, number> = new Map();

  /**
   * Start measuring a performance metric
   */
  start(name: string) {
    if (typeof performance !== "undefined") {
      this.marks.set(name, performance.now());
    }
  }

  /**
   * End measuring and report the metric
   */
  end(name: string) {
    if (typeof performance === "undefined") return;

    const startTime = this.marks.get(name);
    if (!startTime) {
      console.warn(`No start mark found for: ${name}`);
      return;
    }

    const duration = performance.now() - startTime;
    this.marks.delete(name);

    // Report as custom metric
    if (process.env.NODE_ENV === "development") {
      console.log(`⏱️  ${name}: ${duration.toFixed(2)}ms`);
    }

    return duration;
  }

  /**
   * Measure async operation
   */
  async measure<T>(name: string, fn: () => Promise<T>): Promise<T> {
    this.start(name);
    try {
      return await fn();
    } finally {
      this.end(name);
    }
  }
}

/**
 * Get current page performance metrics
 */
export function getPagePerformance() {
  if (typeof performance === "undefined" || !performance.getEntriesByType) {
    return null;
  }

  const navigation = performance.getEntriesByType("navigation")[0] as any;
  if (!navigation) return null;

  return {
    // DNS lookup time
    dns: navigation.domainLookupEnd - navigation.domainLookupStart,

    // TCP connection time
    tcp: navigation.connectEnd - navigation.connectStart,

    // Time to First Byte
    ttfb: navigation.responseStart - navigation.requestStart,

    // Response download time
    download: navigation.responseEnd - navigation.responseStart,

    // DOM processing time
    domProcessing: navigation.domComplete - navigation.domInteractive,

    // Total page load time
    pageLoad: navigation.loadEventEnd - navigation.fetchStart,
  };
}

/**
 * Log bundle size information (development only)
 */
export function logBundleInfo() {
  if (process.env.NODE_ENV !== "development") return;

  const resources = performance.getEntriesByType("resource");
  const scripts = resources.filter((r) => r.name.endsWith(".js"));
  const styles = resources.filter((r) => r.name.endsWith(".css"));

  const totalScriptSize = scripts.reduce(
    (acc, r: any) => acc + (r.transferSize || 0),
    0
  );
  const totalStyleSize = styles.reduce(
    (acc, r: any) => acc + (r.transferSize || 0),
    0
  );

  console.group("📦 Bundle Information");
  console.log(
    `Scripts: ${(totalScriptSize / 1024).toFixed(2)} KB (${
      scripts.length
    } files)`
  );
  console.log(
    `Styles: ${(totalStyleSize / 1024).toFixed(2)} KB (${styles.length} files)`
  );
  console.log(
    `Total: ${((totalScriptSize + totalStyleSize) / 1024).toFixed(2)} KB`
  );
  console.groupEnd();
}

/**
 * Component render performance tracker
 */
export function useRenderTracking(componentName: string) {
  if (process.env.NODE_ENV === "development") {
    const renderCount = useRef(0);
    renderCount.current++;

    useEffect(() => {
      console.log(`🔄 ${componentName} rendered ${renderCount.current} times`);
    });
  }
}

// Export singleton instance
export const perfMonitor = new PerformanceMonitor();
