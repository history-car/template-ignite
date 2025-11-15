# 샘플 템플릿 및 설정 파일

프로젝트에서 사용할 YAML/JSON 템플릿 및 고객 설정 파일 예시

---

## 1. 기본 템플릿 - 변호사 사무실 랜딩 페이지

### YAML 버전 (`src/templates/landing-law-firm.yml`)

```yaml
# 템플릿 메타데이터
template:
  name: "landing-law-firm"
  description: "Professional law firm landing page template"
  category: "professional-services"

# 페이지 기본 정보
page:
  title: "법률사무소 랜딩 페이지"
  description: "전문 변호사 상담"

# 섹션 구성
sections:
  # Hero 섹션
  - type: "hero"
    variant: "HeroCenteredImage"
    content:
      headline: "법률 문제, 이제 쉽게 해결하세요"
      subheadline: "20년 경력의 전문 변호사"
      description: "민사, 형사, 가사 등 모든 법률 문제를 신속하고 정확하게 처리합니다."
      cta:
        text: "무료 상담 신청"
        href: "#contact"
        variant: "primary"
      secondaryCta:
        text: "상담 사례 보기"
        href: "#features"
      image:
        src: "/images/lawyer-hero.jpg"
        alt: "전문 변호사 상담"
        width: 600
        height: 400

  # Features 섹션
  - type: "features"
    variant: "FeaturesThreeColumn"
    content:
      sectionTitle: "왜 저희를 선택해야 할까요?"
      sectionDescription: "고객 만족을 최우선으로 하는 3가지 이유"
      features:
        - icon: "Scale"
          title: "전문성"
          description: "20년 경력의 변호사가 직접 상담합니다"
        - icon: "Clock"
          title: "신속성"
          description: "24시간 이내 초기 상담 보장"
        - icon: "Shield"
          title: "신뢰성"
          description: "철저한 비밀 보장과 투명한 비용"

  # Testimonials 섹션
  - type: "testimonials"
    variant: "TestimonialsGrid"
    content:
      sectionTitle: "고객 후기"
      testimonials:
        - quote: "복잡한 상속 문제를 명쾌하게 해결해주셨습니다."
          author:
            name: "김OO"
            title: "상속 문제 의뢰인"
          rating: 5
        - quote: "신속하고 정확한 상담에 매우 만족했습니다."
          author:
            name: "이OO"
            title: "민사 소송 의뢰인"
          rating: 5
      columns: 2

  # CTA 섹션
  - type: "cta"
    variant: "CTASimple"
    content:
      headline: "지금 바로 무료 상담을 받아보세요"
      description: "전화 한 통이면 법률 문제 해결의 첫 걸음을 시작할 수 있습니다."
      cta:
        text: "상담 신청하기"
        href: "#contact"

  # Contact 섹션
  - type: "contact"
    variant: "ContactForm"
    content:
      headline: "상담 신청"
      description: "아래 양식을 작성해주시면 24시간 이내에 연락드리겠습니다."
      fields:
        - name: "name"
          type: "text"
          label: "이름"
          placeholder: "홍길동"
          required: true
        - name: "phone"
          type: "tel"
          label: "연락처"
          placeholder: "010-1234-5678"
          required: true
        - name: "email"
          type: "email"
          label: "이메일"
          placeholder: "example@email.com"
          required: false
        - name: "message"
          type: "textarea"
          label: "상담 내용"
          placeholder: "상담받고 싶은 내용을 간단히 작성해주세요"
          required: true
      submitText: "상담 신청"
      submitAction: "/api/contact"

# 테마 설정
theme:
  preset: "professional-blue"
  customColors:
    primary: "#1E40AF"
    secondary: "#64748B"
  font:
    heading: "Noto Serif KR"
    body: "Pretendard"

# SEO 설정
seo:
  title: "OO 법률사무소 - 전문 변호사 상담"
  description: "20년 경력의 전문 변호사가 민사, 형사, 가사 등 모든 법률 문제를 해결해드립니다."
  ogImage: "/images/og-law-firm.jpg"
  keywords:
    - "변호사"
    - "법률 상담"
    - "법률사무소"
    - "무료 상담"
```

