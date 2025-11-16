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

### ✅ 완료된 작업 (프로토타입)

**섹션 컴포넌트** (19개):
- Hero (3개), Features (2개), CTA (2개)
- Testimonials (2개), Contact (2개)
- Pricing (2개), FAQ (2개), Team (2개), Stats (2개)

**검증 완료:**
- Next.js 14+ & TypeScript
- StyleX (Zero-runtime CSS-in-JS)
- Lucide React (100+ 아이콘)
- JSON 기반 섹션 렌더링
- 완전 반응형 디자인

### ⏳ 구현 예정 (메인 프로젝트)

**핵심 시스템:**
- 다중 페이지 생성 엔진
- 자동 네비게이션 시스템
- 테마 시스템
- 사이트 템플릿 (5개 업종)

---

## 🚀 시작하기

### 프로토타입 확인하기

```bash
cd template-builder
npm install
npm run dev
```

브라우저에서 http://localhost:3000 열기

**데모 페이지:**
- `/law-firm` - 법률사무소
- `/medical` - 병원/클리닉
- `/restaurant` - 레스토랑
- `/saas` - SaaS 스타트업
- 총 8개 데모 페이지

### 메인 프로젝트 구현 (예정)

현재는 프로토타입만 완료되었습니다. 메인 프로젝트는 루트에 구현 예정입니다.

자세한 내용은 `claudedocs/NEXT_SESSION.md` 참조

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

### Phase 2: 메인 프로젝트 ⏳ (진행 예정)
- [ ] 다중 페이지 생성 엔진
- [ ] Header/Footer/Navigation
- [ ] 자동 라우팅
- [ ] 테마 시스템
- [ ] 5개 업종 사이트 템플릿

### Phase 3: 확장 기능 (예정)
- [ ] Contact Form 백엔드
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

## 📞 연락처

**프로젝트**: Template Ignite
**상태**: 프로토타입 완료, 메인 구현 준비 중
**진행률**: 25% (섹션 컴포넌트 검증 완료)

---

**다음 단계**: `claudedocs/NEXT_SESSION.md` 참조
