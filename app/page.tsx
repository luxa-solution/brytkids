import { siteAssets } from "./asset-config";
import { BrandArtwork, BrandMark } from "./components/brand-mark";
import { DestinationLink } from "./components/destination-link";
import { EditorialMedia } from "./components/editorial-media";
import { ArrowIcon, PlayIcon, WhatsAppIcon } from "./components/icons";
import { MobileNavigation } from "./components/mobile-navigation";
import { SectionIntro } from "./components/section-intro";
import { content, resolveContentLabel } from "./content";
import { siteConfig } from "./site-config";

export default function Home() {
  const copy = content.home;
  const labels = content.common;
  const primaryNavigation = content.navigation.primary;
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
        {content.accessibility.skipToContent}
      </a>

      <header className="site-header">
        <div className="site-shell header-inner">
          <a
            className="brand-link"
            href="#top"
            aria-label={content.site.homeLabel}
          >
            <BrandMark alt={content.site.logoAlt} priority />
          </a>

          <nav
            className="desktop-navigation"
            aria-label={content.accessibility.primaryNavigation}
          >
            {primaryNavigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a className="header-cta" href="#services">
            {labels.workWithBryt}
            <ArrowIcon />
          </a>

          <MobileNavigation
            items={primaryNavigation}
            labels={{
              open: content.accessibility.openNavigation,
              close: content.accessibility.closeNavigation,
              landmark: content.accessibility.mobileNavigation,
              cta: content.navigation.mobileCta,
            }}
          />
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
                {copy.hero.eyebrow}
              </p>
              <h1 id="hero-title">
                {copy.hero.titleStart} <em>{copy.hero.titleEmphasis}</em>
              </h1>
              <p className="hero-lead">{copy.hero.lead}</p>
              <div className="button-row">
                <a className="button button--primary" href="#services">
                  {labels.workWithBryt}
                  <ArrowIcon />
                </a>
                <a className="button button--text" href="#programs">
                  {labels.explorePrograms}
                  <ArrowIcon />
                </a>
              </div>
              <p className="hero-principles">
                {copy.hero.principles.map((principle) => (
                  <span key={principle}>{principle}</span>
                ))}
              </p>
            </div>

            <div className="hero-visual">
              <EditorialMedia
                asset={siteAssets.editorial.photographyPlaceholder}
                number="01"
                tone="blue"
                label={labels.photographyDirection}
                description={copy.hero.media}
              />
              <div className="hero-note">
                <BrandArtwork asset={siteAssets.editorial.brytArtwork} />
                <p>{copy.hero.note}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about-section section-anchor">
          <div className="site-shell about-grid">
            <p className="eyebrow">{copy.about.eyebrow}</p>
            <div className="about-copy">
              <h2>{copy.about.title}</h2>
              <div className="about-body">
                {copy.about.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <a className="text-link" href="#services">
                {copy.about.cta}
                <ArrowIcon />
              </a>
            </div>
          </div>
        </section>

        <section id="services" className="services-section section-anchor">
          <div className="site-shell">
            <SectionIntro
              eyebrow={copy.services.eyebrow}
              title={copy.services.title}
              copy={copy.services.copy}
            />

            <div className="services-list">
              {copy.services.items.map((service) => (
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
              {copy.services.cta}
              <ArrowIcon />
            </a>
          </div>
        </section>

        <section id="programs" className="programs-section section-anchor">
          <div className="site-shell">
            <SectionIntro
              eyebrow={copy.programs.eyebrow}
              title={copy.programs.title}
            />

            <div className="program-features">
              {copy.programs.items.map((program) => {
                const media = (
                  <EditorialMedia
                    asset={siteAssets.editorial.photographyPlaceholder}
                    number={program.mediaNumber}
                    tone={program.tone}
                    label={labels.photographyDirection}
                    description={program.media}
                  />
                );
                const programCopy = (
                  <div className="program-feature__copy">
                    <p className="program-kicker">{program.audience}</p>
                    <h3>{program.title}</h3>
                    <p>{program.description}</p>
                    <a className="text-link" href="#programs">
                      {program.cta}
                      <ArrowIcon />
                    </a>
                  </div>
                );

                return (
                  <article
                    key={program.title}
                    className={`program-feature ${program.className}`}
                  >
                    {program.mediaFirst ? media : programCopy}
                    {program.mediaFirst ? programCopy : media}
                  </article>
                );
              })}
            </div>

            <a className="button button--primary programs-cta" href="#programs">
              {copy.programs.cta}
              <ArrowIcon />
            </a>
          </div>
        </section>

        <section className="philosophy-section">
          <div className="site-shell philosophy-grid">
            <p className="eyebrow eyebrow--light">{copy.philosophy.eyebrow}</p>
            <div>
              <h2>{copy.philosophy.title}</h2>
              <p>{copy.philosophy.copy}</p>
              <p className="philosophy-closing">{copy.philosophy.closing}</p>
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
              <EditorialMedia
                asset={siteAssets.editorial.photographyPlaceholder}
                number="04"
                tone="orange"
                label={labels.photographyDirection}
                description={copy.tip.media}
              />
              <div className="tip-monogram" aria-hidden="true">
                <span>T</span>
                <span>I</span>
                <span>P</span>
              </div>
            </div>
            <div className="tip-copy">
              <p className="eyebrow">{copy.tip.eyebrow}</p>
              <h2>{copy.tip.title}</h2>
              <p>{copy.tip.copy}</p>
              <a className="button button--navy" href="#journal">
                <span className="play-icon">
                  <PlayIcon />
                </span>
                {copy.tip.cta}
              </a>
            </div>
          </div>
        </section>

        <section id="library" className="library-section section-anchor">
          <div className="site-shell library-grid">
            <div>
              <SectionIntro
                eyebrow={copy.library.eyebrow}
                title={copy.library.title}
                copy={copy.library.copy}
              />
              <ol className="library-list">
                {copy.library.categories.map((category, index) => (
                  <li key={category}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {category}
                  </li>
                ))}
              </ol>
              <a className="button button--outline" href="#library">
                {copy.library.cta}
                <ArrowIcon />
              </a>
            </div>
            <EditorialMedia
              asset={siteAssets.editorial.photographyPlaceholder}
              className="library-photo"
              number="05"
              tone="blue"
              label={labels.photographyDirection}
              description={copy.library.media}
            />
          </div>
        </section>

        <section id="journal" className="journal-section section-anchor">
          <div className="site-shell journal-grid">
            <div>
              <p className="eyebrow">{copy.journal.eyebrow}</p>
              <h2>{copy.journal.title}</h2>
            </div>
            <div className="journal-copy">
              <p>{copy.journal.copy}</p>
              <a className="button button--primary" href="#journal">
                {copy.journal.cta}
                <ArrowIcon />
              </a>
            </div>
            <EditorialMedia
              asset={siteAssets.editorial.brytKidsArtwork}
              className="journal-photo"
              number="06"
              tone="green"
              label={copy.journal.mediaLabel}
              description={copy.journal.media}
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
                <p className="eyebrow">{copy.testimonials.eyebrow}</p>
                <h2 id="testimonials-title">{copy.testimonials.title}</h2>
              </div>
              <p className="placeholder-notice">{copy.testimonials.notice}</p>
            </div>
            <div className="testimonial-placeholders">
              {copy.testimonials.items.map((testimonial, index) => (
                <article
                  key={testimonial.source}
                  className="testimonial-placeholder"
                >
                  <span className="placeholder-chip">
                    {copy.testimonials.placeholderLabel}
                  </span>
                  <span className="quote-mark" aria-hidden="true">
                    “
                  </span>
                  <p>{testimonial.quote}</p>
                  <footer>
                    <span>{testimonial.author}</span>
                    <span>{testimonial.source}</span>
                  </footer>
                  <span className="testimonial-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="community-section">
          <div className="site-shell community-grid">
            <span className="community-star" aria-hidden="true">
              ✦
            </span>
            <div>
              <p className="eyebrow">{copy.community.eyebrow}</p>
              <h2>{copy.community.title}</h2>
            </div>
            <div className="community-copy">
              <p>{copy.community.copy}</p>
              <DestinationLink
                destination={siteConfig.community}
                className="button button--navy"
                disabledTitle={copy.community.unavailable}
              >
                {copy.community.cta}
                <ArrowIcon />
              </DestinationLink>
              {!siteConfig.community.href ? (
                <p className="availability-note">
                  {copy.community.unavailable}
                </p>
              ) : null}
            </div>
          </div>
        </section>

        <section className="final-cta-section">
          <div className="site-shell final-cta-inner">
            <span className="final-shape final-shape--triangle" aria-hidden="true" />
            <span className="final-shape final-shape--square" aria-hidden="true" />
            <p className="eyebrow">{copy.finalCta.eyebrow}</p>
            <h2>{copy.finalCta.title}</h2>
            <p>{copy.finalCta.copy}</p>
            <div className="button-row button-row--centered">
              <a className="button button--primary" href="#services">
                {labels.workWithBryt}
                <ArrowIcon />
              </a>
              <a className="button button--text" href="#programs">
                {labels.explorePrograms}
                <ArrowIcon />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-shell newsletter-grid">
          <div>
            <p className="eyebrow eyebrow--light">{copy.newsletter.eyebrow}</p>
            <h2>{copy.newsletter.title}</h2>
          </div>
          <div>
            <p>{copy.newsletter.copy}</p>
            <form
              className="newsletter-form"
              action={siteConfig.newsletterAction ?? undefined}
              method="post"
              aria-describedby={
                newsletterEnabled ? undefined : "newsletter-status"
              }
            >
              <label htmlFor="newsletter-email">{copy.newsletter.label}</label>
              <div className="newsletter-control">
                <input
                  id="newsletter-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder={copy.newsletter.placeholder}
                  required
                  disabled={!newsletterEnabled}
                />
                <button type="submit" disabled={!newsletterEnabled}>
                  {copy.newsletter.cta}
                  <ArrowIcon />
                </button>
              </div>
              {!newsletterEnabled ? (
                <p id="newsletter-status" className="footer-status">
                  {copy.newsletter.unavailable}
                </p>
              ) : null}
            </form>
          </div>
        </div>

        <div className="site-shell footer-main">
          <div className="footer-brand">
            <BrandMark alt={content.site.logoAlt} />
            <p>{copy.footer.tagline}</p>
          </div>
          <nav
            className="footer-navigation"
            aria-label={content.accessibility.footerNavigation}
          >
            <p>{content.navigation.footerHeading}</p>
            {primaryNavigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
            <a href="#journal">{content.navigation.tip}</a>
          </nav>

          {configuredSocialLinks.length > 0 ? (
            <nav
              className="footer-navigation"
              aria-label={content.accessibility.socialLinks}
            >
              <p>{content.navigation.connectHeading}</p>
              {configuredSocialLinks.map((item) => (
                <a
                  key={item.key}
                  href={item.href ?? undefined}
                  target="_blank"
                  rel="noreferrer"
                >
                  {resolveContentLabel(copy.footer.socialLabels, item.key)}
                </a>
              ))}
            </nav>
          ) : null}
        </div>

        <div className="site-shell footer-bottom">
          <p>
            © {new Date().getFullYear()} {copy.footer.copyrightSuffix}
          </p>
          {configuredLegalLinks.length > 0 ? (
            <nav aria-label={content.accessibility.legalLinks}>
              {configuredLegalLinks.map((item) => (
                <a key={item.key} href={item.href ?? undefined}>
                  {resolveContentLabel(copy.footer.legalLabels, item.key)}
                </a>
              ))}
            </nav>
          ) : (
            <p>{copy.footer.legalUnavailable}</p>
          )}
        </div>
      </footer>

      <DestinationLink
        destination={siteConfig.whatsapp}
        className="whatsapp-button"
        disabledTitle={copy.whatsapp}
        statusLabel={labels.soon}
      >
        <WhatsAppIcon />
        <span>{copy.whatsapp}</span>
      </DestinationLink>
    </div>
  );
}
