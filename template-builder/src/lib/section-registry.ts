import { ComponentType } from 'react';
import {
  HeroCenteredImageProps,
  HeroFullWidthProps,
  HeroSplitLayoutProps,
  FeaturesThreeColumnProps,
  FeaturesDetailedProps,
  CTASimpleProps,
  CTASplitProps,
  TestimonialsGridProps,
  TestimonialsCarouselProps,
  ContactFormProps,
  ContactSplitProps,
  PricingThreeColumnProps,
  PricingComparisonProps,
  FAQAccordionProps,
  FAQTwoColumnProps,
  TeamGridProps,
  TeamCardsProps,
  StatsSimpleProps,
  StatsHighlightProps,
} from '@/types/section.types';

// Import all section components
import { HeroCenteredImage } from '@/components/sections/hero/hero-centered-image';
import { HeroFullWidth } from '@/components/sections/hero/hero-full-width';
import { HeroSplitLayout } from '@/components/sections/hero/hero-split-layout';
import { FeaturesThreeColumn } from '@/components/sections/features/features-three-column';
import { FeaturesDetailed } from '@/components/sections/features/features-detailed';
import { CTASimple } from '@/components/sections/cta/cta-simple';
import { CTASplit } from '@/components/sections/cta/cta-split';
import { TestimonialsGrid } from '@/components/sections/testimonials/testimonials-grid';
import { TestimonialsCarousel } from '@/components/sections/testimonials/testimonials-carousel';
import { ContactForm } from '@/components/sections/contact/contact-form';
import { ContactSplit } from '@/components/sections/contact/contact-split';
import { PricingThreeColumn } from '@/components/sections/pricing/pricing-three-column';
import { PricingComparison } from '@/components/sections/pricing/pricing-comparison';
import { FAQAccordion } from '@/components/sections/faq/faq-accordion';
import { FAQTwoColumn } from '@/components/sections/faq/faq-two-column';
import { TeamGrid } from '@/components/sections/team/team-grid';
import { TeamCards } from '@/components/sections/team/team-cards';
import { StatsSimple } from '@/components/sections/stats/stats-simple';
import { StatsHighlight } from '@/components/sections/stats/stats-highlight';

// Section type enum
export enum SectionType {
  // Hero sections
  HERO_CENTERED_IMAGE = 'hero-centered-image',
  HERO_FULL_WIDTH = 'hero-full-width',
  HERO_SPLIT_LAYOUT = 'hero-split-layout',

  // Features sections
  FEATURES_THREE_COLUMN = 'features-three-column',
  FEATURES_DETAILED = 'features-detailed',

  // CTA sections
  CTA_SIMPLE = 'cta-simple',
  CTA_SPLIT = 'cta-split',

  // Testimonials sections
  TESTIMONIALS_GRID = 'testimonials-grid',
  TESTIMONIALS_CAROUSEL = 'testimonials-carousel',

  // Contact sections
  CONTACT_FORM = 'contact-form',
  CONTACT_SPLIT = 'contact-split',

  // Pricing sections
  PRICING_THREE_COLUMN = 'pricing-three-column',
  PRICING_COMPARISON = 'pricing-comparison',

  // FAQ sections
  FAQ_ACCORDION = 'faq-accordion',
  FAQ_TWO_COLUMN = 'faq-two-column',

  // Team sections
  TEAM_GRID = 'team-grid',
  TEAM_CARDS = 'team-cards',

  // Stats sections
  STATS_SIMPLE = 'stats-simple',
  STATS_HIGHLIGHT = 'stats-highlight',
}

