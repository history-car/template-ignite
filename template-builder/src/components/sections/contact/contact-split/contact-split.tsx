'use client';

import { ContactSplitProps } from '@/types/section.types';
import { Container } from '@/components/shared/container';
import { Heading } from '@/components/shared/heading';
import { Button } from '@/components/shared/button';
import { getIcon } from '@/lib/icon-map';
import * as stylex from '@stylexjs/stylex';
import { spacing, colors, radius, typography, breakpoints } from '@/styles/tokens.stylex';

const styles = stylex.create({
  contact: {
    padding: `${spacing['5xl']} 0`,
    [`@media (max-width: ${breakpoints.mobile})`]: {
      padding: `${spacing['4xl']} 0`,
    },
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: spacing['5xl'],
    [`@media (max-width: ${breakpoints.mobile})`]: {
      gridTemplateColumns: '1fr',
      gap: spacing['4xl'],
    },
  },
  infoSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing['2xl'],
  },
  description: {
    fontSize: typography.fontSize3,
    color: colors.textMuted,
    lineHeight: 1.6,
  },
  contactInfoList: {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing['2xl'],
    marginTop: spacing.xl,
  },
  contactInfoItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: spacing.lg,
  },
  iconWrapper: {
    width: '48px',
    height: '48px',
    borderRadius: radius.md,
    backgroundColor: colors.backgroundAlt,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    color: colors.primary,
  },
  contactInfoContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.xs,
  },
  contactInfoLabel: {
    fontSize: typography.fontSize2,
    fontWeight: 600,
    color: colors.text,
  },
  contactInfoValue: {
    fontSize: typography.fontSize2,
    color: colors.textMuted,
    textDecoration: 'none',
    ':hover': {
      color: colors.primary,
    },
  },
  formSection: {
    backgroundColor: colors.backgroundAlt,
    padding: spacing['3xl'],
    borderRadius: radius.lg,
    [`@media (max-width: ${breakpoints.mobile})`]: {
      padding: spacing['2xl'],
    },
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.xl,
  },
  fieldGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.sm,
  },
  label: {
    fontSize: typography.fontSize2,
    fontWeight: 600,
    color: colors.text,
  },
  required: {
    color: colors.primary,
  },
  input: {
    padding: `${spacing.md} ${spacing.lg}`,
    fontSize: typography.fontSize2,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: colors.border,
    borderRadius: radius.sm,
    backgroundColor: colors.background,
    color: colors.text,
    transition: 'all 0.2s',
    fontFamily: 'inherit',
    ':focus': {
      outline: 'none',
      borderColor: colors.primary,
      boxShadow: `0 0 0 3px ${colors.primary}33`,
    },
  },
  textarea: {
    minHeight: '120px',
    resize: 'vertical',
  },
});

export function ContactSplit({ content, theme }: ContactSplitProps) {
  const { headline, description, contactInfo, form } = content;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElement = e.currentTarget;
    const formData = new FormData(formElement);
    console.log('Form submitted:', Object.fromEntries(formData));
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
        <div {...stylex.props(styles.grid)}>
          <div {...stylex.props(styles.infoSection)}>
            <Heading as="h2">{headline}</Heading>
            {description && (
              <p {...stylex.props(styles.description)}>{description}</p>
            )}

            <div {...stylex.props(styles.contactInfoList)}>
              {contactInfo.map((info, index) => {
                const Icon = info.icon ? getIcon(info.icon) : null;
                const content = (
                  <>
                    <div {...stylex.props(styles.iconWrapper)}>
                      {Icon && <Icon size={24} />}
                    </div>
                    <div {...stylex.props(styles.contactInfoContent)}>
                      <div {...stylex.props(styles.contactInfoLabel)}>
                        {info.label}
                      </div>
                      <div {...stylex.props(styles.contactInfoValue)}>
                        {info.value}
                      </div>
                    </div>
                  </>
                );

                return (
                  <div key={index} {...stylex.props(styles.contactInfoItem)}>
                    {info.href ? (
                      <a
                        href={info.href}
                        {...stylex.props(styles.contactInfoItem)}
                        style={{ textDecoration: 'none', display: 'flex', gap: spacing.lg }}
                      >
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div {...stylex.props(styles.formSection)}>
            <form
              {...stylex.props(styles.form)}
              onSubmit={handleSubmit}
              action={form.submitAction}
              method="POST"
            >
              {form.fields.map((field, index) => (
                <div key={index} {...stylex.props(styles.fieldGroup)}>
                  <label {...stylex.props(styles.label)} htmlFor={field.name}>
                    {field.label}
                    {field.required && (
                      <span {...stylex.props(styles.required)}> *</span>
                    )}
                  </label>
                  {field.type === 'textarea' ? (
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

              <Button type="submit" variant="primary" size="large">
                {form.submitText}
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
