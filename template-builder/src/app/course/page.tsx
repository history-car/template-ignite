import { HeroCenteredImage } from "@/components/sections/hero/hero-centered-image";
import { StatsSimple } from "@/components/sections/stats/stats-simple";
import { FeaturesThreeColumn } from "@/components/sections/features/features-three-column";
import { FeaturesDetailed } from "@/components/sections/features/features-detailed";
import { PricingComparison } from "@/components/sections/pricing/pricing-comparison";
import { TestimonialsCarousel } from "@/components/sections/testimonials/testimonials-carousel";
import { FAQAccordion } from "@/components/sections/faq/faq-accordion";
import { CTASplit } from "@/components/sections/cta/cta-split";
import template from "@/templates/landing-course.json";
import type {
  HeroCenteredImageProps,
  StatsSimpleProps,
  FeaturesThreeColumnProps,
  FeaturesDetailedProps,
  PricingComparisonProps,
  TestimonialsCarouselProps,
  FAQAccordionProps,
  CTASplitProps,
} from "@/types/section.types";

export const metadata = {
  title: template.page.title,
  description: template.page.description,
};

export default function CoursePage() {
  return (
    <main>
      {template.sections.map((section, index) => {
        const key = `section-${index}`;

        if (section.variant === "HeroCenteredImage") {
          return <HeroCenteredImage key={key} content={section.content as any} />;
        }

        if (section.variant === "StatsSimple") {
          return <StatsSimple key={key} content={section.content as any} />;
        }

        if (section.variant === "FeaturesThreeColumn") {
          return <FeaturesThreeColumn key={key} content={section.content as any} />;
        }

        if (section.variant === "FeaturesDetailed") {
          return <FeaturesDetailed key={key} content={section.content as any} />;
        }

        if (section.variant === "PricingComparison") {
          return <PricingComparison key={key} content={section.content as any} />;
        }

        if (section.variant === "TestimonialsCarousel") {
          return <TestimonialsCarousel key={key} content={section.content as any} />;
        }

        if (section.variant === "FAQAccordion") {
          return <FAQAccordion key={key} content={section.content as any} />;
        }

        if (section.variant === "CTASplit") {
          return <CTASplit key={key} content={section.content as any} />;
        }

        return null;
      })}
    </main>
  );
}
