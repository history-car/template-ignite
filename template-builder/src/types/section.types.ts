export interface BaseSectionProps {
  id?: string;
  className?: string;
  theme?: ThemeOverride;
}

export interface ThemeOverride {
  backgroundColor?: string;
  textColor?: string;
  primaryColor?: string;
  spacing?: 'compact' | 'normal' | 'spacious';
}

export interface HeroCenteredImageProps extends BaseSectionProps {
  content: {
    headline: string;
    subheadline?: string;
    description?: string;
    cta: {
      text: string;
      href: string;
      variant?: 'primary' | 'secondary' | 'outline';
    };
    secondaryCta?: {
      text: string;
      href: string;
    };
    image: {
      src: string;
      alt: string;
      width?: number;
      height?: number;
    };
  };
}

export interface Feature {
  icon?: string;
  title: string;
  description: string;
}

export interface FeaturesThreeColumnProps extends BaseSectionProps {
  content: {
    sectionTitle?: string;
    sectionDescription?: string;
    features: [Feature, Feature, Feature];
  };
}

export interface ContactFormProps extends BaseSectionProps {
  content: {
    headline: string;
    description?: string;
    fields: Array<{
      name: string;
      type: 'text' | 'email' | 'tel' | 'textarea';
      label: string;
      placeholder?: string;
      required?: boolean;
    }>;
    submitText: string;
    submitAction: string;
  };
}
