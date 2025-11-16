# Template Ignite - 프로젝트 문서

**최종 업데이트**: 2025-11-16
**프로젝트 상태**: 프로토타입 완료, 메인 구현 준비 중

---

## 📁 이 폴더에 대하여

`claudedocs/` 폴더는 Template Ignite 프로젝트의 전체 설계 문서와 세션 가이드를 포함합니다.

---

## 🎯 빠른 시작

### 새 세션 시작 시

**1단계**: [NEXT_SESSION.md](NEXT_SESSION.md) 읽기 ⭐

- 다음에 할 일
- 빠른 시작 명령어
- 프로젝트 현황 요약

**2단계**: [PROJECT_STATUS.md](PROJECT_STATUS.md) 읽기

- 상세 프로젝트 현황
- 프로토타입 vs 메인 프로젝트 구분
- 재사용/신규 구현 계획

**3단계**: 작업 시작

```
"claudedocs/PROJECT_STATUS.md를 읽고 메인 프로젝트 구현을 시작해줘."
```

---

## 📚 문서 목록

### 즉시 확인할 문서

#### [NEXT_SESSION.md](NEXT_SESSION.md) ⭐ **가장 먼저 읽을 문서**

**다음 세션 시작 가이드**

- 프로젝트 현황 요약
- 즉시 할 일
- 빠른 시작 명령어
- 메인 프로젝트 시작 방법

#### [PROJECT_STATUS.md](PROJECT_STATUS.md) ⭐ **상세 현황**

**프로젝트 전체 현황 및 계획**

- 완료된 작업 (프로토타입)
- 프로토타입의 한계
- 다음 단계 (메인 프로젝트)
- 재사용 vs 신규 구현
- 템플릿 구조 변경

---

### 설계 문서

#### [PROJECT_DESIGN.md](PROJECT_DESIGN.md)

**전체 시스템 설계 문서**

- 프로젝트 개요 및 목적
- 기술 스택 선정 이유
- 아키텍처 설계
- 다중 페이지 시스템 설계
- 7주 구현 로드맵 (원래 계획)

#### [TYPE_DEFINITIONS.md](TYPE_DEFINITIONS.md)

**TypeScript 타입 정의**

- 섹션 타입 (완료)
- 페이지 타입 (수정 필요)
- 사이트 타입 (신규 작성 필요)
- 테마 타입

#### [SAMPLE_TEMPLATES.md](SAMPLE_TEMPLATES.md)

**템플릿 예시 및 참고**

- 단일 페이지 템플릿 (프로토타입)
- 다중 페이지 사이트 템플릿 (목표)
- 아이콘 목록

---

### 참고 문서

#### [PROTOTYPE_GUIDE.md](PROTOTYPE_GUIDE.md)

**프로토타입 구현 가이드** (참고용)

- 프로토타입 목적 및 범위
- Phase 1-8 구현 단계
- 검증된 컴포넌트 목록
- 재사용 가능한 부분

---

## 🗺️ 문서 읽는 순서

### 시나리오 1: 새 세션 시작

```
1. NEXT_SESSION.md (필수) ⭐
2. PROJECT_STATUS.md (상세 파악)
3. 작업 시작
```

### 시나리오 2: 메인 프로젝트 설계 이해

```
1. PROJECT_STATUS.md (현황)
2. PROJECT_DESIGN.md (설계)
3. TYPE_DEFINITIONS.md (타입)
4. SAMPLE_TEMPLATES.md (예시)
```

### 시나리오 3: 프로토타입 이해

```
1. PROJECT_STATUS.md (프로토타입 섹션)
2. PROTOTYPE_GUIDE.md (구현 내용)
3. ../template-builder/README.md (상세 문서)
```

---

## 📂 전체 문서 구조

