# Template Ignite

**업종별 다중 페이지 웹사이트를 JSON/YAML 설정으로 자동 생성하는 시스템**

---

## 📍 프로젝트 개요

Template Ignite는 1인 기업과 개인 사무소를 위한 웹사이트 생성 시스템입니다. JSON/YAML 템플릿 하나로 여러 페이지를 가진 완전한 웹사이트를 자동으로 생성합니다.

### 핵심 기능
- **다중 페이지 생성**: 하나의 템플릿에서 여러 페이지 (홈, 소개, 서비스 등) 자동 생성
- **자동 네비게이션**: 헤더/푸터, 메뉴 자동 생성
- **19개 섹션 컴포넌트**: Hero, Features, CTA, Testimonials, Contact, Pricing, FAQ 등
- **테마 시스템**: 업종별 색상/디자인 프리셋
- **완전 반응형**: 모바일/태블릿/데스크톱 최적화

### 타겟 고객
변호사, 회계사, 병원, 레스토랑, SaaS 스타트업 등 빠른 웹사이트가 필요한 소규모 비즈니스

---

## 🏗️ 프로젝트 구조

```
template-ignite/
├── README.md                    # 이 파일
│
├── claudedocs/                  # 📚 프로젝트 문서
│   ├── NEXT_SESSION.md         # 다음 세션 가이드 ⭐
│   ├── PROJECT_STATUS.md       # 프로젝트 현황 ⭐
│   ├── PROJECT_DESIGN.md       # 전체 시스템 설계
│   ├── PROTOTYPE_GUIDE.md      # 프로토타입 참고
│   ├── TYPE_DEFINITIONS.md     # 타입 정의
│   └── SAMPLE_TEMPLATES.md     # 템플릿 예시
│
├── template-builder/            # 🔬 프로토타입 (완료)
│   ├── src/
│   │   └── components/sections/  # 19개 섹션 검증 완료
│   └── .claudedocs/             # 프로토타입 상세 문서
│
└── [메인 프로젝트]              # ⏳ 구현 예정 (루트에 생성)
    └── src/
        ├── app/                 # Next.js 페이지
        ├── components/
        │   ├── layout/          # Header, Footer, Navigation
        │   └── sections/        # 프로토타입에서 재사용
        ├── lib/
        │   ├── site-generator.ts  # 사이트 생성 엔진
        │   └── page-builder.ts    # 페이지 생성 엔진
        └── templates/
            └── sites/           # 사이트 템플릿
```

---

## 📊 현재 상태

### ✅ Phase 3 완료 (100%)

**다중 페이지 시스템** ✅:
- [x] 동적 라우팅 with SSG (Static Site Generation)
- [x] 사이트 레이아웃 통합 (Header/Footer)
- [x] 템플릿 검증 및 컴포넌트 방어 로직
- [x] 템플릿 선택 시스템
- [x] 문서화 및 성능 테스팅

**프로덕션 템플릿** (3개) ✅:
- [x] **법률사무소** (law-firm) - 4페이지, legal-burgundy 테마
- [x] **의료 클리닉** (medical-clinic) - 4페이지, medical-teal 테마
- [x] **레스토랑** (restaurant) - 3페이지, warm-orange 테마

**섹션 컴포넌트** (19개) ✅:
- Hero (3개), Features (2개), CTA (2개)
- Testimonials (2개), Contact (2개)
- Pricing (2개), FAQ (2개), Team (2개), Stats (2개)

**테마 시스템** (10개) ✅:
- professional-blue, modern-purple, minimal-gray
- warm-orange, fresh-green, elegant-navy
- medical-teal, legal-burgundy, tech-cyan, creative-pink

**성능** ✅:
- 빌드 시간: ~1.3초
- 페이지 생성: 21 pages/second
- TypeScript: ✅ No errors
- 모든 템플릿: ✅ 정상 빌드

### 🚀 Phase 4 계획

**확장 기능**:
- [ ] Contact Form 백엔드 (Resend/SendGrid)
- [ ] 추가 템플릿 (회계사무소, SaaS 등)
- [ ] CMS 연동 (Contentful, Sanity)
- [ ] 시각적 편집기

---

## 🚀 시작하기

