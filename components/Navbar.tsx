"use client";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import companyLogo from "../public/images/companyLogo.png"; // Replace image file later

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleEscKey);
    return () => window.removeEventListener("keydown", handleEscKey);
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!mobileMenuOpen) return;
      if (mobileMenuRef.current && mobileMenuRef.current.contains(e.target as Node)) return;
      if (buttonRef.current && buttonRef.current.contains(e.target as Node)) return;
      setMobileMenuOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "OCI", path: "/oci" },
    { name: "TCI", path: "/tci" },
    { name: "WDS", path: "/wds" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled
            ? "bg-[#f7f7f7] backdrop-blur-xl shadow-2xl shadow-slate-200/20 py-2 lg:py-2"
            : "bg-[#f7f7f7] py-2 lg:py-3"
          }`}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-4 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
              </div>
              <div className="relative z-10 flex items-center">
                {/* Temporary text-based logo until you swap images */}
                <div className="font-black text-2xl tracking-tighter text-slate-900 leading-none">
                  GROUP OF<br />
                  <span className="text-red-600 text-lg">COMPANIES</span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center space-x-12">
              {navLinks.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className="relative text-slate-700 hover:text-red-600 font-bold text-base xl:text-sm tracking-wide uppercase transition-all duration-300 group py-2"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-red-500 group-hover:w-full transition-all duration-500"></span>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              ref={buttonRef}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden w-12 h-12 flex flex-col items-center justify-center space-y-1.5 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all duration-300"
            >
              <span className={`w-6 h-0.5 bg-slate-900 transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
              <span className={`w-6 h-0.5 bg-slate-900 transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`}></span>
              <span className={`w-6 h-0.5 bg-slate-900 transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="xl:hidden bg-white border-t border-slate-200 shadow-xl"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-2">
                {navLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-slate-700 hover:text-red-600 font-bold uppercase tracking-wide text-sm py-3 border-b border-slate-100 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;