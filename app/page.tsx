import Image from "next/image";
import familyLearning from "../public/images/bryt-family-learning.webp";
import { BrandMark } from "./components/brand-mark";
import { DestinationLink } from "./components/destination-link";
import { ArrowIcon, WhatsAppIcon } from "./components/icons";
import { MobileNavigation } from "./components/mobile-navigation";
import { content } from "./content";
import { siteConfig } from "./site-config";

const services = [
  {
    number: "01",
    title: "Parent coaching",
    description: "Clear, personal guidance for real family challenges.",
    tone: "coral",
    icon: "heart",
  },
  {
    number: "02",
    title: "Homeschool support",
    description: "Build a learning rhythm that fits your child and home.",
    tone: "aqua",
    icon: "book",
  },
  {
    number: "03",
    title: "Family strategy",
    description: "Bring more purpose to your routines, values and goals.",
    tone: "yellow",
    icon: "home",
  },
  {
    number: "04",
    title: "Child development",
    description: "Grow confidence, character, communication and leadership.",
    tone: "lilac",
    icon: "spark",
  },
] as const;

const values = [
  { title: "Faith", label: "Strong foundations", tone: "blue" },
  { title: "Character", label: "Values in action", tone: "orange" },
  { title: "Confidence", label: "A voice of their own", tone: "pink" },
] as const;

const growthLinks = [
  {
    eyebrow: "Resources",
    title: "The Bryt Library",
    description: "Books, activities and tools for growing minds.",
    href: "#library",
    tone: "aqua",
    mark: "B",
  },
  {
    eyebrow: "Ideas",
    title: "The Bryt Journal",
    description: "Useful thoughts for intentional parents.",
    href: "#journal",
    tone: "coral",
    mark: "J",
  },
  {
    eyebrow: "Listen",
    title: "TIP Podcast",
    description: "Weekly conversations about raising children well.",
    href: "#journal",
    tone: "yellow",
    mark: "▶",
  },
] as const;

function CardIcon({ name }: { name: (typeof services)[number]["icon"] }) {
  if (name === "heart") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.8A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z" />
      </svg>
    );
  }

  if (name === "book") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 5.5A3.5 3.5 0 0 1 7.5 2H11v17H7.5A3.5 3.5 0 0 0 4 22V5.5ZM20 5.5A3.5 3.5 0 0 0 16.5 2H13v17h3.5A3.5 3.5 0 0 1 20 22V5.5Z" />
      </svg>
    );
  }

  if (name === "home") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m3 11 9-8 9 8v10h-6v-6H9v6H3V11Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m12 2 1.7 6.3L20 10l-6.3 1.7L12 18l-1.7-6.3L4 10l6.3-1.7L12 2Zm7 14 .8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z" />
    </svg>
  );
}

