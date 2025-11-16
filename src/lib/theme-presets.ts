/**
 * Built-in Theme Presets
 * 10 professionally designed color schemes for different industries
 */

import { ThemeConfig, ThemeRegistry } from '@/types/theme.types';

/**
 * Professional Blue Theme
 * Best for: Law firms, consulting, corporate
 */
const professionalBlue: ThemeConfig = {
  id: 'professional-blue',
  name: 'Professional Blue',
  description: 'Classic and trustworthy - perfect for law firms and corporate sites',
  colors: {
    primary: '#2563eb', // Blue-600
    primaryHover: '#1d4ed8', // Blue-700
    secondary: '#64748b', // Slate-500
    secondaryHover: '#475569', // Slate-600
    accent: '#0891b2', // Cyan-600
    background: '#ffffff',
    surface: '#f8fafc', // Slate-50
    text: '#0f172a', // Slate-900
    textMuted: '#64748b', // Slate-500
    border: '#e2e8f0', // Slate-200
    error: '#dc2626', // Red-600
    success: '#16a34a', // Green-600
    warning: '#ea580c', // Orange-600
  },
  borderRadius: 'small',
  shadow: 'medium',
};

/**
 * Modern Purple Theme
 * Best for: Tech startups, SaaS, innovation
 */
const modernPurple: ThemeConfig = {
  id: 'modern-purple',
  name: 'Modern Purple',
  description: 'Bold and innovative - ideal for tech and SaaS companies',
  colors: {
    primary: '#9333ea', // Purple-600
    primaryHover: '#7e22ce', // Purple-700
    secondary: '#6366f1', // Indigo-500
    secondaryHover: '#4f46e5', // Indigo-600
    accent: '#ec4899', // Pink-500
    background: '#ffffff',
    surface: '#faf5ff', // Purple-50
    text: '#1e1b4b', // Indigo-950
    textMuted: '#6b7280', // Gray-500
    border: '#e9d5ff', // Purple-200
    error: '#dc2626',
    success: '#16a34a',
    warning: '#ea580c',
  },
  borderRadius: 'medium',
  shadow: 'large',
};

/**
 * Minimal Gray Theme
 * Best for: Portfolios, minimalist brands, architects
 */
const minimalGray: ThemeConfig = {
  id: 'minimal-gray',
  name: 'Minimal Gray',
  description: 'Clean and sophisticated - perfect for minimalist brands',
  colors: {
    primary: '#18181b', // Zinc-900
    primaryHover: '#09090b', // Zinc-950
    secondary: '#71717a', // Zinc-500
    secondaryHover: '#52525b', // Zinc-600
    accent: '#3f3f46', // Zinc-700
    background: '#ffffff',
    surface: '#fafafa', // Zinc-50
    text: '#09090b', // Zinc-950
    textMuted: '#71717a', // Zinc-500
    border: '#e4e4e7', // Zinc-200
    error: '#dc2626',
    success: '#16a34a',
    warning: '#ea580c',
  },
  borderRadius: 'none',
  shadow: 'small',
};

/**
 * Warm Orange Theme
 * Best for: Restaurants, cafes, hospitality
 */
const warmOrange: ThemeConfig = {
  id: 'warm-orange',
  name: 'Warm Orange',
  description: 'Inviting and energetic - great for restaurants and cafes',
  colors: {
    primary: '#ea580c', // Orange-600
    primaryHover: '#c2410c', // Orange-700
    secondary: '#f59e0b', // Amber-500
    secondaryHover: '#d97706', // Amber-600
    accent: '#dc2626', // Red-600
    background: '#ffffff',
    surface: '#fff7ed', // Orange-50
    text: '#1c1917', // Stone-900
    textMuted: '#78716c', // Stone-500
    border: '#fed7aa', // Orange-200
    error: '#dc2626',
    success: '#16a34a',
    warning: '#f59e0b',
  },
  borderRadius: 'large',
  shadow: 'medium',
};

/**
 * Fresh Green Theme
 * Best for: Health, wellness, environmental services
 */
const freshGreen: ThemeConfig = {
  id: 'fresh-green',
  name: 'Fresh Green',
  description: 'Natural and vibrant - ideal for health and wellness',
  colors: {
    primary: '#16a34a', // Green-600
    primaryHover: '#15803d', // Green-700
    secondary: '#059669', // Emerald-600
    secondaryHover: '#047857', // Emerald-700
    accent: '#0d9488', // Teal-600
    background: '#ffffff',
    surface: '#f0fdf4', // Green-50
    text: '#14532d', // Green-950
    textMuted: '#6b7280', // Gray-500
    border: '#bbf7d0', // Green-200
    error: '#dc2626',
    success: '#16a34a',
    warning: '#ea580c',
  },
  borderRadius: 'medium',
  shadow: 'medium',
};

/**
 * Elegant Navy Theme
 * Best for: Finance, insurance, premium services
 */
