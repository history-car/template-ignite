'use client';

import { CTASplitProps } from '@/types/section.types';
import { Container } from '@/components/shared/container';
import { Heading } from '@/components/shared/heading';
import { Button } from '@/components/shared/button';
import Image from 'next/image';
import * as stylex from '@stylexjs/stylex';
import { spacing, colors, radius, typography, breakpoints } from '@/styles/tokens.stylex';

const styles = stylex.create({
  cta: {
    padding: `${spacing['5xl']} 0`,
    backgroundColor: colors.backgroundAlt,
    [`@media (max-width: ${breakpoints.mobile})`]: {
      padding: `${spacing['4xl']} 0`,
    },
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: spacing['4xl'],
    alignItems: 'center',
    [`@media (max-width: ${breakpoints.mobile})`]: {
      gridTemplateColumns: '1fr',
      gap: spacing['3xl'],
    },
  },
  gridReverse: {
    [`@media (min-width: ${breakpoints.mobile})`]: {
      direction: 'rtl',
    },
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.xl,
    [`@media (min-width: ${breakpoints.mobile})`]: {
      direction: 'ltr',
    },
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
    display: 'flex',
    gap: spacing.lg,
    marginTop: spacing.lg,
    [`@media (max-width: ${breakpoints.mobile})`]: {
      flexDirection: 'column',
    },
  },
  imageWrapper: {
    position: 'relative',
    width: '100%',
    aspectRatio: '4 / 3',
    [`@media (min-width: ${breakpoints.mobile})`]: {
      direction: 'ltr',
    },
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: radius.md,
  },
});

export function CTASplit({ content, theme }: CTASplitProps) {
  const { headline, description, cta, secondaryCta, image, imagePosition = 'right' } = content;
  const isImageLeft = imagePosition === 'left';

  return (
    <section
      {...stylex.props(styles.cta)}
      style={{
        backgroundColor: theme?.backgroundColor,
        color: theme?.textColor,
      }}
    >
      <Container>
        <div {...stylex.props(styles.grid, isImageLeft && styles.gridReverse)}>
          <div {...stylex.props(styles.content)}>
            <Heading as="h2" {...stylex.props(styles.headline)}>
              {headline}
            </Heading>
            {description && <p {...stylex.props(styles.description)}>{description}</p>}
            <div {...stylex.props(styles.ctas)}>
              <Button asChild variant={cta.variant || 'primary'} size="large">
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
              height={image.height || 450}
              {...stylex.props(styles.image)}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
