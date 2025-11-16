import { PageRenderer } from "@/components/page-builder/page-renderer";
import { transformTemplate } from "@/lib/template-transformer";
import template from "@/templates/landing-course.json";

export const metadata = {
  title: template.page.title,
  description: template.page.description,
};

export default function CoursePage() {
  const pageData = transformTemplate(template);

  return (
    <PageRenderer
      pageConfig={{
        id: "course-landing",
        title: pageData.title,
        description: pageData.description,
        path: "/course",
        sections: pageData.sections,
      }}
    />
  );
}
