import Image from "next/image";
import type { ReactNode } from "react";
import { MobileNavigation } from "./components/mobile-navigation";
import {
  primaryNavigation,
  siteConfig,
  type SiteDestination,
} from "./site-config";

const services = [
  {
    number: "01",
    title: "Parent Coaching",
    description:
      "Personalised guidance for parents navigating real challenges.",
    accent: "pink",
  },
  {
    number: "02",
    title: "Homeschool Consultation",
    description:
      "Practical support for building a more intentional homeschooling journey.",
    accent: "blue",
  },
  {
    number: "03",
    title: "Family Strategy",
    description:
      "Helping families create clearer routines, values and direction.",
    accent: "orange",
  },
  {
    number: "04",
    title: "Child Development Coaching",
    description:
      "Helping children develop communication, confidence, character and leadership.",
    accent: "green",
  },
] as const;

const libraryCategories = [
  "Children’s Books",
  "Parenting Resources",
  "Activities & Printables",
  "Educational Resources",
] as const;

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20">
      <path d="M4 10h11M11 5l5 5-5 5" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="m9 7 8 5-8 5V7Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M20.5 11.8a8.4 8.4 0 0 1-12.4 7.4L3.5 20.5l1.3-4.4a8.4 8.4 0 1 1 15.7-4.3Z" />
      <path d="M8.3 7.8c.2-.4.4-.4.7-.4h.4c.2 0 .3.1.4.4l.7 1.7c.1.2 0 .4-.1.6l-.5.6c-.2.2-.2.4 0 .7.5.9 1.2 1.6 2.1 2.1.3.2.5.2.7 0l.7-.8c.2-.2.4-.3.6-.2l1.8.8c.3.1.4.3.4.5 0 .3-.2 1.4-.9 1.9-.6.5-1.4.7-2.3.5-1.1-.3-2.6-.9-4.2-2.4-1.3-1.2-2.2-2.7-2.5-3.8-.3-.8 0-1.6.3-2.2Z" />
    </svg>
  );
}

function BrandMark({
  variant = "full",
  priority = false,
}: {
  variant?: "full" | "short";
  priority?: boolean;
}) {
  const isFull = variant === "full";

  return (
    <span className={`brand-mark brand-mark--${variant}`}>
      <Image
        src={
          isFull
            ? "/brand/bryt-kids-full.jpeg"
            : "/brand/bryt-short.jpeg"
        }
        alt={isFull ? "Bryt Kids" : "Bryt"}
        width={1280}
        height={1280}
        priority={priority}
        sizes={isFull ? "72px" : "150px"}
      />
    </span>
  );
}

function DestinationLink({
  destination,
  className,
  children,
}: {
  destination: SiteDestination;
  className: string;
  children: ReactNode;
}) {
  if (!destination.href) {
    return (
      <span
        className={`${className} is-disabled`}
        aria-disabled="true"
        title={`${destination.label} will be available soon`}
      >
        {children}
      </span>
    );
  }

  return (
    <a
      className={className}
      href={destination.href}
      target={destination.external ? "_blank" : undefined}
      rel={destination.external ? "noreferrer" : undefined}
    >
      {children}
    </a>
  );
}

function PhotoPlaceholder({
  number,
  description,
  tone,
  className = "",
}: {
  number: string;
  description: string;
  tone: "blue" | "orange" | "green";
  className?: string;
}) {
  return (
    <figure
      className={`photo-placeholder photo-placeholder--${tone} ${className}`}
    >
      <div className="photo-placeholder__image" aria-hidden="true">
        <Image
          src="/images/landscape-web-placeholder.webp"
          alt=""
          fill
          loading="eager"
          unoptimized
          sizes="(max-width: 799px) 100vw, 50vw"
        />
      </div>
      <div className="photo-placeholder__frame" aria-hidden="true" />
      <span className="shape shape--circle" aria-hidden="true" />
      <span className="shape shape--diamond" aria-hidden="true" />
      <span className="photo-placeholder__number">{number}</span>
      <figcaption className="photo-placeholder__caption">
        <span className="photo-placeholder__label">Photography direction</span>
        <p>{description}</p>
      </figcaption>
    </figure>
  );
}

function SectionIntro({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="section-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {copy ? <p className="section-copy">{copy}</p> : null}
    </div>
  );
}

