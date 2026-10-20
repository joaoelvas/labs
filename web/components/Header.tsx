import { otherLocale, paths, type Dictionary, type Locale, type Page } from "@/lib/i18n";
import { StarMark } from "./icons";
import styles from "./Header.module.css";

export function Header({ t, locale, page }: { t: Dictionary["header"]; locale: Locale; page: Page }) {
  const home = paths.home[locale];
  const other = otherLocale(locale);
  // On the home page, section links stay in-page; elsewhere they jump back to home.
  const section = (id: string) => (page === "home" ? `#${id}` : `${home}#${id}`);
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a href={page === "home" ? "#top" : home} className={styles.brand} aria-label={t.homeLabel}>
          <StarMark />
          <span className={styles.wordmark}>Venley Labs</span>
        </a>
        <nav aria-label={t.navLabel} className={styles.nav}>
          <a href={section("work")} className={styles.link}>
            {t.nav.work}
          </a>
          <a
            href={paths.training[locale]}
            className={`${styles.link} ${styles.pageLink}`}
            aria-current={page === "training" ? "page" : undefined}
          >
            {t.nav.training}
          </a>
          <a href={section("capabilities")} className={styles.link}>
            {t.nav.capabilities}
          </a>
          <a href={section("approach")} className={styles.link}>
            {t.nav.approach}
          </a>
          <a href={paths[page][other]} hrefLang={other} lang={other} className={styles.lang} aria-label={t.switchLabel}>
            {t.switchShort}
          </a>
          <a href="#contact" className={styles.cta}>
            <span className={styles.ctaFull}>{t.cta}</span>
            <span className={styles.ctaShort}>{t.ctaShort}</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
