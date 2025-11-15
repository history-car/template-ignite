# 프로토타입 구현 가이드

## 프로토타입 목적

전체 MVP (7주) 구현 전에 핵심 개념을 검증하기 위한 최소 기능 프로토타입 제작

**예상 시간**: 3-5일

---

## 프로토타입 범위

### 구현할 컴포넌트 (3개)

1. **HeroCenteredImage** (Hero 섹션)
   - 중앙 정렬 헤드라인
   - 설명 텍스트
   - CTA 버튼
   - 우측 이미지

2. **FeaturesThreeColumn** (Features 섹션)
   - 3열 그리드
   - 아이콘 + 제목 + 설명
   - 반응형 (모바일: 1열)

3. **ContactForm** (Contact 섹션)
   - 이름, 이메일, 메시지 입력
   - 제출 버튼
   - 기본 검증

### 구현할 시스템

1. **페이지 빌더**
   - YAML 파싱
   - 섹션 매핑
   - 동적 렌더링

2. **샘플 템플릿**
   - 변호사 사무실 랜딩 페이지 (1개)

3. **테마 시스템**
   - 기본 테마 (1개)

---

## 구현 단계

### Phase 1: 프로젝트 설정 (30분)

#### 1.1 Next.js 프로젝트 생성

```bash
npx create-next-app@latest template-builder
# 선택사항:
# - TypeScript: Yes
# - ESLint: Yes
# - Tailwind CSS: No (StyleX 사용)
# - src/ directory: Yes
# - App Router: Yes
# - import alias: Yes (@/*)

cd template-builder
```

#### 1.2 필수 dependencies 설치

```bash
npm install yaml lucide-react @stylexjs/stylex
npm install -D @types/node @stylexswc/nextjs-plugin
```

**중요**: 
- `@stylexjs/nextjs-plugin`과 `@stylexjs/babel-plugin`은 deprecated되었습니다. 대신 `@stylexswc/nextjs-plugin`을 사용하세요.
- **StyleX 제약사항**: 
  - `border` shorthand 사용 불가 → `borderWidth`, `borderStyle`, `borderColor` 개별 속성 사용
  - `background` shorthand 사용 불가 → `backgroundColor`, `backgroundImage` 등 개별 속성 사용

#### 1.2.1 Next.js 설정 (next.config.ts)

```typescript
import type { NextConfig } from "next";
import stylexPlugin from "@stylexswc/nextjs-plugin/turbopack";

const nextConfig: NextConfig = {
  /* config options here */
};

export default stylexPlugin({
  rsOptions: {
    aliases: {
      "@/*": [join(__dirname, "src/*")],
    },
    unstable_moduleResolution: {
      type: "commonJS",
    },
    runtimeInjection: false,
    treeshakeCompensation: true,
  },
  stylexImports: ["stylex", "@stylexjs/stylex"],
})(nextConfig);
```

#### 1.3 폴더 구조 생성

```bash
mkdir -p src/components/shared
mkdir -p src/components/sections/hero
mkdir -p src/components/sections/features
mkdir -p src/components/sections/contact
mkdir -p src/components/registry
mkdir -p src/types
mkdir -p src/lib
mkdir -p src/templates
mkdir -p src/themes
mkdir -p configs
mkdir -p public/images
```

---

### Phase 2: 타입 정의 (1시간)

#### 2.1 기본 타입 (`src/types/section.types.ts`)

**내용**: `TYPE_DEFINITIONS.md` 파일의 타입을 복사

주요 타입:
- `BaseSectionProps`
- `HeroCenteredImageProps`
- `FeaturesThreeColumnProps`
- `ContactFormProps`

#### 2.2 페이지 타입 (`src/types/page.types.ts`)

**내용**: `TYPE_DEFINITIONS.md` 파일의 페이지 타입 복사

#### 2.3 테마 타입 (`src/types/theme.types.ts`)

**내용**: `TYPE_DEFINITIONS.md` 파일의 테마 타입 복사

---

### Phase 3: 디자인 토큰 및 공통 컴포넌트 (2.5시간)

#### 3.0 디자인 토큰 정의 (StyleX)

**파일**: `src/styles/tokens.stylex.ts`

