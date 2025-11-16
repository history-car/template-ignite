# Template Creation Guide

Complete guide for creating new site templates in Template Ignite.

---

## 📋 Overview

Templates are YAML files that define complete multi-page websites. Each template includes:
- Site metadata and branding
- Navigation and footer configuration
- Multiple page definitions with sections
- Theme and styling preferences

---

## 🚀 Quick Start

### 1. Choose a Template to Copy

Start by copying an existing template:

```bash
# Copy law-firm template as a starting point
cp src/templates/sites/law-firm-professional.yaml \
   src/templates/sites/your-template.yaml
```

### 2. Register Your Template

Add your template to `src/lib/template-registry.ts`:

```typescript
export const TEMPLATE_REGISTRY: Record<string, TemplateInfo> = {
  // ... existing templates
  'your-template': {
    id: 'your-template',
    name: 'Your Template Name',
    description: 'Brief description of your template',
    industry: 'Industry/Category',
    path: './src/templates/sites/your-template.yaml',
    theme: 'theme-preset-id',
    pageCount: 4,
  },
};
```

### 3. Update Environment Variable

Test your template by updating `.env.local`:

```bash
NEXT_PUBLIC_ACTIVE_TEMPLATE=your-template
```

### 4. Build and Test

```bash
npm run build
# Check for TypeScript errors and build success
```

---

## 📝 Template Structure

### Complete Template Anatomy

```yaml
# Site Configuration
site:
  name: "Business Name"
  description: "Brief business description"
  domain: "domain.com"
  language: "en"
  author: "Author Name"
  logo:
    text: "Logo Text"
    alt: "Logo Alt Text"

# Theme Configuration
theme:
  preset: "theme-preset-id"  # See Available Themes below
  fonts:
    heading: "serif" | "sans-serif" | "mono"
    body: "serif" | "sans-serif" | "mono"
  borderRadius: "none" | "small" | "medium" | "large" | "full"

# Navigation Configuration
navigation:
  logo:
    text: "Logo Text"
    alt: "Logo Alt Text"
  menu:
    - label: "Menu Item"
      href: "/path"
  cta:
    text: "CTA Button Text"
    href: "/path"
    variant: "primary" | "secondary" | "outline"

# Footer Configuration
footer:
  sections:
    - title: "Section Title"
      links:
        - label: "Link Text"
          href: "/path"
  social:
    - platform: "facebook" | "twitter" | "linkedin" | "instagram" | "github"
      url: "https://..."
  copyright: "© 2025 Company Name. All rights reserved."

# Page Definitions
pages:
  - slug: "home"  # or "about", "services", "contact", etc.
    metadata:
      title: "Page Title for SEO"
      description: "Page description for SEO"
      navigation: true  # Show in navigation
      priority: 1.0  # SEO sitemap priority
    sections:
      - variant: "SectionVariant"
        content:
          # Section-specific content
        theme:
          # Optional section-specific theme
```

---

## 🎨 Available Themes

Choose from 10 professionally designed theme presets:

| Theme ID | Name | Best For | Primary Color |
|----------|------|----------|---------------|
| `professional-blue` | Professional Blue | Law firms, corporate | Blue #2563eb |
| `modern-purple` | Modern Purple | Tech, SaaS | Purple #9333ea |
| `minimal-gray` | Minimal Gray | Portfolios, minimalist | Zinc #18181b |
| `warm-orange` | Warm Orange | Restaurants, cafes | Orange #ea580c |
| `fresh-green` | Fresh Green | Health, wellness | Green #16a34a |
| `elegant-navy` | Elegant Navy | Finance, insurance | Navy #1e40af |
| `medical-teal` | Medical Teal | Medical, healthcare | Teal #0d9488 |
| `legal-burgundy` | Legal Burgundy | Legal services | Burgundy #991b1b |
| `tech-cyan` | Tech Cyan | Tech companies | Cyan #0891b2 |
| `creative-pink` | Creative Pink | Creative agencies | Pink #ec4899 |

