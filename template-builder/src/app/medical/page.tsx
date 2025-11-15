import { HeroSplitLayout } from "@/components/sections/hero/hero-split-layout";
import { FeaturesThreeColumn } from "@/components/sections/features/features-three-column";
import { FeaturesDetailed } from "@/components/sections/features/features-detailed";
import { TestimonialsGrid } from "@/components/sections/testimonials/testimonials-grid";
import { CTASplit } from "@/components/sections/cta/cta-split";
import { ContactSplit } from "@/components/sections/contact/contact-split";
import template from "@/templates/landing-medical-clinic.json";
import type {
  HeroSplitLayoutProps,
  FeaturesThreeColumnProps,
  FeaturesDetailedProps,
  TestimonialsGridProps,
  CTASplitProps,
  ContactSplitProps,
} from "@/types/section.types";

export const metadata = {
  title: template.page.title,
  description: template.page.description,
};

export default function MedicalPage() {
  return (
    <main>
      {template.sections.map((section, index) => {
        const key = `section-${index}`;

        if (section.variant === "HeroSplitLayout") {
          return <HeroSplitLayout key={key} content={section.content as HeroSplitLayoutProps['content']} />;
        }

        if (section.variant === "FeaturesThreeColumn") {
          return <FeaturesThreeColumn key={key} content={section.content as FeaturesThreeColumnProps['content']} />;
        }

        if (section.variant === "FeaturesDetailed") {
          return <FeaturesDetailed key={key} content={section.content as FeaturesDetailedProps['content']} />;
        }

        if (section.variant === "TestimonialsGrid") {
          return <TestimonialsGrid key={key} content={section.content as TestimonialsGridProps['content']} />;
        }

        if (section.variant === "CTASplit") {
          return <CTASplit key={key} content={section.content as CTASplitProps['content']} />;
        }

        if (section.variant === "ContactSplit") {
          return <ContactSplit key={key} content={section.content as ContactSplitProps['content']} />;
        }

        return null;
      })}
    </main>
  );
}
