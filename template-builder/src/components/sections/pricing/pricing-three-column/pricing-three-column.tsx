import { PricingThreeColumnProps } from "@/types/section.types";
import { Container } from "@/components/shared/container";
import { Heading } from "@/components/shared/heading";
import { Button } from "@/components/shared/button";
import * as stylex from "@stylexjs/stylex";
import {
  spacing,
  colors,
  radius,
  typography,
  breakpoints,
} from "@/styles/tokens.stylex";

const styles = stylex.create({
  pricing: {
    padding: `${spacing["5xl"]} 0`,
    backgroundColor: colors.background,
    [`@media (max-width: ${breakpoints.mobile})`]: {
      padding: `${spacing["4xl"]} 0`,
    },
  },
  header: {
    textAlign: "center",
    marginBottom: spacing["5xl"],
  },
  description: {
    fontSize: typography.fontSize4,
    color: colors.textMuted,
    marginTop: spacing.lg,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: spacing["3xl"],
    [`@media (max-width: ${breakpoints.mobile})`]: {
      gridTemplateColumns: "1fr",
      gap: spacing["2xl"],
    },
  },
  tier: {
    padding: spacing["3xl"],
    backgroundColor: colors.backgroundAlt,
    borderRadius: radius.lg,
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: colors.border,
    display: "flex",
    flexDirection: "column",
    position: "relative",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    ":hover": {
      transform: "translateY(-4px)",
      boxShadow: "0 12px 24px rgba(0, 0, 0, 0.1)",
    },
  },
  highlighted: {
    borderWidth: "2px",
    borderStyle: "solid",
    borderColor: colors.primary,
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
  },
  badge: {
    position: "absolute",
    top: spacing.lg,
    right: spacing.lg,
    backgroundColor: colors.primary,
    color: colors.white,
    padding: `${spacing.xs} ${spacing.md}`,
    borderRadius: radius.md,
    fontSize: typography.fontSizeSmall,
    fontWeight: 600,
  },
  tierName: {
    fontSize: typography.fontSize3,
    fontWeight: 700,
    marginBottom: spacing.md,
  },
  tierDescription: {
    fontSize: typography.fontSizeSmall,
    color: colors.textMuted,
    marginBottom: spacing["2xl"],
  },
  priceWrapper: {
    marginBottom: spacing["2xl"],
  },
  price: {
    fontSize: "3rem",
    fontWeight: 700,
    color: colors.primary,
    lineHeight: 1,
  },
  period: {
    fontSize: typography.fontSize4,
    color: colors.textMuted,
    fontWeight: 400,
  },
  features: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    marginBottom: spacing["2xl"],
    flex: 1,
  },
  feature: {
    paddingTop: spacing.md,
    paddingBottom: spacing.md,
    borderBottom: `1px solid ${colors.border}`,
    fontSize: typography.fontSizeBase,
    color: colors.text,
    display: "flex",
    alignItems: "center",
    ":before": {
      content: '"✓"',
      color: colors.primary,
      marginRight: spacing.md,
      fontWeight: 700,
    },
  },
});

export function PricingThreeColumn({
  content,
  theme,
}: PricingThreeColumnProps) {
  const { sectionTitle, sectionDescription, tiers } = content;

  return (
    <section
      {...stylex.props(styles.pricing)}
      style={{
        backgroundColor: theme?.backgroundColor,
        color: theme?.textColor,
      }}
    >
      <Container>
        {sectionTitle && (
          <div {...stylex.props(styles.header)}>
            <Heading as="h2">{sectionTitle}</Heading>
            {sectionDescription && (
              <p {...stylex.props(styles.description)}>{sectionDescription}</p>
            )}
          </div>
        )}
        <div {...stylex.props(styles.grid)}>
          {tiers.map((tier, index) => (
            <div
              key={index}
              {...stylex.props(
                styles.tier,
                tier.highlighted && styles.highlighted
              )}
            >
              {tier.highlighted && (
                <div {...stylex.props(styles.badge)}>인기</div>
              )}
              <h3 {...stylex.props(styles.tierName)}>{tier.name}</h3>
              {tier.description && (
                <p {...stylex.props(styles.tierDescription)}>
                  {tier.description}
                </p>
              )}
              <div {...stylex.props(styles.priceWrapper)}>
                <div {...stylex.props(styles.price)}>
                  {tier.price}
                  {tier.period && (
                    <span {...stylex.props(styles.period)}>/{tier.period}</span>
                  )}
                </div>
              </div>
              <ul {...stylex.props(styles.features)}>
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} {...stylex.props(styles.feature)}>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                variant={tier.cta.variant || (tier.highlighted ? "primary" : "outline")}
              >
                <a href={tier.cta.href}>{tier.cta.text}</a>
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
