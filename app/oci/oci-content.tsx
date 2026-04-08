"use client";

import { useState, useEffect } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, Variants } from "framer-motion";
import { FlaskConical, Microscope, ShieldCheck, Droplets, Zap, ChevronRight, Factory, LineChart } from 'lucide-react';

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

export default function OCIContent() {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => setIsMounted(true), []);

    const products = [
        { name: "B-2 (D-60 F)", desc: "KDF-2 MARK-9 High-Speed Machine Glue" },
        { name: "DM- 1300", desc: "HLP Machine Glue Specialty" },
        { name: "DM Lamination", desc: "High-bond industrial adhesives" },
        { name: "KB-8020", desc: "Specialized for Tissue Window" },
        { name: "B-10 SP", desc: "POY Tube Core Board Grade" },
        { name: "GPS Grade", desc: "Automated Box Making Glue" }
    ];

    if (!isMounted) return null;

    return (
        <AnimatePresence mode="wait">
            <motion.main
                key="oci-page"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="min-h-screen bg-white selection:bg-red-100 selection:text-red-900 overflow-x-hidden"
            >
                {/* --- HERO SECTION: Technical Focus --- */}
                <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-slate-950 overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="https://images.unsplash.com/photo-1617155093730-a8bf47be792d?q=80&w=2070&auto=format&fit=crop"
                            alt="Chemical Manufacturing Infrastructure"
                            fill
                            className="object-cover opacity-20"
                            unoptimized
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
                    </div>

                    <div className="container mx-auto px-5 sm:px-10 lg:px-16 relative z-10">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="max-w-4xl space-y-6 md:space-y-8"
                        >
                            <motion.div variants={fadeInUp} className="inline-flex items-center space-x-2 px-3 py-1 bg-red-600/20 border border-red-500/30 rounded-md text-red-400 font-bold text-[10px] tracking-widest uppercase">
                                <FlaskConical className="w-3.5 h-3.5" />
                                <span>Division Established 1996</span>
                            </motion.div>

                            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tighter uppercase">
                                Oriental Chemical <br /><span className="text-red-600">Industries</span>
                            </motion.h1>

                            <motion.p variants={fadeInUp} className="text-base md:text-lg text-slate-300 font-medium max-w-2xl leading-relaxed">
                                Specializing in PVAc, pure acrylic, and styrene acrylic emulsions. Operating three industrial units across Karachi and KPK to meet end-user requirements with absolute consistency.
                            </motion.p>

                            <motion.div variants={fadeInUp} className="flex flex-wrap gap-6 pt-4">
                                {[
                                    { val: "50T", label: "Daily Output" },
                                    { val: "100T", label: "Bulk Handling" },
                                    { val: "5", label: "Major Brands" }
                                ].map((stat, i) => (
                                    <div key={i} className="border-l border-red-600 pl-4">
                                        <div className="text-white text-2xl md:text-3xl font-black">{stat.val}</div>
                                        <div className="text-slate-500 text-[9px] font-bold uppercase tracking-widest mt-1">{stat.label}</div>
                                    </div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* --- INTRODUCTION & INFRASTRUCTURE --- */}
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
                                        Infrastructure & Capabilities
                                    </motion.div>
                                    <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight uppercase tracking-tighter">
                                        Precision <span className="text-red-600">Polymerization</span>
                                    </motion.h2>
                                    <motion.div variants={fadeInUp} className="text-sm md:text-base text-slate-600 font-medium leading-relaxed space-y-4">
                                        <p>
                                            Founded in 1996 to serve local industries in adhesives, paints, and packaging, OCI has evolved into a leader in the retail business sector. Our facilities are designed for quality consistency and extreme operational rigor.
                                        </p>
                                        <p>
                                            Every polymerization plant is constructed entirely of stainless steel to ensure zero metallic contamination during sensitive reactions. Our entire system operates exclusively on RO (Reverse Osmosis) water to prevent impurities.
                                        </p>
                                    </motion.div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    {[
                                        { title: "SS Reactors", icon: <ShieldCheck />, text: "Zero metallic contamination reactions." },
                                        { title: "RO Water", icon: <Droplets />, text: "Mandatory pure water processing." },
                                        { title: "Flow Metering", icon: <Zap />, text: "Digital metering for precise volume." },
                                        { title: "Redundancy", icon: <LineChart />, text: "Multi-backup power & chillers." }
                                    ].map((item, i) => (
                                        <motion.div key={i} variants={fadeInUp} className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                            <div className="flex items-center gap-3 mb-2">
                                                <div className="text-red-600">{item.icon}</div>
                                                <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">{item.title}</h4>
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
                                        src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070&auto=format&fit=crop"
                                        alt="PhD-Led Laboratory Research"
                                        fill
                                        className="object-cover"
                                        unoptimized
                                    />
                                    <div className="absolute inset-0 bg-slate-950/40 flex flex-col justify-end p-8 md:p-12">
                                        <div className="w-12 h-12 md:w-16 md:h-16 bg-red-600 rounded-2xl flex items-center justify-center mb-4 shadow-xl">
                                            <Microscope className="w-6 h-6 md:w-8 md:h-8 text-white" />
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-black text-white uppercase mb-2">PhD-Led R&D</h3>
                                        <p className="text-xs md:text-sm text-slate-200 leading-relaxed font-medium">
                                            Theoretical grounds and reaction kinetics are overseen by qualified experts to execute the most challenging product developments.
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- PRODUCT CATALOG: Automated Grid --- */}
                <section className="py-20 md:py-32 bg-slate-50">
                    <div className="container mx-auto px-5 sm:px-10 lg:px-16">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={containerVariants}
                            className="max-w-4xl mb-12 md:mb-16"
                        >
                            <motion.div variants={fadeInUp} className="inline-block px-3 py-1 bg-red-100 text-red-600 rounded text-[9px] font-black uppercase tracking-widest mb-4">
                                Printing & Packaging Grades
                            </motion.div>
                            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-4">
                                High-Speed <br /> <span className="text-red-600">Adhesive Solutions</span>
                            </motion.h2>
                            <motion.p variants={fadeInUp} className="text-sm md:text-lg text-slate-600 font-medium">
                                Premium Adhesive Glues developed specifically for high-speed industrial machinery including KDF-2 and HLP machine lines.
                            </motion.p>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={containerVariants}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
                        >
                            {products.map((product, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={fadeInUp}
                                    whileHover={{ y: -5 }}
                                    className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col group hover:border-red-500 transition-all"
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-1.5 h-1.5 bg-red-600 rounded-full shrink-0 group-hover:scale-150 transition-transform" />
                                        <span className="font-black text-slate-900 text-sm uppercase tracking-wider">{product.name}</span>
                                    </div>
                                    <p className="text-[10px] md:text-xs text-slate-500 font-bold uppercase tracking-widest">{product.desc}</p>
                                    {/* <div className="mt-4 pt-4 border-t border-slate-50 flex items-center text-[9px] font-black text-red-600 uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                                        Technical Specifications <ChevronRight className="w-3 h-3 ml-1" />
                                    </div> */}
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="mt-16 md:mt-20 p-8 md:p-12 bg-slate-900 rounded-[2rem] md:rounded-[3rem] text-center relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10 space-y-6">
                                <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter">
                                    Request Custom <span className="text-red-600">Product Trials</span>
                                </h3>
                                <p className="text-slate-400 text-sm md:text-base font-medium max-w-2xl mx-auto">
                                    We understand the target market and pricing mechanisms. Our labs can custom-develop products that fit precisely into your targeted sector.
                                </p>
                                <Link href="/contact" className="inline-flex px-8 py-4 bg-red-600 text-white rounded-xl font-black text-[10px] md:text-xs uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all transform hover:-translate-y-1 shadow-2xl">
                                    Consult Group Directors
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </motion.main>
        </AnimatePresence>
    );
}