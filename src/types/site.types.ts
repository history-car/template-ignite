/**
 * Site Configuration Types
 * Multi-page site generation system
 */

import { PageConfig } from './page.types';
import { ThemeId } from './theme.types';

export interface SiteConfig {
  site: SiteMetadata;
  navigation: NavigationConfig;
  footer?: FooterConfig;
  theme?: SiteThemeConfig;
  pages: PageConfig[];
}

/**
 * Site-specific theme configuration
 * Can use preset or custom colors
 */
export interface SiteThemeConfig {
  preset?: ThemeId; // Use built-in theme preset
  customColors?: {
    primary?: string;
    secondary?: string;
    accent?: string;
    background?: string;
    text?: string;
  };
  fonts?: {
    heading?: string;
    body?: string;
  };
  borderRadius?: 'none' | 'small' | 'medium' | 'large' | 'full';
}

export interface SiteMetadata {
  name: string;
  domain?: string;
  description?: string;
  logo?: LogoConfig;
  favicon?: string;
  language?: string;
  author?: string;
}

export interface LogoConfig {
  src?: string;
  alt: string;
  width?: number;
  height?: number;
  text?: string; // Text-based logo fallback
}

export interface NavigationConfig {
  logo?: LogoConfig;
  menu: MenuItem[];
  cta?: {
    text: string;
    href: string;
    variant?: 'primary' | 'secondary' | 'outline';
  };
}

export interface MenuItem {
  label: string;
  href: string;
  children?: MenuItem[]; // For dropdown menus
}

export interface FooterConfig {
  sections?: FooterSection[];
  copyright?: string;
  social?: SocialLink[];
}

export interface FooterSection {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}

export interface SocialLink {
  platform: 'facebook' | 'twitter' | 'instagram' | 'linkedin' | 'youtube' | 'github';
  url: string;
}

// Legacy ThemeConfig - replaced by SiteThemeConfig above
// Kept for backward compatibility
export interface ThemeConfig extends SiteThemeConfig {}
