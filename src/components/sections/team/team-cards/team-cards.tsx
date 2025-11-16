import { TeamCardsProps } from "@/types/section.types";
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
  team: {
    padding: `${spacing["5xl"]} 0`,
    backgroundColor: colors.backgroundAlt,
    [`@media (max-width: ${breakpoints.mobile})`]: {
      padding: `${spacing["4xl"]} 0`,
    },
  },
  header: {
    textAlign: "center",
    marginBottom: spacing["4xl"],
  },
  description: {
    fontSize: typography.fontSize4,
    color: colors.textMuted,
    marginTop: spacing.lg,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: spacing["3xl"],
    [`@media (max-width: ${breakpoints.mobile})`]: {
      gridTemplateColumns: "1fr",
      gap: spacing["2xl"],
    },
  },
  card: {
    padding: spacing["3xl"],
    backgroundColor: colors.background,
    borderRadius: radius.lg,
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: colors.border,
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    ":hover": {
      transform: "translateY(-4px)",
      boxShadow: "0 12px 24px rgba(0, 0, 0, 0.1)",
    },
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  imageWrapper: {
    position: "relative",
    width: "150px",
    height: "150px",
    marginBottom: spacing["2xl"],
    borderRadius: radius.full,
    overflow: "hidden",
    borderWidth: "4px",
    borderStyle: "solid",
    borderColor: colors.primaryLight,
  },
  image: {
    objectFit: "cover",
  },
  placeholder: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.primaryLight,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "3rem",
    color: colors.primary,
    fontWeight: 700,
  },
  name: {
    fontSize: typography.fontSize3,
    fontWeight: 700,
    marginBottom: spacing.sm,
  },
  role: {
    fontSize: typography.fontSize4,
    color: colors.primary,
    fontWeight: 600,
    marginBottom: spacing.lg,
  },
  bio: {
    fontSize: typography.fontSizeBase,
    color: colors.textMuted,
    lineHeight: typography.lineHeightBody,
    marginBottom: spacing.lg,
  },
  social: {
    display: "flex",
    gap: spacing.md,
    justifyContent: "center",
  },
  socialLink: {
    display: "inline-flex",
    padding: spacing.sm,
    backgroundColor: colors.backgroundAlt,
    borderRadius: radius.md,
    color: colors.text,
    transition: "background-color 0.2s ease, color 0.2s ease",
    ":hover": {
      backgroundColor: colors.primary,
      color: colors.white,
    },
  },
});

export function TeamCards({ content, theme }: TeamCardsProps) {
  const { sectionTitle, sectionDescription, members } = content;

  return (
    <section
      {...stylex.props(styles.team)}
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
        <div {...stylex.props(styles.grid)}>
          {members.map((member, index) => (
            <div key={index} {...stylex.props(styles.card)}>
              <div {...stylex.props(styles.cardContent)}>
                <div {...stylex.props(styles.imageWrapper)}>
                  {member.image && member.image.src ? (
                    <Image
                      src={member.image.src}
                      alt={member.image.alt || `${member.name} - ${member.role}`}
                      fill
                      {...stylex.props(styles.image)}
                    />
                  ) : (
                    <div {...stylex.props(styles.placeholder)}>
                      {member.name.charAt(0)}
                    </div>
                  )}
                </div>
                <h3 {...stylex.props(styles.name)}>{member.name}</h3>
                <p {...stylex.props(styles.role)}>{member.role}</p>
                {member.bio && (
                  <p {...stylex.props(styles.bio)}>{member.bio}</p>
                )}
                {member.social && member.social.length > 0 && (
                  <div {...stylex.props(styles.social)}>
                    {member.social.map((social, socialIndex) => {
                      const IconComponent = social.icon
                        ? getIcon(social.icon)
                        : null;
                      return (
                        <a
                          key={socialIndex}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          {...stylex.props(styles.socialLink)}
                          aria-label={social.platform}
                        >
                          {IconComponent && <IconComponent size={20} />}
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
