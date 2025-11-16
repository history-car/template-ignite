'use client';

import { CTASimpleProps } from '@/types/section.types';
import { Container } from '@/components/shared/container';
import { Heading } from '@/components/shared/heading';
import { Button } from '@/components/shared/button';
import * as stylex from '@stylexjs/stylex';
import { spacing, colors, typography, breakpoints } from '@/styles/tokens.stylex';

const styles = stylex.create({
  cta: {
    padding: `${spacing['5xl']} 0`,
    backgroundColor: colors.primary,
    color: 'white',
    [`@media (max-width: ${breakpoints.mobile})`]: {
      padding: `${spacing['4xl']} 0`,
    },
  },
  content: {
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto',
  },
  headline: {
    margin: 0,
    marginBottom: spacing.xl,
    color: 'white',
  },
  description: {
    fontSize: typography.fontSize4,
    lineHeight: typography.lineHeightBody,
    marginBottom: spacing['4xl'],
    opacity: 0.95,
  },
});

export function CTASimple({ content, theme }: CTASimpleProps) {
  const { headline, description, cta } = content;

  return (
    <section
      {...stylex.props(styles.cta)}
      style={{
        backgroundColor: theme?.backgroundColor || colors.primary,
        color: theme?.textColor || 'white',
      }}
    >
      <Container>
        <div {...stylex.props(styles.content)}>
          <Heading as="h2" {...stylex.props(styles.headline)}>
            {headline}
          </Heading>
          {description && <p {...stylex.props(styles.description)}>{description}</p>}
          <Button asChild variant={cta.variant || 'secondary'} size="large">
            <a href={cta.href}>{cta.text}</a>
          </Button>
        </div>
      </Container>
    </section>
  );
}
