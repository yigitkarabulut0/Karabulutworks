import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Cursor } from "@/components/cursor";
import { Splash } from "@/components/splash";
import { Nav } from "@/components/nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://karabulut.work";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Yigit Karabulut — Full-Stack Human",
    template: "%s · Yigit Karabulut",
  },
  description:
    "Portfolio of Yigit Karabulut — Full-Stack Human building product, security and AI systems between London and Istanbul.",
  applicationName: "Yigit Karabulut",
  authors: [{ name: "Yigit Karabulut", url: SITE_URL }],
  creator: "Yigit Karabulut",
  keywords: [
    "Yigit Karabulut",
    "Full-Stack Human",
    "Cyber Security",
    "AI",
    "Portfolio",
    "ISO 27001",
    "Scrum Master",
  ],
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Yigit Karabulut — Portfolio",
    description:
      "Full-Stack Human building product, security and AI systems between London and Istanbul.",
    siteName: "Yigit Karabulut",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yigit Karabulut — Portfolio",
    description: "Full-Stack Human building product, security and AI systems.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f2ee" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-bg text-fg">
        <ThemeProvider>
          <SmoothScroll />
          <Cursor />
          <Splash />
          <Nav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
