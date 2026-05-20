import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fungy — Fuel Your Mind. Feed Your Body.",
  description:
    "The premium mushroom superfood drink that replaces your morning ritual. Clean energy, sharp focus, better gut health — without the crash.",
  keywords: [
    "mushroom coffee",
    "superfood drink",
    "lion's mane",
    "reishi",
    "cordyceps",
    "functional mushrooms",
    "clean energy",
  ],
  openGraph: {
    title: "Fungy — Fuel Your Mind. Feed Your Body.",
    description:
      "The premium mushroom superfood drink for high performers. Clean energy, sharp focus, better gut health.",
    siteName: "Fungy",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-canvas text-ink antialiased overflow-x-hidden">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
