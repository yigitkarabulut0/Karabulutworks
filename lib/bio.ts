export const bio = {
  name: "Yigit Karabulut",
  shortName: "YK",
  dob: "2002-01-31",
  yearOfBirth: 2002,
  roles: ["Product Owner", "Cyber Security Lead", "AI Enthusiast"],
  tagline:
    "Product Owner, Cyber Security Lead & AI builder based between London and Istanbul.",
  longBio:
    "I build software end-to-end and break it when I have to. By day I ship product and platform work as a full-stack engineer at Tebli.co; in parallel I run indie iOS releases — Color Mosaic on the App Store, NineCells and Petto on TestFlight — and lead my own AI side bets. Before this I owned roadmaps as Scrum Master and Product Owner across three AI ventures at Inpocket.ai, and stood up information security from zero at Ganbitera (NFT) and Hafiz Mustafa 1864 — ISO 27001 / 27701 audits, SOC operations and offensive security work. I care about clarity, small teams shipping with conviction, and software that has a point of view.",
  currently: [
    "Full-stack at Tebli.co",
    "Shipping indie iOS — NineCells, Petto on TestFlight",
    "Maintaining Color Mosaic on the App Store",
    "Open to short, considered consulting engagements",
  ],
  location: "London / Istanbul",
  email: "Yigit@Karabulut.work",
  phone: "+44 7386 423863",
  socials: {
    linkedin: {
      label: "LinkedIn",
      handle: "yigitkarabulut",
      url: "https://www.linkedin.com/in/yigitkarabulut",
    },
    instagram: {
      label: "Instagram",
      handle: "iamyigitkarabulut",
      url: "https://www.instagram.com/iamyigitkarabulut",
    },
    email: {
      label: "Email",
      handle: "Yigit@Karabulut.work",
      url: "mailto:Yigit@Karabulut.work",
    },
  },
} as const;

export type SkillGroup =
  | "languages"
  | "frontend"
  | "mobile"
  | "backend"
  | "data"
  | "infra"
  | "security"
  | "practice";

export type Skill = { label: string; note?: string; group: SkillGroup };

export const skills: Skill[] = [
  // Languages
  { label: "TypeScript", note: "primary", group: "languages" },
  { label: "Swift", note: "iOS · watchOS", group: "languages" },
  { label: "Go", note: "backend services", group: "languages" },
  { label: "JavaScript", group: "languages" },
  { label: "Python", note: "ML / scripting", group: "languages" },
  { label: "C++", group: "languages" },
  { label: "SQL", group: "languages" },

  // Frontend / Web
  { label: "Next.js", note: "App Router", group: "frontend" },
  { label: "React", group: "frontend" },
  { label: "Vite", group: "frontend" },
  { label: "Tailwind CSS", group: "frontend" },
  { label: "shadcn/ui · Radix", group: "frontend" },
  { label: "Framer Motion · GSAP · Lenis", group: "frontend" },
  { label: "Three.js · react-three-fiber", group: "frontend" },
  { label: "Pixi.js", note: "2D game runtime", group: "frontend" },
  { label: "i18n", note: "next-i18next · react-i18next", group: "frontend" },

  // Mobile / Native
  { label: "SwiftUI", note: "ColorMosaic · NineCells · Petto", group: "mobile" },
  { label: "WidgetKit · Live Activities", group: "mobile" },
  { label: "App Intents · Shortcuts", group: "mobile" },
  { label: "watchOS", group: "mobile" },
  { label: "Game Center", group: "mobile" },
  { label: "React Native · Expo", note: "expo-router", group: "mobile" },

  // Backend
  { label: "Go + Gin", note: "REST APIs", group: "backend" },
  { label: "gorilla/mux · WebSockets", group: "backend" },
  { label: "Node.js · Express", group: "backend" },
  { label: "REST · WebSocket · SSE", group: "backend" },
  { label: "Auth · sessions · CSRF", group: "backend" },

  // Data
  { label: "PostgreSQL", note: "pgx", group: "data" },
  { label: "Supabase", group: "data" },
  { label: "Redis", group: "data" },
  { label: "S3 · object storage", group: "data" },

  // Infra / Platform
  { label: "Docker · docker-compose", group: "infra" },
  { label: "AWS", note: "SDK v2 · S3 · IAM", group: "infra" },
  { label: "Vercel", note: "deploy · analytics", group: "infra" },
  { label: "Linux servers", group: "infra" },
  { label: "CI / pre-commit · pnpm workspaces · Turbo", group: "infra" },

  // ML / AI
  { label: "PyTorch · safetensors", note: "ACE-Step audio model", group: "data" },
  { label: "HuggingFace ecosystem", group: "data" },

  // Security
  { label: "ISO 27001 / 27701", note: "audit lead", group: "security" },
  { label: "SOC L1 monitoring", group: "security" },
  { label: "Firewall operations", group: "security" },
  { label: "Pentest+ · offensive tooling", group: "security" },
  { label: "Threat modeling · secure SDLC", group: "security" },

  // Practice
  { label: "Product Ownership · Roadmapping", group: "practice" },
  { label: "Scrum Mastery", group: "practice" },
  { label: "End-to-end shipping", note: "solo founder pace", group: "practice" },
  { label: "AI product strategy", group: "practice" },
  { label: "Information governance", group: "practice" },
];