```typescript
import * as stylex from '@stylexjs/stylex';

// Color tokens
export const colors = stylex.defineVars({
  primary: '#1E40AF',
  secondary: '#64748B',
  background: '#FFFFFF',
  backgroundAlt: '#F9FAFB',
  text: '#1F2937',
  textMuted: '#6B7280',
  primaryLight: '#DBEAFE',
});

// Typography tokens
export const typography = stylex.defineVars({
  fontHeading: '"Noto Serif KR", serif',
  fontBody: '"Pretendard", -apple-system, BlinkMacSystemFont, sans-serif',
  
  fontSize1: '3rem',      // h1
  fontSize2: '2.25rem',   // h2
  fontSize3: '1.875rem',  // h3
  fontSize4: '1.125rem',  // large text
  fontSizeBase: '1rem',
  fontSizeSmall: '0.875rem',
  
  fontSize1Mobile: '2rem',
  fontSize2Mobile: '1.5rem',
  fontSize3Mobile: '1.25rem',
  
  lineHeightHeading: '1.2',
  lineHeightBody: '1.6',
});

// Spacing tokens
export const spacing = stylex.defineVars({
  xs: '0.25rem',
  sm: '0.5rem',
  md: '0.75rem',
  lg: '1rem',
  xl: '1.5rem',
  '2xl': '2rem',
  '3xl': '2.5rem',
  '4xl': '3rem',
  '5xl': '5rem',
});

// Border radius tokens
export const radius = stylex.defineVars({
  sm: '0.375rem',
  md: '0.5rem',
  lg: '0.75rem',
  full: '9999px',
});

// Breakpoints
export const breakpoints = {
  mobile: '768px',
  tablet: '1024px',
  desktop: '1280px',
} as const;
```

**중요**: 모든 컴포넌트는 하드코딩된 값 대신 디자인 토큰을 사용합니다.

---

프로토타입에 필요한 최소 공통 컴포넌트만 구현

#### 3.1 Button 컴포넌트

**파일**: `src/components/shared/button/button.tsx`

```tsx

import { ButtonHTMLAttributes } from 'react';
import * as stylex from '@stylexjs/stylex';
import { colors, spacing, radius, typography } from '@/styles/tokens.stylex';

const styles = stylex.create({
  button: {
    padding: `${spacing.md} ${spacing.xl}`,
    borderRadius: radius.sm,
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.2s',
    borderWidth: 0,
    borderStyle: 'none',
    fontSize: typography.fontSizeBase,
  },
  primary: {
    backgroundColor: colors.primary,
    color: 'white',
    ':hover': {
      opacity: 0.9,
    },
  },
  secondary: {
    backgroundColor: colors.secondary,
    color: 'white',
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: colors.primary,
    color: colors.primary,
  },
  large: {
    padding: `${spacing.lg} ${spacing['2xl']}`,
    fontSize: typography.fontSize4,
  },
});

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'default' | 'large';
}

export function Button({
  children,
  variant = 'primary',
  size = 'default',
  ...props
}: ButtonProps) {
  return (
    <button
      {...stylex.props(
        styles.button,
        variant && styles[variant],
        size === 'large' && styles.large
      )}
      {...props}
    >
      {children}
    </button>
  );
}
```

**Export**: `src/components/shared/button/index.ts`

```ts
export { Button } from './button';
```

#### 3.2 Container 컴포넌트

**파일**: `src/components/shared/container/container.tsx`

```tsx
import * as stylex from '@stylexjs/stylex';
import { spacing, breakpoints } from '@/styles/tokens.stylex';

const styles = stylex.create({
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: `0 ${spacing.xl}`,
    [`@media (max-width: ${breakpoints.mobile})`]: {
      padding: `0 ${spacing.lg}`,
    },
  },
});

interface ContainerProps {
  children: React.ReactNode;
}

export function Container({ children }: ContainerProps) {
  return <div {...stylex.props(styles.container)}>{children}</div>;
}
```

#### 3.3 Heading 컴포넌트

**파일**: `src/components/shared/heading/heading.tsx`

