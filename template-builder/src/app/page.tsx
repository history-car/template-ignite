import { buildPage } from "@/lib/page-builder";
import landingTemplate from "@/templates/landing-law-firm.json";
import { PageConfig } from "@/types/page.types";

export default function Home() {
  const config = landingTemplate as PageConfig;
  const { sections } = buildPage(config);

  return (
    <main>
      {sections.map(({ id, Component, props }) => (
        <Component key={id} {...props} />
      ))}
    </main>
  );
}
