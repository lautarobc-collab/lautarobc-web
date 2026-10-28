import type { Metadata, Viewport } from "next";
import { SITE_URL, type Dict } from "@/content/site";

export const viewport: Viewport = {
  themeColor: "#2E5E4E",
  width: "device-width",
  initialScale: 1,
};

export function buildMetadata(t: Dict): Metadata {
  const ogImage = t.locale === "en" ? "/og/og-en.png" : "/og/og-es.png";
  return {
    metadataBase: new URL(SITE_URL),
    title: t.meta.title,
    description: t.meta.description,
    authors: [{ name: t.name }],
    alternates: {
      canonical: t.path,
      languages: { es: "/", en: "/en", "x-default": "/" },
    },
    openGraph: {
      type: "profile",
      url: t.path,
      siteName: t.name,
      title: t.meta.title,
      description: t.meta.description,
      locale: t.locale === "en" ? "en_GB" : "es_ES",
      alternateLocale: t.locale === "en" ? ["es_ES"] : ["en_GB"],
      images: [{ url: ogImage, width: 1200, height: 630, alt: t.meta.ogAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: t.meta.title,
      description: t.meta.description,
      images: [ogImage],
    },
    robots: { index: true, follow: true },
    icons: { icon: "/icon.svg", apple: "/apple-touch-icon.png" },
  };
}
