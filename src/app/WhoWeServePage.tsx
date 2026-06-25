import { useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight, CheckCircle, Phone, Shield, Truck, Building2, Users, Car, FileText } from "lucide-react";

const EMERALD = "#2D8A6B";
const CHARCOAL = "#111111";

const IMG = {
  heroBg: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=1920&h=900&fit=crop&auto=format",
  factory: "https://images.unsplash.com/photo-1777383975764-bec6f5cabf00?w=1000&h=700&fit=crop&auto=format",
  fleet: "https://images.unsplash.com/photo-1543465077-db45d34b88a5?w=1000&h=700&fit=crop&auto=format",
  dealership: "https://images.unsplash.com/photo-1632405862117-236585cfb757?w=1000&h=700&fit=crop&auto=format",
  rental: "https://images.unsplash.com/photo-1593280405106-e438ebe93f5b?w=1000&h=700&fit=crop&auto=format",
  corporate: "https://images.unsplash.com/photo-1766740606233-6573571caa6b?w=1000&h=700&fit=crop&auto=format",
  insurance: "https://images.unsplash.com/photo-1714974528737-3e6c7e4d11af?w=1000&h=700&fit=crop&auto=format",
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

const segments = [
  {
    id: "manufacturers",
    icon: Shield,
    label: "Auto Manufacturers",
    tag: "OEM Partners",
    img: IMG.factory,
    headline: "Protecting Inventory at Production Scale.",
    body: "When hail strikes a distribution lot or staging facility, the impact is measured in thousands of units and millions in asset value. IFS was built for exactly this scenario — rapid mobilization, OEM-certified repair, and zero compromise on finish quality.",
    painPoints: ["Thousands of units affected in a single event", "OEM warranty compliance requirements", "Tight distribution timeline pressure", "Multi-state lot exposure"],
    solutions: ["Same-week deployment to any continental U.S. location", "OEM-certified PDR — no CarFax record created", "Dedicated project manager for the full engagement", "Factory-original finish preserved on every vehicle"],
    stat: { value: "12,000+", label: "units repaired in single OEM events" },
  },
  {
    id: "fleets",
    icon: Truck,
    label: "National Fleet Operators",
    tag: "Fleet Programs",
    img: IMG.fleet,
    headline: "Idle Vehicles Are Lost Revenue.",
    body: "For rental fleets and corporate operators, every day a vehicle sits unrepaired is a day of lost utilization. IFS fleet programs are engineered around one metric: maximum uptime. Our turnaround SLAs, dedicated account teams, and volume capacity exist to keep your fleet moving.",
    painPoints: ["Multi-location fleet spread across dozens of states", "Volume repair needs with tight SLA requirements", "Complex insurance coordination across events", "Per-VIN tracking and reporting demands"],
    solutions: ["48-state deployment network — one vendor, any location", "Contractual turnaround SLAs with penalties", "Direct insurance adjuster coordination included", "Per-VIN reporting dashboard for your ops team"],
    stat: { value: "500K+", label: "fleet vehicles restored" },
  },
  {
    id: "dealerships",
    icon: Building2,
    label: "Franchise Dealerships",
    tag: "Dealer Programs",
    img: IMG.dealership,
    headline: "Your Lot Moves. We Handle the Rest.",
    body: "Hail damage on a dealer lot kills momentum — units can't be retailed, trade-ins pile up, and the clock is ticking. IFS dealer programs are built around speed, transparency, and seamless DMS integration so your sales team stays focused on what they do best.",
    painPoints: ["Retail pressure — damaged units can't move", "Insurance coordination complexity", "Trade-in and used inventory exposure", "Franchise OEM compliance requirements"],
    solutions: ["Priority scheduling — lot vehicles moved within 48 hours", "We manage all insurance adjuster interaction", "Proactive hail planning to maximize post-storm profitability", "OEM-compliant repair documentation included"],
    stat: { value: "48 Hr", label: "average lot turnaround" },
  },
  {
    id: "rental",
    icon: Car,
    label: "Rental Car Companies",
    tag: "Rental Fleet",
    img: IMG.rental,
    headline: "Utilization is Everything.",
    body: "Rental fleets live on availability. A hail event that benches hundreds of vehicles is an operational crisis. IFS delivers the speed, capacity, and coordination infrastructure to get your fleet back to customer-ready condition faster than any alternative.",
    painPoints: ["High-density lots — single events affect hundreds of units", "Zero tolerance for downtime in peak seasons", "Complex multi-location insurance structures", "Tight brand standards for vehicle condition"],
    solutions: ["Largest single-event repair capacity in the industry", "Peak-season priority programs available", "Centralized insurance coordination across all locations", "Brand-standard condition guaranteed on every unit"],
    stat: { value: "98%", label: "client retention across rental fleet accounts" },
  },
  {
    id: "corporate",
    icon: Users,
    label: "Corporate Fleets",
    tag: "Corporate Programs",
    img: IMG.corporate,
    headline: "Asset Value Protected. Operations Uninterrupted.",
    body: "Corporate vehicle fleets represent significant capital assets. Hail damage — left unaddressed — erodes resale value and creates ongoing liability. IFS corporate programs deliver proactive repair management that protects your balance sheet without disrupting your operations.",
    painPoints: ["Fleet resale value exposure from unrepaired damage", "Multi-state vehicle locations difficult to coordinate", "Internal fleet management bandwidth constraints", "Reporting requirements for finance and insurance teams"],
    solutions: ["Mobile repair units dispatched directly to your locations", "Full-service account management — hands-off for your team", "Executive reporting for finance and risk teams", "PDR preserves full resale value — no CarFax entry"],
    stat: { value: "Zero", label: "CarFax records on any PDR repair" },
  },
  {
    id: "insurance",
    icon: FileText,
    label: "Insurance Carriers",
    tag: "Insurance Partners",
    img: IMG.insurance,
    headline: "Accurate Claims. Faster Closures.",
    body: "IFS works directly with insurance carriers to streamline the catastrophic hail claim lifecycle — from accurate initial assessments to efficient repair execution. Our documentation, transparency, and industry tenure make us the preferred PDR partner for carriers managing large-scale events.",
    painPoints: ["Inaccurate field assessments inflate claim exposure", "Slow repair execution extends claim lifecycle", "Fraud risk in catastrophic event environments", "Documentation gaps create claim disputes"],
    solutions: ["Certified assessors provide carrier-grade damage documentation", "Fastest large-event repair execution in the industry", "Full photo documentation for every vehicle at intake and completion", "30+ years of carrier relationship and claim coordination experience"],
    stat: { value: "30+", label: "years of insurance carrier partnerships" },
  },
];

export default function WhoWeServePage({ onGetEstimate }: { onGetEstimate: () => void }) {
  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, []);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden flex flex-col justify-end" style={{ background: CHARCOAL, minHeight: 460 }}>
        <div className="absolute inset-0">
          <img src={IMG.heroBg} alt="" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(110deg, rgba(17,17,17,0.97) 45%, rgba(17,17,17,0.6))" }} />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 opacity-[0.07]" style={{ background: `radial-gradient(ellipse at 0% 100%, ${EMERALD}, transparent 65%)` }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-36 pb-16 w-full">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-3 mb-5">
              <motion.div className="h-px" style={{ background: EMERALD }} initial={{ width: 0 }} animate={{ width: 40 }} transition={{ duration: 0.8, delay: 0.3 }} />
              <span className="text-xs font-semibold tracking-[0.22em] uppercase" style={{ color: EMERALD, fontFamily: "Montserrat, sans-serif" }}>Who We Serve</span>
            </div>
            <h1 className="text-white mb-4" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(2.4rem, 5vw, 4rem)", fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1.05, maxWidth: 720 }}>
              Organizations That Can&apos;t Afford
              <br /><span style={{ color: EMERALD }}>Downtime.</span>
            </h1>
            <p className="text-white/55 max-w-xl" style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)", lineHeight: 1.75 }}>
              IFS serves the organizations where fleet condition directly impacts revenue, asset value, and brand reputation. Six client categories. One uncompromising standard.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Segment nav pills */}
      <nav className="bg-white border-b sticky top-[72px] z-40" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex overflow-x-auto gap-0">
            {segments.map((s) => {
              const Icon = s.icon;
              return (
                <a key={s.id} href={`#${s.id}`}
                  className="flex items-center gap-2 px-5 py-4 text-xs font-semibold whitespace-nowrap border-b-2 transition-all duration-200 hover:text-emerald-700"
                  style={{ fontFamily: "Montserrat, sans-serif", color: "#777", borderBottomColor: "transparent" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderBottomColor = EMERALD; (e.currentTarget as HTMLElement).style.color = EMERALD; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderBottomColor = "transparent"; (e.currentTarget as HTMLElement).style.color = "#777"; }}>
                  <Icon size={13} />
                  {s.label}
                </a>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Segment sections */}
      {segments.map((seg, idx) => {
        const Icon = seg.icon;
        const isEven = idx % 2 === 0;
        return (
          <section key={seg.id} id={seg.id} className={`py-24 ${isEven ? "bg-white" : ""}`} style={!isEven ? { background: "#f7f8f9" } : {}}>
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
              <div className={`grid lg:grid-cols-2 gap-16 items-center ${isEven ? "" : ""}`}>
                {/* Text side */}
                <FadeUp className={isEven ? "" : "lg:order-2"}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-px" style={{ background: EMERALD }} />
                    <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: EMERALD, fontFamily: "Montserrat, sans-serif" }}>{seg.tag}</span>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 flex items-center justify-center rounded-sm" style={{ background: "rgba(45,138,107,0.09)" }}>
                      <Icon size={18} style={{ color: EMERALD }} />
                    </div>
                    <span className="text-sm font-bold" style={{ fontFamily: "Montserrat, sans-serif", color: "#999" }}>{seg.label}</span>
                  </div>
                  <h2 className="mb-4" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 800, color: CHARCOAL, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
                    {seg.headline}
                  </h2>
                  <p className="leading-relaxed mb-8" style={{ color: "#666", fontFamily: "Inter, sans-serif", lineHeight: 1.8 }}>{seg.body}</p>

                  <div className="grid grid-cols-2 gap-6 mb-8">
                    {/* Pain points */}
                    <div>
                      <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#bbb", fontFamily: "Montserrat, sans-serif" }}>Your Challenges</p>
                      <ul className="space-y-2">
                        {seg.painPoints.map(p => (
                          <li key={p} className="flex items-start gap-2 text-xs leading-relaxed" style={{ color: "#888", fontFamily: "Inter, sans-serif" }}>
                            <span className="text-red-400 mt-0.5 flex-shrink-0">✕</span> {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* Solutions */}
                    <div>
                      <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: EMERALD, fontFamily: "Montserrat, sans-serif" }}>IFS Solution</p>
                      <ul className="space-y-2">
                        {seg.solutions.map(s => (
                          <li key={s} className="flex items-start gap-2 text-xs leading-relaxed" style={{ color: "#555", fontFamily: "Inter, sans-serif" }}>
                            <CheckCircle size={12} className="flex-shrink-0 mt-0.5" style={{ color: EMERALD }} /> {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <button onClick={onGetEstimate}
                      className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-sm transition-all hover:brightness-110"
                      style={{ background: EMERALD, fontFamily: "Montserrat, sans-serif" }}>
                      Get a Program Estimate <ArrowRight size={13} />
                    </button>
                    <div className="text-right">
                      <div className="text-2xl font-black leading-none" style={{ fontFamily: "Montserrat, sans-serif", color: EMERALD }}>{seg.stat.value}</div>
                      <div className="text-xs mt-0.5" style={{ color: "#999", fontFamily: "Inter, sans-serif" }}>{seg.stat.label}</div>
                    </div>
                  </div>
                </FadeUp>

                {/* Image side */}
                <FadeUp delay={0.12} className={isEven ? "" : "lg:order-1"}>
                  <div className="overflow-hidden rounded-sm bg-gray-100 relative" style={{ height: 420 }}>
                    <img src={seg.img} alt={seg.label} className="w-full h-full object-cover" style={{ filter: "brightness(0.82) contrast(1.05)" }} />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(17,17,17,0.55) 0%, transparent 50%)" }} />
                    <div className="absolute bottom-6 left-6 px-4 py-2 rounded-sm" style={{ background: "rgba(45,138,107,0.95)" }}>
                      <span className="text-white text-xs font-bold tracking-wider uppercase" style={{ fontFamily: "Montserrat, sans-serif" }}>{seg.tag}</span>
                    </div>
                  </div>
                </FadeUp>
              </div>
            </div>
          </section>
        );
      })}

      {/* Bottom CTA */}
      <section className="py-20 relative overflow-hidden" style={{ background: CHARCOAL }}>
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,0.3) 0px, rgba(255,255,255,0.3) 1px, transparent 1px, transparent 12px)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px" style={{ background: EMERALD }} />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: EMERALD, fontFamily: "Montserrat, sans-serif" }}>Ready to Talk?</span>
            <div className="w-8 h-px" style={{ background: EMERALD }} />
          </div>
          <h2 className="text-white mb-4" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.02em" }}>
            Not Sure Which Program Fits?
            <br /><span style={{ color: EMERALD }}>Let&apos;s Find Out Together.</span>
          </h2>
          <p className="text-white/50 mb-10 mx-auto" style={{ fontFamily: "Inter, sans-serif", maxWidth: 480, lineHeight: 1.75 }}>
            Our enterprise team will assess your fleet size, event exposure, and operational needs to design the right IFS program — at no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={onGetEstimate}
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold rounded-sm hover:brightness-110 transition-all"
              style={{ background: EMERALD, color: "#fff", fontFamily: "Montserrat, sans-serif" }}>
              Get a Free Consultation <ArrowRight size={14} />
            </button>
            <a href="tel:+18005551234"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-sm border border-white/25 text-white hover:bg-white/08 transition-all"
              style={{ fontFamily: "Montserrat, sans-serif" }}>
              <Phone size={14} /> 1-800-IFS-FLEET
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
