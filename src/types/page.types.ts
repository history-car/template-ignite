/**
 * Page Configuration Types
 * Individual page definitions within a site
 */

import { SectionConfig } from './section.types';

export interface PageConfig {
  slug: string; // URL slug: 'home', 'about', 'services'
  metadata?: PageMetadata;
  sections: SectionConfig[];
  layout?: 'default' | 'full-width' | 'centered';
  showHeader?: boolean; // Default: true
  showFooter?: boolean; // Default: true
}

export interface PageMetadata {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  canonicalUrl?: string;
  navigation?: boolean; // Include in auto-generated navigation
  priority?: number; // SEO priority (0.0-1.0)
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
}

export interface PageProps {
  params: {
    slug?: string[];
  };
}
