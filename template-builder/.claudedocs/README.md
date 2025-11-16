# Claude Docs - Template Builder

**프로젝트**: Template Builder
**버전**: 0.1.0
**최종 업데이트**: 2025-11-16

---

## 📁 이 폴더에 대하여

`.claudedocs` 폴더는 Claude Code 세션을 위한 프로젝트 문서입니다. 다음 세션에서 빠르게 프로젝트 상태를 파악하고 작업을 이어갈 수 있도록 구성되었습니다.

---

## 📚 문서 목록

### 프로젝트 문서 (`project/`)

#### PROJECT_STATUS.md

**프로젝트 전체 현황**

- ✅ 완료된 작업 (19개 컴포넌트, 8개 템플릿)
- 🎨 아키텍처 및 디렉토리 구조
- 🔧 기술 세부사항
- 🚨 알려진 이슈
- 📊 프로젝트 메트릭
- 🎯 다음 단계 로드맵

**언제 읽어야 하나요?**

- 새 세션을 시작할 때
- 프로젝트 전체 상태를 확인하고 싶을 때
- 아키텍처를 이해하고 싶을 때

#### TEMPLATES_INDEX.md

**템플릿 전체 목록 및 분석**

- 8개 템플릿 상세 정보
- 섹션 구성 및 특징
- 섹션 사용 통계
- 템플릿 비교표
- 업종별 추천 템플릿
- 다음 템플릿 후보

**언제 읽어야 하나요?**

- 새 템플릿을 추가할 때
- 기존 템플릿을 수정할 때
- 섹션 사용 패턴을 분석할 때

---

### 세션 문서 (`sessions/`)

#### SESSION_SUMMARY.md

**전체 세션 요약**

- 모든 작업 내역
- Phase별 작업 분류
- 다음 단계 TODO

#### NEXT_SESSION.md

**다음 세션 가이드**

- 즉시 실행할 작업
- 우선순위 정리
- 상세 실행 가이드

#### SESSION_2025-11-16_NAVIGATION.md

**네비게이션 업데이트 세션 기록**

- 루트 페이지 수정 내역
- 빌드 검증 결과

#### TEST_REPORT.md

**테스트 리포트**

- 테스트 결과 및 커버리지

---

### 메타 문서

#### README.md

**이 문서 (메타 가이드)**

- `.claudedocs` 폴더 설명
- 문서 목록 및 사용 가이드
- 빠른 참조 링크

---

## 🚀 빠른 시작

### 다음 세션 시작 시 읽을 순서

1. **`project/PROJECT_STATUS.md`** (2분)

   - 현재 상태 확인
   - 알려진 이슈 파악
   - 다음 작업 우선순위 확인

2. **`../docs/guides/QUICK_START.md`** (1분)

   - 즉시 실행할 명령어 확인
   - 개발 서버 시작

3. **`project/TEMPLATES_INDEX.md`** (필요 시)

   - 템플릿 작업 시 참고

4. **`sessions/SESSION_SUMMARY.md`** (필요 시)
   - 이전 세션 작업 내역 상세 확인

---

## 📂 프로젝트 문서 전체 구조

```
template-builder/
├── README.md                             # 프로젝트 개요
│
├── .claudedocs/                          # 🤖 Claude 전용 문서
│   ├── README.md                         # Claude Docs 가이드 (이 파일)
│   ├── project/                          # 프로젝트 현황
│   │   ├── PROJECT_STATUS.md            # 전체 현황 및 아키텍처
│   │   └── TEMPLATES_INDEX.md           # 템플릿 인덱스
│   └── sessions/                         # 세션 기록
│       ├── SESSION_SUMMARY.md           # 전체 세션 요약
│       ├── NEXT_SESSION.md              # 다음 세션 TODO
│       ├── SESSION_2025-11-16_NAVIGATION.md
│       └── TEST_REPORT.md               # 테스트 리포트
│
└── docs/                                 # 📚 사용자 문서
    ├── README.md                         # 문서 인덱스
    ├── guides/                           # 가이드
    │   ├── QUICK_START.md               # 빠른 시작
    │   └── PAGE_BUILDER_GUIDE.md        # 페이지 빌더
    └── reference/                        # 레퍼런스
        ├── COMPONENTS.md                # 컴포넌트 문서
        ├── TEMPLATE_GUIDE.md            # 템플릿 가이드
        ├── ICONS.md                     # 아이콘 목록
        └── DEPLOYMENT.md                # 배포 가이드
```

