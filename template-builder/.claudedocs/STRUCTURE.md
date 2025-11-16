# 📁 Documentation Structure

**최종 업데이트**: 2025-11-16

---

## 🎯 구조 개선 목표

1. **명확한 분리**: 사용자 문서 vs Claude 전용 문서
2. **논리적 그룹화**: 목적별 폴더 구조
3. **빠른 접근**: 중요 문서 우선 배치
4. **유지보수성**: 확장 가능한 구조

---

## 📂 최종 구조

```
template-builder/
├── README.md                             # 프로젝트 메인 (사용자 진입점)
│
├── .claudedocs/                          # 🤖 Claude Code 전용 문서
│   ├── README.md                         # Claude Docs 가이드
│   │
│   ├── project/                          # 프로젝트 상태
│   │   ├── PROJECT_STATUS.md            # 전체 현황 (90% 완료)
│   │   └── TEMPLATES_INDEX.md           # 8개 템플릿 인덱스
│   │
│   └── sessions/                         # 세션 기록
│       ├── SESSION_SUMMARY.md           # 전체 세션 요약
│       ├── NEXT_SESSION.md              # 다음 세션 TODO
│       ├── SESSION_2025-11-16_NAVIGATION.md
│       └── TEST_REPORT.md
│
└── docs/                                 # 📚 사용자 문서
    ├── README.md                         # 문서 인덱스
    │
    ├── guides/                           # 사용 가이드
    │   ├── QUICK_START.md               # 5분 빠른 시작
    │   └── PAGE_BUILDER_GUIDE.md        # 페이지 빌더 사용법
    │
    └── reference/                        # 레퍼런스 문서
        ├── COMPONENTS.md                # 19개 컴포넌트
        ├── TEMPLATE_GUIDE.md            # JSON 템플릿 작성
        ├── ICONS.md                     # 100+ 아이콘 목록
        └── DEPLOYMENT.md                # 배포 가이드
```

---

## 📊 문서 분류

### Claude 전용 (.claudedocs/)

**목적**: Claude Code 세션 간 컨텍스트 유지

| 문서               | 위치      | 용도                         |
| ------------------ | --------- | ---------------------------- |
| PROJECT_STATUS.md  | project/  | 프로젝트 전체 현황, 아키텍처 |
| TEMPLATES_INDEX.md | project/  | 템플릿 상세 분석             |
| SESSION_SUMMARY.md | sessions/ | 전체 세션 요약               |
| NEXT_SESSION.md    | sessions/ | 다음 작업 TODO               |
| SESSION\_\*.md     | sessions/ | 개별 세션 기록               |
| TEST_REPORT.md     | sessions/ | 테스트 결과                  |

### 사용자 문서 (docs/)

**목적**: 프로젝트 사용 및 참고

| 문서                  | 위치       | 용도               |
| --------------------- | ---------- | ------------------ |
| QUICK_START.md        | guides/    | 빠른 시작 가이드   |
| PAGE_BUILDER_GUIDE.md | guides/    | 페이지 빌더 사용법 |
| COMPONENTS.md         | reference/ | 컴포넌트 레퍼런스  |
| TEMPLATE_GUIDE.md     | reference/ | 템플릿 작성 가이드 |
| ICONS.md              | reference/ | 아이콘 레퍼런스    |
| DEPLOYMENT.md         | reference/ | 배포 가이드        |

---

## 🔍 문서 찾기 가이드

### 새 세션 시작 시

```
1. .claudedocs/project/PROJECT_STATUS.md     - 현재 상태
2. .claudedocs/sessions/NEXT_SESSION.md      - 다음 작업
3. docs/guides/QUICK_START.md                - 명령어
```

### 새 기능 개발 시

```
1. .claudedocs/project/TEMPLATES_INDEX.md    - 템플릿 패턴
2. docs/reference/COMPONENTS.md              - 컴포넌트 Props
3. docs/reference/TEMPLATE_GUIDE.md          - JSON 구조
```

### 배포 준비 시

```
1. .claudedocs/project/PROJECT_STATUS.md     - 알려진 이슈
2. docs/reference/DEPLOYMENT.md              - 배포 절차
```

---

## 🎨 폴더 네이밍 규칙

### .claudedocs/

- `project/` - 프로젝트 상태 문서 (상태, 인덱스)
- `sessions/` - 세션 관련 문서 (요약, TODO, 기록)

### docs/

- `guides/` - 사용 가이드 (튜토리얼, 시작 가이드)
- `reference/` - 레퍼런스 (API, 컴포넌트, 아이콘)

---

## 📈 확장 가능성

### 향후 추가 가능한 폴더

**.claudedocs/**

- `performance/` - 성능 측정 및 최적화 기록
- `decisions/` - 아키텍처 결정 기록 (ADR)
- `migration/` - 마이그레이션 가이드

**docs/**

- `tutorials/` - 단계별 튜토리얼
- `examples/` - 실제 사용 예제
- `api/` - API 레퍼런스 (필요 시)

---

## 🔄 문서 업데이트 규칙

### 세션 종료 시

1. `sessions/SESSION_SUMMARY.md` 업데이트
2. 새 세션 기록 추가: `sessions/SESSION_YYYY-MM-DD_*.md`
3. `sessions/NEXT_SESSION.md` 다음 작업 정리

### 기능 추가 시

1. `project/PROJECT_STATUS.md` 상태 업데이트
2. 템플릿 추가: `project/TEMPLATES_INDEX.md` 업데이트
3. 관련 레퍼런스 문서 업데이트

### 문서 추가 시

1. 적절한 폴더에 배치
2. `docs/README.md` 또는 `.claudedocs/README.md` 인덱스 업데이트
3. 상호 참조 링크 추가

---

## ✅ 구조 개선 완료 체크리스트

- ✅ 모든 문서를 논리적 폴더로 이동
- ✅ `.claudedocs/` 와 `docs/` 명확히 분리
- ✅ 각 폴더에 README.md 인덱스 생성
- ✅ 모든 상호 참조 링크 업데이트
- ✅ 구조 문서화 (STRUCTURE.md)

---

## 🎯 다음 단계

1. **자동화**: 문서 생성/업데이트 스크립트
2. **검증**: 문서 링크 자동 체크
3. **통합**: CI/CD 문서 빌드 파이프라인

---

**작성일**: 2025-11-16
**작성자**: Claude Code Session
**버전**: 1.0
