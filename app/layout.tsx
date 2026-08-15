import type { Metadata, Viewport } from "next";
import { Instrument_Sans, Newsreader } from "next/font/google";
import { content } from "./content";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: content.site.title,
  description: content.site.description,
  applicationName: content.site.name,
  keywords: [...content.site.keywords],
  openGraph: {
    type: "website",
    title: content.site.title,
    description: content.site.description,
    siteName: content.site.name,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#F9F5EA",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={content.locale}
      className={`${instrumentSans.variable} ${newsreader.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
