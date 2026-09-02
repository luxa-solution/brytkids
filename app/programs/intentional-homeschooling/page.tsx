import type { Metadata } from "next";
import { ClosingCta, ContentHeading, InteriorHero } from "../../components/interior-page";
import { PageFrame } from "../../components/site-chrome";

export const metadata: Metadata = {
  title: "Intentional Homeschooling | Bryt Kids",
  description: "A practical Bryt Kids course for parents who want to homeschool with purpose.",
};

const lessons = [
  "Understanding your child",
  "Building your homeschool philosophy",
  "Creating a practical learning rhythm",
  "Teaching beyond textbooks",
  "Developing character alongside academics",
  "Making learning part of everyday life",
  "Building consistency without making home feel like school",
] as const;

const inside = [
  ["Video & Audio Lessons", "Learn thoughtful ideas at your own pace."],
  ["Practical Exercises", "Turn each lesson into meaningful action."],
  ["Homeschool Journal", "Think, plan, observe and improve."],
  ["Focused Parent Time", "Small, intentional actions that compound over time."],
] as const;

export default function IntentionalHomeschoolingPage() {
  return (
    <PageFrame>
      <main id="main-content" className="inner-page">
        <InteriorHero
          eyebrow="For parents"
          title="Intentional Homeschooling"
          lead="Homeschooling is more than bringing school home. It is knowing your child, understanding what matters and creating an environment where they can learn and grow."
          accent="aqua"
        />

        <section className="inner-section inner-section--soft">
          <div className="site-shell learning-layout">
            <ContentHeading
              eyebrow="What you’ll learn"
              title="A homeschool shaped by purpose, not pressure."
              copy="Build a clear philosophy and a practical rhythm that can grow with your child and your family."
            />
            <ol className="learning-list">
              {lessons.map((lesson, index) => (
                <li key={lesson}><span>{String(index + 1).padStart(2, "0")}</span>{lesson}</li>
              ))}
            </ol>
          </div>
        </section>

        <section className="inner-section">
          <div className="site-shell">
            <ContentHeading eyebrow="What’s inside" title="Designed to move from thinking to doing." />
            <div className="inside-grid">
              {inside.map(([title, copy], index) => (
                <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>
              ))}
            </div>
          </div>
        </section>

        <ClosingCta
          eyebrow="Register your interest"
          title="You don’t need a perfect homeschool."
          copy="You need an intentional one. Course payment and enrolment details are being prepared; talk to Bryt to register your interest."
          primaryLabel="Talk to Bryt"
          primaryHref="/contact"
          secondaryLabel="View Programs"
          secondaryHref="/programs"
        />
      </main>
    </PageFrame>
  );
}
