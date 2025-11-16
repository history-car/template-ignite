# 다음 세션 시작 가이드

**최종 업데이트**: 2025-11-16
**현재 단계**: 프로토타입 검증 완료 → 메인 프로젝트 구현 시작

---

## 🎯 프로젝트 현황

### ✅ 완료된 것

- **프로토타입** (`template-builder/`): 19개 섹션 컴포넌트 검증 완료
- **설계 문서**: 전체 시스템 설계 완료

### ⏳ 해야 할 것

- **메인 프로젝트** (루트): 다중 페이지 생성 시스템 구현
  - 여러 페이지 자동 생성
  - 페이지 간 네비게이션
  - 테마 시스템
  - 사이트 빌더

---

## 📂 프로젝트 구조 이해

```
template-ignite/
├── claudedocs/              # 프로젝트 문서 (여기)
│   ├── NEXT_SESSION.md     # 이 파일
│   ├── PROJECT_STATUS.md   # 상세 현황
│   ├── PROJECT_DESIGN.md   # 전체 설계
│   └── ...
│
├── template-builder/        # 🔬 프로토타입 (완료)
│   └── src/
│       └── components/sections/  # 19개 섹션 검증됨
│
└── [메인 프로젝트]          # ⏳ 구현 필요 (루트에 생성)
    └── src/
        ├── app/             # 페이지
        ├── components/
        │   ├── layout/      # Header, Footer (신규)
        │   └── sections/    # 프로토타입에서 가져옴
        └── lib/
            ├── site-generator.ts  # 사이트 생성 (신규)
            └── page-builder.ts    # 페이지 생성 (신규)
```

---

## 🚀 다음 세션 시작 방법

### Option 1: 프로토타입 마무리 후 메인 시작 (권장)

**Step 1: 프로토타입 최종 검증** (10분)

```bash
cd template-builder

# Course 템플릿 마지막 수정
# src/templates/landing-course.json에서
# "features" → "details" 변경 (3곳)

# 빌드 테스트
npm run build

# 성공 확인
```

**Step 2: 메인 프로젝트 설계 확인** (10분)

```bash
cd ..
cat claudedocs/PROJECT_STATUS.md
cat claudedocs/PROJECT_DESIGN.md
```

**Step 3: 메인 프로젝트 구현 시작** (1시간)

```
"claudedocs/PROJECT_STATUS.md를 읽고, 루트에 메인 프로젝트를 시작해줘.
프로토타입의 섹션 컴포넌트를 재사용하면서 다중 페이지 시스템을 구현하는 거야."
```

---

### Option 2: 바로 메인 프로젝트 시작

```
"claudedocs/PROJECT_STATUS.md를 읽어줘.
프로토타입은 완료됐고, 이제 루트에 실제 다중 페이지 생성 시스템을 구현해야 해.
어떻게 시작하면 좋을지 계획을 세워줘."
```

---

## 📋 메인 프로젝트 구현 계획

### Phase 1: 프로젝트 초기화 (1-2시간)

```bash
# 루트에서 실행
npx create-next-app@latest src --typescript --app --no-tailwind
# 또는 수동 설정
```

**설치할 패키지:**

- next, react, react-dom
- @stylexjs/stylex (프로토타입과 동일)
- lucide-react
- yaml (템플릿 파싱용)

**초기 구조:**

```
src/
├── app/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── layout/          # 신규: Header, Footer, Navigation
│   ├── sections/        # 복사: template-builder/src/components/sections
│   └── shared/          # 복사: template-builder/src/components/shared
├── lib/
│   ├── site-generator.ts   # 신규: 사이트 생성 엔진
│   ├── page-builder.ts     # 신규: 페이지 생성 엔진
│   └── theme-resolver.ts   # 신규: 테마 시스템
├── types/
│   ├── site.types.ts       # 신규: 사이트 타입
│   ├── page.types.ts       # 수정: 다중 페이지 타입
│   └── section.types.ts    # 복사: 프로토타입
└── templates/
    └── sites/              # 신규: 사이트 템플릿
```

