import { PageDoodles } from "../../components/shared/page-doodles";
import { CardTitle } from "../../components/shared/card-title";
import { LearningPanel } from "../../components/shared/learning-panel";
import type { Metadata } from "next";
import { ClosingCta, ContentHeading, InteriorHero } from "../../components/shared/interior-page";
import { PageFrame } from "../../components/shared/site-chrome";
import { heroImages } from "../../hero-images";

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
          title="Intentional"
          titleAccent="Homeschooling"
          lead="Homeschooling is more than bringing school home. It is knowing your child, understanding what matters and creating an environment where they can learn and grow."
          image={heroImages.homeschooling}
          accent="aqua"
          primaryAction={{ label: "Register Your Interest", href: "/contact" }}
          secondaryAction={{ label: "View All Programs", href: "/programs" }}
          points={["Know your child", "Shape your rhythm", "Teach for life"]}
          topNote={{ label: "Your philosophy", copy: "Purpose before pressure" }}
          bottomNote={{ label: "Your family rhythm", copy: "Learning that fits home" }}
        />

        <section className="inner-section inner-section--soft">
          <PageDoodles variant={1} />
          <div className="site-shell learning-layout">
            <ContentHeading
              eyebrow="What you’ll learn"
              title="A homeschool shaped by purpose, not pressure."
              copy="Build a clear philosophy and a practical rhythm that can grow with your child and your family."
            />
            <ol className="learning-list">
              {lessons.map((lesson) => (
                <li key={lesson}>{lesson}</li>
              ))}
            </ol>
          </div>
        </section>

        <section className="inner-section">
          <PageDoodles variant={2} />
          <div className="site-shell">
            <ContentHeading eyebrow="What’s inside" title="Designed to move from thinking to doing." />
            <div className="inside-grid">
              {inside.map(([title, copy], index) => (
                <LearningPanel variant={index} key={title}><CardTitle as="h3">{title}</CardTitle><p>{copy}</p></LearningPanel>
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
