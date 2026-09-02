import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "../components/icons";
import { ClosingCta, ContentHeading, InteriorHero } from "../components/interior-page";
import { PageFrame } from "../components/site-chrome";
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
          accent="orange"
          primaryAction={{ label: "Tell Us What You Need", href: "/contact" }}
          secondaryAction={{ label: "Explore Services", href: "/services" }}
          points={["We listen", "We clarify", "We build a path"]}
          topNote={{ label: "Your family first", copy: "Support starts by listening" }}
          bottomNote={{ label: "The right fit", copy: "A path shaped for you" }}
        />

        <section className="inner-section conversion-section">
          <div className="site-shell">
            <ContentHeading eyebrow="Ways to work with us" title="Begin with the support you need now." copy="You do not need to know the perfect answer before you contact us. Start with the closest fit and we will help you find the right direction." />
            <div className="conversion-list">
              {paths.map(([number, title, copy, label, href]) => (
                <article key={title}>
                  <span>{number}</span>
                  <div><h2>{title}</h2><p>{copy}</p></div>
                  <Link href={href}>{label}<ArrowIcon /></Link>
                </article>
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
