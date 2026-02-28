import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "The Abundance Sisters | The Leading Edge Life",
    template: "%s | The Abundance Sisters",
  },
  description:
    "Spiritual liberation of mind, body, and soul. Transform your life with The Abundance Sisters — energy clearing, divine guidance, and soul alignment.",
  keywords: [
    "abundance sisters",
    "spiritual coaching",
    "energy clearing",
    "soul alignment",
    "leading edge life",
    "brain shift",
    "divine guidance",
    "transformation",
  ],
  openGraph: {
    title: "The Abundance Sisters | The Leading Edge Life",
    description:
      "Remember the truth of who you are. Transform your life with divine guidance, energy clearing, and soul alignment.",
    url: "https://www.theleadingedge.life",
    siteName: "The Leading Edge Life",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Abundance Sisters | The Leading Edge Life",
    description:
      "Remember the truth of who you are. Spiritual liberation of mind, body, and soul.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-cream-50 text-plum-900 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
