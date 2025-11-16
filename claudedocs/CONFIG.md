# Template Ignite - Configuration Reference

**최종 업데이트**: 2025-11-16
**기준 버전**: Prototype (template-builder) 검증 완료 버전

---

## ⚠️ 중요: 설정 기준선

**메인 프로젝트의 모든 설정은 프로토타입(`template-builder/`)의 검증된 버전과 동일하게 유지해야 합니다.**

프로토타입에서 19개 섹션 컴포넌트가 성공적으로 빌드되고 검증되었으므로, 동일한 설정을 사용하여 호환성을 보장합니다.

---

## 📦 package.json

### 의존성 버전 (Prototype 기준)

```json
{
  "dependencies": {
    "@radix-ui/react-slot": "^1.2.4",
    "@stylexjs/stylex": "^0.16.3",
    "@stylexswc/nextjs-plugin": "^0.13.0",
    "lucide-react": "^0.553.0",
    "next": "16.0.3",
    "react": "19.2.0",
    "react-dom": "19.2.0",
    "yaml": "^2.8.1"
  },
  "devDependencies": {
    "@stylexswc/rs-compiler": "^0.13.0",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.0.3",
    "typescript": "^5"
  }
}
```

### 스크립트

```json
{
  "scripts": {
    "dev": "next dev --webpack",
    "build": "next build --webpack",
    "start": "next start",
    "lint": "eslint"
  }
}
```

**중요**: `--webpack` 플래그는 StyleX 플러그인 호환성을 위해 필수입니다.

---

## ⚙️ next.config.ts

### StyleX 플러그인 설정 (Prototype 기준)

```typescript
import type { NextConfig } from "next";
import stylexPlugin from "@stylexswc/nextjs-plugin";
import { join } from "node:path";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "images.unsplash.com" },
      { hostname: "i.pravatar.cc" },
    ],
  },
};

export default stylexPlugin({
  rsOptions: {
    aliases: {
      "@/*": [join(__dirname, "src/*")],
    },
    unstable_moduleResolution: {
      type: "commonJS",
    },
    runtimeInjection: false,
    treeshakeCompensation: true,
  },
  stylexImports: ["stylex", "@stylexjs/stylex"],
})(nextConfig);
```

### 핵심 설정 포인트

1. **StyleX 플러그인**: `@stylexswc/nextjs-plugin` 사용
2. **Path Alias**: `@/*` → `src/*`
3. **Module Resolution**: `commonJS` 타입
4. **Runtime Injection**: `false` (zero-runtime)
5. **Tree Shaking**: `true` (최적화)

---

## 📝 tsconfig.json

### TypeScript 설정

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules", "template-builder"]
}
```

---

## 🎨 StyleX 토큰 시스템

### 프로토타입에서 복사할 파일

```bash
# StyleX 디자인 토큰 (검증 완료)
template-builder/src/styles/tokens.stylex.ts → src/styles/tokens.stylex.ts
```

### 토큰 구조

```typescript
import * as stylex from '@stylexjs/stylex';

export const colors = stylex.defineVars({
  primary: '#0066cc',
  secondary: '#6c757d',
  accent: '#ff6b6b',
  background: '#ffffff',
  text: '#212529',
  // ... more colors
});

export const spacing = stylex.defineVars({
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  // ... more spacing
});
```

---

## 🔧 버전 호환성 매트릭스

| 패키지 | 프로토타입 버전 | 메인 프로젝트 | 호환성 |
|--------|----------------|--------------|--------|
| Next.js | 16.0.3 | 16.0.3 | ✅ 동일 |
| React | 19.2.0 | 19.2.0 | ✅ 동일 |
| StyleX | 0.16.3 | 0.16.3 | ✅ 동일 |
| StyleX Plugin | 0.13.0 | 0.13.0 | ✅ 동일 |
| Lucide React | 0.553.0 | 0.553.0 | ✅ 동일 |
| YAML | 2.8.1 | 2.8.1 | ✅ 동일 |

---

## 📋 설정 체크리스트

### 초기 설정 시 확인사항

- [ ] package.json 버전이 프로토타입과 동일
- [ ] next.config 파일이 StyleX 플러그인 설정 포함
- [ ] tsconfig.json의 path alias 설정 확인
- [ ] StyleX 토큰 파일 복사 완료
- [ ] `npm install` 실행하여 의존성 설치
- [ ] `npm run build` 실행하여 빌드 테스트

### 빌드 검증

```bash
# 메인 프로젝트 루트에서
npm install
npm run build

# 성공 시:
# ✓ Compiled successfully
# ✓ Generating static pages
```

---

## ⚠️ 알려진 이슈 및 주의사항

### 1. StyleX 플러그인 버전

- **중요**: `@stylexswc/nextjs-plugin` 버전을 임의로 업그레이드하지 마세요
- 프로토타입에서 검증된 `0.13.0` 버전 유지
- 버전 변경 시 빌드 오류 가능성 있음

### 2. Next.js 16 + React 19

- Next.js 16은 React 19를 공식 지원
- 프로토타입에서 검증 완료
- 하위 버전 사용 시 호환성 문제 발생 가능

### 3. Webpack 플래그

- `--webpack` 플래그는 StyleX 호환성을 위해 필수
- Turbopack 사용 시 StyleX 오류 발생 가능

---

## 🔄 설정 업데이트 정책

### 언제 설정을 변경할 수 있나?

1. **보안 취약점 발견 시**
   - 패치 버전 업데이트만 허용 (예: 16.0.3 → 16.0.4)
   - 마이너/메이저 업데이트는 철저한 테스트 후

2. **새로운 기능 필요 시**
   - 프로토타입에서 먼저 테스트
   - 검증 완료 후 메인 프로젝트 적용

3. **성능 개선 시**
   - 기존 기능에 영향 없는지 확인
   - 19개 섹션 컴포넌트 재테스트 필수

### 변경 프로세스

1. `template-builder/`에서 먼저 변경 및 테스트
2. 빌드 성공 확인 (`npm run build`)
3. 19개 섹션 동작 검증
4. 메인 프로젝트에 동일하게 적용
5. 이 문서(CONFIG.md) 업데이트

---

## 📚 참고 문서

- [Next.js 16 Documentation](https://nextjs.org/docs)
- [StyleX Documentation](https://stylexjs.com)
- [React 19 Release Notes](https://react.dev/blog/2024/12/05/react-19)

---

**마지막 검증일**: 2025-11-16
**검증 상태**: ✅ 프로토타입 빌드 성공 (19개 섹션)
**다음 검증**: 메인 프로젝트 초기 빌드 후
