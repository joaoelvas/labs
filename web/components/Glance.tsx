import type { Dictionary } from "@/lib/i18n";
import styles from "./Glance.module.css";

export function Glance({ t }: { t: Dictionary["glance"] }) {
  return (
    <section aria-label={t.label} className={styles.strip}>
      <ul className={`container ${styles.list}`}>
        {t.items.map((item) => (
          <li key={item.title} className={styles.item}>
            <span className={styles.title}>{item.title}</span>
            <span className={styles.caption}>{item.caption}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
