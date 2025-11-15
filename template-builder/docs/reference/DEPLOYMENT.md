# 배포 가이드 (Deployment Guide)

Template Builder 프로젝트를 프로덕션 환경에 배포하는 방법을 설명합니다.

## 목차
1. [Vercel 배포 (권장)](#vercel-배포)
2. [수동 빌드 및 배포](#수동-빌드-및-배포)
3. [환경 변수 설정](#환경-변수-설정)
4. [성능 최적화](#성능-최적화)
5. [문제 해결](#문제-해결)

---

## Vercel 배포

Vercel은 Next.js 프로젝트 배포에 가장 최적화된 플랫폼입니다.

### 1. Vercel CLI 설치

```bash
npm install -g vercel
```

### 2. 로그인

```bash
vercel login
```

### 3. 프로젝트 배포

```bash
# 프로젝트 루트에서 실행
cd template-builder
vercel
```

### 4. 배포 설정

처음 배포 시 다음 질문에 답변:

```
? Set up and deploy "~/template-builder"? [Y/n] Y
? Which scope do you want to deploy to? [본인 계정 선택]
? Link to existing project? [N/y] N
? What's your project's name? template-builder
? In which directory is your code located? ./
? Want to override the settings? [y/N] N
```

### 5. 프로덕션 배포

```bash
vercel --prod
```

### 6. Git 연동 자동 배포 (권장)

1. GitHub/GitLab/Bitbucket에 저장소 생성
2. 코드 푸시
3. Vercel 대시보드에서 Import Project
4. 저장소 선택 및 연결
5. 자동 배포 설정 완료

**이후 자동화:**
- `main` 브랜치에 푸시 → 자동 프로덕션 배포
- 다른 브랜치에 푸시 → 자동 프리뷰 배포

---

## 수동 빌드 및 배포

### 1. 로컬 빌드

```bash
cd template-builder
npm install
npm run build
```

빌드 결과물은 `.next` 폴더에 생성됩니다.

### 2. 프로덕션 서버 실행

```bash
npm start
# 또는
npm run start
```

기본 포트: `http://localhost:3000`

### 3. 커스텀 포트 설정

```bash
PORT=8080 npm start
```

### 4. PM2로 프로세스 관리 (Linux/Mac)

```bash
# PM2 설치
npm install -g pm2

# 앱 시작
pm2 start npm --name "template-builder" -- start

# 상태 확인
pm2 status

# 로그 확인
pm2 logs template-builder

# 재시작
pm2 restart template-builder

# 중지
pm2 stop template-builder

# 부팅 시 자동 시작 설정
pm2 startup
pm2 save
```

### 5. Nginx 리버스 프록시 설정

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### 6. Docker 배포

#### Dockerfile

```dockerfile
FROM node:18-alpine

WORKDIR /app

# 의존성 설치
COPY package*.json ./
RUN npm ci --only=production

# 앱 복사
COPY . .

# 빌드
RUN npm run build

# 포트 노출
EXPOSE 3000

# 앱 실행
CMD ["npm", "start"]
```

#### Docker Compose

```yaml
version: '3.8'

services:
  template-builder:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

#### 실행

```bash
# 빌드
docker build -t template-builder .

# 실행
docker run -p 3000:3000 template-builder

# Docker Compose 사용
docker-compose up -d
```

---

## 환경 변수 설정

### .env.local 파일 생성

```bash
# 프로덕션 모드
NODE_ENV=production

# 사이트 URL (옵셔널)
NEXT_PUBLIC_SITE_URL=https://your-domain.com

# 분석 도구 (옵셔널)
NEXT_PUBLIC_GA_ID=your-google-analytics-id

# 기타 환경 변수
NEXT_PUBLIC_API_URL=https://api.your-domain.com
```

### Vercel 환경 변수 설정

1. Vercel 대시보드 → 프로젝트 선택
2. Settings → Environment Variables
3. 변수 추가 및 저장
4. 재배포

### 환경별 변수 설정

- **Development**: `.env.local`
- **Production**: Vercel Dashboard 또는 `.env.production`
- **Preview**: Vercel Preview 환경 자동 적용

---

## 성능 최적화

### 1. 이미지 최적화

Next.js Image 컴포넌트는 자동으로 이미지를 최적화합니다:

```jsx
import Image from 'next/image'

<Image
  src="/images/hero.jpg"
  alt="Hero"
  width={1200}
  height={600}
  priority // Above the fold 이미지
/>
```

### 2. 폰트 최적화

`next/font`를 사용하여 폰트 최적화:

```jsx
import { Inter } from 'next/font/inter'

const inter = Inter({ subsets: ['latin'] })
```

### 3. Bundle 분석

```bash
# Bundle Analyzer 설치
npm install --save-dev @next/bundle-analyzer

# next.config.js 수정
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(nextConfig)

# 분석 실행
ANALYZE=true npm run build
```

### 4. StyleX 최적화

StyleX는 zero-runtime CSS-in-JS로 이미 최적화되어 있습니다:
- 빌드 시 정적 CSS 생성
- 런타임 오버헤드 없음
- 자동 중복 제거

### 5. 캐싱 전략

```js
// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}
```

---

## CI/CD 파이프라인

### GitHub Actions 예제

`.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Run tests
        run: npm test

      - name: Build
        run: npm run build

      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
```

---

## 모니터링 및 분석

### 1. Vercel Analytics

```bash
npm install @vercel/analytics
```

```jsx
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

### 2. Google Analytics

```jsx
// app/layout.tsx
export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

---

## 보안 체크리스트

### 배포 전 확인사항

- [ ] 환경 변수 설정 완료
- [ ] API 키 및 시크릿 보안 처리
- [ ] HTTPS 설정 (Vercel은 자동)
- [ ] CORS 정책 설정
- [ ] Rate limiting 설정
- [ ] 에러 로깅 설정
- [ ] 보안 헤더 설정

### 보안 헤더 설정

```js
// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ]
  },
}
```

---

## 문제 해결

### 빌드 에러

#### "Module not found" 에러
```bash
# 의존성 재설치
rm -rf node_modules package-lock.json
npm install
```

#### StyleX 관련 에러
```bash
# StyleX 플러그인 재설치
npm install --save-dev @stylexjs/nextjs-plugin
```

### 배포 후 이슈

#### 페이지가 404 에러
- `next.config.js`에서 `basePath` 확인
- Vercel 라우팅 설정 확인

#### 이미지가 로드되지 않음
- `next.config.js`의 `images` 도메인 설정 확인
- 이미지 경로 확인 (절대 경로 사용)

#### CSS가 적용되지 않음
- StyleX 빌드 설정 확인
- 캐시 클리어 후 재빌드

### 성능 이슈

#### 느린 로딩 속도
```bash
# 빌드 분석
ANALYZE=true npm run build

# 이미지 최적화 확인
# 불필요한 의존성 제거
# Code splitting 적용
```

#### 메모리 부족
```bash
# Node.js 메모리 증가
NODE_OPTIONS="--max-old-space-size=4096" npm run build
```

---

## 체크리스트

### 배포 전
- [ ] 로컬에서 프로덕션 빌드 테스트 (`npm run build && npm start`)
- [ ] 모든 페이지 동작 확인
- [ ] 모바일 반응형 확인
- [ ] 브라우저 호환성 테스트
- [ ] 성능 측정 (Lighthouse 점수)
- [ ] SEO 메타 태그 확인
- [ ] 환경 변수 설정 완료

### 배포 후
- [ ] 프로덕션 URL 접속 확인
- [ ] 모든 라우트 테스트
- [ ] 폼 제출 테스트
- [ ] 이미지 로딩 확인
- [ ] 모니터링 도구 작동 확인
- [ ] SSL 인증서 확인 (HTTPS)
- [ ] 성능 지표 모니터링

---

## 추가 리소스

- [Next.js 배포 문서](https://nextjs.org/docs/deployment)
- [Vercel 문서](https://vercel.com/docs)
- [Next.js 성능 최적화](https://nextjs.org/docs/advanced-features/measuring-performance)
- [StyleX 문서](https://stylexjs.com/docs/learn/)

---

## 지원

문제가 발생하면:
1. GitHub Issues 확인
2. Next.js 커뮤니티 포럼
3. Vercel Discord 채널

배포 성공하세요! 🚀
