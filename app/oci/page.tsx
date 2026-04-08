import { Metadata } from 'next';
import OCIContent from './oci-content';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ori-website-khaki.vercel.app";

export const metadata: Metadata = {
    title: "OCI | Oriental Chemical Industries - Industrial Adhesives",
    description: "Specializing in PVAc, Adhesive Glues & Acrylic Emulsions since 1996. Operating with 100-ton bulk capacity in Korangi Industrial Area.",
    keywords: ["Industrial Adhesives Pakistan", "PVAc Emulsions Karachi", "Acrylic Emulsions", "Oriental Chemical Industries", "OCI CHEM"],
    alternates: {
        canonical: "/oci",
    },
    openGraph: {
        title: "Oriental Chemical Industries (OCI)",
        description: "Premium manufacturing of industrial glues and emulsions with PhD-led R&D.",
        url: "/oci",
        type: "website",
    }
};

export default function OCIPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Brand",
                        "name": "Oriental Chemical Industries (OCI)",
                        "url": `${siteUrl}/oci`,
                        "logo": `${siteUrl}/images/companyLogo.png`,
                        "description": "Specializing in PVAc, Adhesive Glues & Acrylic Emulsions since 1996.",
                        "foundingDate": "1996",
                        "parentOrganization": {
                            "@type": "Organization",
                            "name": "Group of Companies"
                        }
                    })
                }}
            />
            <OCIContent />
        </>
    );
}