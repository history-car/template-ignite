# Template Builder - 프로젝트 현황 (Claude Docs)

**최종 업데이트**: 2024-11-16
**프로젝트 버전**: 0.1.0
**상태**: 개발 중 (90% 완료)

---

## 📋 프로젝트 개요

**Template Builder**는 JSON 기반의 랜딩 페이지 빌더 시스템입니다. 다양한 업종에 최적화된 템플릿을 제공하며, 컴포넌트 기반 아키텍처로 쉽게 커스터마이징할 수 있습니다.

### 핵심 기술 스택
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: StyleX (Zero-runtime CSS-in-JS)
- **Icons**: Lucide React (100+ icons)
- **Build**: Webpack

---

## ✅ 완료된 작업 (Current Status)

### 1. 컴포넌트 개발 (19개)

#### Hero Sections (3개)
- ✅ `HeroCenteredImage` - 중앙 정렬 + 우측 이미지
- ✅ `HeroFullWidth` - 전체 배경 이미지
- ✅ `HeroSplitLayout` - 좌우 분할 레이아웃

#### Features Sections (2개)
- ✅ `FeaturesThreeColumn` - 3열 그리드
- ✅ `FeaturesDetailed` - 상세 설명 + 이미지

#### CTA Sections (2개)
- ✅ `CTASimple` - 중앙 정렬
- ✅ `CTASplit` - 분할 레이아웃

#### Testimonials Sections (2개)
- ✅ `TestimonialsGrid` - 그리드 레이아웃
- ✅ `TestimonialsCarousel` - 캐러셀

#### Contact Sections (2개)
- ✅ `ContactForm` - 중앙 폼
- ✅ `ContactSplit` - 연락처 정보 + 폼

#### Pricing Sections (2개) ✨ NEW
- ✅ `PricingThreeColumn` - 3열 요금제
- ✅ `PricingComparison` - 비교 테이블

#### FAQ Sections (2개) ✨ NEW
- ✅ `FAQAccordion` - 아코디언
- ✅ `FAQTwoColumn` - 2열 레이아웃

#### Team Sections (2개) ✨ NEW
- ✅ `TeamGrid` - 그리드 레이아웃
- ✅ `TeamCards` - 카드 레이아웃

#### Stats Sections (2개) ✨ NEW
- ✅ `StatsSimple` - 단순 통계
- ✅ `StatsHighlight` - 강조 통계

### 2. 템플릿 생성 (8개)

| # | 템플릿 | 파일 | 페이지 | 섹션 수 | 상태 |
|---|--------|------|--------|---------|------|
| 1 | 법률사무소 ⚖️ | `landing-law-firm.json` | `/law-firm` | 3 | ✅ |
| 2 | 병원/클리닉 🏥 | `landing-medical-clinic.json` | `/medical` | 5 | ✅ |
| 3 | 회계사무소 💼 | `landing-accounting-office.json` | `/accounting` | 5 | ✅ |
| 4 | 레스토랑 🍽️ | `landing-restaurant.json` | `/restaurant` | 5 | ✅ |
| 5 | 포트폴리오 💻 | `landing-portfolio.json` | `/portfolio` | 5 | ✅ |
| 6 | **SaaS 🚀** | `landing-saas.json` | `/saas` | 6 | ✅ |
| 7 | **에이전시 🎨** | `landing-agency.json` | `/agency` | 5 | ✅ |
| 8 | **온라인 강좌 📚** | `landing-course.json` | `/course` | 6 | ⚠️ |

**참고**: Course 템플릿은 FeaturesDetailed 섹션의 `features` → `details` 필드명 수정 필요

### 3. 페이지 구현 (11개)

```
✅ /                    - 템플릿 갤러리 (메인)
✅ /law-firm           - 법률사무소
✅ /medical            - 병원/클리닉
✅ /accounting         - 회계사무소
✅ /restaurant         - 레스토랑
✅ /portfolio          - 포트폴리오
✅ /saas               - SaaS (신규)
✅ /agency             - 에이전시 (신규)
⚠️ /course             - 온라인 강좌 (신규, 수정 필요)
✅ /test               - 컴포넌트 테스트
✅ /_not-found         - 404 페이지
```

### 4. 문서화 (100% 완료)

```
✅ README.md                              - 프로젝트 전체 개요
✅ QUICK_START.md                         - 빠른 시작 가이드
✅ docs/TEMPLATE_GUIDE.md                 - JSON 템플릿 작성 가이드
✅ docs/COMPONENTS.md                     - 19개 컴포넌트 상세 문서
✅ docs/ICONS.md                          - 100+ 아이콘 목록 및 사용 가이드
✅ docs/DEPLOYMENT.md                     - 배포 가이드 (Vercel, Docker, PM2)
✅ docs/SESSION_SUMMARY.md                - 세션 요약
✅ docs/NEXT_SESSION.md                   - 다음 세션 가이드
✅ docs/SESSION_2024-11-16_NAVIGATION.md  - 네비게이션 업데이트 기록
✅ .claudedocs/PROJECT_STATUS.md          - 프로젝트 현황 (이 파일)
```

