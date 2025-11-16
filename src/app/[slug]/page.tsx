import { notFound } from 'next/navigation';
import { loadSiteConfig, getPageConfig } from '@/lib/site-generator';
import { RenderSections } from '@/lib/page-renderer';
import type { Metadata } from 'next';

// Path to active template
const ACTIVE_TEMPLATE = './src/templates/sites/law-firm-professional.yaml';

/**
 * Generate static paths for all pages in the site
 * This enables Static Site Generation (SSG) at build time
 */
export async function generateStaticParams() {
  const config = await loadSiteConfig(ACTIVE_TEMPLATE);

  const params = config.pages
    .filter((page) => page.slug !== 'home') // Exclude home, it's handled by /page.tsx
    .map((page) => ({
      slug: page.slug,
    }));

  return params;
}

/**
 * Generate metadata for SEO
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug: slugParam } = await params;
  const config = await loadSiteConfig(ACTIVE_TEMPLATE);
  const slug = slugParam || 'home';
  const page = getPageConfig(config, slug);

  if (!page) {
    return {
      title: 'Page Not Found',
    };
  }

  return {
    title: page.metadata?.title || config.site.name,
    description:
      page.metadata?.description || config.site.description || undefined,
    keywords: page.metadata?.keywords,
    openGraph: page.metadata?.ogImage
      ? {
          images: [page.metadata.ogImage],
        }
      : undefined,
  };
}

/**
 * Dynamic route page component
 * Renders different pages based on [slug] parameter
 */
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug: slugParam } = await params;
  const config = await loadSiteConfig(ACTIVE_TEMPLATE);
  const slug = slugParam || 'home';
  const page = getPageConfig(config, slug);

  // If page not found, show 404
  if (!page) {
    notFound();
  }

  // Validate sections array exists
  if (!page.sections || !Array.isArray(page.sections)) {
    return <div>Page configuration error: sections not found</div>;
  }

  // Render page sections using page renderer
  return <RenderSections sections={page.sections} />;
}