```tsx
import { createElement, HTMLAttributes } from 'react';
import * as stylex from '@stylexjs/stylex';
import { typography, colors, breakpoints } from '@/styles/tokens.stylex';

const styles = stylex.create({
  heading: {
    fontWeight: 700,
    lineHeight: typography.lineHeightHeading,
    color: colors.text,
  },
  h1: {
    fontSize: typography.fontSize1,
    [`@media (max-width: ${breakpoints.mobile})`]: {
      fontSize: typography.fontSize1Mobile,
    },
  },
  h2: {
    fontSize: typography.fontSize2,
    [`@media (max-width: ${breakpoints.mobile})`]: {
      fontSize: typography.fontSize2Mobile,
    },
  },
  h3: {
    fontSize: typography.fontSize3,
    [`@media (max-width: ${breakpoints.mobile})`]: {
      fontSize: typography.fontSize3Mobile,
    },
  },
});

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
}

export function Heading({ as = 'h2', children, ...props }: HeadingProps) {
  const headingStyle = as in styles ? styles[as as keyof typeof styles] : null;
  
  return createElement(
    as,
    { ...stylex.props(styles.heading, headingStyle), ...props },
    children
  );
}
```

#### 3.4 공통 컴포넌트 Export

**파일**: `src/components/shared/index.ts`

```ts
export { Button } from './button';
export { Container } from './container';
export { Heading } from './heading';
```

---

### Phase 4: 섹션 컴포넌트 (4시간)

#### 4.1 HeroCenteredImage

**파일**: `src/components/sections/hero/hero-centered-image/hero-centered-image.tsx`

```tsx
'use client';

import { HeroCenteredImageProps } from '@/types/section.types';
import { Container } from '@/components/shared/container';
import { Heading } from '@/components/shared/heading';
import { Button } from '@/components/shared/button';
import Image from 'next/image';
import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  hero: {
    padding: '5rem 0',
    '@media (max-width: 768px)': {
      padding: '3rem 0',
    },
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '3rem',
    alignItems: 'center',
    '@media (max-width: 768px)': {
      gridTemplateColumns: '1fr',
      gap: '2rem',
    },
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  subheadline: {
    color: 'var(--color-primary)',
    fontWeight: 600,
    fontSize: '1.125rem',
  },
  headline: {
    margin: 0,
  },
  description: {
    fontSize: '1.125rem',
    color: 'var(--color-text-muted)',
    lineHeight: 1.6,
  },
  ctas: {
    display: 'flex',
    gap: '1rem',
    marginTop: '1rem',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
    },
  },
  imageWrapper: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '0.5rem',
  },
});

export function HeroCenteredImage({ content, theme }: HeroCenteredImageProps) {
  const { headline, subheadline, description, cta, secondaryCta, image } =
    content;

  return (
    <section
      {...stylex.props(styles.hero)}
      style={{
        backgroundColor: theme?.backgroundColor,
        color: theme?.textColor,
      }}
    >
      <Container>
        <div {...stylex.props(styles.grid)}>
          <div {...stylex.props(styles.content)}>
            {subheadline && (
              <p {...stylex.props(styles.subheadline)}>{subheadline}</p>
            )}
            <Heading as="h1" {...stylex.props(styles.headline)}>
              {headline}
            </Heading>
            {description && (
              <p {...stylex.props(styles.description)}>{description}</p>
            )}
            <div {...stylex.props(styles.ctas)}>
              <Button
                variant={cta.variant || 'primary'}
                onClick={() => (window.location.href = cta.href)}
              >
                {cta.text}
              </Button>
              {secondaryCta && (
                <Button
                  variant="outline"
                  onClick={() => (window.location.href = secondaryCta.href)}
                >
                  {secondaryCta.text}
                </Button>
              )}
            </div>
          </div>
          <div {...stylex.props(styles.imageWrapper)}>
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width || 600}
              height={image.height || 400}
              {...stylex.props(styles.image)}
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
```

#### 4.2 FeaturesThreeColumn

**파일**: `src/components/sections/features/features-three-column/features-three-column.tsx`

