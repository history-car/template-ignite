# 다음 세션 시작 가이드

## 프로젝트 컨텍스트

**프로젝트 명**: 템플릿 기반 페이지 생성 시스템
**목적**: YAML/JSON 설정으로 정적 웹페이지를 자동 생성하는 시스템
**타겟 고객**: 1인 기업, 개인 사무소 (변호사, 회계사 등)
**현재 단계**: 브레인스토밍 완료, 프로토타입 구현 준비 완료

---

## 📚 문서 구조

claudedocs/ 폴더에 있는 모든 문서:

1. **PROJECT_DESIGN.md** - 전체 프로젝트 설계 문서
   - 기술 스택, 아키텍처, MVP 범위
   - 7주 구현 로드맵

2. **PROTOTYPE_GUIDE.md** - 프로토타입 구현 가이드
   - Phase별 구현 단계 (8단계)
   - 예상 시간: 3-5일 (약 15시간)
   - 구현할 컴포넌트: HeroCenteredImage, FeaturesThreeColumn, ContactForm

3. **TYPE_DEFINITIONS.md** - TypeScript 타입 정의
   - 섹션 타입 (`section.types.ts`)
   - 페이지 타입 (`page.types.ts`)
   - 테마 타입 (`theme.types.ts`)

4. **SAMPLE_TEMPLATES.md** - YAML/JSON 템플릿 예시
   - 변호사 사무실 랜딩 페이지 템플릿
   - 고객 설정 파일 예시
   - lucide-react 아이콘 참고

5. **NEXT_SESSION.md** - 이 문서
   - 다음 세션 시작 방법

---

## 🎯 브레인스토밍 결과 요약

### 확정된 설계 결정사항

| 항목 | 결정 | 이유 |
|------|------|------|
| **프레임워크** | Next.js 14+ (App Router) | SSG, 성능, SEO |
| **타입 시스템** | TypeScript (엄격) | 안정성, 자동완성 |
| **스타일링** | StyleX | Zero-runtime, 타입 안전, 성능 |
| **파일 네이밍** | kebab-case | 일관성, 가독성 |
| **컴포넌트 분류** | 기능 중심 (hero/, features/, etc.) | 재사용성 |
| **네이밍** | 설명적 이름 (HeroCenteredImage) | 명확성 |
| **설정 파일** | 템플릿 + 오버라이드 | 재사용성, 간결성 |
| **변형 선택** | 이름 기반 (variant: "HeroCenteredImage") | 일관성 |
| **배포** | Vercel | 호스팅 포함 |

### MVP 범위 (11개 컴포넌트)

- Hero: 3개 (HeroCenteredImage, HeroFullWidth, HeroSplitLayout)
- Features: 2개 (FeaturesThreeColumn, FeaturesDetailed)
- CTA: 2개 (CTASimple, CTASplit)
- Testimonials: 2개 (TestimonialsGrid, TestimonialsList)
- Contact: 2개 (ContactForm, ContactInfo)

### 프로토타입 범위 (3개 컴포넌트)

- HeroCenteredImage
- FeaturesThreeColumn
- ContactForm

---

## 🚀 다음 세션에서 바로 시작하는 방법

### Option 1: 프로토타입 구현 시작 (권장)

```bash
# 새 세션에서 이 명령어 입력:
"프로토타입 구현을 시작해줘. claudedocs/PROTOTYPE_GUIDE.md를 따라서 Phase 1부터 진행해줘."
```

**Claude가 할 일**:
1. PROTOTYPE_GUIDE.md 읽기
2. Phase 1부터 순차적으로 구현
3. 각 Phase 완료 시 확인 요청

**예상 소요 시간**: 3-5일

---

### Option 2: 전체 MVP 구현 시작

```bash
# 새 세션에서 이 명령어 입력:
"전체 MVP 구현을 시작해줘. claudedocs/PROJECT_DESIGN.md의 로드맵을 따라 Phase 1부터 진행해줘."
```

**Claude가 할 일**:
1. PROJECT_DESIGN.md의 7주 로드맵 참고
2. Phase 1: 프로젝트 설정부터 시작
3. 전체 11개 컴포넌트 구현

**예상 소요 시간**: 7주

