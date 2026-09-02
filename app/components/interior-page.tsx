import Image from "next/image";
import Link from "next/link";
import familyLearning from "../../public/images/bryt-family-learning.webp";
import { ArrowIcon } from "./icons";

type HeroAction = {
  label: string;
  href: string;
  external?: boolean;
};

type HeroNote = {
  label: string;
  copy: string;
};

export function InteriorHero({
  eyebrow,
  title,
  titleAccent,
  lead,
  accent = "aqua",
  aside,
  primaryAction,
  secondaryAction,
  points = [],
  topNote = { label: "Thoughtful guidance", copy: "For real family life" },
  bottomNote = { label: "Practical support", copy: "Clear next steps" },
}: {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  lead: string;
  accent?: "aqua" | "orange" | "pink" | "yellow";
  aside?: React.ReactNode;
  primaryAction?: HeroAction;
  secondaryAction?: HeroAction;
  points?: readonly string[];
  topNote?: HeroNote;
  bottomNote?: HeroNote;
}) {
  return (
    <section className={`inner-hero inner-hero--${accent}`}>
      <div className="site-shell inner-hero__grid">
        <div className="inner-hero__copy">
          <p className="pill-label">{eyebrow}</p>
          <h1>
            {title}
            {titleAccent ? <><br /><span>{titleAccent}</span></> : null}
          </h1>
          <p className="inner-hero__lead">{lead}</p>
          {primaryAction || secondaryAction ? (
            <div className="button-row inner-hero__actions">
              {primaryAction ? (
                <ActionLink href={primaryAction.href} external={primaryAction.external}>
                  {primaryAction.label}
                </ActionLink>
              ) : null}
              {secondaryAction ? (
                <ActionLink href={secondaryAction.href} external={secondaryAction.external} secondary>
                  {secondaryAction.label}
                </ActionLink>
              ) : null}
            </div>
          ) : null}
          {points.length ? (
            <div className="hero-points inner-hero__points" aria-label={`${eyebrow} highlights`}>
              {points.map((point, index) => (
                <span key={point}><i className={`dot inner-hero__dot inner-hero__dot--${index + 1}`} />{point}</span>
              ))}
            </div>
          ) : null}
        </div>
        <div className="inner-hero__visual">
          {aside ?? (
            <>
              <div className="inner-hero__image">
                <Image
                  src={familyLearning}
                  alt="A male teacher supporting a male student as he writes in a blank notebook"
                  fill
                  priority
                  sizes="(max-width: 980px) 86vw, 42vw"
                />
              </div>
              <div className="inner-hero__note inner-hero__note--top">
                <span>01</span>
                <p><strong>{topNote.label}</strong>{topNote.copy}</p>
              </div>
              <div className="inner-hero__note inner-hero__note--bottom">
                <span>02</span>
                <p><strong>{bottomNote.label}</strong>{bottomNote.copy}</p>
              </div>
              <span className="inner-hero__shape inner-hero__shape--ring" aria-hidden="true" />
              <span className="inner-hero__shape inner-hero__shape--tile" aria-hidden="true" />
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
