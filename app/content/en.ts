import type {
  NavigationItem,
  ServiceContent,
  TestimonialPlaceholderContent,
} from "./types";

const primaryNavigation = [
  { label: "Services", href: "/services" },
  { label: "Programs", href: "/programs" },
  { label: "Library", href: "/library" },
  { label: "Journal", href: "/journal" },
  { label: "About", href: "/about" },
] satisfies readonly NavigationItem[];

const services = [
  {
    number: "01",
    title: "Parent Coaching",
    description: "Personalised guidance for parents navigating real challenges.",
    accent: "pink",
  },
  {
    number: "02",
    title: "Homeschool Consultation",
    description:
      "Practical support for building a more intentional homeschooling journey.",
    accent: "blue",
  },
  {
    number: "03",
    title: "Family Strategy",
    description: "Helping families create clearer routines, values and direction.",
    accent: "orange",
  },
  {
    number: "04",
    title: "Child Development Coaching",
    description:
      "Helping children develop communication, confidence, character and leadership.",
    accent: "green",
  },
] satisfies readonly ServiceContent[];

const testimonials = [
  {
    source: "Parent coaching",
    quote: "Approved parent quote will appear here.",
    author: "Parent name",
  },
  {
    source: "Course participant",
    quote: "Approved parent quote will appear here.",
    author: "Parent name",
  },
  {
    source: "Bryt Leaders",
    quote: "Approved parent quote will appear here.",
    author: "Parent name",
  },
] satisfies readonly TestimonialPlaceholderContent[];

