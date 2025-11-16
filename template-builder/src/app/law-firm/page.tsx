import { PageRenderer } from "@/components/page-builder/page-renderer";
import { transformTemplate } from "@/lib/template-transformer";
import template from "@/templates/landing-law-firm.json";

export const metadata = {
  title: template.page.title,
  description: template.page.description,
};

export default function LawFirmPage() {
  const pageData = transformTemplate(template);

  return (
    <PageRenderer
      pageConfig={{
        id: "law-firm-landing",
        title: pageData.title,
        description: pageData.description,
        path: "/law-firm",
        sections: pageData.sections,
      }}
    />
  );
}
