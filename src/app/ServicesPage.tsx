import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  Shield, Truck, Wrench, Building2, ArrowRight, CheckCircle,
  Phone, ChevronDown, Zap, Clock, Award, Users, FileText, Star,
} from "lucide-react";

const EMERALD = "#2D8A6B";
const CHARCOAL = "#111111";

// ─── Images ──────────────────────────────────────────────────────────────────
const IMG = {
  heroBg: "https://images.unsplash.com/photo-1645400379459-f6fd3d963fd4?w=1920&h=900&fit=crop&auto=format",
  hailDamage: "https://images.unsplash.com/photo-1613042964418-89c800809319?w=1000&h=700&fit=crop&auto=format",
  hailCar: "https://images.unsplash.com/photo-1777626752951-00b24bc03297?w=900&h=600&fit=crop&auto=format",
  hailRain: "https://images.unsplash.com/photo-1723972404837-93a2bfcc0b0f?w=700&h=900&fit=crop&auto=format",
  techWork: "https://images.unsplash.com/photo-1771340012319-0b4fca008b54?w=900&h=700&fit=crop&auto=format",
  techDetail: "https://images.unsplash.com/photo-1770656505784-3fad3cd41fcf?w=800&h=600&fit=crop&auto=format",
  techClose: "https://images.unsplash.com/photo-1769021955466-ed4372792114?w=800&h=600&fit=crop&auto=format",
  fleetLot: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=1200&h=700&fit=crop&auto=format",
  fleetAerial: "https://images.unsplash.com/photo-1543465077-db45d34b88a5?w=800&h=800&fit=crop&auto=format",
  dealership: "https://images.unsplash.com/photo-1632405862117-236585cfb757?w=1000&h=700&fit=crop&auto=format",
  facility: "https://images.unsplash.com/photo-1771530789155-b1f03fbf82b5?w=1200&h=700&fit=crop&auto=format",
  glue: "https://images.unsplash.com/photo-1676018366904-c083ed678e60?w=800&h=600&fit=crop&auto=format",
};

// ─── Shared utils ─────────────────────────────────────────────────────────────
function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] }} className={className}>
      {children}
    </motion.div>
  );
}

function Eyebrow({ label, light = false }: { label: string; light?: boolean }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-8 h-px" style={{ background: EMERALD }} />
      <span className="text-xs font-semibold tracking-[0.2em] uppercase"
        style={{ color: EMERALD, fontFamily: "Montserrat, sans-serif" }}>{label}</span>
    </div>
  );
}

function Tag({ label }: { label: string }) {
  return (
    <span className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-sm"
      style={{ color: EMERALD, background: "rgba(45,138,107,0.09)", fontFamily: "Inter, sans-serif" }}>
      {label}
    </span>
  );
}

// ─── Service tab data ─────────────────────────────────────────────────────────
const SERVICE_TABS = [
  { id: "hail",       label: "Hail Event Response",  icon: Shield    },
  { id: "fleet",      label: "Fleet & Inventory",    icon: Truck     },
  { id: "pdr",        label: "Paintless Dent Repair", icon: Wrench   },
  { id: "dealership", label: "Dealership Programs",  icon: Building2 },
];

