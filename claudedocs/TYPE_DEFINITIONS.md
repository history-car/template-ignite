# TypeScript 타입 정의

프로젝트에서 사용할 모든 TypeScript 타입 정의

---

## 사용 방법

각 타입 정의를 해당 파일에 복사하여 사용:

- `src/types/section.types.ts` - 섹션 컴포넌트 타입
- `src/types/page.types.ts` - 페이지 설정 타입
- `src/types/theme.types.ts` - 테마 타입

---

## 1. 섹션 타입 (`src/types/section.types.ts`)

```typescript
// ==========================================
// 기본 섹션 Props
// ==========================================

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

// ==========================================
// Hero 섹션 타입
// ==========================================

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

export interface HeroFullWidthProps extends BaseSectionProps {
  content: {
    headline: string;
    subheadline?: string;
    cta: {
      text: string;
      href: string;
    };
    backgroundImage: {
      src: string;
      alt: string;
      overlay?: boolean;
      overlayOpacity?: number;
    };
  };
}

export interface HeroSplitLayoutProps extends BaseSectionProps {
  content: {
    headline: string;
    description: string;
    benefits: string[];
    cta: {
      text: string;
      href: string;
    };
    image: {
      src: string;
      alt: string;
      position: 'left' | 'right';
    };
  };
}

// ==========================================
// Features 섹션 타입
// ==========================================

export interface Feature {
  icon?: string;  // lucide-react 아이콘 이름
  title: string;
  description: string;
}

export interface FeaturesThreeColumnProps extends BaseSectionProps {
  content: {
    sectionTitle?: string;
    sectionDescription?: string;
    features: [Feature, Feature, Feature];  // 정확히 3개
  };
}

export interface FeaturesDetailedProps extends BaseSectionProps {
  content: {
    sectionTitle: string;
    sectionDescription?: string;
    features: Feature[];  // 유연한 개수
    layout: 'grid' | 'list';
  };
}

// ==========================================
// CTA 섹션 타입
// ==========================================

export interface CTASimpleProps extends BaseSectionProps {
  content: {
    headline: string;
    description?: string;
    cta: {
      text: string;
      href: string;
    };
  };
}

export interface CTASplitProps extends BaseSectionProps {
  content: {
    headline: string;
    description: string;
    primaryCta: {
      text: string;
      href: string;
    };
    secondaryCta: {
      text: string;
      href: string;
    };
    image?: {
      src: string;
      alt: string;
    };
  };
}

// ==========================================
// Testimonials 섹션 타입
// ==========================================

export interface Testimonial {
  quote: string;
  author: {
    name: string;
    title?: string;
    company?: string;
    avatar?: string;
  };
  rating?: number;  // 1-5
}

export interface TestimonialsGridProps extends BaseSectionProps {
  content: {
    sectionTitle?: string;
    testimonials: Testimonial[];
    columns?: 2 | 3;
  };
}

export interface TestimonialsListProps extends BaseSectionProps {
  content: {
    sectionTitle?: string;
    testimonials: Testimonial[];
  };
}

// ==========================================
// Contact 섹션 타입
// ==========================================

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
    submitAction: string;  // form action URL
  };
}

export interface ContactInfoProps extends BaseSectionProps {
  content: {
    headline: string;
    description?: string;
    contactMethods: Array<{
      type: 'phone' | 'email' | 'address' | 'hours';
      label: string;
      value: string;
      icon?: string;
    }>;
    socialLinks?: Array<{
      platform: 'facebook' | 'twitter' | 'linkedin' | 'instagram';
      url: string;
    }>;
  };
}

// ==========================================
// 유니온 타입 (모든 섹션 Props)
// ==========================================

export type SectionProps =
  | HeroCenteredImageProps
  | HeroFullWidthProps
  | HeroSplitLayoutProps
  | FeaturesThreeColumnProps
  | FeaturesDetailedProps
  | CTASimpleProps
  | CTASplitProps
  | TestimonialsGridProps
  | TestimonialsListProps
  | ContactFormProps
  | ContactInfoProps;

// ==========================================
// 섹션 타입 가드
// ==========================================

export function isHeroSection(
  props: SectionProps
): props is HeroCenteredImageProps | HeroFullWidthProps | HeroSplitLayoutProps {
  return 'headline' in props.content && 'cta' in props.content;
}

export function isFeaturesSection(
  props: SectionProps
): props is FeaturesThreeColumnProps | FeaturesDetailedProps {
  return 'features' in props.content;
}
```

