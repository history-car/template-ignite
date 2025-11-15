import { PageRenderer } from "@/components/page-builder";
import { landingPageExample } from "@/config/pages/landing-page-example";

export default function Home() {
  return <PageRenderer pageConfig={landingPageExample} />;
}
