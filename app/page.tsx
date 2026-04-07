import { Metadata } from 'next'
import HomeContent from './home-content'

export const metadata: Metadata = {
  title: "Home | Group of Companies (OCI, TCI, WDS)",
  description: "Your Trusted Partner For Speciality Technology And Process since 1996. House of OCI, TCI, and WDS Synthetic Polymers.",
  alternates: {
    canonical: "/", // Inherits base URL dynamically
  },
  openGraph: {
    url: "/",
  }
}

export default function Home() {
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ori-website-khaki.vercel.app/";
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Group of Companies",
            url: siteUrl,
          })
        }}
      />
      <HomeContent />
    </>
  )
}