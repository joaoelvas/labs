import { dictionaries, type Locale } from "@/lib/i18n";
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
  return (
    <>
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
