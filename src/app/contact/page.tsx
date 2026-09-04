"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Zap } from "lucide-react";

const EMERALD = "#2D8A6B";
const CHARCOAL = "#111111";

const IMG = {
  heroBg: "https://images.unsplash.com/photo-1645400379459-f6fd3d963fd4?w=1920&h=900&fit=crop&auto=format",
};

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", fleet: "", service: "", message: "" });
  const [sent, setSent] = useState(false);
  const [tab, setTab] = useState<"general" | "emergency">("general");

  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, []);

const submit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) setSent(true);
    else alert("Something went wrong. Please try again.");
  } catch {
    alert("Something went wrong. Please try again.");
  }
};
  const field = (key: string) => form[key as keyof typeof form];
  const set = (key: string, val: string) => setForm(f => ({ ...f, [key]: val }));

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden flex flex-col justify-end" style={{ background: CHARCOAL, minHeight: 420 }}>
        <div className="absolute inset-0">
          <img src={IMG.heroBg} alt="" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(110deg, rgba(17,17,17,0.97) 45%, rgba(17,17,17,0.55))" }} />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 opacity-[0.07]" style={{ background: `radial-gradient(ellipse at 0% 100%, ${EMERALD}, transparent 65%)` }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-36 pb-16 w-full">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-3 mb-5">
              <motion.div className="h-px" style={{ background: EMERALD }} initial={{ width: 0 }} animate={{ width: 40 }} transition={{ duration: 0.8, delay: 0.3 }} />
              <span className="text-xs font-semibold tracking-[0.22em] uppercase" style={{ color: EMERALD, fontFamily: "Montserrat, sans-serif" }}>Contact IFS</span>
            </div>
            <h1 className="text-white mb-4" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(2.4rem, 5vw, 4rem)", fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1.05, maxWidth: 680 }}>
              Let&apos;s Protect
              <br /><span style={{ color: EMERALD }}>Your Inventory.</span>
            </h1>
            <p className="text-white/55 max-w-lg" style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)", lineHeight: 1.75 }}>
              Enterprise response within 2 business hours. For active hail events, call our emergency line for immediate deployment coordination.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Emergency callout bar */}
      <div className="py-4 px-6" style={{ background: EMERALD }}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Zap size={16} className="text-white flex-shrink-0" />
            <span className="text-white text-sm font-semibold" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Active Hail Event? Emergency deployment line available 24/7.
            </span>
          </div>
          <a href="tel:+18005559111" className="flex-shrink-0 inline-flex items-center gap-2 text-white font-bold text-sm hover:underline" style={{ fontFamily: "Montserrat, sans-serif" }}>
            <Phone size={14} /> Call 1-800-IFS-911 Now
          </a>
        </div>
      </div>

      {/* Main content */}
      <section className="py-10 lg:py-15 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* Left: info */}
            <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px" style={{ background: EMERALD }} />
                <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: EMERALD, fontFamily: "Montserrat, sans-serif" }}>Get In Touch</span>
              </div>
              <h2 className="mb-5" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, color: CHARCOAL, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
                One Call Starts<br /><span style={{ color: EMERALD }}>Everything.</span>
              </h2>
              <p className="leading-relaxed mb-8" style={{ color: "#666", fontFamily: "Inter, sans-serif", lineHeight: 1.8 }}>
                Our enterprise team will assess your situation, scope a program, and get you a firm estimate — all within 24 hours. For catastrophic hail events requiring immediate response, our emergency deployment line operates around the clock.
              </p>

              {/* Contact cards */}
              <div className="space-y-4 mb-10">
                {[
                  { icon: Phone, label: "Main Enterprise Line", val: "239.919.7963", sub: "Mon–Fri 7am–8pm CT" },
                  { icon: Mail, label: "Enterprise Inquiries", val: "info@ifshail.com", sub: "Response within 2 business hours" },
                  { icon: MapPin, label: "Headquarters", val: "Dallas, TX", sub: "With offices in Denver & Atlanta" },
                  { icon: Clock, label: "Response Guarantee", val: "< 2 Business Hours", sub: "Enterprise estimate response time" },
                ].map(({ icon: Icon, label, val, sub }) => (
                  <div key={label} className="flex items-start gap-4 p-4 border rounded-sm hover:bg-gray-50 transition-colors" style={{ borderColor: "rgba(0,0,0,0.07)" }}>
                    <div className="w-10 h-10 flex items-center justify-center rounded-sm flex-shrink-0" style={{ background: "rgba(45,138,107,0.09)" }}>
                      <Icon size={16} style={{ color: EMERALD }} />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-gray-400 mb-0.5" style={{ fontFamily: "Inter, sans-serif" }}>{label}</div>
                      <div className="text-sm font-bold" style={{ color: CHARCOAL, fontFamily: "Montserrat, sans-serif" }}>{val}</div>
                      <div className="text-xs" style={{ color: "#aaa", fontFamily: "Inter, sans-serif" }}>{sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: form */}
            <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.65, delay: 0.14, ease: [0.25, 0.46, 0.45, 0.94] }}>
              {/* Tab switcher */}
              <div className="flex border-b mb-8" style={{ borderColor: "rgba(0,0,0,0.1)" }}>
                {([["general", "General Inquiry"], ["emergency", "Emergency Response"]] as const).map(([id, label]) => (
                  <button key={id} onClick={() => { setTab(id); setSent(false); }}
                    className="px-6 py-3.5 text-sm font-semibold border-b-2 transition-all"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      color: tab === id ? CHARCOAL : "#aaa",
                      borderBottomColor: tab === id ? EMERALD : "transparent",
                    }}>
                    {label}
                  </button>
                ))}
              </div>

              <div className="bg-white border rounded-sm p-6" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
                {sent ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mb-5" style={{ background: "rgba(45,138,107,0.1)" }}>
                      <CheckCircle size={32} style={{ color: EMERALD }} />
                    </div>
                    <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "Montserrat, sans-serif", color: CHARCOAL }}>
                      {tab === "emergency" ? "Emergency Request Received" : "Request Received"}
                    </h3>
                    <p className="text-sm text-gray-500 mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
                      {tab === "emergency"
                        ? "Our emergency team has been alerted. Expect a call within 30 minutes."
                        : "Your enterprise team will be in touch within 2 business hours."}
                    </p>
                    <button onClick={() => setSent(false)} className="text-sm font-semibold" style={{ color: EMERALD, fontFamily: "Inter, sans-serif" }}>
                      Submit another request →
                    </button>
                  </div>
                ) : (
                  <>
                    {tab === "emergency" && (
                      <div className="flex items-start gap-3 p-4 mb-6 rounded-sm border" style={{ background: "rgba(220,38,38,0.04)", borderColor: "rgba(220,38,38,0.15)" }}>
                        <Zap size={16} className="flex-shrink-0 mt-0.5" style={{ color: "#dc2626" }} />
                        <p className="text-xs leading-relaxed" style={{ color: "#dc2626", fontFamily: "Inter, sans-serif" }}>
                          <strong>Emergency line:</strong> For faster response during an active hail event, call <strong>1-800-IFS-911</strong> directly. This form will receive a response within 30 minutes.
                        </p>
                      </div>
                    )}
                    <h3 className="text-base font-bold mb-6" style={{ fontFamily: "Montserrat, sans-serif", color: CHARCOAL }}>
                      {tab === "emergency" ? "Emergency Hail Response Request" : "Request an Enterprise Estimate"}
                    </h3>
                    <form onSubmit={submit} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        {[{ k: "name", l: "Full Name", p: "Jane Smith" }, { k: "company", l: "Company", p: "Acme Fleet Corp." }].map(f => (
                          <div key={f.k}>
                            <label className="block text-xs font-semibold mb-1.5" style={{ color: "#555", fontFamily: "Inter, sans-serif" }}>{f.l}</label>
                            <input type="text" placeholder={f.p} value={field(f.k)} onChange={e => set(f.k, e.target.value)} required
                              className="w-full px-3.5 py-2.5 text-sm rounded-sm border outline-none transition-all"
                              style={{ borderColor: "rgba(0,0,0,0.12)", fontFamily: "Inter, sans-serif" }} />
                          </div>
                        ))}
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold mb-1.5" style={{ color: "#555", fontFamily: "Inter, sans-serif" }}>Email</label>
                          <input type="email" placeholder="jane@company.com" value={field("email")} onChange={e => set("email", e.target.value)} required
                            className="w-full px-3.5 py-2.5 text-sm rounded-sm border outline-none transition-all" style={{ borderColor: "rgba(0,0,0,0.12)", fontFamily: "Inter, sans-serif" }} />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold mb-1.5" style={{ color: "#555", fontFamily: "Inter, sans-serif" }}>Phone</label>
                          <input type="tel" placeholder="(555) 000-0000" value={field("phone")} onChange={e => set("phone", e.target.value)}
                            className="w-full px-3.5 py-2.5 text-sm rounded-sm border outline-none transition-all" style={{ borderColor: "rgba(0,0,0,0.12)", fontFamily: "Inter, sans-serif" }} />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold mb-1.5" style={{ color: "#555", fontFamily: "Inter, sans-serif" }}>Fleet / Unit Count</label>
                          <select value={field("fleet")} onChange={e => set("fleet", e.target.value)} className="w-full px-3.5 py-2.5 text-sm rounded-sm border outline-none bg-white" style={{ borderColor: "rgba(0,0,0,0.12)", fontFamily: "Inter, sans-serif", color: field("fleet") ? CHARCOAL : "#aaa" }}>
                            <option value="" disabled>Select count</option>
                            {["Under 50", "50–250", "250–1,000", "1,000–5,000", "5,000+"].map(o => <option key={o}>{o}</option>)}
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-semibold mb-1.5" style={{ color: "#555", fontFamily: "Inter, sans-serif" }}>Service Needed</label>
                          <select value={field("service")} onChange={e => set("service", e.target.value)} className="w-full px-3.5 py-2.5 text-sm rounded-sm border outline-none bg-white" style={{ borderColor: "rgba(0,0,0,0.12)", fontFamily: "Inter, sans-serif", color: field("service") ? CHARCOAL : "#aaa" }}>
                            <option value="" disabled>Select service</option>
                            {["Hail Event Response", "Fleet Program", "PDR", "Dealership Program", "Insurance Coordination"].map(o => <option key={o}>{o}</option>)}
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold mb-1.5" style={{ color: "#555", fontFamily: "Inter, sans-serif" }}>
                          {tab === "emergency" ? "Describe the Event (location, unit count, timeline)" : "Tell Us About Your Situation"}
                        </label>
                        <textarea rows={4} placeholder={tab === "emergency" ? "Location of event, number of affected units, urgency level..." : "Describe your fleet, repair needs, or hail event details..."}
                          value={field("message")} onChange={e => set("message", e.target.value)}
                          className="w-full px-3.5 py-2.5 text-sm rounded-sm border outline-none resize-none transition-all" style={{ borderColor: "rgba(0,0,0,0.12)", fontFamily: "Inter, sans-serif" }} />
                      </div>
                      <button type="submit" className="w-full flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-white rounded-sm transition-all hover:brightness-110 active:scale-[0.99]"
                        style={{ background: tab === "emergency" ? "#dc2626" : EMERALD, fontFamily: "Montserrat, sans-serif" }}>
                        {tab === "emergency" ? "Send Emergency Request" : "Submit Enterprise Request"} <Send size={14} />
                      </button>
                      <p className="text-center text-xs" style={{ color: "#bbb", fontFamily: "Inter, sans-serif" }}>
                        {tab === "emergency" ? "Emergency response · Call 1-800-IFS-911 for fastest reply" : "Response within 2 business hours · Emergency line 24/7"}
                      </p>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