---

## 2. 페이지 타입 (`src/types/page.types.ts`)

```typescript
import { SectionProps, ThemeOverride } from './section.types';

// ==========================================
// 섹션 설정 (YAML/JSON에서 파싱)
// ==========================================

export interface SectionConfig<TContent = unknown> {
  type: 'hero' | 'features' | 'cta' | 'testimonials' | 'contact';
  variant: string;  // 예: "HeroCenteredImage"
  content: TContent;
  theme?: ThemeOverride;
}

// ==========================================
// 페이지 설정
// ==========================================

export interface PageConfig {
  page: {
    title: string;
    description?: string;
    template?: string;  // 템플릿 이름 (선택적)
  };
  sections: SectionConfig[];
  theme: {
    preset: string;
    customColors?: {
      primary?: string;
      secondary?: string;
      background?: string;
      text?: string;
    };
    font?: {
      heading?: string;
      body?: string;
    };
  };
  seo?: {
    title: string;
    description: string;
    ogImage?: string;
    keywords?: string[];
  };
}

// ==========================================
// 템플릿 설정 (오버라이드 방식)
// ==========================================

export interface TemplateConfig extends PageConfig {
  template: {
    name: string;
    description: string;
  };
}

export interface ClientConfig {
  page: {
    title: string;
    description?: string;
    template: string;  // 사용할 템플릿 이름
  };
  overrides?: {
    [sectionType: string]: Record<string, unknown>;
  };
  theme?: Partial<PageConfig['theme']>;
  seo?: Partial<PageConfig['seo']>;
}

// ==========================================
// 런타임 섹션 (빌드 시 생성)
// ==========================================

export interface ResolvedSection<TProps extends BaseSectionProps = SectionProps> {
  id: string;
  component: React.ComponentType<TProps>;
  props: TProps;
}

// ==========================================
// 빌드된 페이지
// ==========================================

export interface ResolvedPage {
  config: PageConfig;
  sections: ResolvedSection[];
  theme: ResolvedTheme;
}

// ==========================================
// 테마 임포트
// ==========================================

import { ResolvedTheme } from './theme.types';
```

---

## 3. 테마 타입 (`src/types/theme.types.ts`)

```typescript
// ==========================================
// 테마 프리셋
// ==========================================

export interface ThemePreset {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    foreground: string;
    accent: string;
    muted: string;
  };
  fonts: {
    heading: string;
    body: string;
  };
  spacing: {
    section: string;
    container: string;
  };
  borderRadius: string;
}

// ==========================================
// 해석된 테마 (커스텀 색상 포함)
// ==========================================

export interface ResolvedTheme extends ThemePreset {
  customColors?: Record<string, string>;
}

// ==========================================
// 테마 오버라이드 (섹션별)
// ==========================================

export interface ThemeOverride {
  backgroundColor?: string;
  textColor?: string;
  primaryColor?: string;
  spacing?: 'compact' | 'normal' | 'spacious';
}

// ==========================================
// CSS 변수 맵핑
// ==========================================

export interface CSSVariables {
  '--color-primary': string;
  '--color-secondary': string;
  '--color-background': string;
  '--color-background-alt': string;
  '--color-text': string;
  '--color-text-muted': string;
  '--color-accent': string;
  '--color-primary-light': string;
  '--font-heading': string;
  '--font-body': string;
  '--spacing-section': string;
  '--spacing-container': string;
  '--border-radius': string;
}

// ==========================================
// 테마 유틸리티 타입
// ==========================================

export type ThemeColor = keyof ThemePreset['colors'];
export type ThemeFont = keyof ThemePreset['fonts'];
export type ThemeSpacing = keyof ThemePreset['spacing'];
```