---

### Option 3: 문서 확인 및 질문

```bash
# 새 세션에서 이 명령어 입력:
"claudedocs/ 폴더의 문서들을 읽고 프로젝트 설계를 요약해줘. 그리고 불명확한 부분이 있으면 질문해줘."
```

**Claude가 할 일**:
1. 모든 문서 읽기
2. 프로젝트 이해도 확인
3. 추가 질문 또는 명확화 필요 사항 제기

---

## 📋 프로토타입 구현 체크리스트

새 세션에서 프로토타입을 구현할 때 확인할 사항:

### Phase 1: 프로젝트 설정 ✅
- [ ] Next.js 프로젝트 생성
- [ ] dependencies 설치 (`yaml`, `lucide-react`, `clsx`, `cva`)
- [ ] 폴더 구조 생성
- [ ] TypeScript 설정

### Phase 2: 타입 정의 ✅
- [ ] `src/types/section.types.ts` 작성
- [ ] `src/types/page.types.ts` 작성
- [ ] `src/types/theme.types.ts` 작성

### Phase 3: 공통 컴포넌트 ✅
- [ ] Button 컴포넌트
- [ ] Container 컴포넌트
- [ ] Heading 컴포넌트

### Phase 4: 섹션 컴포넌트 ✅
- [ ] HeroCenteredImage
- [ ] FeaturesThreeColumn
- [ ] ContactForm

### Phase 5: 페이지 빌더 시스템 ✅
- [ ] sectionRegistry.ts
- [ ] pageBuilder.ts
- [ ] themeResolver.ts

### Phase 6: 샘플 템플릿 ✅
- [ ] landing-law-firm.json

### Phase 7: Next.js 페이지 ✅
- [ ] globals.css
- [ ] layout.tsx
- [ ] page.tsx

### Phase 8: 테스트 ✅
- [ ] 개발 서버 실행
- [ ] 플레이스홀더 이미지 추가
- [ ] 반응형 테스트
- [ ] 기능 검증

---

## 🔧 구현 시 주의사항

### 1. 타입 정의
- `TYPE_DEFINITIONS.md`의 "프로토타입용 간소화 버전" 사용
- 복사-붙여넣기 시 indentation 확인

### 2. 컴포넌트 구현
- `PROTOTYPE_GUIDE.md`의 코드를 정확히 따를 것
- Export 패턴: `index.ts`에서 re-export

### 3. 이미지 처리
- 프로토타입: 플레이스홀더 이미지 사용 가능
- `https://placehold.co/600x400/png` 또는 Unsplash

### 4. 아이콘
- lucide-react 사용
- 아이콘 이름: PascalCase (예: `Scale`, `Clock`, `Shield`)
- `SAMPLE_TEMPLATES.md`에 아이콘 목록 참고

---

## 🐛 예상되는 문제 및 해결법

### 문제 1: TypeScript 타입 에러
**해결**: TYPE_DEFINITIONS.md의 타입을 정확히 복사했는지 확인

### 문제 2: CSS 변수 작동 안 함
**해결**: `globals.css`가 `layout.tsx`에서 import되었는지 확인

### 문제 3: 이미지 표시 안 됨
**해결**:
- `public/images/` 폴더에 이미지 있는지 확인
- Next.js Image 컴포넌트 사용 시 width, height 필수

### 문제 4: lucide-react 아이콘 에러
**해결**:
- 아이콘 이름 PascalCase 확인
- `import * as Icons from 'lucide-react'` 방식 사용

---

## 📊 진행 상황 추적

### 현재 상태
- ✅ 브레인스토밍 완료
- ✅ 프로젝트 설계 문서 작성
- ✅ 프로토타입 구현 가이드 작성
- ✅ 타입 정의 작성
- ✅ 샘플 템플릿 작성
- ⏳ 프로토타입 구현 대기 중

### 다음 마일스톤
1. **프로토타입 완료** (3-5일)
2. **프로토타입 검증** (1일)
3. **전체 MVP Phase 1 시작** (1주)

---

## 💡 추천 시작 명령어

새 세션을 시작할 때 다음 명령어 중 하나를 사용하세요:

