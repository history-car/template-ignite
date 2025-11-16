# Phase 3: Dynamic Routing & Template System - Roadmap

**Start Date**: Next Session
**Estimated Duration**: 2-3 sessions
**Dependencies**: Phase 1 ✅, Phase 2 ✅

---

## 🎯 Phase 3 Overview

Transform the multi-page site generator into a fully functional Next.js application with dynamic routing, template selection, and live preview capabilities.

### Main Objectives

1. ✅ **Phase 2 Complete** - Multi-page site generator, theme system, law firm template
2. 🔄 **Phase 3 Goals** - Dynamic routing, template integration, additional templates
3. 🎯 **End Goal** - Production-ready multi-site generator

---

## 📋 Implementation Checklist

### Step 1: Dynamic Routing (Priority 1) 🔴

**Estimated Time**: 1-2 hours

**Tasks**:
- [ ] Create `src/app/[slug]/page.tsx` for dynamic routes
- [ ] Implement `generateStaticParams()` for SSG
- [ ] Load site configuration in route handler
- [ ] Integrate `RenderSections` with optimized renderer
- [ ] Add metadata generation for SEO
- [ ] Test with law firm template

**Files to Create**:
```
src/app/[slug]/
├── page.tsx          # Dynamic route handler
└── layout.tsx        # Optional: slug-specific layout
```

**Implementation Pattern**:
```typescript
// src/app/[slug]/page.tsx
import { loadSiteConfig, getPageConfig } from '@/lib/site-generator';
import { RenderSections } from '@/lib/page-renderer-optimized';

export async function generateStaticParams() {
  const config = await loadSiteConfig('./src/templates/sites/law-firm-professional.yaml');
  return config.pages.map(page => ({ slug: page.slug }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const config = await loadSiteConfig('./src/templates/sites/law-firm-professional.yaml');
  const page = getPageConfig(config, params.slug);

  return <RenderSections sections={page.sections} />;
}
```

**Success Criteria**:
- ✅ All 4 law firm pages render correctly
- ✅ URLs work: `/`, `/about`, `/practice-areas`, `/contact`
- ✅ Static generation builds successfully
- ✅ SEO metadata appears correctly

---

### Step 2: Site Layout Integration (Priority 1) 🔴

**Estimated Time**: 1 hour

**Tasks**:
- [ ] Update `src/app/layout.tsx` with site-wide layout
- [ ] Integrate Header component with navigation from config
- [ ] Integrate Footer component with footer from config
- [ ] Apply theme colors dynamically
- [ ] Add WebVitalsReporter

**Implementation Pattern**:
```typescript
// src/app/layout.tsx
import { loadSiteConfig } from '@/lib/site-generator';
import { SiteLayout } from '@/components/layout/site-layout';
import { WebVitalsReporter } from '@/components/web-vitals-reporter';

export default async function RootLayout({ children }) {
  const config = await loadSiteConfig('./src/templates/sites/law-firm-professional.yaml');

  return (
    <html>
      <body>
        <SiteLayout
          siteName={config.site.name}
          navigation={config.navigation}
          footer={config.footer}
        >
          {children}
        </SiteLayout>
        <WebVitalsReporter />
      </body>
    </html>
  );
}
```

**Success Criteria**:
- ✅ Header appears on all pages with correct navigation
- ✅ Footer appears consistently
- ✅ Theme colors applied correctly
- ✅ Web Vitals tracking active

---

### Step 3: Template Testing & Validation (Priority 1) 🔴

**Estimated Time**: 1 hour

**Tasks**:
- [ ] Build production version (`npm run build`)
- [ ] Test all 4 pages load correctly
- [ ] Verify performance metrics with Lighthouse
- [ ] Check mobile responsiveness
- [ ] Validate SEO metadata
- [ ] Test navigation between pages

