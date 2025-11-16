import { StatsHighlightProps } from "@/types/section.types";
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
  stats: {
    padding: `${spacing["5xl"]} 0`,
    backgroundColor: colors.background,
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
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: spacing["3xl"],
    [`@media (max-width: ${breakpoints.mobile})`]: {
      gridTemplateColumns: "1fr",
      gap: spacing["2xl"],
    },
  },
  inline: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    gap: spacing["3xl"],
  },
  stat: {
    padding: spacing["3xl"],
    backgroundColor: colors.backgroundAlt,
    borderRadius: radius.lg,
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: colors.border,
    textAlign: "center",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    ":hover": {
      transform: "translateY(-4px)",
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
    },
  },
  inlineStat: {
    flex: "1 1 200px",
    padding: spacing["2xl"],
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
  value: {
    fontSize: "3rem",
    fontWeight: 700,
    color: colors.primary,
    lineHeight: 1,
    marginBottom: spacing.md,
    [`@media (max-width: ${breakpoints.mobile})`]: {
      fontSize: "2.5rem",
    },
  },
  label: {
    fontSize: typography.fontSize3,
    fontWeight: 600,
    color: colors.text,
    marginBottom: spacing.sm,
  },
  statDescription: {
    fontSize: typography.fontSizeBase,
    color: colors.textMuted,
    lineHeight: typography.lineHeightBody,
  },
});

export function StatsHighlight({ content, theme }: StatsHighlightProps) {
  const { sectionTitle, sectionDescription, stats, layout = "grid" } = content;

  return (
    <section
      {...stylex.props(styles.stats)}
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
        <div
          {...stylex.props(layout === "grid" ? styles.grid : styles.inline)}
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon ? getIcon(stat.icon) : null;

            return (
              <div
                key={index}
                {...stylex.props(
                  layout === "grid" ? styles.stat : styles.inlineStat
                )}
              >
                {IconComponent && layout === "grid" && (
                  <div {...stylex.props(styles.iconWrapper)}>
                    <IconComponent {...stylex.props(styles.icon)} size={32} />
                  </div>
                )}
                <div {...stylex.props(styles.value)}>{stat.value}</div>
                <div {...stylex.props(styles.label)}>{stat.label}</div>
                {stat.description && layout === "grid" && (
                  <p {...stylex.props(styles.statDescription)}>
                    {stat.description}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
