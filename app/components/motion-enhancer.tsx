"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const CARD_SELECTOR = [
  ".value-feature",
  ".value-card",
  ".service-card",
  ".program-card",
  ".explore-card",
  ".detail-card",
  ".program-page-card",
  ".inside-grid article",
  ".skill-grid article",
  ".topic-grid article",
  ".library-grid article",
  ".journal-theme-card",
].join(", ");

export function MotionEnhancer() {
  const pathname = usePathname();

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");

    if (reducedMotion.matches || !finePointer.matches) return;

    const cleanups: Array<() => void> = [];
    const cards = Array.from(
      document.querySelectorAll<HTMLElement>(CARD_SELECTOR),
    );

    for (const card of cards) {
      if (card.dataset.motionReady === "true") continue;

      card.dataset.motionReady = "true";
      card.classList.add("motion-card");

      const glow = document.createElement("span");
      glow.className = "motion-glow";
      glow.setAttribute("aria-hidden", "true");
      card.prepend(glow);

      const tilt = card.getBoundingClientRect().width > 480 ? 1.1 : 2;
      let frame = 0;

      const handleMove = (event: PointerEvent) => {
        if (reducedMotion.matches) return;

        const { clientX, clientY } = event;
        if (frame) return;

        frame = window.requestAnimationFrame(() => {
          frame = 0;
          const rect = card.getBoundingClientRect();
          if (!rect.width || !rect.height) return;

          const x = (clientX - rect.left) / rect.width;
          const y = (clientY - rect.top) / rect.height;

          card.style.setProperty("--tilt-x", `${(0.5 - y) * tilt * 2}deg`);
          card.style.setProperty("--tilt-y", `${(x - 0.5) * tilt * 2}deg`);
          card.style.setProperty("--glow-x", `${x * 100}%`);
          card.style.setProperty("--glow-y", `${y * 100}%`);
        });
      };

      const handleLeave = () => {
        if (frame) {
          window.cancelAnimationFrame(frame);
          frame = 0;
        }

        card.style.setProperty("--tilt-x", "0deg");
        card.style.setProperty("--tilt-y", "0deg");
      };

      card.addEventListener("pointermove", handleMove);
      card.addEventListener("pointerleave", handleLeave);

      cleanups.push(() => {
        if (frame) window.cancelAnimationFrame(frame);

        card.removeEventListener("pointermove", handleMove);
        card.removeEventListener("pointerleave", handleLeave);
        card.classList.remove("motion-card");
        card.removeAttribute("data-motion-ready");
        glow.remove();
        card.style.removeProperty("--tilt-x");
        card.style.removeProperty("--tilt-y");
        card.style.removeProperty("--glow-x");
        card.style.removeProperty("--glow-y");
      });
    }

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, [pathname]);

  return null;
}
