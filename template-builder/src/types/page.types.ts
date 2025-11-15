import { SectionType, SectionPropsMap } from "@/lib/section-registry";

// Dynamic section definition
export interface SectionConfig<T extends SectionType = SectionType> {
  id: string;
  type: T;
  props: SectionPropsMap[T];
}

// Page configuration
export interface PageConfig {
  id: string;
  title: string;
  description?: string;
  path: string;
  sections: SectionConfig[];
  metadata?: {
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
    keywords?: string[];
  };
}

// Site configuration
export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  pages: PageConfig[];
  globalTheme?: {
    primaryColor?: string;
    secondaryColor?: string;
    fontHeading?: string;
    fontBody?: string;
  };
}
