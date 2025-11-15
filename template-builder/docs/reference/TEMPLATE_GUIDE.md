# 템플릿 작성 가이드

JSON 파일을 사용하여 새로운 랜딩 페이지 템플릿을 만드는 방법을 설명합니다.

## 📋 목차

- [템플릿 구조](#템플릿-구조)
- [섹션별 상세 가이드](#섹션별-상세-가이드)
- [이미지 처리](#이미지-처리)
- [아이콘 사용](#아이콘-사용)
- [전체 예제](#전체-예제)

## 템플릿 구조

### 기본 구조

```json
{
  "page": {
    "title": "페이지 제목 (브라우저 탭에 표시)",
    "description": "SEO를 위한 페이지 설명"
  },
  "sections": [
    // 섹션 배열
  ],
  "theme": {
    "preset": "professional-blue"
  }
}
```

### 섹션 기본 구조

```json
{
  "type": "섹션 타입 (hero, features, cta, testimonials, contact)",
  "variant": "섹션 변형 (PascalCase)",
  "content": {
    // 섹션별 고유 내용
  }
}
```

## 섹션별 상세 가이드

### Hero 섹션

#### HeroCenteredImage

중앙 정렬 + 우측 이미지 레이아웃

```json
{
  "type": "hero",
  "variant": "HeroCenteredImage",
  "content": {
    "headline": "메인 헤드라인 (필수)",
    "subheadline": "서브 헤드라인 (선택)",
    "description": "설명 텍스트 (선택)",
    "cta": {
      "text": "버튼 텍스트",
      "href": "#contact",
      "variant": "primary"
    },
    "secondaryCta": {
      "text": "두 번째 버튼 (선택)",
      "href": "#features"
    },
    "image": {
      "src": "https://images.unsplash.com/...",
      "alt": "이미지 설명",
      "width": 600,
      "height": 400
    }
  }
}
```

#### HeroFullWidth

전체 너비 배경 이미지

```json
{
  "type": "hero",
  "variant": "HeroFullWidth",
  "content": {
    "headline": "메인 헤드라인",
    "subheadline": "서브 헤드라인 (선택)",
    "description": "설명 텍스트 (선택)",
    "cta": {
      "text": "버튼 텍스트",
      "href": "#contact"
    },
    "secondaryCta": {
      "text": "두 번째 버튼 (선택)",
      "href": "#features"
    },
    "backgroundImage": {
      "src": "https://images.unsplash.com/...",
      "alt": "배경 이미지 설명",
      "overlay": "dark",
      "overlayOpacity": 0.5
    }
  }
}
```

**overlay 옵션**: `"dark"`, `"light"`, `"none"`
**overlayOpacity**: 0.0 ~ 1.0

#### HeroSplitLayout

좌우 분할 레이아웃

```json
{
  "type": "hero",
  "variant": "HeroSplitLayout",
  "content": {
    "headline": "메인 헤드라인",
    "subheadline": "서브 헤드라인 (선택)",
    "description": "설명 텍스트 (선택)",
    "cta": {
      "text": "버튼 텍스트",
      "href": "#contact"
    },
    "secondaryCta": {
      "text": "두 번째 버튼 (선택)",
      "href": "#features"
    },
    "image": {
      "src": "https://images.unsplash.com/...",
      "alt": "이미지 설명",
      "width": 600,
      "height": 400
    },
    "imagePosition": "left"
  }
}
```

**imagePosition**: `"left"` 또는 `"right"`

---

### Features 섹션

#### FeaturesThreeColumn

3열 그리드 레이아웃

```json
{
  "type": "features",
  "variant": "FeaturesThreeColumn",
  "content": {
    "sectionTitle": "섹션 제목 (선택)",
    "sectionDescription": "섹션 설명 (선택)",
    "features": [
      {
        "icon": "Zap",
        "title": "기능 제목",
        "description": "기능 설명"
      },
      {
        "icon": "Shield",
        "title": "기능 제목 2",
        "description": "기능 설명 2"
      },
      {
        "icon": "Users",
        "title": "기능 제목 3",
        "description": "기능 설명 3"
      }
    ]
  }
}
```

**중요**: `features` 배열은 정확히 3개의 항목이 필요합니다.

#### FeaturesDetailed

상세 설명 + 이미지

```json
{
  "type": "features",
  "variant": "FeaturesDetailed",
  "content": {
    "sectionTitle": "섹션 제목 (선택)",
    "sectionDescription": "섹션 설명 (선택)",
    "features": [
      {
        "icon": "CheckCircle",
        "title": "기능 제목",
        "description": "기능 설명",
        "details": [
          "상세 항목 1",
          "상세 항목 2",
          "상세 항목 3"
        ],
        "image": {
          "src": "https://images.unsplash.com/...",
          "alt": "기능 이미지",
          "width": 600,
          "height": 400
        }
      }
    ]
  }
}
```

---

### CTA 섹션

#### CTASimple

중앙 정렬 단순 CTA

```json
{
  "type": "cta",
  "variant": "CTASimple",
  "content": {
    "headline": "행동 유도 헤드라인",
    "description": "설명 텍스트 (선택)",
    "cta": {
      "text": "버튼 텍스트",
      "href": "#contact",
      "variant": "primary"
    }
  }
}
```

#### CTASplit

분할 레이아웃 CTA

```json
{
  "type": "cta",
  "variant": "CTASplit",
  "content": {
    "headline": "행동 유도 헤드라인",
    "description": "설명 텍스트 (선택)",
    "cta": {
      "text": "주 버튼",
      "href": "#contact"
    },
    "secondaryCta": {
      "text": "부 버튼 (선택)",
      "href": "#features"
    },
    "image": {
      "src": "https://images.unsplash.com/...",
      "alt": "CTA 이미지",
      "width": 600,
      "height": 400
    },
    "imagePosition": "right"
  }
}
```

---

### Testimonials 섹션

#### TestimonialsGrid

그리드 레이아웃 후기

```json
{
  "type": "testimonials",
  "variant": "TestimonialsGrid",
  "content": {
    "sectionTitle": "고객 후기 (선택)",
    "sectionDescription": "설명 텍스트 (선택)",
    "testimonials": [
      {
        "quote": "후기 내용",
        "author": "작성자 이름",
        "role": "직책 (선택)",
        "company": "회사명 (선택)",
        "rating": 5
      }
    ]
  }
}
```

**rating**: 1~5 사이의 숫자

#### TestimonialsCarousel

캐러셀 후기

```json
{
  "type": "testimonials",
  "variant": "TestimonialsCarousel",
  "content": {
    "sectionTitle": "고객 후기 (선택)",
    "sectionDescription": "설명 텍스트 (선택)",
    "testimonials": [
      {
        "quote": "후기 내용",
        "author": "작성자 이름",
        "role": "직책 (선택)",
        "company": "회사명 (선택)",
        "rating": 5
      }
    ],
    "autoPlay": true,
    "autoPlayInterval": 5000
  }
}
```

**autoPlay**: `true` 또는 `false`
**autoPlayInterval**: 밀리초 단위 (기본값: 5000)

---

### Contact 섹션

#### ContactForm

중앙 정렬 연락 폼

```json
{
  "type": "contact",
  "variant": "ContactForm",
  "content": {
    "headline": "문의하기",
    "description": "설명 텍스트 (선택)",
    "fields": [
      {
        "name": "name",
        "type": "text",
        "label": "이름",
        "placeholder": "홍길동",
        "required": true
      },
      {
        "name": "email",
        "type": "email",
        "label": "이메일",
        "placeholder": "example@email.com",
        "required": true
      },
      {
        "name": "message",
        "type": "textarea",
        "label": "메시지",
        "placeholder": "문의 내용을 작성해주세요",
        "required": true
      }
    ],
    "submitText": "전송",
    "submitAction": "/api/contact"
  }
}
```

**필드 타입**: `"text"`, `"email"`, `"tel"`, `"textarea"`

#### ContactSplit

연락처 정보 + 폼

```json
{
  "type": "contact",
  "variant": "ContactSplit",
  "content": {
    "headline": "문의하기",
    "description": "설명 텍스트 (선택)",
    "contactInfo": [
      {
        "icon": "Phone",
        "label": "전화",
        "value": "02-1234-5678",
        "href": "tel:02-1234-5678"
      },
      {
        "icon": "Mail",
        "label": "이메일",
        "value": "contact@example.com",
        "href": "mailto:contact@example.com"
      },
      {
        "icon": "MapPin",
        "label": "주소",
        "value": "서울시 강남구 테헤란로 123"
      }
    ],
    "form": {
      "fields": [
        {
          "name": "name",
          "type": "text",
          "label": "이름",
          "placeholder": "홍길동",
          "required": true
        }
      ],
      "submitText": "전송",
      "submitAction": "/api/contact"
    }
  }
}
```

---

## 이미지 처리

### Unsplash 사용 (권장)

무료 고품질 이미지:

```json
{
  "src": "https://images.unsplash.com/photo-1234567890?w=600&h=400&fit=crop",
  "alt": "이미지 설명"
}
```

**URL 파라미터**:
- `w`: 너비
- `h`: 높이
- `fit=crop`: 크롭

### 로컬 이미지

`public/images/` 폴더에 이미지를 넣고:

```json
{
  "src": "/images/my-image.jpg",
  "alt": "이미지 설명",
  "width": 600,
  "height": 400
}
```

---

## 아이콘 사용

100개 이상의 Lucide React 아이콘 사용 가능.

### 자주 사용되는 아이콘

| 카테고리 | 아이콘 이름 |
|----------|-------------|
| 비즈니스 | `Briefcase`, `TrendingUp`, `BarChart`, `Target` |
| 소통 | `Mail`, `Phone`, `MessageCircle`, `Send` |
| 체크/완료 | `Check`, `CheckCircle`, `Star`, `Award` |
| 기술 | `Zap`, `Cpu`, `Database`, `Cloud` |
| 보안 | `Shield`, `Lock`, `Eye`, `AlertCircle` |
| 위치 | `MapPin`, `Navigation`, `Home`, `Building` |
| 시간 | `Clock`, `Calendar`, `Activity` |
| 사람 | `Users`, `User`, `Heart` |

전체 아이콘 목록: [ICONS.md](./ICONS.md)

---

## 전체 예제

완전한 랜딩 페이지 템플릿 예제:

```json
{
  "page": {
    "title": "카페 | 특별한 커피 경험",
    "description": "스페셜티 커피와 수제 디저트"
  },
  "sections": [
    {
      "type": "hero",
      "variant": "HeroFullWidth",
      "content": {
        "headline": "특별한 커피, 특별한 공간",
        "subheadline": "스페셜티 커피 전문점",
        "description": "엄선된 원두로 만드는 프리미엄 커피",
        "cta": {
          "text": "메뉴 보기",
          "href": "#features"
        },
        "backgroundImage": {
          "src": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&h=800&fit=crop",
          "alt": "카페 인테리어",
          "overlay": "dark",
          "overlayOpacity": 0.4
        }
      }
    },
    {
      "type": "features",
      "variant": "FeaturesThreeColumn",
      "content": {
        "sectionTitle": "왜 우리 카페일까요?",
        "features": [
          {
            "icon": "Coffee",
            "title": "스페셜티 원두",
            "description": "엄선된 싱글 오리진 원두만 사용합니다"
          },
          {
            "icon": "Heart",
            "title": "수제 디저트",
            "description": "매일 아침 만드는 신선한 베이커리"
          },
          {
            "icon": "Home",
            "title": "아늑한 공간",
            "description": "편안하게 쉴 수 있는 프라이빗 공간"
          }
        ]
      }
    },
    {
      "type": "contact",
      "variant": "ContactSplit",
      "content": {
        "headline": "방문 및 문의",
        "contactInfo": [
          {
            "icon": "Phone",
            "label": "전화",
            "value": "02-1234-5678",
            "href": "tel:02-1234-5678"
          },
          {
            "icon": "Clock",
            "label": "영업시간",
            "value": "매일 10:00 - 22:00"
          },
          {
            "icon": "MapPin",
            "label": "위치",
            "value": "서울시 강남구 가로수길 123"
          }
        ],
        "form": {
          "fields": [
            {
              "name": "name",
              "type": "text",
              "label": "이름",
              "placeholder": "홍길동",
              "required": true
            },
            {
              "name": "message",
              "type": "textarea",
              "label": "문의사항",
              "placeholder": "문의 내용을 작성해주세요",
              "required": true
            }
          ],
          "submitText": "문의하기",
          "submitAction": "/api/contact"
        }
      }
    }
  ],
  "theme": {
    "preset": "professional-blue"
  }
}
```

---

## 팁과 주의사항

### ✅ Do

- PascalCase로 variant 이름 작성 (`HeroCenteredImage`)
- 필수 필드는 반드시 포함
- 이미지 alt 텍스트 작성 (SEO, 접근성)
- 의미 있는 headline과 description 작성

### ❌ Don't

- kebab-case 사용 금지 (`hero-centered-image` ❌)
- 너무 긴 텍스트 (headline은 10단어 이내 권장)
- 저품질 이미지 사용
- 필수 필드 누락

---

더 자세한 정보는 다음 문서를 참고하세요:

- [컴포넌트 상세 문서](./COMPONENTS.md)
- [아이콘 전체 목록](./ICONS.md)
- [배포 가이드](./DEPLOYMENT.md)