```tsx

import { FeaturesThreeColumnProps } from '@/types/section.types';
import { Container } from '@/components/shared/container';
import { Heading } from '@/components/shared/heading';
import { getIcon } from '@/lib/icon-map';
import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  features: {
    padding: '5rem 0',
    backgroundColor: 'var(--color-background-alt)',
    '@media (max-width: 768px)': {
      padding: '3rem 0',
    },
  },
  header: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  description: {
    fontSize: '1.125rem',
    color: 'var(--color-text-muted)',
    marginTop: '1rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '2.5rem',
    '@media (max-width: 768px)': {
      gridTemplateColumns: '1fr',
      gap: '2rem',
    },
  },
  feature: {
    textAlign: 'center',
  },
  iconWrapper: {
    display: 'inline-flex',
    padding: '1rem',
    backgroundColor: 'var(--color-primary-light)',
    borderRadius: '0.75rem',
    marginBottom: '1.5rem',
  },
  icon: {
    color: 'var(--color-primary)',
  },
  title: {
    fontSize: '1.25rem',
    fontWeight: 600,
    marginBottom: '0.75rem',
  },
  featureDescription: {
    color: 'var(--color-text-muted)',
    lineHeight: 1.6,
  },
});

export function FeaturesThreeColumn({
  content,
  theme,
}: FeaturesThreeColumnProps) {
  const { sectionTitle, sectionDescription, features } = content;

  return (
    <section
      {...stylex.props(styles.features)}
      style={{
        backgroundColor: theme?.backgroundColor,
        color: theme?.textColor,
      }}
    >
      <Container>
        {sectionTitle && (
          <div {...stylex.props(styles.header)}>
            <Heading as="h2">{sectionTitle}</Heading>
            {sectionDescription && (
              <p {...stylex.props(styles.description)}>{sectionDescription}</p>
            )}
          </div>
        )}
        <div {...stylex.props(styles.grid)}>
          {features.map((feature, index) => {
            const IconComponent = feature.icon ? getIcon(feature.icon) : null;

            return (
              <div key={index} {...stylex.props(styles.feature)}>
                {IconComponent && (
                  <div {...stylex.props(styles.iconWrapper)}>
                    <IconComponent {...stylex.props(styles.icon)} size={32} />
                  </div>
                )}
                <h3 {...stylex.props(styles.title)}>{feature.title}</h3>
                <p {...stylex.props(styles.featureDescription)}>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
```

#### 4.3 ContactForm

**파일**: `src/components/sections/contact/contact-form/contact-form.tsx`

```tsx

import { ContactFormProps } from '@/types/section.types';
import { Container } from '@/components/shared/container';
import { Heading } from '@/components/shared/heading';
import { Button } from '@/components/shared/button';
import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  contact: {
    padding: '5rem 0',
  },
  wrapper: {
    maxWidth: '600px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    marginBottom: '2.5rem',
  },
  description: {
    fontSize: '1.125rem',
    color: 'var(--color-text-muted)',
    marginTop: '1rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  field: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  label: {
    fontWeight: 600,
    fontSize: '0.875rem',
  },
  required: {
    color: '#ef4444',
    marginLeft: '0.25rem',
  },
  input: {
    padding: '0.75rem',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: '#d1d5db',
    borderRadius: '0.375rem',
    fontSize: '1rem',
    fontFamily: 'inherit',
    ':focus': {
      outline: 'none',
      borderColor: 'var(--color-primary)',
      boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)',
    },
  },
  textarea: {
    padding: '0.75rem',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: '#d1d5db',
    borderRadius: '0.375rem',
    fontSize: '1rem',
    fontFamily: 'inherit',
    resize: 'vertical',
    ':focus': {
      outline: 'none',
      borderColor: 'var(--color-primary)',
      boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)',
    },
  },
});

export function ContactForm({ content, theme }: ContactFormProps) {
  const { headline, description, fields, submitText, submitAction } = content;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 프로토타입: 콘솔 로그만
    const formData = new FormData(e.currentTarget);
    console.log('Form submitted:', Object.fromEntries(formData));
    alert('폼이 제출되었습니다 (프로토타입 모드)');
  };

  return (
    <section
      {...stylex.props(styles.contact)}
      style={{
        backgroundColor: theme?.backgroundColor,
        color: theme?.textColor,
      }}
    >
      <Container>
        <div {...stylex.props(styles.wrapper)}>
          <div {...stylex.props(styles.header)}>
            <Heading as="h2">{headline}</Heading>
            {description && (
              <p {...stylex.props(styles.description)}>{description}</p>
            )}
          </div>
          <form {...stylex.props(styles.form)} onSubmit={handleSubmit}>
            {fields.map((field, index) => (
              <div key={index} {...stylex.props(styles.field)}>
                <label htmlFor={field.name} {...stylex.props(styles.label)}>
                  {field.label}
                  {field.required && (
                    <span {...stylex.props(styles.required)}>*</span>
                  )}
                </label>
                {field.type === 'textarea' ? (
                  <textarea
                    id={field.name}
                    name={field.name}
                    placeholder={field.placeholder}
                    required={field.required}
                    {...stylex.props(styles.textarea)}
                    rows={4}
                  />
                ) : (
                  <input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    required={field.required}
                    {...stylex.props(styles.input)}
                  />
                )}
              </div>
            ))}
            <Button type="submit" variant="primary">
              {submitText}
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
}
```

