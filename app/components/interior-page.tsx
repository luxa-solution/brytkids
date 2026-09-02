import Link from "next/link";
import { ArrowIcon } from "./icons";

export function InteriorHero({
  eyebrow,
  title,
  lead,
  accent = "aqua",
  aside,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  accent?: "aqua" | "orange" | "pink" | "yellow";
  aside?: React.ReactNode;
}) {
  return (
    <section className={`inner-hero inner-hero--${accent}`}>
      <div className="site-shell inner-hero__grid">
        <div className="inner-hero__copy">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{lead}</p>
        </div>
        <div className="inner-hero__aside" aria-hidden={aside ? undefined : true}>
          {aside ?? (
            <>
              <span className="inner-hero__shape inner-hero__shape--ring" />
              <span className="inner-hero__shape inner-hero__shape--tile" />
              <span className="inner-hero__word">BRYT</span>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export function ContentHeading({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="inner-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </div>
  );
}

export function ActionLink({
  href,
  children,
  secondary = false,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  secondary?: boolean;
  external?: boolean;
}) {
  const className = `button ${secondary ? "button--secondary" : "button--primary"}`;

  if (external) {
    return (
      <a className={className} href={href} target="_blank" rel="noreferrer">
        {children}<ArrowIcon />
      </a>
    );
  }

  return <Link className={className} href={href}>{children}<ArrowIcon /></Link>;
}

export function ClosingCta({
  eyebrow = "Take the next step",
  title,
  copy,
  primaryLabel = "Work With Bryt",
  primaryHref = "/work-with-bryt",
  secondaryLabel,
  secondaryHref,
}: {
  eyebrow?: string;
  title: string;
  copy: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="inner-closing">
      <div className="site-shell inner-closing__panel">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p>{copy}</p>
        <div className="button-row button-row--center">
          <ActionLink href={primaryHref}>{primaryLabel}</ActionLink>
          {secondaryLabel && secondaryHref ? (
            <ActionLink href={secondaryHref} secondary>{secondaryLabel}</ActionLink>
          ) : null}
        </div>
      </div>
    </section>
  );
}
