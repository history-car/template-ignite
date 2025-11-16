import { PageRenderer } from "@/components/page-builder/page-renderer";
import { transformTemplate } from "@/lib/template-transformer";
import template from "@/templates/landing-accounting-office.json";

export const metadata = {
  title: template.page.title,
  description: template.page.description,
};

export default function AccountingPage() {
  const pageData = transformTemplate(template);

  return (
    <PageRenderer
      pageConfig={{
        id: "accounting-landing",
        title: pageData.title,
        description: pageData.description,
        path: "/accounting",
        sections: pageData.sections,
      }}
    />
  );
}
