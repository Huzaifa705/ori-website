import { Metadata } from 'next'
import Image from 'next/image'
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
            {/* --- HERO SECTION --- */}
            <section className="relative pt-40 pb-32 bg-slate-900 border-b border-slate-200 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1617155093730-a8bf47be792d?q=80&w=2070&auto=format&fit=crop"
                        alt="Chemical Manufacturing"
                        fill
                        className="object-cover opacity-30"
                        unoptimized
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent" />
                </div>

                <div className="container mx-auto px-6 lg:px-16 relative z-10">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center space-x-2 px-3 py-1 bg-red-600/20 border border-red-500/30 rounded-md text-red-400 font-bold text-xs tracking-widest mb-6">
                            <FlaskConical className="w-4 h-4" />
                            <span>ESTABLISHED 1996</span>
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
                            Oriental Chemical <br /><span className="text-red-500">Industries</span>
                        </h1>
                        <p className="text-xl text-slate-300 font-medium max-w-2xl leading-relaxed">
                            Leading the retail business sector with premium PVAc, Adhesive Glues, and Acrylic Emulsions developed and produced in-house from Karachi to Khyber.
                        </p>
                    </div>
                </div>
            </section>

            {/* --- INTRODUCTION & R&D --- */}
            <section className="py-24">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="text-3xl lg:text-4xl font-black text-slate-900">Innovation & Production Capabilities</h2>
                            <div className="prose prose-lg text-slate-600 font-medium">
                                <p>
                                    OCI was founded in 1996 with a vision to serve the needs of local industries in fields as varied as adhesives, paints, textiles, and packaging. Special emphasis has been made on procuring state-of-the-art machinery to meet end-user requirements with absolute quality consistency.
                                </p>
                                <p>
                                    In the paint industries, OCI introduced specialty chemicals to ensure high water resistance and color depth for notable brands via our pure acrylic, styrene acrylic, and polyvinyl acetate emulsions.
                                </p>
                                <p>
                                    We operate three industrial units, two based in Korangi Industrial Area and one in KPK (Gadoon Amazai). The group can smoothly produce 50 tons a day and is capable of handling very large orders of up to 100 tons a day.
                                </p>
                            </div>
                        </div>

                        <div className="relative">
                            {/* Image Underlay */}
                            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070&auto=format&fit=crop"
                                    alt="Laboratory Research"
                                    fill
                                    className="object-cover"
                                    unoptimized
                                />
                                <div className="absolute inset-0 bg-slate-900/60" />

                                {/* Overlay Content */}
                                <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
                                    <div className="w-14 h-14 bg-red-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                                        <Microscope className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-black mb-4">In-House Lab & R&D</h3>
                                    <p className="text-slate-200 mb-6 leading-relaxed font-medium">
                                        Everything starts with environmentally friendly raw materials. Headed by a dedicated PhD, our R&D executes the most challenging product developments based on dynamic market demands.
                                    </p>
                                    <ul className="space-y-3 text-white font-bold text-sm">
                                        <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-red-500" /> Reaction kinetics & formulation</li>
                                        <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-red-500" /> Scale-up plants & machine trials</li>
                                        <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-red-500" /> Strict zero-compromise quality assurance</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- PRODUCTS SECTION --- */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="max-w-3xl mb-16">
                        <div className="inline-block px-4 py-1.5 bg-red-100 text-red-700 rounded-md text-xs font-bold tracking-widest uppercase mb-4">
                            Core Products
                        </div>
                        <h2 className="text-4xl font-black text-slate-900 mb-4">Printing & Packaging Grades</h2>
                        <p className="text-lg text-slate-600">Premium Adhesives & Glues manufactured precisely for high-speed industrial applications.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {products.map((product, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-red-400 transition-all duration-300 flex items-start gap-4 group">
                                <div className="w-3 h-3 bg-red-100 rounded-full mt-1.5 shrink-0 group-hover:bg-red-600 transition-colors" />
                                <span className="font-bold text-slate-800">{product}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 shadow-lg shadow-red-600/30 transition-all hover:-translate-y-1">
                            Request Product Specifications <ChevronRight className="ml-2 w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}