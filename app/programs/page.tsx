import { PageDoodles } from "../components/shared/page-doodles";
import { CardTitle } from "../components/shared/card-title";
import { LearningPanel } from "../components/shared/learning-panel";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "../components/shared/icons";
import { ClosingCta, ContentHeading, InteriorHero } from "../components/shared/interior-page";
import { PageFrame } from "../components/shared/site-chrome";
import { heroImages } from "../hero-images";

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
          image={heroImages.programs}
          accent="orange"
          primaryAction={{ label: "For Parents", href: "/programs/intentional-homeschooling" }}
          secondaryAction={{ label: "For Children", href: "/programs/bryt-leaders" }}
          points={["Purposeful", "Practical", "Growth-focused"]}
          topNote={{ label: "Parent learning", copy: "Lead home with clarity" }}
          bottomNote={{ label: "Child development", copy: "Skills beyond school" }}
        />

        <section className="inner-section">
          <PageDoodles variant={1} />
          <div className="site-shell">
            <ContentHeading
              eyebrow="Choose your path"
              title="Practical learning that reaches beyond the lesson."
              copy="Each program turns thoughtful ideas into tools, habits and skills your family can keep using."
            />
            <div className="program-page-grid">
              <LearningPanel variant={0}>
                <span>For parents</span>
                <CardTitle as="h2">{"Intentional Homeschooling"}</CardTitle>
                <p>Learn how to understand your child, shape a meaningful learning environment and build a homeschool system that works for your family.</p>
                <ul><li>Your child</li><li>Your philosophy</li><li>Your family rhythm</li></ul>
                <Link href="/programs/intentional-homeschooling">Explore Intentional Homeschooling <ArrowIcon /></Link>
              </LearningPanel>
              <LearningPanel variant={1}>
                <span>For children</span>
                <CardTitle as="h2">{"Bryt Leaders"}</CardTitle>
                <p>A child-development program designed to build communication, confidence, character and practical leadership skills.</p>
                <ul><li>Think clearly</li><li>Speak confidently</li><li>Lead responsibly</li></ul>
                <Link href="/programs/bryt-leaders">Explore Bryt Leaders <ArrowIcon /></Link>
              </LearningPanel>
            </div>
          </div>
        </section>

        <ClosingCta
          eyebrow="One intentional goal"
          title="Prepared for life, not just the classroom."
          copy="Different children need different paths. Find the program that meets your family where you are."
          secondaryLabel="Talk to Bryt"
          secondaryHref="/contact"
        />
      </main>
    </PageFrame>
  );
}
