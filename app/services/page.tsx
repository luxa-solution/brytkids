import { PageDoodles } from "../components/shared/page-doodles";
import type { Metadata } from "next";
import { DiscoveryCard } from "../components/shared/discovery-card";
import { ClosingCta, ContentHeading, InteriorHero } from "../components/shared/interior-page";
import { PageFrame } from "../components/shared/site-chrome";
import { heroImages } from "../hero-images";

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
          image={heroImages.services}
          accent="aqua"
          primaryAction={{ label: "Find Your Support", href: "/work-with-bryt" }}
          secondaryAction={{ label: "Explore Programs", href: "/programs" }}
          points={["Practical", "Personal", "Family-centred"]}
          topNote={{ label: "Focused guidance", copy: "Built around your needs" }}
          bottomNote={{ label: "Clear direction", copy: "A useful next step" }}
        />

        <section className="inner-section">
          <PageDoodles variant={1} />
          <div className="site-shell">
            <ContentHeading
              eyebrow="Our services"
              title="Support shaped around your family."
              copy="Every family is different. Choose a focused conversation or the kind of support that grows with you over time."
            />
            <div className="detail-card-grid">
              {offers.map((offer) => (
                <DiscoveryCard key={offer.title} eyebrow={offer.label} title={offer.title}
                  description={offer.copy} points={offer.points} tone={offer.tone}
                  illustration={offer.number === "01" ? "connection" : offer.number === "02" ? "growth" : offer.number === "03" ? "book" : "spark"}
                  href="/work-with-bryt" action="Discuss this service" />
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
