import styles from "./page-doodles.module.css";

/** Small margin illustrations, kept outside the reading and interaction areas. */
export function PageDoodles({ variant = 0 }: { variant?: number }) {
  return <div className={styles.canvas} aria-hidden="true" data-ambient data-page-doodles>
    <svg className={styles.first} viewBox="0 0 64 64" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      {variant % 2 === 0 ? <><path d="m32 8 6 15 17 2-13 11 4 17-14-9-15 9 4-17L8 25l17-2 7-15Z" /><path d="m54 7 3-3M5 48l-3 3" /></> : <><path d="M32 55V28M32 38C13 40 8 26 10 16c17-1 23 8 22 22ZM32 29c0-18 10-23 23-22 0 15-9 24-23 22Z" /></>}
    </svg>
    <svg className={styles.second} viewBox="0 0 80 48" fill="none" strokeWidth="2.5" strokeLinecap="round">
      <path d="M5 30C9 5 28 4 29 24s20 24 23 1S73 4 75 19" />
    </svg>
    <svg className={styles.third} viewBox="0 0 64 64" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m15 42 26-27 10 10-26 27-14 3 4-13ZM36 20l10 10M15 42l10 10M47 7l4-4M57 18h4" />
    </svg>
  </div>;
}
