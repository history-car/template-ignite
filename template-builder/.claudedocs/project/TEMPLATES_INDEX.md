# Templates Index - 템플릿 전체 목록

**최종 업데이트**: 2024-11-16
**총 템플릿**: 8개

---

## 템플릿 전체 목록

### 1. 법률사무소 (Law Firm) ⚖️

**경로**: `/law-firm`
**JSON**: `src/templates/landing-law-firm.json`
**페이지**: `src/app/law-firm/page.tsx`
**상태**: ✅ 완료

**섹션 구성** (3개):
1. Hero - `HeroSplitLayout` (이미지 좌측)
2. Features - `FeaturesThreeColumn`
3. Contact - `ContactSplit`

**특징**:
- 신뢰감 있는 전문가 이미지
- 법률 서비스 3가지 강조
- 직접 연락 가능한 정보 제공

---

### 2. 병원/클리닉 (Medical Clinic) 🏥

**경로**: `/medical`
**JSON**: `src/templates/landing-medical-clinic.json`
**페이지**: `src/app/medical/page.tsx`
**상태**: ✅ 완료

**섹션 구성** (5개):
1. Hero - `HeroFullWidth` (배경 이미지)
2. Features - `FeaturesThreeColumn`
3. Testimonials - `TestimonialsGrid`
4. CTA - `CTASimple`
5. Contact - `ContactForm`

**특징**:
- 따뜻하고 안심되는 분위기
- 환자 중심 서비스 강조
- 실제 환자 후기 포함

---

### 3. 회계사무소 (Accounting Office) 💼

**경로**: `/accounting`
**JSON**: `src/templates/landing-accounting-office.json`
**페이지**: `src/app/accounting/page.tsx`
**상태**: ✅ 완료

**섹션 구성** (5개):
1. Hero - `HeroCenteredImage`
2. Features - `FeaturesThreeColumn`
3. CTA - `CTASplit` (이미지 우측)
4. Testimonials - `TestimonialsCarousel`
5. Contact - `ContactSplit`

**특징**:
- 프로페셔널하고 신뢰감 있는 디자인
- 재무 전문성 강조
- 캐러셀 후기로 다양한 고객사 소개

---

### 4. 레스토랑 (Restaurant) 🍽️

**경로**: `/restaurant`
**JSON**: `src/templates/landing-restaurant.json`
**페이지**: `src/app/restaurant/page.tsx`
**상태**: ✅ 완료

**섹션 구성** (5개):
1. Hero - `HeroFullWidth` (배경: 음식 이미지)
2. Features - `FeaturesThreeColumn`
3. Testimonials - `TestimonialsGrid`
4. CTA - `CTASimple`
5. Contact - `ContactSplit`

**특징**:
- 식욕을 자극하는 비주얼
- 음식 품질과 분위기 강조
- 위치 및 영업 시간 명확히 표시

---

### 5. 포트폴리오 (Portfolio) 💻

**경로**: `/portfolio`
**JSON**: `src/templates/landing-portfolio.json`
**페이지**: `src/app/portfolio/page.tsx`
**상태**: ✅ 완료

**섹션 구성** (5개):
1. Hero - `HeroSplitLayout` (이미지 우측)
2. Features - `FeaturesThreeColumn`
3. Features - `FeaturesDetailed` (프로젝트 상세)
4. Testimonials - `TestimonialsCarousel`
5. Contact - `ContactForm`

**특징**:
- 개인 브랜딩 중심
- 프로젝트 포트폴리오 강조
- 기술 스택 및 경력 소개

---

### 6. SaaS 스타트업 🚀 ✨ NEW

**경로**: `/saas`
**JSON**: `src/templates/landing-saas.json`
**페이지**: `src/app/saas/page.tsx`
**상태**: ✅ 완료

**섹션 구성** (6개):
1. Hero - `HeroSplitLayout` (이미지 우측)
2. Stats - `StatsHighlight`
3. Features - `FeaturesThreeColumn`
4. Pricing - `PricingThreeColumn`
5. Testimonials - `TestimonialsGrid`
6. FAQ - `FAQAccordion`

**특징**:
- 모던하고 기술 중심적인 디자인
- 명확한 가격 정책 (3개 플랜)
- 통계로 신뢰도 강조
- FAQ로 고객 우려사항 해소

**활용 섹션**: Pricing, FAQ, Stats

---

### 7. 디자인 에이전시 (Agency) 🎨 ✨ NEW

**경로**: `/agency`
**JSON**: `src/templates/landing-agency.json`
**페이지**: `src/app/agency/page.tsx`
**상태**: ✅ 완료

**섹션 구성** (5개):
1. Hero - `HeroFullWidth` (배경: 창의적 이미지)
2. Stats - `StatsSimple`
3. Features - `FeaturesDetailed` (서비스 상세)
4. Team - `TeamCards`
5. Contact - `ContactSplit`

**특징**:
- 창의성과 전문성 강조
- 팀 소개로 신뢰감 형성
- 실적 통계로 역량 증명
- 크리에이티브한 비주얼

**활용 섹션**: Team, Stats

---

### 8. 온라인 강좌 (Online Course) 📚 ✨ NEW

**경로**: `/course`
**JSON**: `src/templates/landing-course.json`
**페이지**: `src/app/course/page.tsx`
**상태**: ⚠️ 수정 필요

