import { SectionType } from './section-registry';
import type { SectionConfig } from '@/types/page.types';
import type {
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

/**
 * JSON Template Types
 * These match the structure of our JSON template files
 */
export interface JSONTemplateSection {
  type: string;
  variant: string;
  content: Record<string, unknown>;
}

export interface JSONTemplate {
  page: {
    title: string;
    description: string;
  };
  sections: JSONTemplateSection[];
}

/**
 * Transform JSON CTA structure to TypeScript interface
 */
function transformCTA(jsonCTA: Record<string, unknown>): {
  text: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'outline';
} {
  // Handle nested primary/secondary structure
  if ('primary' in jsonCTA) {
    const primary = jsonCTA.primary as Record<string, unknown>;
    return {
      text: primary.text as string,
      href: primary.href as string,
      variant: 'primary',
    };
  }

  // Handle direct structure
  return {
    text: jsonCTA.text as string,
    href: jsonCTA.href as string,
    variant: (jsonCTA.variant as 'primary' | 'secondary' | 'outline') || 'primary',
  };
}

/**
 * Transform JSON secondary CTA if exists
 */
function transformSecondaryCTA(
  jsonCTA: Record<string, unknown>
): { text: string; href: string } | undefined {
  if ('secondary' in jsonCTA) {
    const secondary = jsonCTA.secondary as Record<string, unknown>;
    return {
      text: secondary.text as string,
      href: secondary.href as string,
    };
  }
  return undefined;
}

/**
 * Type-safe section transformers
 */

function transformHeroCenteredImage(content: Record<string, unknown>): HeroCenteredImageProps {
  const jsonCTA = content.cta as Record<string, unknown>;

  return {
    content: {
      headline: content.headline as string,
      subheadline: content.subheadline as string | undefined,
      description: content.description as string | undefined,
      cta: transformCTA(jsonCTA),
      secondaryCta: transformSecondaryCTA(jsonCTA),
      image: content.image as { src: string; alt: string; width?: number; height?: number },
    },
  };
}

function transformHeroFullWidth(content: Record<string, unknown>): HeroFullWidthProps {
  const jsonCTA = content.cta as Record<string, unknown>;

  return {
    content: {
      headline: content.headline as string,
      subheadline: content.subheadline as string | undefined,
      description: content.description as string | undefined,
      cta: transformCTA(jsonCTA),
      secondaryCta: transformSecondaryCTA(jsonCTA),
      backgroundImage: content.backgroundImage as {
        src: string;
        alt: string;
        overlay?: 'dark' | 'light' | 'none';
        overlayOpacity?: number;
      },
    },
  };
}

function transformHeroSplitLayout(content: Record<string, unknown>): HeroSplitLayoutProps {
  const jsonCTA = content.cta as Record<string, unknown>;

  return {
    content: {
      headline: content.headline as string,
      subheadline: content.subheadline as string | undefined,
      description: content.description as string | undefined,
      cta: transformCTA(jsonCTA),
      secondaryCta: transformSecondaryCTA(jsonCTA),
      image: content.image as { src: string; alt: string; width?: number; height?: number },
      imagePosition: (content.imagePosition as 'left' | 'right') || 'right',
    },
  };
}

function transformFeaturesThreeColumn(content: Record<string, unknown>): FeaturesThreeColumnProps {
  return {
    content: {
      sectionTitle: content.sectionTitle as string | undefined,
      sectionDescription: content.sectionDescription as string | undefined,
      features: content.features as [
        { icon?: string; title: string; description: string },
        { icon?: string; title: string; description: string },
        { icon?: string; title: string; description: string }
      ],
    },
  };
}

function transformFeaturesDetailed(content: Record<string, unknown>): FeaturesDetailedProps {
  return {
    content: {
      sectionTitle: content.sectionTitle as string | undefined,
      sectionDescription: content.sectionDescription as string | undefined,
      features: content.features as Array<{
        icon?: string;
        title: string;
        description: string;
        details?: string[];
        image?: { src: string; alt: string; width?: number; height?: number };
      }>,
    },
  };
}

function transformCTASimple(content: Record<string, unknown>): CTASimpleProps {
  const jsonCTA = content.cta as Record<string, unknown>;

  return {
    content: {
      headline: content.headline as string,
      description: content.description as string | undefined,
      cta: transformCTA(jsonCTA),
    },
  };
}

function transformCTASplit(content: Record<string, unknown>): CTASplitProps {
  const jsonCTA = content.cta as Record<string, unknown>;

  return {
    content: {
      headline: content.headline as string,
      description: content.description as string | undefined,
      cta: transformCTA(jsonCTA),
      secondaryCta: transformSecondaryCTA(jsonCTA),
      image: content.image as { src: string; alt: string; width?: number; height?: number },
      imagePosition: (content.imagePosition as 'left' | 'right') || 'right',
    },
  };
}

function transformTestimonialsGrid(content: Record<string, unknown>): TestimonialsGridProps {
  return {
    content: {
      sectionTitle: content.sectionTitle as string | undefined,
      sectionDescription: content.sectionDescription as string | undefined,
      testimonials: content.testimonials as Array<{
        quote: string;
        author: string;
        role?: string;
        company?: string;
        image?: { src: string; alt: string };
        rating?: number;
      }>,
    },
  };
}

function transformTestimonialsCarousel(
  content: Record<string, unknown>
): TestimonialsCarouselProps {
  return {
    content: {
      sectionTitle: content.sectionTitle as string | undefined,
      sectionDescription: content.sectionDescription as string | undefined,
      testimonials: content.testimonials as Array<{
        quote: string;
        author: string;
        role?: string;
        company?: string;
        image?: { src: string; alt: string };
        rating?: number;
      }>,
      autoPlay: content.autoPlay as boolean | undefined,
      autoPlayInterval: content.autoPlayInterval as number | undefined,
    },
  };
}

function transformContactForm(content: Record<string, unknown>): ContactFormProps {
  return {
    content: {
      headline: content.headline as string,
      description: content.description as string | undefined,
      fields: content.fields as Array<{
        name: string;
        type: 'text' | 'email' | 'tel' | 'textarea';
        label: string;
        placeholder?: string;
        required?: boolean;
      }>,
      submitText: content.submitText as string,
      submitAction: content.submitAction as string,
    },
  };
}

function transformContactSplit(content: Record<string, unknown>): ContactSplitProps {
  return {
    content: {
      headline: content.headline as string,
      description: content.description as string | undefined,
      contactInfo: content.contactInfo as Array<{
        icon?: string;
        label: string;
        value: string;
        href?: string;
      }>,
      form: content.form as {
        fields: Array<{
          name: string;
          type: 'text' | 'email' | 'tel' | 'textarea';
          label: string;
          placeholder?: string;
          required?: boolean;
        }>;
        submitText: string;
        submitAction: string;
      },
    },
  };
}

function transformPricingThreeColumn(content: Record<string, unknown>): PricingThreeColumnProps {
  const tiers = content.tiers as Array<Record<string, unknown>>;

  return {
    content: {
      sectionTitle: content.sectionTitle as string | undefined,
      sectionDescription: content.sectionDescription as string | undefined,
      tiers: tiers.map((tier) => ({
        name: tier.name as string,
        price: tier.price as string,
        period: tier.period as string | undefined,
        description: tier.description as string | undefined,
        features: tier.features as string[],
        cta: transformCTA(tier.cta as Record<string, unknown>),
        highlighted: tier.highlighted as boolean | undefined,
      })) as [
        {
          name: string;
          price: string;
          period?: string;
          description?: string;
          features: string[];
          cta: { text: string; href: string; variant?: 'primary' | 'secondary' | 'outline' };
          highlighted?: boolean;
        },
        {
          name: string;
          price: string;
          period?: string;
          description?: string;
          features: string[];
          cta: { text: string; href: string; variant?: 'primary' | 'secondary' | 'outline' };
          highlighted?: boolean;
        },
        {
          name: string;
          price: string;
          period?: string;
          description?: string;
          features: string[];
          cta: { text: string; href: string; variant?: 'primary' | 'secondary' | 'outline' };
          highlighted?: boolean;
        }
      ],
    },
  };
}

function transformPricingComparison(content: Record<string, unknown>): PricingComparisonProps {
  const tiers = content.tiers as Array<Record<string, unknown>>;

  return {
    content: {
      sectionTitle: content.sectionTitle as string | undefined,
      sectionDescription: content.sectionDescription as string | undefined,
      tiers: tiers.map((tier) => ({
        name: tier.name as string,
        price: tier.price as string,
        period: tier.period as string | undefined,
        description: tier.description as string | undefined,
        features: tier.features as string[],
        cta: transformCTA(tier.cta as Record<string, unknown>),
        highlighted: tier.highlighted as boolean | undefined,
      })),
      comparisonFeatures: content.comparisonFeatures as string[] | undefined,
    },
  };
}

function transformFAQAccordion(content: Record<string, unknown>): FAQAccordionProps {
  return {
    content: {
      sectionTitle: content.sectionTitle as string | undefined,
      sectionDescription: content.sectionDescription as string | undefined,
      faqs: content.faqs as Array<{ question: string; answer: string }>,
    },
  };
}

function transformFAQTwoColumn(content: Record<string, unknown>): FAQTwoColumnProps {
  return {
    content: {
      sectionTitle: content.sectionTitle as string | undefined,
      sectionDescription: content.sectionDescription as string | undefined,
      faqs: content.faqs as Array<{ question: string; answer: string }>,
    },
  };
}

function transformTeamGrid(content: Record<string, unknown>): TeamGridProps {
  return {
    content: {
      sectionTitle: content.sectionTitle as string | undefined,
      sectionDescription: content.sectionDescription as string | undefined,
      members: content.members as Array<{
        name: string;
        role: string;
        bio?: string;
        image?: { src: string; alt: string };
        social?: Array<{ platform: string; url: string; icon?: string }>;
      }>,
    },
  };
}

function transformTeamCards(content: Record<string, unknown>): TeamCardsProps {
  return {
    content: {
      sectionTitle: content.sectionTitle as string | undefined,
      sectionDescription: content.sectionDescription as string | undefined,
      members: content.members as Array<{
        name: string;
        role: string;
        bio?: string;
        image?: { src: string; alt: string };
        social?: Array<{ platform: string; url: string; icon?: string }>;
      }>,
    },
  };
}

function transformStatsSimple(content: Record<string, unknown>): StatsSimpleProps {
  return {
    content: {
      sectionTitle: content.sectionTitle as string | undefined,
      sectionDescription: content.sectionDescription as string | undefined,
      stats: content.stats as Array<{
        value: string;
        label: string;
        description?: string;
        icon?: string;
      }>,
    },
  };
}

function transformStatsHighlight(content: Record<string, unknown>): StatsHighlightProps {
  return {
    content: {
      sectionTitle: content.sectionTitle as string | undefined,
      sectionDescription: content.sectionDescription as string | undefined,
      stats: content.stats as Array<{
        value: string;
        label: string;
        description?: string;
        icon?: string;
      }>,
      layout: (content.layout as 'grid' | 'inline') || 'grid',
    },
  };
}

/**
 * Main transformer function - converts JSON template sections to type-safe SectionConfig
 */
export function transformTemplateSection(section: JSONTemplateSection): SectionConfig {
  const { variant, content } = section;

  // Map variant string to SectionType enum and transform content
  switch (variant) {
    case 'HeroCenteredImage':
      return {
        id: `section-${variant}-${Date.now()}`,
        type: SectionType.HERO_CENTERED_IMAGE,
        props: transformHeroCenteredImage(content),
      };

    case 'HeroFullWidth':
      return {
        id: `section-${variant}-${Date.now()}`,
        type: SectionType.HERO_FULL_WIDTH,
        props: transformHeroFullWidth(content),
      };

    case 'HeroSplitLayout':
      return {
        id: `section-${variant}-${Date.now()}`,
        type: SectionType.HERO_SPLIT_LAYOUT,
        props: transformHeroSplitLayout(content),
      };

    case 'FeaturesThreeColumn':
      return {
        id: `section-${variant}-${Date.now()}`,
        type: SectionType.FEATURES_THREE_COLUMN,
        props: transformFeaturesThreeColumn(content),
      };

    case 'FeaturesDetailed':
      return {
        id: `section-${variant}-${Date.now()}`,
        type: SectionType.FEATURES_DETAILED,
        props: transformFeaturesDetailed(content),
      };

    case 'CTASimple':
      return {
        id: `section-${variant}-${Date.now()}`,
        type: SectionType.CTA_SIMPLE,
        props: transformCTASimple(content),
      };

    case 'CTASplit':
      return {
        id: `section-${variant}-${Date.now()}`,
        type: SectionType.CTA_SPLIT,
        props: transformCTASplit(content),
      };

    case 'TestimonialsGrid':
      return {
        id: `section-${variant}-${Date.now()}`,
        type: SectionType.TESTIMONIALS_GRID,
        props: transformTestimonialsGrid(content),
      };

    case 'TestimonialsCarousel':
      return {
        id: `section-${variant}-${Date.now()}`,
        type: SectionType.TESTIMONIALS_CAROUSEL,
        props: transformTestimonialsCarousel(content),
      };

    case 'ContactForm':
      return {
        id: `section-${variant}-${Date.now()}`,
        type: SectionType.CONTACT_FORM,
        props: transformContactForm(content),
      };

    case 'ContactSplit':
      return {
        id: `section-${variant}-${Date.now()}`,
        type: SectionType.CONTACT_SPLIT,
        props: transformContactSplit(content),
      };

    case 'PricingThreeColumn':
      return {
        id: `section-${variant}-${Date.now()}`,
        type: SectionType.PRICING_THREE_COLUMN,
        props: transformPricingThreeColumn(content),
      };

    case 'PricingComparison':
      return {
        id: `section-${variant}-${Date.now()}`,
        type: SectionType.PRICING_COMPARISON,
        props: transformPricingComparison(content),
      };

    case 'FAQAccordion':
      return {
        id: `section-${variant}-${Date.now()}`,
        type: SectionType.FAQ_ACCORDION,
        props: transformFAQAccordion(content),
      };

    case 'FAQTwoColumn':
      return {
        id: `section-${variant}-${Date.now()}`,
        type: SectionType.FAQ_TWO_COLUMN,
        props: transformFAQTwoColumn(content),
      };

    case 'TeamGrid':
      return {
        id: `section-${variant}-${Date.now()}`,
        type: SectionType.TEAM_GRID,
        props: transformTeamGrid(content),
      };

    case 'TeamCards':
      return {
        id: `section-${variant}-${Date.now()}`,
        type: SectionType.TEAM_CARDS,
        props: transformTeamCards(content),
      };

    case 'StatsSimple':
      return {
        id: `section-${variant}-${Date.now()}`,
        type: SectionType.STATS_SIMPLE,
        props: transformStatsSimple(content),
      };

    case 'StatsHighlight':
      return {
        id: `section-${variant}-${Date.now()}`,
        type: SectionType.STATS_HIGHLIGHT,
        props: transformStatsHighlight(content),
      };

    default:
      throw new Error(`Unknown section variant: ${variant}`);
  }
}

/**
 * Transform entire JSON template to PageConfig
 */
export function transformTemplate(template: JSONTemplate): {
  title: string;
  description: string;
  sections: SectionConfig[];
} {
  return {
    title: template.page.title,
    description: template.page.description,
    sections: template.sections.map(transformTemplateSection),
  };
}
