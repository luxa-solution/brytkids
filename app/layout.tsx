import type { Metadata, Viewport } from "next";
import { Instrument_Sans, Newsreader } from "next/font/google";
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
  title: "Bryt Kids | Raise Children Intentionally",
  description:
    "Helping parents raise children of faith, character, confidence and lifelong learning.",
  applicationName: "Bryt Kids",
  keywords: [
    "intentional parenting",
    "child development",
    "homeschooling",
    "parent coaching",
    "family education",
  ],
  openGraph: {
    type: "website",
    title: "Bryt Kids | Raise Children Intentionally",
    description:
      "Helping parents raise children of faith, character, confidence and lifelong learning.",
    siteName: "Bryt Kids",
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
      lang="en"
      className={`${instrumentSans.variable} ${newsreader.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
