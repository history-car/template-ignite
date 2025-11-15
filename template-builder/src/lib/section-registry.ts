import { ComponentType } from 'react';
import {
  BaseSectionProps,
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
};

// Section metadata for documentation and UI
export interface SectionMetadata {
  type: SectionType;
  name: string;
  category: 'hero' | 'features' | 'cta' | 'testimonials' | 'contact';
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
  return ['hero', 'features', 'cta', 'testimonials', 'contact'];
}
