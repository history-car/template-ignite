"use client";

import { FAQAccordionProps } from "@/types/section.types";
import { Container } from "@/components/shared/container";
import { Heading } from "@/components/shared/heading";
import { useState } from "react";
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
  accordion: {
    maxWidth: "800px",
    margin: "0 auto",
  },
  item: {
    marginBottom: spacing.lg,
    backgroundColor: colors.backgroundAlt,
    borderRadius: radius.lg,
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: colors.border,
    overflow: "hidden",
  },
  question: {
    width: "100%",
    padding: spacing["2xl"],
    backgroundColor: "transparent",
    borderWidth: "0",
    textAlign: "left",
    fontSize: typography.fontSize4,
    fontWeight: 600,
    color: colors.text,
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    transition: "background-color 0.2s ease",
    ":hover": {
      backgroundColor: colors.border,
    },
  },
  icon: {
    fontSize: "1.5rem",
    fontWeight: 300,
    transition: "transform 0.2s ease",
    marginLeft: spacing.lg,
    flexShrink: 0,
  },
  iconOpen: {
    transform: "rotate(180deg)",
  },
  answer: {
    padding: `0 ${spacing["2xl"]} ${spacing["2xl"]}`,
    fontSize: typography.fontSizeBase,
    color: colors.textMuted,
    lineHeight: typography.lineHeightBody,
  },
  answerHidden: {
    display: "none",
  },
});

export function FAQAccordion({ content, theme }: FAQAccordionProps) {
  const { sectionTitle, sectionDescription, faqs } = content;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Validate faqs is an array
  if (!faqs || !Array.isArray(faqs) || faqs.length === 0) {
    return null;
  }

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
        <div {...stylex.props(styles.accordion)}>
          {faqs.map((faq, index) => (
            <div key={index} {...stylex.props(styles.item)}>
              <button
                {...stylex.props(styles.question)}
                onClick={() => toggleItem(index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>
                <span
                  {...stylex.props(
                    styles.icon,
                    openIndex === index && styles.iconOpen
                  )}
                >
                  ⌄
                </span>
              </button>
              <div
                {...stylex.props(
                  styles.answer,
                  openIndex !== index && styles.answerHidden
                )}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
