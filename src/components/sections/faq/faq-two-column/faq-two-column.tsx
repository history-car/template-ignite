import { FAQTwoColumnProps } from "@/types/section.types";
import { Container } from "@/components/shared/container";
import { Heading } from "@/components/shared/heading";
import * as stylex from "@stylexjs/stylex";
import {
  spacing,
  colors,
  radius,
  typography,
  breakpoints,
} from "@/styles/tokens.stylex";

const styles = stylex.create({
  faq: {
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
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: spacing["3xl"],
    [`@media (max-width: ${breakpoints.mobile})`]: {
      gridTemplateColumns: "1fr",
      gap: spacing["2xl"],
    },
  },
  item: {
    padding: spacing["2xl"],
    backgroundColor: colors.background,
    borderRadius: radius.lg,
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: colors.border,
  },
  question: {
    fontSize: typography.fontSize4,
    fontWeight: 600,
    color: colors.text,
    marginBottom: spacing.lg,
  },
  answer: {
    fontSize: typography.fontSizeBase,
    color: colors.textMuted,
    lineHeight: typography.lineHeightBody,
  },
});

export function FAQTwoColumn({ content, theme }: FAQTwoColumnProps) {
  const { sectionTitle, sectionDescription, faqs } = content;

  return (
    <section
      {...stylex.props(styles.faq)}
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
          {faqs.map((faq, index) => (
            <div key={index} {...stylex.props(styles.item)}>
              <h3 {...stylex.props(styles.question)}>{faq.question}</h3>
              <p {...stylex.props(styles.answer)}>{faq.answer}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
