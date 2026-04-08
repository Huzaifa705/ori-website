import { Metadata } from 'next'
import ContactContent from './contact-content'

export const metadata: Metadata = {
  title: "Contact Us | Group of Companies",
  description: "Get in touch with OCI, TCI, or WDS Synthetic Polymers. Expert consultation for industrial adhesives, textile chemicals, and high-capacity manufacturing.",
  keywords: ["contact OCI", "contact TCI", "contact WDS", "chemical supplier contact Pakistan", "joint ventures polymer"],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    url: "/contact",
  }
}

export default function Contact() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ori-website-khaki.vercel.app";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Group of Companies",
            "url": `${siteUrl}/contact`,
            "mainEntity": {
              "@type": "Organization",
              "name": "Group of Companies",
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+92-21-35012024",
                  "contactType": "Customer Service",
                  "email": "oci_chem@hotmail.com"
                }
              ]
            }
          })
        }}
      />
      <ContactContent />
    </>
  )
}