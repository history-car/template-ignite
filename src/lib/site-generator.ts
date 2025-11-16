/**
 * Site Generator
 * Generates multi-page sites from configuration files
 * Handles automatic routing and page generation
 */

import { SiteConfig } from "@/types/site.types";
import { PageConfig } from "@/types/page.types";
import { getTheme } from "./theme-presets";
import { promises as fs } from "fs";
import path from "path";
import { parse as parseYAML } from "yaml";
import { ThemeConfig } from "@/types/theme.types";

/**
 * Site generator configuration
 */
export interface SiteGeneratorConfig {
  templatesDir: string;
  outputDir: string;
  baseUrl?: string;
}

/**
 * Site generator class
 */
export class SiteGenerator {
  constructor(private config: SiteGeneratorConfig) {}

  /**
   * Load site configuration from YAML file
   */
  async loadSiteConfig(filePath: string): Promise<SiteConfig> {
    const content = await fs.readFile(filePath, "utf-8");
    const config = parseYAML(content) as SiteConfig;

    // Validate configuration
    this.validateSiteConfig(config);

    return config;
  }

  /**
   * Validate site configuration
   */
  private validateSiteConfig(config: SiteConfig): void {
    if (!config.site || !config.site.name) {
      throw new Error("Site configuration must include site.name");
    }

    if (!config.pages || config.pages.length === 0) {
      throw new Error("Site configuration must include at least one page");
    }

    // Validate each page
    config.pages.forEach((page, index) => {
      if (!page.slug) {
        throw new Error(`Page at index ${index} must have a slug`);
      }

      if (!page.sections || page.sections.length === 0) {
        throw new Error(`Page "${page.slug}" must have at least one section`);
      }
    });
  }

  /**
   * Generate routes from site configuration
   * Returns array of route paths that should be created
   */
  generateRoutes(config: SiteConfig): string[] {
    return config.pages.map((page) => {
      // Root page (home) maps to '/'
      if (page.slug === "home" || page.slug === "index" || page.slug === "/") {
        return "/";
      }

      // All other pages map to /slug
      return `/${page.slug}`;
    });
  }

  /**
   * Get page configuration by slug
   */
  getPageBySlug(config: SiteConfig, slug: string): PageConfig | null {
    // Normalize slug
    const normalizedSlug =
      slug === "/" || slug === "" ? "home" : slug.replace(/^\//, "");

    return (
      config.pages.find((page) => {
        const pageSlug = page.slug === "/" ? "home" : page.slug;
        return pageSlug === normalizedSlug;
      }) || null
    );
  }

  /**
   * Resolve theme for site
   * Merges preset with custom overrides
   */
  resolveTheme(config: SiteConfig) {
    if (!config.theme) {
      return null;
    }

    let baseTheme: ThemeConfig | null = null;

    // Load preset if specified
    if (config.theme.preset) {
      baseTheme = getTheme(config.theme.preset);
    }

    // Apply custom colors if specified
    if (config.theme.customColors && baseTheme) {
      return {
        ...baseTheme,
        colors: {
          ...baseTheme.colors,
          ...config.theme.customColors,
        },
      };
    }

    return baseTheme;
  }

  /**
   * Generate navigation menu from pages
   * Automatically creates menu items from pages with navigation: true
   */
  generateNavigation(config: SiteConfig) {
    // Use explicit navigation if provided
    if (config.navigation?.menu) {
      return config.navigation;
    }

    // Auto-generate from pages
    const menuItems = config.pages
      .filter((page) => page.metadata?.navigation !== false)
      .map((page) => ({
        label: page.metadata?.title || this.formatSlugToTitle(page.slug),
        href: page.slug === "home" ? "/" : `/${page.slug}`,
      }));

    return {
      logo: config.navigation?.logo || {
        alt: config.site.name,
        text: config.site.name,
      },
      menu: menuItems,
      cta: config.navigation?.cta,
    };
  }

  /**
   * Format slug to human-readable title
   */
  private formatSlugToTitle(slug: string): string {
    return slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  /**
   * Generate sitemap data
   */
  generateSitemap(config: SiteConfig) {
    const baseUrl = this.config.baseUrl || config.site.domain || "";

    return config.pages.map((page) => ({
      url: `${baseUrl}${page.slug === "home" ? "/" : `/${page.slug}`}`,
      lastModified: new Date().toISOString(),
      changeFrequency: page.metadata?.changeFrequency || "monthly",
      priority: page.metadata?.priority || (page.slug === "home" ? 1.0 : 0.8),
    }));
  }

  /**
   * Get all page slugs for static generation
   */
  getStaticPaths(config: SiteConfig) {
    return config.pages
      .filter((page) => page.slug !== "home")
      .map((page) => ({
        params: { slug: page.slug },
      }));
  }
}

/**
 * Create singleton instance
 */
export const siteGenerator = new SiteGenerator({
  templatesDir: path.join(process.cwd(), "src/templates"),
  outputDir: path.join(process.cwd(), ".next"),
});

/**
 * Utility: Load and parse site configuration
 */
export async function loadSiteConfig(
  templatePath: string
): Promise<SiteConfig> {
  return siteGenerator.loadSiteConfig(templatePath);
}

/**
 * Utility: Get page by slug from config
 */
export function getPageConfig(
  config: SiteConfig,
  slug: string
): PageConfig | null {
  return siteGenerator.getPageBySlug(config, slug);
}

/**
 * Utility: Generate all routes from config
 */
export function getRoutes(config: SiteConfig): string[] {
  return siteGenerator.generateRoutes(config);
}