---

## 🎯 문서 사용 시나리오

### 시나리오 1: 새 세션 시작

```
1. .claudedocs/PROJECT_STATUS.md      - 현재 상태 파악
2. QUICK_START.md                      - 명령어 확인
3. npm run dev                         - 개발 서버 시작
```

### 시나리오 2: 새 템플릿 추가

```
1. .claudedocs/TEMPLATES_INDEX.md     - 기존 템플릿 패턴 확인
2. docs/TEMPLATE_GUIDE.md             - JSON 구조 가이드
3. docs/COMPONENTS.md                 - 사용 가능한 컴포넌트
4. docs/ICONS.md                      - 아이콘 선택
```

### 시나리오 3: 컴포넌트 수정

```
1. docs/COMPONENTS.md                 - 컴포넌트 Props 확인
2. .claudedocs/TEMPLATES_INDEX.md    - 영향받는 템플릿 파악
3. src/components/sections/...       - 코드 수정
```

### 시나리오 4: 배포 준비

```
1. .claudedocs/PROJECT_STATUS.md     - 알려진 이슈 확인
2. docs/DEPLOYMENT.md                - 배포 가이드
3. npm run build                     - 프로덕션 빌드
```

---

## ⚡ 빠른 참조

### 핵심 명령어

```bash
# 개발 서버
npm run dev

# 빌드
npm run build

# 타입 체크
npx tsc --noEmit
```

### 현재 상태 (2025-11-16)

```
✅ 19개 컴포넌트
✅ 8개 템플릿
✅ 13개 라우트
⚠️ Course 템플릿 수정 필요
```

### 다음 작업

```
1. Course 템플릿 FeaturesDetailed 수정 (10분)
2. 프로덕션 빌드 (5분)
3. 전체 테스트 (10분)
```

---

## 🔗 주요 링크

### 내부 문서

- [프로젝트 현황](project/PROJECT_STATUS.md)
- [템플릿 인덱스](project/TEMPLATES_INDEX.md)
- [세션 요약](sessions/SESSION_SUMMARY.md)
- [다음 세션](sessions/NEXT_SESSION.md)
- [빠른 시작](../docs/guides/QUICK_START.md)
- [컴포넌트 문서](../docs/reference/COMPONENTS.md)
- [템플릿 가이드](../docs/reference/TEMPLATE_GUIDE.md)

### 외부 리소스

- [Next.js 16 Docs](https://nextjs.org/docs)
- [StyleX Docs](https://stylexjs.com)
- [Lucide Icons](https://lucide.dev)

---

## 💡 팁

### 효율적인 세션 시작

1. **PROJECT_STATUS.md 먼저 읽기** - 전체 맥락 파악
2. **알려진 이슈 확인** - 중복 작업 방지
3. **다음 작업 우선순위** - 집중할 작업 명확히

### 문서 업데이트

새로운 작업 완료 시 다음 문서를 업데이트하세요:

- `PROJECT_STATUS.md` - 프로젝트 상태 반영
- `TEMPLATES_INDEX.md` - 새 템플릿 추가
- `docs/SESSION_SUMMARY.md` - 세션 요약 기록

---

**이 폴더의 목적**: Claude Code 세션 간 컨텍스트 유지 및 효율적인 작업 재개

**마지막 업데이트**: 2025-11-16
**다음 업데이트**: Course 템플릿 수정 완료 후
