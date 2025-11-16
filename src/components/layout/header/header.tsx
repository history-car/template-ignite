'use client';

import * as stylex from '@stylexjs/stylex';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { colors, spacing, typography, radius } from '@/styles/tokens.stylex';
import { Button } from '@/components/shared/button';
import { Container } from '@/components/shared/container';
import type { NavigationConfig } from '@/types/site.types';

const styles = stylex.create({
  header: {
    position: 'sticky',
    top: 0,
    backgroundColor: colors.white,
    borderBottom: `1px solid ${colors.border}`,
    zIndex: 50,
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: `${spacing.lg} 0`,
  },
  logoLink: {
    display: 'flex',
    alignItems: 'center',
    gap: spacing.sm,
    textDecoration: 'none',
    color: colors.text,
    fontSize: typography.fontSize3,
    fontWeight: 'bold',
  },
  menuDesktop: {
    display: 'none',
    '@media (min-width: 768px)': {
      display: 'flex',
    },
    alignItems: 'center',
    gap: spacing.xl,
  },
  menuLink: {
    textDecoration: 'none',
    color: colors.text,
    fontSize: typography.fontSizeBase,
    fontWeight: 500,
    transition: 'color 0.2s',
    ':hover': {
      color: colors.primary,
    },
  },
  mobileMenuButton: {
    display: 'block',
    '@media (min-width: 768px)': {
      display: 'none',
    },
  },
  mobileMenu: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.white,
    zIndex: 100,
    padding: spacing.xl,
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.lg,
  },
  mobileMenuHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  mobileMenuLinks: {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.md,
  },
  mobileMenuLink: {
    textDecoration: 'none',
    color: colors.text,
    fontSize: typography.fontSize4,
    fontWeight: 500,
    padding: spacing.md,
    borderRadius: radius.md,
    ':hover': {
      backgroundColor: colors.backgroundAlt,
    },
  },
});

export interface HeaderProps {
  navigation: NavigationConfig;
}

export function Header({ navigation }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header {...stylex.props(styles.header)}>
      <Container>
        <nav {...stylex.props(styles.nav)}>
          {/* Logo */}
          <Link href="/" {...stylex.props(styles.logoLink)}>
            {navigation.logo?.src ? (
              <img
                src={navigation.logo.src}
                alt={navigation.logo.alt}
                width={navigation.logo.width || 40}
                height={navigation.logo.height || 40}
              />
            ) : navigation.logo?.text ? (
              <span>{navigation.logo.text}</span>
            ) : (
              <span>{navigation.logo?.alt || 'Site Logo'}</span>
            )}
          </Link>

          {/* Desktop Menu */}
          <div {...stylex.props(styles.menuDesktop)}>
            {navigation.menu.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                {...stylex.props(styles.menuLink)}
              >
                {item.label}
              </Link>
            ))}
            {navigation.cta && (
              <Button asChild variant={navigation.cta.variant || 'primary'}>
                <Link href={navigation.cta.href}>{navigation.cta.text}</Link>
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            {...stylex.props(styles.mobileMenuButton)}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: spacing.sm,
            }}
          >
            <Menu size={24} />
          </button>
        </nav>
      </Container>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div {...stylex.props(styles.mobileMenu)}>
          <div {...stylex.props(styles.mobileMenuHeader)}>
            <Link href="/" {...stylex.props(styles.logoLink)}>
              {navigation.logo?.text || navigation.logo?.alt || 'Site Logo'}
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: spacing.sm,
              }}
            >
              <X size={24} />
            </button>
          </div>
          <div {...stylex.props(styles.mobileMenuLinks)}>
            {navigation.menu.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                {...stylex.props(styles.mobileMenuLink)}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            {navigation.cta && (
              <Button asChild variant={navigation.cta.variant || 'primary'}>
                <Link href={navigation.cta.href} style={{ marginTop: spacing.md }}>
                  {navigation.cta.text}
                </Link>
              </Button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
