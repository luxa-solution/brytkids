import { PageDoodles } from "../components/shared/page-doodles";
import { CardTitle } from "../components/shared/card-title";
import { LearningPanel } from "../components/shared/learning-panel";
import type { Metadata } from "next";
import { ClosingCta, ContentHeading, InteriorHero } from "../components/shared/interior-page";
import { PageFrame } from "../components/shared/site-chrome";
import { heroImages } from "../hero-images";

export const metadata: Metadata = {
  title: "About | Bryt Kids",
  description: "Why Bryt Kids exists and what guides our work with children and families.",
};

const beliefs = [
  ["Children are individuals", "There is no one-size-fits-all child. Each one has distinct strengths, needs and ways of learning."],
  ["Parents are the primary influence", "The home is one of the most powerful learning environments a child will ever have."],
  ["Education is bigger than school", "Real education shapes how a child thinks, acts, relates and prepares for life."],
  ["Character matters", "What a child becomes matters as much as what a child knows or achieves."],
  ["Intentionality changes things", "Small, consistent choices can shape an entire childhood and the adult who emerges from it."],
] as const;

export default function AboutPage() {
  return (
    <PageFrame>
      <main id="main-content" className="inner-page">
        <InteriorHero
          eyebrow="About Bryt Kids"
          title="Raising Better Humans"
          titleAccent="Begins at Home."
          lead="Bryt Kids exists to help families become more intentional about raising children who are grounded, capable and prepared for life."
          image={heroImages.about}
          accent="aqua"
          primaryAction={{ label: "How We Help", href: "/services" }}
          secondaryAction={{ label: "Our Beliefs", href: "#our-beliefs" }}
          points={["Faith-led", "Whole-child", "Family-first"]}
          topNote={{ label: "A strong foundation", copy: "Values lived at home" }}
          bottomNote={{ label: "Prepared for life", copy: "Capability with character" }}
        />

        <section className="inner-section">
          <PageDoodles variant={1} />
          <div className="site-shell editorial-split about-story">
            <ContentHeading eyebrow="Why Bryt" title="Children do not simply grow up." />
            <div className="editorial-copy">
              <p>They are shaped by what surrounds them: what they see, hear, practise, believe and experience every day.</p>
              <p>That is why we care about more than academic performance. We care about character, confidence, faith, communication, curiosity and practical life skills.</p>
            </div>
          </div>
        </section>

        <section id="our-beliefs" className="inner-section inner-section--soft section-anchor">
          <PageDoodles variant={2} />
          <div className="site-shell">
            <ContentHeading eyebrow="What we believe" title="Five beliefs that guide our work." />
            <div className="belief-list">
              {beliefs.map(([title, copy], index) => (
                <LearningPanel variant={index} key={title}><CardTitle as="h2">{title}</CardTitle><p>{copy}</p></LearningPanel>
              ))}
            </div>
          </div>
        </section>

        <ClosingCta
          eyebrow="Our vision"
          title="Prepared to live well, not merely to pass tests."
          copy="We are building towards a generation of grounded, capable children with strong values and a genuine desire to learn and contribute."
          secondaryLabel="Explore Programs"
          secondaryHref="/programs"
        />
      </main>
    </PageFrame>
  );
}
