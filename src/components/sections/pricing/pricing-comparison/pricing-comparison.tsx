import { PricingComparisonProps } from "@/types/section.types";
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
    backgroundColor: colors.backgroundAlt,
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
  tiersContainer: {
    display: "flex",
    gap: spacing["2xl"],
    overflowX: "auto",
    [`@media (max-width: ${breakpoints.mobile})`]: {
      flexDirection: "column",
    },
  },
  tier: {
    flex: "1 1 0",
    minWidth: "280px",
    padding: spacing["3xl"],
    backgroundColor: colors.background,
    borderRadius: radius.lg,
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: colors.border,
    display: "flex",
    flexDirection: "column",
    [`@media (max-width: ${breakpoints.mobile})`]: {
      minWidth: "auto",
    },
  },
  highlighted: {
    borderWidth: "2px",
    borderStyle: "solid",
    borderColor: colors.primary,
    position: "relative",
    transform: "scale(1.05)",
    [`@media (max-width: ${breakpoints.mobile})`]: {
      transform: "none",
    },
  },
  badge: {
    position: "absolute",
    top: "-12px",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: colors.primary,
    color: colors.white,
    padding: `${spacing.xs} ${spacing.lg}`,
    borderRadius: radius.md,
    fontSize: typography.fontSizeSmall,
    fontWeight: 600,
  },
  tierHeader: {
    textAlign: "center",
    paddingBottom: spacing["2xl"],
    borderBottom: `1px solid ${colors.border}`,
    marginBottom: spacing["2xl"],
  },
  tierName: {
    fontSize: typography.fontSize3,
    fontWeight: 700,
    marginBottom: spacing.md,
  },
  tierDescription: {
    fontSize: typography.fontSizeSmall,
    color: colors.textMuted,
    marginBottom: spacing.lg,
  },
  price: {
    fontSize: "2.5rem",
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
    padding: `${spacing.md} 0`,
    fontSize: typography.fontSizeBase,
    color: colors.text,
    display: "flex",
    alignItems: "flex-start",
    ":before": {
      content: '"✓"',
      color: colors.primary,
      marginRight: spacing.md,
      fontWeight: 700,
      flexShrink: 0,
    },
  },
});

export function PricingComparison({ content, theme }: PricingComparisonProps) {
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
        <div {...stylex.props(styles.tiersContainer)}>
          {tiers.map((tier, index) => (
            <div
              key={index}
              {...stylex.props(
                styles.tier,
                tier.highlighted && styles.highlighted
              )}
            >
              {tier.highlighted && (
                <div {...stylex.props(styles.badge)}>추천</div>
              )}
              <div {...stylex.props(styles.tierHeader)}>
                <h3 {...stylex.props(styles.tierName)}>{tier.name}</h3>
                {tier.description && (
                  <p {...stylex.props(styles.tierDescription)}>
                    {tier.description}
                  </p>
                )}
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
