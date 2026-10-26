import Image from "next/image";
import type { ImageAsset } from "../asset-config";

export function BrandMark({
  asset,
  alt,
  variant = "nav",
  priority = false,
}: {
  asset: ImageAsset;
  alt: string;
  variant?: "nav" | "footer";
  priority?: boolean;
}) {
  return (
    <span className={`brand-mark brand-mark--${variant}`}>
      <Image
        src={asset.src}
        alt={alt}
        width={256}
        height={256}
        priority={priority}
        sizes="(max-width: 640px) 46px, 72px"
        unoptimized
        style={{ objectFit: asset.fit ?? "cover" }}
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
