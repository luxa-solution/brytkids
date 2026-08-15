import Image from "next/image";
import { siteAssets, type ImageAsset } from "../asset-config";

export function BrandMark({
  alt,
  priority = false,
}: {
  alt: string;
  priority?: boolean;
}) {
  return (
    <span className="brand-mark">
      <Image
        src={siteAssets.logo.src}
        alt={alt}
        width={64}
        height={64}
        priority={priority}
        sizes="64px"
      />
    </span>
  );
}

export function BrandArtwork({
  asset,
  className = "",
}: {
  asset: ImageAsset;
  className?: string;
}) {
  return (
    <span className={`brand-artwork ${className}`} aria-hidden="true">
      <Image
        src={asset.src}
        alt=""
        fill
        sizes="192px"
        unoptimized
      />
    </span>
  );
}
