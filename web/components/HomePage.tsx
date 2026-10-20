import { dictionaries, paths, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";
import { Approach } from "./Approach";
import { Capabilities } from "./Capabilities";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { Glance } from "./Glance";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { TrainingTeaser } from "./TrainingTeaser";
import { Work } from "./Work";

export function HomePage({ locale }: { locale: Locale }) {
  const t = dictionaries[locale];
  // Structured data for search engines: who the studio is and who it belongs to.
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Venley Labs",
    url: new URL(paths.home[locale], site.url).href,
    logo: `${site.url}/apple-icon.png`,
    description: t.meta.description,
    email: site.email,
    parentOrganization: { "@type": "Organization", name: "Venley Star, Lda" },
    address: { "@type": "PostalAddress", addressCountry: "PT" },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
      <Header t={t.header} locale={locale} page="home" />
      <main>
        <Hero t={t.hero} terminal={t.terminal} />
        <Glance t={t.glance} />
        <Work t={t.work} />
        <TrainingTeaser t={t.trainingTeaser} locale={locale} />
        <Capabilities t={t.capabilities} locale={locale} />
        <Approach t={t.approach} />
        <Contact t={t.contact} />
      </main>
      <Footer t={t.footer} />
    </>
  );
}
