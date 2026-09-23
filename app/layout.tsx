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
  title: "Letyar Labs — Every build carries a fingerprint",
  description:
    "Letyar (လက်ရာ) is a Yangon-based Web, Software & Product studio. Every build carries a fingerprint.",
  openGraph: {
    title: "Letyar Labs — Every build carries a fingerprint",
    description:
      "Letyar (လက်ရာ) is a Yangon-based Web, Software & Product studio. Every build carries a fingerprint.",
    url: "https://letyarlabs.com",
    siteName: "Letyar Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Letyar Labs — Every build carries a fingerprint",
    description:
      "Letyar (လက်ရာ) is a Yangon-based Web, Software & Product studio. Every build carries a fingerprint.",
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
        <Header />
        <main>{children}</main>
        <Footer />
        <ViberButton />
      </body>
    </html>
  );
}
