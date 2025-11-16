import { loadSiteConfig, getPageConfig } from '@/lib/site-generator';
import { RenderSections } from '@/lib/page-renderer';

// Path to active template
const ACTIVE_TEMPLATE = './src/templates/sites/law-firm-professional.yaml';

/**
 * Homepage - renders the 'home' page from site configuration
 */
export default async function Home() {
  const config = await loadSiteConfig(ACTIVE_TEMPLATE);
  const homePage = getPageConfig(config, 'home');

  if (!homePage) {
    return <div>Home page not configured</div>;
  }

  return <RenderSections sections={homePage.sections} />;
}
