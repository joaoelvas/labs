import type { Dictionary } from "@/lib/i18n";
import { Eyebrow } from "./ui";
import styles from "./Approach.module.css";

type Props = {
  t: Pick<Dictionary["approach"], "eyebrow" | "title" | "items">;
  id?: string;
};

/** Light "paper" band with numbered principles or steps. */
export function Approach({ t, id = "approach" }: Props) {
  return (
    <section id={id} className={styles.band}>
      <div className={`container ${styles.inner}`}>
        <Eyebrow tone="light">{t.eyebrow}</Eyebrow>
        <h2 className={styles.heading}>{t.title}</h2>
        <ol className={styles.list}>
          {t.items.map((item, i) => (
            <li key={item.title} className={styles.item}>
              <span className={styles.number} aria-hidden="true">
                /{String(i + 1).padStart(2, "0")}
              </span>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.body}>{item.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
