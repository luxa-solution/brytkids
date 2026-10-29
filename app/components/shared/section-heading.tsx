export function SectionHeading({ eyebrow, title, copy, layout = "default", light = false }: {
  eyebrow: string;
  title: string;
  copy?: string;
  layout?: "default" | "center" | "split" | "interior";
  light?: boolean;
}) {
  const className = layout === "interior" ? "inner-heading" :
    `section-heading${layout === "default" ? "" : ` section-heading--${layout}`}${light ? " section-heading--light" : ""}`;
  return <div className={className}>
    {layout === "split" ? <div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div> :
      <><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></>}
    {copy ? <p>{copy}</p> : null}
  </div>;
}
