"use client";

import { useState, useEffect } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion, Variants } from "framer-motion";
import { Beaker, CheckCircle2, Microscope, Droplets, ShieldAlert, Award, ChevronRight, FlaskConical, Wind, Factory } from 'lucide-react';

// --- TYPE-SAFE ANIMATION VARIANTS ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }
};

export default function TCIContent() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);

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

  if (!isMounted) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key="tci-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-white selection:bg-red-100 selection:text-red-900 overflow-x-hidden"
      >
        {/* --- HERO SECTION --- */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-slate-600 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/cloth-image.jpeg"
              alt="Textile Fabrics and Auxiliary Chemicals"
              fill
              className="object-cover opacity-25"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-850/90 to-transparent" />
          </div>

          <div className="container mx-auto px-5 sm:px-10 lg:px-16 relative z-10">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-4xl space-y-6 md:space-y-8"
            >
              <div className="relative w-20 h-20 shrink-0 bg-white rounded-lg overflow-hidden flex items-center justify-center">
                <Image
                  src="/images/tci-logo.jpg"
                  alt="TCI Logo"
                  fill
                  className="object-contain p-0.5"
                />
              </div>
              <motion.div variants={fadeInUp} className="inline-flex items-center space-x-2 px-3 py-1 bg-red-600/20 border border-red-500/30 rounded-md text-red-400 font-bold text-[10px] tracking-widest uppercase">
                <Beaker className="w-3.5 h-3.5" />
                <span>Established 1961</span>
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tighter uppercase">
                Textile Chemical <br /><span className="text-red-600">Industries</span>
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-base md:text-lg text-slate-300 font-medium max-w-2xl leading-relaxed">
                Operating the single biggest industrial sector in Pakistan. Providing specialized auxiliary chemicals for dyeing, printing, bleaching, and finishing since 1961.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-4">
                <Link href="/contact" className="px-8 py-4 bg-red-600 text-white rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all shadow-xl">
                  Contact Technical Team
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* --- INDUSTRY LEADERSHIP & COMPLIANCE --- */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-5 sm:px-10 lg:px-16">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <motion.div variants={fadeInUp} className="inline-block px-3 py-1 bg-slate-100 text-slate-700 rounded text-[9px] font-black uppercase tracking-widest">
                    Global Standards Compliance
                  </motion.div>
                  <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight uppercase tracking-tighter">
                    International <span className="text-red-600">Certifications</span>
                  </motion.h2>
                  <motion.div variants={fadeInUp} className="text-sm md:text-base text-slate-600 font-medium leading-relaxed space-y-4">
                    <p>
                      The TCI polymer division is engineered to produce polymers that strictly comply with international certifications including <strong>IKEA, Oekotex, and REACH</strong>. We exclude all prohibited chemicals from our production process to meet the demands of global textile exporters.
                    </p>
                    <p>
                      Our research is an ongoing process. We operate two primary research tiers: developing counter-products for imports to save foreign exchange, and <strong>&quot;Blue Sky Research&quot;</strong> to expand the boundaries of chemical understanding.
                    </p>
                  </motion.div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { title: "IKEA Standard", icon: <CheckCircle2 />, text: "Meeting global retail safety norms." },
                    { title: "Oekotex Certified", icon: <CheckCircle2 />, text: "Standardized textile safety audits." },
                    { title: "REACH Standards", icon: <CheckCircle2 />, text: "EU regulated chemical compliance." },
                    { title: "Foreign Exchange", icon: <FlaskConical />, text: "Reducing dependency on imports." }
                  ].map((item, i) => (
                    <motion.div key={i} variants={fadeInUp} className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="flex items-center gap-3 mb-1">
                        <div className="text-red-600">{item.icon}</div>
                        <h4 className="font-bold text-slate-900 text-[11px] uppercase tracking-wider">{item.title}</h4>
                      </div>
                      <p className="text-[10px] text-slate-500 font-medium">{item.text}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative rounded-3xl lg:rounded-[3rem] overflow-hidden shadow-2xl border-[10px] md:border-[16px] border-slate-100 h-[450px] md:h-[600px]"
                >
                  <Image
                    src="/images/tci-image.jpeg"
                    alt="24/7 Laboratory Operations"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 flex flex-col justify-end p-8 md:p-12">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-red-600 rounded-2xl flex items-center justify-center mb-4 shadow-xl">
                      <Microscope className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-black text-white uppercase mb-2">24/7 Lab Operations</h3>
                    <p className="text-xs md:text-sm text-slate-200 leading-relaxed font-medium">
                      Our labs operate every single working day of the week, all year round, ensuring continuous understanding of complex reactions.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* --- INFRASTRUCTURE & ENVIRONMENTAL STEWARDSHIP --- */}
        <section className="py-20 md:py-32 bg-slate-50">
          <div className="container mx-auto px-5 sm:px-10 lg:px-16">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="order-2 lg:order-1 relative">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white h-[400px] md:h-[500px]"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070"
                    alt="Precision Chemical Processing Infrastructure"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </motion.div>
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  className="absolute -bottom-6 -right-6 p-6 bg-slate-950 rounded-2xl shadow-2xl border border-white/10 max-w-[240px]"
                >
                  <Droplets className="text-red-600 mb-3" size={32} />
                  <h4 className="text-white text-xs font-black uppercase tracking-widest mb-1">RO Water Mandate</h4>
                  <p className="text-slate-400 text-[10px] leading-relaxed">
                    Mandatory Reverse Osmosis water systems are used across all processes to prevent heavy metal contamination.
                  </p>
                </motion.div>
              </div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
                className="order-1 lg:order-2 space-y-8"
              >
                <div className="space-y-4">
                  <motion.div variants={fadeInUp} className="inline-block px-3 py-1 bg-red-100 text-red-700 rounded text-[9px] font-black uppercase tracking-widest">
                    Operational Ethics
                  </motion.div>
                  <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-black text-slate-900 leading-tight uppercase tracking-tighter">
                    Environmental <br /> <span className="text-red-600">Stewardship</span>
                  </motion.h2>
                  <p className="text-sm md:text-base text-slate-600 font-medium leading-relaxed">
                    TCI is not just plants and machinery. Our human resource potential is unmatched, with production overseen by a PhD sitting at the top of a specialized QC team.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    { title: "Waste Management", icon: <Wind />, text: "Non-recyclable waste is sent to incinerators rather than local drains." },
                    { title: "Plant Maintenance", icon: <Factory />, text: "Periodic internal maintenance of heating/cooling to ensure reaction stability." },
                    { title: "Safety Protocol", icon: <ShieldAlert />, text: "Strict industrial fire-fighting and ZDHC system adherence." }
                  ].map((item, i) => (
                    <motion.div key={i} variants={fadeInUp} className="flex gap-4 p-5 bg-white rounded-xl border border-slate-200">
                      <div className="text-red-600 shrink-0">{item.icon}</div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-[11px] uppercase tracking-wider mb-1">{item.title}</h4>
                        <p className="text-[10px] text-slate-500 font-medium leading-relaxed">{item.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- TEXTILE GRADE PRODUCTS --- */}
        <section className="py-20 md:py-32 bg-slate-950 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="container mx-auto px-5 sm:px-10 lg:px-16 relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
                Textile Grade <span className="text-red-600">Solutions</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-sm md:text-lg text-slate-400 font-medium">
                Manufactured to exact industrial specifications with complete international environmental compliance.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {products.map((product, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{ backgroundColor: "rgba(220, 38, 38, 0.15)", borderColor: "rgba(220, 38, 38, 0.4)" }}
                  className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm flex items-center gap-4 transition-all duration-300"
                >
                  <div className="w-2 h-2 bg-red-600 rounded-full shrink-0" />
                  <span className="font-bold text-slate-100 text-[11px] uppercase tracking-widest">{product}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mt-16 text-center"
            >
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white rounded-xl font-black text-[11px] uppercase tracking-widest hover:bg-white hover:text-slate-950 transition-all shadow-xl hover:-translate-y-1">
                Consult Sales Division <ChevronRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </section>
      </motion.main>
    </AnimatePresence>
  );
}