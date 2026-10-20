import type { Dictionary } from "@/lib/i18n";
import { Copy, Eyebrow } from "./ui";
import styles from "./Topics.module.css";

export function Topics({ t }: { t: Dictionary["trainingPage"]["topics"] }) {
  return (
    <section id="topics" className={`container ${styles.section}`}>
      <Eyebrow>{t.eyebrow}</Eyebrow>
      <h2 className={styles.heading}>{t.title}</h2>
      <div className={styles.layout}>
        <ul className={styles.topics}>
          {t.items.map((topic) => (
            <li key={topic} className={styles.topic}>
              {topic}
            </li>
          ))}
        </ul>
        <aside className={styles.side}>
          <h3 className={styles.sideTitle}>{t.detailsLabel}</h3>
          <dl className={styles.details}>
            {t.details.map((d) => (
              <div key={d.term} className={styles.row}>
                <dt>{d.term}</dt>
                <dd>
                  <Copy>{d.value}</Copy>
                </dd>
              </div>
            ))}
          </dl>
          <div className={styles.note}>
            <p className={styles.noteTitle}>{t.aiActTitle}</p>
            <p>{t.aiActBody}</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
