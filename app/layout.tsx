import type { Metadata } from "next";
import { JetBrains_Mono, Noto_Sans_Myanmar } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ViberButton from "@/components/ViberButton";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

const myanmar = Noto_Sans_Myanmar({
  subsets: ["myanmar"],
  variable: "--font-mm",
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://letyarlabs.com"),
  title: {
    default: "Letyar Labs — Web, Software & Product",
    template: "%s — Letyar Labs",
  },
  description:
    "Letyar Labs builds practical websites, software and digital products from Yangon, Myanmar. Every build carries a fingerprint.",
  applicationName: "Letyar Labs",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    type: "website",
    url: "https://letyarlabs.com",
    siteName: "Letyar Labs",
    title: "Letyar Labs — Web, Software & Product",
    description:
      "Practical websites, software and digital products from Yangon, Myanmar.",
  },
  twitter: {
    card: "summary",
    title: "Letyar Labs — Web, Software & Product",
    description:
      "Practical websites, software and digital products from Yangon, Myanmar.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${mono.variable} ${myanmar.variable}`}>
      <link
        rel="stylesheet"
        href="https://api.fontshare.com/v2/css?f[]=general-sans@600&f[]=satoshi@400,500&display=swap"
      />
      <body className="font-body bg-ink text-paper antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://letyarlabs.com/#organization",
                  name: "Letyar Labs",
                  alternateName: "Letyar",
                  url: "https://letyarlabs.com",
                  logo: "https://letyarlabs.com/brand/logo/schema-logo.svg",
                  email: "hello@letyarlabs.com",
                  description:
                    "Web, software and digital product engineering from Yangon, Myanmar.",
                  sameAs: [
                    "https://github.com/letyarworks",
                    "https://x.com/letyarworks",
                    "https://t.me/letyarworks",
                    "https://www.linkedin.com/in/letyarworks"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://letyarlabs.com/#website",
                  url: "https://letyarlabs.com",
                  name: "Letyar Labs",
                  alternateName: "Letyar",
                  publisher: {
                    "@id": "https://letyarlabs.com/#organization"
                  }
                }
              ]
            })
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <ViberButton />
      </body>
    </html>
  );
}
