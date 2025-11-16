import { PageRenderer } from "@/components/page-builder/page-renderer";
import { transformTemplate } from "@/lib/template-transformer";
import template from "@/templates/landing-portfolio.json";

export const metadata = {
  title: template.page.title,
  description: template.page.description,
};

export default function PortfolioPage() {
  const pageData = transformTemplate(template);

  return (
    <PageRenderer
      pageConfig={{
        id: "portfolio-landing",
        title: pageData.title,
        description: pageData.description,
        path: "/portfolio",
        sections: pageData.sections,
      }}
    />
  );
}
