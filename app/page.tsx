import { PageDoodles } from "./components/shared/page-doodles";
import { CardTitle } from "./components/shared/card-title";
import { ClosingCta } from "./components/shared/closing-cta";
import { SectionHeading } from "./components/shared/section-heading";
import { LearningPanel } from "./components/shared/learning-panel";
import { DiscoveryCard } from "./components/shared/discovery-card";
import Image from "next/image";
import Link from "next/link";
import familyLearning from "../public/images/bryt-family-learning.webp";
import { ArrowIcon } from "./components/shared/icons";
import { FloatingWhatsApp, SiteFooter, SiteHeader } from "./components/shared/site-chrome";

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
          <PageDoodles variant={1} />
          <div className="site-shell">
            <SectionHeading layout="center" eyebrow="Why Bryt?" title="We care about the whole child." copy="Because who they become matters as much as what they achieve." />

            <div className="values-grid">
              <LearningPanel variant={0}>
                <p className="eyebrow">Education is bigger than school.</p>
                <CardTitle as="h3">{"Home is where a lifetime of learning begins."}</CardTitle>
                <p>
                  Bryt brings parenting, education, character development and practical life skills together, so families can nurture capable, grounded children.
                </p>
                <ul aria-label="The Bryt approach">
                  <li>Thoughtful parenting</li>
                  <li>Meaningful education</li>
                  <li>Practical guidance</li>
                </ul>
                <Link href="/about">Discover what guides us <ArrowIcon /></Link>
              </LearningPanel>
              {values.map((value) => (
                <LearningPanel variant={values.indexOf(value) + 1} key={value.title}>
                  <div>
                    <p className="eyebrow">{value.label}</p>
                    <CardTitle as="h3">{value.title}</CardTitle>
                    <p>{value.description}</p>
                  </div>
                </LearningPanel>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="services-section section-anchor">
          <PageDoodles variant={2} />
          <div className="site-shell">
            <SectionHeading layout="split" eyebrow="Personalised support" title="How Bryt helps families." copy="Start with the challenge in front of you. We’ll help you find a clear way forward." />

            <div className="services-grid">
              {services.map((service) => (
                <DiscoveryCard key={service.title} eyebrow={service.audience} title={service.title}
                  description={service.description} points={service.outcomes} note={service.idealFor}
                  tone={service.tone} illustration={service.number === "01" ? "connection" : service.number === "02" ? "book" : service.number === "03" ? "growth" : "spark"}
                  href="/services" action="Explore service" />
              ))}
            </div>
          </div>
        </section>

        <section id="programs" className="programs-section section-anchor">
          <PageDoodles variant={0} />
          <div className="site-shell">
            <SectionHeading layout="center" light eyebrow="Programs with purpose" title="Grow together. In your own way." />

            <div className="program-grid">
              <LearningPanel variant={2}>
                <div className="program-copy">
                  <span className="card-tag">For parents</span>
                  <CardTitle as="h3">{"Intentional Homeschooling"}</CardTitle>
                  <p>Build an education around your child’s needs, strengths, character and future, with clarity and confidence.</p>
                  <ul className="program-details">
                    <li>Video and audio lessons</li>
                    <li>Practical exercises</li>
                    <li>Homeschool journal</li>
                  </ul>
                  <Link className="button button--dark" href="/programs/intentional-homeschooling">Explore the course <ArrowIcon /></Link>
                </div>
              </LearningPanel>

              <LearningPanel variant={3}>
                <div className="program-copy">
                  <span className="card-tag">For children</span>
                  <CardTitle as="h3">{"Bryt Leaders"}</CardTitle>
                  <p>A development program for confident communicators, thoughtful leaders and responsible young people.</p>
                  <ul className="program-details">
                    <li>Public speaking</li>
                    <li>Critical thinking</li>
                    <li>Character and habits</li>
                  </ul>
                  <Link className="button button--dark" href="/programs/bryt-leaders">Explore Bryt Leaders <ArrowIcon /></Link>
                </div>
              </LearningPanel>
            </div>
          </div>
        </section>

        <section className="journey-section">
          <PageDoodles variant={1} />
          <div className="site-shell journey-shell">
            <SectionHeading layout="center" eyebrow="Your next step" title="Getting started is simple." />
            <ol className="journey-steps">
              <li><span>01</span><h3>Tell us what matters</h3><p>Share the challenge, goal or change your family is working towards.</p></li>
              <li><span>02</span><h3>Choose your support</h3><p>We’ll help you identify the service or program that fits your needs.</p></li>
              <li><span>03</span><h3>Grow with intention</h3><p>Leave with practical direction you can carry into everyday family life.</p></li>
            </ol>
            <p className="journey-note">Personalised guidance. Clear next steps. No one-size-fits-all answers.</p>
          </div>
        </section>

        <section id="library" className="explore-section section-anchor">
          <PageDoodles variant={2} />
          <div className="site-shell">
            <SectionHeading layout="split" eyebrow="Keep growing" title="More from Bryt." copy="Thoughtful resources and conversations for the everyday work of raising children." />
            <div id="journal" className="explore-grid section-anchor">
              {growthLinks.map((item) => (
                <DiscoveryCard key={item.title} eyebrow={item.eyebrow} title={item.title}
                  description={item.description} points={item.areas} tone={item.tone}
                  illustration={item.mark === "01" ? "book" : item.mark === "02" ? "spark" : "connection"}
                  href={item.href} action="Discover more" compact />
              ))}
            </div>
          </div>
        </section>

        <ClosingCta id="contact" eyebrow="Start your journey"
          title="Ready to raise intentionally?"
          copy="Choose the support your family needs. We’ll take it from there."
          secondaryLabel="Explore Programs" secondaryHref="/programs" />
      </main>

      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  );
}
