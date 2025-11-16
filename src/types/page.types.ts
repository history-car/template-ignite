/**
 * Page Configuration Types
 * Individual page definitions within a site
 */

import { SectionConfig } from './section.types';

export interface PageConfig {
  path: string; // e.g., '/', '/about', '/services'
  title: string;
  description?: string;
  keywords?: string[];
  sections: SectionConfig[];
  layout?: 'default' | 'full-width' | 'centered';
  showHeader?: boolean; // Default: true
  showFooter?: boolean; // Default: true
}

export interface PageMetadata {
  title: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  canonicalUrl?: string;
}

export interface PageProps {
  params: {
    slug?: string[];
  };
}
