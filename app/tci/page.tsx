import { Metadata } from 'next'
import Image from 'next/image'
import { Beaker, Factory, CheckCircle2, ChevronRight, Droplets } from 'lucide-react'
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
      {/* --- HERO SECTION --- */}
      <section className="relative pt-40 pb-32 bg-slate-900 border-b border-slate-200 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1972&auto=format&fit=crop"
            alt="Textile Dyeing and Chemicals"
            fill
            className="object-cover opacity-40 mix-blend-overlay"
            unoptimized
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent" />
        </div>

        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-red-600/20 border border-red-500/30 rounded-md text-red-400 font-bold text-xs tracking-widest mb-6">
              <Beaker className="w-4 h-4" />
              <span>ESTABLISHED 1961</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
              Textile Chemical <br/><span className="text-red-500">Industries</span>
            </h1>
            <p className="text-xl text-slate-300 font-medium max-w-2xl leading-relaxed">
              Decades of expertise formulating specialized auxiliary chemicals for the Textile, Paint, Leather, Coating, Printing & Dyeing Industries.
            </p>
          </div>
        </div>
      </section>

      {/* --- INTRODUCTION --- */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Visual Block */}
            <div className="grid grid-cols-2 gap-4 h-[600px]">
              <div className="relative rounded-3xl overflow-hidden shadow-xl mt-8">
                <Image 
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop" 
                  alt="Industrial Plant" 
                  fill 
                  className="object-cover" 
                  unoptimized 
                />
              </div>
              <div className="relative rounded-3xl overflow-hidden shadow-xl mb-8">
                <Image 
                  src="https://images.unsplash.com/photo-1583086762635-4309b8b2fc13?q=80&w=2070&auto=format&fit=crop" 
                  alt="Chemical Formulation" 
                  fill 
                  className="object-cover" 
                  unoptimized 
                />
              </div>
            </div>

            {/* Text Block */}
            <div className="space-y-8">
              <div className="inline-block px-4 py-1.5 bg-slate-100 text-slate-700 rounded-md text-xs font-bold tracking-widest uppercase">
                Industry Leadership
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-slate-900">Driving Pakistan's Largest Industrial Sector</h2>
              <div className="prose prose-lg text-slate-600 font-medium">
                <p>
                  Textiles is the single biggest sector of industrial output in Pakistan. The TCI polymer division has been upgraded to produce polymers strictly compliant with international certifications such as <strong>IKEA, Oekotex, REACH</strong>, excluding all prohibited chemicals from the production process.
                </p>
                <p>
                  Expertise was developed for pigment printing binders of various grades and strengths. Our specialty chemicals in dyeing, printing, bleaching, desizing, and finishing have gained the trust of the market and promoted the company into the major leagues.
                </p>
                <p>
                  Research at TCI is an ongoing process. Our labs operate every single working day of the year, expanding the boundaries of our understanding of reactions and constantly exploring new counter-products to save precious foreign exchange.
                </p>
              </div>
              
              <div className="flex items-center gap-4 p-6 bg-red-50 rounded-2xl border border-red-100">
                <Droplets className="w-10 h-10 text-red-600 shrink-0" />
                <p className="text-sm font-bold text-red-900">
                  Our entire system runs on Reverse Osmosis (RO) water, which is mandatory in precision chemical processing to prevent heavy metal contamination.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- PRODUCTS --- */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl font-black mb-4">Textile Grade Products</h2>
            <p className="text-lg text-slate-400">Manufactured to exact specifications with full international environmental compliance.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map((product, idx) => (
              <div key={idx} className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm flex items-center gap-4 hover:bg-red-600/20 hover:border-red-500/50 transition-all duration-300">
                <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0" />
                <span className="font-bold text-slate-100 text-sm">{product}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 shadow-lg shadow-red-600/30 transition-all hover:-translate-y-1">
              Contact Sales Department <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}