import { HeroCenteredImage } from "@/components/sections/hero/hero-centered-image";
import { StatsSimple } from "@/components/sections/stats/stats-simple";
import { FeaturesThreeColumn } from "@/components/sections/features/features-three-column";
import { PricingThreeColumn } from "@/components/sections/pricing/pricing-three-column";
import { TestimonialsCarousel } from "@/components/sections/testimonials/testimonials-carousel";
import { FAQAccordion } from "@/components/sections/faq/faq-accordion";
import { CTASimple } from "@/components/sections/cta/cta-simple";
import template from "@/templates/landing-saas.json";
import type {
  HeroCenteredImageProps,
  StatsSimpleProps,
  FeaturesThreeColumnProps,
  PricingThreeColumnProps,
  TestimonialsCarouselProps,
  FAQAccordionProps,
  CTASimpleProps,
} from "@/types/section.types";

export const metadata = {
  title: template.page.title,
  description: template.page.description,
};

export default function SaaSPage() {
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

        if (section.variant === "PricingThreeColumn") {
          return <PricingThreeColumn key={key} content={section.content as any} />;
        }

        if (section.variant === "TestimonialsCarousel") {
          return <TestimonialsCarousel key={key} content={section.content as any} />;
        }

        if (section.variant === "FAQAccordion") {
          return <FAQAccordion key={key} content={section.content as any} />;
        }

        if (section.variant === "CTASimple") {
          return <CTASimple key={key} content={section.content as any} />;
        }

        return null;
      })}
    </main>
  );
}
