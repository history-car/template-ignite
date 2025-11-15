import { HeroCenteredImage } from "@/components/sections/hero/hero-centered-image";
import { FeaturesThreeColumn } from "@/components/sections/features/features-three-column";
import { FeaturesDetailed } from "@/components/sections/features/features-detailed";
import { CTASimple } from "@/components/sections/cta/cta-simple";
import { TestimonialsCarousel } from "@/components/sections/testimonials/testimonials-carousel";
import { ContactForm } from "@/components/sections/contact/contact-form";
import template from "@/templates/landing-portfolio.json";
import type {
  HeroCenteredImageProps,
  FeaturesThreeColumnProps,
  FeaturesDetailedProps,
  CTASimpleProps,
  TestimonialsCarouselProps,
  ContactFormProps,
} from "@/types/section.types";

export const metadata = {
  title: template.page.title,
  description: template.page.description,
};

export default function PortfolioPage() {
  return (
    <main>
      {template.sections.map((section, index) => {
        const key = `section-${index}`;

        if (section.variant === "HeroCenteredImage") {
          return <HeroCenteredImage key={key} content={section.content as HeroCenteredImageProps['content']} />;
        }

        if (section.variant === "FeaturesThreeColumn") {
          return <FeaturesThreeColumn key={key} content={section.content as FeaturesThreeColumnProps['content']} />;
        }

        if (section.variant === "FeaturesDetailed") {
          return <FeaturesDetailed key={key} content={section.content as FeaturesDetailedProps['content']} />;
        }

        if (section.variant === "CTASimple") {
          return <CTASimple key={key} content={section.content as CTASimpleProps['content']} />;
        }

        if (section.variant === "TestimonialsCarousel") {
          return <TestimonialsCarousel key={key} content={section.content as TestimonialsCarouselProps['content']} />;
        }

        if (section.variant === "ContactForm") {
          return <ContactForm key={key} content={section.content as ContactFormProps['content']} />;
        }

        return null;
      })}
    </main>
  );
}