---

### Phase 5: 페이지 빌더 시스템 (3시간)

#### 5.1 아이콘 매핑 시스템

**파일**: `src/lib/icon-map.ts`

```typescript
import { LucideIcon, Scale, Clock, Shield, CheckCircle, Users, Zap } from 'lucide-react';

export const iconMap: Record<string, LucideIcon> = {
  Scale,
  Clock,
  Shield,
  CheckCircle,
  Users,
  Zap,
};

export type IconName = keyof typeof iconMap;

export function getIcon(name: string): LucideIcon | null {
  return iconMap[name] || null;
}
```

**중요**: 타입 안전한 아이콘 로딩을 위해 명시적인 icon map을 사용합니다. 새로운 아이콘 추가 시 이 파일에 import하고 iconMap에 추가하세요.

#### 5.2 섹션 레지스트리 (선택사항)

**파일**: `src/components/registry/section-registry.ts`

```typescript
import { ComponentType } from 'react';
import { HeroCenteredImage } from '@/components/sections/hero/hero-centered-image/hero-centered-image';
import { FeaturesThreeColumn } from '@/components/sections/features/features-three-column/features-three-column';
import { ContactForm } from '@/components/sections/contact/contact-form/contact-form';

export interface SectionRegistry {
  [key: string]: ComponentType<any>;
}

export const sectionRegistry: SectionRegistry = {
  'HeroCenteredImage': HeroCenteredImage,
  'FeaturesThreeColumn': FeaturesThreeColumn,
  'ContactForm': ContactForm,
};

export function getVariantComponent(variant: string): ComponentType<any> {
  const component = sectionRegistry[variant];

  if (!component) {
    throw new Error(`Unknown section variant: ${variant}`);
  }

  return component;
}
```

**참고**: 프로토타입에서는 page.tsx에서 직접 switch 문을 사용하므로 이 레지스트리는 선택사항입니다. MVP 단계에서 더 많은 섹션이 추가될 때 유용합니다.

#### 5.2 페이지 빌더

**파일**: `src/lib/page-builder.ts`

```typescript
import { PageConfig } from '@/types/page.types';
import { getVariantComponent } from '@/components/registry/section-registry';

export function buildPage(config: PageConfig) {
  const sections = config.sections.map((sectionConfig, index) => {
    const { variant, content, theme } = sectionConfig;
    const Component = getVariantComponent(variant);

    return {
      id: `section-${index}`,
      Component,
      props: { content, theme },
    };
  });

  return { sections, theme: config.theme };
}
```

#### 5.3 테마 시스템

**파일**: `src/themes/professional-blue.ts`

```typescript
import { ThemePreset } from '@/types/theme.types';

export const professionalBlue: ThemePreset = {
  name: 'professional-blue',
  colors: {
    primary: '#1E40AF',
    secondary: '#64748B',
    background: '#FFFFFF',
    foreground: '#1F2937',
    accent: '#3B82F6',
    muted: '#6B7280',
  },
  fonts: {
    heading: '"Noto Serif KR", serif',
    body: '"Pretendard", -apple-system, sans-serif',
  },
  spacing: {
    section: '5rem',
    container: '1200px',
  },
  borderRadius: '0.375rem',
};
```

**파일**: `src/themes/index.ts`

```typescript
import { professionalBlue } from './professional-blue';
import { ThemePreset } from '@/types/theme.types';

export const themes: Record<string, ThemePreset> = {
  'professional-blue': professionalBlue,
};

export function getTheme(presetName: string): ThemePreset {
  return themes[presetName] || professionalBlue;
}
```

