import Image from "next/image";
import Link from "next/link";
import familyLearning from "../public/images/bryt-family-learning.webp";
import { ArrowIcon } from "./components/icons";
import { FloatingWhatsApp, SiteFooter, SiteHeader } from "./components/site-chrome";

const services = [
  {
    number: "01",
    audience: "For parents",
    title: "Parent coaching",
    description: "Personalised guidance for parents who want to lead with greater clarity, confidence and intention.",
    outcomes: ["Discipline and boundaries", "Communication and connection", "Routines and good habits"],
    idealFor: "Parents navigating a specific challenge or season",
    tone: "coral",
  },
  {
    number: "02",
    audience: "For home educators",
    title: "Homeschool support",
    description: "Build a thoughtful homeschool experience around your child’s needs, strengths and your family’s goals.",
    outcomes: ["Curriculum and approach", "Learning environment", "Sustainable daily rhythms"],
    idealFor: "Families starting, refining or rethinking homeschool",
    tone: "aqua",
  },
  {
    number: "03",
    audience: "For families",
    title: "Family strategy",
    description: "Turn the values that matter to your family into clear routines, systems and long-term direction.",
    outcomes: ["Shared family values", "Home systems and routines", "Intentional family goals"],
    idealFor: "Families ready to move from good intentions to action",
    tone: "yellow",
  },
  {
    number: "04",
    audience: "For children",
    title: "Child development",
    description: "Practical development that helps children communicate well, think clearly and carry responsibility.",
    outcomes: ["Confidence and public speaking", "Character and leadership", "Reading and critical thinking"],
    idealFor: "Children building essential skills beyond academics",
    tone: "lilac",
  },
] as const;

const values = [
  {
    number: "01",
    title: "Faith",
    label: "A clear moral foundation",
    description: "Strong values and a meaningful sense of purpose shape how children learn, choose and contribute.",
    tone: "blue",
  },
  {
    number: "02",
    title: "Character",
    label: "Who they become matters",
    description: "Responsibility, good habits and manners grow through consistent example and everyday practice.",
    tone: "orange",
  },
  {
    number: "03",
    title: "Confidence",
    label: "Capability with humility",
    description: "Children learn to communicate clearly, take responsibility and keep growing without losing their grounding.",
    tone: "pink",
  },
] as const;

const growthLinks = [
  {
    eyebrow: "Resources",
    title: "The Bryt Library",
    description: "Books, activities and tools for growing minds.",
    href: "/library",
    tone: "aqua",
    mark: "01",
    areas: ["Children’s books", "Activities and printables", "Parenting guides"],
  },
  {
    eyebrow: "Ideas",
    title: "The Bryt Journal",
    description: "Useful thoughts for intentional parents.",
    href: "/journal",
    tone: "coral",
    mark: "02",
    areas: ["Parenting", "Homeschooling", "Islamic Tarbiyah"],
  },
  {
    eyebrow: "Listen",
    title: "TIP Podcast",
    description: "Weekly conversations about raising children well.",
    href: "/the-intentional-parent",
    tone: "yellow",
    mark: "03",
    areas: ["Faith and character", "Education", "Family life"],
  },
] as const;

