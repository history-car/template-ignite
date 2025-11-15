# Page Builder System Guide

Complete guide to the Template Ignite page builder system.

## Overview

The page builder system provides a flexible, type-safe way to create landing pages by composing reusable section components. It supports both TypeScript configuration and JSON-based configuration.

## Architecture

### Core Components

1. **Section Registry** (`src/lib/section-registry.ts`)
   - Central registry of all available section components
   - Type-safe section-to-component mapping
   - Section metadata and categorization

2. **Page Configuration Types** (`src/types/page.types.ts`)
   - TypeScript interfaces for page and section configurations
   - Type-safe section props mapping

3. **Page Renderer** (`src/components/page-builder/page-renderer.tsx`)
   - Dynamic page rendering from configuration
   - Type-safe component instantiation

4. **Configuration Loader** (`src/lib/page-config-loader.ts`)
   - JSON validation and parsing
   - Runtime type checking

## Available Sections

### Hero Sections
- `hero-centered-image` - Centered content with image below
- `hero-full-width` - Full-width background image with overlay
- `hero-split-layout` - Split layout with image on left/right

### Features Sections
- `features-three-column` - Three-column grid with icons
- `features-detailed` - Detailed features with alternating layouts

### CTA Sections
- `cta-simple` - Centered call-to-action
- `cta-split` - Split layout CTA with image

### Testimonials Sections
- `testimonials-grid` - Grid layout for multiple testimonials
- `testimonials-carousel` - Carousel for featured testimonials

### Contact Sections
- `contact-form` - Centered contact form
- `contact-split` - Split layout with contact info and form

## Usage

### Method 1: TypeScript Configuration

```typescript
import { PageConfig } from '@/types/page.types';
import { SectionType } from '@/lib/section-registry';
import { PageRenderer } from '@/components/page-builder';

const pageConfig: PageConfig = {
  id: 'my-landing-page',
  title: 'My Landing Page',
  path: '/landing',
  sections: [
    {
      id: 'hero-1',
      type: SectionType.HERO_FULL_WIDTH,
      props: {
        content: {
          headline: 'Welcome to Our Platform',
          description: 'Build amazing things',
          cta: {
            text: 'Get Started',
            href: '#signup',
            variant: 'primary',
          },
          backgroundImage: {
            src: '/images/hero-bg.jpg',
            alt: 'Hero background',
          },
        },
      },
    },
    // Add more sections...
  ],
};

export default function MyPage() {
  return <PageRenderer pageConfig={pageConfig} />;
}
```

### Method 2: JSON Configuration

**Create JSON file** (`public/page-configs/my-page.json`):

```json
{
  "id": "my-page",
  "title": "My Page",
  "path": "/my-page",
  "sections": [
    {
      "id": "hero-1",
      "type": "hero-centered-image",
      "props": {
        "content": {
          "headline": "Welcome",
          "description": "Get started today",
          "cta": {
            "text": "Sign Up",
            "href": "#signup",
            "variant": "primary"
          },
          "image": {
            "src": "/images/hero.jpg",
            "alt": "Hero image",
            "width": 800,
            "height": 600
          }
        }
      }
    }
  ]
}
```

**Load and render**:

```typescript
import { loadPageConfigFromJSON } from '@/lib/page-config-loader';
import { PageRenderer } from '@/components/page-builder';

export default async function MyPage() {
  const pageConfig = await loadPageConfigFromJSON('/page-configs/my-page.json');
  return <PageRenderer pageConfig={pageConfig} />;
}
```

## Section Configuration Examples

### Hero - Full Width

```typescript
{
  id: 'hero-1',
  type: SectionType.HERO_FULL_WIDTH,
  props: {
    content: {
      headline: 'Build Your Product Faster',
      subheadline: 'The Ultimate Platform',
      description: 'Transform your ideas into reality',
      cta: {
        text: 'Get Started',
        href: '#signup',
        variant: 'primary',
      },
      secondaryCta: {
        text: 'Learn More',
        href: '#features',
      },
      backgroundImage: {
        src: '/images/hero-bg.jpg',
        alt: 'Background',
        overlay: 'dark',
        overlayOpacity: 0.6,
      },
    },
  },
}
```

### Features - Three Column

```typescript
{
  id: 'features-1',
  type: SectionType.FEATURES_THREE_COLUMN,
  props: {
    content: {
      sectionTitle: 'Core Features',
      sectionDescription: 'Everything you need',
      features: [
        {
          icon: 'Zap',
          title: 'Lightning Fast',
          description: 'Optimized for speed',
        },
        {
          icon: 'Shield',
          title: 'Secure',
          description: 'Enterprise-grade security',
        },
        {
          icon: 'Heart',
          title: 'Easy to Use',
          description: 'Intuitive interface',
        },
      ],
    },
  },
}
```

### Testimonials - Carousel

```typescript
{
  id: 'testimonials-1',
  type: SectionType.TESTIMONIALS_CAROUSEL,
  props: {
    content: {
      sectionTitle: 'What Our Customers Say',
      autoPlay: true,
      autoPlayInterval: 5000,
      testimonials: [
        {
          quote: 'This platform changed everything!',
          author: 'Sarah Johnson',
          role: 'CTO',
          company: 'TechCorp',
          rating: 5,
          image: {
            src: '/images/avatar-1.jpg',
            alt: 'Sarah Johnson',
          },
        },
      ],
    },
  },
}
```