---

### Phase 6: 샘플 템플릿 (1시간)

**파일**: `src/templates/landing-law-firm.json`

JSON 형식으로 작성 (YAML 대신 - 프로토타입 간소화):

```json
{
  "page": {
    "title": "법률사무소 랜딩 페이지",
    "description": "전문 변호사 상담"
  },
  "sections": [
    {
      "type": "hero",
      "variant": "HeroCenteredImage",
      "content": {
        "headline": "법률 문제, 이제 쉽게 해결하세요",
        "subheadline": "20년 경력의 전문 변호사",
        "description": "민사, 형사, 가사 등 모든 법률 문제를 신속하고 정확하게 처리합니다.",
        "cta": {
          "text": "무료 상담 신청",
          "href": "#contact",
          "variant": "primary"
        },
        "secondaryCta": {
          "text": "상담 사례 보기",
          "href": "#features"
        },
        "image": {
          "src": "/images/lawyer-hero.jpg",
          "alt": "전문 변호사",
          "width": 600,
          "height": 400
        }
      }
    },
    {
      "type": "features",
      "variant": "FeaturesThreeColumn",
      "content": {
        "sectionTitle": "왜 저희를 선택해야 할까요?",
        "sectionDescription": "고객 만족을 최우선으로 하는 3가지 이유",
        "features": [
          {
            "icon": "Scale",
            "title": "전문성",
            "description": "20년 경력의 변호사가 직접 상담합니다"
          },
          {
            "icon": "Clock",
            "title": "신속성",
            "description": "24시간 이내 초기 상담 보장"
          },
          {
            "icon": "Shield",
            "title": "신뢰성",
            "description": "철저한 비밀 보장과 투명한 비용"
          }
        ]
      }
    },
    {
      "type": "contact",
      "variant": "ContactForm",
      "content": {
        "headline": "무료 상담 신청",
        "description": "아래 양식을 작성해주시면 24시간 이내에 연락드리겠습니다.",
        "fields": [
          {
            "name": "name",
            "type": "text",
            "label": "이름",
            "placeholder": "홍길동",
            "required": true
          },
          {
            "name": "phone",
            "type": "tel",
            "label": "연락처",
            "placeholder": "010-1234-5678",
            "required": true
          },
          {
            "name": "email",
            "type": "email",
            "label": "이메일",
            "placeholder": "example@email.com",
            "required": false
          },
          {
            "name": "message",
            "type": "textarea",
            "label": "상담 내용",
            "placeholder": "상담받고 싶은 내용을 간단히 작성해주세요",
            "required": true
          }
        ],
        "submitText": "상담 신청",
        "submitAction": "/api/contact"
      }
    }
  ],
  "theme": {
    "preset": "professional-blue"
  }
}
```

---

### Phase 7: Next.js 페이지 구현 (2시간)

#### 7.1 글로벌 스타일

**파일**: `src/app/globals.css`

```css
:root {
  --color-primary: #1E40AF;
  --color-secondary: #64748B;
  --color-background: #FFFFFF;
  --color-background-alt: #F9FAFB;
  --color-text: #1F2937;
  --color-text-muted: #6B7280;
  --color-primary-light: #DBEAFE;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
}

body {
  font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif;
  color: var(--color-text);
  background-color: var(--color-background);
  line-height: 1.6;
}

a {
  color: inherit;
  text-decoration: none;
}
```

#### 7.2 레이아웃

**파일**: `src/app/layout.tsx`

```tsx
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '템플릿 빌더 프로토타입',
  description: '페이지 빌더 시스템 프로토타입',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
```

#### 7.3 메인 페이지

**파일**: `src/app/page.tsx`

```tsx
import { HeroCenteredImage } from "@/components/sections/hero/hero-centered-image";
import { FeaturesThreeColumn } from "@/components/sections/features/features-three-column";
import { ContactForm } from "@/components/sections/contact/contact-form";
import landingTemplate from "@/templates/landing-law-firm.json";
import { PageConfig } from "@/types/page.types";

export default function Home() {
  const config = landingTemplate as PageConfig;

  return (
    <main>
      {sections.map(({ id, Component, props }) => (
        <Component key={id} {...props} />
      ))}
    </main>
  );
}
```