// ─── HERO ─────────────────────────────────────────────────────────────────────
function ServicesHero({ activeTab, onTabChange }: { activeTab: string; onTabChange: (id: string) => void }) {
  return (
    <section className="relative overflow-hidden flex flex-col justify-end" style={{ background: CHARCOAL, minHeight: 520 }}>
      <div className="absolute inset-0">
        <img src={IMG.heroBg} alt="" className="w-full h-full object-cover opacity-20"
          style={{ filter: "grayscale(0.2)" }} />
        <div className="absolute inset-0" style={{
          background: "linear-gradient(110deg, rgba(17,17,17,0.97) 45%, rgba(17,17,17,0.6) 100%)"
        }} />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 opacity-[0.07]"
          style={{ background: `radial-gradient(ellipse at 0% 100%, ${EMERALD}, transparent 65%)` }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-40 pb-0 w-full">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="flex items-center gap-3 mb-5">
            <motion.div className="h-px" style={{ background: EMERALD }}
              initial={{ width: 0 }} animate={{ width: 40 }} transition={{ duration: 0.8, delay: 0.3 }} />
            <span className="text-xs font-semibold tracking-[0.22em] uppercase"
              style={{ color: EMERALD, fontFamily: "Montserrat, sans-serif" }}>
              IFS Enterprise Services
            </span>
          </div>
          <h1 className="text-white mb-4" style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "clamp(2.4rem, 5vw, 4rem)",
            fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1.05, maxWidth: 700
          }}>
            Precision Repair.
            <br /><span style={{ color: EMERALD }}>Enterprise Scale.</span>
          </h1>
          <p className="text-white/55 mb-10 max-w-xl" style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)", lineHeight: 1.75
          }}>
            From single-event hail response to full fleet management programs — every IFS service is
            engineered for the organizations that can&apos;t afford downtime.
          </p>
        </motion.div>

        {/* Service tab strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex overflow-x-auto gap-0 border-t"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          {SERVICE_TABS.map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className="flex items-center gap-2.5 px-7 py-5 text-sm font-semibold whitespace-nowrap transition-all duration-200 border-b-2 relative"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  color: active ? "#fff" : "rgba(255,255,255,0.45)",
                  borderBottomColor: active ? EMERALD : "transparent",
                  background: active ? "rgba(45,138,107,0.08)" : "transparent",
                }}
              >
                <Icon size={15} style={{ color: active ? EMERALD : "rgba(255,255,255,0.35)" }} />
                {tab.label}
              </button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

// ─── SERVICE 1: HAIL EVENT RESPONSE ──────────────────────────────────────────
function HailSection({ onGetEstimate }: { onGetEstimate: () => void }) {
  const steps = [
    { n: "01", title: "Emergency Deployment", body: "Rapid-response teams mobilize within hours of a confirmed hail event — nationwide, 365 days a year." },
    { n: "02", title: "On-Site Damage Assessment", body: "Certified assessors catalog every affected unit with photo documentation and a detailed scope report." },
    { n: "03", title: "Insurance Coordination", body: "We interface directly with your insurer and adjuster to ensure accurate, full-value claims with zero friction." },
    { n: "04", title: "Precision Repair Execution", body: "Master PDR technicians restore every vehicle to factory-original condition using OEM-grade techniques." },
    { n: "05", title: "QC Inspection & Handoff", body: "Every vehicle passes our 40-point quality control check before it leaves our hands." },
  ];

  const highlights = [
    "48-state rapid deployment network",
    "Multi-thousand unit capacity per event",
    "Dedicated on-site project manager",
    "Real-time inventory status dashboard",
    "Full insurance claim coordination",
    "Same-week mobilization guaranteed",
  ];

  return (
    <div>
      {/* Intro split */}
      <section className="py-10 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <Eyebrow label="Hail Event Response" />
              <h2 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(2rem, 3.2vw, 2.6rem)", fontWeight: 800, color: CHARCOAL, letterSpacing: "-0.02em", lineHeight: 1.1 }} className="mb-5">
                When the Storm Passes,
                <br /><span style={{ color: EMERALD }}>We&apos;re Already There.</span>
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: "#666", fontFamily: "Inter, sans-serif", lineHeight: 1.8 }}>
                Catastrophic hail events can disable thousands of vehicles overnight. IFS operates the industry&apos;s
                most capable rapid-response infrastructure — capable of mobilizing full crews and equipment to any
                location in the continental U.S. within hours of an event.
              </p>
              <p className="leading-relaxed mb-10" style={{ color: "#666", fontFamily: "Inter, sans-serif", lineHeight: 1.8 }}>
                Our clients — auto manufacturers, rental fleets, and franchise dealer groups — trust IFS precisely
                because we&apos;ve handled events ranging from 200 to 12,000+ units without missing a single SLA.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-10">
                {highlights.map((h) => (
                  <div key={h} className="flex items-start gap-2.5">
                    <CheckCircle size={14} className="flex-shrink-0 mt-0.5" style={{ color: EMERALD }} />
                    <span className="text-sm" style={{ color: "#555", fontFamily: "Inter, sans-serif" }}>{h}</span>
                  </div>
                ))}
              </div>
              <button onClick={onGetEstimate}
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white rounded-sm transition-all hover:brightness-110"
                style={{ background: EMERALD, fontFamily: "Montserrat, sans-serif" }}>
                Request Emergency Response <ArrowRight size={14} />
              </button>
            </FadeUp>

            {/* Image mosaic */}
            <FadeUp delay={0.14} className="grid grid-cols-2 gap-3">
              <div className="col-span-2 overflow-hidden rounded-sm bg-gray-100" style={{ height: 280 }}>
                <img src={IMG.hailDamage} alt="Vehicle fleet with hail damage awaiting IFS repair" className="w-full h-full object-cover" style={{ filter: "brightness(0.85)" }} />
              </div>
              <div className="overflow-hidden rounded-sm bg-gray-100" style={{ height: 180 }}>
                <img src={IMG.hailCar} alt="Hail dent damage on vehicle hood surface" className="w-full h-full object-cover" />
              </div>
              <div className="overflow-hidden rounded-sm bg-gray-100 relative" style={{ height: 180 }}>
                <img src={IMG.hailRain} alt="Hail storm impact on parked vehicle" className="w-full h-full object-cover object-center" />
                <div className="absolute inset-0 flex items-end p-4" style={{ background: "linear-gradient(to top, rgba(17,17,17,0.65), transparent)" }}>
                  <span className="text-white text-xs font-semibold tracking-wider" style={{ fontFamily: "Montserrat, sans-serif" }}>48-Hr Response Guarantee</span>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Process steps */}
      <section className="py-20" style={{ background: "#f7f8f9" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeUp className="text-center mb-14">
            <Eyebrow label="Our Process" />
            <h2 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 800, color: CHARCOAL, letterSpacing: "-0.02em" }}>
              From Event to Handoff — <span style={{ color: EMERALD }}>Zero Gaps.</span>
            </h2>
          </FadeUp>
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-px" style={{ background: "rgba(0,0,0,0.08)" }} />
            <div className="grid md:grid-cols-5 gap-6">
              {steps.map((s, i) => (
                <FadeUp key={s.n} delay={i * 0.08}>
                  <div className="relative flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 z-10 relative border-2 text-base font-black"
                      style={{ background: "#fff", borderColor: EMERALD, color: EMERALD, fontFamily: "Montserrat, sans-serif" }}>
                      {s.n}
                    </div>
                    <h4 className="text-sm font-bold mb-2" style={{ fontFamily: "Montserrat, sans-serif", color: CHARCOAL }}>{s.title}</h4>
                    <p className="text-xs leading-relaxed" style={{ color: "#888", fontFamily: "Inter, sans-serif" }}>{s.body}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dark band CTA */}
      <section className="py-16" style={{ background: CHARCOAL }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} size={13} fill={EMERALD} style={{ color: EMERALD }} />)}
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-xl" style={{ fontFamily: "Inter, sans-serif", fontStyle: "italic" }}>
              &ldquo;IFS mobilized a crew of 40 technicians to our 2,800-unit lot within 30 hours of the storm. Every vehicle was completed ahead of schedule. There is no other vendor in this space that operates at this level.&rdquo;
            </p>
            <p className="text-white/40 text-xs mt-3" style={{ fontFamily: "Inter, sans-serif" }}>— Regional Fleet Director, Major U.S. Rental Company</p>
          </div>
          <button onClick={onGetEstimate}
            className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 text-sm font-bold rounded-sm transition-all hover:brightness-110"
            style={{ background: EMERALD, color: "#fff", fontFamily: "Montserrat, sans-serif" }}>
            Get Hail Response Plan <ArrowRight size={14} />
          </button>
        </div>
      </section>
    </div>
  );
}

