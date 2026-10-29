import { PageDoodles } from "../components/shared/page-doodles";
import { CardTitle } from "../components/shared/card-title";
import { LearningPanel } from "../components/shared/learning-panel";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "../components/shared/icons";
import { ClosingCta, ContentHeading, InteriorHero } from "../components/shared/interior-page";
import { PageFrame } from "../components/shared/site-chrome";
import { heroImages } from "../hero-images";
import { siteConfig } from "../site-config";

export const metadata: Metadata = {
  title: "Work With Bryt | Bryt Kids",
  description: "Choose the right Bryt Kids consultation, coaching, program or homeschool support path.",
};

const paths = [
  ["01", "1:1 Consultation", "Have a specific challenge you want help thinking through? Leave a focused conversation with clarity and practical next steps.", "Discuss a Consultation", "/contact"],
  ["02", "Private Coaching", "Choose ongoing support to build better systems, stay accountable and become more intentional in your parenting journey.", "Learn About Coaching", "/services"],
  ["03", "Programs", "Learn at your own pace or help your child develop practical skills through a structured Bryt program.", "Explore Programs", "/programs"],
  ["04", "Homeschool Support", "Build a homeschool philosophy, learning rhythm and environment that works for your family.", "Get Homeschool Support", "/contact"],
] as const;

export default function WorkWithBrytPage() {
  return (
    <PageFrame>
      <main id="main-content" className="inner-page">
        <InteriorHero
          eyebrow="Work With Bryt"
          title="Let’s Work"
          titleAccent="Together"
          lead="Every family is different, so the support you need may be different too. Choose the path that fits you."
          image={heroImages.workWithBryt}
          accent="orange"
          primaryAction={{ label: "Tell Us What You Need", href: "/contact" }}
          secondaryAction={{ label: "Explore Services", href: "/services" }}
          points={["We listen", "We clarify", "We build a path"]}
          topNote={{ label: "Your family first", copy: "Support starts by listening" }}
          bottomNote={{ label: "The right fit", copy: "A path shaped for you" }}
        />

        <section className="inner-section conversion-section">
          <PageDoodles variant={1} />
          <div className="site-shell">
            <ContentHeading eyebrow="Ways to work with us" title="Begin with the support you need now." copy="You do not need to know the perfect answer before you contact us. Start with the closest fit and we will help you find the right direction." />
            <div className="conversion-list">
              {paths.map(([, title, copy, label, href], index) => (
                <LearningPanel variant={index} key={title}>

                  <div><CardTitle as="h2">{title}</CardTitle><p>{copy}</p></div>
                  <Link href={href}>{label}<ArrowIcon /></Link>
                </LearningPanel>
              ))}
            </div>
            <div className="booking-note">
              <p><strong>Consultation booking</strong>The dedicated booking link is awaiting client confirmation. Until then, contact Bryt directly and we’ll help arrange the next step.</p>
              <a className="button button--primary" href={siteConfig.whatsapp.href} target="_blank" rel="noreferrer">Talk on WhatsApp <ArrowIcon /></a>
            </div>
          </div>
        </section>

        <ClosingCta
          eyebrow="Not sure where to start?"
          title="Tell us what you’re trying to solve."
          copy="We’ll listen, ask the right questions and point you towards the most helpful next step."
          primaryLabel="Talk to Bryt"
          primaryHref="/contact"
        />
      </main>
    </PageFrame>
  );
}