---

## 4. 설정 타입 (`src/types/config.types.ts`)

```typescript
// ==========================================
// 빌드 설정
// ==========================================

export interface BuildConfig {
  templatesDir: string;
  configsDir: string;
  outputDir: string;
  publicDir: string;
}

// ==========================================
// 검증 설정
// ==========================================

export interface ValidationRule<T = unknown> {
  field: string;
  type: 'required' | 'optional' | 'array' | 'object';
  validator?: (value: T) => boolean;
  errorMessage?: string;
}

export interface ValidationSchema {
  [sectionType: string]: ValidationRule[];
}

// ==========================================
// 에러 타입
// ==========================================

export interface ValidationError<T = unknown> {
  field: string;
  message: string;
  received?: T;
}

export interface BuildError<TDetails = unknown> {
  type: 'validation' | 'build' | 'runtime';
  message: string;
  details?: TDetails;
}
```

---

## 5. 유틸리티 타입

```typescript
// ==========================================
// 공통 유틸리티 타입
// ==========================================

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type RequiredFields<T, K extends keyof T> = T & {
  [P in K]-?: T[P];
};

export type OptionalFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]?: T[P];
};

// ==========================================
// 컴포넌트 Prop 추출
// ==========================================

export type ExtractProps<T> = T extends React.ComponentType<infer P>
  ? P
  : never;

// ==========================================
// 섹션 콘텐츠 추출
// ==========================================

export type ExtractContent<T extends BaseSectionProps> = T['content'];
```

---

## 프로토타입용 간소화 버전

프로토타입에서는 다음 타입만 사용:

### `src/types/section.types.ts` (프로토타입)

```typescript
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
```

### `src/types/page.types.ts` (프로토타입)

```typescript
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
```

### `src/types/theme.types.ts` (프로토타입)

```typescript
export interface ThemePreset {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    foreground: string;
    accent: string;
    muted: string;
  };
  fonts: {
    heading: string;
    body: string;
  };
  spacing: {
    section: string;
    container: string;
  };
  borderRadius: string;
}

export interface ResolvedTheme extends ThemePreset {
  customColors?: Record<string, string>;
}
```

---

## 타입 사용 예시

### 컴포넌트에서 타입 사용

```typescript
// HeroCenteredImage.tsx
import { HeroCenteredImageProps } from '@/types/section.types';

export function HeroCenteredImage({ content, theme }: HeroCenteredImageProps) {
  // TypeScript가 content의 구조를 알고 있음
  const { headline, cta, image } = content;

  // 자동완성 지원
  return (
    <section>
      <h1>{headline}</h1>
      <a href={cta.href}>{cta.text}</a>
      <img src={image.src} alt={image.alt} />
    </section>
  );
}
```

### 페이지 빌더에서 타입 사용

```typescript
// pageBuilder.ts
import { PageConfig } from '@/types/page.types';

export function buildPage(config: PageConfig) {
  // config의 구조가 검증됨
  return config.sections.map(section => {
    // ...
  });
}
```

---

## 다음 세션에서 사용 방법

1. **프로토타입 시작 시**:
   ```bash
   # 프로토타입용 간소화 버전 타입 복사
   # TYPE_DEFINITIONS.md의 "프로토타입용 간소화 버전" 섹션 참고
   ```

2. **전체 MVP 구현 시**:
   ```bash
   # 전체 타입 정의 복사
   # TYPE_DEFINITIONS.md의 섹션 1, 2, 3 전체 복사
   ```

3. **타입 확장 시**:
   - 새 섹션 타입 추가: section.types.ts에 인터페이스 추가
   - SectionProps 유니온 타입에 추가
   - sectionRegistry.ts에 컴포넌트 등록