export const certifications: { title: string; issuer: string; year?: string }[] = [
  { title: "CompTIA Pentest+", issuer: "CompTIA" },
  { title: "Pre Security", issuer: "TryHackMe" },
  { title: "Introduction to Cyber Security", issuer: "TryHackMe" },
  { title: "DoS / DDoS Attacks & Defences", issuer: "Turkcell Academy" },
  { title: "Kali Linux", issuer: "BTK Academy" },
  { title: "Social Engineering & Phishing", issuer: "BTK Academy" },
  { title: "Cyber Security in Banking", issuer: "BTK Academy" },
  { title: "Cyber Security", issuer: "Fintelligence" },
  { title: "Cyber Security", issuer: "StationX" },
  { title: "ISO 27001 Chief Inspector", issuer: "BilgiNetAkademi" },
];

export const experience: {
  year: string;
  company: string;
  role: string;
  blurb: string;
  link?: string;
}[] = [
  {
    year: "2026",
    company: "Tebli.co",
    role: "Full-Stack Developer",
    blurb:
      "Shipping product and platform work end-to-end across the full stack.",
    link: "https://tebli.co",
  },
  {
    year: "2025",
    company: "ColorMosaic",
    role: "Developer",
    blurb:
      "Designed and shipped an indie iOS puzzle game — grids, multiple difficulties, daily challenges, color-blind accessibility and Game Center.",
    link: "https://apps.apple.com/us/app/color-mosaic/id6753995552",
  },
  {
    year: "2025",
    company: "MyDoll.app",
    role: "Founder & Full-Stack Developer",
    blurb:
      "Founded and solo-built MyDoll end-to-end — frontend, backend, infrastructure and product direction.",
    link: "https://mydoll.app",
  },
  {
    year: "2024",
    company: "Ganbitera",
    role: "Cyber Security Team Lead",
    blurb:
      "Led security on an NFT marketplace; established ISO 27001 and 27701 compliance from the ground up.",
    link: "https://ganbitera.io",
  },
  {
    year: "2023",
    company: "Inpocket.ai",
    role: "Product Owner",
    blurb:
      "Owned three ventures in parallel — Inpocket.games (Learn Isle), Inpocket.travel (AI travel companion) and Cordies Agency (AI talent).",
  },
  {
    year: "2023",
    company: "Hafiz Mustafa 1864",
    role: "Regional IT Manager",
    blurb:
      "Ran information security and IT operations — Micros 3700 & Simphony, helpdesk, ISO 27001 / 27701 audits, SOC L1, firewall.",
  },
  {
    year: "2022",
    company: "Doldur Music",
    role: "Co-founder",
    blurb:
      "Built an AI musician agency — three AI artists, 30+ fully AI-composed tracks, 20K+ digital streams.",
    link: "https://doldurmusic.com",
  },
];

export const marqueeWords: string[] = [
  "Product Owner",
  "Cyber Security Lead",
  "AI Enthusiast",
  "ISO 27001",
  "Scrum Master",
  "Pentest+",
  "Founder",
  "Full-Stack",
  "London / Istanbul",
];

/**
 * Pool of role phrases the splash sequence picks from on each fresh load.
 * Mix of fields (sober) and identity phrases (warm). Three of these are
 * shuffled into every splash run, so refresh = new flavor.
 */
export const splashRoles: string[] = [
  "Cyber Security",
  "Software Development",
  "Scrum Mastery",
  "Product Strategy",
  "AI Engineering",
  "Information Security",
  "Full-Stack Engineering",
  "Indie iOS Releases",
  "Full-Stack Human",
  "Curious Builder",
  "Solo Operator",
  "Generalist by Design",
  "Maker of Quiet Products",
  "Shipping in Public",
];
