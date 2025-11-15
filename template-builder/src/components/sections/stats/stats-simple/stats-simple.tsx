import { StatsSimpleProps } from "@/types/section.types";
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
    backgroundColor: colors.primary,
    color: colors.white,
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
    opacity: 0.9,
    marginTop: spacing.lg,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: spacing["3xl"],
    [`@media (max-width: ${breakpoints.mobile})`]: {
      gridTemplateColumns: "1fr",
      gap: spacing["2xl"],
    },
  },
  stat: {
    textAlign: "center",
  },
  iconWrapper: {
    display: "inline-flex",
    marginBottom: spacing.lg,
  },
  icon: {
    opacity: 0.9,
  },
  value: {
    fontSize: "3rem",
    fontWeight: 700,
    lineHeight: 1,
    marginBottom: spacing.sm,
    [`@media (max-width: ${breakpoints.mobile})`]: {
      fontSize: "2.5rem",
    },
  },
  label: {
    fontSize: typography.fontSize3,
    fontWeight: 600,
    marginBottom: spacing.sm,
    opacity: 0.95,
  },
  statDescription: {
    fontSize: typography.fontSizeBase,
    opacity: 0.8,
    lineHeight: typography.lineHeightBody,
  },
});

export function StatsSimple({ content, theme }: StatsSimpleProps) {
  const { sectionTitle, sectionDescription, stats } = content;

  return (
    <section
      {...stylex.props(styles.stats)}
      style={{
        backgroundColor: theme?.primaryColor || theme?.backgroundColor,
        color: theme?.textColor,
      }}
    >
      <Container>
        {sectionTitle && (
          <div {...stylex.props(styles.header)}>
            <Heading as="h2" style={{ color: "inherit" }}>
              {sectionTitle}
            </Heading>
            {sectionDescription && (
              <p {...stylex.props(styles.description)}>{sectionDescription}</p>
            )}
          </div>
        )}
        <div {...stylex.props(styles.grid)}>
          {stats.map((stat, index) => {
            const IconComponent = stat.icon ? getIcon(stat.icon) : null;

            return (
              <div key={index} {...stylex.props(styles.stat)}>
                {IconComponent && (
                  <div {...stylex.props(styles.iconWrapper)}>
                    <IconComponent {...stylex.props(styles.icon)} size={40} />
                  </div>
                )}
                <div {...stylex.props(styles.value)}>{stat.value}</div>
                <div {...stylex.props(styles.label)}>{stat.label}</div>
                {stat.description && (
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
