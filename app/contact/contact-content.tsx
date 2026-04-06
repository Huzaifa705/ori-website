"use client";
import { useState, useEffect, FormEvent, ChangeEvent } from "react";
import { MapPin, Phone, Mail, Clock, Users, Navigation } from "lucide-react";

export default function ContactContent() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", company: "", message: "", industry: "" });
  const [status, setStatus] = useState<{ type: "idle" | "loading" | "success" | "error"; message: string; }>({ type: "idle", message: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Sending your message..." });
    try {
      // Simulate API call
      setTimeout(() => {
        setStatus({ type: "success", message: "✅ Thank you! We will contact you within 24 hours." });
        setFormData({ name: "", email: "", phone: "", company: "", message: "", industry: "" });
        setTimeout(() => setStatus({ type: "idle", message: "" }), 5000);
      }, 1000);
    } catch (error) {
      setStatus({ type: "error", message: "Failed to send message. Please try again." });
    }
  };

  const departments = [
    {
      company: "Oriental Chemical Industries",
      role: "Director",
      name: "Bakhtiar Ali Khan",
      email: "oci_chem@hotmail.com",
      phone: "+92-334-1970228 / +92-300-2584609"
    },
    {
      company: "Textile Chemical Industries",
      role: "Director",
      name: "Daniyal Khan Yousufzai",
      email: "tci_chem@yahoo.com",
      phone: "+92-330-8173754"
    },
    {
      company: "W.D.S. Synthetic Polymer",
      role: "Directors",
      name: "Wania Khan, Daniyal Khan, Sufiyan Khan",
      email: "wds.chemical@gmail.com",
      phone: "0938-270077"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-40 pb-20 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6 lg:px-16 text-center max-w-4xl">
          <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-tight mb-6">
            Get in <span className="text-red-600">Touch</span>
          </h1>
          <p className="text-xl text-slate-600 font-medium leading-relaxed">
            Reach out to our specialized directors or visit our manufacturing facilities in Karachi and KPK.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-[2rem] shadow-xl border border-slate-100 p-8 lg:p-12">
                <h2 className="text-3xl font-black text-slate-900 mb-8">Send Us A Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {status.type !== "idle" && (
                    <div className={`p-4 rounded-xl font-bold text-sm ${status.type === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>
                      {status.message}
                    </div>
                  )}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Full Name *</label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none font-medium" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Email Address *</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none font-medium" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Phone *</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none font-medium" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Company</label>
                      <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none font-medium" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Your Message *</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none font-medium resize-none"></textarea>
                  </div>
                  <button type="submit" disabled={status.type === "loading"} className="w-full px-8 py-4 bg-red-600 text-white font-bold text-lg rounded-xl hover:bg-red-700 transition-colors">
                    {status.type === "loading" ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>

            {/* Departments & Locations */}
            <div className="lg:col-span-5 space-y-8">
              
              <div className="bg-slate-900 rounded-[2rem] p-8 text-white">
                <h3 className="text-xl font-black mb-6">Group Directors</h3>
                <div className="space-y-6">
                  {departments.map((dept, i) => (
                    <div key={i} className="border-b border-slate-700 pb-4 last:border-0 last:pb-0">
                      <div className="text-red-400 font-bold text-xs tracking-widest uppercase mb-1">{dept.company}</div>
                      <div className="font-bold text-lg">{dept.name}</div>
                      <div className="text-slate-400 text-sm mb-2">{dept.role}</div>
                      <div className="flex flex-col gap-1 text-sm font-medium">
                        <a href={`mailto:${dept.email}`} className="hover:text-red-400">{dept.email}</a>
                        <a href={`tel:${dept.phone}`} className="hover:text-red-400">{dept.phone}</a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-50 rounded-[2rem] p-8 border border-slate-200">
                <h3 className="text-xl font-black text-slate-900 mb-6">Manufacturing Facilities</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <MapPin className="w-6 h-6 text-red-600 shrink-0" />
                    <div>
                      <div className="font-bold text-slate-900">OCI & TCI Base</div>
                      <div className="text-sm text-slate-600 mt-1">Plot # 4/44 & 4/11, Sector 21<br/>Korangi Industrial Area, Karachi</div>
                      <div className="text-sm font-bold text-slate-900 mt-1">021-35012024 / 25</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <MapPin className="w-6 h-6 text-red-600 shrink-0" />
                    <div>
                      <div className="font-bold text-slate-900">WDS Base</div>
                      <div className="text-sm text-slate-600 mt-1">Plot # L-20, Road# 1<br/>Industrial Estate, Gadoon Amazai (K.P.K)</div>
                      <div className="text-sm font-bold text-slate-900 mt-1">0938-270077</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}