export const enContent = {
  locale: "en",
  site: {
    name: "Bryt Kids",
    title: "Bryt Kids | Raise Children Intentionally",
    description:
      "Helping parents raise children of faith, character, confidence and lifelong learning.",
    keywords: [
      "intentional parenting",
      "child development",
      "homeschooling",
      "parent coaching",
      "family education",
    ],
    logoAlt: "Bryt Kids",
    homeLabel: "Bryt Kids home",
  },
  accessibility: {
    skipToContent: "Skip to main content",
    primaryNavigation: "Primary navigation",
    mobileNavigation: "Mobile navigation",
    footerNavigation: "Footer navigation",
    socialLinks: "Social links",
    legalLinks: "Legal links",
    openNavigation: "Open navigation",
    closeNavigation: "Close navigation",
  },
  common: {
    workWithBryt: "Work With Bryt",
    explorePrograms: "Explore Programs",
    soon: "Soon",
    photographyDirection: "Photography direction",
  },
  navigation: {
    primary: primaryNavigation,
    mobileCta: "Work With Bryt",
    footerHeading: "Explore",
    tip: "TIP: The Intentional Parent",
    connectHeading: "Connect",
  },
  home: {
    hero: {
      eyebrow: "Parenting. Education. Character. Growth.",
      titleStart: "Raise Your Child",
      titleEmphasis: "Intentionally.",
      lead: "Helping parents raise children of character and confidence.",
      principles: ["Faith", "Character", "Confidence", "Lifelong learning"],
      media:
        "A natural, quiet moment of a parent guiding a child at the table.",
      note: "Raise children intentionally.",
    },
    about: {
      eyebrow: "Why Bryt",
      title: "Childhood Is Too Important to Leave to Chance.",
      paragraphs: [
        "The way children learn, think, speak, behave and grow is shaped by the environment we create around them.",
        "Bryt helps parents become more intentional about that environment—and helps children develop the knowledge, character and confidence they need to thrive.",
      ],
      cta: "Discover Bryt",
    },
    services: {
      eyebrow: "01 — Services",
      title: "Personalised Support for Your Family",
      copy:
        "Sometimes you don’t need another article. You need someone to help you think through your situation.",
      items: services,
      cta: "Explore Services",
    },
    programs: {
      eyebrow: "02 — Programs",
      title: "Programs That Help Children and Parents Grow",
      items: [
        {
          className: "program-feature--course",
          audience: "For parents",
          title: "Intentional Homeschooling Course",
          description:
            "A practical framework for parents who want to homeschool with greater clarity, purpose and intention.",
          cta: "Explore the Course",
          media:
            "An authentic homeschooling scene with books, notes and shared concentration.",
          mediaNumber: "02",
          tone: "orange" as const,
          mediaFirst: true,
        },
        {
          className: "program-feature--leaders",
          audience: "For children",
          title: "Bryt Leaders",
          description:
            "Helping children develop communication, confidence, character, leadership and essential life skills.",
          cta: "Explore Bryt Leaders",
          media:
            "A capable child presenting an idea with confidence to a small group.",
          mediaNumber: "03",
          tone: "green" as const,
          mediaFirst: false,
        },
      ],
      cta: "Explore Programs",
    },
    philosophy: {
      eyebrow: "The Bryt philosophy",
      title: "We Believe Education Is Bigger Than School.",
      copy:
        "A child’s education happens at the dining table, in conversations, through books, in moments of difficulty, in the habits we build and in the example we set.",
      closing:
        "At Bryt, we care about the whole child—and the parents raising them.",
    },
    tip: {
      eyebrow: "TIP — The Intentional Parent",
      title: "The Weekly Conversation for Intentional Parents.",
      copy:
        "Honest conversations, thoughtful ideas and practical wisdom for navigating the beautiful responsibility of raising children.",
      cta: "Listen to TIP",
      media:
        "A parent listening and reflecting in a calm, lived-in family space.",
    },
    library: {
      eyebrow: "03 — The Bryt Library",
      title: "Resources for Growing Minds",
      copy:
        "Explore books, activities, guides and educational resources created to help children learn and parents lead with intention.",
      categories: [
        "Children’s Books",
        "Parenting Resources",
        "Activities & Printables",
        "Educational Resources",
      ],
      cta: "Explore the Bryt Library",
      media:
        "A warm still life of children’s books, learning materials and thoughtful resources.",
    },
    journal: {
      eyebrow: "04 — The Bryt Journal",
      title: "Ideas Worth Thinking About",
      copy:
        "Thoughtful writing on parenting, homeschooling, education, child development, family life and raising children intentionally.",
      cta: "Read the Journal",
      media:
        "Temporary Bryt Kids artwork—replace with an approved family learning image.",
      mediaLabel: "Temporary visual asset",
    },
    testimonials: {
      eyebrow: "Parent stories",
      title: "What Parents Are Saying",
      notice:
        "Layout preview — replace with approved parent feedback before publication.",
      placeholderLabel: "Placeholder",
      items: testimonials,
    },
    community: {
      eyebrow: "The Bryt community",
      title: "You Don’t Have to Raise Alone.",
      copy:
        "Join the Bryt community for thoughtful conversations, practical guidance, new resources and parents committed to raising children intentionally.",
      cta: "Join the Community",
      unavailable: "Community link will be available soon.",
    },
    finalCta: {
      eyebrow: "Your next step",
      title: "Ready to Raise Intentionally?",
      copy:
        "Start where you are. Choose the support your family needs and take the next step with Bryt.",
    },
    newsletter: {
      eyebrow: "Stay thoughtful",
      title: "A Little Bryt in Your Inbox.",
      copy:
        "Thoughtful parenting ideas, useful resources and the latest from Bryt.",
      label: "Your email address",
      placeholder: "you@example.com",
      cta: "Join Bryt",
      unavailable: "Email signup is being prepared.",
    },
    footer: {
      tagline:
        "Helping parents raise children of faith, character, confidence and lifelong learning.",
      copyrightSuffix: "Bryt Kids. Raise Children Intentionally.",
      legalUnavailable: "Legal pages are being prepared.",
      socialLabels: {
        instagram: "Instagram",
        facebook: "Facebook",
        youtube: "YouTube",
        tiktok: "TikTok",
        telegram: "Telegram",
      },
      legalLabels: {
        privacy: "Privacy Policy",
        terms: "Terms & Conditions",
        refund: "Refund Policy",
      },
    },
    whatsapp: "Chat with Bryt",
  },
} as const;

type WidenContent<T> = T extends string
  ? string
  : T extends number
    ? number
    : T extends readonly (infer Item)[]
      ? readonly WidenContent<Item>[]
      : T extends object
        ? { readonly [Key in keyof T]: WidenContent<T[Key]> }
        : T;

export type AppContent = WidenContent<typeof enContent>;
