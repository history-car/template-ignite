import { HeroSplitLayout } from "@/components/sections/hero/hero-split-layout";
import { StatsHighlight } from "@/components/sections/stats/stats-highlight";
import { FeaturesDetailed } from "@/components/sections/features/features-detailed";
import { TeamCards } from "@/components/sections/team/team-cards";
import { TestimonialsGrid } from "@/components/sections/testimonials/testimonials-grid";
import { FAQTwoColumn } from "@/components/sections/faq/faq-two-column";
import { ContactSplit } from "@/components/sections/contact/contact-split";
import template from "@/templates/landing-agency.json";
import type {
  HeroSplitLayoutProps,
  StatsHighlightProps,
  FeaturesDetailedProps,
  TeamCardsProps,
  TestimonialsGridProps,
  FAQTwoColumnProps,
  ContactSplitProps,
} from "@/types/section.types";

export const metadata = {
  title: template.page.title,
  description: template.page.description,
};

export default function AgencyPage() {
  return (
    <main>
      {template.sections.map((section, index) => {
        const key = `section-${index}`;

        if (section.variant === "HeroSplitLayout") {
          return <HeroSplitLayout key={key} content={section.content as any} />;
        }

        if (section.variant === "StatsHighlight") {
          return <StatsHighlight key={key} content={section.content as any} />;
        }

        if (section.variant === "FeaturesDetailed") {
          return <FeaturesDetailed key={key} content={section.content as any} />;
        }

        if (section.variant === "TeamCards") {
          return <TeamCards key={key} content={section.content as any} />;
        }

        if (section.variant === "TestimonialsGrid") {
          return <TestimonialsGrid key={key} content={section.content as any} />;
        }

        if (section.variant === "FAQTwoColumn") {
          return <FAQTwoColumn key={key} content={section.content as any} />;
        }

        if (section.variant === "ContactSplit") {
          return <ContactSplit key={key} content={section.content as any} />;
        }

        return null;
      })}
    </main>
  );
}
