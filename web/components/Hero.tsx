import type { Dictionary } from "@/lib/i18n";
import { Terminal } from "./Terminal";
import { Button, Eyebrow } from "./ui";
import styles from "./Hero.module.css";

export function Hero({ t, terminal }: { t: Dictionary["hero"]; terminal: Dictionary["terminal"] }) {
  return (
    <section id="top" className={`container ${styles.hero}`}>
      <div className={styles.copy}>
        <Eyebrow className={styles.eyebrow}>{t.eyebrow}</Eyebrow>
        <h1 className={styles.title}>{t.title}</h1>
        <p className={styles.lead}>{t.lead}</p>
        <div className={styles.ctas}>
          <Button href="#work" size="lg">
            {t.ctaPrimary}
          </Button>
          <Button href="#contact" variant="secondary" size="lg">
            {t.ctaSecondary}
          </Button>
        </div>
      </div>
      <Terminal t={terminal} />
    </section>
  );
}