---

### Phase 8: 테스트 및 실행 (1시간)

#### 8.1 플레이스홀더 이미지 추가

**방법 1**: 무료 이미지 다운로드
- Unsplash, Pexels 등에서 변호사/법률 관련 이미지 다운로드
- `public/images/lawyer-hero.jpg`에 저장

**방법 2**: 플레이스홀더 사용
- `https://placehold.co/600x400/png` 같은 서비스 URL 사용

#### 8.2 개발 서버 실행

```bash
npm run dev
```

브라우저에서 `http://localhost:3000` 열기

#### 8.3 확인 사항

- [ ] Hero 섹션이 제대로 렌더링되는가?
- [ ] Features 3개가 그리드로 표시되는가?
- [ ] Contact Form이 작동하는가?
- [ ] 반응형이 제대로 동작하는가? (모바일 테스트)
- [ ] 콘솔 에러가 없는가?

---

## 프로토타입 완료 후

### 검증할 사항

1. **기술적 검증**
   - YAML/JSON → React 컴포넌트 변환 작동
   - TypeScript 타입 시스템 효과적
   - StyleX 스타일 격리 및 zero-runtime 작동

2. **설계 검증**
   - 컴포넌트 분류 전략이 실제로 편리한가?
   - 설정 파일 구조가 직관적인가?
   - 확장성 있는 구조인가?

3. **다음 단계 결정**
   - 전체 MVP 구현으로 진행?
   - 설계 조정 필요?
   - 추가 프로토타입 필요?

---


## 트러블슈팅

### 실제 발생한 문제 및 해결 방법

#### 1. StyleX border shorthand 에러

**에러 메시지**:
```
Panic occurred during transformation: border is not supported. 
Use border-width, border-style and border-color instead
```

**원인**: StyleX는 CSS shorthand 속성을 지원하지 않습니다.

**해결 방법**:
```typescript
// ❌ 잘못된 방법
const styles = stylex.create({
  button: {
    border: '2px solid blue',
  },
});

// ✅ 올바른 방법
const styles = stylex.create({
  button: {
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: 'blue',
  },
});
```

**적용 파일**:
- `src/components/shared/button/button.tsx`
- `src/components/sections/contact/contact-form/contact-form.tsx`

---

#### 2. Server/Client Component 경계 문제

**에러 메시지**:
```
Error: Functions cannot be passed directly to Client Components 
unless you explicitly expose it by marking it with "use server"
```

**원인**: 
- Server Component에서 동적으로 생성한 React 컴포넌트를 Client Component에 전달할 수 없음
- `buildPage()`가 반환한 Component 레퍼런스를 직렬화할 수 없음

**잘못된 구조**:
```typescript
// ❌ 작동하지 않음
// src/app/page.tsx (Server Component)
export default function Home() {
  const { sections } = buildPage(config);
  return (
    <main>
      {sections.map(({ Component, props }) => (
        <Component {...props} /> // Client Component에 함수 전달 불가
      ))}
    </main>
  );
}
```

**해결 방법 (옵션 2 - 권장)**:
```typescript
// ✅ variant 기반 조건부 렌더링
// src/app/page.tsx
import { HeroCenteredImage } from "@/components/sections/hero/hero-centered-image";
import { FeaturesThreeColumn } from "@/components/sections/features/features-three-column";
import { ContactForm } from "@/components/sections/contact/contact-form";
import landingTemplate from "@/templates/landing-law-firm.json";
import { PageConfig } from "@/types/page.types";

export default function Home() {
  const config = landingTemplate as PageConfig;

  return (
    <main>
      {config.sections.map((section, index) => {
        const key = `section-${index}`;
        
        switch (section.variant) {
          case "HeroCenteredImage":
            return <HeroCenteredImage key={key} content={section.content} theme={section.theme} />;
          case "FeaturesThreeColumn":
            return <FeaturesThreeColumn key={key} content={section.content} theme={section.theme} />;
          case "ContactForm":
            return <ContactForm key={key} content={section.content} theme={section.theme} />;
          default:
            return null;
        }
      })}
    </main>
  );
}
```

