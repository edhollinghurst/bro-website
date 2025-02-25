import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import type React from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "British Rainbow Open | LGBTQ+ Golf Tournament",
  description:
    "Join us for the inaugural LGBTQ+ inclusive golf tournament at Dalmahoy Hotel & Country Club, Scotland. 11-13 September 2025. Early bird rates available.",
  keywords: [
    "golf",
    "LGBTQ+",
    "tournament",
    "Scotland",
    "inclusive",
    "British Rainbow Open",
    "Dalmahoy",
  ],
  authors: [{ name: "British Rainbow Open Organizers" }],
  openGraph: {
    title: "British Rainbow Open | LGBTQ+ Golf Tournament",
    description:
      "Join us for the inaugural LGBTQ+ inclusive golf tournament at Dalmahoy Hotel & Country Club, Scotland. 11-13 September 2025. Early bird rates available.",
    url: "https://britishrainbowopen.com",
    siteName: "British Rainbow Open",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "British Rainbow Open | LGBTQ+ Golf Tournament",
    description:
      "Join us for the inaugural LGBTQ+ inclusive golf tournament at Dalmahoy Hotel & Country Club, Scotland. 11-13 September 2025. Early bird rates available.",
    creator: "@brogolfuk",
    site: "@brogolfuk",
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
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Script
          src="https://scripts.simpleanalyticscdn.com/latest.js"
          data-collect-dnt="true"
          defer
        />
        <noscript>
          <img
            src="https://queue.simpleanalyticscdn.com/noscript.gif"
            alt=""
            referrerPolicy="no-referrer-when-downgrade"
          />
        </noscript>
      </body>
    </html>
  );
}

import "./globals.css";
