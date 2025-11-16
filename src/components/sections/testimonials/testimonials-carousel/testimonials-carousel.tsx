"use client";

import { TestimonialsCarouselProps } from "@/types/section.types";
import { Container } from "@/components/shared/container";
import { Heading } from "@/components/shared/heading";
import Image from "next/image";
import { useState, useEffect } from "react";
import * as stylex from "@stylexjs/stylex";
import {
  spacing,
  colors,
  radius,
  typography,
  breakpoints,
} from "@/styles/tokens.stylex";

const styles = stylex.create({
  testimonials: {
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
  carouselContainer: {
    position: "relative",
    maxWidth: "900px",
    margin: "0 auto",
  },
  testimonialCard: {
    backgroundColor: colors.background,
    padding: spacing["4xl"],
    borderRadius: radius.lg,
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: colors.border,
    textAlign: "center",
    minHeight: "300px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: spacing["2xl"],
    [`@media (max-width: ${breakpoints.mobile})`]: {
      padding: spacing["2xl"],
      minHeight: "250px",
    },
  },
  rating: {
    display: "flex",
    gap: spacing.xs,
    justifyContent: "center",
  },
  star: {
    color: "#fbbf24",
    fontSize: typography.fontSize4,
  },
  quote: {
    fontSize: typography.fontSize4,
    lineHeight: 1.6,
    color: colors.text,
    fontStyle: "italic",
    [`@media (max-width: ${breakpoints.mobile})`]: {
      fontSize: typography.fontSize3,
    },
  },
  authorSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: spacing.md,
  },
  authorImage: {
    borderRadius: radius.full,
  },
  authorName: {
    fontWeight: 600,
    fontSize: typography.fontSize4,
    color: colors.text,
  },
  authorRole: {
    fontSize: typography.fontSizeBase,
    color: colors.textMuted,
  },
  controls: {
    display: "flex",
    justifyContent: "center",
    gap: spacing.lg,
    marginTop: spacing["3xl"],
  },
  navButton: {
    padding: `${spacing.md} ${spacing.lg}`,
    backgroundColor: colors.background,
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: colors.border,
    borderRadius: radius.sm,
    cursor: "pointer",
    fontSize: typography.fontSizeBase,
    transition: "all 0.2s",
    ":hover": {
      backgroundColor: colors.backgroundAlt,
    },
    ":disabled": {
      opacity: 0.5,
      cursor: "not-allowed",
    },
  },
  indicators: {
    display: "flex",
    justifyContent: "center",
    gap: spacing.sm,
    marginTop: spacing.xl,
  },
  indicator: {
    width: "12px",
    height: "12px",
    borderRadius: radius.full,
    backgroundColor: colors.border,
    cursor: "pointer",
    transition: "all 0.2s",
    borderWidth: 0,
    borderStyle: "none",
    padding: 0,
  },
  indicatorActive: {
    backgroundColor: colors.primary,
  },
});

export function TestimonialsCarousel({
  content,
  theme,
}: TestimonialsCarouselProps) {
  const {
    sectionTitle,
    sectionDescription,
    testimonials,
    autoPlay = false,
    autoPlayInterval = 5000,
  } = content;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay || testimonials.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, testimonials.length]);

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

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
            {sectionTitle && <Heading as="h2">{sectionTitle}</Heading>}
            {sectionDescription && (
              <p {...stylex.props(styles.description)}>{sectionDescription}</p>
            )}
          </div>
        )}

        <div {...stylex.props(styles.carouselContainer)}>
          <div {...stylex.props(styles.testimonialCard)}>
            {currentTestimonial.rating && (
              <div {...stylex.props(styles.rating)}>
                {Array.from({ length: currentTestimonial.rating }).map(
                  (_, i) => (
                    <span key={i} {...stylex.props(styles.star)}>
                      ★
                    </span>
                  ),
                )}
              </div>
            )}

            <blockquote {...stylex.props(styles.quote)}>
              &quot;{currentTestimonial.quote}&quot;
            </blockquote>

            <div {...stylex.props(styles.authorSection)}>
              {currentTestimonial.image && currentTestimonial.image.src && (
                <Image
                  src={currentTestimonial.image.src}
                  alt={currentTestimonial.image.alt || currentTestimonial.author}
                  width={64}
                  height={64}
                  {...stylex.props(styles.authorImage)}
                />
              )}
              <div>
                <div {...stylex.props(styles.authorName)}>
                  {currentTestimonial.author}
                </div>
                {(currentTestimonial.role || currentTestimonial.company) && (
                  <div {...stylex.props(styles.authorRole)}>
                    {currentTestimonial.role}
                    {currentTestimonial.role &&
                      currentTestimonial.company &&
                      " at "}
                    {currentTestimonial.company}
                  </div>
                )}
              </div>
            </div>
          </div>

          {testimonials.length > 1 && (
            <>
              <div {...stylex.props(styles.controls)}>
                <button
                  {...stylex.props(styles.navButton)}
                  onClick={handlePrev}
                  aria-label="Previous testimonial"
                >
                  ← Prev
                </button>
                <button
                  {...stylex.props(styles.navButton)}
                  onClick={handleNext}
                  aria-label="Next testimonial"
                >
                  Next →
                </button>
              </div>

              <div {...stylex.props(styles.indicators)}>
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    {...stylex.props(
                      styles.indicator,
                      index === currentIndex && styles.indicatorActive,
                    )}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </Container>
    </section>
  );
}
