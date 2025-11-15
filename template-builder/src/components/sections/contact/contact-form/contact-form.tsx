"use client";

import { ContactFormProps } from "@/types/section.types";
import { Container } from "@/components/shared/container";
import { Heading } from "@/components/shared/heading";
import { Button } from "@/components/shared/button";
import * as stylex from "@stylexjs/stylex";
import { spacing, colors, radius, typography } from "@/styles/tokens.stylex";

const styles = stylex.create({
  contact: {
    padding: `${spacing["5xl"]} 0`,
  },
  wrapper: {
    maxWidth: "600px",
    margin: "0 auto",
  },
  header: {
    textAlign: "center",
    marginBottom: spacing["3xl"],
  },
  description: {
    fontSize: typography.fontSize4,
    color: colors.textMuted,
    marginTop: spacing.lg,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: spacing["2xl"],
  },
  field: {
    display: "flex",
    flexDirection: "column",
    gap: spacing.sm,
  },
  label: {
    fontWeight: 600,
    fontSize: typography.fontSizeSmall,
  },
  required: {
    color: "#ef4444",
    marginLeft: spacing.xs,
  },
  input: {
    padding: spacing.md,
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "#d1d5db",
    borderRadius: radius.sm,
    fontSize: typography.fontSizeBase,
    fontFamily: "inherit",
    ":focus": {
      outline: "none",
      borderColor: colors.primary,
      boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)",
    },
  },
  textarea: {
    padding: spacing.md,
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "#d1d5db",
    borderRadius: radius.sm,
    fontSize: typography.fontSizeBase,
    fontFamily: "inherit",
    resize: "vertical",
    ":focus": {
      outline: "none",
      borderColor: colors.primary,
      boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)",
    },
  },
});

export function ContactForm({ content, theme }: ContactFormProps) {
  const { headline, description, fields, submitText, submitAction } = content;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 프로토타입: 콘솔 로그만
    const formData = new FormData(e.currentTarget);
    console.log("Form submitted:", Object.fromEntries(formData));
    alert("폼이 제출되었습니다 (프로토타입 모드)");
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
        <div {...stylex.props(styles.wrapper)}>
          <div {...stylex.props(styles.header)}>
            <Heading as="h2">{headline}</Heading>
            {description && (
              <p {...stylex.props(styles.description)}>{description}</p>
            )}
          </div>
          <form {...stylex.props(styles.form)} onSubmit={handleSubmit}>
            {fields.map((field, index) => (
              <div key={index} {...stylex.props(styles.field)}>
                <label htmlFor={field.name} {...stylex.props(styles.label)}>
                  {field.label}
                  {field.required && (
                    <span {...stylex.props(styles.required)}>*</span>
                  )}
                </label>
                {field.type === "textarea" ? (
                  <textarea
                    id={field.name}
                    name={field.name}
                    placeholder={field.placeholder}
                    required={field.required}
                    {...stylex.props(styles.textarea)}
                    rows={4}
                  />
                ) : (
                  <input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    required={field.required}
                    {...stylex.props(styles.input)}
                  />
                )}
              </div>
            ))}
            <Button type="submit" variant="primary" size="large">
              {submitText}
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
}
