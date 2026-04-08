"use client";

import { useState, useEffect, FormEvent, ChangeEvent } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Navigation,
  Send,
  Building2,
  UserCircle,
  AlertCircle,
  CheckCircle2
} from "lucide-react";
import Image from "next/image";

// --- TYPE-SAFE VARIANTS ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function ContactContent() {
  const [isMounted, setIsMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    industry: "",
  });
  const [status, setStatus] = useState<{
    type: "idle" | "loading" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Transmitting inquiry..." });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        // Graceful handling for missing API keys or server errors
        throw new Error(result.error || "Communication error. Please try calling directly.");
      }

      setStatus({
        type: "success",
        message: "✅ Inquiry received. Our specialized directors will respond within 24 hours.",
      });
      setFormData({ name: "", email: "", phone: "", company: "", message: "", industry: "" });
    } catch (err: any) {
      setStatus({ type: "error", message: err.message });
    }
  };

  const directorContacts = [
    {
      company: "Oriental Chemical Industries (OCI)",
      name: "Bakhtiar Ali Khan",
      email: "oci_chem@hotmail.com",
      phone: "+92-334-1970228 / +92-300-2584609",
      role: "Director"
    },
    {
      company: "Textile Chemical Industries (TCI)",
      name: "Daniyal Khan Yousufzai",
      email: "tci_chem@yahoo.com",
      phone: "+92-330-8173754",
      role: "Director"
    },
    {
      company: "W.D.S. Synthetic Polymer",
      name: "Wania / Daniyal / Sufiyan Khan",
      email: "wds.chemical@gmail.com",
      phone: "0938-270077",
      role: "Board of Directors"
    }
  ];

  if (!isMounted) return null;

  return (
    <AnimatePresence>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-white pt-32 pb-20"
      >
        <div className="container mx-auto px-5 sm:px-10 lg:px-16 max-w-7xl">

          {/* --- SECTION HEADER --- */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="mb-16 md:mb-24"
          >
            <motion.div variants={itemVariants} className="inline-block px-3 py-1 bg-red-100 text-red-600 rounded text-[10px] font-black uppercase tracking-widest mb-4">
              Connect With Us
            </motion.div>
            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-tight uppercase tracking-tighter">
              Strategic <br /> <span className="text-red-600">Consultation</span>
            </motion.h1>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">

            {/* --- FORM SECTION (7 Cols) --- */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="lg:col-span-7"
            >
              <div className="bg-slate-50 rounded-[2rem] p-8 md:p-12 border border-slate-100 shadow-xl shadow-slate-200/50">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[11px] font-black text-slate-500 uppercase tracking-wider">Full Name *</label>
                      <input name="name" value={formData.name} onChange={handleChange} required className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 focus:ring-2 focus:ring-red-600 outline-none transition-all font-medium text-slate-900" placeholder="e.g. Bakhtiar Ali" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] font-black text-slate-500 uppercase tracking-wider">Corporate Email *</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 focus:ring-2 focus:ring-red-600 outline-none transition-all font-medium text-slate-900" placeholder="name@company.com" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[11px] font-black text-slate-500 uppercase tracking-wider">Phone / WhatsApp</label>
                      <input name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 focus:ring-2 focus:ring-red-600 outline-none transition-all font-medium text-slate-900" placeholder="+92 ..." />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] font-black text-slate-500 uppercase tracking-wider">Division of Interest</label>
                      <select name="industry" value={formData.industry} onChange={handleChange} className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 focus:ring-2 focus:ring-red-600 outline-none transition-all font-bold text-slate-900 appearance-none">
                        <option value="">Select Division</option>
                        <option value="OCI">OCI (Adhesives/Emulsions)</option>
                        <option value="TCI">TCI (Textile Chemicals)</option>
                        <option value="WDS">WDS (Synthetic Polymers)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-black text-slate-500 uppercase tracking-wider">Technical Requirements *</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 focus:ring-2 focus:ring-red-600 outline-none transition-all font-medium text-slate-900 resize-none" placeholder="Detail your chemical specifications or trial requests..." />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={status.type === "loading"}
                    className="w-full bg-red-600 text-white font-black uppercase tracking-widest text-xs py-5 rounded-xl shadow-xl shadow-red-600/20 flex items-center justify-center gap-3 disabled:opacity-50"
                  >
                    {status.type === "loading" ? "Processing..." : <>Send Message <Send className="w-4 h-4" /></>}
                  </motion.button>

                  {status.message && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex items-center gap-3 p-4 rounded-xl text-xs font-bold ${status.type === 'error' ? 'bg-red-50 text-red-600 border border-red-100' : 'bg-green-50 text-green-700 border border-green-100'}`}
                    >
                      {status.type === 'error' ? <AlertCircle className="w-4 h-4" /> : <CheckCircle2 className="w-4 h-4" />}
                      {status.message}
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>

            {/* --- CONTACT INFO SECTION (5 Cols) --- */}
            <div className="lg:col-span-5 space-y-10">

              {/* Specialized Directors */}
              <div className="space-y-6">
                <h3 className="text-sm font-black text-slate-500 uppercase tracking-[0.3em] mb-6">Group Directors</h3>
                {directorContacts.map((contact, idx) => (
                  <motion.div key={idx} variants={itemVariants} className="group flex gap-5 p-6 bg-white border border-slate-200 rounded-2xl hover:border-red-200 transition-colors">
                    <div className="shrink-0 w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                      <UserCircle className="w-6 h-6" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[12px] font-black text-red-600 uppercase tracking-widest mb-1">{contact.company}</p>
                      <h4 className="text-base font-black text-slate-900">{contact.name}</h4>
                      <p className="text-[10px] font-bold text-slate-400 uppercase mb-3">{contact.role}</p>
                      <div className="flex flex-col gap-1 text-sm font-bold text-slate-600">
                        <a href={`mailto:${contact.email}`} className="hover:text-red-600 truncate">{contact.email}</a>
                        <a href={`tel:${contact.phone}`} className="hover:text-red-600">{contact.phone}</a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Manufacturing Facilities */}
              <div className="space-y-6">
                <h3 className="text-sm font-black text-slate-500 uppercase tracking-[0.3em] mb-6">Regional Facilities</h3>
                <div className="grid gap-4">
                  <div className="p-6 bg-slate-950 rounded-2xl text-white">
                    <MapPin className="w-6 h-6 text-red-600 mb-4" />
                    <h4 className="text-sm font-black uppercase tracking-wider mb-2">South Division (OCI & TCI)</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Plot # 4/44 & 4/11, Sector 21<br />
                      Korangi Industrial Area, Karachi, Pakistan
                    </p>
                  </div>
                  <div className="p-6 bg-slate-950 rounded-2xl text-white">
                    <MapPin className="w-6 h-6 text-red-600 mb-4" />
                    <h4 className="text-sm font-black uppercase tracking-wider mb-2">North Division (WDS)</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Plot # L-20, Road# 1, Industrial Estate<br />
                      Gadoon Amazai (K.P.K), Pakistan
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </motion.main>
    </AnimatePresence>
  );
}