// Section props type map
export type SectionPropsMap = {
  [SectionType.HERO_CENTERED_IMAGE]: HeroCenteredImageProps;
  [SectionType.HERO_FULL_WIDTH]: HeroFullWidthProps;
  [SectionType.HERO_SPLIT_LAYOUT]: HeroSplitLayoutProps;
  [SectionType.FEATURES_THREE_COLUMN]: FeaturesThreeColumnProps;
  [SectionType.FEATURES_DETAILED]: FeaturesDetailedProps;
  [SectionType.CTA_SIMPLE]: CTASimpleProps;
  [SectionType.CTA_SPLIT]: CTASplitProps;
  [SectionType.TESTIMONIALS_GRID]: TestimonialsGridProps;
  [SectionType.TESTIMONIALS_CAROUSEL]: TestimonialsCarouselProps;
  [SectionType.CONTACT_FORM]: ContactFormProps;
  [SectionType.CONTACT_SPLIT]: ContactSplitProps;
  [SectionType.PRICING_THREE_COLUMN]: PricingThreeColumnProps;
  [SectionType.PRICING_COMPARISON]: PricingComparisonProps;
  [SectionType.FAQ_ACCORDION]: FAQAccordionProps;
  [SectionType.FAQ_TWO_COLUMN]: FAQTwoColumnProps;
  [SectionType.TEAM_GRID]: TeamGridProps;
  [SectionType.TEAM_CARDS]: TeamCardsProps;
  [SectionType.STATS_SIMPLE]: StatsSimpleProps;
  [SectionType.STATS_HIGHLIGHT]: StatsHighlightProps;
};

// Section component registry
export const sectionRegistry: {
  [K in SectionType]: ComponentType<SectionPropsMap[K]>;
} = {
  [SectionType.HERO_CENTERED_IMAGE]: HeroCenteredImage,
  [SectionType.HERO_FULL_WIDTH]: HeroFullWidth,
  [SectionType.HERO_SPLIT_LAYOUT]: HeroSplitLayout,
  [SectionType.FEATURES_THREE_COLUMN]: FeaturesThreeColumn,
  [SectionType.FEATURES_DETAILED]: FeaturesDetailed,
  [SectionType.CTA_SIMPLE]: CTASimple,
  [SectionType.CTA_SPLIT]: CTASplit,
  [SectionType.TESTIMONIALS_GRID]: TestimonialsGrid,
  [SectionType.TESTIMONIALS_CAROUSEL]: TestimonialsCarousel,
  [SectionType.CONTACT_FORM]: ContactForm,
  [SectionType.CONTACT_SPLIT]: ContactSplit,
  [SectionType.PRICING_THREE_COLUMN]: PricingThreeColumn,
  [SectionType.PRICING_COMPARISON]: PricingComparison,
  [SectionType.FAQ_ACCORDION]: FAQAccordion,
  [SectionType.FAQ_TWO_COLUMN]: FAQTwoColumn,
  [SectionType.TEAM_GRID]: TeamGrid,
  [SectionType.TEAM_CARDS]: TeamCards,
  [SectionType.STATS_SIMPLE]: StatsSimple,
  [SectionType.STATS_HIGHLIGHT]: StatsHighlight,
};

// Section metadata for documentation and UI
export interface SectionMetadata {
  type: SectionType;
  name: string;
  category: 'hero' | 'features' | 'cta' | 'testimonials' | 'contact' | 'pricing' | 'faq' | 'team' | 'stats';
  description: string;
  previewImage?: string;
}

