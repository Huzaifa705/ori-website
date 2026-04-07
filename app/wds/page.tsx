import { Metadata } from 'next'
import Image from 'next/image'
import { Building2, TrendingUp, Globe2, ChevronRight, Route } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "WDS | Synthetic Polymer Industries",
  description: "House of Speciality Chemicals. Advanced polymer manufacturing established in Gadoon Amazai, KPK.",
  alternates: {
    canonical: "/wds",
  },
  openGraph: {
    title: "W.D.S. Synthetic Polymer Industries",
    description: "House of Speciality Chemicals and advanced polymer manufacturing.",
    url: "/wds",
  }
}

export default function WDSPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ori-website-khaki.vercel.app";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ManufacturingPlant",
            name: "W.D.S. Synthetic Polymer Industries",
            url: `${siteUrl}/wds`,
            description: "Advanced polymer manufacturing facility located in Gadoon Amazai.",
            parentOrganization: {
              "@type": "Organization",
              name: "Group of Companies"
            }
          })
        }}
      />
      <div className="min-h-screen bg-white">
        {/* --- HERO SECTION --- */}
        <section className="relative pt-40 pb-32 bg-slate-900 border-b border-slate-200 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1565514020179-026b92b84bb6?q=80&w=2070&auto=format&fit=crop"
              alt="Large Scale Industrial Plant"
              fill
              className="object-cover opacity-40"
              unoptimized
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
          </div>

          <div className="container mx-auto px-6 lg:px-16 relative z-10">
            <div className="max-w-4xl">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-red-600/20 border border-red-500/30 rounded-md text-red-400 font-bold text-xs tracking-widest mb-6">
                <Building2 className="w-4 h-4" />
                <span>ESTABLISHED 2020</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
                W.D.S. Synthetic <br /><span className="text-red-500">Polymer Industries</span>
              </h1>
              <p className="text-xl text-slate-300 font-medium max-w-2xl leading-relaxed">
                House of Speciality Chemicals. Strategically located in KPK to leverage global trade routes and pioneer the future of industrial polymers via international joint ventures.
              </p>
            </div>
          </div>
        </section>

        {/* --- VISION & STRATEGY --- */}
        <section className="py-24">
          <div className="container mx-auto px-6 lg:px-16">
            <div className="grid lg:grid-cols-2 gap-16">

              {/* Text Content */}
              <div className="space-y-8">
                <div className="inline-block px-4 py-1.5 bg-slate-100 text-slate-700 rounded-md text-xs font-bold tracking-widest uppercase">
                  Strategic Positioning
                </div>
                <h2 className="text-3xl lg:text-4xl font-black text-slate-900">A Hub Built for the Coming Decades</h2>
                <div className="prose prose-lg text-slate-600 font-medium">
                  <p>
                    Many companies plan for the future. Our plan for setting up WDS is for the coming decades, not just the near future. The basic underlying concept was its proximity to China. We realized early during the CPEC initiation that a company located in this area will gain immense strategic importance.
                  </p>
                  <p>
                    This led to the creation of this facility. Specifically made for joint ventures with Chinese companies, one of its goals is to act as a massive hub of exports. Goods can arrive via road from China, lowering costs and bypassing the choking of sea routes.
                  </p>
                  <p>
                    We are already in talks with leading Chinese manufacturers who are interested in collaborations where we act as toll manufacturers and joint technology partners.
                  </p>
                </div>
              </div>

              {/* Value Props & Images */}
              <div className="space-y-6">

                {/* Card 1: Capacity */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl p-8 lg:p-10 flex flex-col justify-end min-h-[300px] group">
                  <Image
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
                    alt="Industrial Storage"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent" />
                  <div className="relative z-10 text-white">
                    <Globe2 className="w-10 h-10 mb-4 text-red-500" />
                    <h3 className="text-2xl font-black mb-2">Massive Capacities</h3>
                    <p className="text-slate-300 font-medium leading-relaxed">
                      The plant capacity at WDS is the highest in the group, easily exceeding 50 tons a day. Our investment envisions massive storage facilities for international raw materials obtained in real-time.
                    </p>
                  </div>
                </div>

                {/* Card 2: Agri-Business */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl p-8 lg:p-10 flex flex-col justify-end min-h-[300px] group">
                  <Image
                    src="https://images.unsplash.com/photo-1586771107445-d3afef11d068?q=80&w=2071&auto=format&fit=crop"
                    alt="Agri Research Lab"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-900 via-red-900/80 to-transparent" />
                  <div className="relative z-10 text-white">
                    <TrendingUp className="w-10 h-10 mb-4 text-white" />
                    <h3 className="text-2xl font-black mb-2">R&D and Agri-Business</h3>
                    <p className="text-red-100 font-medium leading-relaxed">
                      Being located in an agricultural area, research will focus on providing the best pesticide and chemical options available. We believe Pakistan has a brilliant future in agri-business.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <div className="mt-20 border-t border-slate-200 pt-16 flex flex-col items-center text-center">
              <Route className="w-12 h-12 text-slate-300 mb-6" />
              <h3 className="text-2xl font-black text-slate-900 mb-4">Ready to Explore Trade & Production Synergies?</h3>
              <Link href="/contact" className="inline-flex items-center justify-center px-10 py-5 bg-red-600 text-white rounded-xl font-bold hover:bg-slate-900 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                Discuss Joint Ventures <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}