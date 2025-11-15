import { PageConfig } from '@/types/page.types';
import { getVariantComponent } from '@/components/registry/section-registry';

export function buildPage(config: PageConfig) {
  const sections = config.sections.map((sectionConfig, index) => {
    const { variant, content, theme } = sectionConfig;
    const Component = getVariantComponent(variant);

    return {
      id: `section-${index}`,
      Component,
      props: { content, theme },
    };
  });

  return { sections, theme: config.theme };
}
