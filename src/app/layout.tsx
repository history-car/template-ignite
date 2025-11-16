import type { Metadata } from 'next';
import { loadSiteConfig } from '@/lib/site-generator';
import { SiteLayout } from '@/components/layout/site-layout';
import { WebVitalsReporter } from '@/components/web-vitals-reporter';

// Path to active template
const ACTIVE_TEMPLATE = './src/templates/sites/law-firm-professional.yaml';

export const metadata: Metadata = {
  title: 'Template Ignite',
  description: 'Multi-page website generator',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Load site configuration for layout components
  const config = await loadSiteConfig(ACTIVE_TEMPLATE);

  return (
    <html lang="en">
      <body>
        <SiteLayout
          siteName={config.site.name}
          navigation={config.navigation}
          footer={config.footer}
          showHeader={true}
          showFooter={true}
        >
          {children}
        </SiteLayout>
        <WebVitalsReporter />
      </body>
    </html>
  );
}
