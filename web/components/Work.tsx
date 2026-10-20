import type { Dictionary } from "@/lib/i18n";
import { site } from "@/lib/site";
import { AtlasIcon, TelltaleIcon } from "./icons";
import { Button, Chips, Copy, Eyebrow } from "./ui";
import styles from "./Work.module.css";

// Each case study is a self-contained <CaseStudy>. To add client work, add another
// <CaseStudy> below — `mirrored` alternates the mockup side.

export function Work({ t }: { t: Dictionary["work"] }) {
  return (
    <section id="work" className={`container ${styles.section}`}>
      <Eyebrow>{t.eyebrow}</Eyebrow>
      <h2 className={styles.heading}>{t.title}</h2>

      <div className={styles.cases}>
        <CaseStudy
          icon={<TelltaleIcon />}
          name="Telltale"
          meta={t.telltale.meta}
          tagline={t.telltale.tagline}
          body={t.telltale.body}
          chips={t.telltale.chips}
          actions={
            <>
              <Button href={site.telltale.download}>{t.telltale.download}</Button>
              <Button href={site.telltale.site} variant="secondary">
                {t.telltale.visit}
              </Button>
            </>
          }
          mockup={<TelltaleMockup t={t.telltale} />}
        />
        <CaseStudy
          mirrored
          icon={<AtlasIcon />}
          name="Atlas"
          meta={t.atlas.meta}
          tagline={t.atlas.tagline}
          body={t.atlas.body}
          chips={t.atlas.chips}
          actions={
            <Button href="#contact" variant="text">
              {t.atlas.cta}
            </Button>
          }
          mockup={<AtlasMockup t={t.atlas} />}
        />
      </div>
    </section>
  );
}

function CaseStudy({
  icon,
  name,
  meta,
  tagline,
  body,
  chips,
  actions,
  mockup,
  mirrored = false,
}: {
  icon: React.ReactNode;
  name: string;
  meta: string;
  tagline: string;
  body: string;
  chips: string[];
  actions: React.ReactNode;
  mockup: React.ReactNode;
  mirrored?: boolean;
}) {
  return (
    <article className={`${styles.card} ${mirrored ? styles.mirrored : ""}`}>
      <div className={styles.copy}>
        <div className={styles.title}>
          {icon}
          <div>
            <h3 className={styles.name}>{name}</h3>
            <p className={styles.meta}>
              <Copy>{meta}</Copy>
            </p>
          </div>
        </div>
        <p className={styles.tagline}>{tagline}</p>
        <p className={styles.body}>{body}</p>
        <Chips items={chips} />
        <div className={styles.actions}>{actions}</div>
      </div>
      {mockup}
    </article>
  );
}

const TILE_LEVELS = [34, 18, 61, 47, 26, 82];

function TelltaleMockup({ t }: { t: Dictionary["work"]["telltale"] }) {
  return (
    <div className={`${styles.mockup} ${styles.mockupTelltale}`} role="img" aria-label={t.mockupLabel}>
      <div className={styles.menubar} aria-hidden="true">
        <span className={styles.menuItem}>
          <span className={styles.lamp} />
          CPU
        </span>
        <span className={styles.bars}>
          <span style={{ height: 5 }} />
          <span style={{ height: 10 }} />
          <span style={{ height: 7 }} />
          <span style={{ height: 12 }} />
        </span>
        <span>MEM</span>
        <span>NET</span>
        <span className={styles.clock}>{t.clock}</span>
      </div>
      <div className={styles.dropdown} aria-hidden="true">
        {t.tiles.map((tile, i) => (
          <div key={tile} className={styles.tile}>
            <span className={styles.tileName}>{tile}</span>
            <span className={styles.track}>
              <span
                className={`${styles.fill} ${i === 2 ? styles.fillNeutral : ""}`}
                style={{ width: `${TILE_LEVELS[i]}%` }}
              />
            </span>
          </div>
        ))}
        <div className={styles.more}>{t.more}</div>
      </div>
    </div>
  );
}

function AtlasMockup({ t }: { t: Dictionary["work"]["atlas"] }) {
  return (
    <div className={`${styles.mockup} ${styles.mockupAtlas}`} role="img" aria-label={t.mockupLabel}>
      <div className={styles.question} aria-hidden="true">
        {t.question}
      </div>
      <div className={styles.tools} aria-hidden="true">
        <div className={styles.tool}>
          <span className={styles.toolIcon} />
          atlas · vat_summary
        </div>
        <div className={styles.tool}>
          <span className={styles.toolIcon} />
          atlas · find_duplicate_expenses
        </div>
      </div>
      <div className={styles.answer} aria-hidden="true">
        {t.answer}
      </div>
    </div>
  );
}