**섹션 구성** (6개):
1. Hero - `HeroCenteredImage`
2. Stats - `StatsHighlight`
3. Features - `FeaturesDetailed` (프론트엔드 커리큘럼) ⚠️
4. Features - `FeaturesDetailed` (백엔드 커리큘럼) ⚠️
5. Pricing - `PricingComparison`
6. Contact - `ContactForm`

**특징**:
- 학습 중심 디자인
- 상세한 커리큘럼 소개
- 플랜 비교 테이블
- 수강생 통계로 신뢰도 강조

**활용 섹션**: Pricing, Stats

**🚨 알려진 이슈**:
- FeaturesDetailed 섹션의 `features` → `details` 필드명 수정 필요 (3곳)

---

## 섹션 사용 통계

### 가장 많이 사용된 섹션 (Top 5)

| 순위 | 섹션 | 사용 횟수 | 사용 템플릿 |
|------|------|-----------|-------------|
| 1 | Features | 11회 | 모든 템플릿 |
| 2 | Contact | 8회 | 모든 템플릿 |
| 3 | Hero | 8회 | 모든 템플릿 |
| 4 | Testimonials | 5회 | Medical, Accounting, Restaurant, SaaS, Portfolio |
| 5 | Stats | 3회 | SaaS, Agency, Course |

### 섹션별 Variant 사용 분포

#### Hero
- `HeroFullWidth`: 3회 (Medical, Restaurant, Agency)
- `HeroSplitLayout`: 3회 (Law Firm, Portfolio, SaaS)
- `HeroCenteredImage`: 2회 (Accounting, Course)

#### Features
- `FeaturesThreeColumn`: 6회 (Law Firm, Medical, Accounting, Restaurant, Portfolio, SaaS)
- `FeaturesDetailed`: 5회 (Portfolio, Agency, Course x2, SaaS)

#### Contact
- `ContactSplit`: 5회 (Law Firm, Accounting, Restaurant, Agency, Portfolio)
- `ContactForm`: 3회 (Medical, Course, SaaS)

#### Testimonials
- `TestimonialsGrid`: 3회 (Medical, Restaurant, SaaS)
- `TestimonialsCarousel`: 2회 (Accounting, Portfolio)

#### CTA
- `CTASimple`: 2회 (Medical, Restaurant)
- `CTASplit`: 1회 (Accounting)

#### Pricing (NEW)
- `PricingThreeColumn`: 1회 (SaaS)
- `PricingComparison`: 1회 (Course)

#### FAQ (NEW)
- `FAQAccordion`: 1회 (SaaS)
- `FAQTwoColumn`: 0회

#### Team (NEW)
- `TeamCards`: 1회 (Agency)
- `TeamGrid`: 0회

#### Stats (NEW)
- `StatsHighlight`: 2회 (SaaS, Course)
- `StatsSimple`: 1회 (Agency)

---

## 템플릿 비교표

| 템플릿 | 섹션 수 | Hero 타입 | Pricing | FAQ | Team | Stats | 상태 |
|--------|---------|-----------|---------|-----|------|-------|------|
| Law Firm | 3 | Split | ❌ | ❌ | ❌ | ❌ | ✅ |
| Medical | 5 | FullWidth | ❌ | ❌ | ❌ | ❌ | ✅ |
| Accounting | 5 | Centered | ❌ | ❌ | ❌ | ❌ | ✅ |
| Restaurant | 5 | FullWidth | ❌ | ❌ | ❌ | ❌ | ✅ |
| Portfolio | 5 | Split | ❌ | ❌ | ❌ | ❌ | ✅ |
| **SaaS** | **6** | **Split** | **✅** | **✅** | **❌** | **✅** | **✅** |
| **Agency** | **5** | **FullWidth** | **❌** | **❌** | **✅** | **✅** | **✅** |
| **Course** | **6** | **Centered** | **✅** | **❌** | **❌** | **✅** | **⚠️** |

---

## 업종별 추천 템플릿

### 전문 서비스
- **법률**: Law Firm 템플릿
- **의료**: Medical 템플릿
- **회계/세무**: Accounting 템플릿
- **컨설팅**: Agency 템플릿 변형

### 소매/서비스
- **레스토랑/카페**: Restaurant 템플릿
- **뷰티/스파**: Medical 템플릿 변형
- **헬스/피트니스**: Medical 템플릿 변형

### 디지털
- **SaaS/소프트웨어**: SaaS 템플릿
- **웹 에이전시**: Agency 템플릿
- **온라인 교육**: Course 템플릿
- **개인 포트폴리오**: Portfolio 템플릿

---

## 다음 템플릿 후보

### 단기 (다음 버전)
1. **E-commerce** 🛒
   - Product showcase
   - Shopping features
   - Payment integration

2. **Real Estate** 🏡
   - Property listings
   - Virtual tours
   - Contact agents

3. **Fitness/Gym** 💪
   - Class schedules
   - Trainer profiles
   - Membership plans

### 중기
4. **Event/Conference** 🎪
5. **Non-profit** 🤲
6. **Hotel/Accommodation** 🏨

---

**마지막 업데이트**: 2024-11-16
**다음 작업**: Course 템플릿 FeaturesDetailed 수정