### Contact - Split

```typescript
{
  id: 'contact-1',
  type: SectionType.CONTACT_SPLIT,
  props: {
    content: {
      headline: 'Get in Touch',
      description: 'We\'d love to hear from you',
      contactInfo: [
        {
          icon: 'Mail',
          label: 'Email',
          value: 'hello@example.com',
          href: 'mailto:hello@example.com',
        },
        {
          icon: 'Phone',
          label: 'Phone',
          value: '+1 (555) 123-4567',
          href: 'tel:+15551234567',
        },
      ],
      form: {
        fields: [
          {
            name: 'name',
            type: 'text',
            label: 'Name',
            required: true,
          },
          {
            name: 'email',
            type: 'email',
            label: 'Email',
            required: true,
          },
          {
            name: 'message',
            type: 'textarea',
            label: 'Message',
            required: true,
          },
        ],
        submitText: 'Send Message',
        submitAction: '/api/contact',
      },
    },
  },
}
```

## Theme Overrides

All sections support theme overrides:

```typescript
{
  id: 'cta-1',
  type: SectionType.CTA_SIMPLE,
  props: {
    content: {
      headline: 'Ready to Start?',
      cta: {
        text: 'Sign Up',
        href: '#signup',
      },
    },
    theme: {
      backgroundColor: '#1E40AF',
      textColor: '#FFFFFF',
      primaryColor: '#60A5FA',
    },
  },
}
```

## Available Icons

The system supports Lucide icons. Common icons:
- `Zap` - Lightning/Speed
- `Shield` - Security
- `Heart` - Love/Like
- `Star` - Rating/Featured
- `Check` - Checkmark
- `Mail` - Email
- `Phone` - Phone
- `MapPin` - Location
- `Users` - Team/People
- `Code` - Development
- `Sparkles` - Magic/Special

See `src/lib/icon-map.ts` for the complete list.

## Helper Functions

### Get Section by Category

```typescript
import { getSectionsByCategory } from '@/lib/section-registry';

const heroSections = getSectionsByCategory('hero');
// Returns all hero section metadata
```

### Get Page Config

```typescript
import { getPageConfig } from '@/config/pages';

const config = getPageConfig('landing-example');
```

### Validate JSON Config

```typescript
import { validatePageConfig } from '@/lib/page-config-loader';

const isValid = validatePageConfig(jsonData);
```

## Best Practices

1. **Unique Section IDs**: Use descriptive, unique IDs for each section
2. **Image Optimization**: Use Next.js Image optimization with proper dimensions
3. **Accessibility**: Always provide alt text for images
4. **Type Safety**: Use TypeScript configuration for compile-time checking
5. **JSON Validation**: Validate JSON configs before deployment
6. **Theme Consistency**: Use design tokens from `src/styles/tokens.stylex.ts`

## Example Page Configurations

Check these example configurations:
- `src/config/pages/landing-page-example.ts` - Full-featured landing page
- `public/page-configs/simple-landing.json` - Simple JSON configuration

## Extending the System

### Adding a New Section Component

1. Create component in `src/components/sections/[category]/[component-name]/`
2. Add TypeScript types to `src/types/section.types.ts`
3. Register in `src/lib/section-registry.ts`:

```typescript
// Add to SectionType enum
export enum SectionType {
  // ...
  MY_NEW_SECTION = 'my-new-section',
}

// Add to SectionPropsMap
export type SectionPropsMap = {
  // ...
  [SectionType.MY_NEW_SECTION]: MyNewSectionProps;
};

// Add to sectionRegistry
export const sectionRegistry = {
  // ...
  [SectionType.MY_NEW_SECTION]: MyNewSection,
};

// Add metadata
export const sectionMetadata = {
  // ...
  [SectionType.MY_NEW_SECTION]: {
    type: SectionType.MY_NEW_SECTION,
    name: 'My New Section',
    category: 'features',
    description: 'Description of the section',
  },
};
```

## Migration from Old System

If you have existing JSON configurations using the old `variant` system, update them:

**Old format**:
```json
{
  "variant": "HeroCenteredImage",
  "content": { ... }
}
```

**New format**:
```json
{
  "id": "hero-1",
  "type": "hero-centered-image",
  "props": {
    "content": { ... }
  }
}
```

## Troubleshooting

### Section Not Rendering
- Check section type matches exactly (kebab-case)
- Verify all required props are provided
- Check browser console for errors

### TypeScript Errors
- Ensure section props match the interface
- Use correct SectionType enum value
- Verify imports are correct

### JSON Validation Failing
- Use `validatePageConfig()` to check structure
- Ensure all required fields are present
- Check section type spelling

## Performance Considerations

- All sections are Server Components by default
- Client-only sections marked with `'use client'`
- Images use Next.js Image optimization
- StyleX provides zero-runtime CSS

## Next Steps

- Phase 7: Testing & Deployment preparation
- Add more section variants
- Create visual page builder UI
- Add CMS integration
