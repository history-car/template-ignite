/**
 * Theme System Types
 * Defines color presets and theme configurations for multi-page sites
 */

/**
 * Color preset for a theme
 */
export interface ColorPreset {
  primary: string;
  primaryHover: string;
  secondary: string;
  secondaryHover: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  textMuted: string;
  border: string;
  error: string;
  success: string;
  warning: string;
}

/**
 * Theme configuration
 */
export interface ThemeConfig {
  id: string;
  name: string;
  description?: string;
  colors: ColorPreset;
  fonts?: {
    heading?: string;
    body?: string;
  };
  borderRadius?: 'none' | 'small' | 'medium' | 'large' | 'full';
  shadow?: 'none' | 'small' | 'medium' | 'large';
}

/**
 * Built-in theme IDs
 */
export type ThemeId =
  | 'professional-blue'
  | 'modern-purple'
  | 'minimal-gray'
  | 'warm-orange'
  | 'fresh-green'
  | 'elegant-navy'
  | 'medical-teal'
  | 'legal-burgundy'
  | 'tech-cyan'
  | 'creative-pink';

/**
 * Theme preset registry
 */
export type ThemeRegistry = Record<ThemeId, ThemeConfig>;