**Testing Checklist**:
```bash
# Development testing
npm run dev
# Visit: /, /about, /practice-areas, /contact

# Production build
npm run build
npm start

# Bundle analysis
npm run build:analyze

# Lighthouse (Chrome DevTools)
# Target scores:
# - Performance: >90
# - Accessibility: 100
# - Best Practices: >95
# - SEO: 100
```

**Success Criteria**:
- ✅ All pages load without errors
- ✅ Performance score >90
- ✅ Mobile-responsive
- ✅ SEO metadata complete

---

### Step 4: Medical Clinic Template (Priority 2) 🟡

**Estimated Time**: 1-2 hours

**Tasks**:
- [ ] Create `src/templates/sites/medical-clinic-modern.yaml`
- [ ] Use `medical-teal` theme
- [ ] Create 4 pages: Home, Services, Doctors, Contact
- [ ] Use appropriate sections for medical industry
- [ ] Add medical-specific content and imagery
- [ ] Test and validate

**Page Structure**:
```yaml
pages:
  - slug: "home"
    sections:
      - HeroCenteredImage (clinic photo)
      - FeaturesThreeColumn (services)
      - StatsSimple (patients served, years, doctors)
      - TestimonialsGrid
      - CTASimple

  - slug: "services"
    sections:
      - HeroFullWidth
      - FeaturesDetailed (medical services)
      - PricingThreeColumn (service packages)
      - CTASplit

  - slug: "doctors"
    sections:
      - HeroSplitLayout
      - TeamGrid (medical staff)
      - StatsHighlight
      - CTASimple

  - slug: "contact"
    sections:
      - ContactSplit
      - FAQAccordion (medical FAQs)
```

---

### Step 5: Restaurant Template (Priority 2) 🟡

**Estimated Time**: 1-2 hours

**Tasks**:
- [ ] Create `src/templates/sites/restaurant-elegant.yaml`
- [ ] Use `warm-orange` theme
- [ ] Create 3 pages: Home, Menu, Contact
- [ ] Use food/restaurant imagery
- [ ] Add reservation CTA
- [ ] Test and validate

**Page Structure**:
```yaml
pages:
  - slug: "home"
    sections:
      - HeroFullWidth (restaurant ambiance)
      - FeaturesThreeColumn (dining experience)
      - TestimonialsCarousel
      - CTASplit (reservation)

  - slug: "menu"
    sections:
      - HeroSplitLayout
      - FeaturesDetailed (appetizers)
      - FeaturesDetailed (entrees)
      - FeaturesDetailed (desserts)
      - CTASimple

  - slug: "contact"
    sections:
      - ContactSplit
      - StatsSimple (hours, location info)
```

---

### Step 6: Template Selection System (Priority 3) 🟢

**Estimated Time**: 2-3 hours

**Tasks**:
- [ ] Create template configuration file
- [ ] Add template metadata (name, description, industry)
- [ ] Create template selector utility
- [ ] Add environment variable for active template
- [ ] Document template switching process

**Template Registry**:
```typescript
// src/lib/template-registry.ts
export const templates = {
  'law-firm-professional': {
    name: 'Professional Law Firm',
    description: '4-page site for legal services',
    path: './src/templates/sites/law-firm-professional.yaml',
    theme: 'legal-burgundy',
    pages: 4,
  },
  'medical-clinic-modern': {
    name: 'Modern Medical Clinic',
    description: '4-page site for healthcare providers',
    path: './src/templates/sites/medical-clinic-modern.yaml',
    theme: 'medical-teal',
    pages: 4,
  },
  'restaurant-elegant': {
    name: 'Elegant Restaurant',
    description: '3-page site for dining establishments',
    path: './src/templates/sites/restaurant-elegant.yaml',
    theme: 'warm-orange',
    pages: 3,
  },
};
```

**Usage**:
```bash
# .env.local
ACTIVE_TEMPLATE=law-firm-professional
```

---

### Step 7: Documentation & Testing (Priority 3) 🟢

**Estimated Time**: 1 hour