export default function Home() {
  const newsletterEnabled = siteConfig.newsletterAction !== null;
  const configuredSocialLinks = siteConfig.socialLinks.filter(
    (item) => item.href !== null,
  );
  const configuredLegalLinks = siteConfig.legalLinks.filter(
    (item) => item.href !== null,
  );

  return (
    <div id="top" className="site-page">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <header className="site-header">
        <div className="site-shell header-inner">
          <a className="brand-link" href="#top" aria-label="Bryt Kids home">
            <BrandMark priority />
          </a>

          <nav className="desktop-navigation" aria-label="Primary navigation">
            {primaryNavigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a className="header-cta" href="#services">
            Work With Bryt
            <ArrowIcon />
          </a>

          <MobileNavigation items={primaryNavigation} />
        </div>
      </header>

      <main id="main-content">
        <section className="hero" aria-labelledby="hero-title">
          <span className="hero-shape hero-shape--ring" aria-hidden="true" />
          <span className="hero-shape hero-shape--star" aria-hidden="true">
            ✦
          </span>
          <div className="site-shell hero-grid">
            <div className="hero-copy">
              <p className="eyebrow hero-eyebrow">
                Parenting. Education. Character. Growth.
              </p>
              <h1 id="hero-title">
                Raise Your Child <em>Intentionally.</em>
              </h1>
              <p className="hero-lead">
                Helping parents raise children of character and confidence.
              </p>
              <div className="button-row">
                <a className="button button--primary" href="#services">
                  Work With Bryt
                  <ArrowIcon />
                </a>
                <a className="button button--text" href="#programs">
                  Explore Programs
                  <ArrowIcon />
                </a>
              </div>
              <p className="hero-principles">
                <span>Faith</span>
                <span>Character</span>
                <span>Confidence</span>
                <span>Lifelong learning</span>
              </p>
            </div>

            <div className="hero-visual">
              <PhotoPlaceholder
                number="01"
                tone="blue"
                description="A natural, quiet moment of a parent guiding a child at the table."
              />
              <div className="hero-note">
                <BrandMark variant="short" />
                <p>Raise children intentionally.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about-section section-anchor">
          <div className="site-shell about-grid">
            <p className="eyebrow">Why Bryt</p>
            <div className="about-copy">
              <h2>Childhood Is Too Important to Leave to Chance.</h2>
              <div className="about-body">
                <p>
                  The way children learn, think, speak, behave and grow is
                  shaped by the environment we create around them.
                </p>
                <p>
                  Bryt helps parents become more intentional about that
                  environment—and helps children develop the knowledge,
                  character and confidence they need to thrive.
                </p>
              </div>
              <a className="text-link" href="#services">
                Discover Bryt
                <ArrowIcon />
              </a>
            </div>
          </div>
        </section>

        <section id="services" className="services-section section-anchor">
          <div className="site-shell">
            <SectionIntro
              eyebrow="01 — Services"
              title="Personalised Support for Your Family"
              copy="Sometimes you don’t need another article. You need someone to help you think through your situation."
            />

            <div className="services-list">
              {services.map((service) => (
                <article
                  key={service.title}
                  className={`service-row service-row--${service.accent}`}
                >
                  <span className="service-number">{service.number}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <span className="service-mark" aria-hidden="true" />
                </article>
              ))}
            </div>

            <a className="button button--outline" href="#services">
              Explore Services
              <ArrowIcon />
            </a>
          </div>
        </section>

        <section id="programs" className="programs-section section-anchor">
          <div className="site-shell">
            <SectionIntro
              eyebrow="02 — Programs"
              title="Programs That Help Children and Parents Grow"
            />

            <div className="program-features">
              <article className="program-feature program-feature--course">
                <PhotoPlaceholder
                  number="02"
                  tone="orange"
                  description="An authentic homeschooling scene with books, notes and shared concentration."
                />
                <div className="program-feature__copy">
                  <p className="program-kicker">For parents</p>
                  <h3>Intentional Homeschooling Course</h3>
                  <p>
                    A practical framework for parents who want to homeschool
                    with greater clarity, purpose and intention.
                  </p>
                  <a className="text-link" href="#programs">
                    Explore the Course
                    <ArrowIcon />
                  </a>
                </div>
              </article>

              <article className="program-feature program-feature--leaders">
                <div className="program-feature__copy">
                  <p className="program-kicker">For children</p>
                  <h3>Bryt Leaders</h3>
                  <p>
                    Helping children develop communication, confidence,
                    character, leadership and essential life skills.
                  </p>
                  <a className="text-link" href="#programs">
                    Explore Bryt Leaders
                    <ArrowIcon />
                  </a>
                </div>
                <PhotoPlaceholder
                  number="03"
                  tone="green"
                  description="A capable child presenting an idea with confidence to a small group."
                />
              </article>
            </div>

            <a className="button button--primary programs-cta" href="#programs">
              Explore Programs
              <ArrowIcon />
            </a>
          </div>
        </section>

        <section className="philosophy-section">
          <div className="site-shell philosophy-grid">
            <p className="eyebrow eyebrow--light">The Bryt philosophy</p>
            <div>
              <h2>We Believe Education Is Bigger Than School.</h2>
              <p>
                A child’s education happens at the dining table, in
                conversations, through books, in moments of difficulty, in the
                habits we build and in the example we set.
              </p>
              <p className="philosophy-closing">
                At Bryt, we care about the whole child—and the parents raising
                them.
              </p>
            </div>
            <span className="philosophy-orbit" aria-hidden="true" />
            <span className="philosophy-cross" aria-hidden="true">
              +
            </span>
          </div>
        </section>

        <section className="tip-section">
          <div className="site-shell tip-grid">
            <div className="tip-visual">
              <PhotoPlaceholder
                number="04"
                tone="orange"
                description="A parent listening and reflecting in a calm, lived-in family space."
              />
              <div className="tip-monogram" aria-hidden="true">
                <span>T</span>
                <span>I</span>
                <span>P</span>
              </div>
            </div>
            <div className="tip-copy">
              <p className="eyebrow">TIP — The Intentional Parent</p>
              <h2>The Weekly Conversation for Intentional Parents.</h2>
              <p>
                Honest conversations, thoughtful ideas and practical wisdom
                for navigating the beautiful responsibility of raising
                children.
              </p>
              <a className="button button--navy" href="#journal">
                <span className="play-icon">
                  <PlayIcon />
                </span>
                Listen to TIP
              </a>
            </div>
          </div>
        </section>

        <section id="library" className="library-section section-anchor">
          <div className="site-shell library-grid">
            <div>
              <SectionIntro
                eyebrow="03 — The Bryt Library"
                title="Resources for Growing Minds"
                copy="Explore books, activities, guides and educational resources created to help children learn and parents lead with intention."
              />
              <ol className="library-list">
                {libraryCategories.map((category, index) => (
                  <li key={category}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {category}
                  </li>
                ))}
              </ol>
              <a className="button button--outline" href="#library">
                Explore the Bryt Library
                <ArrowIcon />
              </a>
            </div>
            <PhotoPlaceholder
              className="library-photo"
              number="05"
              tone="blue"
              description="A warm still life of children’s books, learning materials and thoughtful resources."
            />
          </div>
        </section>

        <section id="journal" className="journal-section section-anchor">
          <div className="site-shell journal-grid">
            <div>
              <p className="eyebrow">04 — The Bryt Journal</p>
              <h2>Ideas Worth Thinking About</h2>
            </div>
            <div className="journal-copy">
              <p>
                Thoughtful writing on parenting, homeschooling, education,
                child development, family life and raising children
                intentionally.
              </p>
              <a className="button button--primary" href="#journal">
                Read the Journal
                <ArrowIcon />
              </a>
            </div>
            <PhotoPlaceholder
              className="journal-photo"
              number="06"
              tone="green"
              description="An unhurried family learning moment with natural light and room to think."
            />
            <div className="journal-rule" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
          </div>
        </section>

        <section className="testimonials-section" aria-labelledby="testimonials-title">
          <div className="site-shell">
            <div className="testimonials-heading">
              <div>
                <p className="eyebrow">Parent stories</p>
                <h2 id="testimonials-title">What Parents Are Saying</h2>
              </div>
              <p className="placeholder-notice">
                Layout preview — replace with approved parent feedback before
                publication.
              </p>
            </div>
            <div className="testimonial-placeholders">
              {["Parent coaching", "Course participant", "Bryt Leaders"].map(
                (source, index) => (
                  <article key={source} className="testimonial-placeholder">
                    <span className="placeholder-chip">Placeholder</span>
                    <span className="quote-mark" aria-hidden="true">
                      “
                    </span>
                    <p>Approved parent quote will appear here.</p>
                    <footer>
                      <span>Parent name</span>
                      <span>{source}</span>
                    </footer>
                    <span className="testimonial-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </article>
                ),
              )}
            </div>
          </div>
        </section>

        <section className="community-section">
          <div className="site-shell community-grid">
            <span className="community-star" aria-hidden="true">
              ✦
            </span>
            <div>
              <p className="eyebrow">The Bryt community</p>
              <h2>You Don’t Have to Raise Alone.</h2>
            </div>
            <div className="community-copy">
              <p>
                Join the Bryt community for thoughtful conversations, practical
                guidance, new resources and parents committed to raising
                children intentionally.
              </p>
              <DestinationLink
                destination={siteConfig.community}
                className="button button--navy"
              >
                Join the Community
                <ArrowIcon />
              </DestinationLink>
              {!siteConfig.community.href ? (
                <p className="availability-note">
                  Community link will be available soon.
                </p>
              ) : null}
            </div>
          </div>
        </section>

        <section className="final-cta-section">
          <div className="site-shell final-cta-inner">
            <span className="final-shape final-shape--triangle" aria-hidden="true" />
            <span className="final-shape final-shape--square" aria-hidden="true" />
            <p className="eyebrow">Your next step</p>
            <h2>Ready to Raise Intentionally?</h2>
            <p>
              Start where you are. Choose the support your family needs and
              take the next step with Bryt.
            </p>
            <div className="button-row button-row--centered">
              <a className="button button--primary" href="#services">
                Work With Bryt
                <ArrowIcon />
              </a>
              <a className="button button--text" href="#programs">
                Explore Programs
                <ArrowIcon />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-shell newsletter-grid">
          <div>
            <p className="eyebrow eyebrow--light">Stay thoughtful</p>
            <h2>A Little Bryt in Your Inbox.</h2>
          </div>
          <div>
            <p>
              Thoughtful parenting ideas, useful resources and the latest from
              Bryt.
            </p>
            <form
              className="newsletter-form"
              action={siteConfig.newsletterAction ?? undefined}
              method="post"
              aria-describedby={
                newsletterEnabled ? undefined : "newsletter-status"
              }
            >
              <label htmlFor="newsletter-email">Your email address</label>
              <div className="newsletter-control">
                <input
                  id="newsletter-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  required
                  disabled={!newsletterEnabled}
                />
                <button type="submit" disabled={!newsletterEnabled}>
                  Join Bryt
                  <ArrowIcon />
                </button>
              </div>
              {!newsletterEnabled ? (
                <p id="newsletter-status" className="footer-status">
                  Email signup is being prepared.
                </p>
              ) : null}
            </form>
          </div>
        </div>

        <div className="site-shell footer-main">
          <div className="footer-brand">
            <BrandMark />
            <p>
              Helping parents raise children of faith, character, confidence
              and lifelong learning.
            </p>
          </div>
          <nav className="footer-navigation" aria-label="Footer navigation">
            <p>Explore</p>
            {primaryNavigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
            <a href="#journal">TIP: The Intentional Parent</a>
          </nav>

          {configuredSocialLinks.length > 0 ? (
            <nav className="footer-navigation" aria-label="Social links">
              <p>Connect</p>
              {configuredSocialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href ?? undefined}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          ) : null}
        </div>

        <div className="site-shell footer-bottom">
          <p>© {new Date().getFullYear()} Bryt Kids. Raise Children Intentionally.</p>
          {configuredLegalLinks.length > 0 ? (
            <nav aria-label="Legal links">
              {configuredLegalLinks.map((item) => (
                <a key={item.label} href={item.href ?? undefined}>
                  {item.label}
                </a>
              ))}
            </nav>
          ) : (
            <p>Legal pages are being prepared.</p>
          )}
        </div>
      </footer>

      <DestinationLink
        destination={siteConfig.whatsapp}
        className="whatsapp-button"
      >
        <WhatsAppIcon />
        <span>Chat with Bryt</span>
      </DestinationLink>
    </div>
  );
}