### 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build
```

브라우저에서 http://localhost:3000 열기

### 템플릿 전환하기

`.env.local` 파일을 수정하여 템플릿을 전환할 수 있습니다:

```bash
# .env.local
NEXT_PUBLIC_ACTIVE_TEMPLATE=law-firm        # 법률사무소
NEXT_PUBLIC_ACTIVE_TEMPLATE=medical-clinic  # 의료 클리닉
NEXT_PUBLIC_ACTIVE_TEMPLATE=restaurant      # 레스토랑
```

**사용 가능한 템플릿:**

| 템플릿 ID | 이름 | 페이지 수 | 테마 |
|-----------|------|-----------|------|
| `law-firm` | 법률사무소 | 4 | legal-burgundy |
| `medical-clinic` | 의료 클리닉 | 4 | medical-teal |
| `restaurant` | 레스토랑 | 3 | warm-orange |

**빌드 후 확인:**
```bash
npm run build  # 정적 사이트 생성
```

### 프로토타입 확인하기

초기 프로토타입 컴포넌트를 확인하려면:

```bash
cd template-builder
npm install
npm run dev
```

---

## 📚 문서

### 즉시 확인할 문서

| 문서 | 설명 |
|------|------|
| [NEXT_SESSION.md](claudedocs/NEXT_SESSION.md) | 다음 작업 시작 가이드 ⭐ |
| [PROJECT_STATUS.md](claudedocs/PROJECT_STATUS.md) | 프로젝트 현황 및 계획 ⭐ |
| [PROJECT_DESIGN.md](claudedocs/PROJECT_DESIGN.md) | 전체 시스템 설계 |

### 참고 문서

| 문서 | 설명 |
|------|------|
| [PROTOTYPE_GUIDE.md](claudedocs/PROTOTYPE_GUIDE.md) | 프로토타입 구현 가이드 |
| [TYPE_DEFINITIONS.md](claudedocs/TYPE_DEFINITIONS.md) | TypeScript 타입 정의 |
| [SAMPLE_TEMPLATES.md](claudedocs/SAMPLE_TEMPLATES.md) | 템플릿 예시 |

### 프로토타입 문서

- [template-builder/README.md](template-builder/README.md) - 프로토타입 상세 문서
- [template-builder/.claudedocs/](template-builder/.claudedocs/) - 프로토타입 개발 기록

---

## 🎯 로드맵

### Phase 1: 프로토타입 ✅ (완료)
- [x] 19개 섹션 컴포넌트
- [x] StyleX 통합
- [x] 8개 데모 템플릿
- [x] 완전 반응형

### Phase 2: 메인 프로젝트 ✅ (완료)
- [x] Next.js 프로젝트 설정
- [x] 19개 섹션 컴포넌트 마이그레이션
- [x] 10개 테마 프리셋 시스템
- [x] YAML 기반 설정 시스템
- [x] TypeScript 타입 정의

### Phase 3: 다중 페이지 시스템 ✅ (완료)
- [x] 동적 라우팅 with SSG
- [x] 사이트 레이아웃 통합 (Header/Footer)
- [x] 템플릿 검증 및 방어 로직
- [x] 법률사무소 템플릿
- [x] 의료 클리닉 템플릿
- [x] 레스토랑 템플릿
- [x] 템플릿 선택 시스템
- [x] 성능 벤치마킹 & 문서화

### Phase 4: 확장 기능 (예정)
- [ ] Contact Form 백엔드 (Resend/SendGrid)
- [ ] 추가 템플릿 (회계사무소, SaaS 등)
- [ ] 시각적 편집기
- [ ] CMS 연동
- [ ] 다국어 지원

---

## 🛠 기술 스택

- **Framework**: Next.js 14+ (App Router, SSG)
- **Language**: TypeScript
- **Styling**: StyleX (Zero-runtime CSS-in-JS)
- **Icons**: Lucide React
- **Deployment**: Vercel (예정)

---

## 📖 사용 예시 (예정)

**사이트 템플릿** (`templates/sites/law-firm-site.json`):
```json
{
  "site": {
    "name": "김앤박 법률사무소",
    "domain": "kim-park-law.com",
    "theme": "professional-blue"
  },
  "navigation": {
    "menu": [
      { "label": "홈", "href": "/" },
      { "label": "소개", "href": "/about" },
      { "label": "업무분야", "href": "/services" },
      { "label": "연락처", "href": "/contact" }
    ]
  },
  "pages": [
    {
      "path": "/",
      "title": "홈",
      "sections": [...]
    },
    {
      "path": "/about",
      "title": "소개",
      "sections": [...]
    }
  ]
}
```

**실행:**
```bash
npm run generate -- templates/sites/law-firm-site.json
npm run build
```

**결과:** 완전한 다중 페이지 웹사이트 자동 생성

---

## 🤝 기여

현재 초기 개발 단계입니다. 프로토타입 검증이 완료되었고 메인 프로젝트 구현이 곧 시작됩니다.

---

## 📄 라이선스

MIT License

---

## 📞 프로젝트 정보

**프로젝트**: Template Ignite
**상태**: ✅ Phase 3 완료 (100%)
**진행률**: 프로덕션 준비 완료

**주요 성과**:
- ✅ 19개 섹션 컴포넌트
- ✅ 10개 테마 프리셋
- ✅ 3개 프로덕션 템플릿 (법률, 의료, 레스토랑)
- ✅ 템플릿 선택 시스템
- ✅ SSG 기반 다중 페이지 생성

---

**문서**:
- [PHASE3_STATUS.md](claudedocs/PHASE3_STATUS.md) - Phase 3 상세 현황
- [IMPLEMENTATION_STATUS.md](claudedocs/IMPLEMENTATION_STATUS.md) - 전체 구현 현황
- [PHASE3_ROADMAP.md](claudedocs/PHASE3_ROADMAP.md) - Phase 3 로드맵
