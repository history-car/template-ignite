import { PageConfig } from '@/types/page.types';
import { landingPageExample } from './landing-page-example';

// Export all page configurations
export const pageConfigurations: Record<string, PageConfig> = {
  'landing-example': landingPageExample,
};

// Helper to get page config by ID
export function getPageConfig(pageId: string): PageConfig | undefined {
  return pageConfigurations[pageId];
}

// Helper to get all page configs
export function getAllPageConfigs(): PageConfig[] {
  return Object.values(pageConfigurations);
}

// Helper to get page config by path
export function getPageConfigByPath(path: string): PageConfig | undefined {
  return Object.values(pageConfigurations).find((config) => config.path === path);
}
