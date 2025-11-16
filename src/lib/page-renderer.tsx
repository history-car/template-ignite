/**
 * Page Renderer - Dynamically renders sections based on configuration
 */

import { SectionConfig } from '@/types/section.types';
import * as Sections from '@/components/sections';

/**
 * Section type to component mapping
 */
const sectionComponents: Record<string, any> = {
  // Hero sections
  HeroCenteredImage: Sections.HeroCenteredImage,
  HeroFullWidth: Sections.HeroFullWidth,
  HeroSplitLayout: Sections.HeroSplitLayout,

  // Features sections
  FeaturesThreeColumn: Sections.FeaturesThreeColumn,
  FeaturesDetailed: Sections.FeaturesDetailed,

  // CTA sections
  CTASimple: Sections.CTASimple,
  CTASplit: Sections.CTASplit,

  // Testimonials sections
  TestimonialsGrid: Sections.TestimonialsGrid,
  TestimonialsCarousel: Sections.TestimonialsCarousel,

  // Contact sections
  ContactForm: Sections.ContactForm,
  ContactSplit: Sections.ContactSplit,

  // Pricing sections
  PricingThreeColumn: Sections.PricingThreeColumn,
  PricingComparison: Sections.PricingComparison,

  // FAQ sections
  FAQAccordion: Sections.FAQAccordion,
  FAQTwoColumn: Sections.FAQTwoColumn,

  // Team sections
  TeamGrid: Sections.TeamGrid,
  TeamCards: Sections.TeamCards,

  // Stats sections
  StatsSimple: Sections.StatsSimple,
  StatsHighlight: Sections.StatsHighlight,
};

export interface RenderSectionProps {
  section: SectionConfig;
  index?: number;
}

/**
 * Renders a single section component based on configuration
 */
export function RenderSection({ section, index }: RenderSectionProps) {
  const Component = sectionComponents[section.variant];

  if (!Component) {
    console.warn(`Section variant "${section.variant}" not found`);
    return null;
  }

  return (
    <Component
      key={`section-${index}-${section.variant}`}
      content={section.content}
      theme={section.theme}
    />
  );
}

export interface RenderSectionsProps {
  sections: SectionConfig[];
}

/**
 * Renders multiple sections from a configuration array
 */
export function RenderSections({ sections }: RenderSectionsProps) {
  return (
    <>
      {sections.map((section, index) => (
        <RenderSection key={index} section={section} index={index} />
      ))}
    </>
  );
}