---

## 🧩 Available Section Components

### Hero Sections (3 variants)

#### 1. HeroCenteredImage
Centered content with hero image below.

```yaml
- variant: "HeroCenteredImage"
  content:
    headline: "Main Headline"
    subheadline: "Supporting Text"
    description: "Detailed description"
    cta:
      text: "Primary CTA"
      href: "/path"
      variant: "primary"
    secondaryCta:  # Optional
      text: "Secondary CTA"
      href: "/path"
      variant: "outline"
    image:
      src: "https://images.unsplash.com/..."
      alt: "Image description"
```

#### 2. HeroFullWidth
Full-width background image with overlay.

```yaml
- variant: "HeroFullWidth"
  content:
    headline: "Main Headline"
    subheadline: "Supporting Text"
    description: "Detailed description"
    cta:
      text: "Primary CTA"
      href: "/path"
      variant: "primary"
    backgroundImage:
      src: "https://images.unsplash.com/..."
      alt: "Background image description"
```

#### 3. HeroSplitLayout
Split layout with content on left, image on right.

```yaml
- variant: "HeroSplitLayout"
  content:
    headline: "Main Headline"
    subheadline: "Supporting Text"
    description: "Detailed description"
    cta:
      text: "Primary CTA"
      href: "/path"
      variant: "primary"
    image:
      src: "https://images.unsplash.com/..."
      alt: "Image description"
  theme:
    textAlign: "left" | "center"
```

### Features Sections (2 variants)

#### 1. FeaturesThreeColumn
Three-column feature grid.

```yaml
- variant: "FeaturesThreeColumn"
  content:
    heading: "Features Heading"
    subheading: "Supporting Text"
    description: "Brief description"
    features:
      - icon: "heart" | "shield" | "users" | etc.
        title: "Feature Title"
        description: "Feature description"
```

#### 2. FeaturesDetailed
Detailed features with more content.

```yaml
- variant: "FeaturesDetailed"
  content:
    heading: "Features Heading"
    description: "Brief description"
    features:
      - icon: "icon-name"
        title: "Feature Title"
        description: "Longer feature description with more details"
```

### CTA Sections (2 variants)

#### 1. CTASimple
Simple centered call-to-action.

```yaml
- variant: "CTASimple"
  content:
    heading: "CTA Heading"
    description: "CTA description"
    cta:
      text: "Action Text"
      href: "/path"
      variant: "primary"
```

#### 2. CTASplit
Split layout with features list and image.

```yaml
- variant: "CTASplit"
  content:
    headline: "CTA Headline"
    description: "CTA description"
    cta:
      text: "Action Text"
      href: "/path"
      variant: "primary"
    features:
      - "Feature point 1"
      - "Feature point 2"
      - "Feature point 3"
    image:
      src: "https://..."
      alt: "Image description"
```

### Stats Sections (2 variants)

#### 1. StatsSimple
Simple stats grid.

```yaml
- variant: "StatsSimple"
  content:
    heading: "Stats Heading"
    stats:
      - value: "100+"
        label: "Stat Label"
```

#### 2. StatsHighlight
Stats with descriptions.

```yaml
- variant: "StatsHighlight"
  content:
    heading: "Stats Heading"
    description: "Stats description"
    stats:
      - value: "$50M+"
        label: "Stat Label"
        description: "Additional context"
```

### Team Sections (2 variants)

#### 1. TeamGrid
Simple team member grid.

```yaml
- variant: "TeamGrid"
  content:
    heading: "Team Heading"
    description: "Team description"
    members:
      - name: "John Doe"
        role: "Position/Title"
        image: "https://i.pravatar.cc/400?img=1"
        bio: "Brief bio"
```

#### 2. TeamCards
Detailed team member cards.

