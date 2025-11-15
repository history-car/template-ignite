# 컴포넌트 문서

Template Builder의 모든 섹션 컴포넌트에 대한 상세 문서입니다.

## 📋 목차

- [Hero 섹션](#hero-섹션)
- [Features 섹션](#features-섹션)
- [CTA 섹션](#cta-섹션)
- [Testimonials 섹션](#testimonials-섹션)
- [Contact 섹션](#contact-섹션)
- [Pricing 섹션](#pricing-섹션)
- [FAQ 섹션](#faq-섹션)
- [Team 섹션](#team-섹션)
- [Stats 섹션](#stats-섹션)
- [공통 컴포넌트](#공통-컴포넌트)

---

## Hero 섹션

### HeroCenteredImage

중앙 정렬 레이아웃에 우측 이미지를 배치하는 히어로 섹션입니다.

**위치**: `src/components/sections/hero/hero-centered-image/`

**사용 사례**: 신뢰성을 강조하는 전문직 (변호사, 의사, 회계사)

**Props**:

```typescript
{
  content: {
    headline: string;           // 필수: 메인 헤드라인
    subheadline?: string;       // 선택: 서브 헤드라인
    description?: string;       // 선택: 설명 텍스트
    cta: {
      text: string;
      href: string;
      variant?: 'primary' | 'secondary' | 'outline';
    };
    secondaryCta?: {
      text: string;
      href: string;
    };
    image: {
      src: string;
      alt: string;
      width?: number;
      height?: number;
    };
  };
  theme?: {
    backgroundColor?: string;
    textColor?: string;
  };
}
```

**예제**:

```json
{
  "type": "hero",
  "variant": "HeroCenteredImage",
  "content": {
    "headline": "법률 문제, 이제 쉽게 해결하세요",
    "subheadline": "20년 경력의 전문 변호사",
    "description": "민사, 형사, 가사 등 모든 법률 문제를 신속하고 정확하게 처리합니다.",
    "cta": {
      "text": "무료 상담 신청",
      "href": "#contact"
    },
    "image": {
      "src": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop",
      "alt": "전문 변호사"
    }
  }
}
```

---

### HeroFullWidth

전체 너비 배경 이미지에 오버레이를 적용한 히어로 섹션입니다.

**위치**: `src/components/sections/hero/hero-full-width/`

**사용 사례**: 분위기를 강조하는 비즈니스 (레스토랑, 호텔, 여행)

**Props**:

```typescript
{
  content: {
    headline: string;
    subheadline?: string;
    description?: string;
    cta: {
      text: string;
      href: string;
      variant?: 'primary' | 'secondary' | 'outline';
    };
    secondaryCta?: {
      text: string;
      href: string;
    };
    backgroundImage: {
      src: string;
      alt: string;
      overlay?: 'dark' | 'light' | 'none';
      overlayOpacity?: number;  // 0.0 ~ 1.0
    };
  };
}
```

**예제**:

```json
{
  "type": "hero",
  "variant": "HeroFullWidth",
  "content": {
    "headline": "정통 이탈리안의 진수를 경험하세요",
    "subheadline": "셰프의 정성이 담긴 특별한 요리",
    "cta": {
      "text": "예약하기",
      "href": "#contact"
    },
    "backgroundImage": {
      "src": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&h=800&fit=crop",
      "alt": "레스토랑 인테리어",
      "overlay": "dark",
      "overlayOpacity": 0.4
    }
  }
}
```

---

### HeroSplitLayout

좌우 분할 레이아웃의 히어로 섹션입니다.

**위치**: `src/components/sections/hero/hero-split-layout/`

**사용 사례**: 균형잡힌 디자인이 필요한 경우 (병원, IT 서비스)

**Props**:

```typescript
{
  content: {
    headline: string;
    subheadline?: string;
    description?: string;
    cta: {
      text: string;
      href: string;
      variant?: 'primary' | 'secondary' | 'outline';
    };
    secondaryCta?: {
      text: string;
      href: string;
    };
    image: {
      src: string;
      alt: string;
      width?: number;
      height?: number;
    };
    imagePosition?: 'left' | 'right';  // 기본값: 'right'
  };
}
```

---

## Features 섹션

### FeaturesThreeColumn

3열 그리드로 특징을 표시하는 섹션입니다.

**위치**: `src/components/sections/features/features-three-column/`

**사용 사례**: 핵심 가치 제안 (USP) 표시

**Props**:

```typescript
{
  content: {
    sectionTitle?: string;
    sectionDescription?: string;
    features: [  // 정확히 3개 필요
      {
        icon?: string;       // Lucide 아이콘 이름
        title: string;
        description: string;
      },
      {
        icon?: string;
        title: string;
        description: string;
      },
      {
        icon?: string;
        title: string;
        description: string;
      }
    ];
  };
}
```

**예제**:

```json
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
}
```

---

### FeaturesDetailed

상세 설명과 이미지를 포함한 특징 섹션입니다.

**위치**: `src/components/sections/features/features-detailed/`

**사용 사례**: 제품/서비스 상세 설명

**Props**:

```typescript
{
  content: {
    sectionTitle?: string;
    sectionDescription?: string;
    features: Array<{
      icon?: string;
      title: string;
      description: string;
      details?: string[];  // 상세 항목 리스트
      image?: {
        src: string;
        alt: string;
        width?: number;
        height?: number;
      };
    }>;
  };
}
```

**예제**:

```json
{
  "type": "features",
  "variant": "FeaturesDetailed",
  "content": {
    "sectionTitle": "서비스 안내",
    "features": [
      {
        "icon": "Activity",
        "title": "내과 진료",
        "description": "종합적인 건강 검진부터 만성질환 관리까지",
        "details": [
          "정기 건강 검진 및 종합 건강 상담",
          "고혈압, 당뇨병 등 만성질환 관리",
          "소화기, 호흡기 질환 진료"
        ],
        "image": {
          "src": "https://images.unsplash.com/...",
          "alt": "내과 진료실"
        }
      }
    ]
  }
}
```

---

## CTA 섹션

### CTASimple

중앙 정렬된 단순 CTA 섹션입니다.

**위치**: `src/components/sections/cta/cta-simple/`

**사용 사례**: 페이지 중간 또는 하단의 행동 유도

**Props**:

```typescript
{
  content: {
    headline: string;
    description?: string;
    cta: {
      text: string;
      href: string;
      variant?: 'primary' | 'secondary' | 'outline';
    };
  };
}
```

**예제**:

```json
{
  "type": "cta",
  "variant": "CTASimple",
  "content": {
    "headline": "세무·회계 고민, 전문가와 상담하세요",
    "description": "복잡한 세무 문제부터 기업 재무 전략까지, 15년 경력의 공인회계사가 명쾌하게 해결해드립니다.",
    "cta": {
      "text": "무료 상담 예약",
      "href": "#contact"
    }
  }
}
```

---

### CTASplit

이미지와 함께 표시되는 분할 CTA 섹션입니다.

**위치**: `src/components/sections/cta/cta-split/`

**사용 사례**: 시각적 요소가 필요한 강력한 CTA

**Props**:

```typescript
{
  content: {
    headline: string;
    description?: string;
    cta: {
      text: string;
      href: string;
      variant?: 'primary' | 'secondary' | 'outline';
    };
    secondaryCta?: {
      text: string;
      href: string;
    };
    image: {
      src: string;
      alt: string;
      width?: number;
      height?: number;
    };
    imagePosition?: 'left' | 'right';
  };
}
```

---

## Testimonials 섹션

### TestimonialsGrid

그리드 레이아웃으로 여러 후기를 동시에 표시합니다.

**위치**: `src/components/sections/testimonials/testimonials-grid/`

**사용 사례**: 여러 고객 후기를 한눈에 보여주기

**Props**:

```typescript
{
  content: {
    sectionTitle?: string;
    sectionDescription?: string;
    testimonials: Array<{
      quote: string;
      author: string;
      role?: string;
      company?: string;
      image?: {
        src: string;
        alt: string;
      };
      rating?: number;  // 1~5
    }>;
  };
}
```

**예제**:

```json
{
  "type": "testimonials",
  "variant": "TestimonialsGrid",
  "content": {
    "sectionTitle": "고객 후기",
    "testimonials": [
      {
        "quote": "친절하고 세심한 진료에 감동받았습니다.",
        "author": "김민지",
        "role": "내과 환자",
        "rating": 5
      },
      {
        "quote": "최신 장비로 정확한 검진을 받았습니다.",
        "author": "이준호",
        "role": "건강검진",
        "rating": 5
      }
    ]
  }
}
```

---

### TestimonialsCarousel

캐러셀 형태로 후기를 하나씩 표시합니다.

**위치**: `src/components/sections/testimonials/testimonials-carousel/`

**사용 사례**: 집중도 높은 후기 표시, 자동 슬라이드

**Props**:

```typescript
{
  content: {
    sectionTitle?: string;
    sectionDescription?: string;
    testimonials: Array<{
      quote: string;
      author: string;
      role?: string;
      company?: string;
      image?: {
        src: string;
        alt: string;
      };
      rating?: number;
    }>;
    autoPlay?: boolean;        // 자동 재생 (기본값: false)
    autoPlayInterval?: number; // 밀리초 (기본값: 5000)
  };
}
```

**기능**:
- 이전/다음 버튼
- 인디케이터 (점 표시)
- 자동 슬라이드 (선택)
- 키보드 네비게이션

---

## Contact 섹션

### ContactForm

중앙 정렬된 연락 폼입니다.

**위치**: `src/components/sections/contact/contact-form/`

**사용 사례**: 단순하고 깔끔한 문의 폼

**Props**:

```typescript
{
  content: {
    headline: string;
    description?: string;
    fields: Array<{
      name: string;
      type: 'text' | 'email' | 'tel' | 'textarea';
      label: string;
      placeholder?: string;
      required?: boolean;
    }>;
    submitText: string;
    submitAction: string;
  };
}
```

**예제**:

```json
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
```

---

### ContactSplit

연락처 정보와 폼을 함께 표시합니다.

**위치**: `src/components/sections/contact/contact-split/`

**사용 사례**: 다양한 연락 방법 제공

**Props**:

```typescript
{
  content: {
    headline: string;
    description?: string;
    contactInfo: Array<{
      icon?: string;
      label: string;
      value: string;
      href?: string;  // 클릭 가능하게 만들기
    }>;
    form: {
      fields: Array<{
        name: string;
        type: 'text' | 'email' | 'tel' | 'textarea';
        label: string;
        placeholder?: string;
        required?: boolean;
      }>;
      submitText: string;
      submitAction: string;
    };
  };
}
```

**예제**:

```json
{
  "type": "contact",
  "variant": "ContactSplit",
  "content": {
    "headline": "진료 예약 및 문의",
    "contactInfo": [
      {
        "icon": "Phone",
        "label": "전화 예약",
        "value": "02-1234-5678",
        "href": "tel:02-1234-5678"
      },
      {
        "icon": "Clock",
        "label": "진료 시간",
        "value": "평일 09:00 - 18:00"
      },
      {
        "icon": "MapPin",
        "label": "오시는 길",
        "value": "서울시 강남구 테헤란로 456",
        "href": "https://maps.google.com"
      }
    ],
    "form": {
      "fields": [
        {
          "name": "name",
          "type": "text",
          "label": "이름",
          "required": true
        }
      ],
      "submitText": "예약 신청",
      "submitAction": "/api/appointment"
    }
  }
}
```

---

## Pricing 섹션

### PricingThreeColumn

3열 가격표 레이아웃으로 가격 플랜을 비교하는 섹션입니다.

**위치**: `src/components/sections/pricing/pricing-three-column/`

**사용 사례**: SaaS, 구독 서비스, 멤버십 프로그램

**Props**:

```typescript
{
  content: {
    sectionTitle?: string;
    sectionDescription?: string;
    tiers: [
      {
        name: string;              // 플랜 이름
        price: string;             // 가격
        period?: string;           // 기간 (월, 년)
        description?: string;      // 플랜 설명
        features: string[];        // 기능 목록
        cta: {
          text: string;
          href: string;
          variant?: 'primary' | 'secondary' | 'outline';
        };
        highlighted?: boolean;     // 추천 플랜 강조
      },
      // 2개 더...
    ];
  };
  theme?: { ... };
}
```

**예제**:

```json
{
  "type": "pricing",
  "variant": "PricingThreeColumn",
  "content": {
    "sectionTitle": "합리적인 가격",
    "sectionDescription": "비즈니스 규모에 맞는 플랜을 선택하세요",
    "tiers": [
      {
        "name": "스타터",
        "price": "₩29,000",
        "period": "월",
        "description": "개인 및 소규모 팀",
        "features": [
          "최대 5명 사용",
          "10GB 저장공간",
          "기본 지원",
          "월간 리포트"
        ],
        "cta": {
          "text": "시작하기",
          "href": "#signup",
          "variant": "outline"
        }
      },
      {
        "name": "프로",
        "price": "₩99,000",
        "period": "월",
        "description": "성장하는 비즈니스",
        "features": [
          "최대 20명 사용",
          "100GB 저장공간",
          "우선 지원",
          "주간 리포트",
          "고급 분석"
        ],
        "cta": {
          "text": "선택하기",
          "href": "#signup",
          "variant": "primary"
        },
        "highlighted": true
      },
      {
        "name": "엔터프라이즈",
        "price": "₩299,000",
        "period": "월",
        "description": "대규모 조직",
        "features": [
          "무제한 사용자",
          "무제한 저장공간",
          "전담 지원",
          "일간 리포트",
          "고급 분석",
          "API 액세스"
        ],
        "cta": {
          "text": "문의하기",
          "href": "#contact",
          "variant": "outline"
        }
      }
    ]
  }
}
```

---

### PricingComparison

유연한 다중 플랜 비교 레이아웃입니다.

**위치**: `src/components/sections/pricing/pricing-comparison/`

**사용 사례**: 여러 플랜 옵션 비교, 기능 비교 강조

**Props**: PricingThreeColumn과 동일하지만 tiers 배열이 고정 길이가 아님

**예제**: PricingThreeColumn과 유사

---

## FAQ 섹션

### FAQAccordion

아코디언 스타일의 인터랙티브 FAQ 섹션입니다.

**위치**: `src/components/sections/faq/faq-accordion/`

**사용 사례**: 자주 묻는 질문, 지원 페이지

**Props**:

```typescript
{
  content: {
    sectionTitle?: string;
    sectionDescription?: string;
    faqs: Array<{
      question: string;
      answer: string;
    }>;
  };
  theme?: { ... };
}
```

**예제**:

```json
{
  "type": "faq",
  "variant": "FAQAccordion",
  "content": {
    "sectionTitle": "자주 묻는 질문",
    "sectionDescription": "궁금하신 사항을 확인하세요",
    "faqs": [
      {
        "question": "서비스 이용 요금은 얼마인가요?",
        "answer": "기본 플랜은 월 29,000원부터 시작하며, 비즈니스 규모에 맞는 다양한 요금제를 제공합니다."
      },
      {
        "question": "무료 체험 기간이 있나요?",
        "answer": "네, 모든 플랜에서 14일 무료 체험을 제공합니다. 신용카드 정보 없이 시작할 수 있습니다."
      },
      {
        "question": "언제든지 취소할 수 있나요?",
        "answer": "네, 언제든지 취소 가능합니다. 위약금이나 추가 비용은 없습니다."
      }
    ]
  }
}
```

---

### FAQTwoColumn

2열 그리드 레이아웃의 FAQ 섹션입니다.

**위치**: `src/components/sections/faq/faq-two-column/`

**사용 사례**: 많은 FAQ를 컴팩트하게 표시

**Props**: FAQAccordion과 동일

---

## Team 섹션

### TeamGrid

그리드 레이아웃으로 팀원을 소개하는 섹션입니다.

**위치**: `src/components/sections/team/team-grid/`

**사용 사례**: 회사 소개, 팀 페이지

**Props**:

```typescript
{
  content: {
    sectionTitle?: string;
    sectionDescription?: string;
    members: Array<{
      name: string;
      role: string;
      bio?: string;
      image?: {
        src: string;
        alt: string;
      };
      social?: Array<{
        platform: string;
        url: string;
        icon?: string;
      }>;
    }>;
  };
  theme?: { ... };
}
```

**예제**:

```json
{
  "type": "team",
  "variant": "TeamGrid",
  "content": {
    "sectionTitle": "우리 팀을 소개합니다",
    "sectionDescription": "전문성과 열정을 갖춘 팀원들",
    "members": [
      {
        "name": "김철수",
        "role": "대표 변호사",
        "bio": "서울대 법학과 졸업, 20년 경력의 법률 전문가",
        "image": {
          "src": "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
          "alt": "김철수 변호사"
        },
        "social": [
          {
            "platform": "LinkedIn",
            "url": "https://linkedin.com/in/example",
            "icon": "Linkedin"
          },
          {
            "platform": "Email",
            "url": "mailto:kim@example.com",
            "icon": "Mail"
          }
        ]
      }
    ]
  }
}
```

---

### TeamCards

카드 스타일로 팀원을 소개하는 섹션입니다.

**위치**: `src/components/sections/team/team-cards/`

**사용 사례**: 디자인 에이전시, 스타트업 팀 소개

**Props**: TeamGrid와 동일

---

## Stats 섹션

### StatsSimple

간단한 통계 표시 섹션입니다.

**위치**: `src/components/sections/stats/stats-simple/`

**사용 사례**: 실적 강조, 수치 기반 신뢰 구축

**Props**:

```typescript
{
  content: {
    sectionTitle?: string;
    sectionDescription?: string;
    stats: Array<{
      value: string;          // 숫자 또는 값
      label: string;          // 레이블
      description?: string;   // 설명
      icon?: string;         // 아이콘 (선택)
    }>;
  };
  theme?: { ... };
}
```

**예제**:

```json
{
  "type": "stats",
  "variant": "StatsSimple",
  "content": {
    "sectionTitle": "신뢰할 수 있는 실적",
    "stats": [
      {
        "value": "1,000+",
        "label": "성공 사례",
        "icon": "Trophy"
      },
      {
        "value": "98%",
        "label": "고객 만족도",
        "icon": "ThumbsUp"
      },
      {
        "value": "20년",
        "label": "업계 경력",
        "icon": "Award"
      },
      {
        "value": "24/7",
        "label": "고객 지원",
        "icon": "HeadphonesIcon"
      }
    ]
  }
}
```

---

### StatsHighlight

강조된 카드 스타일의 통계 섹션입니다.

**위치**: `src/components/sections/stats/stats-highlight/`

**사용 사례**: 주요 성과 강조, 랜딩 페이지

**Props**:

```typescript
{
  content: {
    sectionTitle?: string;
    sectionDescription?: string;
    stats: Array<{
      value: string;
      label: string;
      description?: string;
      icon?: string;
    }>;
    layout?: 'grid' | 'inline';  // 레이아웃 방식
  };
  theme?: { ... };
}
```

**예제**: StatsSimple과 유사하지만 `layout` 속성 추가 가능

---

## 공통 컴포넌트

### Button

재사용 가능한 버튼 컴포넌트

**Props**:

```typescript
{
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'default' | 'large';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}
```

### Container

최대 너비와 패딩을 적용하는 컨테이너

**Props**:

```typescript
{
  children: React.ReactNode;
}
```

### Heading

시맨틱 헤딩 컴포넌트

**Props**:

```typescript
{
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
}
```

---

## 반응형 동작

모든 컴포넌트는 다음 브레이크포인트에서 반응형으로 동작합니다:

- **모바일**: < 768px
- **태블릿**: 768px ~ 1024px
- **데스크톱**: > 1024px

### 주요 변경사항

- 그리드 레이아웃: 데스크톱 3열 → 모바일 1열
- 폰트 크기: 데스크톱 → 모바일 자동 축소
- 패딩/마진: 화면 크기에 따라 조정
- 이미지 위치: 분할 레이아웃 → 모바일에서 세로 스택

---

## 접근성

모든 컴포넌트는 WCAG 2.1 AA 기준을 준수합니다:

- 시맨틱 HTML 사용
- 적절한 ARIA 레이블
- 키보드 네비게이션 지원
- 충분한 색상 대비
- 이미지 alt 텍스트 필수

---

더 자세한 정보는 다음 문서를 참고하세요:

- [템플릿 작성 가이드](./TEMPLATE_GUIDE.md)
- [아이콘 목록](./ICONS.md)
- [배포 가이드](./DEPLOYMENT.md)
