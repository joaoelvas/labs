import type { Dictionary } from "@/lib/i18n";
import { Button, Eyebrow } from "./ui";
import heroStyles from "./Hero.module.css";
import styles from "./Terminal.module.css";

type T = Dictionary["trainingPage"];

export function TrainingHero({ t, terminal }: { t: T["hero"]; terminal: T["terminal"] }) {
  return (
    <section id="top" className={`container ${heroStyles.hero}`}>
      <div className={heroStyles.copy}>
        <Eyebrow className={heroStyles.eyebrow}>{t.eyebrow}</Eyebrow>
        <h1 className={heroStyles.title}>{t.title}</h1>
        <p className={heroStyles.lead}>{t.lead}</p>
        <div className={heroStyles.ctas}>
          <Button href="#contact" size="lg">
            {t.ctaPrimary}
          </Button>
          <Button href="#programmes" variant="secondary" size="lg">
            {t.ctaSecondary}
          </Button>
        </div>
      </div>
      <figure className={styles.terminal} aria-label={terminal.label}>
        <div className={styles.bar} aria-hidden="true">
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.title}>{terminal.title}</span>
        </div>
        <div className={styles.body}>
          <p className={styles.cmd}>$ {terminal.command}</p>
          {terminal.modules.map((m, i) => (
            <p key={m.name}>
              <span className={styles.live}>✓</span> {`0${i + 1}`} <span className={styles.cmd}>{m.name}</span> ·{" "}
              {m.status}
            </p>
          ))}
          <p>→ {terminal.note}</p>
          <p className={`${styles.cmd} ${styles.next}`}>
            $ {terminal.next} <span className={styles.cursor} aria-hidden="true" />
          </p>
        </div>
      </figure>
    </section>
  );
}
