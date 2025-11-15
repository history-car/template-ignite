import { ComponentType } from "react";
import { HeroCenteredImage } from "@/components/sections/hero/hero-centered-image";
import { FeaturesThreeColumn } from "@/components/sections/features/features-three-column";
import { ContactForm } from "@/components/sections/contact/contact-form";

export interface SectionRegistry {
  [key: string]: ComponentType<any>;
}

export const sectionRegistry: SectionRegistry = {
  HeroCenteredImage,
  FeaturesThreeColumn,
  ContactForm,
};

export function getVariantComponent(variant: string): ComponentType<any> {
  const component = sectionRegistry[variant];

  if (!component) {
    throw new Error(`Unknown section variant: ${variant}`);
  }

  return component;
}
