import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.com"), // Update this with actual production URL later
  title: {
    default: "Group of Companies | OCI, TCI, WDS",
    template: "%s | Group of Companies",
  },
  description:
    "Leading manufacturers of Specialty Chemicals since 1996. Oriental Chemical Industries (OCI), Textile Chemical Industries (TCI), and W.D.S. Synthetic Polymer Industries.",
  keywords: [
    "Oriental Chemical Industries",
    "Textile Chemical Industries",
    "WDS Synthetic Polymer",
    "PVAc Adhesives Pakistan",
    "Acrylic Emulsions Karachi",
    "Textile Auxiliary Chemicals",
    "Specialty Chemicals Pakistan",
    "Korangi Industrial Area Chemicals",
  ],
  authors: [
    {
      name: "Group of Companies",
    },
  ],
  openGraph: {
    title: "Group of Companies | Premium Chemical Manufacturing",
    description:
      "Your Trusted Partner For Specialty Technology And Process since 1996.",
    siteName: "Group of Companies",
    images: [
      {
        url: "/og-image.jpg", // Update image in public folder later
        width: 1200,
        height: 630,
        alt: "Group of Companies Manufacturing Facility",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Group of Companies | Premium Chemical Manufacturing",
    description: "Leading chemical manufacturing in Pakistan since 1996",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Group of Companies",
              description:
                "Leading manufacturing group including OCI, TCI, and WDS. Producing adhesives, textile chemicals, and synthetic polymers.",
              foundingDate: "1996",
              address: [
                {
                  "@type": "PostalAddress",
                  streetAddress: "Plot # 4/44 & 4/11, Sector 21",
                  addressLocality: "Korangi Industrial Area, Karachi",
                  addressRegion: "Sindh",
                  addressCountry: "PK",
                },
                {
                  "@type": "PostalAddress",
                  streetAddress: "Plot # L-20, Road# 1",
                  addressLocality: "Industrial Estate, Gadoon Amazai",
                  addressRegion: "KPK",
                  addressCountry: "PK",
                }
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Service",
                telephone: "+92-21-35012024",
                email: "oci_chem@hotmail.com",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}