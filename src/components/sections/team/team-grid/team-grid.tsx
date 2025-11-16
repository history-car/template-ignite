import { TeamGridProps } from "@/types/section.types";
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
    backgroundColor: colors.background,
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
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: spacing["3xl"],
    [`@media (max-width: ${breakpoints.mobile})`]: {
      gridTemplateColumns: "1fr",
      gap: spacing["2xl"],
    },
  },
  member: {
    textAlign: "center",
  },
  imageWrapper: {
    position: "relative",
    width: "200px",
    height: "200px",
    margin: "0 auto",
    marginBottom: spacing["2xl"],
    borderRadius: radius.full,
    overflow: "hidden",
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
    fontSize: "4rem",
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
    color: colors.textMuted,
    transition: "color 0.2s ease",
    ":hover": {
      color: colors.primary,
    },
  },
});

export function TeamGrid({ content, theme }: TeamGridProps) {
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
            <div key={index} {...stylex.props(styles.member)}>
              <div {...stylex.props(styles.imageWrapper)}>
                {member.image ? (
                  <Image
                    src={member.image.src}
                    alt={member.image.alt}
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
          ))}
        </div>
      </Container>
    </section>
  );
}
