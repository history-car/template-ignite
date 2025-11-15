"use client";

import { ContactFormProps } from "@/types/section.types";
import { Container } from "@/components/shared/container";
import { Heading } from "@/components/shared/heading";
import { Button } from "@/components/shared/button";
import * as stylex from "@stylexjs/stylex";
import {
  spacing,
  colors,
  radius,
  typography,
  breakpoints,
} from "@/styles/tokens.stylex";

const styles = stylex.create({
  contact: {
    padding: `${spacing["5xl"]} 0`,
    [`@media (max-width: ${breakpoints.mobile})`]: {
      padding: `${spacing["4xl"]} 0`,
    },
  },
  header: {
    textAlign: "center",
    maxWidth: "800px",
    margin: "0 auto",
    marginBottom: spacing["4xl"],
  },
  description: {
    fontSize: typography.fontSize4,
    color: colors.textMuted,
    marginTop: spacing.lg,
  },
  formWrapper: {
    maxWidth: "600px",
    margin: "0 auto",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: spacing["2xl"],
  },
  fieldGroup: {
    display: "flex",
    flexDirection: "column",
    gap: spacing.sm,
  },
  label: {
    fontSize: typography.fontSizeBase,
    fontWeight: 600,
    color: colors.text,
  },
  required: {
    color: colors.primary,
  },
  input: {
    padding: `${spacing.md} ${spacing.lg}`,
    fontSize: typography.fontSizeBase,
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: colors.border,
    borderRadius: radius.sm,
    backgroundColor: colors.background,
    color: colors.text,
    transition: "all 0.2s",
    fontFamily: "inherit",
    ":focus": {
      outline: "none",
      borderColor: colors.primary,
      boxShadow: `0 0 0 3px ${colors.primary}33`,
    },
  },
  textarea: {
    minHeight: "150px",
    resize: "vertical",
  },
  submitButton: {
    marginTop: spacing.lg,
  },
});

export function ContactForm({ content, theme }: ContactFormProps) {
  const { headline, description, fields, submitText, submitAction } = content;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission will be handled by the form action
    const form = e.currentTarget;
    const formData = new FormData(form);
    console.log("Form submitted:", Object.fromEntries(formData));
  };

  return (
    <section
      {...stylex.props(styles.contact)}
      style={{
        backgroundColor: theme?.backgroundColor,
        color: theme?.textColor,
      }}
    >
      <Container>
        <div {...stylex.props(styles.header)}>
          <Heading as="h2">{headline}</Heading>
          {description && (
            <p {...stylex.props(styles.description)}>{description}</p>
          )}
        </div>

        <div {...stylex.props(styles.formWrapper)}>
          <form
            {...stylex.props(styles.form)}
            onSubmit={handleSubmit}
            action={submitAction}
            method="POST"
          >
            {fields.map((field, index) => (
              <div key={index} {...stylex.props(styles.fieldGroup)}>
                <label {...stylex.props(styles.label)} htmlFor={field.name}>
                  {field.label}
                  {field.required && (
                    <span {...stylex.props(styles.required)}> *</span>
                  )}
                </label>
                {field.type === "textarea" ? (
                  <textarea
                    {...stylex.props(styles.input, styles.textarea)}
                    id={field.name}
                    name={field.name}
                    placeholder={field.placeholder}
                    required={field.required}
                  />
                ) : (
                  <input
                    {...stylex.props(styles.input)}
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    placeholder={field.placeholder}
                    required={field.required}
                  />
                )}
              </div>
            ))}

            <div {...stylex.props(styles.submitButton)}>
              <Button type="submit" variant="primary" size="large">
                {submitText}
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
