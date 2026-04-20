"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";

// --- TYPE-SAFE ANIMATION VARIANTS ---
const menuVariants: Variants = {
  closed: {
    x: "100%",
    transition: { type: "spring", damping: 30, stiffness: 300 }
  },
  open: {
    x: 0,
    transition: { type: "spring", damping: 25, stiffness: 200 }
  }
};

const linkVariants: Variants = {
  closed: { opacity: 0, x: 20 },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, duration: 0.4 }
  })
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "OCI Division", path: "/oci" },
    { name: "TCI Division", path: "/tci" },
    { name: "WDS Division", path: "/wds" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-[500] transition-all duration-300 ${isOpen || scrolled
          ? "bg-white shadow-xl py-3"
          : "bg-white backdrop-blur-md py-5 sm:bg-white"
        }`}
    >
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex items-center justify-between">

          {/* BRAND LOGO */}
          <Link href="/" className="flex items-center group relative z-[510]">
            <div className="relative w-32 h-12 md:w-40 md:h-14 transition-transform group-hover:scale-105">
              <Image
                src="/images/oci-logo.jpg"
                alt="OCI Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden xl:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="text-[11px] font-black uppercase tracking-widest transition-all hover:text-red-600 relative group text-slate-600"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all group-hover:w-full" />
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-red-600 text-white px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-slate-900 transition-all shadow-xl shadow-red-600/20"
            >
              Consult Now
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`xl:hidden p-2 rounded-lg transition-colors relative z-[510] ${isOpen || scrolled ? "text-slate-900 bg-slate-100" : "text-slate-600 bg-white/10"
              }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 h-screen bg-white z-[505] xl:hidden flex flex-col p-8 pt-32 shadow-2xl"
          >
            <div className="space-y-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  custom={i}
                  variants={linkVariants}
                >
                  <Link
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between text-3xl font-black text-slate-900 uppercase tracking-tighter hover:text-red-600 group border-b border-slate-50 pb-4"
                  >
                    {link.name}
                    <ChevronRight className="text-red-600 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-auto pt-10 border-t border-slate-100 space-y-4"
            >
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Global Headquarters</p>
              <p className="text-sm font-bold text-slate-600 leading-relaxed">
                Plot # 4/44, Sector 21 <br />
                Korangi Industrial Area, Karachi
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;