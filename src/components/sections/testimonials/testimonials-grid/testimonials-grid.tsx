'use client';

import { TestimonialsGridProps } from '@/types/section.types';
import { Container } from '@/components/shared/container';
import { Heading } from '@/components/shared/heading';
import Image from 'next/image';
import * as stylex from '@stylexjs/stylex';
import { spacing, colors, radius, typography, breakpoints } from '@/styles/tokens.stylex';

const styles = stylex.create({
  testimonials: {
    padding: `${spacing['5xl']} 0`,
    backgroundColor: colors.backgroundAlt,
    [`@media (max-width: ${breakpoints.mobile})`]: {
      padding: `${spacing['4xl']} 0`,
    },
  },
  header: {
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto',
    marginBottom: spacing['5xl'],
  },
  description: {
    fontSize: typography.fontSize4,
    color: colors.textMuted,
    marginTop: spacing.lg,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: spacing['3xl'],
    [`@media (max-width: ${breakpoints.mobile})`]: {
      gridTemplateColumns: '1fr',
      gap: spacing['2xl'],
    },
  },
  testimonialCard: {
    backgroundColor: colors.background,
    padding: spacing['2xl'],
    borderRadius: radius.md,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: colors.border,
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.xl,
  },
  quote: {
    fontSize: typography.fontSize4,
    lineHeight: 1.6,
    color: colors.text,
    fontStyle: 'italic',
  },
  authorSection: {
    display: 'flex',
    alignItems: 'center',
    gap: spacing.md,
    marginTop: 'auto',
  },
  authorImage: {
    borderRadius: radius.full,
    flexShrink: 0,
  },
  authorInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.xs,
  },
  authorName: {
    fontWeight: 600,
    fontSize: typography.fontSizeBase,
    color: colors.text,
  },
  authorRole: {
    fontSize: typography.fontSizeSmall,
    color: colors.textMuted,
  },
  rating: {
    display: 'flex',
    gap: spacing.xs,
    marginBottom: spacing.sm,
  },
  star: {
    color: '#fbbf24',
    fontSize: typography.fontSize4,
  },
});

export function TestimonialsGrid({ content, theme }: TestimonialsGridProps) {
  const { sectionTitle, sectionDescription, testimonials } = content;

  return (
    <section
      {...stylex.props(styles.testimonials)}
      style={{
        backgroundColor: theme?.backgroundColor,
        color: theme?.textColor,
      }}
    >
      <Container>
        {(sectionTitle || sectionDescription) && (
          <div {...stylex.props(styles.header)}>
            {sectionTitle && (
              <Heading as="h2">{sectionTitle}</Heading>
            )}
            {sectionDescription && (
              <p {...stylex.props(styles.description)}>{sectionDescription}</p>
            )}
          </div>
        )}

        <div {...stylex.props(styles.grid)}>
          {testimonials.map((testimonial, index) => (
            <div key={index} {...stylex.props(styles.testimonialCard)}>
              {testimonial.rating && (
                <div {...stylex.props(styles.rating)}>
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} {...stylex.props(styles.star)}>★</span>
                  ))}
                </div>
              )}

              <blockquote {...stylex.props(styles.quote)}>
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              <div {...stylex.props(styles.authorSection)}>
                {testimonial.image && testimonial.image.src && (
                  <Image
                    src={testimonial.image.src}
                    alt={testimonial.image.alt || testimonial.author}
                    width={48}
                    height={48}
                    {...stylex.props(styles.authorImage)}
                  />
                )}
                <div {...stylex.props(styles.authorInfo)}>
                  <div {...stylex.props(styles.authorName)}>
                    {testimonial.author}
                  </div>
                  {(testimonial.role || testimonial.company) && (
                    <div {...stylex.props(styles.authorRole)}>
                      {testimonial.role}
                      {testimonial.role && testimonial.company && ' at '}
                      {testimonial.company}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
