"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const REVEAL = ["[data-reveal]", "[data-cta]", ".section-heading", ".inner-heading", ".journey-steps > li", ".learning-list > li", ".editorial-copy", ".contact-form-panel", ".direct-contact", ".availability-banner", ".footer-grid > *"].join(",");

/** Progressive enhancement: content stays visible without JS or motion support. */
export function MotionOrchestrator() {
  const pathname = usePathname();

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let reveal: IntersectionObserver | undefined;
    let ambient: IntersectionObserver | undefined;
    const animations = new Set<Animation>();

    function stop() {
      reveal?.disconnect();
      ambient?.disconnect();
      animations.forEach(animation => animation.cancel());
      animations.clear();
      document.querySelectorAll("[data-ambient]").forEach(node => node.removeAttribute("data-in-view"));
    }

    function start() {
      stop();
      if (preference.matches || !("IntersectionObserver" in window)) return;
      reveal = new IntersectionObserver(entries => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const element = entry.target;
          const index = element.parentElement ? Array.from(element.parentElement.children).indexOf(element) : 0;
          const animation = element.animate([
            { opacity: 0.25, transform: "translateY(24px)" },
            { opacity: 1, transform: "translateY(0)" },
          ], { duration: 650, delay: (index % 4) * 65, easing: "cubic-bezier(0.22,1,0.36,1)" });
          animations.add(animation);
          animation.onfinish = () => animations.delete(animation);
          reveal?.unobserve(element);
        }
      }, { threshold: 0.08 });
      document.querySelectorAll(REVEAL).forEach(node => reveal?.observe(node));

      ambient = new IntersectionObserver(entries => {
        entries.forEach(entry => entry.target.setAttribute("data-in-view", String(entry.isIntersecting)));
      }, { rootMargin: "50px" });
      document.querySelectorAll("[data-ambient]").forEach(node => ambient?.observe(node));
    }

    start();
    preference.addEventListener("change", start);
    return () => { stop(); preference.removeEventListener("change", start); };
  }, [pathname]);

  return null;
}