export default function Home() {
  const navigation = content.navigation.primary;

  return (
    <div id="top" className="site-page">
      <a className="skip-link" href="#main-content">
        {content.accessibility.skipToContent}
      </a>

      <div className="announcement">
        <span aria-hidden="true">✦</span>
        Raising capable children starts with intentional choices.
      </div>

      <header className="site-header">
        <div className="site-shell header-pill">
          <a className="brand-link" href="#top" aria-label={content.site.homeLabel}>
            <BrandMark alt="" priority />
            <span>Bryt Kids</span>
          </a>

          <nav className="desktop-navigation" aria-label={content.accessibility.primaryNavigation}>
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a className="button button--small button--primary header-cta" href="#contact">
            Work With Bryt
            <ArrowIcon />
          </a>

          <MobileNavigation
            items={navigation}
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
          <div className="site-shell hero-grid">
            <div className="hero-copy">
              <p className="pill-label">Parenting · Education · Growth</p>
              <h1 id="hero-title">
                Raise your child <span>intentionally.</span>
              </h1>
              <p className="hero-lead">
                Practical support for raising children of faith, character and confidence.
              </p>
              <div className="button-row">
                <a className="button button--primary" href="#services">
                  Explore Services
                  <ArrowIcon />
                </a>
                <a className="button button--secondary" href="#programs">
                  Explore Programs
                </a>
              </div>
              <div className="hero-points" aria-label="Bryt Kids values">
                <span><i className="dot dot--blue" />Faith-led</span>
                <span><i className="dot dot--orange" />Whole-child</span>
                <span><i className="dot dot--green" />Family-first</span>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-blob">
                <Image
                  src={familyLearning}
                  alt="A parent guiding a child's hand as the child writes in a notebook"
                  priority
                  fill
                  sizes="(max-width: 820px) 92vw, 46vw"
                />
              </div>
              <div className="floating-card floating-card--top">
                <span className="floating-icon">✦</span>
                <span><strong>Growing minds</strong>Curiosity encouraged</span>
              </div>
              <div className="floating-card floating-card--bottom">
                <span className="floating-icon floating-icon--green">✓</span>
                <span><strong>Real support</strong>For real family life</span>
              </div>
              <span className="hero-doodle hero-doodle--ring" aria-hidden="true" />
              <span className="hero-doodle hero-doodle--star" aria-hidden="true">✦</span>
            </div>
          </div>
          <div className="wave" aria-hidden="true" />
        </section>

        <section id="about" className="values-section section-anchor">
          <div className="site-shell">
            <div className="section-heading section-heading--center">
              <p className="eyebrow">Why Bryt?</p>
              <h2>We care about the whole child.</h2>
              <p>Because who they become matters as much as what they achieve.</p>
            </div>

            <div className="values-grid">
              <article className="value-feature">
                <div className="value-orbit" aria-hidden="true"><span>B</span></div>
                <p>Education is bigger than school.</p>
                <h3>Home is where a lifetime of learning begins.</h3>
                <a href="#services">See how we help <ArrowIcon /></a>
              </article>
              {values.map((value) => (
                <article key={value.title} className={`value-card value-card--${value.tone}`}>
                  <span className="value-symbol" aria-hidden="true">✦</span>
                  <div><h3>{value.title}</h3><p>{value.label}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="services-section section-anchor">
          <div className="site-shell">
            <div className="section-heading section-heading--split">
              <div><p className="eyebrow">Personalised support</p><h2>How Bryt helps families.</h2></div>
              <p>Start with the challenge in front of you. We’ll help you find a clear way forward.</p>
            </div>

            <div className="services-grid">
              {services.map((service) => (
                <article key={service.title} className={`service-card service-card--${service.tone}`}>
                  <div className="service-card__top">
                    <span className="service-icon"><CardIcon name={service.icon} /></span>
                    <span className="service-number">{service.number}</span>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a href="#contact" aria-label={`Ask about ${service.title}`}><ArrowIcon /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="programs" className="programs-section section-anchor">
          <div className="site-shell">
            <div className="section-heading section-heading--center section-heading--light">
              <p className="eyebrow">Programs with purpose</p>
              <h2>Grow together. In your own way.</h2>
            </div>

            <div className="program-grid">
              <article className="program-card program-card--parents">
                <div className="program-art" aria-hidden="true">
                  <span className="program-art__book" />
                  <span className="program-art__sun">✦</span>
                  <span className="program-art__line" />
                </div>
                <div className="program-copy">
                  <span className="card-tag">For parents</span>
                  <h3>Intentional Homeschooling</h3>
                  <p>A clear, practical framework for learning with purpose at home.</p>
                  <a className="button button--dark" href="#contact">Explore the course <ArrowIcon /></a>
                </div>
              </article>

              <article className="program-card program-card--children">
                <div className="program-art program-art--leaders" aria-hidden="true">
                  <span className="speech-bubble">I can!</span>
                  <span className="leader-shape">★</span>
                </div>
                <div className="program-copy">
                  <span className="card-tag">For children</span>
                  <h3>Bryt Leaders</h3>
                  <p>Communication, confidence, character and leadership for life.</p>
                  <a className="button button--dark" href="#contact">Explore Bryt Leaders <ArrowIcon /></a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="journey-section">
          <div className="site-shell journey-shell">
            <div className="section-heading section-heading--center">
              <p className="eyebrow">Your next step</p>
              <h2>Getting started is simple.</h2>
            </div>
            <ol className="journey-steps">
              <li><span>01</span><h3>Tell us what matters</h3><p>Share your family’s goal.</p></li>
              <li><span>02</span><h3>Choose your support</h3><p>Find the right service or program.</p></li>
              <li><span>03</span><h3>Grow with intention</h3><p>Take the next clear step together.</p></li>
            </ol>
          </div>
        </section>

        <section id="library" className="explore-section section-anchor">
          <div className="site-shell">
            <div className="section-heading section-heading--split">
              <div><p className="eyebrow">Keep growing</p><h2>More from Bryt.</h2></div>
              <p>Thoughtful resources and conversations for the everyday work of raising children.</p>
            </div>
            <div id="journal" className="explore-grid section-anchor">
              {growthLinks.map((item) => (
                <a key={item.title} className={`explore-card explore-card--${item.tone}`} href={item.href}>
                  <span className="explore-mark" aria-hidden="true">{item.mark}</span>
                  <span className="eyebrow">{item.eyebrow}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <span className="explore-arrow"><ArrowIcon /></span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="final-cta section-anchor">
          <div className="site-shell final-cta__panel">
            <span className="cta-shape cta-shape--one" aria-hidden="true" />
            <span className="cta-shape cta-shape--two" aria-hidden="true">✦</span>
            <p className="pill-label pill-label--dark">Start your journey</p>
            <h2>Ready to raise intentionally?</h2>
            <p>Choose the support your family needs. We’ll take it from there.</p>
            <div className="button-row button-row--center">
              <a className="button button--aqua" href="#services">Work With Bryt <ArrowIcon /></a>
              <a className="button button--ghost" href="#programs">Explore Programs</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-shell footer-grid">
          <div className="footer-brand">
            <a className="brand-link brand-link--footer" href="#top">
              <BrandMark alt="" />
              <span>Bryt Kids</span>
            </a>
            <p>Faith. Character. Confidence. Lifelong learning.</p>
          </div>
          <nav className="footer-links" aria-label={content.accessibility.footerNavigation}>
            <p>Explore</p>
            {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          </nav>
          <div className="footer-note">
            <p className="eyebrow eyebrow--light">A little Bryt in your inbox</p>
            <h2>Thoughtful ideas.<br />No noise.</h2>
            <span>Newsletter coming soon.</span>
          </div>
        </div>
        <div className="site-shell footer-bottom">
          <p>© {new Date().getFullYear()} Bryt Kids</p>
          <p>Raise Children Intentionally.</p>
        </div>
      </footer>

      <DestinationLink
        destination={siteConfig.whatsapp}
        className="whatsapp-button"
        disabledTitle="Bryt WhatsApp will be available soon."
        statusLabel="Soon"
      >
        <WhatsAppIcon />
        <span>Chat with Bryt</span>
      </DestinationLink>
    </div>
  );
}
