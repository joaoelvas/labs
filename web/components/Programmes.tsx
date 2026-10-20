import type { Dictionary } from "@/lib/i18n";
import { Eyebrow } from "./ui";
import styles from "./Programmes.module.css";

export function Programmes({ t }: { t: Dictionary["trainingPage"]["programmes"] }) {
  return (
    <section id="programmes" className={`container ${styles.section}`}>
      <Eyebrow>{t.eyebrow}</Eyebrow>
      <h2 className={styles.heading}>{t.title}</h2>
      <ul className={styles.grid}>
        {t.items.map((p) => (
          <li key={p.title} className={styles.card}>
            <p className={styles.level}>{p.level}</p>
            <h3 className={styles.title}>{p.title}</h3>
            <p className={styles.body}>{p.body}</p>
            <div className={styles.outcomes}>
              <p className={styles.outcomesLabel}>{t.outcomesLabel}</p>
              <ul>
                {p.outcomes.map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