**Tasks**:
- [ ] Update IMPLEMENTATION_STATUS.md
- [ ] Create template usage guide
- [ ] Document deployment process
- [ ] Create testing checklist
- [ ] Update NEXT_SESSION.md for Phase 4

---

## 🛠️ Technical Requirements

### Next.js App Router Features

**Required**:
- [x] Dynamic routes (`[slug]`)
- [ ] Static Site Generation (SSG)
- [ ] Metadata API for SEO
- [ ] Server Components
- [ ] Parallel Routes (optional)

### Performance Targets

- Initial bundle: <250KB ✅
- Per-page chunk: <100KB
- FCP: <2.5s on 3G ✅
- LCP: <3.8s on 3G ✅
- Lighthouse: >90

---

## 📦 Deliverables

### Phase 3 Complete When:

1. ✅ Dynamic routing fully functional
2. ✅ Law firm template renders in production
3. ✅ Medical clinic template complete
4. ✅ Restaurant template complete
5. ✅ Template selection system working
6. ✅ All performance targets met
7. ✅ Documentation updated
8. ✅ Production build successful

---

## 🚀 Quick Start Commands for Next Session

```bash
# Start fresh session
cd /Users/kimmanjoong/private-project/template-ignite

# Review Phase 2 completion
cat claudedocs/PHASE2_MULTIPAGE_SYSTEM.md
cat claudedocs/PERFORMANCE_OPTIMIZATIONS.md

# Check current status
npm run build

# Begin Phase 3 implementation
# 1. Create src/app/[slug]/page.tsx
# 2. Integrate site generator
# 3. Test with law firm template
```

---

## 📊 Progress Tracking

### Session 1 (Next Session)
**Focus**: Dynamic routing + law firm template integration
- [ ] Dynamic routing implementation
- [ ] Site layout integration
- [ ] Law firm template testing
- [ ] Performance validation

### Session 2
**Focus**: Additional templates
- [ ] Medical clinic template
- [ ] Restaurant template
- [ ] Template selection system

### Session 3 (Optional)
**Focus**: Polish & deployment
- [ ] Template management UI
- [ ] Advanced features
- [ ] Production deployment

---

## 🔗 Reference Documentation

**Phase 2 Completed**:
- `claudedocs/PHASE2_MULTIPAGE_SYSTEM.md` - Multi-page system architecture
- `claudedocs/PERFORMANCE_OPTIMIZATIONS.md` - Performance implementation
- `src/templates/sites/law-firm-professional.yaml` - Reference template

**Key Files**:
- `src/lib/site-generator.ts` - Site generation engine
- `src/lib/theme-presets.ts` - Theme system
- `src/lib/page-renderer-optimized.tsx` - Performance-optimized renderer

**Next.js Documentation**:
- [Dynamic Routes](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes)
- [generateStaticParams](https://nextjs.org/docs/app/api-reference/functions/generate-static-params)
- [Metadata](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)

---

## ⚠️ Important Notes

### Before Starting Phase 3

1. **Verify Phase 2 completion**:
   ```bash
   npm run build  # Should succeed
   ls src/lib/site-generator.ts  # Should exist
   ls src/templates/sites/law-firm-professional.yaml  # Should exist
   ```

2. **Install any missing dependencies**:
   ```bash
   npm install
   ```

3. **Review existing templates**:
   - Law firm template is production-ready
   - Theme system has 10 presets
   - Site generator is fully functional

### During Implementation

1. **Test incrementally** - Don't wait until the end
2. **Use optimized renderer** - `page-renderer-optimized.tsx` not `page-renderer.tsx`
3. **Monitor performance** - Web Vitals should stay "good"
4. **Keep documentation updated** - Update as you build

---

**Ready for Phase 3!** 🚀

**Next Session Start**:
1. Read this roadmap
2. Implement dynamic routing
3. Test law firm template
4. Proceed with additional templates

---

*Last Updated: 2025-11-16*
*Phase 2 Complete - Ready for Phase 3*
