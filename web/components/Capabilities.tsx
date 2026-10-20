import { paths, type Dictionary, type Locale } from "@/lib/i18n";
import { CapabilityGlyph } from "./icons";
import { Copy, Eyebrow } from "./ui";
import styles from "./Capabilities.module.css";

export function Capabilities({ t, locale }: { t: Dictionary["capabilities"]; locale: Locale }) {
  return (
    <section id="capabilities" className={`container ${styles.section}`}>
      <Eyebrow>{t.eyebrow}</Eyebrow>
      <h2 className={styles.heading}>{t.title}</h2>
      <ul className={styles.grid}>
        {t.items.map((item) => (
          <li key={item.icon} className={styles.item}>
            <CapabilityGlyph name={item.icon} />
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.body}>{item.body}</p>
            <p className={styles.proof}>
              {t.provenIn} <Copy>{item.proof}</Copy>
            </p>
            {item.link ? (
              <a href={paths.training[locale]} className={styles.more}>
                {item.link}
              </a>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