### JSON 버전 (프로토타입용)

프로토타입에서는 JSON 사용을 권장 (YAML 파싱 라이브러리 불필요)

**파일**: `src/templates/landing-law-firm.json`

```json
{
  "page": {
    "title": "법률사무소 랜딩 페이지",
    "description": "전문 변호사 상담"
  },
  "sections": [
    {
      "type": "hero",
      "variant": "HeroCenteredImage",
      "content": {
        "headline": "법률 문제, 이제 쉽게 해결하세요",
        "subheadline": "20년 경력의 전문 변호사",
        "description": "민사, 형사, 가사 등 모든 법률 문제를 신속하고 정확하게 처리합니다.",
        "cta": {
          "text": "무료 상담 신청",
          "href": "#contact",
          "variant": "primary"
        },
        "secondaryCta": {
          "text": "상담 사례 보기",
          "href": "#features"
        },
        "image": {
          "src": "/images/lawyer-hero.jpg",
          "alt": "전문 변호사 상담",
          "width": 600,
          "height": 400
        }
      }
    },
    {
      "type": "features",
      "variant": "FeaturesThreeColumn",
      "content": {
        "sectionTitle": "왜 저희를 선택해야 할까요?",
        "sectionDescription": "고객 만족을 최우선으로 하는 3가지 이유",
        "features": [
          {
            "icon": "Scale",
            "title": "전문성",
            "description": "20년 경력의 변호사가 직접 상담합니다"
          },
          {
            "icon": "Clock",
            "title": "신속성",
            "description": "24시간 이내 초기 상담 보장"
          },
          {
            "icon": "Shield",
            "title": "신뢰성",
            "description": "철저한 비밀 보장과 투명한 비용"
          }
        ]
      }
    },
    {
      "type": "contact",
      "variant": "ContactForm",
      "content": {
        "headline": "무료 상담 신청",
        "description": "아래 양식을 작성해주시면 24시간 이내에 연락드리겠습니다.",
        "fields": [
          {
            "name": "name",
            "type": "text",
            "label": "이름",
            "placeholder": "홍길동",
            "required": true
          },
          {
            "name": "phone",
            "type": "tel",
            "label": "연락처",
            "placeholder": "010-1234-5678",
            "required": true
          },
          {
            "name": "email",
            "type": "email",
            "label": "이메일",
            "placeholder": "example@email.com",
            "required": false
          },
          {
            "name": "message",
            "type": "textarea",
            "label": "상담 내용",
            "placeholder": "상담받고 싶은 내용을 간단히 작성해주세요",
            "required": true
          }
        ],
        "submitText": "상담 신청",
        "submitAction": "/api/contact"
      }
    }
  ],
  "theme": {
    "preset": "professional-blue"
  }
}
```

---

## 2. 고객 설정 파일 (오버라이드 방식)

### 예시 1: 민사 전문 변호사

**파일**: `configs/kim-lawyer.yml`

