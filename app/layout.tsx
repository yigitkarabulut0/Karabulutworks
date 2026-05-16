import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import Script from "next/script";
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
    default: "Yigit Karabulut — Product Owner, Cyber Security Lead, AI Enthusiast",
    template: "%s · Yigit Karabulut",
  },
  description:
    "Portfolio of Yigit Karabulut — Product Owner, Cyber Security Lead and AI builder based between London and Istanbul.",
  applicationName: "Yigit Karabulut",
  authors: [{ name: "Yigit Karabulut", url: SITE_URL }],
  creator: "Yigit Karabulut",
  keywords: [
    "Yigit Karabulut",
    "Product Owner",
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
      "Product Owner, Cyber Security Lead & AI builder based between London and Istanbul.",
    siteName: "Yigit Karabulut",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yigit Karabulut — Portfolio",
    description: "Product Owner, Cyber Security Lead & AI builder.",
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

const themeInit = `(function(){try{var t=localStorage.getItem('yk-theme');if(!t){t='dark';}document.documentElement.dataset.theme=t;}catch(e){document.documentElement.dataset.theme='dark';}if('scrollRestoration' in history){history.scrollRestoration='manual';}try{window.scrollTo(0,0);}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
      data-theme="dark"
      suppressHydrationWarning
    >
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInit}
        </Script>
      </head>
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
