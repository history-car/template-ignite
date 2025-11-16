"use client";

import { HeroCenteredImageProps } from "@/types/section.types";
import { Container } from "@/components/shared/container";
import { Heading } from "@/components/shared/heading";
import { Button } from "@/components/shared/button";
import Image from "next/image";
import * as stylex from "@stylexjs/stylex";
import {
  spacing,
  colors,
  radius,
  typography,
  breakpoints,
} from "@/styles/tokens.stylex";

const styles = stylex.create({
  hero: {
    padding: `${spacing["5xl"]} 0`,
    [`@media (max-width: ${breakpoints.mobile})`]: {
      padding: `${spacing["4xl"]} 0`,
    },
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: spacing["4xl"],
    alignItems: "center",
    [`@media (max-width: ${breakpoints.mobile})`]: {
      gridTemplateColumns: "1fr",
      gap: spacing["3xl"],
    },
  },
  content: {
    display: "flex",
    flexDirection: "column",
    gap: spacing["2xl"],
  },
  subheadline: {
    color: colors.primary,
    fontWeight: 600,
    fontSize: typography.fontSize4,
  },
  headline: {
    margin: 0,
  },
  description: {
    fontSize: typography.fontSize4,
    color: colors.textMuted,
    lineHeight: typography.lineHeightBody,
  },
  ctas: {
    display: "flex",
    gap: spacing.lg,
    marginTop: spacing.lg,
    [`@media (max-width: ${breakpoints.mobile})`]: {
      flexDirection: "column",
    },
  },
  imageWrapper: {
    position: "relative",
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: radius.md,
  },
});

export function HeroCenteredImage({ content, theme }: HeroCenteredImageProps) {
  const { headline, subheadline, description, cta, secondaryCta, image } =
    content;

  return (
    <section
      {...stylex.props(styles.hero)}
      style={{
        backgroundColor: theme?.backgroundColor,
        color: theme?.textColor,
      }}
    >
      <Container>
        <div {...stylex.props(styles.grid)}>
          <div {...stylex.props(styles.content)}>
            {subheadline && (
              <p {...stylex.props(styles.subheadline)}>{subheadline}</p>
            )}
            <Heading as="h1" {...stylex.props(styles.headline)}>
              {headline}
            </Heading>
            {description && (
              <p {...stylex.props(styles.description)}>{description}</p>
            )}
            <div {...stylex.props(styles.ctas)}>
              <Button asChild variant={cta.variant || "primary"} size="large">
                <a href={cta.href}>{cta.text}</a>
              </Button>
              {secondaryCta && (
                <Button asChild variant="outline" size="large">
                  <a href={secondaryCta.href}>{secondaryCta.text}</a>
                </Button>
              )}
            </div>
          </div>
          <div {...stylex.props(styles.imageWrapper)}>
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width || 600}
              height={image.height || 400}
              {...stylex.props(styles.image)}
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
