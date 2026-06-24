import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const now = new Date();

  // Single-page site with in-page anchors. We list the canonical home plus the
  // primary section anchors so search engines can index sitelinks for them.
  const anchors = ["", "#services", "#about", "#team", "#contact"];

  return anchors.map((anchor) => ({
    url: `${base}/${anchor}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: anchor === "" ? 1 : 0.7,
  }));
}
