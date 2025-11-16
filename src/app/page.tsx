import { loadSiteConfig, getPageConfig } from '@/lib/site-generator';
import { RenderSections } from '@/lib/page-renderer';
import { getActiveTemplatePath } from '@/lib/template-registry';

/**
 * Homepage - renders the 'home' page from site configuration
 */
export default async function Home() {
  const config = await loadSiteConfig(getActiveTemplatePath());
  const homePage = getPageConfig(config, 'home');

  if (!homePage) {
    return <div>Home page not configured</div>;
  }

  return <RenderSections sections={homePage.sections} />;
}
