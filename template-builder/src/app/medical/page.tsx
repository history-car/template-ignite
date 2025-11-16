import { PageRenderer } from "@/components/page-builder/page-renderer";
import { transformTemplate } from "@/lib/template-transformer";
import template from "@/templates/landing-medical-clinic.json";

export const metadata = {
  title: template.page.title,
  description: template.page.description,
};

export default function MedicalPage() {
  const pageData = transformTemplate(template);

  return (
    <PageRenderer
      pageConfig={{
        id: "medical-landing",
        title: pageData.title,
        description: pageData.description,
        path: "/medical",
        sections: pageData.sections,
      }}
    />
  );
}
