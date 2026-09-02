import type { Metadata } from "next";
import { ContactForm } from "../components/contact-form";
import { InteriorHero } from "../components/interior-page";
import { PageFrame } from "../components/site-chrome";
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
          title="Let’s Talk"
          lead="Have a question, need support, or want to work with Bryt? We’d love to hear from you."
          accent="aqua"
        />
        <section className="inner-section">
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
      </main>
    </PageFrame>
  );
}
