import { PageDoodles } from "../components/shared/page-doodles";
import { CardTitle } from "../components/shared/card-title";
import { LearningPanel } from "../components/shared/learning-panel";
import type { Metadata } from "next";
import { ClosingCta, ContentHeading, InteriorHero } from "../components/shared/interior-page";
import { PageFrame } from "../components/shared/site-chrome";
import { heroImages } from "../hero-images";

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
          image={heroImages.journal}
          accent="pink"
          primaryAction={{ label: "Explore Our Themes", href: "#journal-themes" }}
          secondaryAction={{ label: "Listen to TIP", href: "/the-intentional-parent" }}
          points={["Parenting", "Education", "Family life"]}
          topNote={{ label: "Thoughtful writing", copy: "Ideas without the noise" }}
          bottomNote={{ label: "Useful reflection", copy: "Leave with a new thought" }}
        />
        <section id="journal-themes" className="inner-section section-anchor">
          <PageDoodles variant={1} />
          <div className="site-shell">
            <ContentHeading eyebrow="Latest from the Journal" title="Thoughtful writing is on its way." copy="The Journal will stay simple: useful ideas, clearly written, without noise or unnecessary categories." />
            <div className="journal-themes">
              {themes.map((theme) => (
                <LearningPanel variant={themes.indexOf(theme)} key={theme.title}>
                  <div>
                    <span className="card-tag">{theme.label}</span>
                    <CardTitle as="h2">{theme.title}</CardTitle>
                    <p>{theme.copy}</p>
                    <ul>{theme.ideas.map((idea) => <li key={idea}>{idea}</li>)}</ul>
                    <small>Coming to the Journal</small>
                  </div>
                </LearningPanel>
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
