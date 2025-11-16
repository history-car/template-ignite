"use client";

import { HeroFullWidthProps } from "@/types/section.types";
import { Container } from "@/components/shared/container";
import { Heading } from "@/components/shared/heading";
import { Button } from "@/components/shared/button";
import Image from "next/image";
import * as stylex from "@stylexjs/stylex";
import {
  spacing,
  typography,
  breakpoints,
} from "@/styles/tokens.stylex";

const styles = stylex.create({
  hero: {
    position: "relative",
    minHeight: "600px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [`@media (max-width: ${breakpoints.mobile})`]: {
      minHeight: "500px",
    },
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: 0,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 1,
  },
  overlayDark: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  overlayLight: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },
  content: {
    position: "relative",
    zIndex: 2,
    textAlign: "center",
    color: "white",
    maxWidth: "800px",
    margin: "0 auto",
  },
  subheadline: {
    fontSize: typography.fontSize4,
    fontWeight: 600,
    marginBottom: spacing.lg,
    textTransform: "uppercase",
    letterSpacing: "0.1em",
  },
  headline: {
    margin: 0,
    marginBottom: spacing["2xl"],
  },
  description: {
    fontSize: typography.fontSize4,
    lineHeight: typography.lineHeightBody,
    marginBottom: spacing["4xl"],
    opacity: 0.95,
  },
  ctas: {
    display: "flex",
    gap: spacing.lg,
    justifyContent: "center",
    [`@media (max-width: ${breakpoints.mobile})`]: {
      flexDirection: "column",
    },
  },
});

export function HeroFullWidth({ content }: HeroFullWidthProps) {
  const {
    headline,
    subheadline,
    description,
    cta,
    secondaryCta,
    backgroundImage,
  } = content;
  const overlay = backgroundImage.overlay || "dark";
  const overlayOpacity = backgroundImage.overlayOpacity || 0.5;

  return (
    <section {...stylex.props(styles.hero)}>
      <Image
        src={backgroundImage.src}
        alt={backgroundImage.alt}
        fill
        {...stylex.props(styles.backgroundImage)}
        priority
      />
      {overlay !== "none" && (
        <div
          {...stylex.props(
            styles.overlay,
            overlay === "dark" && styles.overlayDark,
            overlay === "light" && styles.overlayLight,
          )}
          style={{ opacity: overlayOpacity }}
        />
      )}
      <Container>
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
      </Container>
    </section>
  );
}
