import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://gpa-calculator-com.vercel.app/"),

  title: "GPA Calculator | Track Your Academic Performance",

  description:
    "Calculate your GPA and CGPA across all semesters with ease.",

  keywords: [
    "GPA calculator",
    "CGPA calculator",
    "student tools",
    "grade calculator",
  ],

  authors: [{ name: "GPA Calculator" }],

  icons: {
    icon: "/icon-light-32x32.png",
    apple: "/apple-icon.png",
  },

  openGraph: {
    title: "GPA Calculator",
    description:
      "Calculate your GPA and CGPA across all semesters with ease.",
    type: "website",

    url: "https://gpa-calculator-com.vercel.app/",

    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "GPA Calculator Logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "GPA Calculator",
    description:
      "Calculate your GPA and CGPA across all semesters with ease.",
    images: ["/logo.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",

    name: "GPA Calculator",
    url: "https://gpa-calculator-com.vercel.app/",
    logo: "https://gpa-calculator-com.vercel.app/logo.png",
  }

  return (
    <html lang="en">
      <body className="font-sans antialiased">

        {/* SEO Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />

        <Navbar />

        <main>{children}</main>

        <Footer />
        <Analytics />
      </body>
    </html>
  )
}