import { ReactNode } from 'react';
import { Header } from '../header';
import { Footer } from '../footer';
import type { NavigationConfig, FooterConfig } from '@/types/site.types';

export interface SiteLayoutProps {
  children: ReactNode;
  navigation: NavigationConfig;
  footer?: FooterConfig;
  siteName?: string;
  showHeader?: boolean;
  showFooter?: boolean;
}

/**
 * Site Layout - Wraps content with Header and Footer
 */
export function SiteLayout({
  children,
  navigation,
  footer,
  siteName,
  showHeader = true,
  showFooter = true,
}: SiteLayoutProps) {
  return (
    <>
      {showHeader && <Header navigation={navigation} />}
      <main>{children}</main>
      {showFooter && <Footer config={footer} siteName={siteName} />}
    </>
  );
}
