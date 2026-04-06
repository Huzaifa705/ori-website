"use client";

import Link from "next/link";
import React from "react";

const Footer = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Oriental Chemical Industries", path: "/oci" },
    { name: "Textile Chemical Industries", path: "/tci" },
    { name: "W.D.S. Synthetic Polymer", path: "/wds" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="relative bg-slate-900 border-t border-slate-800 overflow-hidden">
      {/* Decorative Red Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-slate-500/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          
          {/* Company Identity */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex flex-col">
              <h2 className="text-2xl font-black tracking-tighter text-white">
                GROUP OF
                <span className="block text-red-500 text-xl font-bold tracking-normal">
                  COMPANIES
                </span>
              </h2>
              <div className="h-1 w-12 bg-red-600 rounded-full mt-3"></div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              Your Trusted Partner For Specialty Technology And Process since 1996. 
              Pioneers in PVAc, Adhesives, Textile Auxiliary Chemicals, and Synthetic Polymers.
            </p>
            <div className="inline-block px-3 py-1 bg-white/10 rounded text-xs font-bold text-red-400 tracking-widest border border-white/10">
              EST. 1996
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="text-sm font-black tracking-widest uppercase text-white">Quick Links</h4>
            <nav className="flex flex-col space-y-3">
              {navLinks.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className="text-slate-400 hover:text-red-400 font-medium text-sm transition-colors duration-300 hover:translate-x-1 inline-flex items-center group"
                >
                  <span className="w-0 group-hover:w-4 h-0.5 bg-red-500 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Data mapped from Pamphlet */}
          <div className="md:col-span-4 space-y-6">
            <h4 className="text-sm font-black tracking-widest uppercase text-white">Corporate Offices</h4>
            <div className="space-y-5 text-sm text-slate-400">
              
              {/* OCI / TCI Location */}
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="leading-relaxed">
                  <strong className="text-slate-200 block mb-0.5">Korangi Industrial Area</strong>
                  Plot # 4/44 & 4/11, Sector 21<br/>Karachi, Pakistan
                </span>
              </div>

              {/* WDS Location */}
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="leading-relaxed">
                  <strong className="text-slate-200 block mb-0.5">Gadoon Amazai</strong>
                  Plot # L-20, Road# 1, Industrial Estate<br/>K.P.K, Pakistan
                </span>
              </div>

              {/* Contact Line */}
              <div className="flex items-center space-x-3 pt-2">
                <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="font-mono">021-35012024 / 0938-270077</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-500 text-sm text-center md:text-left font-medium">
              © {new Date().getFullYear()} Group of Companies. All rights reserved.
            </p>
            <div className="flex items-center space-x-8">
              <Link href="/privacy" className="text-slate-500 hover:text-red-400 text-sm font-medium transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-slate-500 hover:text-red-400 text-sm font-medium transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;