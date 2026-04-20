"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  FlaskConical,
  Beaker,
  Factory,
  ArrowRight,
  Microscope,
  Globe2,
  ShieldCheck,
  Award,
  CheckCircle2,
  ChevronRight
} from "lucide-react";

// --- TYPE-SAFE ANIMATION VARIANTS ---
const pageEntrance: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.6 } },
  exit: { opacity: 0 }
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function HomeContent() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const companies = [
    {
      id: "oci",
      name: "Oriental Chemical Industries",
      shortName: "OCI CHEM",
      desc: "Specializing in PVAc, pure acrylic, and styrene acrylic emulsions since 1996. Operating with 100-ton daily handling capacity.",
      icon: <FlaskConical className="w-6 h-6 md:w-8 md:h-8" />,
      image: "/images/oci-logo.jpg", // UPDATED
      href: "/oci",
      since: "1996"
    },
    {
      id: "tci",
      name: "Textile Chemical Industries",
      shortName: "TCI",
      desc: "Producer of international-grade auxiliary chemicals. Fully compliant with IKEA, Oekotex, and REACH standards since 1961.",
      icon: <Beaker className="w-6 h-6 md:w-8 md:h-8" />,
      image: "/images/tci-logo.jpg", // UPDATED
      href: "/tci",
      since: "1961"
    },
    {
      id: "wds",
      name: "W.D.S. Synthetic Polymer",
      shortName: "WDS",
      desc: "Advanced manufacturing facility strategically located for Chinese joint ventures and global export-oriented polymer production.",
      icon: <Factory className="w-6 h-6 md:w-8 md:h-8" />,
      image: "/images/wds-logo.jpg", // UPDATED
      href: "/wds",
      since: "2020"
    }
  ];

  if (!isMounted) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key="industrial-landing"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageEntrance}
        className="min-h-screen bg-white selection:bg-red-100 selection:text-red-900"
      >

        {/* --- HERO SECTION --- */}
        <section className="relative min-h-[85vh] flex items-center pt-24 overflow-hidden bg-slate-950">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
              alt="Industrial Manufacturing Background"
              fill
              className="object-cover opacity-20"
              unoptimized
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
          </div>

          <div className="container mx-auto px-5 sm:px-10 lg:px-16 relative z-10">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="max-w-4xl space-y-6 md:space-y-10"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center space-x-3 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                <span className="flex h-1.5 w-1.5 md:h-2 md:w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 md:h-2 md:w-2 bg-red-600"></span>
                </span>
                <span className="text-[9px] md:text-xs font-bold text-white uppercase tracking-[0.2em]">
                  Industrial Innovation Since 1996
                </span>
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-4xl sm:text-6xl lg:text-8xl font-black leading-tight text-white tracking-tighter uppercase">
                OCI <br />
                <span className="text-red-600">GROUP</span>
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-base md:text-xl text-slate-400 leading-relaxed font-medium max-w-2xl">
                Your Trusted Partner for Specialty Technology and Process. Delivering world-class chemical manufacturing and R&D excellence to global markets.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-red-600 text-white rounded-xl font-black text-xs md:text-sm uppercase tracking-widest hover:bg-red-700 transition-all shadow-xl shadow-red-600/20 flex items-center gap-3"
                >
                  Partner With Us
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* --- DIVISION CARDS (Adaptive Design) --- */}
        <section className="py-16 md:py-32 bg-slate-50 relative">
          <div className="container mx-auto px-5 sm:px-10 lg:px-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
            >
              {companies.map((company) => (
                <motion.div key={company.id} variants={fadeInUp}>
                  <Link href={company.href} className="group block relative h-full">
                    <div className="bg-white rounded-[2rem] overflow-hidden shadow-lg shadow-slate-200/60 transition-all duration-500 hover:shadow-2xl h-full flex flex-col">

                      {/* Image Banner */}
                      <div className="relative h-48 md:h-64 w-full overflow-hidden">
                        <Image
                          src={company.image}
                          alt={company.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-1000"
                          unoptimized
                        />
                        <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors" />

                        <div className="absolute top-4 left-4 z-10">
                          <div className="bg-red-600 text-white text-[9px] font-black px-2 py-1 rounded uppercase tracking-widest">
                            EST. {company.since}
                          </div>
                        </div>

                        <div className="absolute inset-0 flex items-center px-6 z-10">
                          <h3 className="text-2xl md:text-3xl font-black text-white leading-none uppercase tracking-tighter drop-shadow-lg">
                            {company.shortName}
                          </h3>
                        </div>
                      </div>

                      {/* Floating Icon - Scaled for mobile */}
                      <div className="relative">
                        <div className="absolute right-6 top-0 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-white rounded-xl md:rounded-2xl flex items-center justify-center text-red-600 shadow-xl border border-slate-100 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                          {company.icon}
                        </div>
                      </div>

                      <div className="p-6 md:p-10 pt-10 md:pt-12 flex flex-col flex-grow">
                        <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-3 md:mb-4 pr-10 group-hover:text-red-600 transition-colors">
                          {company.name}
                        </h4>
                        <p className="text-slate-500 font-medium mb-8 md:mb-10 leading-relaxed text-xs md:text-sm">
                          {company.desc}
                        </p>
                        <div className="mt-auto flex items-center text-slate-900 font-black uppercase tracking-widest text-[10px] group-hover:text-red-600 transition-colors">
                          View Products <ArrowRight className="ml-2 w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* --- INFRASTRUCTURE SECTION --- */}
        <section className="py-16 md:py-32 bg-white overflow-hidden">
          <div className="container mx-auto px-5 sm:px-10 lg:px-16">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="space-y-8 md:space-y-10"
              >
                <div className="space-y-3 md:space-y-4">
                  <motion.div variants={fadeInUp} className="inline-block px-3 py-1 bg-red-100 text-red-700 rounded text-[9px] font-black uppercase tracking-widest">
                    Manufacturing Rigor
                  </motion.div>
                  <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight uppercase tracking-tighter">
                    Technical <br className="hidden md:block" />
                    <span className="text-red-600 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">Excellence</span>
                  </motion.h2>
                  <motion.p variants={fadeInUp} className="text-sm md:text-lg text-slate-600 font-medium leading-relaxed">
                    Our infrastructure is designed for high-performance industrial chemical production, utilizing PhD-led research to ensure precise bulk formulations.
                  </motion.p>
                </div>

                <div className="grid gap-4">
                  {[
                    { title: "SS Polymerization", icon: <ShieldCheck className="w-5 h-5" />, text: "Stainless steel reactors ensure zero metallic contamination." },
                    { title: "RO Water Standard", icon: <CheckCircle2 className="w-5 h-5" />, text: " Mandatory Reverse Osmosis water systems for purity." },
                    { title: "PhD-Led Research", icon: <Microscope className="w-5 h-5" />, text: "Reaction kinetics managed by industry-leading experts." },
                  ].map((item, i) => (
                    <motion.div key={i} variants={fadeInUp} className="flex gap-4 md:gap-6 p-5 md:p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-red-200 transition-colors group">
                      <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                        {item.icon}
                      </div>
                      <div>
                        <h5 className="font-bold text-slate-900 mb-1 uppercase text-[10px] md:text-xs tracking-wider">{item.title}</h5>
                        <p className="text-[10px] md:text-xs text-slate-500 font-medium leading-relaxed">{item.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <div className="relative pt-10 md:pt-0">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative z-10 rounded-3xl lg:rounded-[3rem] overflow-hidden shadow-2xl border-[8px] md:border-[16px] border-slate-100"
                >
                  <Image
                    src="/images/wds-lab-image.jpeg"
                    alt="R&D Lab Facility"
                    width={800}
                    height={1000}
                    className="object-cover h-[350px] md:h-auto"
                    unoptimized
                  />
                </motion.div>

                {/* Scaled-down Statistics Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="absolute -bottom-6 -left-4 md:-bottom-10 md:-left-10 bg-slate-950 p-6 md:p-10 rounded-2xl md:rounded-[2.5rem] shadow-2xl z-20 text-white max-w-[180px] md:max-w-xs border border-white/10"
                >
                  <Award className="w-8 h-8 md:w-12 md:h-12 mb-3 md:mb-4 text-red-600" />
                  <h4 className="text-lg md:text-2xl font-black mb-1 uppercase tracking-tighter">50 - 100 Tons</h4>
                  <p className="text-slate-400 text-[9px] md:text-xs font-medium uppercase tracking-widest leading-loose">
                    Daily Handling Capacity
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* --- STRATEGIC VISION SECTION --- */}
        <section className="py-20 md:py-32 bg-slate-950 relative overflow-hidden">
          <div className="container mx-auto px-5 sm:px-10 lg:px-16 relative z-10">
            <div className="grid lg:grid-cols-12 gap-10 md:gap-16 items-center">

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="lg:col-span-7 space-y-6 md:space-y-8"
              >
                <div className="bg-red-600/10 border border-red-600/20 inline-block px-4 py-1.5 rounded-full">
                  <span className="text-red-500 font-black text-[9px] md:text-xs uppercase tracking-[0.2em]">Strategic Alignment</span>
                </div>
                <h2 className="text-3xl md:text-6xl font-black text-white leading-tight uppercase tracking-tighter">
                  Global <span className="text-red-600 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-400">Export Hub</span>
                </h2>
                <p className="text-sm md:text-lg text-slate-400 leading-relaxed font-medium">
                  Located in Gadoon Amazai, WDS leverages road corridors from China to bypass sea route constraints, facilitating real-time raw material procurement for global joint ventures.
                </p>
                <div className="flex flex-wrap gap-6 md:gap-10 pt-2">
                  {[
                    { label: "Daily Output", val: "50+ Tons" },
                    { label: "CPEC Hub", val: "Aligned" }
                  ].map((stat, i) => (
                    <div key={i}>
                      <div className="text-white text-2xl md:text-4xl font-black mb-1 uppercase">{stat.val}</div>
                      <div className="text-red-500 text-[8px] md:text-[10px] font-black uppercase tracking-widest">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="lg:col-span-5"
              >
                <div className="bg-white/5 backdrop-blur-xl p-8 md:p-12 rounded-3xl md:rounded-[3rem] border border-white/10">
                  <Globe2 className="w-10 h-10 md:w-12 md:h-12 text-red-600 mb-6" />
                  <h4 className="text-lg md:text-xl font-black text-white mb-4 uppercase tracking-wider">Joint Venture Partner</h4>
                  <p className="text-xs md:text-sm text-slate-400 leading-relaxed mb-6 font-medium">
                    We act as toll manufacturers for global entities, leveraging local agri-business R&D to strengthen industrial independence.
                  </p>
                  <Link href="/wds" className="inline-flex items-center text-red-500 font-black uppercase tracking-widest text-[9px] md:text-[10px] hover:text-red-400 transition-colors group">
                    Explore Strategy <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* --- FINAL ACTION SECTION --- */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-5 sm:px-10 lg:px-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-red-600 rounded-[2.5rem] md:rounded-[4rem] p-10 md:p-24 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10 max-w-3xl mx-auto space-y-6 md:space-y-10">
                <h2 className="text-3xl md:text-7xl font-black text-white leading-tight md:leading-[0.9] tracking-tighter uppercase">
                  Let&apos;s Build <br className="md:hidden" /> The Future
                </h2>
                <p className="text-red-100 text-sm md:text-lg font-medium opacity-90">
                  Connect with our specialized directors to discuss bulk industrial supply, trial formulations, or strategic manufacturing synergy.
                </p>
                <Link href="/contact" className="inline-flex px-8 py-4 md:px-12 md:py-5 bg-white text-red-600 rounded-xl font-black text-[10px] md:text-sm uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all transform hover:-translate-y-1 shadow-2xl">
                  Contact Group Directors
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </motion.main>
    </AnimatePresence>
  );
}