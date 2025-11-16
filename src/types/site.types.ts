/**
 * Site Configuration Types
 * Multi-page site generation system
 */

import { PageConfig } from './page.types';

export interface SiteConfig {
  site: SiteMetadata;
  navigation: NavigationConfig;
  footer?: FooterConfig;
  theme?: ThemeConfig;
  pages: PageConfig[];
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

export interface ThemeConfig {
  preset?: string; // e.g., 'professional-blue', 'medical-green', 'restaurant-warm'
  colors?: {
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
}
