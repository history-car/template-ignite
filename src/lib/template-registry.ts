/**
 * Template Registry
 * Central system for managing and loading site templates
 */

export interface TemplateInfo {
  id: string;
  name: string;
  description: string;
  industry: string;
  path: string;
  theme: string;
  pageCount: number;
}

/**
 * Available site templates
 * Add new templates here as they are created
 */
export const TEMPLATE_REGISTRY: Record<string, TemplateInfo> = {
  'law-firm': {
    id: 'law-firm',
    name: 'Law Firm Professional',
    description: 'Professional legal services website with practice areas and team showcase',
    industry: 'Legal',
    path: './src/templates/sites/law-firm-professional.yaml',
    theme: 'legal-burgundy',
    pageCount: 4,
  },
  'medical-clinic': {
    id: 'medical-clinic',
    name: 'Medical Clinic Modern',
    description: 'Modern healthcare website with services, doctors, and patient resources',
    industry: 'Healthcare',
    path: './src/templates/sites/medical-clinic-modern.yaml',
    theme: 'medical-teal',
    pageCount: 4,
  },
  'restaurant': {
    id: 'restaurant',
    name: 'Restaurant Elegant',
    description: 'Fine dining restaurant with menu showcase and reservation system',
    industry: 'Hospitality',
    path: './src/templates/sites/restaurant-elegant.yaml',
    theme: 'warm-orange',
    pageCount: 3,
  },
};

/**
 * Default template to use if none specified
 */
const DEFAULT_TEMPLATE = 'law-firm';

/**
 * Get active template ID from environment variable
 * Falls back to default if not set or invalid
 */
export function getActiveTemplateId(): string {
  const envTemplate = process.env.NEXT_PUBLIC_ACTIVE_TEMPLATE;

  // If no env var set, use default
  if (!envTemplate) {
    return DEFAULT_TEMPLATE;
  }

  // Validate template exists in registry
  if (!TEMPLATE_REGISTRY[envTemplate]) {
    console.warn(
      `Template "${envTemplate}" not found in registry. Using default: ${DEFAULT_TEMPLATE}`
    );
    return DEFAULT_TEMPLATE;
  }

  return envTemplate;
}

/**
 * Get active template configuration
 */
export function getActiveTemplate(): TemplateInfo {
  const templateId = getActiveTemplateId();
  return TEMPLATE_REGISTRY[templateId];
}

/**
 * Get active template path
 * This is the path used by loadSiteConfig
 */
export function getActiveTemplatePath(): string {
  return getActiveTemplate().path;
}

/**
 * Get all available templates
 */
export function getAllTemplates(): TemplateInfo[] {
  return Object.values(TEMPLATE_REGISTRY);
}

/**
 * Get template by ID
 */
export function getTemplateById(id: string): TemplateInfo | null {
  return TEMPLATE_REGISTRY[id] || null;
}

/**
 * Check if template exists
 */
export function hasTemplate(id: string): boolean {
  return id in TEMPLATE_REGISTRY;
}
