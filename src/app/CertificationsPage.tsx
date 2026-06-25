import { useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import { Award, Shield, CheckCircle, Star, ArrowRight, Phone, Users, Wrench, FileText, Zap } from "lucide-react";

const EMERALD = "#2D8A6B";
const CHARCOAL = "#111111";

const IMG = {
  heroBg: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&h=900&fit=crop&auto=format",
  certs: "https://images.unsplash.com/photo-1576723420195-6ac9d4c71fe8?w=1000&h=700&fit=crop&auto=format",
  certs2: "https://images.unsplash.com/photo-1576723420434-19d0e8be3b6a?w=1000&h=700&fit=crop&auto=format",
  tech: "https://images.unsplash.com/photo-1771340012319-0b4fca008b54?w=900&h=600&fit=crop&auto=format",
  facility: "https://images.unsplash.com/photo-1771530789155-b1f03fbf82b5?w=1200&h=700&fit=crop&auto=format",
};

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

const primaryCerts = [
  {
    badge: "A+",
    issuer: "Better Business Bureau",
    title: "BBB Accredited Business — A+ Rating",
    year: "Accredited since 2004",
    body: "The Better Business Bureau A+ rating is the highest level of accreditation awarded to businesses demonstrating consistent excellence in customer service, dispute resolution, and ethical business practices. IFS has maintained this rating without interruption for over 20 years.",
    color: CHARCOAL,
  },
  {
    badge: "OEM",
    issuer: "Original Equipment Manufacturer",
    title: "OEM-Certified PDR Technicians",
    year: "All active technicians certified",
    body: "Every IFS field technician holds active OEM certification in Paintless Dent Repair. This means our work meets or exceeds the quality standards set by vehicle manufacturers — preserving factory finishes, protecting warranties, and ensuring resale value.",
    color: EMERALD,
  },
  {
    badge: "ISO",
    issuer: "International Standards Organization",
    title: "ISO 9001 Quality Management",
    year: "Quality-aligned processes across all operations",
    body: "IFS operates under ISO 9001-aligned quality management principles — establishing documented processes, measurable outcomes, and continuous improvement cycles that ensure consistent results across every engagement, regardless of scale.",
    color: "#1a3a5c",
  },
];

const techCerts = [
  { title: "Master PDR Technician", body: "Advanced certification covering all PDR techniques including dent lifting, crease repair, glue pull, and extreme damage recovery.", hours: "240+ training hours" },
  { title: "Hail Damage Specialist", body: "Specialized certification for catastrophic hail event assessment and high-volume repair management. Covers triage, scoping, and documentation.", hours: "180+ training hours" },
  { title: "OEM Finish Certification", body: "Manufacturer-specific certification ensuring paint finish standards, panel tolerances, and surface integrity requirements are met.", hours: "120+ training hours" },
  { title: "Insurance Adjuster Liaison", body: "Certification in working with insurance carriers, claim documentation standards, and supplement negotiation.", hours: "80+ training hours" },
  { title: "Fleet Operations Management", body: "Enterprise-level certification covering large-scale project management, logistics coordination, and multi-site execution.", hours: "160+ training hours" },
  { title: "Quality Control Inspector", body: "Comprehensive QC certification using a 40-point vehicle inspection protocol developed in partnership with OEM standards.", hours: "100+ training hours" },
];

const memberships = [
  { icon: Shield, name: "National Auto Body Council (NABC)", role: "Active Member", desc: "Industry standards and best practices advocacy for vehicle repair professionals." },
  { icon: Users, name: "Automotive Service Association (ASA)", role: "Certified Member", desc: "The leading trade association for the auto service and repair industry." },
  { icon: FileText, name: "National Alliance of Independent Crop Insurers", role: "Partner Organization", desc: "Collaborative partnership supporting catastrophic event claim processing standards." },
  { icon: Wrench, name: "PDR Nation Professional Network", role: "Elite Member", desc: "The premier professional network for paintless dent repair specialists nationwide." },
];

const awards = [
  { year: "2024", title: "Top Fleet Restoration Company", org: "Fleet Management Weekly", desc: "Recognized as the #1 enterprise fleet hail restoration provider in North America." },
  { year: "2023", title: "Excellence in PDR Innovation", org: "Automotive Body Repair News", desc: "Honored for advancing large-scale PDR deployment methodology and quality standards." },
  { year: "2022", title: "BBB Torch Award Nominee", org: "Better Business Bureau", desc: "Nominated for outstanding commitment to ethical business practices and customer service." },
  { year: "2021", title: "Top Catastrophic Event Responder", org: "Insurance Industry Review", desc: "Recognized by insurance carriers for superior catastrophic hail event response capacity." },
  { year: "2020", title: "Best Fleet Service Partner", org: "National Fleet Management Association", desc: "Voted best service partner by fleet managers across 5 consecutive national surveys." },
  { year: "2019", title: "OEM Quality Excellence Award", org: "Auto Manufacturers Council", desc: "Awarded for consistent OEM-grade finish quality across multi-thousand-unit engagements." },
];

export default function CertificationsPage({ onGetEstimate }: { onGetEstimate: () => void }) {
  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, []);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden flex flex-col justify-end" style={{ background: CHARCOAL, minHeight: 440 }}>
        <div className="absolute inset-0">
          <img src={IMG.heroBg} alt="" className="w-full h-full object-cover opacity-15" style={{ filter: "grayscale(0.3)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(110deg, rgba(17,17,17,0.97) 45%, rgba(17,17,17,0.55))" }} />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 opacity-[0.07]" style={{ background: `radial-gradient(ellipse at 0% 100%, ${EMERALD}, transparent 65%)` }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-36 pb-16 w-full">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-3 mb-5">
              <motion.div className="h-px" style={{ background: EMERALD }} initial={{ width: 0 }} animate={{ width: 40 }} transition={{ duration: 0.8, delay: 0.3 }} />
              <span className="text-xs font-semibold tracking-[0.22em] uppercase" style={{ color: EMERALD, fontFamily: "Montserrat, sans-serif" }}>Certifications & Standards</span>
            </div>
            <h1 className="text-white mb-4" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(2.4rem, 5vw, 4rem)", fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1.05, maxWidth: 720 }}>
              Credentials That
              <br /><span style={{ color: EMERALD }}>Prove the Standard.</span>
            </h1>
            <p className="text-white/55 max-w-xl" style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)", lineHeight: 1.75 }}>
              Every certification, accreditation, and industry recognition IFS holds exists to give enterprise clients one thing: confidence that their assets are in the best hands in the business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Summary badges */}
      <div className="bg-white border-b" style={{ borderColor: "rgba(0,0,0,0.07)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4" style={{ borderLeft: "1px solid rgba(0,0,0,0.07)" }}>
            {[
              { v: "A+", l: "BBB Accredited Rating" },
              { v: "OEM", l: "Certified PDR Standard" },
              { v: "100%", l: "Technicians Certified" },
              { v: "20+", l: "Years of Accreditation" },
            ].map(s => (
              <div key={s.l} className="px-8 py-8 border-r border-b lg:border-b-0" style={{ borderColor: "rgba(0,0,0,0.07)" }}>
                <div className="text-3xl font-black mb-1 leading-none" style={{ fontFamily: "Montserrat, sans-serif", color: EMERALD }}>{s.v}</div>
                <div className="text-sm" style={{ color: "#999", fontFamily: "Inter, sans-serif" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Primary certifications */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeUp className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px" style={{ background: EMERALD }} />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: EMERALD, fontFamily: "Montserrat, sans-serif" }}>Core Accreditations</span>
            </div>
            <h2 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(2rem, 3vw, 2.6rem)", fontWeight: 800, color: CHARCOAL, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
              The Three Pillars of
              <br /><span style={{ color: EMERALD }}>IFS Credentialing.</span>
            </h2>
          </FadeUp>

          <div className="space-y-5">
            {primaryCerts.map((cert, i) => (
              <FadeUp key={cert.title} delay={i * 0.1}>
                <div className="border rounded-sm overflow-hidden" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
                  <div className="grid lg:grid-cols-4">
                    {/* Badge panel */}
                    <div className="hidden lg:flex flex-col items-center justify-center p-10 border-r" style={{ background: `rgba(${cert.color === EMERALD ? "45,138,107" : cert.color === CHARCOAL ? "17,17,17" : "26,58,92"},0.05)`, borderColor: "rgba(0,0,0,0.07)" }}>
                      <div className="w-20 h-20 rounded-full flex items-center justify-center text-white font-black text-2xl mb-3" style={{ background: cert.color, fontFamily: "Montserrat, sans-serif", letterSpacing: "0.05em" }}>
                        {cert.badge}
                      </div>
                      <div className="text-xs font-semibold text-center" style={{ color: "#888", fontFamily: "Inter, sans-serif" }}>{cert.issuer}</div>
                    </div>
                    {/* Content */}
                    <div className="lg:col-span-3 p-8 lg:p-10">
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div>
                          <h3 className="font-black mb-1" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "1.1rem", color: CHARCOAL }}>{cert.title}</h3>
                          <span className="text-xs font-semibold px-2.5 py-1 rounded-sm" style={{ background: "rgba(45,138,107,0.09)", color: EMERALD, fontFamily: "Inter, sans-serif" }}>{cert.year}</span>
                        </div>
                        <div className="flex-shrink-0 flex gap-1">
                          {[...Array(5)].map((_, si) => <Star key={si} size={12} fill={EMERALD} style={{ color: EMERALD }} />)}
                        </div>
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: "#666", fontFamily: "Inter, sans-serif", lineHeight: 1.8 }}>{cert.body}</p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Technician certifications */}
      <section className="py-10 lg:py-24" style={{ background: "#f7f8f9" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <FadeUp className="relative lg:sticky top-0 lg:top-28">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px" style={{ background: EMERALD }} />
                <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: EMERALD, fontFamily: "Montserrat, sans-serif" }}>Technician Credentials</span>
              </div>
              <h2 className="mb-5" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(2rem, 3vw, 2.6rem)", fontWeight: 800, color: CHARCOAL, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
                Every Technician.
                <br /><span style={{ color: EMERALD }}>Fully Certified.</span>
              </h2>
              <p className="leading-relaxed mb-8" style={{ color: "#666", fontFamily: "Inter, sans-serif", lineHeight: 1.8 }}>
                IFS technicians complete one of the most rigorous certification programs in the PDR industry. No field technician is deployed without holding active certifications in their relevant disciplines — and every certification is refreshed on a 24-month cycle.
              </p>
              <div className="overflow-hidden rounded-sm bg-gray-200" style={{ height: 320 }}>
                <img src={IMG.tech} alt="IFS certified PDR technician at work" className="w-full h-full object-cover" style={{ filter: "brightness(0.82)" }} />
              </div>
            </FadeUp>

            <div className="space-y-4">
              {techCerts.map((cert, i) => (
                <FadeUp key={cert.title} delay={i * 0.07}>
                  <div className="bg-white border rounded-sm p-6 hover:shadow-sm transition-shadow" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h4 className="font-bold" style={{ fontFamily: "Montserrat, sans-serif", color: CHARCOAL, fontSize: "0.95rem" }}>{cert.title}</h4>
                      <span className="flex-shrink-0 text-xs font-semibold px-2.5 py-1 rounded-sm" style={{ background: "rgba(45,138,107,0.08)", color: EMERALD, fontFamily: "Inter, sans-serif" }}>{cert.hours}</span>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "#777", fontFamily: "Inter, sans-serif" }}>{cert.body}</p>
                    <div className="flex items-center gap-2 mt-3">
                      <CheckCircle size={13} style={{ color: EMERALD }} />
                      <span className="text-xs text-gray-400" style={{ fontFamily: "Inter, sans-serif" }}>Required for all active field technicians · Renewed every 24 months</span>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry memberships */}
      <section className="py-10 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeUp className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px" style={{ background: EMERALD }} />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: EMERALD, fontFamily: "Montserrat, sans-serif" }}>Industry Memberships</span>
            </div>
            <h2 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(2rem, 3vw, 2.6rem)", fontWeight: 800, color: CHARCOAL, letterSpacing: "-0.02em" }}>
              Embedded in the
              <br /><span style={{ color: EMERALD }}>Industry We Serve.</span>
            </h2>
          </FadeUp>
          <div className="grid md:grid-cols-2 gap-px bg-gray-100">
            {memberships.map((m, i) => {
              const Icon = m.icon;
              return (
                <FadeUp key={m.name} delay={i * 0.08}>
                  <div className="bg-white p-8 flex items-start gap-5">
                    <div className="w-12 h-12 flex items-center justify-center rounded-sm flex-shrink-0" style={{ background: "rgba(45,138,107,0.08)" }}>
                      <Icon size={22} style={{ color: EMERALD }} />
                    </div>
                    <div>
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-sm" style={{ background: "rgba(45,138,107,0.08)", color: EMERALD, fontFamily: "Inter, sans-serif" }}>{m.role}</span>
                      <h4 className="font-bold mt-2 mb-1.5" style={{ fontFamily: "Montserrat, sans-serif", color: CHARCOAL, fontSize: "0.95rem" }}>{m.name}</h4>
                      <p className="text-sm leading-relaxed" style={{ color: "#888", fontFamily: "Inter, sans-serif" }}>{m.desc}</p>
                    </div>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* Awards timeline */}
      <section className="py-10 lg:py-24" style={{ background: "#f7f8f9" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeUp className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px" style={{ background: EMERALD }} />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: EMERALD, fontFamily: "Montserrat, sans-serif" }}>Awards & Recognition</span>
            </div>
            <h2 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(2rem, 3vw, 2.6rem)", fontWeight: 800, color: CHARCOAL, letterSpacing: "-0.02em" }}>
              Recognized by the
              <br /><span style={{ color: EMERALD }}>Industry. Proven by Results.</span>
            </h2>
          </FadeUp>

          <div className="relative">
            <div className="hidden lg:block absolute left-[72px] top-0 bottom-0 w-px" style={{ background: "rgba(0,0,0,0.07)" }} />
            <div className="space-y-5">
              {awards.map((a, i) => (
                <FadeUp key={`${a.year}-${a.title}`} delay={i * 0.07}>
                  <div className="grid lg:grid-cols-[144px_1fr] gap-6 items-start">
                    {/* Year */}
                    <div className="hidden lg:flex items-center gap-4">
                      <div className="text-2xl font-black" style={{ fontFamily: "Montserrat, sans-serif", color: EMERALD }}>{a.year}</div>
                      <div className="w-3 h-3 rounded-full border-2 flex-shrink-0" style={{ background: "#fff", borderColor: EMERALD }} />
                    </div>
                    {/* Card */}
                    <div className="bg-white border rounded-sm p-6 hover:shadow-sm transition-shadow" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
                      <div className="flex items-start gap-3 mb-2">
                        <Award size={16} className="flex-shrink-0 mt-0.5" style={{ color: EMERALD }} />
                        <div>
                          <div className="flex items-center gap-3 flex-wrap">
                            <span className="text-xs font-bold lg:hidden" style={{ color: EMERALD, fontFamily: "Montserrat, sans-serif" }}>{a.year}</span>
                            <span className="text-xs text-gray-400" style={{ fontFamily: "Inter, sans-serif" }}>{a.org}</span>
                          </div>
                          <h4 className="font-bold mt-0.5 mb-1.5" style={{ fontFamily: "Montserrat, sans-serif", color: CHARCOAL }}>{a.title}</h4>
                          <p className="text-sm leading-relaxed" style={{ color: "#777", fontFamily: "Inter, sans-serif" }}>{a.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Facility image + CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <div className="overflow-hidden rounded-sm bg-gray-100" style={{ height: 360 }}>
                <img src={IMG.facility} alt="IFS certified repair facility meeting OEM quality standards" className="w-full h-full object-cover" style={{ filter: "brightness(0.82)" }} />
              </div>
            </FadeUp>
            <FadeUp delay={0.12}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px" style={{ background: EMERALD }} />
                <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: EMERALD, fontFamily: "Montserrat, sans-serif" }}>Our Facilities</span>
              </div>
              <h2 className="mb-5" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 800, color: CHARCOAL, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
                Certified Facilities.
                <br /><span style={{ color: EMERALD }}>OEM-Grade Standards.</span>
              </h2>
              <p className="leading-relaxed mb-8" style={{ color: "#666", fontFamily: "Inter, sans-serif", lineHeight: 1.8 }}>
                Every IFS facility operates to OEM-grade cleanliness, equipment, and process standards. From lighting specifications that ensure finish visibility to tool calibration protocols that protect paint surfaces — our facilities are built for the quality our certifications demand.
              </p>
              <div className="space-y-3 mb-8">
                {["Climate-controlled repair environments", "OEM-specified lighting for finish inspection", "Calibrated tool maintenance program", "Dedicated QC inspection stations", "Secure lot management and vehicle tracking"].map(item => (
                  <div key={item} className="flex items-center gap-2.5 text-sm" style={{ fontFamily: "Inter, sans-serif", color: "#555" }}>
                    <CheckCircle size={14} style={{ color: EMERALD }} /> {item}
                  </div>
                ))}
              </div>
              <button onClick={onGetEstimate} className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white rounded-sm transition-all hover:brightness-110"
                style={{ background: EMERALD, fontFamily: "Montserrat, sans-serif" }}>
                Get an Enterprise Estimate <ArrowRight size={14} />
              </button>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-20 relative overflow-hidden" style={{ background: EMERALD }}>
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "repeating-linear-gradient(45deg, rgba(0,0,0,0.4) 0px, rgba(0,0,0,0.4) 1px, transparent 1px, transparent 12px)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div>
            <p className="text-white/65 text-xs font-semibold tracking-[0.2em] uppercase mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>Certified. Accredited. Ready.</p>
            <h2 className="text-white leading-tight" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 800, letterSpacing: "-0.02em" }}>
              Work With the Most<br />Credentialed Team in PDR.
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={onGetEstimate} className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold rounded-sm hover:shadow-xl active:scale-[0.98] transition-all" style={{ background: "#fff", color: EMERALD, fontFamily: "Montserrat, sans-serif" }}>
              Get an Estimate <ArrowRight size={14} />
            </button>
            <a href="tel:+18005551234" className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-sm border border-white/30 text-white hover:bg-white/10 transition-all" style={{ fontFamily: "Montserrat, sans-serif" }}>
              <Phone size={14} /> 1-800-IFS-FLEET
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
