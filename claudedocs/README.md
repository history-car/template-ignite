# 템플릿 기반 페이지 생성 시스템 - 프로젝트 문서

이 폴더에는 프로젝트의 모든 설계 문서와 구현 가이드가 포함되어 있습니다.

---

## 📚 문서 목록

### 1. [NEXT_SESSION.md](./NEXT_SESSION.md) ⭐ **시작은 여기서!**
**다음 세션을 시작할 때 가장 먼저 읽어야 할 문서**

- 프로젝트 컨텍스트 요약
- 브레인스토밍 결과 요약
- 다음 세션에서 바로 시작하는 방법
- 권장 시작 명령어
- 체크리스트

**새 세션 시작 시 Claude에게 전달할 메시지**:
```
claudedocs/NEXT_SESSION.md를 읽고 프로토타입 구현을 시작해줘.
```

---

### 2. [PROJECT_DESIGN.md](./PROJECT_DESIGN.md)
**전체 프로젝트 설계 문서**

포함 내용:
- 프로젝트 개요 및 목적
- 기술 스택 선정 이유
- 아키텍처 설계 (컴포넌트 분류, 네이밍, Props 설계 등)
- MVP 범위 (11개 컴포넌트)
- 프로젝트 구조
- 파일 네이밍 규칙
- 워크플로우 (고객 요청 → 페이지 생성)
- 7주 구현 로드맵
- 확장 계획

**언제 읽나요?**
- 프로젝트 전체 구조를 이해하고 싶을 때
- 설계 결정 사항을 확인하고 싶을 때
- 전체 MVP 구현을 시작하기 전에

---

### 3. [PROTOTYPE_GUIDE.md](./PROTOTYPE_GUIDE.md)
**프로토타입 구현 단계별 가이드**

포함 내용:
- 프로토타입 목적 및 범위 (3개 컴포넌트)
- Phase 1-8 구현 단계
  - Phase 1: 프로젝트 설정 (30분)
  - Phase 2: 타입 정의 (1시간)
  - Phase 3: 공통 컴포넌트 (2시간)
  - Phase 4: 섹션 컴포넌트 (4시간)
  - Phase 5: 페이지 빌더 시스템 (3시간)
  - Phase 6: 샘플 템플릿 (1시간)
  - Phase 7: Next.js 페이지 구현 (2시간)
  - Phase 8: 테스트 및 실행 (1시간)
- 각 단계별 코드 예시 (복사-붙여넣기 가능)
- 트러블슈팅 가이드
- 예상 소요 시간: 3-5일 (약 15시간)

**언제 읽나요?**
- 프로토타입 구현을 시작할 때
- 각 Phase를 진행하면서 참고

---

### 4. [TYPE_DEFINITIONS.md](./TYPE_DEFINITIONS.md)
**TypeScript 타입 정의 모음**

포함 내용:
- 섹션 타입 (`section.types.ts`)
  - BaseSectionProps
  - Hero, Features, CTA, Testimonials, Contact 타입
- 페이지 타입 (`page.types.ts`)
  - SectionConfig, PageConfig, TemplateConfig
- 테마 타입 (`theme.types.ts`)
  - ThemePreset, ResolvedTheme, ThemeOverride
- 설정 타입 (`config.types.ts`)
- 프로토타입용 간소화 버전
- 타입 사용 예시

**언제 읽나요?**
- 타입 정의 파일을 작성할 때
- 컴포넌트 Props 타입을 확인하고 싶을 때
- 복사-붙여넣기로 타입 파일 생성 시

---

### 5. [SAMPLE_TEMPLATES.md](./SAMPLE_TEMPLATES.md)
**YAML/JSON 템플릿 및 설정 파일 예시**

포함 내용:
- 변호사 사무실 랜딩 페이지 (YAML/JSON)
- 고객 설정 파일 (오버라이드 방식)
  - 민사 전문 변호사 예시
  - 형사 전문 변호사 예시
- 스타트업 랜딩 페이지 템플릿
- 제품 소개 페이지 템플릿
- 간단한 연락처 페이지
- lucide-react 아이콘 목록 참고

**언제 읽나요?**
- 샘플 템플릿 파일을 작성할 때
- 고객 설정 파일 구조를 확인하고 싶을 때
- 아이콘 이름을 찾을 때

---

## 🗺️ 문서 읽는 순서

### 새 세션을 시작할 때
```
1. NEXT_SESSION.md (필수) ⭐
2. PROTOTYPE_GUIDE.md (구현 시작)
```

### 프로젝트 전체를 이해하고 싶을 때
```
1. NEXT_SESSION.md (요약)
2. PROJECT_DESIGN.md (전체 설계)
3. PROTOTYPE_GUIDE.md (구현 방법)
```

### 구현 중 참고할 때
```
- TYPE_DEFINITIONS.md (타입 복사)
- SAMPLE_TEMPLATES.md (템플릿 복사)
- PROTOTYPE_GUIDE.md (단계별 코드)
```

---

## 🎯 빠른 시작

### 새 세션에서 Claude에게 전달할 메시지

**프로토타입 즉시 시작**:
```
claudedocs/NEXT_SESSION.md를 읽고 프로토타입 구현을 시작해줘.
PROTOTYPE_GUIDE.md를 따라서 Phase 1부터 진행해줘.
```

**문서 먼저 확인**:
```
claudedocs/README.md를 읽고 모든 문서를 확인한 후,
프로젝트를 요약하고 프로토타입 구현 계획을 알려줘.
```

---

## 📊 프로젝트 현황

### 완료된 작업 ✅
- [x] 브레인스토밍 (설계 결정)
- [x] 프로젝트 설계 문서 작성
- [x] 프로토타입 구현 가이드 작성
- [x] TypeScript 타입 정의 작성
- [x] 샘플 템플릿 작성
- [x] 다음 세션 가이드 작성

### 다음 단계 ⏳
- [ ] 프로토타입 구현 (3-5일)
- [ ] 프로토타입 검증
- [ ] 전체 MVP 구현 (7주)

---

## 💡 문서 활용 팁

1. **단계별 진행**: 한 번에 모든 문서를 읽지 말고, 필요한 문서만 참고
2. **복사-붙여넩기**: TYPE_DEFINITIONS.md와 PROTOTYPE_GUIDE.md의 코드는 그대로 사용 가능
3. **체크리스트 활용**: NEXT_SESSION.md의 체크리스트로 진행 상황 확인
4. **트러블슈팅**: 문제 발생 시 PROTOTYPE_GUIDE.md의 트러블슈팅 섹션 참고

---

## 📝 문서 업데이트 이력

- **2025-01-XX**: 초기 문서 작성 (브레인스토밍 세션)
  - PROJECT_DESIGN.md
  - PROTOTYPE_GUIDE.md
  - TYPE_DEFINITIONS.md
  - SAMPLE_TEMPLATES.md
  - NEXT_SESSION.md
  - README.md

---

## 🤝 기여 방법

프로젝트 진행 중 문서 업데이트가 필요하면:

1. 해당 문서 수정
2. README.md의 "문서 업데이트 이력"에 기록
3. 변경 사항이 크면 NEXT_SESSION.md도 업데이트

---

**준비 완료!** 새 세션을 시작하세요! 🚀

다음 세션에서 Claude에게:
```
claudedocs/NEXT_SESSION.md를 읽어줘
```
