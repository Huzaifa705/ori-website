import { Metadata } from 'next'
import { Building2, TrendingUp, Globe2, ChevronRight } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "WDS | Synthetic Polymer Industries",
  description: "House of Speciality Chemicals. Advanced polymer manufacturing established in Gadoon Amazai, KPK.",
}

export default function WDSPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-40 pb-24 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-red-100 rounded-md text-red-700 font-bold text-xs tracking-widest mb-6">
              <Building2 className="w-4 h-4" />
              <span>ESTABLISHED 2020</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-tight mb-6">
              W.D.S. Synthetic <br/><span className="text-red-600">Polymer Industries</span>
            </h1>
            <p className="text-xl text-slate-600 font-medium max-w-2xl leading-relaxed">
              House of Speciality Chemicals. Strategically located in KPK to leverage global trade routes and pioneer the future of industrial polymers.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="text-3xl font-black text-slate-900">Strategic Vision & Future</h2>
              <div className="prose prose-lg text-slate-600 font-medium">
                <p>
                  Many companies plan for the future. Our plans for setting up WDS is for the coming decades, not just the near future. The basic underlying concept was its proximity to China. We realized early during the CPEC initiation that a company located in that area will gain strategic importance as time passes.
                </p>
                <p>
                  This led to the creation of this facility. Specifically made for joint ventures with Chinese companies, one of its goals is to make it a hub of exports. The prime advantage is that goods can arrive via roads from China, bypassing the choking of sea routes.
                </p>
                <p>
                  We are already in talks with leading Chinese manufacturers who are interested in joint collaborations in various fields where we may be acting as their toll manufacturers and joint technology partners.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-red-600 rounded-3xl p-8 text-white shadow-xl">
                <Globe2 className="w-10 h-10 mb-4 opacity-80" />
                <h3 className="text-2xl font-black mb-2">Massive Capacities</h3>
                <p className="text-red-100 font-medium leading-relaxed">
                  The plant capacity at WDS is highest in the group, exceeding 50 tons a day. Our investment envisions the creation of massive storage facilities for Chinese raw materials obtained in real-time.
                </p>
              </div>

              <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-xl">
                <TrendingUp className="w-10 h-10 mb-4 text-red-500" />
                <h3 className="text-2xl font-black mb-2">R&D and Agri-Business</h3>
                <p className="text-slate-300 font-medium leading-relaxed">
                  Being located in an agri area surrounding the role of available pesticides, research will focus on returning to the best options available. We will hire required expertise as we think Pakistan has a great future in agri business.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-red-600 transition-colors">
              Discuss Joint Ventures <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}