import Link from "next/link";
import * as stylex from "@stylexjs/stylex";
import { spacing, colors, radius, typography, breakpoints } from "@/styles/tokens.stylex";
import { Container } from "@/components/shared/container";
import { Heading } from "@/components/shared/heading";

const styles = stylex.create({
  hero: {
    padding: `${spacing["5xl"]} 0`,
    textAlign: "center",
    backgroundColor: colors.backgroundAlt,
  },
  heroTitle: {
    marginBottom: spacing.lg,
  },
  heroDescription: {
    fontSize: typography.fontSize4,
    color: colors.textMuted,
    maxWidth: "600px",
    margin: "0 auto",
  },
  gallery: {
    padding: `${spacing["5xl"]} 0`,
  },
  sectionTitle: {
    textAlign: "center",
    marginBottom: spacing["4xl"],
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: spacing["3xl"],
    [`@media (max-width: ${breakpoints.mobile})`]: {
      gridTemplateColumns: "1fr",
      gap: spacing["2xl"],
    },
  },
  card: {
    backgroundColor: colors.background,
    borderRadius: radius.lg,
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: colors.border,
    overflow: "hidden",
    transition: "all 0.3s",
    textDecoration: "none",
    color: "inherit",
    display: "block",
    ":hover": {
      transform: "translateY(-4px)",
      boxShadow: "0 12px 24px rgba(0, 0, 0, 0.1)",
      borderColor: colors.primary,
    },
  },
  cardImage: {
    width: "100%",
    height: "200px",
    backgroundColor: colors.backgroundAlt,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: typography.fontSize1,
    fontWeight: 700,
    color: colors.textMuted,
  },
  cardContent: {
    padding: spacing["2xl"],
  },
  cardTitle: {
    fontSize: typography.fontSize3,
    fontWeight: 700,
    marginBottom: spacing.md,
    color: colors.text,
  },
  cardDescription: {
    fontSize: typography.fontSizeBase,
    color: colors.textMuted,
    lineHeight: 1.6,
    marginBottom: spacing.lg,
  },
  cardMeta: {
    display: "flex",
    gap: spacing.md,
    flexWrap: "wrap",
  },
  badge: {
    fontSize: typography.fontSizeSmall,
    padding: `${spacing.xs} ${spacing.md}`,
    backgroundColor: colors.primaryLight,
    color: colors.primary,
    borderRadius: radius.full,
    fontWeight: 600,
  },
  footer: {
    padding: `${spacing["4xl"]} 0`,
    textAlign: "center",
    backgroundColor: colors.backgroundAlt,
    borderTop: `1px solid ${colors.border}`,
  },
  footerText: {
    color: colors.textMuted,
    fontSize: typography.fontSizeBase,
  },
});

const templates = [
  {
    id: "law-firm",
    name: "법률사무소",
    description: "전문 변호사를 위한 신뢰감 있는 랜딩 페이지. 전문성과 신뢰성을 강조합니다.",
    href: "/law-firm",
    emoji: "⚖️",
    sections: ["Hero", "Features", "Contact"],
  },
  {
    id: "medical",
    name: "병원/클리닉",
    description: "의료 서비스를 제공하는 병원과 클리닉을 위한 따뜻한 디자인. 환자 중심의 접근.",
    href: "/medical",
    emoji: "🏥",
    sections: ["Hero", "Features", "Testimonials", "CTA", "Contact"],
  },
  {
    id: "accounting",
    name: "회계사무소",
    description: "회계 및 세무 전문가를 위한 프로페셔널한 페이지. 재무 전문성 강조.",
    href: "/accounting",
    emoji: "💼",
    sections: ["Hero", "Features", "CTA", "Testimonials", "Contact"],
  },
  {
    id: "restaurant",
    name: "레스토랑",
    description: "레스토랑과 카페를 위한 매력적인 디자인. 분위기와 메뉴를 효과적으로 전달.",
    href: "/restaurant",
    emoji: "🍽️",
    sections: ["Hero", "Features", "Testimonials", "CTA", "Contact"],
  },
  {
    id: "portfolio",
    name: "포트폴리오",
    description: "디자이너와 개발자를 위한 개인 포트폴리오. 작업물과 경력을 돋보이게 표현.",
    href: "/portfolio",
    emoji: "💻",
    sections: ["Hero", "Features", "Projects", "Testimonials", "Contact"],
  },
  {
    id: "agency",
    name: "에이전시",
    description: "크리에이티브 에이전시와 디자인 스튜디오를 위한 현대적인 디자인. 창의성과 전문성을 강조.",
    href: "/agency",
    emoji: "🎨",
    sections: ["Hero", "Features", "Portfolio", "Testimonials", "Contact"],
  },
  {
    id: "course",
    name: "온라인 강좌",
    description: "교육 콘텐츠와 온라인 강좌를 위한 학습 중심 디자인. 효과적인 학습 경험 제공.",
    href: "/course",
    emoji: "📚",
    sections: ["Hero", "Features", "Curriculum", "Testimonials", "Pricing", "Contact"],
  },
  {
    id: "saas",
    name: "SaaS",
    description: "소프트웨어 서비스를 위한 모던한 랜딩 페이지. 제품 가치와 기능을 효과적으로 전달.",
    href: "/saas",
    emoji: "🚀",
    sections: ["Hero", "Features", "Pricing", "Testimonials", "FAQ", "CTA"],
  },
];

export const metadata = {
  title: "템플릿 갤러리 | Template Builder",
  description: "다양한 업종을 위한 전문 랜딩 페이지 템플릿",
};

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section {...stylex.props(styles.hero)}>
        <Container>
          <Heading as="h1" {...stylex.props(styles.heroTitle)}>
            템플릿 갤러리
          </Heading>
          <p {...stylex.props(styles.heroDescription)}>
            업종별로 최적화된 랜딩 페이지 템플릿을 선택하세요.
            각 템플릿은 즉시 사용 가능하며, 쉽게 커스터마이징할 수 있습니다.
          </p>
        </Container>
      </section>

      {/* Template Gallery */}
      <section {...stylex.props(styles.gallery)}>
        <Container>
          <Heading as="h2" {...stylex.props(styles.sectionTitle)}>
            사용 가능한 템플릿
          </Heading>
          <div {...stylex.props(styles.grid)}>
            {templates.map((template) => (
              <Link
                key={template.id}
                href={template.href}
                {...stylex.props(styles.card)}
              >
                <div {...stylex.props(styles.cardImage)}>{template.emoji}</div>
                <div {...stylex.props(styles.cardContent)}>
                  <h3 {...stylex.props(styles.cardTitle)}>{template.name}</h3>
                  <p {...stylex.props(styles.cardDescription)}>
                    {template.description}
                  </p>
                  <div {...stylex.props(styles.cardMeta)}>
                    {template.sections.map((section) => (
                      <span key={section} {...stylex.props(styles.badge)}>
                        {section}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer {...stylex.props(styles.footer)}>
        <Container>
          <p {...stylex.props(styles.footerText)}>
            Template Builder - 빠르고 쉬운 랜딩 페이지 제작
          </p>
        </Container>
      </footer>
    </main>
  );
}