```yaml
# 고객 정보
client:
  id: "kim-lawyer"
  name: "김OO 변호사"
  createdAt: "2024-01-15"

# 사용할 템플릿
page:
  title: "김OO 법률사무소"
  description: "민사 전문 변호사"
  template: "landing-law-firm"

# 템플릿 내용 오버라이드
overrides:
  hero:
    headline: "민사 소송, 20년 경력 전문가에게 맡기세요"
    subheadline: "김OO 변호사의 성공적인 소송 경험"
    description: "민사 분쟁, 계약 문제, 손해배상 등 전문적인 법률 서비스를 제공합니다."
    image:
      src: "/uploads/clients/kim-lawyer/hero.jpg"
      alt: "김OO 변호사"
    cta:
      text: "지금 상담받기"

  features:
    sectionTitle: "김OO 변호사를 선택해야 하는 이유"
    features:
      - icon: "Briefcase"
        title: "민사 전문"
        description: "민사 소송 승소율 95% 이상"
      - icon: "Users"
        title: "1:1 맞춤 상담"
        description: "대형 로펌이 아닌, 변호사 직접 상담"
      - icon: "Award"
        title: "검증된 실력"
        description: "대한변호사협회 우수 변호사 선정"

  testimonials:
    testimonials:
      - quote: "민사 소송에서 완벽한 승소를 이끌어주셨습니다."
        author:
          name: "박OO"
          title: "민사 소송 의뢰인"
        rating: 5
      - quote: "복잡한 계약 분쟁을 깔끔하게 정리해주셨습니다."
        author:
          name: "최OO"
          title: "계약 분쟁 의뢰인"
        rating: 5

  contact:
    headline: "무료 초기 상담 신청"
    description: "민사 소송 관련 문의는 언제든지 환영합니다."
    submitAction: "/api/contact/kim-lawyer"

# 테마 커스터마이징
theme:
  preset: "professional-blue"
  customColors:
    primary: "#2563EB"  # 좀 더 밝은 블루

# SEO 커스터마이징
seo:
  title: "김OO 변호사 - 민사 전문 법률사무소"
  description: "민사 소송 승소율 95%, 20년 경력 김OO 변호사가 직접 상담합니다."
  ogImage: "/uploads/clients/kim-lawyer/og-image.jpg"
  keywords:
    - "민사 전문 변호사"
    - "김OO 변호사"
    - "민사 소송"
    - "계약 분쟁"
```

### 예시 2: 형사 전문 변호사

**파일**: `configs/lee-lawyer.yml`

```yaml
client:
  id: "lee-lawyer"
  name: "이OO 변호사"
  createdAt: "2024-01-20"

page:
  title: "이OO 법률사무소"
  description: "형사 전문 변호사"
  template: "landing-law-firm"

overrides:
  hero:
    headline: "형사 사건, 경험 많은 전문가와 함께하세요"
    subheadline: "이OO 변호사 - 형사 전문 15년"
    description: "형사 고소, 고발, 변호 등 형사 사건 전문 법률 서비스"
    image:
      src: "/uploads/clients/lee-lawyer/hero.jpg"
    cta:
      text: "긴급 상담 신청"
      variant: "primary"

  features:
    sectionTitle: "형사 사건, 왜 저희에게 맡겨야 할까요?"
    features:
      - icon: "Gavel"
        title: "형사 전문"
        description: "형사 사건만 15년간 전문적으로 처리"
      - icon: "Phone"
        title: "24시간 긴급 대응"
        description: "긴급 체포, 구속 시 즉시 대응"
      - icon: "FileCheck"
        title: "높은 성공률"
        description: "무죄 판결 및 집행유예 성공률 85%"

  cta:
    headline: "긴급한 형사 사건, 지금 바로 연락하세요"
    description: "24시간 긴급 상담 가능합니다"

theme:
  customColors:
    primary: "#DC2626"  # 레드 톤 (긴급성 강조)

seo:
  title: "이OO 변호사 - 형사 전문 변호사"
  description: "형사 사건 전문 15년 경력, 24시간 긴급 대응 가능"
  keywords:
    - "형사 전문 변호사"
    - "형사 변호"
    - "긴급 변호사"
```

---

## 3. 스타트업 랜딩 페이지 템플릿

### `src/templates/landing-startup.yml`

