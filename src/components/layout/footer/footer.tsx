import * as stylex from '@stylexjs/stylex';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Github } from 'lucide-react';
import { colors, spacing, typography } from '@/styles/tokens.stylex';
import { Container } from '@/components/shared/container';
import type { FooterConfig } from '@/types/site.types';

const styles = stylex.create({
  footer: {
    backgroundColor: colors.text,
    color: colors.white,
    paddingTop: spacing['4xl'],
    paddingBottom: spacing['2xl'],
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: spacing['2xl'],
    marginBottom: spacing['3xl'],
    '@media (min-width: 768px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    '@media (min-width: 1024px)': {
      gridTemplateColumns: 'repeat(4, 1fr)',
    },
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.md,
  },
  sectionTitle: {
    fontSize: typography.fontSize4,
    fontWeight: 'bold',
    marginBottom: spacing.sm,
    color: colors.white,
  },
  link: {
    color: colors.textMuted,
    textDecoration: 'none',
    fontSize: typography.fontSizeBase,
    transition: 'color 0.2s',
    ':hover': {
      color: colors.white,
    },
  },
  bottom: {
    borderTop: `1px solid rgba(255, 255, 255, 0.1)`,
    paddingTop: spacing.xl,
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.md,
    alignItems: 'center',
    '@media (min-width: 768px)': {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  },
  copyright: {
    color: colors.textMuted,
    fontSize: typography.fontSizeSmall,
  },
  socialLinks: {
    display: 'flex',
    gap: spacing.lg,
  },
  socialLink: {
    color: colors.textMuted,
    transition: 'color 0.2s',
    ':hover': {
      color: colors.white,
    },
  },
});

const socialIcons = {
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
  linkedin: Linkedin,
  youtube: Youtube,
  github: Github,
};

export interface FooterProps {
  config?: FooterConfig;
  siteName?: string;
}

export function Footer({ config, siteName }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const defaultCopyright = `© ${currentYear} ${siteName || 'Site'}. All rights reserved.`;

  return (
    <footer {...stylex.props(styles.footer)}>
      <Container>
        {config?.sections && config.sections.length > 0 && (
          <div {...stylex.props(styles.grid)}>
            {config.sections.map((section, index) => (
              <div key={index} {...stylex.props(styles.section)}>
                <h3 {...stylex.props(styles.sectionTitle)}>{section.title}</h3>
                {section.links.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    href={link.href}
                    {...stylex.props(styles.link)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        )}

        <div {...stylex.props(styles.bottom)}>
          <p {...stylex.props(styles.copyright)}>
            {config?.copyright || defaultCopyright}
          </p>

          {config?.social && config.social.length > 0 && (
            <div {...stylex.props(styles.socialLinks)}>
              {config.social.map((social, index) => {
                const Icon = socialIcons[social.platform];
                if (!Icon) return null;

                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    {...stylex.props(styles.socialLink)}
                    aria-label={social.platform}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </Container>
    </footer>
  );
}
