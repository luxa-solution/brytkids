import Link from "next/link";
import { ArrowIcon } from "./icons";
import styles from "./closing-cta.module.css";

function JourneyDoodle() {
  return <svg className={styles.doodle} viewBox="0 0 360 360" fill="none" aria-hidden="true">
    <circle className={styles.orbit} cx="180" cy="180" r="139" stroke="currentColor" strokeDasharray="2 15" strokeWidth="2" />
    <g className={styles.book} strokeLinecap="round" strokeLinejoin="round">
      <path d="m91 130 84-15 85 29-13 116-83-27-85 12 12-115Z" fill="var(--navy-deep)" stroke="var(--page-accent)" strokeWidth="5" />
      <path d="m175 115-11 118M104 154l47-8m-49 31 47-8m-49 31 35-5m56-42 42 15m-45 9 41 14m-44 10 31 10" stroke="var(--page-accent)" strokeWidth="4" />
    </g>
    <path className={styles.trail} d="M54 286c-31-44 25-83 64-44s108 23 125-25-42-50-18-91 64-22 71-66" stroke="var(--orange)" strokeWidth="3" strokeLinecap="round" strokeDasharray="7 9" />
    <g className={styles.star} stroke="var(--yellow)" strokeWidth="4" strokeLinejoin="round">
      <path d="m279 38 9 19 21 3-15 15 3 21-18-10-19 10 4-21-16-15 22-3 9-19Z" fill="var(--navy)" />
    </g>
    <g className={styles.sparks} strokeLinecap="round" strokeWidth="4">
      <path d="m57 106 15 8m-4-21-8 29M281 282l13 10m-2-21-10 31" stroke="var(--pink)" />
      <circle cx="99" cy="66" r="10" stroke="var(--aqua)" />
      <path d="M154 300c6-14 18-12 20 1s15 12 20-1" stroke="var(--green)" />
    </g>
  </svg>;
}

export function ClosingCta({ eyebrow = "Take the next step", title, copy, primaryLabel = "Work With Bryt", primaryHref = "/work-with-bryt", secondaryLabel, secondaryHref, id }: {
  eyebrow?: string;
  title: string;
  copy: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  id?: string;
}) {
  const words = title.trim().split(/\s+/);
  const accent = words.splice(-Math.min(2, words.length)).join(" ");
  return <section id={id} className={styles.section}>
    <div className={`site-shell ${styles.panel}`} data-cta data-ambient>
      <div className={styles.copy}>
        <p className={styles.eyebrow}><span aria-hidden="true">✳</span>{eyebrow}</p>
        <h2>{words.length ? `${words.join(" ")} ` : ""}<em>{accent}</em></h2>
        <p className={styles.lead}>{copy}</p>
        <div className={styles.actions}>
          <Link className={styles.primary} href={primaryHref}>{primaryLabel}<ArrowIcon /></Link>
          {secondaryLabel && secondaryHref ? <Link className={styles.secondary} href={secondaryHref}>{secondaryLabel}<ArrowIcon /></Link> : null}
        </div>
      </div>
      <div className={styles.art}>
        <JourneyDoodle />
        <p>Little steps.<br /><span>Extraordinary possibilities.</span></p>
      </div>
      <div className={styles.signature} aria-hidden="true"><span />A little intention. A brighter tomorrow.</div>
    </div>
  </section>;
}
