import { FeaturesThreeColumnProps } from "@/types/section.types";
import { Container } from "@/components/shared/container";
import { Heading } from "@/components/shared/heading";
import { getIcon } from "@/lib/icon-map";
import * as stylex from "@stylexjs/stylex";
import {
  spacing,
  colors,
  radius,
  typography,
  breakpoints,
} from "@/styles/tokens.stylex";

const styles = stylex.create({
  features: {
    padding: `${spacing["5xl"]} 0`,
    backgroundColor: colors.backgroundAlt,
    [`@media (max-width: ${breakpoints.mobile})`]: {
      padding: `${spacing["4xl"]} 0`,
    },
  },
  header: {
    textAlign: "center",
    marginBottom: spacing["4xl"],
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
      gap: spacing["3xl"],
    },
  },
  feature: {
    textAlign: "center",
  },
  iconWrapper: {
    display: "inline-flex",
    padding: spacing.lg,
    backgroundColor: colors.primaryLight,
    borderRadius: radius.lg,
    marginBottom: spacing["2xl"],
  },
  icon: {
    color: colors.primary,
  },
  title: {
    fontSize: typography.fontSize4,
    fontWeight: 600,
    marginBottom: spacing.md,
  },
  featureDescription: {
    color: colors.textMuted,
    lineHeight: typography.lineHeightBody,
  },
});

export function FeaturesThreeColumn({
  content,
  theme,
}: FeaturesThreeColumnProps) {
  const { sectionTitle, sectionDescription, features } = content;

  return (
    <section
      {...stylex.props(styles.features)}
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
          {features.map((feature, index) => {
            const IconComponent = feature.icon ? getIcon(feature.icon) : null;

            return (
              <div key={index} {...stylex.props(styles.feature)}>
                {IconComponent && (
                  <div {...stylex.props(styles.iconWrapper)}>
                    <IconComponent {...stylex.props(styles.icon)} size={32} />
                  </div>
                )}
                <h3 {...stylex.props(styles.title)}>{feature.title}</h3>
                <p {...stylex.props(styles.featureDescription)}>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