### 5. 빌드 시스템

```
✅ TypeScript 설정 완료
✅ Next.js App Router 설정
✅ StyleX 통합
✅ Webpack 빌드 최적화
✅ 프로덕션 빌드 성공 (13개 라우트)
```

---

## 🎨 아키텍처

### 디렉토리 구조

```
template-builder/
├── src/
│   ├── app/                      # Next.js 페이지 (11개)
│   │   ├── page.tsx              # 메인 갤러리
│   │   ├── law-firm/
│   │   ├── medical/
│   │   ├── accounting/
│   │   ├── restaurant/
│   │   ├── portfolio/
│   │   ├── saas/                 # ✨ NEW
│   │   ├── agency/               # ✨ NEW
│   │   ├── course/               # ✨ NEW
│   │   └── test/
│   ├── components/
│   │   ├── sections/             # 19개 섹션 컴포넌트
│   │   │   ├── hero/            # 3개
│   │   │   ├── features/        # 2개
│   │   │   ├── cta/             # 2개
│   │   │   ├── testimonials/    # 2개
│   │   │   ├── contact/         # 2개
│   │   │   ├── pricing/         # 2개 ✨
│   │   │   ├── faq/             # 2개 ✨
│   │   │   ├── team/            # 2개 ✨
│   │   │   └── stats/           # 2개 ✨
│   │   └── shared/              # Button, Container, Heading
│   ├── lib/
│   │   └── section-registry.ts  # 섹션 매핑
│   ├── styles/
│   │   └── tokens.stylex.ts     # 디자인 토큰
│   ├── templates/               # 8개 JSON 템플릿
│   └── types/
│       └── section.types.ts     # TypeScript 타입
├── docs/                        # 문서 (9개)
├── .claudedocs/                 # Claude 문서
└── public/                      # 정적 파일
```

### 데이터 흐름

```
JSON Template
    ↓
Page Component (App Router)
    ↓
Section Renderer (lib/section-registry.ts)
    ↓
Section Component
    ↓
Styled with StyleX
    ↓
Rendered HTML
```

### 타입 시스템

```typescript
// section.types.ts
type SectionType = "hero" | "features" | "cta" | "testimonials" | "contact" | "pricing" | "faq" | "team" | "stats";

interface Section {
  type: SectionType;
  variant: string;  // PascalCase (e.g., "HeroCenteredImage")
  content: Record<string, any>;
}

// 각 섹션별로 구체적인 Props 타입 정의
interface HeroCenteredImageProps {
  content: {
    headline: string;
    subheadline?: string;
    description?: string;
    cta?: ButtonProps;
    secondaryCta?: ButtonProps;
    image?: ImageProps;
  };
}
```

---

## 🔧 기술 세부사항

### StyleX 사용

```typescript
// 토큰 시스템
import { spacing, colors, radius, typography, breakpoints } from "@/styles/tokens.stylex";

// 스타일 정의
const styles = stylex.create({
  container: {
    padding: spacing.xl,
    backgroundColor: colors.background,
    borderRadius: radius.lg,
  }
});

// 반응형
const responsive = stylex.create({
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    [`@media (max-width: ${breakpoints.tablet})`]: {
      gridTemplateColumns: "1fr",
    },
  }
});
```

### 컴포넌트 패턴

```typescript
// 섹션 컴포넌트 구조
interface HeroProps {
  content: {
    headline: string;
    // ... other props
  };
}

export function Hero({ content }: HeroProps) {
  return (
    <section {...stylex.props(styles.hero)}>
      <Container>
        <Heading as="h1">{content.headline}</Heading>
        {/* ... */}
      </Container>
    </section>
  );
}
```

### JSON 템플릿 구조

```json
{
  "page": {
    "title": "페이지 제목",
    "description": "SEO 설명"
  },
  "sections": [
    {
      "type": "hero",
      "variant": "HeroCenteredImage",
      "content": {
        "headline": "환영합니다",
        "description": "설명 텍스트"
      }
    }
  ],
  "theme": {
    "preset": "professional-blue"
  }
}
```

---

## 🚨 알려진 이슈

### 1. Course 템플릿 - FeaturesDetailed 수정 필요
**파일**: `src/templates/landing-course.json`
**문제**: FeaturesDetailed 컴포넌트의 `features` 배열을 `details`로 변경 필요
**위치**: 3곳 (프론트엔드, 백엔드, 배포 섹션)
**우선순위**: 🚨 High (다음 세션 최우선)