export default function Home() {
  return (
    <div id="top" className="site-page">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <SiteHeader />

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
                <Link className="button button--primary" href="/services">
                  Explore Services
                  <ArrowIcon />
                </Link>
                <Link className="button button--secondary" href="/programs">
                  Explore Programs
                </Link>
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
                <span className="floating-icon">01</span>
                <span><strong>Growing minds</strong>Curiosity encouraged</span>
              </div>
              <div className="floating-card floating-card--bottom">
                <span className="floating-icon floating-icon--green">02</span>
                <span><strong>Real support</strong>For real family life</span>
              </div>
              <span className="hero-doodle hero-doodle--ring" aria-hidden="true" />
              <span className="hero-doodle hero-doodle--square" aria-hidden="true" />
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
                <p className="value-feature__kicker">Education is bigger than school.</p>
                <h3>Home is where a lifetime of learning begins.</h3>
                <p className="value-feature__body">
                  Bryt brings parenting, education, character development and practical life skills together—so families can nurture capable, grounded children.
                </p>
                <ul className="value-principles" aria-label="The Bryt approach">
                  <li>Thoughtful parenting</li>
                  <li>Meaningful education</li>
                  <li>Practical guidance</li>
                </ul>
                <Link href="/about">Discover what guides us <ArrowIcon /></Link>
              </article>
              {values.map((value) => (
                <article key={value.title} className={`value-card value-card--${value.tone}`}>
                  <span className="value-number">{value.number}</span>
                  <div className="value-card__copy">
                    <p className="value-label">{value.label}</p>
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                  </div>
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
                    <span className="service-audience">{service.audience}</span>
                    <span className="service-number">/{service.number}</span>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="service-includes">
                    <span>Support can include</span>
                    <ul>
                      {service.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}
                    </ul>
                  </div>
                  <div className="service-card__footer">
                    <p><span>Best for</span>{service.idealFor}</p>
                    <Link href="/services" aria-label={`Explore ${service.title}`}>Explore service <ArrowIcon /></Link>
                  </div>
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
                  <span className="program-art__sun" />
                  <span className="program-art__line" />
                </div>
                <div className="program-copy">
                  <span className="card-tag">For parents</span>
                  <h3>Intentional Homeschooling</h3>
                  <p>Build an education around your child’s needs, strengths, character and future—with clarity and confidence.</p>
                  <ul className="program-details">
                    <li>Video and audio lessons</li>
                    <li>Practical exercises</li>
                    <li>Homeschool journal</li>
                  </ul>
                  <Link className="button button--dark" href="/programs/intentional-homeschooling">Explore the course <ArrowIcon /></Link>
                </div>
              </article>

              <article className="program-card program-card--children">
                <div className="program-art program-art--leaders" aria-hidden="true">
                  <span className="speech-bubble">I can!</span>
                  <span className="leader-shape">+</span>
                </div>
                <div className="program-copy">
                  <span className="card-tag">For children</span>
                  <h3>Bryt Leaders</h3>
                  <p>A development program for confident communicators, thoughtful leaders and responsible young people.</p>
                  <ul className="program-details">
                    <li>Public speaking</li>
                    <li>Critical thinking</li>
                    <li>Character and habits</li>
                  </ul>
                  <Link className="button button--dark" href="/programs/bryt-leaders">Explore Bryt Leaders <ArrowIcon /></Link>
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
              <li><span>01</span><h3>Tell us what matters</h3><p>Share the challenge, goal or change your family is working towards.</p></li>
              <li><span>02</span><h3>Choose your support</h3><p>We’ll help you identify the service or program that fits your needs.</p></li>
              <li><span>03</span><h3>Grow with intention</h3><p>Leave with practical direction you can carry into everyday family life.</p></li>
            </ol>
            <p className="journey-note">Personalised guidance. Clear next steps. No one-size-fits-all answers.</p>
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
                <Link key={item.title} className={`explore-card explore-card--${item.tone}`} href={item.href}>
                  <span className="explore-mark" aria-hidden="true">{item.mark}</span>
                  <span className="eyebrow">{item.eyebrow}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <ul className="explore-areas">
                    {item.areas.map((area) => <li key={area}>{area}</li>)}
                  </ul>
                  <span className="explore-arrow"><ArrowIcon /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="final-cta section-anchor">
          <div className="site-shell final-cta__panel">
            <span className="cta-shape cta-shape--one" aria-hidden="true" />
            <span className="cta-shape cta-shape--two" aria-hidden="true" />
            <p className="pill-label pill-label--dark">Start your journey</p>
            <h2>Ready to raise intentionally?</h2>
            <p>Choose the support your family needs. We’ll take it from there.</p>
            <div className="button-row button-row--center">
              <Link className="button button--aqua" href="/work-with-bryt">Work With Bryt <ArrowIcon /></Link>
              <Link className="button button--ghost" href="/programs">Explore Programs</Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  );
}
