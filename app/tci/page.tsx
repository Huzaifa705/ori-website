import { Metadata } from 'next';
import TCIContent from './tci-content';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ori-website-khaki.vercel.app";

export const metadata: Metadata = {
  title: "TCI | Textile Chemical Industries - Global Standards Compliance",
  description: "Leader in textile auxiliary chemicals since 1961. IKEA, Oekotex, and REACH compliant manufacturing for global exporters.",
  keywords: ["Textile Chemicals Pakistan", "Pigment Printing Binders", "IKEA Compliant Chemicals", "Oekotex Certified Pakistan", "TCI Laboratories"],
  alternates: {
    canonical: "/tci",
  },
  openGraph: {
    title: "Textile Chemical Industries (TCI)",
    description: "Eco-friendly textile grade products manufactured with RO water precision since 1961.",
    url: "/tci",
    type: "website",
  }
};

export default function TCIPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Brand",
            "name": "Textile Chemical Industries (TCI)",
            "url": `${siteUrl}/tci`,
            "logo": `${siteUrl}/images/companyLogo.png`,
            "description": "Premium Auxiliary Chemicals for Textile, Paint, Leather, Coating, Printing & Dyeing Industries.",
            "foundingDate": "1961",
            "parentOrganization": {
              "@type": "Organization",
              "name": "Group of Companies"
            }
          })
        }}
      />
      <TCIContent />
    </>
  );
}