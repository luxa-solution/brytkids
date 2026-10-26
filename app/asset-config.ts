export type ImageAsset = Readonly<{
  src: string;
  alt: string;
  fit?: "cover" | "contain";
}>;

export const siteAssets = {
  navLogo: {
    src: "/Bryt%20Kids%20Logos.svg",
    alt: "",
    fit: "contain",
  },
  footerLogo: {
    src: "/Bryt%20Kids%20Logos.svg",
    alt: "",
    fit: "contain",
  },
  editorial: {
    photographyPlaceholder: {
      src: "/images/landscape-web-placeholder.webp",
      alt: "",
      fit: "cover",
    },
    brytKidsArtwork: {
      src: "/brand/bryt-kids-full.jpeg",
      alt: "",
      fit: "contain",
    },
    brytArtwork: {
      src: "/brand/bryt-short.jpeg",
      alt: "",
      fit: "contain",
    },
  },
} as const satisfies {
  navLogo: ImageAsset;
  footerLogo: ImageAsset;
  editorial: Record<string, ImageAsset>;
};
