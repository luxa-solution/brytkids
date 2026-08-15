import type { ReactNode } from "react";
import type { SiteDestination } from "../site-config";

export function DestinationLink({
  destination,
  className,
  disabledTitle,
  statusLabel,
  children,
}: {
  destination: SiteDestination;
  className: string;
  disabledTitle: string;
  statusLabel?: string;
  children: ReactNode;
}) {
  if (!destination.href) {
    return (
      <span
        className={`${className} is-disabled`}
        aria-disabled="true"
        title={disabledTitle}
      >
        {children}
        {statusLabel ? (
          <span className="destination-status" aria-hidden="true">
            {statusLabel}
          </span>
        ) : null}
      </span>
    );
  }

  return (
    <a
      className={className}
      href={destination.href}
      target={destination.external ? "_blank" : undefined}
      rel={destination.external ? "noreferrer" : undefined}
    >
      {children}
    </a>
  );
}