**장점**:
- Server Component 유지 → SEO 최적화
- 정적 생성 가능
- 타입 안전성 보장

---

#### 3. 동적 아이콘 로딩 타입 안전성 문제

**문제**: 
- `lucide-react`에서 아이콘을 동적으로 불러올 때 타입 안전성 부족
- `(Icons as any)[iconName]` 같은 unsafe 패턴 사용

**해결 방법**: 타입 안전한 icon map 생성

```typescript
// src/lib/icon-map.ts
import { LucideIcon, Scale, Clock, Shield, CheckCircle, Users, Zap } from 'lucide-react';

export const iconMap: Record<string, LucideIcon> = {
  Scale,
  Clock,
  Shield,
  CheckCircle,
  Users,
  Zap,
};

export type IconName = keyof typeof iconMap;

export function getIcon(name: string): LucideIcon | null {
  return iconMap[name] || null;
}
```

**사용 방법**:
```typescript
// src/components/sections/features/features-three-column/features-three-column.tsx
import { getIcon } from "@/lib/icon-map";

export function FeaturesThreeColumn({ content }: FeaturesThreeColumnProps) {
  return (
    <div>
      {features.map((feature, index) => {
        const IconComponent = feature.icon ? getIcon(feature.icon) : null;
        
        return (
          <div key={index}>
            {IconComponent && <IconComponent size={32} />}
            <h3>{feature.title}</h3>
          </div>
        );
      })}
    </div>
  );
}
```

**장점**:
- 타입 안전성 보장
- 존재하지 않는 아이콘 이름 처리
- 명시적인 아이콘 목록 관리

---

#### 4. Next.js 16 Turbopack과 webpack 충돌

**에러 메시지**:
```
ERROR: This build is using Turbopack, with a `webpack` config and no `turbopack` config.
```

**원인**: StyleX 플러그인이 webpack 설정을 추가했지만 Next.js 16은 Turbopack을 기본으로 사용

**해결 방법**: `--webpack` 플래그 명시 또는 빈 turbopack 설정 추가

```typescript
// next.config.ts
const nextConfig: NextConfig = {
  turbopack: {}, // 빈 설정 추가
};
```

또는 빌드 시:
```bash
npm run build -- --webpack
```

---

### 기타 자주 발생하는 문제

**5. TypeScript 타입 에러**
```bash
# 타입 정의 확인
# TYPE_DEFINITIONS.md의 타입을 정확히 복사했는지 확인
```

**6. CSS 변수가 작동하지 않음**
```bash
# globals.css가 layout.tsx에서 import되었는지 확인
```

**7. 이미지가 표시되지 않음**
```bash
# public/images/ 폴더에 이미지 있는지 확인
# Unsplash URL 사용 시 next.config.ts에 도메인 추가:
# images: { domains: ['images.unsplash.com'] }
```

---

## 추정 시간 분배

| 단계 | 예상 시간 | 누적 |
|------|----------|------|
| Phase 1: 프로젝트 설정 | 30분 | 30분 |
| Phase 2: 타입 정의 | 1시간 | 1.5시간 |
| Phase 3: 공통 컴포넌트 | 2시간 | 3.5시간 |
| Phase 4: 섹션 컴포넌트 | 4시간 | 7.5시간 |
| Phase 5: 페이지 빌더 | 3시간 | 10.5시간 |
| Phase 6: 샘플 템플릿 | 1시간 | 11.5시간 |
| Phase 7: Next.js 페이지 | 2시간 | 13.5시간 |
| Phase 8: 테스트 | 1시간 | 14.5시간 |

**총 예상**: 약 15시간 (3일 집중 작업 또는 5일 여유 작업)

---

## 다음 세션 준비사항

새 세션에서 바로 시작하려면:

```bash
# 1. 문서 확인
cat claudedocs/PROTOTYPE_GUIDE.md

# 2. 타입 정의 준비
cat claudedocs/TYPE_DEFINITIONS.md

# 3. 샘플 템플릿 준비
cat claudedocs/SAMPLE_TEMPLATES.md

# 4. 시작 명령
"프로토타입 구현을 시작해줘. claudedocs/PROTOTYPE_GUIDE.md를 따라서 Phase 1부터 진행해줘."
```
