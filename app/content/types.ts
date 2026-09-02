export type NavigationItem = Readonly<{
  label: string;
  href: string;
}>;

export type ServiceContent = Readonly<{
  number: string;
  title: string;
  description: string;
  accent: "pink" | "blue" | "orange" | "green";
}>;

export type TestimonialPlaceholderContent = Readonly<{
  source: string;
  quote: string;
  author: string;
}>;
