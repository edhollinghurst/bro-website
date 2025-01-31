import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import type React from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "British Rainbow Open | LGBTQ+ Golf Tournament",
  description:
    "Join us for the inaugural LGBTQ+ inclusive golf tournament in Scotland, the home of golf. British Rainbow Open, September 2025.",
  keywords: [
    "golf",
    "LGBTQ+",
    "tournament",
    "Scotland",
    "inclusive",
    "British Rainbow Open",
  ],
  authors: [{ name: "British Rainbow Open Organizers" }],
  openGraph: {
    title: "British Rainbow Open | LGBTQ+ Golf Tournament",
    description:
      "Join us for the inaugural LGBTQ+ inclusive golf tournament in Scotland, the home of golf. British Rainbow Open, September 2025.",
    url: "https://britishrainbowopen.com",
    siteName: "British Rainbow Open",
    images: [
      {
        url: "https://www.dalmahoyhotelandcountryclub.co.uk/media/3824/dalmahoy-golf-3.jpg",
        width: 1200,
        height: 630,
        alt: "Scottish Golf Resort - Dalmahoy Hotel and Country Club",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "British Rainbow Open | LGBTQ+ Golf Tournament",
    description:
      "Join us for the inaugural LGBTQ+ inclusive golf tournament in Scotland, the home of golf. British Rainbow Open, September 2025.",
    images: [
      "https://www.dalmahoyhotelandcountryclub.co.uk/media/3824/dalmahoy-golf-3.jpg",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/icon?id=favicon-16", sizes: "16x16", type: "image/png" },
      { url: "/icon?id=favicon-32", sizes: "32x32", type: "image/png" },
      {
        url: "/icon?id=android-chrome-192",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/icon?id=android-chrome-512",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    shortcut: "/icon.svg",
    apple: "/apple-icon",
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/apple-icon",
      },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Script
        src="https://scripts.simpleanalyticscdn.com/latest.js"
        data-collect-dnt="true"
        defer
      />
    </html>
  );
}
