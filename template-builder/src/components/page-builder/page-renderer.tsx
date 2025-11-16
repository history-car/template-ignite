import { PageConfig, SectionConfig } from "@/types/page.types";
import { SectionType } from "@/lib/section-registry";
import {
  HeroCenteredImage,
  HeroFullWidth,
  HeroSplitLayout,
  FeaturesThreeColumn,
  FeaturesDetailed,
  CTASimple,
  CTASplit,
  TestimonialsGrid,
  TestimonialsCarousel,
  ContactForm,
  ContactSplit,
  PricingThreeColumn,
  PricingComparison,
  FAQAccordion,
  FAQTwoColumn,
  TeamGrid,
  TeamCards,
  StatsSimple,
  StatsHighlight,
} from "@/components/sections";

interface PageRendererProps {
  pageConfig: PageConfig;
}

export function PageRenderer({ pageConfig }: PageRendererProps) {
  return (
    <main>
      {pageConfig.sections.map((section) => (
        <SectionRenderer key={section.id} section={section} />
      ))}
    </main>
  );
}

// Section renderer for individual sections
interface SectionRendererProps {
  section: SectionConfig;
}

/**
 * Type-safe section renderer with explicit type narrowing.
 * Each case is handled explicitly, allowing TypeScript to infer
 * the correct props type without any type assertions.
 */
export function SectionRenderer({ section }: SectionRendererProps) {
  // Explicit type narrowing - TypeScript validates props for each case
  switch (section.type) {
    case SectionType.HERO_CENTERED_IMAGE:
      return <HeroCenteredImage {...section.props} />;
    case SectionType.HERO_FULL_WIDTH:
      return <HeroFullWidth {...section.props} />;
    case SectionType.HERO_SPLIT_LAYOUT:
      return <HeroSplitLayout {...section.props} />;
    case SectionType.FEATURES_THREE_COLUMN:
      return <FeaturesThreeColumn {...section.props} />;
    case SectionType.FEATURES_DETAILED:
      return <FeaturesDetailed {...section.props} />;
    case SectionType.CTA_SIMPLE:
      return <CTASimple {...section.props} />;
    case SectionType.CTA_SPLIT:
      return <CTASplit {...section.props} />;
    case SectionType.TESTIMONIALS_GRID:
      return <TestimonialsGrid {...section.props} />;
    case SectionType.TESTIMONIALS_CAROUSEL:
      return <TestimonialsCarousel {...section.props} />;
    case SectionType.CONTACT_FORM:
      return <ContactForm {...section.props} />;
    case SectionType.CONTACT_SPLIT:
      return <ContactSplit {...section.props} />;
    case SectionType.PRICING_THREE_COLUMN:
      return <PricingThreeColumn {...section.props} />;
    case SectionType.PRICING_COMPARISON:
      return <PricingComparison {...section.props} />;
    case SectionType.FAQ_ACCORDION:
      return <FAQAccordion {...section.props} />;
    case SectionType.FAQ_TWO_COLUMN:
      return <FAQTwoColumn {...section.props} />;
    case SectionType.TEAM_GRID:
      return <TeamGrid {...section.props} />;
    case SectionType.TEAM_CARDS:
      return <TeamCards {...section.props} />;
    case SectionType.STATS_SIMPLE:
      return <StatsSimple {...section.props} />;
    case SectionType.STATS_HIGHLIGHT:
      return <StatsHighlight {...section.props} />;
    default:
      return null;
  }
}
