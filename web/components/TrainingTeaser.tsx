import { paths, type Dictionary, type Locale } from "@/lib/i18n";
import { Button, Eyebrow } from "./ui";
import styles from "./TrainingTeaser.module.css";

export function TrainingTeaser({ t, locale }: { t: Dictionary["trainingTeaser"]; locale: Locale }) {
  return (
    <section id="training" className={`container ${styles.section}`}>
      <div className={styles.card}>
        <div className={styles.copy}>
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <h2 className={styles.heading}>{t.title}</h2>
          <p className={styles.body}>{t.body}</p>
          <div className={styles.actions}>
            <Button href={paths.training[locale]}>{t.cta}</Button>
            <Button href="#contact" variant="secondary">
              {t.secondary}
            </Button>
          </div>
        </div>
        <ol className={styles.list}>
          {t.programmes.map((p, i) => (
            <li key={p.title} className={styles.programme}>
              <span className={styles.number} aria-hidden="true">
                /{String(i + 1).padStart(2, "0")}
              </span>
              <span className={styles.title}>{p.title}</span>
              <span className={styles.level}>{p.level}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
