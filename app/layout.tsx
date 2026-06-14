import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GPA Calculator | Track Your Academic Performance",
  description:
    "Calculate your GPA and CGPA across all semesters with ease. A clean and modern calculator for academic performance tracking.",
  keywords: ["GPA calculator", "CGPA calculator", "academic performance", "grade point average", "student tools"],
  authors: [{ name: "GPA Calculator" }],
  creator: "GPA Calculator",
  publisher: "GPA Calculator",
  generator: "hamza ",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "GPA Calculator | Track Your Academic Performance",
    description: "Calculate your GPA and CGPA across all semesters with ease. A clean and modern calculator for academic performance tracking.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "GPA Calculator | Track Your Academic Performance",
    description: "Calculate your GPA and CGPA across all semesters with ease. A clean and modern calculator for academic performance tracking.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}