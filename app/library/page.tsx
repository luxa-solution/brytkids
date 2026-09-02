import type { Metadata } from "next";
import { ClosingCta, ContentHeading, InteriorHero } from "../components/interior-page";
import { PageFrame } from "../components/site-chrome";

export const metadata: Metadata = {
  title: "The Bryt Library | Bryt Kids",
  description: "Simple books, audios, activities and parent resources for growing minds.",
};

const categories = [
  ["01", "Books", "Stories and books that introduce children to meaningful ideas, sound values and imagination.", "Read · Imagine · Reflect"],
  ["02", "Audios", "Engaging audio resources designed for children to listen, learn and grow wherever they are.", "Listen · Learn · Revisit"],
  ["03", "Activities", "Simple activities that turn everyday moments into opportunities for curiosity and practical learning.", "Make · Explore · Practise"],
  ["04", "Parent Resources", "Practical guides and tools that help parents understand their children and lead with more intention.", "Think · Plan · Apply"],
] as const;

export default function LibraryPage() {
  return (
    <PageFrame>
      <main id="main-content" className="inner-page">
        <InteriorHero
          eyebrow="The Bryt Library"
          title="Simple Resources for"
          titleAccent="Growing Minds"
          lead="Thoughtfully created books, audios, activities and parent resources that make learning part of everyday family life."
          accent="yellow"
          primaryAction={{ label: "Browse Resources", href: "#library-collection" }}
          secondaryAction={{ label: "Ask Bryt", href: "/contact" }}
          points={["Read", "Listen", "Explore"]}
          topNote={{ label: "Child resources", copy: "Curiosity made practical" }}
          bottomNote={{ label: "Parent tools", copy: "Guidance you can use" }}
        />
        <section id="library-collection" className="inner-section section-anchor">
          <div className="site-shell">
            <ContentHeading eyebrow="Browse the library" title="Four useful places to begin." copy="The library stays intentionally simple. Each category will grow as new Bryt resources become available." />
            <div className="library-grid">
              {categories.map(([number, title, copy, verbs]) => (
                <article key={title}><span>{number}</span><h2>{title}</h2><p>{copy}</p><small>{verbs}</small></article>
              ))}
            </div>
            <p className="availability-banner"><strong>Library update</strong> Products and payment links are being prepared. New resources will appear here as soon as they are ready.</p>
          </div>
        </section>
        <ClosingCta
          eyebrow="For curious minds"
          title="Give them something worth learning from."
          copy="Need help finding the right kind of resource for your child or family? Talk to Bryt."
          primaryLabel="Ask Bryt"
          primaryHref="/contact"
        />
      </main>
    </PageFrame>
  );
}
