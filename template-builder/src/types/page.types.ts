import { ThemeOverride } from './section.types';

export interface SectionConfig<TContent = unknown> {
  type: string;
  variant: string;
  content: TContent;
  theme?: ThemeOverride;
}

export interface PageConfig {
  page: {
    title: string;
    description?: string;
  };
  sections: SectionConfig[];
  theme: {
    preset: string;
  };
}
