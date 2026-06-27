import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import { Star, ArrowRight, Phone, Quote, ChevronLeft, ChevronRight, FileText } from "lucide-react";

const EMERALD = "#2D8A6B";
const CHARCOAL = "#111111";

const IMG = {
  heroBg: "https://images.unsplash.com/photo-1618418721668-0d1f72aa4bab?w=1920&h=900&fit=crop&auto=format",
  a1: "https://images.unsplash.com/photo-1575145053102-78eb0d5a0f7a?w=300&h=300&fit=crop&auto=format",
  a2: "https://images.unsplash.com/photo-1596963829984-c6b749a57108?w=300&h=300&fit=crop&auto=format",
  a3: "https://images.unsplash.com/photo-1562101074-ddc04071bdc8?w=300&h=300&fit=crop&auto=format",
  a4: "https://images.unsplash.com/photo-1737649316494-6a32b7fda654?w=300&h=300&fit=crop&auto=format",
  a5: "https://images.unsplash.com/photo-1597724903883-84d0be041aa8?w=300&h=300&fit=crop&auto=format",
  fleetBg: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=1200&h=700&fit=crop&auto=format",
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

const ALL_TESTIMONIALS = [
  {
    quote: "IFS handled over 4,200 units across our Midwest distribution centers after back-to-back hail events last spring. Their logistics, communication, and output quality were genuinely unprecedented. They're the only vendor we call.",
    name: "Marcus W.", title: "VP of Vehicle Operations", company: "National Auto Distribution Corp.", location: "Indianapolis, IN", rating: 5, avatar: IMG.a2, category: "Fleet",
  },
  {
    quote: "We've tried six PDR vendors in the last decade. International Fleet Solutions operates in a different category entirely. Their technicians, turnaround discipline, and account management make every other provider look amateur.",
    name: "Sandra T.", title: "Director of Fleet Asset Management", company: "Summit Rental Group", location: "Atlanta, GA", rating: 5, avatar: IMG.a1, category: "Rental",
  },
  {
    quote: "After a catastrophic hail event wiped out 1,800 units on our lot, IFS was on-site within 36 hours with a full crew. They delivered every vehicle on schedule. Our GM called it the most professional vendor experience in 20 years.",
    name: "David K.", title: "General Manager", company: "Regional Automotive Group — 12 Locations", location: "Denver, CO", rating: 5, avatar: IMG.a3, category: "Dealership",
  },
  {
    quote: "When it comes to hail repair, we choose International Fleet Solutions, Inc. (IFS) as our preferred vendor of choice. IFS brings a level of professionalism that we have come to count on for the last 5 years running.",
    name: "Phil Long", title: "Owner", company: "Phil Long Dealerships", location: "Colorado Springs, CO", rating: 5, avatar: IMG.a4, category: "Dealership",
  },
  {
    quote: "The IFS team impressed me with their professionalism & expertise in this area, from the onset and through completion including serving as our intermediary between the insurance company to ensure fairness in claims processed.",
    name: "Robert M.", title: "Fleet Director", company: "Enterprise Solutions Corp.", location: "Dallas, TX", rating: 5, avatar: IMG.a5, category: "Corporate",
  },
  {
    quote: "IFS deployed a team to our 3,000-unit manufacturer lot in 28 hours. The scope of what they managed — logistics, repairs, documentation, insurance — would have taken us months to coordinate internally. It was seamless.",
    name: "Christine A.", title: "Inventory Operations Manager", company: "American OEM Distribution", location: "Detroit, MI", rating: 5, avatar: IMG.a2, category: "OEM",
  },
  {
    quote: "We strongly believe that if your dealership is affected by a hail storm, you would be well served by hiring International Fleet Solutions, Inc. to handle the repairs. Five years of consistent excellence.",
    name: "James F.", title: "Dealer Principal", company: "Frontier Auto Group — 8 Rooftops", location: "Colorado Springs, CO", rating: 5, avatar: IMG.a3, category: "Dealership",
  },
  {
    quote: "Our insurance coordination alone would have been a nightmare without IFS. They handled every adjuster interaction, every photo doc, every supplement claim. We just watched our lot come back to life.",
    name: "Tanya R.", title: "CFO", company: "Interstate Fleet Partners", location: "Phoenix, AZ", rating: 5, avatar: IMG.a1, category: "Fleet",
  },
  {
    quote: "Factory finish preserved on every single vehicle — zero repaints, zero filler, zero CarFax entries. IFS is the only PDR partner we'll ever use for our OEM distribution network.",
    name: "Steven L.", title: "Regional Distribution Manager", company: "Pacific OEM Logistics", location: "Los Angeles, CA", rating: 5, avatar: IMG.a4, category: "OEM",
  },
];

const CATEGORIES = ["All", "Fleet", "Dealership", "Rental", "Corporate", "OEM"];

const recLetter = "The IFS team impressed me with their professionalism & expertise in this area, from the onset and through completion — including serving as our intermediary between the insurance company to ensure fairness in claims processed, and by quality control upon completion. It has been a sincere pleasure dealing with you and every member of your organization.";

export default function TestimonialsPage({ onGetEstimate }: { onGetEstimate: () => void }) {
  const [filter, setFilter] = useState("All");
  const [featured, setFeatured] = useState(0);

  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, []);

  const filtered = filter === "All" ? ALL_TESTIMONIALS : ALL_TESTIMONIALS.filter(t => t.category === filter);
  const ft = ALL_TESTIMONIALS[featured];

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden flex flex-col justify-end" style={{ background: CHARCOAL, minHeight: 440 }}>
        <div className="absolute inset-0">
          <img src={IMG.heroBg} alt="" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(110deg, rgba(17,17,17,0.97) 45%, rgba(17,17,17,0.55))" }} />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 opacity-[0.07]" style={{ background: `radial-gradient(ellipse at 0% 100%, ${EMERALD}, transparent 65%)` }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-36 pb-14 w-full">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-3 mb-5">
              <motion.div className="h-px" style={{ background: EMERALD }} initial={{ width: 0 }} animate={{ width: 40 }} transition={{ duration: 0.8, delay: 0.3 }} />
              <span className="text-xs font-semibold tracking-[0.22em] uppercase" style={{ color: EMERALD, fontFamily: "Montserrat, sans-serif" }}>Client Testimonials</span>
            </div>
            <h1 className="text-white mb-4" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(2.4rem, 5vw, 4rem)", fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1.05, maxWidth: 680 }}>
              What the Industry Says
              <br /><span style={{ color: EMERALD }}>About IFS.</span>
            </h1>
            <p className="text-white/55 max-w-lg" style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)", lineHeight: 1.75 }}>
              Thirty years of enterprise relationships. Thousands of events. The same answer every time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats strip */}
      <div className="bg-white border-b" style={{ borderColor: "rgba(0,0,0,0.07)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4" style={{ borderLeft: "1px solid rgba(0,0,0,0.07)" }}>
            {[
              { v: "5-Star", l: "Average Client Rating" },
              { v: "98%", l: "Client Retention Rate" },
              { v: "30+", l: "Years of Relationships" },
              { v: "A+", l: "BBB Accredited" },
            ].map(s => (
              <div key={s.l} className="px-8 py-8 border-r border-b lg:border-b-0" style={{ borderColor: "rgba(0,0,0,0.07)" }}>
                <div className="text-3xl font-black mb-1 leading-none" style={{ fontFamily: "Montserrat, sans-serif", color: EMERALD }}>{s.v}</div>
                <div className="text-sm" style={{ color: "#999", fontFamily: "Inter, sans-serif" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured testimonial slider */}
      <section className="py-10 lg:py-15" style={{ background: "#f7f8f9" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeUp className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px" style={{ background: EMERALD }} />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: EMERALD, fontFamily: "Montserrat, sans-serif" }}>Featured</span>
            </div>
            <h2 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 800, color: CHARCOAL, letterSpacing: "-0.02em" }}>
              In Their Own Words.
            </h2>
          </FadeUp>

          <FadeUp>
            <div className="rounded-sm overflow-hidden" style={{ background: CHARCOAL }}>
              <div className="grid lg:grid-cols-3">
                <div className="relative overflow-hidden bg-gray-800" style={{ minHeight: 360 }}>
                  <img src={ft.avatar} alt={ft.name} className="w-full h-full object-cover object-top" style={{ filter: "brightness(0.65) grayscale(0.15)" }} />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to right, transparent 55%, rgba(17,17,17,0.7))" }} />
                  <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: EMERALD }} />
                  <div className="absolute bottom-6 left-6">
                    <span className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-sm" style={{ background: EMERALD, color: "#fff", fontFamily: "Montserrat, sans-serif" }}>{ft.category}</span>
                  </div>
                </div>
                <div className="lg:col-span-2 p-10 lg:p-14 flex flex-col justify-between">
                  <div>
                    <div className="flex gap-1 mb-5">
                      {[...Array(ft.rating)].map((_, i) => <Star key={i} size={14} fill={EMERALD} style={{ color: EMERALD }} />)}
                    </div>
                    <Quote size={28} className="mb-4 opacity-20" style={{ color: EMERALD }} />
                    <blockquote className="text-white/85 leading-relaxed mb-8" style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(1rem, 1.4vw, 1.12rem)", lineHeight: 1.85 }}>
                      {ft.quote}
                    </blockquote>
                    <div>
                      <div className="text-sm font-bold text-white" style={{ fontFamily: "Montserrat, sans-serif" }}>{ft.name}</div>
                      <div className="text-xs mt-0.5" style={{ color: "#888", fontFamily: "Inter, sans-serif" }}>{ft.title} — {ft.company}</div>
                      <div className="text-xs mt-0.5" style={{ color: "#666", fontFamily: "Inter, sans-serif" }}>{ft.location}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mt-8 pt-8 border-t" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
                    <div className="flex gap-1.5 flex-wrap">
                      {ALL_TESTIMONIALS.slice(0, 6).map((_, i) => (
                        <button key={i} onClick={() => setFeatured(i)} className="w-6 h-0.5 rounded-full transition-all duration-300"
                          style={{ background: i === featured ? EMERALD : "rgba(255,255,255,0.18)" }} />
                      ))}
                    </div>
                    <div className="ml-auto flex gap-2">
                      <button onClick={() => setFeatured(f => f === 0 ? ALL_TESTIMONIALS.length - 1 : f - 1)}
                        className="w-9 h-9 rounded-sm border flex items-center justify-center text-white/50 hover:text-white transition-all"
                        style={{ borderColor: "rgba(255,255,255,0.15)" }}><ChevronLeft size={16} /></button>
                      <button onClick={() => setFeatured(f => (f + 1) % ALL_TESTIMONIALS.length)}
                        className="w-9 h-9 rounded-sm border flex items-center justify-center text-white/50 hover:text-white transition-all"
                        style={{ borderColor: "rgba(255,255,255,0.15)" }}><ChevronRight size={16} /></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Filter + grid */}
      <section className="py-10 lg:py-15 bg-white bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeUp className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-12">
            <h2 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(1.6rem, 2.5vw, 2rem)", fontWeight: 800, color: CHARCOAL, letterSpacing: "-0.02em" }}>
              All Client Reviews
            </h2>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map(cat => (
                <button key={cat} onClick={() => setFilter(cat)}
                  className="px-4 py-2 text-xs font-semibold rounded-sm border transition-all"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    background: filter === cat ? EMERALD : "transparent",
                    color: filter === cat ? "#fff" : "#888",
                    borderColor: filter === cat ? EMERALD : "rgba(0,0,0,0.12)",
                  }}>
                  {cat}
                </button>
              ))}
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((t, i) => (
              <FadeUp key={`${t.name}-${i}`} delay={i * 0.05}>
                <div className="border rounded-sm p-7 flex flex-col h-full hover:shadow-md transition-shadow" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-1">
                      {[...Array(t.rating)].map((_, si) => <Star key={si} size={12} fill={EMERALD} style={{ color: EMERALD }} />)}
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-sm" style={{ background: "rgba(45,138,107,0.08)", color: EMERALD, fontFamily: "Inter, sans-serif" }}>{t.category}</span>
                  </div>
                  <blockquote className="text-sm leading-relaxed flex-1 mb-6" style={{ color: "#555", fontFamily: "Inter, sans-serif", lineHeight: 1.8 }}>
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-3 pt-5 border-t" style={{ borderColor: "rgba(0,0,0,0.07)" }}>
                    <img src={t.avatar} alt={t.name} className="w-9 h-9 rounded-full object-cover object-top flex-shrink-0" style={{ filter: "grayscale(0.1)" }} />
                    <div>
                      <div className="text-xs font-bold" style={{ fontFamily: "Montserrat, sans-serif", color: CHARCOAL }}>{t.name}</div>
                      <div className="text-xs" style={{ color: "#999", fontFamily: "Inter, sans-serif" }}>{t.title}</div>
                      <div className="text-xs" style={{ color: "#bbb", fontFamily: "Inter, sans-serif" }}>{t.company} · {t.location}</div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Recommendation letter */}
      <section className="py-10 lg:py-15" style={{ background: "#f7f8f9" }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <FadeUp className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px" style={{ background: EMERALD }} />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: EMERALD, fontFamily: "Montserrat, sans-serif" }}>Formal Recognition</span>
              <div className="w-8 h-px" style={{ background: EMERALD }} />
            </div>
            <h2 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 800, color: CHARCOAL, letterSpacing: "-0.02em" }}>
              Recommendation Letter
            </h2>
          </FadeUp>
          <FadeUp>
            <div className="rounded-sm overflow-hidden" style={{ background: CHARCOAL }}>
              <div className="grid lg:grid-cols-4">
                <div className="hidden lg:flex flex-col items-center justify-center p-10 border-r" style={{ background: "rgba(45,138,107,0.07)", borderColor: "rgba(255,255,255,0.06)" }}>
                  <div className="w-16 h-16 flex items-center justify-center rounded-sm mb-4" style={{ background: "rgba(45,138,107,0.2)" }}>
                    <FileText size={28} style={{ color: EMERALD }} />
                  </div>
                  <div className="text-xs font-bold tracking-widest uppercase text-center" style={{ color: EMERALD, fontFamily: "Montserrat, sans-serif" }}>Client Letter</div>
                  <div className="text-white/40 text-xs text-center mt-2" style={{ fontFamily: "Inter, sans-serif" }}>On file with IFS</div>
                </div>
                <div className="lg:col-span-3 p-10 lg:p-14">
                  <div className="flex gap-1 mb-5">{[...Array(5)].map((_, i) => <Star key={i} size={14} fill={EMERALD} style={{ color: EMERALD }} />)}</div>
                  <Quote size={24} className="mb-4 opacity-20" style={{ color: EMERALD }} />
                  <blockquote className="text-white/85 leading-relaxed mb-8" style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(1rem, 1.3vw, 1.08rem)", lineHeight: 1.9, fontStyle: "italic" }}>
                    &ldquo;{recLetter}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0" style={{ background: EMERALD, fontFamily: "Montserrat, sans-serif" }}>EC</div>
                    <div>
                      <div className="text-sm font-bold text-white" style={{ fontFamily: "Montserrat, sans-serif" }}>Enterprise Client</div>
                      <div className="text-xs" style={{ color: "#888", fontFamily: "Inter, sans-serif" }}>Formal Recommendation — on file</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 lg:py-15 relative overflow-hidden" style={{ background: EMERALD }}>
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "repeating-linear-gradient(45deg, rgba(0,0,0,0.4) 0px, rgba(0,0,0,0.4) 1px, transparent 1px, transparent 12px)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div>
            <p className="text-white/65 text-xs font-semibold tracking-[0.2em] uppercase mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>Join Our Client Roster</p>
            <h2 className="text-white leading-tight" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 800, letterSpacing: "-0.02em" }}>
              Experience the IFS Difference<br />For Yourself.
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={onGetEstimate} className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold rounded-sm hover:shadow-xl active:scale-[0.98] transition-all" style={{ background: "#fff", color: EMERALD, fontFamily: "Montserrat, sans-serif" }}>
              Get an Estimate <ArrowRight size={14} />
            </button>
            <a href="tel:2399197963" className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-sm border border-white/30 text-white hover:bg-white/10 transition-all" style={{ fontFamily: "Montserrat, sans-serif" }}>
              <Phone size={14} /> 239.919.7963
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
