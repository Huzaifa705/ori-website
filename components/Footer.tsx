"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Oriental Chemical Industries", path: "/oci" },
    { name: "Textile Chemical Industries", path: "/tci" },
    { name: "W.D.S. Synthetic Polymer", path: "/wds" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="relative bg-slate-950 border-t border-white/5 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-16 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20"
        >

          {/* Identity */}
          <div className="md:col-span-5 space-y-8">
            <div className="flex flex-col">
              <Link href="/" className="relative w-20 overflow-hidden h-20 rounded-full inline-block bg-white/10 p-4 backdrop-blur-sm">
                <Image 
                  src="/images/oci-logo.jpg" 
                  alt="OCI Logo" 
                  fill 
                  className="object-contain p-2" 
                />
              </Link>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Your Trusted Partner For Specialty Technology And Process since 1996.
              Specializing in high-performance adhesives, textile chemicals, and synthetic polymers.
            </p>
            <div className="inline-block px-3 py-1 bg-white/10 rounded-full text-[10px] sm:text-xs font-black text-red-400 tracking-widest border border-white/10 uppercase">
              Industrial Excellence Since 1996
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-3 space-y-8">
            <h4 className="text-xs font-black tracking-widest uppercase text-white">Divisions</h4>
            <nav className="flex flex-col space-y-4">
              {navLinks.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className="text-slate-500 hover:text-red-500 font-bold text-sm flex items-center group transition-colors"
                >
                  {item.name}
                  <ArrowUpRight size={14} className="ml-2 opacity-0 group-hover:opacity-100 transition-all" />
                </Link>
              ))}
            </nav>
          </div>

          {/* Location Data */}
          <div className="md:col-span-4 space-y-8">
            <h4 className="text-xs font-black tracking-widest uppercase text-white">Manufacturing Bases</h4>
            <div className="space-y-6">
              <div className="flex items-start space-x-4 group">
                <MapPin className="text-red-600 mt-1 flex-shrink-0" size={18} />
                <span className="text-slate-400 text-sm leading-relaxed transition-colors group-hover:text-slate-300">
                  <strong className="text-white block mb-1 uppercase text-[10px] tracking-wider">South (OCI & TCI)</strong>
                  Plot # 4/44 & 4/11, Sector 21<br />Korangi Industrial Area, Karachi
                </span>
              </div>
              <div className="flex items-start space-x-4 group">
                <MapPin className="text-red-600 mt-1 flex-shrink-0" size={18} />
                <span className="text-slate-400 text-sm leading-relaxed transition-colors group-hover:text-slate-300">
                  <strong className="text-white block mb-1 uppercase text-[10px] tracking-wider">North (WDS)</strong>
                  Plot # L-20, Road# 1, Industrial Estate<br />Gadoon Amazai, K.P.K
                </span>
              </div>
              <div className="flex items-center space-x-4 pt-4 border-t border-white/5">
                <Phone className="text-red-600" size={18} />
                <span className="font-bold text-white text-sm">021-35012024 / 0938-270077</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer Bottom */}
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} OCI Group. All rights reserved.
          </p>
          <div className="flex space-x-8">
            <Link href="/privacy" className="text-[10px] font-black text-slate-600 hover:text-white uppercase tracking-widest transition-colors">Privacy</Link>
            <Link href="/terms" className="text-[10px] font-black text-slate-600 hover:text-white uppercase tracking-widest transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;