**수정 방법**:
```json
// ❌ 잘못된 구조
{
  "icon": "Code",
  "title": "프론트엔드 개발",
  "description": "...",
  "features": [  // ← 이것을 "details"로 변경
    "React 기초",
    "..."
  ]
}

// ✅ 올바른 구조
{
  "icon": "Code",
  "title": "프론트엔드 개발",
  "description": "...",
  "details": [  // ← 정확한 필드명
    "React 기초",
    "..."
  ]
}
```

---

## 📊 프로젝트 메트릭

### 코드 통계
- **컴포넌트**: 19개 섹션 + 3개 공유 = 22개
- **페이지**: 11개
- **템플릿**: 8개
- **라우트**: 13개
- **문서**: 10개

### 빌드 성능
- **컴파일 시간**: ~1.6초
- **정적 생성**: 357.6ms (13개 페이지)
- **타입 체크**: 통과 ✅
- **번들 크기**: 최적화됨

### 코드 품질
- ✅ TypeScript strict mode
- ✅ StyleX 토큰 시스템
- ✅ PascalCase variant 네이밍
- ✅ 반응형 디자인
- ✅ 접근성 (ARIA labels)

---

## 🎯 다음 단계 (Roadmap)

### 즉시 (다음 세션)
1. ⚠️ **Course 템플릿 FeaturesDetailed 수정** (10분)
2. 🔧 **프로덕션 빌드 재실행** (5분)
3. 🧪 **전체 페이지 테스트** (10분)

### 단기 (1-2주)
1. **Vercel 배포**
   - Vercel 프로젝트 생성
   - 환경 변수 설정
   - 프로덕션 배포
   - 도메인 연결

2. **Contact Form 백엔드**
   - API 라우트 구현 (`/api/contact`)
   - 이메일 전송 (Resend/SendGrid)
   - Form validation
   - 스팸 방지 (reCAPTCHA)

3. **테마 시스템 확장**
   - 5개 색상 프리셋 (Blue, Green, Purple, Orange, Red)
   - 다크 모드 지원
   - 테마 전환 UI

### 중기 (1-2개월)
1. **시각적 편집기**
   - 드래그앤드롭 빌더
   - 실시간 미리보기
   - JSON 내보내기

2. **다국어 지원**
   - i18n 구현
   - 한국어/영어 지원
   - 번역 관리

3. **CMS 통합**
   - Contentful/Sanity 연동
   - 동적 콘텐츠 관리

### 장기 (3개월+)
1. **고급 기능**
   - A/B 테스팅
   - 분석 대시보드
   - SEO 최적화 도구

2. **확장**
   - WordPress 플러그인
   - Shopify 앱
   - API 서비스화

---

## 📖 참고 자료

### 내부 문서
- `README.md` - 프로젝트 개요
- `QUICK_START.md` - 빠른 시작
- `docs/TEMPLATE_GUIDE.md` - 템플릿 작성
- `docs/COMPONENTS.md` - 컴포넌트 상세
- `docs/DEPLOYMENT.md` - 배포 가이드

### 외부 링크
- [Next.js 16 Documentation](https://nextjs.org/docs)
- [StyleX Documentation](https://stylexjs.com)
- [Lucide Icons](https://lucide.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

---

## 🤝 기여 가이드

### 코드 컨벤션
1. **Variant 이름**: PascalCase (`HeroCenteredImage`)
2. **파일 이름**: kebab-case (`hero-centered-image.tsx`)
3. **폰트 사이즈**: PC는 `fontSize4`, `fontSizeBase`, `fontSizeSmall`
4. **StyleX**: 토큰 시스템 사용, border 속성 분리

### 새 섹션 추가하기
1. 컴포넌트 생성: `src/components/sections/[type]/[variant].tsx`
2. 타입 정의: `src/types/section.types.ts`
3. 레지스트리 등록: `src/lib/section-registry.ts`
4. 문서화: `docs/COMPONENTS.md`

### 새 템플릿 추가하기
1. JSON 생성: `src/templates/landing-[name].json`
2. 페이지 생성: `src/app/[name]/page.tsx`
3. 루트 갤러리 업데이트: `src/app/page.tsx`
4. 문서화: `docs/TEMPLATE_GUIDE.md`

---

## 📞 연락처

**프로젝트**: Template Builder
**Repository**: /Users/kimmanjoong/private-project/template-ignite/template-builder
**최종 업데이트**: 2024-11-16

---

**Status**: 🟢 Active Development (90% Complete)
**Next Milestone**: Course 템플릿 수정 → Vercel 배포
