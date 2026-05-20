export type WorkLink = { label: string; url: string; kind?: "store" | "testflight" | "web" };

export type WorkItem = {
  slug: string;
  title: string;
  year: string;
  role: string;
  category: string;
  /** One-line, plain-English description used everywhere (lists, meta, hero). */
  oneLiner: string;
  /** A short narrative — 1–3 sentences — for the case study body. */
  body: string[];
  stack: string[];
  status?: "Live" | "TestFlight Beta" | "Compliance" | "Shipped";
  link?: WorkLink;
  /** Optional accent gradient used on the device preview. CSS color stops. */
  accent?: { from: string; to: string; fg?: string };
  /** Path under /public for the app icon (if real one is available). */
  icon?: string;
  /** Initials fallback when no icon is provided. */
  initials?: string;
  /** App Store screenshots per locale. */
  screenshots?: { tr: string[]; en: string[]; pt: string[] };
  /** Support URL for App Store listing. */
  supportUrl?: string;
};

export const work: WorkItem[] = [
  {
    slug: "tebli",
    title: "Tebli.co",
    year: "2026",
    role: "Full-Stack Developer",
    category: "SaaS Product",
    oneLiner:
      "Joined Tebli.co as a full-stack engineer, building and shipping features across the entire stack.",
    body: [
      "Working across the full stack at Tebli.co — from product surfaces and APIs to the infrastructure underneath.",
      "The work blends product engineering and platform thinking: shipping user-facing features quickly without letting the foundations drift.",
    ],
    stack: ["TypeScript", "Full-Stack", "Product", "Platform"],
    status: "Live",
    link: { label: "tebli.co", url: "https://tebli.co", kind: "web" },
    accent: { from: "#0F172A", to: "#1E293B", fg: "#F8FAFC" },
    initials: "TB",
  },
  {
    slug: "color-mosaic",
    title: "Color Mosaic",
    year: "2025",
    role: "Designer & Developer",
    category: "Indie iOS Game",
    oneLiner:
      "A solo-built grid puzzler with daily challenges, multiple difficulties, color-blind palettes and Game Center.",
    body: [
      "Color Mosaic is an indie iOS title I designed, built and shipped end-to-end.",
      "The visual system was built around shape and contrast first, color second — accessibility is the starting point, not an afterthought.",
      "Native iOS, Game Center, offline-first state, daily challenges. Shipped solo to the App Store.",
    ],
    stack: ["iOS", "Swift", "Game Center", "Accessibility"],
    status: "Live",
    link: {
      label: "App Store",
      url: "https://apps.apple.com/us/app/color-mosaic/id6753995552",
      kind: "store",
    },
    accent: { from: "#FACC15", to: "#F97316", fg: "#0A0A0A" },
    icon: "/work/color-mosaic-icon.jpg",
    initials: "CM",
  },
  {
    slug: "ninecells",
    title: "NineCells",
    year: "2025",
    role: "Designer & Developer",
    category: "iOS Game · Sudoku",
    oneLiner:
      "A modern take on Sudoku — clean typography, calm pacing, watchOS companion and Live Activities.",
    body: [
      "NineCells is my take on Sudoku — stripped of the noise that has accumulated around the genre, with calm pacing and a typography-first interface.",
      "Built natively for iOS with a companion watchOS app, a home-screen Widget, App Intents and Live Activities — currently in TestFlight beta.",
    ],
    stack: ["iOS", "watchOS", "Widgets", "Live Activities", "Intents"],
    status: "TestFlight Beta",
    link: {
      label: "Join TestFlight",
      url: "https://testflight.apple.com/join/1yPqzBGs",
      kind: "testflight",
    },
    accent: { from: "#1E1B4B", to: "#312E81", fg: "#EDE9FE" },
    icon: "/work/ninecells-icon.png",
    initials: "9C",
    screenshots: {
      tr: [
        "/work/ninecells/tr/01-device-bottom.jpg",
        "/work/ninecells/tr/02-device-bottom.jpg",
        "/work/ninecells/tr/03-device-bottom.jpg",
        "/work/ninecells/tr/04-device-bottom.jpg",
      ],
      en: [
        "/work/ninecells/en/01-device-bottom.jpg",
        "/work/ninecells/en/02-device-bottom.jpg",
        "/work/ninecells/en/03-device-bottom.jpg",
        "/work/ninecells/en/04-device-bottom.jpg",
      ],
      pt: [
        "/work/ninecells/pt/01-device-bottom.jpg",
        "/work/ninecells/pt/02-device-bottom.jpg",
        "/work/ninecells/pt/03-device-bottom.jpg",
        "/work/ninecells/pt/04-device-bottom.jpg",
      ],
    },
    supportUrl: "https://karabulut.work/ninecells/supporturl",
  },
  {
    slug: "petto",
    title: "Petto",
    year: "2025",
    role: "Designer & Developer",
    category: "iOS App",
    oneLiner:
      "A small, considered iOS app currently in TestFlight beta — designed and built solo.",
    body: [
      "Petto is a personal iOS project, designed and engineered solo, now open to TestFlight beta testers.",
      "The product brief was deliberately tight: do one thing well, with a calm, opinionated interface and no unnecessary surface.",
    ],
    stack: ["iOS", "Swift", "Design"],
    status: "TestFlight Beta",
    link: {
      label: "Join TestFlight",
      url: "https://testflight.apple.com/join/mtmR4BXb",
      kind: "testflight",
    },
    accent: { from: "#10B981", to: "#0E7490", fg: "#ECFEFF" },
    initials: "PT",
  },
  {
    slug: "mydoll",
    title: "MyDoll.app",
    year: "2025",
    role: "Founder & Full-Stack Developer",
    category: "Consumer Product",
    oneLiner:
      "Founded and solo-built MyDoll — frontend, backend, infrastructure, brand and operations.",
    body: [
      "MyDoll is an independent consumer product I founded and built without a co-founder or team — the full stack written by one person.",
      "Shipping alone is a deliberate constraint: it forces clarity on what the product actually has to be, instead of what a team could theoretically build.",
    ],
    stack: ["Full-Stack", "Product", "Brand", "Ops"],
    status: "Live",
    link: { label: "mydoll.app", url: "https://mydoll.app", kind: "web" },
    accent: { from: "#EC4899", to: "#BE185D", fg: "#FDF2F8" },
    initials: "MD",
  },
  {
    slug: "ganbitera",
    title: "Ganbitera",
    year: "2024",
    role: "Cyber Security Team Lead",
    category: "NFT Marketplace",
    oneLiner:
      "Led security on an NFT marketplace — built ISO 27001 and 27701 compliance from zero.",
    body: [
      "Ganbitera was a young NFT marketplace operating without a formal security baseline. The risk profile demanded a fast but rigorous compliance posture.",
      "Drafted policies, mapped controls, ran the internal audit cycle and led the external audit through to ISO 27001 and 27701 certification.",
      "Embedded security review into product — threat modeling for new features, secure SDLC and incident response playbooks.",
    ],
    stack: ["ISO 27001", "ISO 27701", "Risk", "SOC"],
    status: "Compliance",
    link: { label: "ganbitera.io", url: "https://ganbitera.io", kind: "web" },
    accent: { from: "#1F2937", to: "#111827", fg: "#F9FAFB" },
    initials: "GB",
  },
  {
    slug: "inpocket-ai",
    title: "Inpocket.ai",
    year: "2023",
    role: "Product Owner",
    category: "AI Ventures",
    oneLiner:
      "Owned three parallel ventures — Inpocket.games (Learn Isle), Inpocket.travel and Cordies Agency.",
    body: [
      "Inpocket.ai was an AI-first parent company with three distinct product bets running in parallel, each with its own roadmap and audience strategy.",
      "Learn Isle: an educational game built to grow children's cognitive abilities through play — curriculum-aligned mechanics, not gamified worksheets.",
      "Inpocket.travel: an AI travel companion that plans, books and adapts itineraries without the bloat of a conventional booking app.",
      "Cordies Agency: a boutique agency turning AI artists into digital influencers — talent management for a generation of non-human creatives.",
    ],
    stack: ["Product", "AI", "Roadmap", "Scrum"],
    status: "Shipped",
    accent: { from: "#0EA5E9", to: "#1D4ED8", fg: "#F0F9FF" },
    initials: "IP",
  },
  {
    slug: "hafiz-mustafa",
    title: "Hafiz Mustafa 1864",
    year: "2023",
    role: "Regional IT Manager",
    category: "Information Security",
    oneLiner:
      "Ran IT operations and information security for a 160-year-old hospitality brand at scale.",
    body: [
      "A heritage brand operating across multiple sites, with the IT estate and information security baseline both due an overhaul.",
      "Day-to-day stewardship of Micros 3700, Simphony and the helpdesk function across the regional footprint.",
      "Stood up SOC L1 monitoring, firewall management and an ISO 27001 / 27701 compliance program.",
    ],
    stack: ["IT Ops", "SOC L1", "ISO 27001", "Firewall"],
    status: "Shipped",
    accent: { from: "#7C2D12", to: "#451A03", fg: "#FFEDD5" },
    initials: "HM",
  },
  {
    slug: "doldur-music",
    title: "Doldur Music",
    year: "2022",
    role: "Co-founder",
    category: "AI Music Agency",
    oneLiner:
      "Co-founded an AI musician agency — three artists, 30+ AI-composed tracks, 20K+ streams.",
    body: [
      "Built before generative music was a dinner-table conversation — an experiment in whether AI artists could be released and marketed as real ones.",
      "Three distinct AI personas, each with their own voice, visual identity and release cadence.",
      "Over thirty fully AI-composed tracks distributed through standard streaming channels — 20K+ streams across digital platforms.",
    ],
    stack: ["Generative AI", "Music", "Brand", "Distribution"],
    status: "Shipped",
    link: { label: "doldurmusic.com", url: "https://doldurmusic.com", kind: "web" },
    accent: { from: "#DC2626", to: "#7F1D1D", fg: "#FEF2F2" },
    initials: "DM",
  },
];

export function getWork(slug: string): WorkItem | undefined {
  return work.find((w) => w.slug === slug);
}

export function getAdjacentWork(slug: string): {
  prev: WorkItem;
  next: WorkItem;
} {
  const i = work.findIndex((w) => w.slug === slug);
  const prev = work[(i - 1 + work.length) % work.length];
  const next = work[(i + 1) % work.length];
  return { prev, next };
}
