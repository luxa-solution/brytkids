export type SiteDestination = Readonly<{
  key?: string;
  href: string | null;
  external?: boolean;
}>;

export const siteConfig = {
  whatsapp: {
    href: null,
    external: true,
  },
  community: {
    href: null,
    external: true,
  },
  newsletterAction: null as string | null,
  socialLinks: [
    { key: "instagram", href: null, external: true },
    { key: "facebook", href: null, external: true },
    { key: "youtube", href: null, external: true },
    { key: "tiktok", href: null, external: true },
    { key: "telegram", href: null, external: true },
  ] satisfies readonly SiteDestination[],
  legalLinks: [
    { key: "privacy", href: null },
    { key: "terms", href: null },
    { key: "refund", href: null },
  ] satisfies readonly SiteDestination[],
} as const;
