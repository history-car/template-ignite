export interface BaseSectionProps {
  id?: string;
  className?: string;
  theme?: ThemeOverride;
}

export interface ThemeOverride {
  backgroundColor?: string;
  textColor?: string;
  primaryColor?: string;
  spacing?: "compact" | "normal" | "spacious";
}

export interface HeroCenteredImageProps extends BaseSectionProps {
  content: {
    headline: string;
    subheadline?: string;
    description?: string;
    cta: {
      text: string;
      href: string;
      variant?: "primary" | "secondary" | "outline";
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

export interface HeroFullWidthProps extends BaseSectionProps {
  content: {
    headline: string;
    subheadline?: string;
    description?: string;
    cta: {
      text: string;
      href: string;
      variant?: "primary" | "secondary" | "outline";
    };
    secondaryCta?: {
      text: string;
      href: string;
    };
    backgroundImage: {
      src: string;
      alt: string;
      overlay?: "dark" | "light" | "none";
      overlayOpacity?: number;
    };
  };
}

export interface HeroSplitLayoutProps extends BaseSectionProps {
  content: {
    headline: string;
    subheadline?: string;
    description?: string;
    cta: {
      text: string;
      href: string;
      variant?: "primary" | "secondary" | "outline";
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
    imagePosition?: "left" | "right";
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

export interface DetailedFeature {
  icon?: string;
  title: string;
  description: string;
  details?: string[];
  image?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
}

export interface FeaturesDetailedProps extends BaseSectionProps {
  content: {
    sectionTitle?: string;
    sectionDescription?: string;
    features: DetailedFeature[];
  };
}

export interface CTASimpleProps extends BaseSectionProps {
  content: {
    headline: string;
    description?: string;
    cta: {
      text: string;
      href: string;
      variant?: "primary" | "secondary" | "outline";
    };
  };
}

export interface CTASplitProps extends BaseSectionProps {
  content: {
    headline: string;
    description?: string;
    cta: {
      text: string;
      href: string;
      variant?: "primary" | "secondary" | "outline";
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
    imagePosition?: "left" | "right";
  };
}

export interface Testimonial {
  quote: string;
  author: string;
  role?: string;
  company?: string;
  image?: {
    src: string;
    alt: string;
  };
  rating?: number;
}

export interface TestimonialsGridProps extends BaseSectionProps {
  content: {
    sectionTitle?: string;
    sectionDescription?: string;
    testimonials: Testimonial[];
  };
}

export interface TestimonialsCarouselProps extends BaseSectionProps {
  content: {
    sectionTitle?: string;
    sectionDescription?: string;
    testimonials: Testimonial[];
    autoPlay?: boolean;
    autoPlayInterval?: number;
  };
}

export interface ContactFormProps extends BaseSectionProps {
  content: {
    headline: string;
    description?: string;
    fields: Array<{
      name: string;
      type: "text" | "email" | "tel" | "textarea";
      label: string;
      placeholder?: string;
      required?: boolean;
    }>;
    submitText: string;
    submitAction: string;
  };
}

export interface ContactSplitProps extends BaseSectionProps {
  content: {
    headline: string;
    description?: string;
    contactInfo: Array<{
      icon?: string;
      label: string;
      value: string;
      href?: string;
    }>;
    form: {
      fields: Array<{
        name: string;
        type: "text" | "email" | "tel" | "textarea";
        label: string;
        placeholder?: string;
        required?: boolean;
      }>;
      submitText: string;
      submitAction: string;
    };
  };
}
