import type { Metadata } from "next";
import { ClosingCta, ContentHeading, InteriorHero } from "../components/interior-page";
import { PageFrame } from "../components/site-chrome";

export const metadata: Metadata = {
  title: "The Bryt Journal | Bryt Kids",
  description: "Thoughts on raising children, building families and living intentionally.",
};

const themes = [
  ["Parenting with intention", "Thoughtful responses to the questions and decisions that shape everyday family life."],
  ["Learning beyond school", "Ideas about homeschooling, education, curiosity and how children really learn."],
  ["Building family life", "Reflections on values, relationships, habits and the environment children grow within."],
] as const;

export default function JournalPage() {
  return (
    <PageFrame>
      <main id="main-content" className="inner-page journal-page">
        <InteriorHero
          eyebrow="The Bryt Journal"
          title="Read Something Useful. Leave Thinking Differently."
          lead="Thoughts on raising children, building families and living intentionally."
          accent="pink"
        />
        <section className="inner-section">
          <div className="site-shell">
            <ContentHeading eyebrow="Latest from the Journal" title="Thoughtful writing is on its way." copy="The Journal will stay simple: useful ideas, clearly written, without noise or unnecessary categories." />
            <div className="journal-themes">
              {themes.map(([title, copy], index) => (
                <article key={title}><span>0{index + 1}</span><h2>{title}</h2><p>{copy}</p><small>Editorial theme</small></article>
              ))}
            </div>
            <div className="journal-empty"><p className="eyebrow">Publishing soon</p><h2>The first Bryt Journal entries are being prepared.</h2><p>When they are ready, the newest writing will appear here first.</p></div>
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
