"use client";

import { FeaturesDetailedProps } from "@/types/section.types";
import { Container } from "@/components/shared/container";
import { Heading } from "@/components/shared/heading";
import { getIcon } from "@/lib/icon-map";
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
  features: {
    padding: `${spacing["5xl"]} 0`,
    [`@media (max-width: ${breakpoints.mobile})`]: {
      padding: `${spacing["4xl"]} 0`,
    },
  },
  header: {
    textAlign: "center",
    maxWidth: "800px",
    margin: "0 auto",
    marginBottom: spacing["5xl"],
  },
  description: {
    fontSize: typography.fontSize4,
    color: colors.textMuted,
    marginTop: spacing.lg,
  },
  featureList: {
    display: "flex",
    flexDirection: "column",
    gap: spacing["5xl"],
  },
  feature: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: spacing["4xl"],
    alignItems: "center",
    [`@media (max-width: ${breakpoints.mobile})`]: {
      gridTemplateColumns: "1fr",
      gap: spacing["3xl"],
    },
  },
  featureReverse: {
    [`@media (min-width: ${breakpoints.mobile})`]: {
      direction: "rtl",
    },
  },
  featureContent: {
    [`@media (min-width: ${breakpoints.mobile})`]: {
      direction: "ltr",
    },
  },
  iconWrapper: {
    display: "inline-flex",
    padding: spacing.lg,
    backgroundColor: colors.primaryLight,
    borderRadius: radius.lg,
    marginBottom: spacing.xl,
  },
  icon: {
    color: colors.primary,
  },
  featureTitle: {
    fontSize: typography.fontSize3,
    fontWeight: 600,
    marginBottom: spacing.lg,
  },
  featureDescription: {
    fontSize: typography.fontSize4,
    color: colors.textMuted,
    lineHeight: typography.lineHeightBody,
    marginBottom: spacing.xl,
  },
  detailsList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: spacing.md,
  },
  detailItem: {
    fontSize: typography.fontSizeBase,
    color: colors.text,
    paddingLeft: spacing.xl,
    position: "relative",
    "::before": {
      content: '"✓"',
      position: "absolute",
      left: 0,
      color: colors.primary,
      fontWeight: 600,
    },
  },
  imageWrapper: {
    position: "relative",
    width: "100%",
    aspectRatio: "4 / 3",
    [`@media (min-width: ${breakpoints.mobile})`]: {
      direction: "ltr",
    },
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: radius.md,
  },
});

export function FeaturesDetailed({ content, theme }: FeaturesDetailedProps) {
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
        <div {...stylex.props(styles.featureList)}>
          {features.map((feature, index) => {
            const IconComponent = feature.icon ? getIcon(feature.icon) : null;
            const isReverse = index % 2 !== 0;

            return (
              <div
                key={index}
                {...stylex.props(
                  styles.feature,
                  isReverse && styles.featureReverse,
                )}
              >
                <div {...stylex.props(styles.featureContent)}>
                  {IconComponent && (
                    <div {...stylex.props(styles.iconWrapper)}>
                      <IconComponent {...stylex.props(styles.icon)} size={32} />
                    </div>
                  )}
                  <h3 {...stylex.props(styles.featureTitle)}>
                    {feature.title}
                  </h3>
                  <p {...stylex.props(styles.featureDescription)}>
                    {feature.description}
                  </p>
                  {feature.details && feature.details.length > 0 && (
                    <ul {...stylex.props(styles.detailsList)}>
                      {feature.details.map((detail, detailIndex) => (
                        <li
                          key={detailIndex}
                          {...stylex.props(styles.detailItem)}
                        >
                          {detail}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                {feature.image && (
                  <div {...stylex.props(styles.imageWrapper)}>
                    <Image
                      src={feature.image.src}
                      alt={feature.image.alt}
                      width={feature.image.width || 600}
                      height={feature.image.height || 450}
                      {...stylex.props(styles.image)}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
