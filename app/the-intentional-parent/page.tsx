import type { Metadata } from "next";
import { ActionLink, ClosingCta, ContentHeading, InteriorHero } from "../components/interior-page";
import { PageFrame } from "../components/site-chrome";
import { siteConfig } from "../site-config";

export const metadata: Metadata = {
  title: "The Intentional Parent Podcast | Bryt Kids",
  description: "Conversations about raising children with faith, character, confidence and purpose.",
};

const topics = [
  ["Parenting", "Real questions, difficult moments and thoughtful choices."],
  ["Education", "How children learn, think and grow beyond the classroom."],
  ["Faith & Character", "Values, good habits, responsibility and purpose."],
  ["Homeschooling", "Building a learning life that works for your family."],
  ["Marriage & Family", "The relationships and environment shaping a child’s world."],
  ["Child Development", "Understanding the stages, needs and potential of childhood."],
] as const;

export default function TipPage() {
  return (
    <PageFrame>
      <main id="main-content" className="inner-page">
        <InteriorHero
          eyebrow="A Bryt Kids podcast"
          title="The Intentional Parent"
          lead="Conversations about raising children with faith, character, confidence and purpose. Parenting is too important to do on autopilot."
          accent="pink"
        />

        <section className="inner-section podcast-intro">
          <div className="site-shell editorial-split">
            <ContentHeading eyebrow="About the podcast" title="Real conversations. Practical ideas. Intentional parenting." />
            <div className="editorial-copy">
              <p>The Intentional Parent is a podcast by Bryt Kids for parents who want to think deeply about raising children and building better families.</p>
              <p>We talk about parenting, education, homeschooling, marriage, family life, character and the everyday decisions that shape our children.</p>
              <ActionLink href={siteConfig.podcast.href} external>Watch on YouTube</ActionLink>
            </div>
          </div>
        </section>

        <section className="inner-section inner-section--soft">
          <div className="site-shell">
            <ContentHeading eyebrow="Conversations that matter" title="What we talk about." />
            <div className="topic-grid">
              {topics.map(([title, copy], index) => (
                <article key={title}><span>0{index + 1}</span><h2>{title}</h2><p>{copy}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className="inner-section latest-panel-section">
          <div className="site-shell latest-panel">
            <div><p className="eyebrow">Listen & watch</p><h2>Podcast episodes, in one place.</h2></div>
            <p>Watch the current Bryt Kids podcast playlist on YouTube. Additional listening platforms can be added as they become available.</p>
            <ActionLink href={siteConfig.podcast.href} external>Open the Playlist</ActionLink>
          </div>
        </section>

        <ClosingCta
          title="Raise intentionally. Keep learning."
          copy="Join Bryt for thoughtful conversations, practical guidance and resources for the journey of raising children well."
          secondaryLabel="Read the Journal"
          secondaryHref="/journal"
        />
      </main>
    </PageFrame>
  );
}