```yaml
template:
  name: "landing-startup"
  description: "Modern startup landing page"
  category: "technology"

page:
  title: "스타트업 랜딩 페이지"
  description: "혁신적인 SaaS 제품"

sections:
  - type: "hero"
    variant: "HeroFullWidth"
    content:
      headline: "비즈니스 성장을 가속화하세요"
      subheadline: "AI 기반 자동화로 업무 효율 3배 향상"
      cta:
        text: "무료로 시작하기"
        href: "/signup"
      backgroundImage:
        src: "/images/gradient-bg.jpg"
        alt: "Modern gradient background"
        overlay: true
        overlayOpacity: 0.6

  - type: "features"
    variant: "FeaturesDetailed"
    content:
      sectionTitle: "모든 기능, 하나의 플랫폼"
      sectionDescription: "생산성을 높이는 강력한 도구들"
      features:
        - icon: "Zap"
          title: "AI 자동화"
          description: "반복 작업을 자동화하여 시간을 절약하세요"
        - icon: "BarChart"
          title: "실시간 분석"
          description: "데이터 기반 의사결정을 지원합니다"
        - icon: "Lock"
          title: "엔터프라이즈 보안"
          description: "금융권 수준의 보안 시스템"
        - icon: "Globe"
          title: "글로벌 지원"
          description: "15개 언어, 전 세계 어디서나"
      layout: "grid"

  - type: "cta"
    variant: "CTASplit"
    content:
      headline: "14일 무료 체험"
      description: "신용카드 등록 없이 모든 기능을 사용해보세요"
      primaryCta:
        text: "무료 시작하기"
        href: "/signup"
      secondaryCta:
        text: "데모 보기"
        href: "/demo"

theme:
  preset: "modern-gradient"
  customColors:
    primary: "#8B5CF6"
    secondary: "#EC4899"
  font:
    heading: "Inter"
    body: "Inter"

seo:
  title: "혁신 SaaS - 비즈니스 자동화 솔루션"
  description: "AI 기반 자동화로 업무 효율을 3배 향상시키세요"
```

---

## 4. 제품 소개 페이지 템플릿

### `src/templates/product-showcase.yml`

```yaml
template:
  name: "product-showcase"
  description: "Product showcase and introduction"
  category: "product"

page:
  title: "제품 소개 페이지"
  description: "우리 제품을 소개합니다"

sections:
  - type: "hero"
    variant: "HeroSplitLayout"
    content:
      headline: "혁신적인 제품으로 일상을 바꾸세요"
      description: "사용자 경험을 최우선으로 설계된 제품입니다"
      benefits:
        - "간편한 사용법"
        - "뛰어난 성능"
        - "합리적인 가격"
      cta:
        text: "제품 구매하기"
        href: "/shop"
      image:
        src: "/images/product-hero.jpg"
        alt: "제품 이미지"
        position: "right"

  - type: "features"
    variant: "FeaturesThreeColumn"
    content:
      sectionTitle: "제품 특징"
      features:
        - icon: "Star"
          title: "프리미엄 품질"
          description: "엄선된 재료만을 사용합니다"
        - icon: "Truck"
          title: "빠른 배송"
          description: "주문 후 24시간 내 배송"
        - icon: "RefreshCw"
          title: "30일 환불"
          description: "만족하지 않으시면 전액 환불"

  - type: "testimonials"
    variant: "TestimonialsList"
    content:
      sectionTitle: "고객 리뷰"
      testimonials:
        - quote: "정말 만족스러운 제품입니다. 강력 추천합니다!"
          author:
            name: "김OO"
            avatar: "/images/avatars/1.jpg"
          rating: 5
        - quote: "가격 대비 성능이 훌륭합니다."
          author:
            name: "박OO"
          rating: 5

  - type: "cta"
    variant: "CTASimple"
    content:
      headline: "지금 바로 구매하세요"
      description: "특별 할인 진행 중 - 이번 주까지만!"
      cta:
        text: "구매하기"
        href: "/shop"

theme:
  preset: "minimal-mono"

seo:
  title: "제품명 - 혁신적인 솔루션"
  description: "프리미엄 품질의 제품을 합리적인 가격에 만나보세요"
```

---

## 5. 간단한 연락처 페이지

### `src/templates/contact-simple.yml`

