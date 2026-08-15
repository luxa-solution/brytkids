import Image from "next/image";
import type { ImageAsset } from "../asset-config";

export function EditorialMedia({
  asset,
  number,
  description,
  label,
  tone,
  className = "",
}: {
  asset: ImageAsset;
  number: string;
  description: string;
  label: string;
  tone: "blue" | "orange" | "green";
  className?: string;
}) {
  const fit = asset.fit ?? "cover";

  return (
    <figure
      className={`photo-placeholder photo-placeholder--${tone} ${className}`}
    >
      <div
        className={`photo-placeholder__image photo-placeholder__image--${fit}`}
        aria-hidden="true"
      >
        <Image
          src={asset.src}
          alt=""
          fill
          loading="eager"
          unoptimized
          sizes="(max-width: 799px) 100vw, 50vw"
        />
      </div>
      <div className="photo-placeholder__frame" aria-hidden="true" />
      <span className="shape shape--circle" aria-hidden="true" />
      <span className="shape shape--diamond" aria-hidden="true" />
      <span className="photo-placeholder__number">{number}</span>
      <figcaption className="photo-placeholder__caption">
        <span className="photo-placeholder__label">{label}</span>
        <p>{description}</p>
      </figcaption>
    </figure>
  );
}
