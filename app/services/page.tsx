import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "../components/icons";
import { ClosingCta, ContentHeading, InteriorHero } from "../components/interior-page";
import { PageFrame } from "../components/site-chrome";

export const metadata: Metadata = {
  title: "Services | Bryt Kids",
  description: "Practical parenting, coaching, homeschool and family support from Bryt Kids.",
};

const offers = [
  {
    number: "01",
    title: "1:1 Consultation",
    copy: "A focused conversation around one parenting, homeschooling or family challenge, so you leave with clarity and practical next steps.",
    label: "For a focused challenge",
    points: ["A specific challenge", "A fresh perspective", "Clear next actions"],
    tone: "coral",
  },
  {
    number: "02",
    title: "Private Coaching",
    copy: "Ongoing guidance for parents who want accountability, stronger family systems and a more intentional way of raising their children.",
    label: "For ongoing growth",
    points: ["Consistent support", "Personalised strategy", "Accountability over time"],
    tone: "aqua",
  },
  {
    number: "03",
    title: "Homeschool Support",
    copy: "Build a homeschool experience that fits your children, reflects your values and works within the reality of your family life.",
    label: "For home educators",
    points: ["Curriculum direction", "Learning rhythms", "A purposeful home environment"],
    tone: "yellow",
  },
  {
    number: "04",
    title: "Family Strategy",
    copy: "Turn the values and hopes you hold for your family into practical routines, habits and a clearer long-term direction.",
    label: "For the whole family",
    points: ["Shared family values", "Home systems", "Intentional family goals"],
    tone: "lilac",
  },
] as const;

export default function ServicesPage() {
  return (
    <PageFrame>
      <main id="main-content" className="inner-page">
        <InteriorHero
          eyebrow="Services"
          title="How We Help"
          titleAccent="Families"
          lead="Practical support for parents who want to raise capable, confident, grounded children and build a home that helps them thrive."
          accent="aqua"
          primaryAction={{ label: "Find Your Support", href: "/work-with-bryt" }}
          secondaryAction={{ label: "Explore Programs", href: "/programs" }}
          points={["Practical", "Personal", "Family-centred"]}
          topNote={{ label: "Focused guidance", copy: "Built around your needs" }}
          bottomNote={{ label: "Clear direction", copy: "A useful next step" }}
        />

        <section className="inner-section">
          <div className="site-shell">
            <ContentHeading
              eyebrow="Our services"
              title="Support shaped around your family."
              copy="Every family is different. Choose a focused conversation or the kind of support that grows with you over time."
            />
            <div className="detail-card-grid">
              {offers.map((offer) => (
                <article key={offer.title} className={`detail-card detail-card--${offer.tone}`}>
                  <span className="detail-card__shape" aria-hidden="true" />
                  <p className="detail-card__tag">{offer.label}</p>
                  <div className="detail-card__index">{offer.number}</div>
                  <h2>{offer.title}</h2>
                  <p>{offer.copy}</p>
                  <ul>{offer.points.map((point) => <li key={point}>{point}</li>)}</ul>
                  <Link href="/work-with-bryt">Discuss this service <ArrowIcon /></Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ClosingCta
          title="You don’t have to figure it all out alone."
          copy="Let’s understand what your family needs and build a better way forward."
        />
      </main>
    </PageFrame>
  );
}
