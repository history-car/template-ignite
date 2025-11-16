import { SectionType, SectionPropsMap } from "@/lib/section-registry";

// Discriminated union: Each section type has its own specific config
type SectionConfigUnion = {
  [K in SectionType]: {
    id: string;
    type: K;
    props: SectionPropsMap[K];
  };
}[SectionType];

// Export the union type as SectionConfig
export type SectionConfig = SectionConfigUnion;

// Legacy generic type for backward compatibility (deprecated)
export type SectionConfigGeneric<T extends SectionType = SectionType> = {
  id: string;
  type: T;
  props: SectionPropsMap[T];
};

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
