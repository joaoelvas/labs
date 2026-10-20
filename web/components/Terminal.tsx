import type { Dictionary } from "@/lib/i18n";
import { Copy } from "./ui";
import styles from "./Terminal.module.css";

// Telltale facts come from its live site — update when Telltale's version changes.
const TELLTALE = {
  version: "v0.2.0 · macOS 14+",
  build: "universal · apple silicon + intel",
  scope: "11 modules · 8 mcp tools",
};

export function Terminal({ t }: { t: Dictionary["terminal"] }) {
  return (
    <figure className={styles.terminal} aria-label={t.label}>
      <div className={styles.bar} aria-hidden="true">
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.title}>{t.title}</span>
      </div>
      <div className={styles.body}>
        <p className={styles.cmd}>$ labs status</p>
        <p>
          telltale <span className={styles.live}>● {t.live}</span> {TELLTALE.version}
        </p>
        <p>{TELLTALE.build}</p>
        <p>{TELLTALE.scope}</p>
        <p>
          atlas{" "}
          <span className={styles.cmd}>
            ● <Copy>{t.atlasStatus}</Copy>
          </span>{" "}
          bookkeeping app
        </p>
        <p>{t.atlasNote}</p>
        <p className={`${styles.cmd} ${styles.next}`}>
          $ labs next <span className={styles.cursor} aria-hidden="true" />
        </p>
      </div>
    </figure>
  );
}
