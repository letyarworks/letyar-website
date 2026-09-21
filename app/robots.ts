import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/dashboard", "/login", "/signup"],
    },
    sitemap: "https://letyarlabs.com/sitemap.xml",
    host: "https://letyarlabs.com",
  };
}
