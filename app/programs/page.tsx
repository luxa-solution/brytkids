import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "../components/icons";
import { ClosingCta, ContentHeading, InteriorHero } from "../components/interior-page";
import { PageFrame } from "../components/site-chrome";

export const metadata: Metadata = {
  title: "Programs | Bryt Kids",
  description: "Thoughtful Bryt Kids programs for intentional parents and capable children.",
};

export default function ProgramsPage() {
  return (
    <PageFrame>
      <main id="main-content" className="inner-page">
        <InteriorHero
          eyebrow="Programs"
          title="Programs for"
          titleAccent="Growing Families"
          lead="Thoughtfully designed experiences that help children grow and parents become more intentional."
          accent="orange"
          primaryAction={{ label: "For Parents", href: "/programs/intentional-homeschooling" }}
          secondaryAction={{ label: "For Children", href: "/programs/bryt-leaders" }}
          points={["Purposeful", "Practical", "Growth-focused"]}
          topNote={{ label: "Parent learning", copy: "Lead home with clarity" }}
          bottomNote={{ label: "Child development", copy: "Skills beyond school" }}
        />

        <section className="inner-section">
          <div className="site-shell">
            <ContentHeading
              eyebrow="Choose your path"
              title="Practical learning that reaches beyond the lesson."
              copy="Each program turns thoughtful ideas into tools, habits and skills your family can keep using."
            />
            <div className="program-page-grid">
              <article className="program-page-card program-page-card--aqua">
                <span>For parents</span>
                <p className="program-page-card__number">01</p>
                <h2>Intentional Homeschooling</h2>
                <p>Learn how to understand your child, shape a meaningful learning environment and build a homeschool system that works for your family.</p>
                <ul><li>Your child</li><li>Your philosophy</li><li>Your family rhythm</li></ul>
                <Link href="/programs/intentional-homeschooling">Explore Intentional Homeschooling <ArrowIcon /></Link>
              </article>
              <article className="program-page-card program-page-card--orange">
                <span>For children</span>
                <p className="program-page-card__number">02</p>
                <h2>Bryt Leaders</h2>
                <p>A child-development program designed to build communication, confidence, character and practical leadership skills.</p>
                <ul><li>Think clearly</li><li>Speak confidently</li><li>Lead responsibly</li></ul>
                <Link href="/programs/bryt-leaders">Explore Bryt Leaders <ArrowIcon /></Link>
              </article>
            </div>
          </div>
        </section>

        <ClosingCta
          eyebrow="One intentional goal"
          title="Prepared for life—not just the classroom."
          copy="Different children need different paths. Find the program that meets your family where you are."
          secondaryLabel="Talk to Bryt"
          secondaryHref="/contact"
        />
      </main>
    </PageFrame>
  );
}
