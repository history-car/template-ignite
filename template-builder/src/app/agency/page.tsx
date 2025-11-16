import { PageRenderer } from "@/components/page-builder/page-renderer";
import { transformTemplate } from "@/lib/template-transformer";
import template from "@/templates/landing-agency.json";

export const metadata = {
  title: template.page.title,
  description: template.page.description,
};

export default function AgencyPage() {
  const pageData = transformTemplate(template);

  return (
    <PageRenderer
      pageConfig={{
        id: "agency-landing",
        title: pageData.title,
        description: pageData.description,
        path: "/agency",
        sections: pageData.sections,
      }}
    />
  );
}
