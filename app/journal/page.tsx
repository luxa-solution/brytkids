import type { Metadata } from "next";
import { ClosingCta, ContentHeading, InteriorHero } from "../components/interior-page";
import { PageFrame } from "../components/site-chrome";

export const metadata: Metadata = {
  title: "The Bryt Journal | Bryt Kids",
  description: "Thoughts on raising children, building families and living intentionally.",
};

const themes = [
  {
    title: "Parenting with intention",
    copy: "Thoughtful responses to the questions and decisions that shape everyday family life.",
    label: "For everyday parenting",
    art: "PAUSE",
    ideas: ["Questions", "Choices", "Good habits"],
    tone: "coral",
  },
  {
    title: "Learning beyond school",
    copy: "Ideas about homeschooling, education, curiosity and how children really learn.",
    label: "For curious families",
    art: "NOTICE",
    ideas: ["Education", "Curiosity", "Home learning"],
    tone: "aqua",
  },
  {
    title: "Building family life",
    copy: "Reflections on values, relationships, habits and the environment children grow within.",
    label: "For stronger homes",
    art: "GROW",
    ideas: ["Values", "Relationships", "Family rhythm"],
    tone: "yellow",
  },
] as const;

export default function JournalPage() {
  return (
    <PageFrame>
      <main id="main-content" className="inner-page journal-page">
        <InteriorHero
          eyebrow="The Bryt Journal"
          title="Read Something Useful."
          titleAccent="Think Differently."
          lead="Thoughts on raising children, building families and living intentionally."
          accent="pink"
          primaryAction={{ label: "Explore Our Themes", href: "#journal-themes" }}
          secondaryAction={{ label: "Listen to TIP", href: "/the-intentional-parent" }}
          points={["Parenting", "Education", "Family life"]}
          topNote={{ label: "Thoughtful writing", copy: "Ideas without the noise" }}
          bottomNote={{ label: "Useful reflection", copy: "Leave with a new thought" }}
        />
        <section id="journal-themes" className="inner-section section-anchor">
          <div className="site-shell">
            <ContentHeading eyebrow="Latest from the Journal" title="Thoughtful writing is on its way." copy="The Journal will stay simple: useful ideas, clearly written, without noise or unnecessary categories." />
            <div className="journal-themes">
              {themes.map((theme) => (
                <article key={theme.title} className={`journal-theme-card journal-theme-card--${theme.tone}`}>
                  <div className="journal-theme-card__art" aria-hidden="true">
                    <span className="journal-theme-card__word">{theme.art}</span>
                    <span className="journal-theme-card__shape journal-theme-card__shape--one" />
                    <span className="journal-theme-card__shape journal-theme-card__shape--two" />
                  </div>
                  <div className="journal-theme-card__copy">
                    <span className="card-tag">{theme.label}</span>
                    <h2>{theme.title}</h2>
                    <p>{theme.copy}</p>
                    <ul>{theme.ideas.map((idea) => <li key={idea}>{idea}</li>)}</ul>
                    <small>Coming to the Journal</small>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <ClosingCta
          title="Keep learning. Keep growing."
          copy="While the Journal is being prepared, explore the TIP podcast for thoughtful parenting conversations."
          primaryLabel="Listen to TIP"
          primaryHref="/the-intentional-parent"
        />
      </main>
    </PageFrame>
  );
}
