// This is the single locale boundary for now. Add another locale module and
// select it here when locale-aware routing is introduced.
export { enContent as content } from "./en";
export type { AppContent } from "./en";
export type { NavigationItem } from "./types";

export function resolveContentLabel(
  labels: Readonly<Record<string, string>>,
  key: string,
) {
  return labels[key] ?? key;
}
