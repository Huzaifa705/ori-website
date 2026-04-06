import { Metadata } from 'next'
import { FlaskConical, Microscope, CheckCircle2, ChevronRight } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "OCI | Oriental Chemical Industries",
  description: "Specializing in PVAc, Adhesive Glues & Acrylic Emulsions since 1996. Korangi Industrial Area, Karachi.",
}

export default function OCIPage() {
  const products = [
    "B-2 (D-60 F) (KDF-2 MARK-9 High-Speed Machine Glue)",
    "DM- 1300 (for HLP Machine Glue)",
    "DM Lamination Adhesives",
    "KB-8020 (for Tissue Window)",
    "B-10 SP (for POY Tube Core Board)",
    "B-512 (for Craft Paper)",
    "B-513 (for DTY, HOY, Paper Tube 350 & 400grm Core Board)",
    "B3 (NOZEL GUM For CP Paper)",
    "GPS (for Box Making Glue)",
    "VS (for Wood Industries)"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-40 pb-24 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-red-100 rounded-md text-red-700 font-bold text-xs tracking-widest mb-6">
              <FlaskConical className="w-4 h-4" />
              <span>ESTABLISHED 1996</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-tight mb-6">
              Oriental Chemical <span className="text-red-600">Industries</span>
            </h1>
            <p className="text-xl text-slate-600 font-medium max-w-2xl leading-relaxed">
              Leading the retail business sector with premium PVAc, Adhesive Glues, and Acrylic Emulsions developed and produced in-house.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction & R&D */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="text-3xl font-black text-slate-900">Introduction & Capabilities</h2>
              <div className="prose prose-lg text-slate-600 font-medium">
                <p>
                  OCI was founded in 1996 with a vision to serve the needs of local industries in fields as varied as adhesives, paints, textiles, and packaging. With the passage of time, special emphasis was made in procuring state-of-the-art machinery to meet end-user requirements with respect to quality consistency.
                </p>
                <p>
                  In the paint industries, OCI introduced paint chemicals to ensure high water resistance and color depth for notable brands via our pure acrylic, styrene acrylic, and polyvinyl acetate emulsions.
                </p>
                <p>
                  We operate three industrial units, two based in Korangi Industrial Area and one in KPK (Gadoon Amazai). The group can produce 50 tons a day if needed, handling very large orders of up to 100 tons a day.
                </p>
              </div>
            </div>
            
            <div className="bg-slate-900 rounded-3xl p-10 text-white shadow-2xl">
              <div className="w-14 h-14 bg-red-600 rounded-xl flex items-center justify-center mb-6">
                <Microscope className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-black mb-4">Lab, Research & Development</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                As a responsible chemical company, everything starts with environmentally friendly raw materials. OCI has all its research and development facilities in-house. We possess the knowledge and expertise to execute the most challenging product development based on clients' demands.
              </p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-red-500" /> Dedicated PhD-led R&D setup</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-red-500" /> Scale-up plants & machine trials</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-red-500" /> Reaction kinetics & bulk handling</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Printing & Packaging Grades</h2>
            <p className="text-lg text-slate-600">Premium Adhesives & Glues manufactured for high-speed industrial applications.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-red-400 transition-colors flex items-start gap-4">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 shrink-0" />
                <span className="font-bold text-slate-800">{product}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 transition-colors">
              Request Product Specifications <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}