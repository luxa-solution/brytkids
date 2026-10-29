import type { ReactNode } from "react";
import { LearningIllustration } from "./discovery-card";
import styles from "./learning-panel.module.css";
import surface from "./card-surface.module.css";

/** A non-interactive content surface; actions remain explicit links inside. */
export function LearningPanel({ children, className = "", variant = 0 }: {
  children: ReactNode;
  className?: string;
  variant?: number;
}) {
  const kinds = ["growth", "book", "spark", "connection"] as const;
  return <article className={`${className} ${surface.surface} ${styles.panel}`} data-card data-tone={variant % 4} data-reveal data-ambient>
    <div className={styles.art}><LearningIllustration kind={kinds[variant % 4]} /></div>
    {children}
  </article>;
}
