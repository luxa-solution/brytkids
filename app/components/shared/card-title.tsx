/** The same sans/serif pairing used by the closing banner, at card scale. */
export function CardTitle({ children, as: Heading = "h3" }: {
  children: string;
  as?: "h2" | "h3";
}) {
  const words = children.trim().split(/\s+/);
  const accent = words.splice(-(words.length > 3 ? 2 : 1)).join(" ");
  return <Heading>{words.length ? `${words.join(" ")} ` : ""}<em>{accent}</em></Heading>;
}
