export type SiteDestination = Readonly<{
  key?: string;
  href: string | null;
  external?: boolean;
}>;

export const siteNavigation = [
  { label: "Services", href: "/services" },
  { label: "Programs", href: "/programs" },
  { label: "Library", href: "/library" },
  { label: "Journal", href: "/journal" },
  { label: "About", href: "/about" },
] as const;

export const siteConfig = {
  email: "contactbrytkids@gmail.com",
  phone: "+2349021460043",
  whatsapp: {
    href: "https://wa.me/2349021460043",
    external: true,
  },
  community: {
    href: "https://wa.me/2349021460043",
    external: true,
  },
  consultationBooking: {
    href: null,
    external: true,
  },
  paymentLinks: [] as readonly string[],
  podcast: {
    href: "https://youtube.com/playlist?list=PLM528oksNOgo&si=zbhvIOQOS_UnfVh9",
    external: true,
  },
  newsletterAction: null as string | null,
  socialLinks: [
    {
      key: "instagram",
      label: "Instagram",
      href: "https://www.instagram.com/brytkids?igsi=bmVnaWh2dHd2cjJy&utm_source=qr",
      external: true,
    },
    {
      key: "youtube",
      label: "YouTube",
      href: "https://youtube.com/@brytkids?si=dEdPy5SAS4Ihx8iJ",
      external: true,
    },
  ],
  legalLinks: [
    { key: "privacy", href: null },
    { key: "terms", href: null },
    { key: "refund", href: null },
  ] satisfies readonly SiteDestination[],
} as const;
