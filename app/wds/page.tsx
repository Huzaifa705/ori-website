import { Metadata } from 'next';
import WDSContent from './wds-content';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ori-website-khaki.vercel.app";

export const metadata: Metadata = {
  title: "WDS | Synthetic Polymer Industries - Export Hub & Joint Ventures",
  description: "Advanced polymer manufacturing facility located in Gadoon Amazai. Operating 100% grid-free with 50+ tons daily capacity. Strategic CPEC alignment for global exports.",
  keywords: [
    "WDS Synthetic Polymer", 
    "Polymer Manufacturing KPK", 
    "Chemical Toll Manufacturing Pakistan", 
    "CPEC Chemical Hub", 
    "Gadoon Amazai Industries",
    "Agri-business Chemicals Pakistan"
  ],
  alternates: {
    canonical: "/wds",
  },
  openGraph: {
    title: "W.D.S. Synthetic Polymer Industries",
    description: "House of Speciality Chemicals. Strategic export hub designed for international joint ventures and massive-scale production.",
    url: "/wds",
    type: "website",
  }
};

export default function WDSPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ManufacturingPlant",
            "name": "W.D.S. Synthetic Polymer Industries",
            "url": `${siteUrl}/wds`,
            "logo": `${siteUrl}/images/companyLogo.png`,
            "description": "Advanced polymer manufacturing facility located in Gadoon Amazai, operating entirely grid-free via solar power.",
            "foundingDate": "2020",
            "parentOrganization": {
              "@type": "Organization",
              "name": "Group of Companies"
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Plot # L-20, Road# 1, Industrial Estate",
              "addressLocality": "Gadoon Amazai",
              "addressRegion": "KPK",
              "addressCountry": "PK"
            }
          })
        }}
      />
      <WDSContent />
    </>
  );
}