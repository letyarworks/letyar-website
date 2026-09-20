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
  subsets: ["latin"],
  variable: "--font-mm",
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Letyar Labs — Every build carries a fingerprint",
  description:
    "Letyar (လက်ရာ) is a Yangon-based Web, Software & Product studio. Every build carries a fingerprint.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${mono.variable} ${myanmar.variable}`}>
      {/* General Sans + Satoshi are Fontshare-exclusive faces named in
          TYPOGRAPHY.md — loaded here since next/font/google doesn't carry them.
          If Fontshare is unreachable in your environment, self-host the two
          families instead (see README "Fonts"). */}
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