```yaml
template:
  name: "contact-simple"
  description: "Simple contact page"
  category: "contact"

page:
  title: "연락처"
  description: "문의하기"

sections:
  - type: "hero"
    variant: "HeroCenteredImage"
    content:
      headline: "문의하기"
      description: "궁금한 점이 있으시면 언제든지 연락주세요"
      cta:
        text: "이메일 보내기"
        href: "#contact"
      image:
        src: "/images/contact-hero.jpg"
        alt: "Contact us"

  - type: "contact"
    variant: "ContactInfo"
    content:
      headline: "연락 정보"
      description: "다음 방법으로 연락하실 수 있습니다"
      contactMethods:
        - type: "email"
          label: "이메일"
          value: "contact@example.com"
          icon: "Mail"
        - type: "phone"
          label: "전화"
          value: "02-1234-5678"
          icon: "Phone"
        - type: "address"
          label: "주소"
          value: "서울시 강남구 테헤란로 123"
          icon: "MapPin"
        - type: "hours"
          label: "영업시간"
          value: "평일 09:00 - 18:00"
          icon: "Clock"
      socialLinks:
        - platform: "facebook"
          url: "https://facebook.com/example"
        - platform: "instagram"
          url: "https://instagram.com/example"

  - type: "contact"
    variant: "ContactForm"
    content:
      headline: "메시지 보내기"
      fields:
        - name: "name"
          type: "text"
          label: "이름"
          required: true
        - name: "email"
          type: "email"
          label: "이메일"
          required: true
        - name: "message"
          type: "textarea"
          label: "메시지"
          required: true
      submitText: "보내기"
      submitAction: "/api/contact"

theme:
  preset: "professional-blue"
```

---

## 6. lucide-react 아이콘 이름 참고

프로젝트에서 사용 가능한 아이콘들:

### 비즈니스 & 법률
- `Scale` - 저울 (법률, 정의)
- `Gavel` - 망치 (법원, 판결)
- `Briefcase` - 서류가방 (비즈니스)
- `FileCheck` - 문서 확인
- `Shield` - 방패 (보호, 보안)

### 커뮤니케이션
- `Phone` - 전화
- `Mail` - 이메일
- `MessageSquare` - 메시지
- `Send` - 보내기

### 시간 & 속도
- `Clock` - 시계
- `Zap` - 번개 (빠름, 에너지)
- `Rocket` - 로켓 (성장, 속도)

### 품질 & 성과
- `Star` - 별 (프리미엄, 품질)
- `Award` - 상 (성취)
- `CheckCircle` - 체크 (완료, 성공)
- `TrendingUp` - 상승 (성장)

### 사용자 & 팀
- `Users` - 사용자들
- `UserCheck` - 사용자 확인
- `Heart` - 하트 (좋아요)

### 기술 & 데이터
- `BarChart` - 막대 그래프
- `PieChart` - 원 그래프
- `Globe` - 지구본 (글로벌)
- `Lock` - 자물쇠 (보안)
- `Database` - 데이터베이스

### 위치 & 내비게이션
- `MapPin` - 지도 핀
- `Navigation` - 내비게이션
- `Compass` - 나침반

### 쇼핑 & 배송
- `ShoppingCart` - 장바구니
- `Truck` - 트럭 (배송)
- `Package` - 패키지
- `CreditCard` - 신용카드

### 기타
- `Coffee` - 커피
- `Home` - 집
- `Settings` - 설정
- `RefreshCw` - 새로고침

**전체 아이콘 목록**: https://lucide.dev/icons/

---

## 다음 세션에서 사용 방법

1. **프로토타입 구현 시**:
   - `landing-law-firm.json` 복사하여 사용
   - 이미지 경로만 실제 파일로 교체

2. **실제 고객 프로젝트 시**:
   - 적절한 템플릿 선택
   - `configs/` 폴더에 고객 설정 파일 생성
   - 오버라이드 방식으로 커스터마이징

3. **새 템플릿 추가 시**:
   - 이 문서의 구조 참고
   - 섹션 조합을 다르게 구성
   - 테마와 SEO 설정 포함
