import { PageRenderer } from "@/components/page-builder/page-renderer";
import { transformTemplate } from "@/lib/template-transformer";
import template from "@/templates/landing-restaurant.json";

export const metadata = {
  title: template.page.title,
  description: template.page.description,
};

export default function RestaurantPage() {
  const pageData = transformTemplate(template);

  return (
    <PageRenderer
      pageConfig={{
        id: "restaurant-landing",
        title: pageData.title,
        description: pageData.description,
        path: "/restaurant",
        sections: pageData.sections,
      }}
    />
  );
}
