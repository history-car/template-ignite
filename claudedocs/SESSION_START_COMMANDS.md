# 다음 세션 시작 명령어 모음

새 세션을 시작할 때 복사-붙여넣기로 사용할 수 있는 명령어들입니다.

---

## 🎯 권장 시작 명령어 (MCP 활용)

### Option 1: 세션 로드 + 프로토타입 시작 (가장 권장) ⭐

```
안녕! 템플릿 기반 페이지 생성 시스템 프로젝트를 이어서 진행하려고 해.

먼저 claudedocs/NEXT_SESSION.md를 읽고 프로젝트 컨텍스트를 파악해줘.
그 다음 claudedocs/PROTOTYPE_GUIDE.md를 따라서 프로토타입 구현을 시작해줘.

Phase 1부터 단계별로 진행하되, 각 Phase 완료 시 다음으로 넘어가기 전에 확인해줘.

참고:
- Next.js, TypeScript 관련 공식 문서가 필요하면 Context7 MCP 사용
- 복잡한 단계별 분석이 필요하면 Sequential MCP 활용
- 프로젝트 진행 상황은 주기적으로 체크포인트 남겨줘
```

---

### Option 2: 간결한 시작 (빠른 시작)

```
claudedocs/NEXT_SESSION.md 읽고 프로토타입 구현 시작해줘.
PROTOTYPE_GUIDE.md Phase 1부터 진행.
```

---

### Option 3: 문서 확인 후 시작 (신중한 접근)

```
템플릿 기반 페이지 생성 시스템 프로젝트를 이어서 진행할게.

먼저 다음 순서로 확인해줘:
1. claudedocs/README.md - 문서 전체 구조 파악
2. claudedocs/NEXT_SESSION.md - 프로젝트 상태 및 다음 단계 확인
3. claudedocs/PROTOTYPE_GUIDE.md - 구현 계획 검토

그 다음 프로토타입 구현 계획을 요약하고, 불명확한 부분이 있으면 질문해줘.
모든 게 명확하면 Phase 1부터 시작하자.
```

---

### Option 4: MCP 서버 활용 최적화 버전

```
안녕! 템플릿 기반 페이지 생성 시스템 프로토타입을 구현하려고 해.

claudedocs/NEXT_SESSION.md를 읽고 시작해줘.

프로토타입 구현 시 다음 MCP 서버들을 적극 활용해줘:
- Context7: Next.js 14, TypeScript, React 공식 문서 참고
- Sequential: 복잡한 아키텍처 설계나 단계별 구현 계획 수립 시
- Serena: 구현 중간중간 프로젝트 메모리 저장 (/sc:save)

PROTOTYPE_GUIDE.md를 따라 Phase 1부터 시작하자.
각 Phase 완료 시 체크포인트를 만들어줘.
```

---

## 🔧 상황별 시작 명령어

### 프로토타입 중간부터 재개할 때

```
템플릿 프로젝트 프로토타입을 이어서 진행할게.

먼저 claudedocs/NEXT_SESSION.md의 체크리스트를 확인해서 어디까지 완료되었는지 파악해줘.
그 다음 미완료된 Phase부터 계속 진행하자.
```

---

### 프로토타입 완료 후 검증 시작할 때

```
템플릿 프로젝트 프로토타입이 완료되었어.

claudedocs/PROTOTYPE_GUIDE.md의 "Phase 8: 테스트 및 실행" 섹션을 참고해서
프로토타입을 검증하고 테스트해줘.

확인할 사항:
- Hero, Features, Contact 섹션이 제대로 렌더링되는가?
- 반응형이 작동하는가?
- TypeScript 에러가 없는가?
- 페이지 빌더 시스템이 작동하는가?
```

---

### 프로토타입 검증 완료 후 전체 MVP 시작할 때

```
프로토타입 검증이 완료되었어.

이제 전체 MVP 구현을 시작하려고 해.
claudedocs/PROJECT_DESIGN.md의 "구현 로드맵" 섹션을 참고해서
Phase 1부터 전체 MVP를 구현하자.

MVP 범위:
- Hero 3개 변형
- Features 2개 변형
- CTA 2개 변형
- Testimonials 2개 변형
- Contact 2개 변형
총 11개 컴포넌트
```

