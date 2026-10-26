import type { StaticImageData } from "next/image";
import aboutHomeReading from "../public/images/hero/about-home-reading.webp";
import contactWelcome from "../public/images/hero/contact-welcome.webp";
import homeschoolStudy from "../public/images/hero/homeschool-study.webp";
import journalWriting from "../public/images/hero/journal-writing.webp";
import leadersPresenting from "../public/images/hero/leaders-presenting.webp";
import libraryStories from "../public/images/hero/library-stories.webp";
import podcastStudio from "../public/images/hero/podcast-studio.webp";
import programsCreative from "../public/images/hero/programs-creative.webp";
import servicesPlanning from "../public/images/hero/services-planning.webp";
import workTogether from "../public/images/hero/work-together.webp";

export type HeroImage = Readonly<{
  src: StaticImageData;
  alt: string;
}>;

export const heroImages = {
  about: {
    src: aboutHomeReading,
    alt: "A child sitting on a parent's lap holding a picture book",
  },
  contact: {
    src: contactWelcome,
    alt: "Hands holding a phone beside a coffee cup at a bright table",
  },
  journal: {
    src: journalWriting,
    alt: "A hand writing notes in a notebook beside a laptop",
  },
  library: {
    src: libraryStories,
    alt: "A stack of children's picture books beside a cup of coloured pencils",
  },
  programs: {
    src: programsCreative,
    alt: "Hands working on a craft project with paints, brushes and tape",
  },
  brytLeaders: {
    src: leadersPresenting,
    alt: "Two children presenting together at a whiteboard, seen from behind",
  },
  homeschooling: {
    src: homeschoolStudy,
    alt: "An open book with coloured pencils and a magnifying glass on a study desk",
  },
  services: {
    src: servicesPlanning,
    alt: "A coffee cup, blank notebook and pen arranged on a wooden table",
  },
  podcast: {
    src: podcastStudio,
    alt: "A podcast microphone and laptop in a warm home studio",
  },
  workWithBryt: {
    src: workTogether,
    alt: "A notebook, coffee and glasses on a linen surface",
  },
} as const satisfies Record<string, HeroImage>;
