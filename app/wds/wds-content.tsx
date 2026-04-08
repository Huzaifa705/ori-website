"use client";

import { useState, useEffect } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
    Building2,
    TrendingUp,
    Globe2,
    ChevronRight,
    Sun,
    ShieldCheck,
    Microscope,
    Leaf,
    Database,
    Route
} from 'lucide-react';

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

export default function WDSContent() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <AnimatePresence mode="wait">
            <motion.main
                key="wds-page"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="min-h-screen bg-white selection:bg-red-100 selection:text-red-900 overflow-x-hidden"
            >
                {/* --- HERO SECTION --- */}
                <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-slate-950 overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="https://images.unsplash.com/photo-1565514020179-026b92b84bb6?q=80&w=2070&auto=format&fit=crop"
                            alt="Large Scale Industrial Plant"
                            fill
                            className="object-cover opacity-20"
                            unoptimized
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
                    </div>

                    <div className="container mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="max-w-4xl space-y-6 md:space-y-8"
                        >
                            <motion.div variants={fadeInUp} className="inline-flex items-center space-x-2 px-3 py-1 bg-red-600/20 border border-red-500/30 rounded-md text-red-400 font-bold text-[10px] tracking-widest uppercase">
                                <Building2 className="w-3.5 h-3.5 shrink-0" />
                                <span>Established 2020</span>
                            </motion.div>

                            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tighter uppercase break-words">
                                W.D.S. Synthetic <br /><span className="text-red-600">Polymer Industries</span>
                            </motion.h1>

                            <motion.p variants={fadeInUp} className="text-sm sm:text-base md:text-lg text-slate-300 font-medium max-w-2xl leading-relaxed">
                                House of Speciality Chemicals. Strategically located in KPK to leverage global CPEC trade routes, pioneering the future of industrial polymers via international joint ventures and toll manufacturing.
                            </motion.p>

                            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 sm:gap-6 pt-4">
                                {[
                                    { val: "50T+", label: "Daily Production" },
                                    { val: "1000T", label: "Storage Capacity" },
                                    { val: "100%", label: "Grid-Free Solar" }
                                ].map((stat, i) => (
                                    <div key={i} className="border-l border-red-600 pl-3 sm:pl-4">
                                        <div className="text-white text-xl sm:text-2xl md:text-3xl font-black">{stat.val}</div>
                                        <div className="text-slate-500 text-[8px] sm:text-[9px] font-bold uppercase tracking-widest mt-1">{stat.label}</div>
                                    </div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* --- CPEC STRATEGY & LOGISTICS --- */}
                <section className="py-16 md:py-32 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-16">
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
                                        Strategic Positioning
                                    </motion.div>
                                    <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight uppercase tracking-tighter break-words">
                                        Built for the <br /> <span className="text-red-600">Coming Decades</span>
                                    </motion.h2>
                                    <motion.div variants={fadeInUp} className="text-sm md:text-base text-slate-600 font-medium leading-relaxed space-y-4">
                                        <p>
                                            WDS was conceptualized during the CPEC initiation. Located in Gadoon Amazai, we act as a massive export hub by obtaining goods directly via road corridors from China, bypassing the delays and choking of sea routes.
                                        </p>
                                        <p>
                                            Our investment envisions the creation of massive storage facilities—designed to accommodate over 1,000 tons of products at any one time—ensuring timely raw material availability even in troubled times.
                                        </p>
                                    </motion.div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    <motion.div variants={fadeInUp} className="p-5 bg-slate-50 border border-slate-100 rounded-2xl">
                                        <Globe2 className="text-red-600 w-6 h-6 sm:w-8 sm:h-8 mb-3 shrink-0" />
                                        <h4 className="font-black text-slate-900 text-xs uppercase tracking-wider mb-2">Toll Manufacturing</h4>
                                        <p className="text-[10px] text-slate-500 font-medium">Partnering with Chinese manufacturers for joint technology collaborations.</p>
                                    </motion.div>
                                    <motion.div variants={fadeInUp} className="p-5 bg-slate-50 border border-slate-100 rounded-2xl">
                                        <Database className="text-red-600 w-6 h-6 sm:w-8 sm:h-8 mb-3 shrink-0" />
                                        <h4 className="font-black text-slate-900 text-xs uppercase tracking-wider mb-2">1000-Ton Storage</h4>
                                        <p className="text-[10px] text-slate-500 font-medium">Massive scale inventory capabilities to shield against supply chain disruptions.</p>
                                    </motion.div>
                                </div>
                            </motion.div>

                            <div className="relative w-full">
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="relative rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl border-[6px] md:border-[12px] border-slate-100 h-[350px] md:h-[600px] w-full"
                                >
                                    <Image
                                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
                                        alt="Industrial Logistics and Storage"
                                        fill
                                        className="object-cover"
                                        unoptimized
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent flex flex-col justify-end p-6 md:p-12">
                                        <div className="w-10 h-10 md:w-16 md:h-16 bg-red-600 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 shadow-xl shrink-0">
                                            <Route className="w-5 h-5 md:w-8 md:h-8 text-white" />
                                        </div>
                                        <h3 className="text-lg md:text-2xl font-black text-white uppercase mb-1 md:mb-2">CPEC Trade Route</h3>
                                        <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-medium">
                                            Direct road access lowers both costs and logistical friction for Chinese joint ventures.
                                        </p>
                                    </div>
                                </motion.div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* --- INFRASTRUCTURE & ETHICS --- */}
                <section className="py-16 md:py-32 bg-slate-50">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-16">
                        <div className="grid lg:grid-cols-12 gap-8 lg:gap-20 items-center">

                            {/* Left Image Cluster - Fixed Responsive Stack */}
                            <div className="lg:col-span-5 relative flex flex-col md:block">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="relative rounded-3xl overflow-hidden shadow-2xl h-[300px] sm:h-[400px] md:h-[500px] w-full"
                                >
                                    <Image
                                        src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=2000"
                                        alt="Solar Powered Infrastructure"
                                        fill
                                        className="object-cover"
                                        unoptimized
                                    />
                                    <div className="absolute inset-0 bg-slate-950/20" />
                                </motion.div>

                                {/* Grid-Free Badge (Fixed Overlap for Mobile) */}
                                <motion.div
                                    initial={{ y: 30, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    className="relative md:absolute -mt-12 md:mt-0 mx-4 md:mx-0 md:-bottom-8 md:-right-8 p-6 md:p-8 bg-slate-950 text-white rounded-3xl shadow-2xl border border-white/10 z-20 md:max-w-[280px]"
                                >
                                    <Sun className="text-red-500 w-8 h-8 md:w-10 md:h-10 mb-3 md:mb-4 shrink-0" />
                                    <h4 className="text-base md:text-lg font-black uppercase mb-1 md:mb-2">100% Grid-Free</h4>
                                    <p className="text-[10px] md:text-[11px] text-slate-400 font-medium leading-relaxed">
                                        Self-generation of power via solar routes ensures immunity to grid failure, supplemented by LPG heating systems.
                                    </p>
                                </motion.div>
                            </div>

                            {/* Right Text Content */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={containerVariants}
                                className="lg:col-span-7 space-y-6 md:space-y-8 pt-8 md:pt-0"
                            >
                                <div className="space-y-4">
                                    <motion.div variants={fadeInUp} className="inline-block px-3 py-1 bg-red-100 text-red-700 rounded text-[9px] font-black uppercase tracking-widest">
                                        R&D and Ethical Policy
                                    </motion.div>
                                    <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-black text-slate-900 leading-tight uppercase tracking-tighter break-words">
                                        Blue Sky Research <br /> & <span className="text-red-600">Integrity</span>
                                    </motion.h2>
                                    <motion.p variants={fadeInUp} className="text-sm md:text-base text-slate-600 font-medium leading-relaxed">
                                        WDS laboratories focus purely on "Blue Sky" process research. Instead of standard product development, we concentrate on optimizing reaction processes—like determining the ideal VAM temperature for minimal free monomer—benefiting our entire group.
                                    </motion.p>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-4 md:gap-6 pt-2 md:pt-4">
                                    <motion.div variants={fadeInUp} className="flex flex-col gap-2 md:gap-3 p-5 md:p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                                        <Leaf className="w-6 h-6 md:w-8 md:h-8 text-green-600 shrink-0" />
                                        <h4 className="font-bold text-slate-900 text-xs md:text-sm uppercase tracking-wider">Agri-Business Focus</h4>
                                        <p className="text-[10px] md:text-xs text-slate-500 font-medium leading-relaxed">
                                            Located in an agricultural region, we are investing in pesticide research to bring the best solutions back to Pakistan's farming sector.
                                        </p>
                                    </motion.div>

                                    <motion.div variants={fadeInUp} className="flex flex-col gap-2 md:gap-3 p-5 md:p-6 bg-red-50 rounded-2xl border border-red-100 shadow-sm">
                                        <ShieldCheck className="w-6 h-6 md:w-8 md:h-8 text-red-600 shrink-0" />
                                        <h4 className="font-bold text-slate-900 text-xs md:text-sm uppercase tracking-wider">Strict Health Policy</h4>
                                        <p className="text-[10px] md:text-xs text-slate-700 font-bold leading-relaxed">
                                            As a policy matter, no R&D will compromise human health. We explicitly refuse to engage in toxic leather chemical production.
                                        </p>
                                    </motion.div>
                                </div>
                            </motion.div>

                        </div>
                    </div>
                </section>

                {/* --- FACTORY SPECS BANNER --- */}
                <section className="py-12 md:py-20 bg-slate-950 border-t border-slate-800">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-16">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={containerVariants}
                            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-x divide-white/10"
                        >
                            {[
                                { val: "50+", label: "Tons Daily Output" },
                                { val: "10T", label: "Multiple Reactors" },
                                { val: "RO", label: "Water Standard" },
                                { val: "On-Site", label: "Housing Colony" }
                            ].map((item, idx) => (
                                <motion.div key={idx} variants={fadeInUp} className="text-center px-2 md:px-4">
                                    <div className="text-2xl md:text-4xl font-black text-white mb-1 md:mb-2">{item.val}</div>
                                    <div className="text-[8px] md:text-xs text-red-500 font-black uppercase tracking-[0.2em]">{item.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* --- FINAL CTA (Responsive Fix) --- */}
                <section className="py-16 md:py-32 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-16 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="bg-red-600 rounded-3xl sm:rounded-[3rem] md:rounded-[4rem] px-6 py-12 sm:p-12 md:p-24 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-white/10 rounded-full blur-[80px] md:blur-[100px] -translate-y-1/2 translate-x-1/2" />

                            <div className="relative z-10 max-w-4xl mx-auto space-y-6 md:space-y-8">
                                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] md:leading-[0.9] tracking-tighter uppercase break-words">
                                    Ready for Joint <br className="hidden sm:block" /> Manufacturing?
                                </h2>
                                <p className="text-red-100 text-xs sm:text-sm md:text-lg font-medium opacity-90 max-w-xl mx-auto px-4 sm:px-0">
                                    Utilize our massive infrastructure, grid-free power, and CPEC-aligned location for your next industrial venture.
                                </p>
                                <Link href="/contact" className="inline-flex px-6 py-4 md:px-12 md:py-5 bg-white text-red-600 rounded-xl font-black text-[10px] md:text-sm uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all transform hover:-translate-y-1 shadow-2xl mt-2 md:mt-4">
                                    Consult Directorate
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>

            </motion.main>
        </AnimatePresence>
    );
}