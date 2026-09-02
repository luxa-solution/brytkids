import type { Metadata } from "next";
import { ClosingCta, ContentHeading, InteriorHero } from "../../components/interior-page";
import { PageFrame } from "../../components/site-chrome";

export const metadata: Metadata = {
  title: "Bryt Leaders | Bryt Kids",
  description: "A child-development program for confident communicators and thoughtful leaders.",
};

const skills = [
  ["Communication", "Express ideas clearly and listen with attention."],
  ["Public Speaking", "Speak with confidence, preparation and purpose."],
  ["Critical Thinking", "Ask better questions and think through decisions."],
  ["Character", "Practise responsibility, good habits and sound values."],
  ["Leadership", "Take initiative and contribute thoughtfully."],
  ["Social Skills", "Relate to others with confidence and good manners."],
] as const;

export default function BrytLeadersPage() {
  return (
    <PageFrame>
      <main id="main-content" className="inner-page">
        <InteriorHero
          eyebrow="For children"
          title="Bryt Leaders"
          lead="Raising children who can think, speak and lead—a development program for confident communicators, thoughtful leaders and responsible young people."
          accent="orange"
        />

        <section className="inner-section">
          <div className="site-shell">
            <ContentHeading
              eyebrow="Skills for life"
              title="Development that reaches beyond academics."
              copy="Children need opportunities to practise the qualities that help them carry themselves well, contribute and keep growing."
            />
            <div className="skill-grid">
              {skills.map(([title, copy], index) => (
                <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h2>{title}</h2><p>{copy}</p></article>
              ))}
            </div>
          </div>
        </section>

        <ClosingCta
          eyebrow="Build what matters"
          title="Confidence with character. Leadership with responsibility."
          copy="Talk to Bryt about upcoming Bryt Leaders opportunities and the right next step for your child."
          primaryLabel="Ask About Bryt Leaders"
          primaryHref="/contact"
          secondaryLabel="View Programs"
          secondaryHref="/programs"
        />
      </main>
    </PageFrame>
  );
}
