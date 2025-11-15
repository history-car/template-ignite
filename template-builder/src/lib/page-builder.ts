import { PageConfig } from "@/types/page.types";
import { getSectionComponent } from "./section-registry";

export function buildPage(config: PageConfig) {
  const sections = config.sections.map((sectionConfig) => {
    const { id, type, props } = sectionConfig;
    const Component = getSectionComponent(type);

    return {
      id,
      Component,
      props,
    };
  });

  return { sections };
}
