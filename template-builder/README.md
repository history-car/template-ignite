# Template Builder

업종별로 최적화된 랜딩 페이지를 빠르게 제작할 수 있는 템플릿 기반 페이지 빌더 시스템입니다.

## 📋 목차

- [특징](#특징)
- [기술 스택](#기술-스택)
- [시작하기](#시작하기)
- [프로젝트 구조](#프로젝트-구조)
- [사용 가능한 템플릿](#사용-가능한-템플릿)
- [사용 가능한 섹션](#사용-가능한-섹션)
- [새 템플릿 만들기](#새-템플릿-만들기)
- [배포](#배포)
- [문서](#문서)

## ✨ 특징

- **19개 섹션 컴포넌트**: Hero, Features, CTA, Testimonials, Contact, Pricing, FAQ, Team, Stats 등 다양한 섹션
- **8개 업종별 템플릿**: 법률사무소, 병원, 회계사무소, 레스토랑, 포트폴리오, SaaS, 에이전시, 온라인 강의
- **JSON 기반 설정**: 코드 수정 없이 JSON 파일로 페이지 구성
- **완전한 반응형**: 모바일, 태블릿, 데스크톱 최적화
- **타입 안전**: TypeScript로 완벽한 타입 체크
- **디자인 시스템**: StyleX 기반 디자인 토큰
- **100+ 아이콘**: Lucide React 아이콘 내장
- **SEO 최적화**: 메타 태그, 시맨틱 HTML

## 🛠 기술 스택

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: StyleX (Zero-runtime CSS-in-JS)
- **Icons**: Lucide React
- **Deployment**: Vercel

## 🚀 시작하기

### 필수 요구사항

- Node.js 18.0 이상
- npm 또는 yarn

### 설치

```bash
# 저장소 클론
git clone <repository-url>
cd template-builder

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

개발 서버가 실행되면 [http://localhost:3000](http://localhost:3000)에서 확인할 수 있습니다.

### 빌드

```bash
# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

## 📁 프로젝트 구조

```
template-builder/
├── src/
│   ├── app/                    # Next.js 페이지
│   │   ├── page.tsx           # 메인 갤러리 페이지
│   │   ├── law-firm/          # 법률사무소 페이지
│   │   ├── medical/           # 병원 페이지
│   │   ├── accounting/        # 회계사무소 페이지
│   │   ├── restaurant/        # 레스토랑 페이지
│   │   ├── portfolio/         # 포트폴리오 페이지
│   │   ├── saas/              # SaaS 스타트업 페이지 ✨
│   │   ├── agency/            # 디자인 에이전시 페이지 ✨
│   │   ├── course/            # 온라인 강의 페이지 ✨
│   │   └── test/              # 컴포넌트 테스트 페이지
│   │
│   ├── components/
│   │   ├── shared/            # 공통 컴포넌트
│   │   │   ├── button/
│   │   │   ├── container/
│   │   │   └── heading/
│   │   │
│   │   └── sections/          # 섹션 컴포넌트 (19개)
│   │       ├── hero/          # Hero 섹션 (3개)
│   │       ├── features/      # Features 섹션 (2개)
│   │       ├── cta/           # CTA 섹션 (2개)
│   │       ├── testimonials/  # Testimonials 섹션 (2개)
│   │       ├── contact/       # Contact 섹션 (2개)
│   │       ├── pricing/       # Pricing 섹션 (2개) ✨
│   │       ├── faq/           # FAQ 섹션 (2개) ✨
│   │       ├── team/          # Team 섹션 (2개) ✨
│   │       └── stats/         # Stats 섹션 (2개) ✨
│   │
│   ├── templates/             # 템플릿 JSON 파일 (8개)
│   │   ├── landing-law-firm.json
│   │   ├── landing-medical-clinic.json
│   │   ├── landing-accounting-office.json
│   │   ├── landing-restaurant.json
│   │   ├── landing-portfolio.json
│   │   ├── landing-saas.json ✨
│   │   ├── landing-agency.json ✨
│   │   └── landing-course.json ✨
│   │
│   ├── types/                 # TypeScript 타입 정의
│   │   ├── section.types.ts
│   │   └── page.types.ts
│   │
│   ├── lib/                   # 유틸리티 함수
│   │   ├── icon-map.ts       # 아이콘 매핑
│   │   └── section-registry.ts
│   │
│   └── styles/                # 디자인 토큰
│       └── tokens.stylex.ts
│
└── public/                    # 정적 파일
    └── images/
```

## 🎨 사용 가능한 템플릿

| 템플릿 | 파일명 | 주요 섹션 | 대상 업종 |
|--------|--------|----------|----------|
| 법률사무소 | `landing-law-firm.json` | Hero, Features, Contact | 변호사, 법무법인 |
| 병원/클리닉 | `landing-medical-clinic.json` | Hero, Features, Testimonials, CTA, Contact | 병원, 의원, 클리닉 |
| 회계사무소 | `landing-accounting-office.json` | Hero, Features, CTA, Testimonials, Contact | 회계사, 세무사 |
| 레스토랑 | `landing-restaurant.json` | Hero, Features, Testimonials, CTA, Contact | 레스토랑, 카페 |
| 포트폴리오 | `landing-portfolio.json` | Hero, Features, Projects, Testimonials, Contact | 디자이너, 개발자 |
| **SaaS 스타트업** ✨ | `landing-saas.json` | Hero, Stats, Features, Pricing, Testimonials, FAQ, CTA | SaaS, 스타트업 |
| **디자인 에이전시** ✨ | `landing-agency.json` | Hero, Stats, Features, Team, Testimonials, FAQ, Contact | 디자인 에이전시, 크리에이티브 스튜디오 |
| **온라인 강의** ✨ | `landing-course.json` | Hero, Stats, Features, Pricing, Testimonials, FAQ, CTA | 온라인 강의, 교육 플랫폼 |

### 템플릿 미리보기

- 메인 갤러리: http://localhost:3000
- 법률사무소: http://localhost:3000/law-firm
- 병원/클리닉: http://localhost:3000/medical
- 회계사무소: http://localhost:3000/accounting
- 레스토랑: http://localhost:3000/restaurant
- 포트폴리오: http://localhost:3000/portfolio
- **SaaS 스타트업**: http://localhost:3000/saas ✨
- **디자인 에이전시**: http://localhost:3000/agency ✨
- **온라인 강의**: http://localhost:3000/course ✨

## 🧩 사용 가능한 섹션

### Hero 섹션 (3개)

| 컴포넌트 | 설명 | 주요 특징 |
|----------|------|----------|
| `HeroCenteredImage` | 중앙 정렬 히어로 | 이미지 우측 배치 |
| `HeroFullWidth` | 전체 너비 히어로 | 배경 이미지, 오버레이 |
| `HeroSplitLayout` | 분할 레이아웃 히어로 | 좌우 이미지 선택 가능 |

### Features 섹션 (2개)

| 컴포넌트 | 설명 | 주요 특징 |
|----------|------|----------|
| `FeaturesThreeColumn` | 3열 특징 그리드 | 아이콘, 제목, 설명 |
| `FeaturesDetailed` | 상세 특징 섹션 | 이미지, 상세 리스트 |

### CTA 섹션 (2개)

| 컴포넌트 | 설명 | 주요 특징 |
|----------|------|----------|
| `CTASimple` | 단순 CTA | 중앙 정렬, 1개 버튼 |
| `CTASplit` | 분할 CTA | 이미지, 2개 버튼 |

### Testimonials 섹션 (2개)

| 컴포넌트 | 설명 | 주요 특징 |
|----------|------|----------|
| `TestimonialsGrid` | 그리드 후기 | 여러 후기 동시 표시 |
| `TestimonialsCarousel` | 캐러셀 후기 | 자동 슬라이드, 네비게이션 |

### Contact 섹션 (2개)

| 컴포넌트 | 설명 | 주요 특징 |
|----------|------|----------|
| `ContactForm` | 연락 폼 | 중앙 정렬 폼 |
| `ContactSplit` | 분할 연락 섹션 | 연락처 정보 + 폼 |

### Pricing 섹션 (2개) ✨

| 컴포넌트 | 설명 | 주요 특징 |
|----------|------|----------|
| `PricingThreeColumn` | 3열 가격 플랜 | 3단계 가격 표시, 강조 플랜 |
| `PricingComparison` | 가격 비교표 | 상세 기능 비교, 여러 플랜 |

### FAQ 섹션 (2개) ✨

| 컴포넌트 | 설명 | 주요 특징 |
|----------|------|----------|
| `FAQAccordion` | 아코디언 FAQ | 접고 펼치기, 단일 열 |
| `FAQTwoColumn` | 2열 FAQ | 좌우 2열 레이아웃 |

### Team 섹션 (2개) ✨

| 컴포넌트 | 설명 | 주요 특징 |
|----------|------|----------|
| `TeamGrid` | 그리드 팀 소개 | 간결한 정보, 4열 그리드 |
| `TeamCards` | 카드형 팀 소개 | 상세 정보, 소셜 링크 |

### Stats 섹션 (2개) ✨

| 컴포넌트 | 설명 | 주요 특징 |
|----------|------|----------|
| `StatsSimple` | 단순 통계 | 4개 통계, 아이콘 + 숫자 |
| `StatsHighlight` | 강조 통계 | 상세 설명, 큰 레이아웃 |

## 📝 새 템플릿 만들기

### 1. 템플릿 JSON 파일 생성

`src/templates/` 폴더에 새 JSON 파일을 만듭니다.

```json
{
  "page": {
    "title": "페이지 제목",
    "description": "페이지 설명"
  },
  "sections": [
    {
      "type": "hero",
      "variant": "HeroCenteredImage",
      "content": {
        "headline": "메인 헤드라인",
        "description": "설명 텍스트",
        "cta": {
          "text": "버튼 텍스트",
          "href": "#contact"
        },
        "image": {
          "src": "https://images.unsplash.com/...",
          "alt": "이미지 설명"
        }
      }
    }
  ]
}
```

### 2. 페이지 컴포넌트 생성

`src/app/your-page/page.tsx` 파일을 만듭니다.

```tsx
import { HeroCenteredImage } from "@/components/sections/hero/hero-centered-image";
import template from "@/templates/your-template.json";

export const metadata = {
  title: template.page.title,
  description: template.page.description,
};

export default function YourPage() {
  return (
    <main>
      {template.sections.map((section, index) => {
        const key = `section-${index}`;

        if (section.variant === "HeroCenteredImage") {
          return <HeroCenteredImage key={key} content={section.content} />;
        }

        // 다른 섹션들...

        return null;
      })}
    </main>
  );
}
```

자세한 가이드는 [TEMPLATE_GUIDE.md](./docs/TEMPLATE_GUIDE.md)를 참고하세요.

## 🚀 배포

### Vercel 배포 (권장)

1. GitHub에 코드 푸시
2. [Vercel](https://vercel.com)에서 프로젝트 import
3. 자동 배포 완료

### 수동 빌드

```bash
npm run build
npm start
```

자세한 배포 가이드는 [DEPLOYMENT.md](./docs/DEPLOYMENT.md)를 참고하세요.

## 📚 문서

- [템플릿 작성 가이드](./docs/TEMPLATE_GUIDE.md) - JSON 템플릿 작성 방법
- [컴포넌트 문서](./docs/COMPONENTS.md) - 각 컴포넌트 상세 설명
- [아이콘 목록](./docs/ICONS.md) - 사용 가능한 아이콘 전체 목록
- [배포 가이드](./docs/DEPLOYMENT.md) - 배포 방법 상세 안내

## 🎯 로드맵

- [x] 추가 섹션 (Pricing, FAQ, Team, Stats) ✅
- [x] 신규 템플릿 (SaaS, Agency, Course) ✅
- [ ] 추가 테마 (5개 색상 프리셋)
- [ ] Contact Form 백엔드 연동
- [ ] 시각적 편집기
- [ ] 다국어 지원

## 📄 라이선스

MIT License

## 🤝 기여

이슈와 PR은 언제나 환영합니다!

---

**Template Builder** - 빠르고 쉬운 랜딩 페이지 제작
