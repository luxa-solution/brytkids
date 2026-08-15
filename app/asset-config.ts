export type ImageAsset = Readonly<{
  src: string;
  alt: string;
  fit?: "cover" | "contain";
}>;

export const siteAssets = {
  logo: {
    src: "/icon.svg",
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
  logo: ImageAsset;
  editorial: Record<string, ImageAsset>;
};
