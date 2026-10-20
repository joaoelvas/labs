import type { Dictionary } from "@/lib/i18n";
import { site } from "@/lib/site";
import { StarMark } from "./icons";
import { Button, Copy } from "./ui";
import styles from "./Contact.module.css";

export function Contact({ t }: { t: Dictionary["contact"] }) {
  return (
    <section id="contact" className={`container ${styles.section}`}>
      <StarMark size={56} strokeWidth={1} dot={1.8} className={styles.star} />
      <h2 className={styles.heading}>{t.title}</h2>
      <p className={styles.body}>{t.body}</p>
      <div className={styles.actions}>
        <Button href={`mailto:${site.email}`} size="lg">
          <Copy>{site.email}</Copy>
        </Button>
      </div>
    </section>
  );
}