```yaml
- variant: "TeamCards"
  content:
    heading: "Team Heading"
    description: "Team description"
    members:
      - name: "John Doe"
        role: "Position/Title"
        image: "https://..."
        bio: "Detailed biography"
        social:  # Optional
          linkedin: "https://..."
          twitter: "https://..."
```

### Testimonials Sections (2 variants)

#### 1. TestimonialsGrid
Grid of testimonial cards.

```yaml
- variant: "TestimonialsGrid"
  content:
    heading: "Testimonials Heading"
    description: "Testimonials description"
    testimonials:
      - quote: "Customer testimonial text"
        author: "Customer Name"
        role: "Customer Role/Company"
        rating: 5
```

#### 2. TestimonialsCarousel
Carousel of featured testimonials.

```yaml
- variant: "TestimonialsCarousel"
  content:
    heading: "Testimonials Heading"
    description: "Testimonials description"
    testimonials:
      - quote: "Detailed testimonial text"
        author: "Customer Name"
        role: "Customer Role/Company"
        image: "https://..."  # Optional
        rating: 5
```

### Contact Sections (2 variants)

#### 1. ContactSimple
Simple contact form.

```yaml
- variant: "ContactSimple"
  content:
    heading: "Contact Heading"
    description: "Contact description"
    form:
      fields:
        - name: "name"
          label: "Full Name"
          type: "text"
          required: true
        - name: "email"
          label: "Email"
          type: "email"
          required: true
        - name: "message"
          label: "Message"
          type: "textarea"
          required: true
      submitText: "Send Message"
      submitAction: "/api/contact"
```

#### 2. ContactSplit
Split layout with contact info and form.

```yaml
- variant: "ContactSplit"
  content:
    heading: "Contact Heading"
    description: "Contact description"
    contactInfo:
      - icon: "phone"
        label: "Phone"
        value: "+1 (555) 123-4567"
        href: "tel:+15551234567"
      - icon: "mail"
        label: "Email"
        value: "contact@example.com"
        href: "mailto:contact@example.com"
      - icon: "map-pin"
        label: "Address"
        value: "123 Main St\nCity, ST 12345"
      - icon: "clock"
        label: "Hours"
        value: "Mon-Fri: 9AM-5PM"
    form:
      fields:
        - name: "name"
          label: "Full Name"
          type: "text"
          required: true
      submitText: "Send Message"
      submitAction: "/api/contact"
```

### FAQ Sections (2 variants)

#### 1. FAQAccordion
Expandable FAQ accordion.

```yaml
- variant: "FAQAccordion"
  content:
    heading: "FAQ Heading"
    description: "FAQ description"
    faqs:
      - question: "Question text?"
        answer: "Detailed answer text."
```

#### 2. FAQTwoColumn
Two-column FAQ layout.

```yaml
- variant: "FAQTwoColumn"
  content:
    heading: "FAQ Heading"
    description: "FAQ description"
    faqs:
      - question: "Question text?"
        answer: "Answer text."
```

### Pricing Sections (2 variants)

#### 1. PricingSimple
Simple pricing cards.

```yaml
- variant: "PricingSimple"
  content:
    heading: "Pricing Heading"
    description: "Pricing description"
    plans:
      - name: "Plan Name"
        price: "$99"
        period: "per month"
        features:
          - "Feature 1"
          - "Feature 2"
        cta:
          text: "Get Started"
          href: "/signup"
```

#### 2. PricingComparison
Detailed pricing comparison table.

```yaml
- variant: "PricingComparison"
  content:
    heading: "Pricing Heading"
    description: "Pricing description"
    plans:
      - name: "Plan Name"
        price: "$99"
        period: "per month"
        description: "Plan description"
        features:
          - "Feature 1"
          - "Feature 2"
        highlighted: true  # Optional
        cta:
          text: "Get Started"
          href: "/signup"
```

---

## 🔧 Best Practices

### 1. Content Guidelines

**Headlines:**
- Keep main headlines under 60 characters
- Use action-oriented language
- Focus on customer benefits

