# 🚀 빠른 시작 가이드

**Template Builder - 현재 상태 (2025-11-16 업데이트)**

---

## ✅ 현재 상태

```
✅ 19개 컴포넌트 완성 (Hero, Features, CTA, Testimonials, Contact, Pricing, FAQ, Team, Stats)
✅ 8개 템플릿 완성 (법률사무소, 병원, 회계사무소, 레스토랑, 포트폴리오, SaaS, Agency, Course)
✅ 13개 라우트 생성 (/, /law-firm, /medical, /accounting, /restaurant, /portfolio, /saas, /agency, /course, /test, /_not-found)
✅ 프로덕션 빌드 성공
✅ 전체 문서화 완료
⚠️ Course 템플릿 FeaturesDetailed 수정 필요 (다음 세션)
```

---

## 🎯 개발 서버 실행

```bash
# 개발 모드
npm run dev
# → http://localhost:3000

# 프로덕션 빌드
npm run build

# 타입 체크
npx tsc --noEmit
```

---

## 📊 템플릿 갤러리 (8개)

### 현재 접근 가능한 템플릿

| 번호 | 템플릿             | 경로          | 상태 | 섹션 수 |
| ---- | ------------------ | ------------- | ---- | ------- |
| 1    | 법률사무소 ⚖️      | `/law-firm`   | ✅   | 3       |
| 2    | 병원/클리닉 🏥     | `/medical`    | ✅   | 5       |
| 3    | 회계사무소 💼      | `/accounting` | ✅   | 5       |
| 4    | 레스토랑 🍽️        | `/restaurant` | ✅   | 5       |
| 5    | 포트폴리오 💻      | `/portfolio`  | ✅   | 5       |
| 6    | **SaaS 🚀**        | `/saas`       | ✅   | 6       |
| 7    | **에이전시 🎨**    | `/agency`     | ✅   | 5       |
| 8    | **온라인 강좌 📚** | `/course`     | ⚠️   | 6       |

**참고**: Course 템플릿은 FeaturesDetailed 섹션 수정 필요 (다음 세션)

---

## 🧩 컴포넌트 목록 (19개)

### Hero (3개)

- `HeroCenteredImage` - 중앙 정렬 + 이미지
- `HeroFullWidth` - 전체 배경 이미지
- `HeroSplitLayout` - 좌우 분할

### Features (2개)

- `FeaturesThreeColumn` - 3열 그리드
- `FeaturesDetailed` - 상세 설명 + 이미지

### CTA (2개)

- `CTASimple` - 중앙 정렬
- `CTASplit` - 분할 레이아웃

### Testimonials (2개)

- `TestimonialsGrid` - 그리드 레이아웃
- `TestimonialsCarousel` - 캐러셀

### Contact (2개)

- `ContactForm` - 중앙 폼
- `ContactSplit` - 연락처 + 폼

### Pricing (2개) ✨ NEW

- `PricingThreeColumn` - 3열 요금제
- `PricingComparison` - 비교 테이블

### FAQ (2개) ✨ NEW

- `FAQAccordion` - 아코디언
- `FAQTwoColumn` - 2열 레이아웃

### Team (2개) ✨ NEW

- `TeamGrid` - 그리드 레이아웃
- `TeamCards` - 카드 레이아웃

### Stats (2개) ✨ NEW

- `StatsSimple` - 단순 통계
- `StatsHighlight` - 강조 통계

---

## 🎯 다음 세션 TODO

### 🚨 최우선 작업 (10분, 필수)

1. **Course 템플릿 FeaturesDetailed 수정**

   ```bash
   # 파일: src/templates/landing-course.json
   # 수정: 3곳의 "features" 배열을 "details"로 변경
   # 위치: 프론트엔드, 백엔드, 배포 섹션
   ```

2. **프로덕션 빌드 실행**

   ```bash
   npm run build
   ```

3. **개발 서버 테스트**
   ```bash
   npm run dev
   # /course 페이지 확인
   ```

### 향후 로드맵

1. ✅ ~~추가 섹션 (Pricing, FAQ, Team, Stats)~~ 완료!
2. ✅ ~~샘플 템플릿 생성~~ 완료!
3. **Vercel 배포** - 실제 배포 및 테스트
4. **테마 시스템 확장** - 5개 색상 프리셋
5. **Contact Form 백엔드 연동** - API 엔드포인트
6. **시각적 편집기** - 드래그앤드롭 빌더
7. **다국어 지원** - i18n 구현

