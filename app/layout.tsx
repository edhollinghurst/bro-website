import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "British Rainbow Open | LGBTQ+ Golf Tournament",
  description:
    "Join us for the inaugural LGBTQ+ inclusive golf tournament in Scotland, the home of golf. British Rainbow Open, September 2025.",
  keywords: ["golf", "LGBTQ+", "tournament", "Scotland", "inclusive", "British Rainbow Open"],
  authors: [{ name: "British Rainbow Open Organizers" }],
  openGraph: {
    title: "British Rainbow Open | LGBTQ+ Golf Tournament",
    description:
      "Join us for the inaugural LGBTQ+ inclusive golf tournament in Scotland, the home of golf. British Rainbow Open, September 2025.",
    url: "https://britishrainbowopen.com",
    siteName: "British Rainbow Open",
    images: [
      {
        url: "https://images.contentstack.io/v3/assets/blt99dd26276e65134a/blt1acca636bd57faed/5e7e14289da207172a2c5e6d/Best-Golf-Courses-In-Scotland-Turnberry.jpg",
        width: 1200,
        height: 630,
        alt: "Scottish Golf Course - Turnberry",
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
      "https://images.contentstack.io/v3/assets/blt99dd26276e65134a/blt1acca636bd57faed/5e7e14289da207172a2c5e6d/Best-Golf-Courses-In-Scotland-Turnberry.jpg",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/icon.svg",
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