const elegantNavy: ThemeConfig = {
  id: 'elegant-navy',
  name: 'Elegant Navy',
  description: 'Sophisticated and premium - perfect for finance and insurance',
  colors: {
    primary: '#1e40af', // Blue-800
    primaryHover: '#1e3a8a', // Blue-900
    secondary: '#475569', // Slate-600
    secondaryHover: '#334155', // Slate-700
    accent: '#0891b2', // Cyan-600
    background: '#ffffff',
    surface: '#f1f5f9', // Slate-100
    text: '#0f172a', // Slate-900
    textMuted: '#64748b', // Slate-500
    border: '#cbd5e1', // Slate-300
    error: '#dc2626',
    success: '#16a34a',
    warning: '#ea580c',
  },
  borderRadius: 'small',
  shadow: 'large',
};

/**
 * Medical Teal Theme
 * Best for: Medical clinics, dental, healthcare
 */
const medicalTeal: ThemeConfig = {
  id: 'medical-teal',
  name: 'Medical Teal',
  description: 'Clean and trustworthy - ideal for medical and healthcare',
  colors: {
    primary: '#0d9488', // Teal-600
    primaryHover: '#0f766e', // Teal-700
    secondary: '#06b6d4', // Cyan-500
    secondaryHover: '#0891b2', // Cyan-600
    accent: '#3b82f6', // Blue-500
    background: '#ffffff',
    surface: '#f0fdfa', // Teal-50
    text: '#134e4a', // Teal-950
    textMuted: '#6b7280', // Gray-500
    border: '#99f6e4', // Teal-200
    error: '#dc2626',
    success: '#16a34a',
    warning: '#ea580c',
  },
  borderRadius: 'medium',
  shadow: 'small',
};

/**
 * Legal Burgundy Theme
 * Best for: Law firms, legal services, traditional professions
 */
const legalBurgundy: ThemeConfig = {
  id: 'legal-burgundy',
  name: 'Legal Burgundy',
  description: 'Traditional and authoritative - perfect for legal services',
  colors: {
    primary: '#991b1b', // Red-800
    primaryHover: '#7f1d1d', // Red-900
    secondary: '#78716c', // Stone-500
    secondaryHover: '#57534e', // Stone-600
    accent: '#b45309', // Amber-700
    background: '#ffffff',
    surface: '#fafaf9', // Stone-50
    text: '#1c1917', // Stone-900
    textMuted: '#78716c', // Stone-500
    border: '#e7e5e4', // Stone-200
    error: '#dc2626',
    success: '#16a34a',
    warning: '#ea580c',
  },
  borderRadius: 'small',
  shadow: 'medium',
};

/**
 * Tech Cyan Theme
 * Best for: Tech companies, software, digital services
 */
const techCyan: ThemeConfig = {
  id: 'tech-cyan',
  name: 'Tech Cyan',
  description: 'Modern and digital - great for tech and software companies',
  colors: {
    primary: '#0891b2', // Cyan-600
    primaryHover: '#0e7490', // Cyan-700
    secondary: '#3b82f6', // Blue-500
    secondaryHover: '#2563eb', // Blue-600
    accent: '#8b5cf6', // Violet-500
    background: '#ffffff',
    surface: '#ecfeff', // Cyan-50
    text: '#0f172a', // Slate-900
    textMuted: '#64748b', // Slate-500
    border: '#a5f3fc', // Cyan-200
    error: '#dc2626',
    success: '#16a34a',
    warning: '#ea580c',
  },
  borderRadius: 'large',
  shadow: 'large',
};

/**
 * Creative Pink Theme
 * Best for: Creative agencies, design studios, fashion
 */
const creativePink: ThemeConfig = {
  id: 'creative-pink',
  name: 'Creative Pink',
  description: 'Bold and creative - ideal for design and creative services',
  colors: {
    primary: '#ec4899', // Pink-500
    primaryHover: '#db2777', // Pink-600
    secondary: '#a855f7', // Purple-500
    secondaryHover: '#9333ea', // Purple-600
    accent: '#f59e0b', // Amber-500
    background: '#ffffff',
    surface: '#fdf2f8', // Pink-50
    text: '#1e1b4b', // Indigo-950
    textMuted: '#6b7280', // Gray-500
    border: '#fbcfe8', // Pink-200
    error: '#dc2626',
    success: '#16a34a',
    warning: '#ea580c',
  },
  borderRadius: 'full',
  shadow: 'large',
};

/**
 * Theme Registry
 * All available theme presets
 */
export const themeRegistry: ThemeRegistry = {
  'professional-blue': professionalBlue,
  'modern-purple': modernPurple,
  'minimal-gray': minimalGray,
  'warm-orange': warmOrange,
  'fresh-green': freshGreen,
  'elegant-navy': elegantNavy,
  'medical-teal': medicalTeal,
  'legal-burgundy': legalBurgundy,
  'tech-cyan': techCyan,
  'creative-pink': creativePink,
};

/**
 * Get theme by ID
 */
export function getTheme(id: string): ThemeConfig | null {
  return themeRegistry[id as keyof ThemeRegistry] || null;
}

/**
 * Get all available themes
 */
export function getAllThemes(): ThemeConfig[] {
  return Object.values(themeRegistry);
}

/**
 * Get theme IDs
 */
export function getThemeIds(): string[] {
  return Object.keys(themeRegistry);
}