```
template-ignite/
├── README.md                      # 루트 프로젝트 소개
│
├── claudedocs/                    # 🎯 프로젝트 문서 (여기)
│   ├── README.md                 # 이 파일 (문서 인덱스)
│   ├── NEXT_SESSION.md           # 다음 세션 가이드 ⭐
│   ├── PROJECT_STATUS.md         # 프로젝트 현황 ⭐
│   ├── PROJECT_DESIGN.md         # 전체 설계
│   ├── PROTOTYPE_GUIDE.md        # 프로토타입 참고
│   ├── TYPE_DEFINITIONS.md       # 타입 정의
│   └── SAMPLE_TEMPLATES.md       # 템플릿 예시
│
├── template-builder/              # 🔬 프로토타입 (완료)
│   ├── README.md                 # 프로토타입 개요
│   └── .claudedocs/              # 프로토타입 상세 문서
│       ├── README.md            # 프로토타입 문서 인덱스
│       ├── project/
│       │   ├── PROJECT_STATUS.md
│       │   └── TEMPLATES_INDEX.md
│       └── sessions/
│           ├── NEXT_SESSION.md
│           └── SESSION_SUMMARY.md
│
└── [메인 프로젝트]                # ⏳ 구현 예정
```

---

## 🔍 문서 사용 가이드

### 프로토타입 vs 메인 프로젝트 구분

**프로토타입** (`template-builder/`):

- ✅ **완료됨**: 19개 섹션 컴포넌트 검증
- 📁 **문서**: `template-builder/.claudedocs/`
- 🎯 **목적**: 섹션 컴포넌트 동작 검증
- ⚠️ **한계**: 단일 페이지만, 네비게이션 없음

**메인 프로젝트** (루트, 구현 예정):

- ⏳ **상태**: 설계 완료, 구현 대기
- 📁 **문서**: `claudedocs/` (이 폴더)
- 🎯 **목적**: 다중 페이지 생성 시스템
- ✨ **기능**: 사이트 생성, 네비게이션, 테마

### 재사용 vs 신규 구현

**프로토타입에서 재사용** ✅:

- 19개 섹션 컴포넌트
- Button, Container, Heading
- StyleX 토큰 시스템
- 섹션 타입 정의

**메인 프로젝트에서 신규 구현** ⏳:

- Header, Footer, Navigation
- 사이트 생성 엔진
- 페이지 생성 엔진
- 자동 라우팅
- 테마 시스템
- 사이트 템플릿 스키마

---

## 💡 문서 활용 팁

### 효율적인 세션 시작

1. **NEXT_SESSION.md 먼저** - 즉시 할 일 확인
2. **PROJECT_STATUS.md** - 전체 맥락 파악
3. **관련 설계 문서** - 필요시 참고

### 문서 간 관계

- `NEXT_SESSION.md` → 액션 중심
- `PROJECT_STATUS.md` → 상태 중심
- `PROJECT_DESIGN.md` → 설계 중심
- `PROTOTYPE_GUIDE.md` → 참고용

---

## ⚡ 빠른 참조

### 현재 프로젝트 상태 (2025-11-16)

```
✅ 프로토타입: 19개 섹션 컴포넌트 완료
⏳ 메인 프로젝트: 설계 완료, 구현 대기
📊 진행률: 25% (섹션 검증 완료)
🎯 다음: 루트에 메인 프로젝트 구현 시작
```

### 핵심 명령어

```bash
# 프로토타입 확인
cd template-builder && npm run dev

# 문서 읽기
cat claudedocs/NEXT_SESSION.md
cat claudedocs/PROJECT_STATUS.md

# 메인 프로젝트 시작 (예정)
# 루트에 Next.js 프로젝트 생성
```

### Claude에게 전달할 메시지

```
"claudedocs/NEXT_SESSION.md를 읽고 메인 프로젝트 구현을 시작해줘."
```

---

## 🔗 외부 리소스

- [Next.js 14 Docs](https://nextjs.org/docs)
- [StyleX Documentation](https://stylexjs.com)
- [Lucide Icons](https://lucide.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

---

**상태**: 🟡 프로토타입 완료, 메인 구현 대기 중
**다음 단계**: [NEXT_SESSION.md](NEXT_SESSION.md) 참조
