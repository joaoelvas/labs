import type { Dictionary } from "@/lib/i18n";
import { StarMark } from "./icons";
import styles from "./Footer.module.css";

export function Footer({ t }: { t: Dictionary["footer"] }) {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <span className={styles.parent}>
          <StarMark size={18} strokeWidth={2} dot={null} />
          {t.parent}
        </span>
        <span>{t.copyright}</span>
      </div>
    </footer>
  );
}
