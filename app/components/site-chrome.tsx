import Link from "next/link";
import { content } from "../content";
import { siteConfig, siteNavigation } from "../site-config";
import { BrandMark } from "./brand-mark";
import { DestinationLink } from "./destination-link";
import { ArrowIcon, WhatsAppIcon } from "./icons";
import { MobileNavigation } from "./mobile-navigation";

export function SiteHeader() {
  return (
    <>
      <div className="announcement">
        <span aria-hidden="true" />
        Raising capable children starts with intentional choices.
      </div>
      <header className="site-header">
        <div className="site-shell header-pill">
          <Link className="brand-link" href="/" aria-label={content.site.homeLabel}>
            <BrandMark alt="" priority />
            <span>Bryt Kids</span>
          </Link>

          <nav className="desktop-navigation" aria-label={content.accessibility.primaryNavigation}>
            {siteNavigation.map((item) => (
              <Link key={item.href} href={item.href}>{item.label}</Link>
            ))}
          </nav>

          <Link className="button button--small button--primary header-cta" href="/work-with-bryt">
            Work With Bryt
            <ArrowIcon />
          </Link>

          <MobileNavigation
            items={siteNavigation}
            ctaHref="/work-with-bryt"
            labels={{
              open: content.accessibility.openNavigation,
              close: content.accessibility.closeNavigation,
              landmark: content.accessibility.mobileNavigation,
              cta: content.navigation.mobileCta,
            }}
          />
        </div>
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-shell footer-grid footer-grid--expanded">
        <div className="footer-brand">
          <Link className="brand-link brand-link--footer" href="/">
            <BrandMark alt="" />
            <span>Bryt Kids</span>
          </Link>
          <p>Helping parents raise children of faith, character, confidence and lifelong learning.</p>
          <div className="footer-direct">
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            <a href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a>
          </div>
        </div>

        <nav className="footer-links" aria-label={content.accessibility.footerNavigation}>
          <p>Explore</p>
          {siteNavigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          <Link href="/the-intentional-parent">TIP Podcast</Link>
        </nav>

        <nav className="footer-links" aria-label="Work with Bryt">
          <p>Start here</p>
          <Link href="/work-with-bryt">Work With Bryt</Link>
          <Link href="/services">Consultation</Link>
          <Link href="/programs">Programs</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div className="footer-note">
          <p className="eyebrow eyebrow--light">Let’s talk</p>
          <h2>Not sure where to begin?</h2>
          <p>Tell us what your family needs and we’ll point you towards a helpful next step.</p>
          <div className="footer-socials">
            {siteConfig.socialLinks.map((item) => (
              <a key={item.key} href={item.href} target="_blank" rel="noreferrer">{item.label}</a>
            ))}
          </div>
        </div>
      </div>

      <div className="site-shell footer-bottom">
        <p>© {new Date().getFullYear()} Bryt Kids</p>
        <p>Raise Children Intentionally.</p>
      </div>
    </footer>
  );
}

export function FloatingWhatsApp() {
  return (
    <DestinationLink
      destination={siteConfig.whatsapp}
      className="whatsapp-button"
      disabledTitle="Bryt WhatsApp is currently unavailable."
    >
      <span className="whatsapp-button__icon"><WhatsAppIcon /></span>
      <span className="whatsapp-button__copy"><small>Direct support</small><strong>Chat with Bryt</strong></span>
      <span className="whatsapp-button__arrow"><ArrowIcon /></span>
    </DestinationLink>
  );
}

export function PageFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="site-page">
      <a className="skip-link" href="#main-content">{content.accessibility.skipToContent}</a>
      <SiteHeader />
      {children}
      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  );
}
