import type { MetadataRoute } from "next";
import { work } from "@/lib/work";

const SITE = "https://karabulut.work";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: SITE, lastModified: now, changeFrequency: "monthly", priority: 1 },
    ...work.map((w) => ({
      url: `${SITE}/work/${w.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.8,
    })),
  ];
}
