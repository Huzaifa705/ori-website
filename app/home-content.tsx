"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FlaskConical,
  Beaker,
  Factory,
  ArrowRight,
  Microscope,
  Globe2,
  ShieldCheck,
  Award
} from "lucide-react";

export default function HomeContent() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const getParallaxStyle = (multiplier: number = 1) => {
    if (!isMounted) return {};
    const x = (mousePosition.x - window.innerWidth / 2) / 60;
    const y = (mousePosition.y - window.innerHeight / 2) / 60;
    return {
      transform: `translate(${x * multiplier}px, ${y * multiplier}px)`,
      transition: "transform 0.1s ease-out",
    };
  };

  const companies = [
    {
      id: "oci",
      name: "Oriental Chemical Industries",
      shortName: "OCI CHEM",
      desc: "Leading manufacturer of PVAc, Adhesive Glues & Acrylic Emulsions. Serving retail sectors with five major brands from Karachi to Khyber.",
      icon: <FlaskConical className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1617155093730-a8bf47be792d?q=80&w=2070&auto=format&fit=crop",
      href: "/oci",
      since: "1996"
    },
    {
      id: "tci",
      name: "Textile Chemical Industries",
      shortName: "TCI",
      desc: "Premium Auxiliary Chemicals for Textile, Paint, Leather, Coating, Printing & Dyeing. Fully compliant with IKEA, Oekotex, and REACH standards.",
      icon: <Beaker className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1972&auto=format&fit=crop",
      href: "/tci",
      since: "1961"
    },
    {
      id: "wds",
      name: "W.D.S. Synthetic Polymer",
      shortName: "WDS",
      desc: "House of Speciality Chemicals with massive 50+ tons/day capacity. Strategically located for international joint ventures and global exports.",
      icon: <Factory className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?q=80&w=2070&auto=format&fit=crop",
      href: "/wds",
      since: "2020"
    }
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-red-100 selection:text-red-900">

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900">
        {/* Background Dummy Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
            alt="Industrial Manufacturing"
            fill
            className="object-cover opacity-30"
            unoptimized
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-red-900/40" />
        </div>

        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="max-w-4xl space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            <div className="inline-flex items-center space-x-3 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <span className="text-xs font-bold text-white uppercase tracking-widest">
                Trusted Partner Since 1996
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black leading-[1.05] text-white tracking-tight">
              GROUP OF <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">
                COMPANIES
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-medium max-w-2xl">
              Your Trusted Partner For Speciality Technology And Process. Delivering industrial excellence across adhesives, textile auxiliary chemicals, and synthetic polymers for over two decades.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-red-600 text-white rounded-xl font-bold shadow-lg shadow-red-600/30 hover:bg-red-700 transition-all transform hover:-translate-y-1 flex items-center gap-2"
              >
                Partner With Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- CORPORATE DIVISIONS (COMPANIES) --- */}
      <section className="py-24 bg-slate-50 relative">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-5 py-2 bg-red-100 rounded-full mb-6">
              <span className="text-sm font-bold text-red-700 tracking-wide uppercase">Our Divisions</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">Specialized Manufacturing Units</h2>
            <p className="text-lg text-slate-600 font-medium">
              Three distinct industrial entities, united under one group to provide comprehensive chemical solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {companies.map((company) => (
              <Link key={company.id} href={company.href} className="group block h-full">
                <div className="bg-white rounded-[2.5rem] border border-slate-200 overflow-hidden shadow-xl shadow-slate-200/50 hover:border-red-500 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full flex flex-col">

                  {/* Image Header */}
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={company.image}
                      alt={company.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                    <div className="absolute bottom-6 left-6 text-white">
                      <div className="inline-block px-3 py-1 bg-red-600 rounded text-xs font-bold tracking-widest mb-2">
                        EST. {company.since}
                      </div>
                      <h3 className="text-2xl font-black leading-tight">{company.shortName}</h3>
                    </div>
                  </div>

                  {/* Content Body */}
                  <div className="p-8 flex flex-col flex-grow relative">
                    <div className="absolute top-0 right-8 -translate-y-1/2 w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-red-600 shadow-lg border border-slate-100 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                      {company.icon}
                    </div>

                    <h4 className="text-xl font-bold text-slate-900 mb-4 pr-12 group-hover:text-red-600 transition-colors">
                      {company.name}
                    </h4>
                    <p className="text-slate-600 font-medium mb-8 flex-grow">
                      {company.desc}
                    </p>

                    <div className="flex items-center text-slate-900 font-bold uppercase tracking-wide text-sm mt-auto group-hover:text-red-600 transition-colors">
                      View Products
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>

                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* --- R&D AND FACILITIES (Extracted directly from Pamphlet text) --- */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative group">
              <div
                className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-[12px] border-slate-50 h-[500px] lg:h-[700px]"
                style={getParallaxStyle(0.5)}
              >
                <Image
                  src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070&auto=format&fit=crop"
                  alt="R&D Laboratory"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div
                className="absolute -bottom-8 -right-8 bg-red-600 p-8 rounded-3xl shadow-2xl z-20 hidden md:block"
                style={getParallaxStyle(-0.3)}
              >
                <Microscope className="w-12 h-12 text-white mb-4" />
                <p className="text-3xl font-black text-white">PhD-Led</p>
                <p className="text-red-100 font-bold uppercase tracking-widest text-sm">Research & Dev</p>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-8">
              <div className="inline-block px-5 py-2 bg-slate-100 rounded-full">
                <span className="text-sm font-bold text-slate-700 tracking-wide uppercase">Infrastructure & Innovation</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
                State-of-the-Art <br />
                <span className="text-red-600">Facilities & R&D</span>
              </h2>

              <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">
                <p>
                  A company is not made of bricks and mortar alone; its greatest assets are its personnel and facilities. Our polymerization plants are constructed entirely of stainless steel, ensuring zero contamination during reactions.
                </p>
                <p>
                  Our entire R&D setup is headed by a qualified PhD, meaning not only the practical but the theoretical grounds and reaction kinetics are taken into account for bulk production handling. We operate multiple scale-up plants and machine trials conducted on clients' premises before finalizing formulations.
                </p>
                <p>
                  Safety and quality are paramount. Our whole system runs on <strong>RO water</strong>—mandatory in precise chemical processes. Digital metering for flows, extreme heat chillers, and backup generators guarantee uninterrupted, premium-grade production.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                {[
                  "Stainless Steel Reactors",
                  "Digital Flow Metering",
                  "RO Water Systems",
                  "Reaction Kinetic Modeling"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <ShieldCheck className="w-6 h-6 text-red-600 shrink-0" />
                    <span className="font-bold text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- GLOBAL PRESENCE & COMPLIANCE --- */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 space-y-8">
              <h2 className="text-4xl lg:text-5xl font-black leading-tight">
                Global Standards, <br /> Local Manufacturing.
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                Whether it's complying with stringent European textile standards or leveraging strategic trade routes, our group is built for international excellence.
              </p>
              <Link
                href="/wds"
                className="inline-flex items-center space-x-2 text-red-400 font-bold hover:text-red-300 transition-colors"
              >
                <span>Learn about our Export Hubs</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                <Award className="w-12 h-12 text-red-500 mb-6" />
                <h3 className="text-2xl font-black mb-3">International Compliance</h3>
                <p className="text-slate-400">
                  Our textile polymers division (TCI) produces materials fully compliant with global certifications including <strong>IKEA, Oekotex, and REACH</strong>.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                <Globe2 className="w-12 h-12 text-red-500 mb-6" />
                <h3 className="text-2xl font-black mb-3">Strategic Proximity</h3>
                <p className="text-slate-400">
                  WDS is strategically located in KPK (Gadoon Amazai) to align with CPEC routes, positioning us as an ideal hub for joint ventures with Chinese manufacturers.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}