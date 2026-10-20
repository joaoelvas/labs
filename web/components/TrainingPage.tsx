import { dictionaries, type Locale } from "@/lib/i18n";
import { Approach } from "./Approach";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { Glance } from "./Glance";
import { Header } from "./Header";
import { Programmes } from "./Programmes";
import { Topics } from "./Topics";
import { TrainingHero } from "./TrainingHero";

export function TrainingPage({ locale }: { locale: Locale }) {
  const t = dictionaries[locale];
  const tp = t.trainingPage;
  return (
    <>
      <Header t={t.header} locale={locale} page="training" />
      <main>
        <TrainingHero t={tp.hero} terminal={tp.terminal} />
        <Glance t={tp.why} />
        <Programmes t={tp.programmes} />
        <Approach t={tp.process} id="how-it-works" />
        <Topics t={tp.topics} />
        <Contact t={tp.contact} />
      </main>
      <Footer t={t.footer} />
    </>
  );
}