### 🎯 프로토타입 즉시 시작 (가장 권장)
```
"프로토타입 구현을 시작해줘. claudedocs/PROTOTYPE_GUIDE.md를 따라서 Phase 1부터 진행해줘. 각 Phase가 완료되면 다음 Phase로 넘어가기 전에 확인을 받을게."
```

### 📖 문서 먼저 확인
```
"claudedocs/ 폴더의 모든 문서를 읽고 프로젝트를 이해했는지 확인해줘. 그리고 프로토타입 구현 계획을 요약해줘."
```

### 🔍 특정 부분 먼저 검토
```
"claudedocs/PROJECT_DESIGN.md를 읽고 프로젝트 설계를 요약해줘. 그리고 프로토타입 범위를 확인해줘."
```

### ⚡ 빠른 시작 (문서 확인 생략)
```
"Next.js 프로젝트를 생성하고 claudedocs/PROTOTYPE_GUIDE.md의 Phase 1을 실행해줘."
```

---

## 📁 프로젝트 구조 참고

프로토타입 완료 후 예상 구조:

```
template-builder/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── shared/
│   │   │   ├── button/
│   │   │   ├── container/
│   │   │   └── heading/
│   │   ├── sections/
│   │   │   ├── hero/
│   │   │   │   └── hero-centered-image/
│   │   │   ├── features/
│   │   │   │   └── features-three-column/
│   │   │   └── contact/
│   │   │       └── contact-form/
│   │   └── registry/
│   │       └── section-registry.ts
│   ├── types/
│   │   ├── section.types.ts
│   │   ├── page.types.ts
│   │   └── theme.types.ts
│   ├── lib/
│   │   └── page-builder.ts
│   ├── themes/
│   │   ├── professional-blue.ts
│   │   └── index.ts
│   └── templates/
│       └── landing-law-firm.json
├── public/
│   └── images/
│       └── lawyer-hero.jpg
├── claudedocs/
│   ├── PROJECT_DESIGN.md
│   ├── PROTOTYPE_GUIDE.md
│   ├── TYPE_DEFINITIONS.md
│   ├── SAMPLE_TEMPLATES.md
│   └── NEXT_SESSION.md
├── package.json
└── tsconfig.json
```

---

## ✅ 세션 전환 준비 완료

이 문서를 포함한 모든 문서가 준비되었습니다.

**새 세션에서 Claude에게 전달할 메시지**:

```
안녕하세요! 템플릿 기반 페이지 생성 시스템 프로젝트를 이어서 진행하려고 합니다.

먼저 claudedocs/NEXT_SESSION.md를 읽어주세요. 그리고 프로토타입 구현을 시작해주세요.

claudedocs/PROTOTYPE_GUIDE.md를 따라 Phase 1부터 진행해주시고, 각 Phase가 완료되면 다음으로 넘어가기 전에 확인해주세요.
```

---

## 📌 중요 참고사항

1. **문서 읽기 우선**: 새 세션에서는 반드시 문서를 먼저 읽도록 요청
2. **단계별 진행**: 한 번에 모든 것을 하려 하지 말고 Phase별로 진행
3. **검증**: 각 Phase 완료 후 테스트 및 검증
4. **유연성**: 문서는 가이드이며, 필요시 조정 가능

---

## 🎓 학습 포인트

이 프로젝트에서 배울 수 있는 것:

1. **Next.js SSG**: 정적 사이트 생성
2. **TypeScript**: 엄격한 타입 시스템
3. **컴포넌트 설계**: 재사용 가능한 아키텍처
4. **설정 기반 시스템**: YAML/JSON 기반 페이지 생성
5. **StyleX**: Zero-runtime CSS-in-JS, 타입 안전한 스타일링
6. **테마 시스템**: 동적 테마 적용
7. **kebab-case 네이밍**: 일관된 파일/폴더 명명 규칙

---

## 🔗 유용한 링크

- Next.js 문서: https://nextjs.org/docs
- TypeScript 문서: https://www.typescriptlang.org/docs
- lucide-react 아이콘: https://lucide.dev/icons/
- StyleX: https://stylexjs.com/
- Vercel 배포: https://vercel.com/docs

---

**준비 완료!** 새 세션을 시작하세요! 🚀
