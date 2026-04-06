"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FlaskConical, Beaker, Factory, ArrowRight, ShieldCheck, Globe, TestTube } from "lucide-react";

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
      desc: "Specializing in PVAc, Adhesive Glues & Acrylic Emulsions.",
      icon: <FlaskConical className="w-10 h-10" />,
      href: "/oci",
      since: "1996"
    },
    {
      id: "tci",
      name: "Textile Chemical Industries",
      shortName: "TCI",
      desc: "Auxiliary Chemicals for Textile, Paint, Leather, Coating, Printing & Dyeing.",
      icon: <Beaker className="w-10 h-10" />,
      href: "/tci",
      since: "1961"
    },
    {
      id: "wds",
      name: "W.D.S. Synthetic Polymer",
      shortName: "WDS",
      desc: "House of Speciality Chemicals and advanced polymer manufacturing.",
      icon: <Factory className="w-10 h-10" />,
      href: "/wds",
      since: "2020"
    }
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-red-100 selection:text-red-900">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-36 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-red-200 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-rose-100 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center space-x-3 px-4 py-2 bg-white rounded-full border border-red-100 shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
              </span>
              <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">
                Established 1996
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black leading-[1.05] text-slate-900 tracking-tight">
              GROUP OF <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-500">
                COMPANIES
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium max-w-2xl mx-auto">
              Your Trusted Partner For Speciality Technology And Process. Delivering excellence across adhesives, textile auxiliary chemicals, and synthetic polymers.
            </p>
          </div>
        </div>
      </section>

      {/* --- COMPANIES GRID --- */}
      <section className="py-24 relative z-20 -mt-12">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-3 gap-8">
            {companies.map((company) => (
              <Link key={company.id} href={company.href} className="group block">
                <div className="bg-white rounded-[2rem] p-10 border border-slate-200 shadow-xl shadow-slate-200/50 hover:border-red-500 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500 transform hover:-translate-y-2 h-full flex flex-col relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-6 opacity-5 text-8xl font-black text-slate-900 group-hover:text-red-600 transition-colors pointer-events-none">
                    {company.shortName}
                  </div>
                  
                  <div className="w-20 h-20 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 mb-8 group-hover:scale-110 transition-transform duration-500">
                    {company.icon}
                  </div>
                  
                  <div className="inline-block px-3 py-1 bg-slate-100 rounded text-xs font-bold text-slate-500 mb-4 w-fit">
                    SINCE {company.since}
                  </div>
                  
                  <h2 className="text-2xl font-black text-slate-900 mb-4 pr-8 leading-tight group-hover:text-red-600 transition-colors">
                    {company.name}
                  </h2>
                  
                  <p className="text-slate-600 font-medium mb-8 flex-grow">
                    {company.desc}
                  </p>
                  
                  <div className="flex items-center text-red-600 font-bold uppercase tracking-wide text-sm mt-auto">
                    Explore Division
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* --- CORE VALUES --- */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: <TestTube />, title: "R&D Excellence", desc: "Dedicated in-house laboratories ensuring continuous product innovation and quality control." },
              { icon: <ShieldCheck />, title: "Quality Assured", desc: "Strict adherence to international standards across all our manufacturing facilities." },
              { icon: <Globe />, title: "Global Network", desc: "Strategic partnerships and joint ventures enhancing our production and distribution capabilities." }
            ].map((feature, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 mx-auto bg-red-600/10 text-red-500 rounded-2xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-black text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 font-medium">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}