import { PageRenderer } from "@/components/page-builder/page-renderer";
import { transformTemplate } from "@/lib/template-transformer";
import template from "@/templates/landing-saas.json";

export const metadata = {
  title: template.page.title,
  description: template.page.description,
};

export default function SaaSPage() {
  // Transform JSON template to type-safe PageConfig
  const pageData = transformTemplate(template);

  return (
    <PageRenderer
      pageConfig={{
        id: "saas-landing",
        title: pageData.title,
        description: pageData.description,
        path: "/saas",
        sections: pageData.sections,
      }}
    />
  );
}