export const sectionMetadata: Record<SectionType, SectionMetadata> = {
  [SectionType.HERO_CENTERED_IMAGE]: {
    type: SectionType.HERO_CENTERED_IMAGE,
    name: 'Hero - Centered Image',
    category: 'hero',
    description: 'Hero section with centered content and image below',
  },
  [SectionType.HERO_FULL_WIDTH]: {
    type: SectionType.HERO_FULL_WIDTH,
    name: 'Hero - Full Width',
    category: 'hero',
    description: 'Full-width hero with background image and overlay',
  },
  [SectionType.HERO_SPLIT_LAYOUT]: {
    type: SectionType.HERO_SPLIT_LAYOUT,
    name: 'Hero - Split Layout',
    category: 'hero',
    description: 'Split layout hero with image on left or right',
  },
  [SectionType.FEATURES_THREE_COLUMN]: {
    type: SectionType.FEATURES_THREE_COLUMN,
    name: 'Features - Three Column',
    category: 'features',
    description: 'Three-column feature grid with icons',
  },
  [SectionType.FEATURES_DETAILED]: {
    type: SectionType.FEATURES_DETAILED,
    name: 'Features - Detailed',
    category: 'features',
    description: 'Detailed features with alternating image layouts',
  },
  [SectionType.CTA_SIMPLE]: {
    type: SectionType.CTA_SIMPLE,
    name: 'CTA - Simple',
    category: 'cta',
    description: 'Simple centered call-to-action section',
  },
  [SectionType.CTA_SPLIT]: {
    type: SectionType.CTA_SPLIT,
    name: 'CTA - Split',
    category: 'cta',
    description: 'Split layout CTA with image',
  },
  [SectionType.TESTIMONIALS_GRID]: {
    type: SectionType.TESTIMONIALS_GRID,
    name: 'Testimonials - Grid',
    category: 'testimonials',
    description: 'Grid layout for multiple testimonials',
  },
  [SectionType.TESTIMONIALS_CAROUSEL]: {
    type: SectionType.TESTIMONIALS_CAROUSEL,
    name: 'Testimonials - Carousel',
    category: 'testimonials',
    description: 'Carousel for featured testimonials',
  },
  [SectionType.CONTACT_FORM]: {
    type: SectionType.CONTACT_FORM,
    name: 'Contact - Form',
    category: 'contact',
    description: 'Centered contact form',
  },
  [SectionType.CONTACT_SPLIT]: {
    type: SectionType.CONTACT_SPLIT,
    name: 'Contact - Split',
    category: 'contact',
    description: 'Split layout with contact info and form',
  },
  [SectionType.PRICING_THREE_COLUMN]: {
    type: SectionType.PRICING_THREE_COLUMN,
    name: 'Pricing - Three Column',
    category: 'pricing',
    description: 'Three-column pricing table with highlighted tier',
  },
  [SectionType.PRICING_COMPARISON]: {
    type: SectionType.PRICING_COMPARISON,
    name: 'Pricing - Comparison',
    category: 'pricing',
    description: 'Flexible pricing comparison with multiple tiers',
  },
  [SectionType.FAQ_ACCORDION]: {
    type: SectionType.FAQ_ACCORDION,
    name: 'FAQ - Accordion',
    category: 'faq',
    description: 'Interactive accordion-style FAQ section',
  },
  [SectionType.FAQ_TWO_COLUMN]: {
    type: SectionType.FAQ_TWO_COLUMN,
    name: 'FAQ - Two Column',
    category: 'faq',
    description: 'Two-column grid layout for FAQs',
  },
  [SectionType.TEAM_GRID]: {
    type: SectionType.TEAM_GRID,
    name: 'Team - Grid',
    category: 'team',
    description: 'Grid layout for team members with photos',
  },
  [SectionType.TEAM_CARDS]: {
    type: SectionType.TEAM_CARDS,
    name: 'Team - Cards',
    category: 'team',
    description: 'Card-based team member showcase',
  },
  [SectionType.STATS_SIMPLE]: {
    type: SectionType.STATS_SIMPLE,
    name: 'Stats - Simple',
    category: 'stats',
    description: 'Simple statistics display with icons',
  },
  [SectionType.STATS_HIGHLIGHT]: {
    type: SectionType.STATS_HIGHLIGHT,
    name: 'Stats - Highlight',
    category: 'stats',
    description: 'Highlighted statistics with cards or inline layout',
  },
};

// Helper function to get section component by type
export function getSectionComponent<T extends SectionType>(
  type: T
): ComponentType<SectionPropsMap[T]> {
  return sectionRegistry[type];
}

// Helper function to get all sections by category
export function getSectionsByCategory(category: SectionMetadata['category']): SectionMetadata[] {
  return Object.values(sectionMetadata).filter((meta) => meta.category === category);
}

// Helper function to get all categories
export function getAllCategories(): SectionMetadata['category'][] {
  return ['hero', 'features', 'cta', 'testimonials', 'contact', 'pricing', 'faq', 'team', 'stats'];
}