### Phase 2: 핵심 기능 구현 (3-4일)

**우선순위:**

1. 사이트 템플릿 스키마 정의
2. 페이지 생성 엔진
3. Header/Footer 컴포넌트
4. 자동 네비게이션
5. 테마 시스템

### Phase 3: 템플릿 작성 (1주)

**목표 템플릿:** (각 3-5 페이지)

1. 법률사무소 (홈, 소개, 업무분야, 연락처)
2. 병원/클리닉 (홈, 진료과목, 의료진, 예약)
3. 레스토랑 (홈, 메뉴, 예약, 위치)

---

## 📖 중요 문서

### 즉시 읽어야 할 문서

1. **PROJECT_STATUS.md** ⭐

   - 현재 상태 상세 설명
   - 프로토타입 vs 메인 프로젝트
   - 다음 단계 계획

2. **PROJECT_DESIGN.md**
   - 전체 시스템 아키텍처
   - 다중 페이지 시스템 설계
   - 원래 기획 의도

### 참고 문서

3. **PROTOTYPE_GUIDE.md**

   - 프로토타입에서 뭘 만들었는지
   - 어떤 컴포넌트를 재사용할지

4. **TYPE_DEFINITIONS.md**
   - 기존 타입 정의
   - 메인 프로젝트에 맞게 수정 필요

---

## ⚠️ 주의사항

### 프로토타입과 메인 프로젝트 구분

| 구분           | 프로토타입          | 메인 프로젝트           |
| -------------- | ------------------- | ----------------------- |
| **위치**       | `template-builder/` | 루트 `src/` (생성 필요) |
| **목적**       | 섹션 컴포넌트 검증  | 실제 사이트 생성 시스템 |
| **페이지**     | 단일 페이지 데모    | 다중 페이지 사이트      |
| **네비게이션** | 없음                | Header/Footer/Menu      |
| **템플릿**     | 섹션 나열           | 전체 사이트 정의        |

### 재사용 vs 신규 구현

**재사용 ✅**

- 19개 섹션 컴포넌트 (그대로 복사)
- Button, Container, Heading
- StyleX 토큰 시스템
- 섹션 타입 정의

**신규 구현 ⏳**

- Header, Footer, Navigation 컴포넌트
- 사이트 생성 엔진
- 페이지 생성 엔진
- 자동 라우팅 시스템
- 테마 시스템
- 사이트 템플릿 스키마

---

## 💡 빠른 시작 명령어

### 프로토타입 최종 체크

```bash
cd template-builder
npm run build
npm run dev
```

### 프로젝트 문서 읽기

```bash
cat claudedocs/PROJECT_STATUS.md
cat claudedocs/PROJECT_DESIGN.md
```

### 메인 프로젝트 시작 (Claude에게)

```
"claudedocs/PROJECT_STATUS.md를 읽고 메인 프로젝트 구현을 시작해줘."
```

---

## 🎯 다음 세션 목표

### 즉시 목표 (1시간)

1. 프로토타입 최종 빌드 성공
2. 메인 프로젝트 초기화
3. 기본 구조 설정

### 단기 목표 (1주)

1. 사이트 템플릿 스키마 정의
2. 페이지 생성 엔진 구현
3. Header/Footer 컴포넌트
4. 첫 번째 사이트 템플릿 작성

### 중기 목표 (1개월)

1. 5개 업종 사이트 템플릿 완성
2. 테마 시스템 구현
3. 배포 시스템 구축

---

**준비 완료!** 🚀

**핵심 포인트:**

1. 프로토타입(`template-builder/`) = 섹션 검증 완료, 참고용 유지
2. 메인 프로젝트(루트) = 이제 구현 시작
3. 19개 섹션은 재사용, 나머지는 신규 구현
