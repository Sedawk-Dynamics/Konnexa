import type { MetadataRoute } from "next";
import { legalLinks, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const now = new Date();

  // Home + in-page section anchors so search engines can index sitelinks.
  const anchors = ["", "#services", "#about", "#team", "#contact"];

  const homeAndAnchors: MetadataRoute.Sitemap = anchors.map((anchor) => ({
    url: `${base}/${anchor}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: anchor === "" ? 1 : 0.7,
  }));

  const legal: MetadataRoute.Sitemap = legalLinks.map((l) => ({
    url: `${base}${l.href}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.3,
  }));

  return [...homeAndAnchors, ...legal];
}
