import { PageConfig, SectionConfig } from '@/types/page.types';
import { getSectionComponent, SectionType } from '@/lib/section-registry';

interface PageRendererProps {
  pageConfig: PageConfig;
}

export function PageRenderer({ pageConfig }: PageRendererProps) {
  return (
    <main>
      {pageConfig.sections.map((section) => {
        const Component = getSectionComponent(section.type);

        // Type-safe rendering with proper props
        return (
          <Component
            key={section.id}
            {...section.props}
          />
        );
      })}
    </main>
  );
}

// Section renderer for individual sections
interface SectionRendererProps {
  section: SectionConfig;
}

export function SectionRenderer({ section }: SectionRendererProps) {
  const Component = getSectionComponent(section.type);

  return (
    <Component
      key={section.id}
      {...section.props}
    />
  );
}
