import { Metadata } from 'next'
import { Beaker, Factory, CheckCircle2, ChevronRight } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "TCI | Textile Chemical Industries",
  description: "Auxiliary Chemicals for Textile, Paint, Leather, Coating, Printing & Dyeing Industries. Established 1961.",
}

export default function TCIPage() {
  const products = [
    "PVAc Emulsions",
    "Acrylic Emulsions",
    "Coating Binders",
    "Pigment Printing Binders",
    "Polyethylene Emulsions",
    "Dye Fixing Agents",
    "Silicone Micro Emulsions",
    "Silicone Softeners",
    "Sizing Agents",
    "Wetting Agents",
    "Wax Emulsions",
    "Precondensate Resins"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-40 pb-24 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-red-100 rounded-md text-red-700 font-bold text-xs tracking-widest mb-6">
              <Beaker className="w-4 h-4" />
              <span>ESTABLISHED 1961</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-tight mb-6">
              Textile Chemical <br/><span className="text-red-600">Industries</span>
            </h1>
            <p className="text-xl text-slate-600 font-medium max-w-2xl leading-relaxed">
              Specialized auxiliary chemicals for Textile, Paint, Leather, Coating, Printing & Dyeing Industries.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl font-black text-slate-900">Industry Leadership</h2>
              <div className="prose prose-lg text-slate-600 font-medium">
                <p>
                  Textiles is the single biggest sector of industrial output in Pakistan. TCI polymer division was upgraded and recruited to produce polymers that are compliant with international certifications such as IKEA, Oekotex, REACH and other standards.
                </p>
                <p>
                  Expertise was developed for pigment printing binders of various grades and strengths to meet end-user demands. Specialty chemicals in dyeing, printing, bleaching, desizing and finishing gained the trust of the market and promoted the company in the major leagues.
                </p>
                <p>
                  Research in TCI is an ongoing process since its inception. Our labs work every single working day of the week all year round, developing products that give end users a positive impact in costing, time quality, and environment.
                </p>
              </div>
            </div>
            
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-10">
              <div className="w-14 h-14 bg-red-600 rounded-xl flex items-center justify-center mb-6">
                <Factory className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4">World-Class Facilities</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                TCI is not just plants, machinery and equipment. Our human resource potential is unmatched. The whole quality control and production is handled by a dedicated team. Safety comes first always, and our entire system runs on RO water which is mandatory in chemical processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl font-black mb-4">Textile Grade Products</h2>
            <p className="text-lg text-slate-400">Manufactured to exact specifications with international compliance.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product, idx) => (
              <div key={idx} className="bg-white/10 p-6 rounded-xl border border-white/10 backdrop-blur-sm flex items-center gap-4">
                <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0" />
                <span className="font-bold text-slate-100">{product}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 transition-colors">
              Contact Sales Department <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}