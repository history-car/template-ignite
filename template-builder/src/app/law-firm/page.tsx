import { HeroCenteredImage } from "@/components/sections/hero/hero-centered-image";
import { FeaturesThreeColumn } from "@/components/sections/features/features-three-column";
import { ContactForm } from "@/components/sections/contact/contact-form";
import template from "@/templates/landing-law-firm.json";
import type {
  HeroCenteredImageProps,
  FeaturesThreeColumnProps,
  ContactFormProps,
} from "@/types/section.types";

export const metadata = {
  title: template.page.title,
  description: template.page.description,
};

export default function LawFirmPage() {
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

        if (section.variant === "ContactForm") {
          return <ContactForm key={key} content={section.content as ContactFormProps['content']} />;
        }

        return null;
      })}
    </main>
  );
}
