import Link from "next/link";
import { ArrowIcon } from "./icons";
import { CardTitle } from "./card-title";
import surface from "./card-surface.module.css";
import styles from "./discovery-card.module.css";

type Illustration = "book" | "connection" | "growth" | "spark";
type Tone = "aqua" | "coral" | "yellow" | "lilac";

/** Decorative, code-native artwork: brand colours come from the enclosing card. */
export function LearningIllustration({ kind }: { kind: Illustration }) {
  return (
    <svg className={styles.illustration} viewBox="0 0 200 160" fill="none" aria-hidden="true">
      <ellipse className={styles.orbit} cx="100" cy="80" rx="88" ry="66" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 10" />
      <path className={styles.trail} d="M19 116c-14-27 13-36 32-18s56 46 93 29 44-49 26-62" stroke="currentColor" strokeWidth="2" strokeDasharray="5 8" strokeLinecap="round" />
      <g className={styles.drawing} stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        {kind === "book" ? <><path d="M100 62c-18-15-36-17-54-10v65c20-6 37-2 54 11 17-13 34-17 54-11V52c-18-7-36-5-54 10Z" /><path d="M100 62v66M59 69c10-1 18 1 27 6M59 86c10-1 18 1 27 6M115 75c8-5 16-7 25-6" /></> : null}
        {kind === "connection" ? <><path d="M45 45h84a15 15 0 0 1 15 15v31a15 15 0 0 1-15 15H85l-23 18v-18H45a15 15 0 0 1-15-15V60a15 15 0 0 1 15-15Z" /><path d="M154 76h6a13 13 0 0 1 13 13v30h-17v14l-22-14h-29" /><path d="M68 69c-10-10-24 8 17 27 41-19 27-37 17-27l-17 14-17-14Z" /></> : null}
        {kind === "growth" ? <><path d="M100 128V62M100 97c-33 4-49-12-48-37 29-2 47 10 48 37ZM100 79c0-28 19-43 49-41 2 26-16 43-49 41Z" /><path d="M68 130c18-9 43-9 64 0M72 80l28 17M124 59l-24 20" /></> : null}
        {kind === "spark" ? <><path d="m99 33 16 34 38 5-28 27 7 38-33-18-34 18 7-38-27-27 38-5 16-34Z" /><path d="m43 38 6 8M153 112l10 4M143 32l-6 10" /></> : null}
      </g>
      <g className={styles.doodles} strokeWidth="3" strokeLinecap="round">
        <path d="m24 24 8 3m-3-10-2 16M171 47l9-7M168 135l9 5" stroke="var(--orange)" />
        <circle cx="35" cy="131" r="7" stroke="var(--pink)" />
        <path d="M154 17c8-8 18-4 17 5s-11 9-9 16" stroke="var(--aqua)" />
      </g>
    </svg>
  );
}

export function DiscoveryCard({ eyebrow, title, description, points, note, tone = "aqua", illustration = "book", href, action, compact = false }: {
  eyebrow: string;
  title: string;
  description: string;
  points: readonly string[];
  note?: string;
  tone?: Tone;
  illustration?: Illustration;
  href: string;
  action: string;
  compact?: boolean;
}) {
  return (
    <article className={`${surface.surface} ${styles.card} ${compact ? styles.compact : ""}`} data-card data-tone={tone} data-reveal data-ambient>
      <div className={styles.art}><LearningIllustration kind={illustration} /></div>
      <div className={styles.copy}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <CardTitle>{title}</CardTitle>
        <p className={styles.description}>{description}</p>
        <ul>{points.map(point => <li key={point}>{point}</li>)}</ul>
        {note ? <p className={styles.note}>{note}</p> : null}
        <Link className={styles.action} href={href} aria-label={`${action}: ${title}`}>
          {action}<span><ArrowIcon /></span>
        </Link>
      </div>
    </article>
  );
}