---

## 🎓 학습 목적으로 시작할 때

### 프로젝트 이해하기

```
템플릿 기반 페이지 생성 시스템 프로젝트를 학습하려고 해.

claudedocs/README.md부터 시작해서 모든 문서를 읽어주고,
프로젝트 전체를 이해한 후 다음을 설명해줘:

1. 프로젝트 목적과 타겟 고객
2. 핵심 아키텍처 설계 (컴포넌트 분류, 설정 파일 구조 등)
3. 기술 스택 선정 이유
4. MVP 범위와 구현 계획
5. 프로토타입과 전체 MVP의 차이

설명이 끝나면 질문할 수 있게 해줘.
```

---

## 🐛 문제 해결 시작할 때

### 에러 발생 시

```
템플릿 프로젝트 구현 중 문제가 발생했어.

먼저 claudedocs/PROTOTYPE_GUIDE.md의 "트러블슈팅" 섹션을 확인해줘.

문제 상황:
[여기에 에러 메시지나 문제 상황 설명]

해결 방법을 제안하고, 필요하면 Sequential MCP로 체계적으로 분석해줘.
```

---

## 📊 추천 MCP 서버 활용 가이드

### 이 프로젝트에서 각 MCP 서버 언제 사용하면 좋은가?

#### 🔍 Context7 MCP
**사용 시점**:
- Next.js 14 App Router 사용법 확인 필요
- TypeScript 고급 타입 정의 참고
- React 컴포넌트 패턴 공식 문서 확인
- lucide-react 아이콘 사용법

**예시**:
```
"Next.js 14 App Router에서 동적 라우팅 하는 방법을 Context7로 확인해줘"
"TypeScript에서 conditional types 사용법을 Context7로 찾아줘"
```

---

#### 🧠 Sequential MCP
**사용 시점**:
- 페이지 빌더 시스템 설계 검토
- 복잡한 컴포넌트 Props 구조 분석
- 테마 시스템 아키텍처 설계
- 에러 원인 체계적 분석

**예시**:
```
"Sequential MCP로 페이지 빌더 시스템의 데이터 흐름을 분석해줘"
"Sequential로 TypeScript 타입 에러 원인을 단계별로 분석해줘"
```

---

#### 💾 Serena MCP
**사용 시점**:
- 프로젝트 시작 시 세션 로드 (`/sc:load`)
- 구현 중간 체크포인트 저장 (`/sc:save`)
- Phase 완료 시 진행 상황 저장
- 세션 종료 전 작업 내용 저장

**예시**:
```
"/sc:save를 실행해서 현재까지 작업 내용을 저장해줘"
"/sc:load로 이전 세션 작업 내용을 불러와줘"
```

---

#### 🎭 Playwright MCP
**사용 시점**:
- 프로토타입 완료 후 실제 브라우저 테스트
- 반응형 디자인 검증
- 폼 제출 동작 테스트
- 접근성 검증

**예시**:
```
"Playwright로 프로토타입 페이지를 실제 브라우저에서 테스트해줘"
"Playwright로 반응형이 제대로 동작하는지 확인해줘"
```

---

## 🎯 최종 권장 시작 멘트

### 첫 세션 시작 시 (가장 권장) ⭐⭐⭐

```
안녕! 템플릿 기반 페이지 생성 시스템 프로젝트를 시작하려고 해.

먼저 claudedocs/NEXT_SESSION.md를 읽고 프로젝트를 이해해줘.
그리고 PROTOTYPE_GUIDE.md를 따라 프로토타입 구현을 시작하자.

구현하면서:
- Next.js/TypeScript 관련은 Context7 MCP 활용
- 복잡한 설계 분석은 Sequential MCP 활용
- Phase 완료마다 /sc:save로 체크포인트 저장

Phase 1부터 시작해서, 각 Phase 완료 시 다음으로 넘어가기 전에 확인 요청해줘.
```

---

## 📝 복사-붙여넣기 준비 완료

위 명령어 중 하나를 선택해서 새 세션에 붙여넣기하면 됩니다!

**가장 권장하는 옵션**: "최종 권장 시작 멘트" ⭐⭐⭐
