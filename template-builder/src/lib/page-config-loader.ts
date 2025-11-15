import { PageConfig } from '@/types/page.types';
import { SectionType } from './section-registry';

/**
 * Validates a page configuration object
 */
export function validatePageConfig(config: unknown): config is PageConfig {
  if (typeof config !== 'object' || config === null) {
    return false;
  }

  const pageConfig = config as Partial<PageConfig>;

  // Required fields
  if (!pageConfig.id || typeof pageConfig.id !== 'string') {
    return false;
  }
  if (!pageConfig.title || typeof pageConfig.title !== 'string') {
    return false;
  }
  if (!pageConfig.path || typeof pageConfig.path !== 'string') {
    return false;
  }
  if (!Array.isArray(pageConfig.sections)) {
    return false;
  }

  // Validate sections
  for (const section of pageConfig.sections) {
    if (!section.id || typeof section.id !== 'string') {
      return false;
    }
    if (!section.type || !Object.values(SectionType).includes(section.type)) {
      return false;
    }
    if (!section.props || typeof section.props !== 'object') {
      return false;
    }
  }

  return true;
}

/**
 * Loads and validates a page configuration from JSON
 */
export async function loadPageConfigFromJSON(jsonPath: string): Promise<PageConfig> {
  try {
    const response = await fetch(jsonPath);

    if (!response.ok) {
      throw new Error(`Failed to load page config from ${jsonPath}: ${response.statusText}`);
    }

    const json = await response.json();

    if (!validatePageConfig(json)) {
      throw new Error(`Invalid page configuration in ${jsonPath}`);
    }

    return json;
  } catch (error) {
    throw new Error(`Error loading page config: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

/**
 * Parses a page configuration from JSON string
 */
export function parsePageConfigJSON(jsonString: string): PageConfig {
  try {
    const json = JSON.parse(jsonString);

    if (!validatePageConfig(json)) {
      throw new Error('Invalid page configuration JSON');
    }

    return json;
  } catch (error) {
    throw new Error(`Error parsing page config JSON: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

/**
 * Converts a page configuration to JSON string
 */
export function stringifyPageConfig(config: PageConfig, pretty: boolean = false): string {
  return JSON.stringify(config, null, pretty ? 2 : 0);
}

/**
 * Creates a minimal page configuration template
 */
export function createPageConfigTemplate(
  id: string,
  title: string,
  path: string
): PageConfig {
  return {
    id,
    title,
    path,
    sections: [],
  };
}
