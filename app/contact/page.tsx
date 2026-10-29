import { PageDoodles } from "../components/shared/page-doodles";
import type { Metadata } from "next";
import { ContactForm } from "../components/shared/contact-form";
import { ClosingCta, InteriorHero } from "../components/shared/interior-page";
import { PageFrame } from "../components/shared/site-chrome";
import { heroImages } from "../hero-images";
import { siteConfig } from "../site-config";

export const metadata: Metadata = {
  title: "Contact | Bryt Kids",
  description: "Contact Bryt Kids for parenting, coaching, homeschool and program support.",
};

export default function ContactPage() {
  return (
    <PageFrame>
      <main id="main-content" className="inner-page contact-page">
        <InteriorHero
          eyebrow="Contact"
          title="Let’s"
          titleAccent="Talk"
          lead="Have a question, need support, or want to work with Bryt? We’d love to hear from you."
          image={heroImages.contact}
          accent="aqua"
          primaryAction={{ label: "Chat on WhatsApp", href: siteConfig.whatsapp.href, external: true }}
          secondaryAction={{ label: "Send an Email", href: `mailto:${siteConfig.email}`, external: true }}
          points={["Friendly", "Focused", "Helpful"]}
          topNote={{ label: "Direct support", copy: "A real conversation" }}
          bottomNote={{ label: "A clear response", copy: "We’ll guide your next step" }}
        />
        <section id="contact-enquiry" className="inner-section">
          <PageDoodles variant={1} />
          <div className="site-shell contact-layout">
            <div className="contact-form-panel">
              <p className="eyebrow">Send an enquiry</p>
              <h2>Tell us what you need.</h2>
              <ContactForm />
            </div>
            <aside className="direct-contact">
              <p className="eyebrow">Direct contact</p>
              <h2>Prefer a conversation?</h2>
              <p>WhatsApp is the quickest way to reach Bryt directly.</p>
              <a className="direct-contact__primary" href={siteConfig.whatsapp.href} target="_blank" rel="noreferrer">Chat on WhatsApp</a>
              <dl>
                <div><dt>Email</dt><dd><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></dd></div>
                <div><dt>Phone</dt><dd><a href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a></dd></div>
                <div><dt>Social</dt><dd>{siteConfig.socialLinks.map((item) => <a key={item.key} href={item.href} target="_blank" rel="noreferrer">{item.label}</a>)}</dd></div>
              </dl>
            </aside>
          </div>
        </section>
        <ClosingCta eyebrow="A conversation can change things"
          title="Your next chapter starts here."
          copy="Tell us what matters to your family. We’ll help you find a thoughtful way forward."
          primaryLabel="Send an enquiry" primaryHref="#contact-enquiry" />
      </main>
    </PageFrame>
  );
}
