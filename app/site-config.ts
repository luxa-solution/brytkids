export type NavigationItem = Readonly<{
  label: string;
  href: `#${string}`;
}>;

export type SiteDestination = Readonly<{
  label: string;
  href: string | null;
  external?: boolean;
}>;

export const primaryNavigation = [
  { label: "Services", href: "#services" },
  { label: "Programs", href: "#programs" },
  { label: "Library", href: "#library" },
  { label: "Journal", href: "#journal" },
  { label: "About", href: "#about" },
] as const satisfies readonly NavigationItem[];

export const siteConfig = {
  whatsapp: {
    label: "Chat with Bryt",
    href: null,
    external: true,
  },
  community: {
    label: "Join the Community",
    href: null,
    external: true,
  },
  newsletterAction: null as string | null,
  socialLinks: [
    { label: "Instagram", href: null, external: true },
    { label: "Facebook", href: null, external: true },
    { label: "YouTube", href: null, external: true },
    { label: "TikTok", href: null, external: true },
    { label: "Telegram", href: null, external: true },
  ] satisfies readonly SiteDestination[],
  legalLinks: [
    { label: "Privacy Policy", href: null },
    { label: "Terms & Conditions", href: null },
    { label: "Refund Policy", href: null },
  ] satisfies readonly SiteDestination[],
} as const;