**Descriptions:**
- Limit to 2-3 sentences
- Be specific and concrete
- Avoid jargon unless industry-appropriate

**Images:**
- Use high-quality images (min 1200px width)
- Use Unsplash for stock photos: `https://images.unsplash.com/photo-{id}?w=1200`
- Always provide meaningful alt text for accessibility

### 2. Page Structure

**Recommended Page Structure:**
1. **Hero Section** - Main value proposition
2. **Features/Benefits** - Key offerings
3. **Social Proof** - Stats or testimonials
4. **CTA** - Clear next step

**Home Page:** 4-6 sections
**About Page:** 3-4 sections
**Services Page:** 3-5 sections
**Contact Page:** 2-3 sections

### 3. Navigation

- Limit main menu to 4-6 items
- Use clear, descriptive labels
- Include a CTA button for primary action

### 4. SEO Optimization

```yaml
metadata:
  title: "Primary Keyword - Brand Name (under 60 chars)"
  description: "Compelling description with keywords (under 160 chars)"
  keywords: "keyword1, keyword2, keyword3"  # Optional
  priority: 1.0  # Homepage: 1.0, Important: 0.8, Other: 0.5
```

### 5. Validation Checklist

Before building, check:
- [ ] All required fields are populated
- [ ] Image URLs are valid and accessible
- [ ] All internal links use correct slugs
- [ ] Contact form has required fields
- [ ] Theme preset exists in theme registry
- [ ] Template is registered in template-registry.ts
- [ ] No TypeScript errors: `npm run build`

---

## 🎯 Industry-Specific Tips

### Law Firms / Professional Services
- Theme: `legal-burgundy`, `elegant-navy`, `professional-blue`
- Focus on: Credentials, experience, case results
- Include: Team profiles, practice areas, testimonials

### Medical / Healthcare
- Theme: `medical-teal`, `fresh-green`
- Focus on: Patient care, services, credentials
- Include: Doctor profiles, services breakdown, FAQs

### Restaurants / Hospitality
- Theme: `warm-orange`, `creative-pink`
- Focus on: Menu, ambiance, chef story
- Include: Menu sections, testimonials, reservations

### Tech / SaaS
- Theme: `tech-cyan`, `modern-purple`
- Focus on: Product benefits, features, pricing
- Include: Feature comparisons, pricing, integrations

---

## 🐛 Troubleshooting

### Build Fails

**Error: Template not found**
```bash
# Solution: Check template path in template-registry.ts
# Ensure path matches actual file location
```

**Error: Invalid YAML**
```bash
# Solution: Validate YAML syntax
# Common issues: indentation, missing colons, quotes
```

**TypeScript Errors**
```bash
# Solution: Check type definitions
# Ensure all required fields are present
# Verify enum values match type definitions
```

### Images Not Loading

```yaml
# Bad - Relative path
image:
  src: "./images/hero.jpg"

# Good - Absolute URL
image:
  src: "https://images.unsplash.com/photo-xxx?w=1200"
```

### Navigation Not Working

```yaml
# Ensure slug matches page definition
navigation:
  menu:
    - label: "Services"
      href: "/services"  # Must match page slug

pages:
  - slug: "services"  # Matches navigation href
```

---

## 📚 Reference Templates

Study these production templates:

1. **law-firm-professional.yaml** - 4 pages, comprehensive
2. **medical-clinic-modern.yaml** - 4 pages, healthcare-focused
3. **restaurant-elegant.yaml** - 3 pages, hospitality-focused

---

## 🚀 Next Steps

1. **Create Your Template**
   - Copy reference template
   - Customize content and branding
   - Register in template-registry.ts

2. **Test Thoroughly**
   - Build and verify: `npm run build`
   - Check all pages render correctly
   - Test responsive design
   - Validate forms and links

3. **Deploy**
   - Commit to version control
   - Deploy to Vercel/Netlify
   - Test in production

---

**Need Help?** Check existing templates in `src/templates/sites/` for examples.