// ─── SERVICE 2: FLEET & INVENTORY ─────────────────────────────────────────────
function FleetSection({ onGetEstimate }: { onGetEstimate: () => void }) {
  const programs = [
    { icon: Clock, title: "Priority SLA Scheduling", body: "Guaranteed turnaround windows with contractual commitments. Your fleet moves — we ensure it." },
    { icon: Users, title: "Dedicated Account Manager", body: "One senior contact owns your account end-to-end. No ticket queues, no runaround." },
    { icon: FileText, title: "Custom Reporting Pipeline", body: "Real-time dashboards, per-VIN status updates, and executive summary reports in your format." },
    { icon: Award, title: "Volume-Based Pricing", body: "Structured agreements that scale with your fleet size. Better pricing, better service as you grow." },
    { icon: Shield, title: "Nationwide Network Access", body: "48-state deployment capacity means we can service your fleet wherever it operates." },
    { icon: Zap, title: "DMS Integration Support", body: "We work within your existing dealer management system to minimize operational disruption." },
  ];

  return (
    <div>
      {/* Hero split */}
      <section className="py-10 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <FadeUp className="relative order-2 lg:order-1">
              <div className="overflow-hidden rounded-sm bg-gray-100" style={{ height: 420 }}>
                <img src={IMG.fleetLot} alt="Large fleet vehicle lot managed by IFS" className="w-full h-full object-cover" style={{ filter: "brightness(0.88)" }} />
              </div>
              <div className="grid grid-cols-2 gap-3 mt-3">
                <div className="overflow-hidden rounded-sm bg-gray-100" style={{ height: 140 }}>
                  <img src={IMG.fleetAerial} alt="Aerial view of vehicle inventory lot" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col items-center justify-center rounded-sm text-center p-5" style={{ background: CHARCOAL }}>
                  <div className="text-3xl font-black leading-none mb-1" style={{ fontFamily: "Montserrat, sans-serif", color: EMERALD }}>500K+</div>
                  <div className="text-white/50 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>Fleet vehicles<br />restored to date</div>
                </div>
              </div>
            </FadeUp>

            {/* Text */}
            <FadeUp delay={0.1} className="order-1 lg:order-2">
              <Eyebrow label="Fleet & Inventory Repair" />
              <h2 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(2rem, 3.2vw, 2.6rem)", fontWeight: 800, color: CHARCOAL, letterSpacing: "-0.02em", lineHeight: 1.1 }} className="mb-5">
                Your Inventory is
                <br /><span style={{ color: EMERALD }}>Our Priority.</span>
              </h2>
              <p className="leading-relaxed mb-5" style={{ color: "#666", fontFamily: "Inter, sans-serif", lineHeight: 1.8 }}>
                For rental companies, manufacturers, and corporate fleets, idle vehicles are lost revenue. IFS fleet
                programs are built around one objective: maximize vehicle uptime and protect asset value at scale.
              </p>
              <p className="leading-relaxed mb-10" style={{ color: "#666", fontFamily: "Inter, sans-serif", lineHeight: 1.8 }}>
                We don&apos;t adapt retail shop workflows to fleet work. Our programs were designed from the ground up
                for high-volume, multi-location, time-sensitive operations — with the SLAs, reporting, and account
                management to match.
              </p>
              <button onClick={onGetEstimate}
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white rounded-sm transition-all hover:brightness-110"
                style={{ background: EMERALD, fontFamily: "Montserrat, sans-serif" }}>
                Design a Fleet Program <ArrowRight size={14} />
              </button>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Program features */}
      <section className="py-20" style={{ background: "#f7f8f9" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeUp className="mb-14">
            <Eyebrow label="Program Features" />
            <h2 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 800, color: CHARCOAL, letterSpacing: "-0.02em" }}>
              Built for Operations at <span style={{ color: EMERALD }}>Your Scale.</span>
            </h2>
          </FadeUp>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
            {programs.map((p, i) => {
              const Icon = p.icon;
              return (
                <FadeUp key={p.title} delay={i * 0.07}>
                  <div className="bg-white p-8 h-full group hover:bg-gray-50 transition-colors">
                    <div className="w-11 h-11 flex items-center justify-center rounded-sm mb-5" style={{ background: "rgba(45,138,107,0.08)" }}>
                      <Icon size={20} style={{ color: EMERALD }} />
                    </div>
                    <h4 className="font-bold mb-2" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.95rem", color: CHARCOAL }}>{p.title}</h4>
                    <p className="text-sm leading-relaxed" style={{ color: "#888", fontFamily: "Inter, sans-serif" }}>{p.body}</p>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

// ─── SERVICE 3: PDR ──────────────────────────────────────────────────────────
function PDRSection({ onGetEstimate }: { onGetEstimate: () => void }) {
  const techniques = [
    {
      name: "Dent Lifting",
      tag: "Core Technique",
      img: IMG.techWork,
      desc: "Using precision steel rods, technicians access dents from behind the panel and methodically massage the metal back to its original position — without breaking the paint surface.",
    },
    {
      name: "Crease Repair",
      tag: "Advanced PDR",
      img: IMG.techClose,
      desc: "Linear creases require a multi-tool approach combining rod work and specialized pushing techniques. Our master technicians can work creases that most vendors write off as unrepairable.",
    },
    {
      name: "Glue Pull Technique",
      tag: "Precision Pull",
      img: IMG.glue,
      desc: "For areas inaccessible from behind, technicians apply specialty adhesive tabs and use calibrated pull tools to lift dents from the outside — no drilling, no disassembly, no damage.",
    },
  ];

  const comparison = [
    { aspect: "Factory finish preserved", pdr: true, traditional: false },
    { aspect: "No repainting required", pdr: true, traditional: false },
    { aspect: "CarFax record created", pdr: false, traditional: true },
    { aspect: "Full resale value retained", pdr: true, traditional: false },
    { aspect: "Environmentally friendly", pdr: true, traditional: false },
    { aspect: "Turnaround time", pdr: "Hours – Days", traditional: "Days – Weeks" },
    { aspect: "Cost per vehicle", pdr: "Lower", traditional: "Higher" },
    { aspect: "OEM warranty affected", pdr: false, traditional: true },
  ];

  return (
    <div>
      {/* Intro */}
      <section className="py-10 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <FadeUp>
              <Eyebrow label="Paintless Dent Repair" />
              <h2 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(2rem, 3.2vw, 2.6rem)", fontWeight: 800, color: CHARCOAL, letterSpacing: "-0.02em", lineHeight: 1.1 }} className="mb-5">
                No Paint. No Filler.
                <br /><span style={{ color: EMERALD }}>Factory Finish. Always.</span>
              </h2>
              <p className="leading-relaxed mb-5" style={{ color: "#666", fontFamily: "Inter, sans-serif", lineHeight: 1.8 }}>
                Paintless Dent Repair is the definitive technique for restoring hail-damaged vehicles to
                pre-storm condition — preserving the factory paint finish, protecting resale value, and
                eliminating any CarFax record of damage.
              </p>
              <p className="leading-relaxed mb-10" style={{ color: "#666", fontFamily: "Inter, sans-serif", lineHeight: 1.8 }}>
                At IFS, PDR is not a service we offer — it is the discipline our entire company was built on.
                Every technician holds OEM certifications and our quality standards exceed manufacturer
                requirements across all major auto brands.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                {["OEM Certified", "No Repainting", "Factory Finish Preserved", "Full Value Recovery", "CarFax-Clean"].map((t) => (
                  <Tag key={t} label={t} />
                ))}
              </div>
              <button onClick={onGetEstimate}
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white rounded-sm transition-all hover:brightness-110"
                style={{ background: EMERALD, fontFamily: "Montserrat, sans-serif" }}>
                Get PDR Estimate <ArrowRight size={14} />
              </button>
            </FadeUp>
            <FadeUp delay={0.12}>
              <div className="overflow-hidden rounded-sm bg-gray-100" style={{ height: 440 }}>
                <img src={IMG.techDetail} alt="IFS PDR technician using precision tools on a vehicle panel" className="w-full h-full object-cover" style={{ filter: "brightness(0.88) contrast(1.05)" }} />
              </div>
            </FadeUp>
          </div>

          {/* 3 technique cards */}
          <FadeUp className="mb-4">
            <Eyebrow label="Core Techniques" />
            <h3 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 800, color: CHARCOAL, letterSpacing: "-0.02em" }} className="mb-12">
              How We Restore Every Dent.
            </h3>
          </FadeUp>
          <div className="grid md:grid-cols-3 gap-5">
            {techniques.map((t, i) => (
              <FadeUp key={t.name} delay={i * 0.1}>
                <div className="border rounded-sm overflow-hidden group" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
                  <div className="overflow-hidden bg-gray-100" style={{ height: 220 }}>
                    <img src={t.img} alt={t.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" style={{ filter: "brightness(0.85)" }} />
                  </div>
                  <div className="p-6">
                    <Tag label={t.tag} />
                    <h4 className="font-bold mt-3 mb-2" style={{ fontFamily: "Montserrat, sans-serif", color: CHARCOAL }}>{t.name}</h4>
                    <p className="text-sm leading-relaxed" style={{ color: "#777", fontFamily: "Inter, sans-serif" }}>{t.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* PDR vs Traditional comparison table */}
      <section className="py-10 lg:py-28 " style={{ background: "#f7f8f9" }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <FadeUp className="text-center mb-12">
            <Eyebrow label="PDR vs. Traditional Repair" />
            <h3 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 800, color: CHARCOAL, letterSpacing: "-0.02em" }}>
              The Numbers Don&apos;t Lie.
            </h3>
          </FadeUp>
          <FadeUp>
            <div className="border rounded-sm overflow-hidden" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
              {/* Header */}
              <div className="grid grid-cols-3 border-b" style={{ borderColor: "rgba(0,0,0,0.08)", background: CHARCOAL }}>
                <div className="px-7 py-4 text-xs font-bold tracking-widest uppercase text-white/40" style={{ fontFamily: "Montserrat, sans-serif" }}>Aspect</div>
                <div className="px-7 py-4 text-xs font-bold tracking-widest uppercase border-l text-center" style={{ fontFamily: "Montserrat, sans-serif", color: EMERALD, borderColor: "rgba(255,255,255,0.08)" }}>PDR (IFS)</div>
                <div className="px-7 py-4 text-xs font-bold tracking-widest uppercase border-l text-center text-white/40" style={{ fontFamily: "Montserrat, sans-serif", borderColor: "rgba(255,255,255,0.08)" }}>Traditional Body Shop</div>
              </div>
              {comparison.map((row, i) => (
                <div key={row.aspect} className="grid grid-cols-3 border-b hover:bg-gray-50 transition-colors" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
                  <div className="px-7 py-4 text-sm font-medium border-r" style={{ fontFamily: "Inter, sans-serif", color: CHARCOAL, borderColor: "rgba(0,0,0,0.06)" }}>
                    {row.aspect}
                  </div>
                  <div className="px-7 py-4 text-sm font-semibold border-r text-center" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
                    {typeof row.pdr === "boolean" ? (
                      row.pdr
                        ? <CheckCircle size={16} className="mx-auto" style={{ color: EMERALD }} />
                        : <span className="text-red-400 text-lg leading-none">✕</span>
                    ) : (
                      <span style={{ color: EMERALD, fontFamily: "Montserrat, sans-serif" }}>{row.pdr}</span>
                    )}
                  </div>
                  <div className="px-7 py-4 text-sm text-center" style={{ color: "#aaa", fontFamily: "Inter, sans-serif" }}>
                    {typeof row.traditional === "boolean" ? (
                      row.traditional
                        ? <span className="text-red-400 text-lg leading-none">✕</span>
                        : <CheckCircle size={16} className="mx-auto" style={{ color: "#ccc" }} />
                    ) : (
                      <span>{row.traditional}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}

// ─── SERVICE 4: DEALERSHIP PROGRAMS ──────────────────────────────────────────
function DealershipSection({ onGetEstimate }: { onGetEstimate: () => void }) {
  const tiers = [
    {
      name: "Essential",
      tag: "Single-Point Dealers",
      desc: "Priority scheduling, dedicated rep, and guaranteed capacity for single-location franchises that need consistent, reliable PDR without volume commitments.",
      features: ["Priority scheduling", "Dedicated account rep", "Monthly reporting", "24/7 emergency line"],
    },
    {
      name: "Enterprise",
      tag: "Multi-Point Groups",
      highlight: true,
      desc: "Full-scale partnership for dealer groups with 3+ locations. Includes custom SLAs, centralized reporting, and proactive hail event planning.",
      features: ["Custom SLA contracts", "Cross-location reporting", "Proactive hail planning", "Executive business reviews", "DMS integration", "Volume pricing"],
    },
    {
      name: "OEM Certified",
      tag: "Manufacturer Partners",
      desc: "Designed for franchised dealers with OEM compliance requirements. All work meets manufacturer standards with full documentation packages.",
      features: ["OEM certification compliance", "Full documentation package", "Warranty-safe procedures", "Manufacturer reporting"],
    },
  ];

  return (
    <div>
      <section className="py-10 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <FadeUp>
              <Eyebrow label="Dealership Programs" />
              <h2 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(2rem, 3.2vw, 2.6rem)", fontWeight: 800, color: CHARCOAL, letterSpacing: "-0.02em", lineHeight: 1.1 }} className="mb-5">
                Your Lot Moves.
                <br /><span style={{ color: EMERALD }}>We Handle the Rest.</span>
              </h2>
              <p className="leading-relaxed mb-5" style={{ color: "#666", fontFamily: "Inter, sans-serif", lineHeight: 1.8 }}>
                IFS Dealership Programs are structured around one objective: keeping your inventory in front
                of buyers, not sitting in a repair queue. We integrate with your operations so seamlessly that
                your sales team barely notices we were there.
              </p>
              <p className="leading-relaxed mb-10" style={{ color: "#666", fontFamily: "Inter, sans-serif", lineHeight: 1.8 }}>
                From priority scheduling for walk-in hail damage to proactive storm planning that turns a hail
                event into a sales opportunity — IFS is the dealership partner that pays for itself.
              </p>
              <button onClick={onGetEstimate}
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white rounded-sm transition-all hover:brightness-110"
                style={{ background: EMERALD, fontFamily: "Montserrat, sans-serif" }}>
                Explore Dealer Programs <ArrowRight size={14} />
              </button>
            </FadeUp>
            <FadeUp delay={0.12}>
              <div className="overflow-hidden rounded-sm bg-gray-100" style={{ height: 420 }}>
                <img src={IMG.dealership} alt="IFS team working on dealership vehicle lot inventory" className="w-full h-full object-cover" style={{ filter: "brightness(0.85)" }} />
              </div>
            </FadeUp>
          </div>

          {/* Partnership tiers */}
          <FadeUp className="mb-10">
            <Eyebrow label="Partnership Tiers" />
            <h3 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 800, color: CHARCOAL, letterSpacing: "-0.02em" }}>
              A Program for Every Dealer.
            </h3>
          </FadeUp>
          <div className="grid md:grid-cols-3 gap-5">
            {tiers.map((tier, i) => (
              <FadeUp key={tier.name} delay={i * 0.1}>
                <div className="border rounded-sm p-8 h-full flex flex-col relative"
                  style={{ borderColor: tier.highlight ? EMERALD : "rgba(0,0,0,0.08)", background: tier.highlight ? "rgba(45,138,107,0.03)" : "#fff" }}>
                  {tier.highlight && (
                    <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-sm" style={{ background: EMERALD }} />
                  )}
                  <Tag label={tier.tag} />
                  <h4 className="text-xl font-black mt-3 mb-3" style={{ fontFamily: "Montserrat, sans-serif", color: CHARCOAL }}>{tier.name}</h4>
                  <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: "#777", fontFamily: "Inter, sans-serif" }}>{tier.desc}</p>
                  <ul className="space-y-2.5 mb-8">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm" style={{ fontFamily: "Inter, sans-serif", color: "#555" }}>
                        <CheckCircle size={13} style={{ color: EMERALD, flexShrink: 0 }} /> {f}
                      </li>
                    ))}
                  </ul>
                  <button onClick={onGetEstimate}
                    className="w-full py-3 text-sm font-semibold rounded-sm transition-all border"
                    style={tier.highlight
                      ? { background: EMERALD, color: "#fff", borderColor: EMERALD, fontFamily: "Montserrat, sans-serif" }
                      : { background: "transparent", color: CHARCOAL, borderColor: "rgba(0,0,0,0.15)", fontFamily: "Montserrat, sans-serif" }}>
                    Request Info
                  </button>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// ─── SHARED BOTTOM CTA ────────────────────────────────────────────────────────
function ServicesCTA({ onGetEstimate }: { onGetEstimate: () => void }) {
  return (
    <section className="py-20 relative overflow-hidden" style={{ background: EMERALD }}>
      <div className="absolute inset-0 opacity-[0.06]"
        style={{ backgroundImage: "repeating-linear-gradient(45deg, rgba(0,0,0,0.4) 0px, rgba(0,0,0,0.4) 1px, transparent 1px, transparent 12px)" }} />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-center justify-between gap-10">
        <div>
          <p className="text-white/65 text-xs font-semibold tracking-[0.2em] uppercase mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Ready to Get Started?
          </p>
          <h2 className="text-white leading-tight" style={{
            fontFamily: "Montserrat, sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
            fontWeight: 800, letterSpacing: "-0.02em"
          }}>
            Talk to Our Enterprise Team<br />Within 24 Hours.
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <button onClick={onGetEstimate}
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold rounded-sm hover:shadow-xl active:scale-[0.98] transition-all"
            style={{ background: "#fff", color: EMERALD, fontFamily: "Montserrat, sans-serif" }}>
            Request Estimate <ArrowRight size={14} />
          </button>
          <a href="tel:+18005551234"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-sm border border-white/30 text-white hover:bg-white/10 transition-all"
            style={{ fontFamily: "Montserrat, sans-serif" }}>
            <Phone size={14} /> 1-800-IFS-FLEET
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── ROOT ─────────────────────────────────────────────────────────────────────
export default function ServicesPage({ onGetEstimate }: { onGetEstimate: () => void }) {
  const [activeTab, setActiveTab] = useState("hail");

  const switchTab = (id: string) => {
    setActiveTab(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <ServicesHero activeTab={activeTab} onTabChange={switchTab} />
      {activeTab === "hail"       && <HailSection       onGetEstimate={onGetEstimate} />}
      {activeTab === "fleet"      && <FleetSection      onGetEstimate={onGetEstimate} />}
      {activeTab === "pdr"        && <PDRSection        onGetEstimate={onGetEstimate} />}
      {activeTab === "dealership" && <DealershipSection onGetEstimate={onGetEstimate} />}
      <ServicesCTA onGetEstimate={onGetEstimate} />
    </div>
  );
}