---

## 📁 문서 구조

### 필수 문서

1. **`README.md`** - 프로젝트 전체 개요
2. **`QUICK_START.md`** - 빠른 시작 가이드 (이 파일)
3. **`docs/SESSION_SUMMARY.md`** - 세션 요약
4. **`docs/COMPONENTS.md`** - 19개 컴포넌트 상세 문서
5. **`docs/TEMPLATE_GUIDE.md`** - JSON 템플릿 작성 가이드
6. **`docs/ICONS.md`** - 100+ 아이콘 목록
7. **`docs/DEPLOYMENT.md`** - 배포 가이드
8. **`docs/NEXT_SESSION.md`** - 다음 세션 가이드
9. **`docs/SESSION_2025-11-16_NAVIGATION.md`** - 네비게이션 업데이트 기록

---

## 💡 주요 개념

### 1. 템플릿 구조

```json
{
  "page": {
    "title": "페이지 제목",
    "description": "SEO 설명"
  },
  "sections": [
    {
      "type": "hero|features|cta|testimonials|contact|pricing|faq|team|stats",
      "variant": "ComponentName (PascalCase)",
      "content": {
        /* 섹션별 데이터 */
      }
    }
  ],
  "theme": {
    "preset": "professional-blue"
  }
}
```

### 2. 페이지 생성 패턴

```typescript
// src/app/[template-name]/page.tsx
import templateData from "@/templates/landing-[template-name].json";
import { renderSection } from "@/lib/section-renderer";

export default function Page() {
  return (
    <main>
      {templateData.sections.map((section, index) => (
        <div key={index}>{renderSection(section as any)}</div>
      ))}
    </main>
  );
}
```

### 3. 타입 안전성

```typescript
// 섹션별 타입 단언 필요
content={section.content as HeroFullWidthProps['content']}
```

---

## ⚡ 빠른 명령어

```bash
# 개발 서버 (localhost:3000)
npm run dev

# 프로덕션 빌드
npm run build

# 타입 체크만
npx tsc --noEmit

# 린트
npm run lint

# 전체 체크 (타입 + 빌드)
npx tsc --noEmit && npm run build
```

---

## 🐛 일반적인 문제 해결

### 1. 빌드 오류 (StyleX border)

```typescript
// ❌ 잘못된 방법
border: "1px solid #ccc"

// ✅ 올바른 방법
borderWidth: "1px",
borderStyle: "solid",
borderColor: colors.border
```

### 2. Variant 이름 오류

```json
// ❌ 잘못된 방법
"variant": "hero-centered-image"

// ✅ 올바른 방법
"variant": "HeroCenteredImage"
```

### 3. FeaturesDetailed 구조

```json
// ✅ 올바른 방법
{
  "type": "features",
  "variant": "FeaturesDetailed",
  "content": {
    "features": [
      {
        "icon": "CheckCircle",
        "title": "제목",
        "description": "설명",
        "details": ["항목1", "항목2"],  // ← "features" 아님!
        "image": { ... }
      }
    ]
  }
}
```

---

## 🎨 스타일 가이드

### 폰트 사이즈

- **PC**: `fontSize4`, `fontSizeBase`, `fontSizeSmall`
- **모바일**: 자동 조정 (반응형)

### 색상 사용

```typescript
colors.primary; // 주 색상
colors.background; // 배경
colors.text; // 기본 텍스트
colors.textMuted; // 보조 텍스트
colors.border; // 테두리
```

### 간격

```typescript
spacing.xs; // 8px
spacing.sm; // 12px
spacing.md; // 16px
spacing.lg; // 24px
spacing.xl; // 32px
spacing["2xl"]; // 48px
spacing["3xl"]; // 64px
spacing["4xl"]; // 80px
spacing["5xl"]; // 96px
```

---

## 📖 더 알아보기

- **컴포넌트 상세**: `docs/COMPONENTS.md`
- **템플릿 작성**: `docs/TEMPLATE_GUIDE.md`
- **아이콘 목록**: `docs/ICONS.md`
- **배포 방법**: `docs/DEPLOYMENT.md`
- **세션 기록**: `docs/SESSION_SUMMARY.md`

---

**마지막 업데이트**: 2025-11-16
**다음 작업**: Course 템플릿 FeaturesDetailed 수정 → 빌드 → 테스트 → 배포 준비
