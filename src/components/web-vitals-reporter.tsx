/**
 * Web Vitals Reporter Component
 * Uses Next.js built-in web vitals reporting
 */

'use client';

import { useReportWebVitals } from 'next/web-vitals';
import { reportWebVitals } from '@/lib/performance';

export function WebVitalsReporter() {
  useReportWebVitals(reportWebVitals);

  return null;
}
