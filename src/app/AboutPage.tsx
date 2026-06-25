import { useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  CheckCircle,
  Star,
  ArrowRight,
  Shield,
  Users,
  Clock,
  Award,
  FileText,
  Zap,
  Phone,
} from "lucide-react";

const EMERALD = "#2D8A6B";
const CHARCOAL = "#111111";

// ─── Images ──────────────────────────────────────────────────────────────────
const IMG = {
  heroBg: "https://images.unsplash.com/photo-1618418721668-0d1f72aa4bab?w=1920&h=900&fit=crop&auto=format",
  story: "https://images.unsplash.com/photo-1758519288905-38b7b00c1023?w=1000&h=700&fit=crop&auto=format",
  storyAccent: "https://images.unsplash.com/photo-1768333220819-1fd1b4feacee?w=700&h=500&fit=crop&auto=format",
  teamWide: "https://images.unsplash.com/photo-1771340012319-0b4fca008b54?w=1400&h=600&fit=crop&auto=format",
  tech1: "https://images.unsplash.com/photo-1767339736147-676bd47eddb6?w=600&h=800&fit=crop&auto=format",
  tech2: "https://images.unsplash.com/photo-1758767355046-1986dda2d967?w=600&h=800&fit=crop&auto=format",
  facility: "https://images.unsplash.com/photo-1771530789155-b1f03fbf82b5?w=1200&h=700&fit=crop&auto=format",
  avatar1: "https://images.unsplash.com/photo-1575145053102-78eb0d5a0f7a?w=200&h=200&fit=crop&auto=format",
  avatar2: "https://images.unsplash.com/photo-1596963829984-c6b749a57108?w=200&h=200&fit=crop&auto=format",
  avatar3: "https://images.unsplash.com/photo-1562101074-ddc04071bdc8?w=200&h=200&fit=crop&auto=format",
};

// ─── Utility components ───────────────────────────────────────────────────────
function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-8 h-px" style={{ background: EMERALD }} />
      <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: EMERALD, fontFamily: "Montserrat, sans-serif" }}>
        {label}
      </span>
    </div>
  );
}

function Heading({ children, light = false, size = "lg" }: { children: React.ReactNode; light?: boolean; size?: "sm" | "md" | "lg" }) {
  const sizes = { sm: "clamp(1.4rem, 2vw, 1.75rem)", md: "clamp(1.75rem, 2.8vw, 2.2rem)", lg: "clamp(2rem, 3.5vw, 2.8rem)" };
  return (
    <h2 style={{ fontFamily: "Montserrat, sans-serif", fontSize: sizes[size], fontWeight: 800, color: light ? "#fff" : CHARCOAL, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
      {children}
    </h2>
  );
}

// ─── ABOUT HERO ───────────────────────────────────────────────────────────────
function AboutHero() {
  return (
    <section className="relative overflow-hidden flex items-end" style={{ background: CHARCOAL, minHeight: 480 }}>
      <div className="absolute inset-0">
        <img src={IMG.heroBg} alt="" className="w-full h-full object-cover opacity-20" style={{ filter: "grayscale(0.3)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(17,17,17,0.95) 50%, rgba(17,17,17,0.5))" }} />
        <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: "linear-gradient(to top, rgba(17,17,17,1), transparent)" }} />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 opacity-[0.08]" style={{ background: `radial-gradient(ellipse at 0% 100%, ${EMERALD}, transparent 65%)` }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-20 pt-40 w-full">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="flex items-center gap-3 mb-6">
            <motion.div className="h-px" style={{ background: EMERALD }} initial={{ width: 0 }} animate={{ width: 40 }} transition={{ duration: 0.7, delay: 0.3 }} />
            <span className="text-xs font-semibold tracking-[0.22em] uppercase" style={{ color: EMERALD, fontFamily: "Montserrat, sans-serif" }}>
              About International Fleet Solutions
            </span>
          </div>
          <h1
            className="text-white mb-5"
            style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1.05, maxWidth: 780 }}
          >
            Your Partner in
            <br />
            <span style={{ color: EMERALD }}>Hail Damage Repair.</span>
          </h1>
          <p className="text-white/55 max-w-2xl leading-relaxed" style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)", lineHeight: 1.75 }}>
            When hail strikes, you need a partner you can trust to get your fleet back on the road quickly and efficiently.
            At IFS, we are that partner — a premier hail repair company specializing in large-scale inventory restoration
            for manufacturers, fleet companies, and dealerships.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── AT-A-GLANCE ─────────────────────────────────────────────────────────────
const glanceItems = [
  { icon: Award, stat: "30+", label: "Years of Experience", body: "More than 30 years in the auto industry." },
  { icon: Users, stat: "On-Site", label: "Management & QC", body: "Quality control team on-site from start to finish." },
  { icon: Shield, stat: "A+", label: "BBB Rating", body: "Long-standing Better Business Bureau accreditation." },
  { icon: Clock, stat: "Rapid", label: "Response Time", body: "Experts on-site within hours of a hail event." },
  { icon: FileText, stat: "Full", label: "Insurance Coordination", body: "We work directly with your insurer for proper adjustments." },
  { icon: Zap, stat: "Proactive", label: "Hail Planning", body: "Partner with dealers to increase profitability after events." },
];

function AtAGlance() {
  return (
    <section className="py-10 lg:py-28 border-b" style={{ borderColor: "rgba(0,0,0,0.07)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <FadeUp className="text-center mb-14">
          <Eyebrow label="IFS At-A-Glance" />
          <Heading>
            Everything You Need,
            <br />
            <span style={{ color: EMERALD }}>Nothing You Don&apos;t.</span>
          </Heading>
          <p className="text-base leading-relaxed mt-4 mx-auto max-w-xl" style={{ color: "#777", fontFamily: "Inter, sans-serif" }}>
            At IFS, we understand that the little things matter — attention to detail is the foundation of every repair we deliver.
          </p>
        </FadeUp>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100">
          {glanceItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <FadeUp key={item.label} delay={i * 0.07}>
                <div className="bg-white p-8 h-full group hover:bg-gray-50 transition-colors">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-sm" style={{ background: "rgba(45,138,107,0.08)" }}>
                      <Icon size={20} style={{ color: EMERALD }} />
                    </div>
                    <div>
                      <div className="text-2xl font-black mb-0.5 leading-none" style={{ fontFamily: "Montserrat, sans-serif", color: EMERALD }}>
                        {item.stat}
                      </div>
                      <div className="text-sm font-bold mb-2" style={{ fontFamily: "Montserrat, sans-serif", color: CHARCOAL }}>
                        {item.label}
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: "#888", fontFamily: "Inter, sans-serif" }}>
                        {item.body}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── OUR STORY ───────────────────────────────────────────────────────────────
const storyStats = [
  { value: "30yr", label: "Experience" },
  { value: "On-Site", label: "Management & QC Team" },
  { value: "Trained", label: "Hail & Headliner Technicians" },
  { value: "Insurance", label: "Coordination" },
  { value: "Proactive", label: "Hail Planning" },
  { value: "Rapid", label: "Quick Response" },
  { value: "A+", label: "BBB Rating" },
];

function OurStory() {
  return (
    <section className="py-10 lg:py-28 bg-white" style={{ background: "#f7f8f9" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Images */}
          <FadeUp className="relative">
            <div className="grid grid-cols-3 gap-3">
              <div className="col-span-3 overflow-hidden rounded-sm bg-gray-200" style={{ height: 320 }}>
                <img
                  src={IMG.story}
                  alt="IFS leadership partnering with fleet clients"
                  className="w-full h-full object-cover"
                  style={{ filter: "brightness(0.88)" }}
                />
              </div>
              <div className="col-span-2 overflow-hidden rounded-sm bg-gray-200" style={{ height: 200 }}>
                <img
                  src={IMG.storyAccent}
                  alt="Car lot assessment after a hail event"
                  className="w-full h-full object-cover"
                  style={{ filter: "brightness(0.82)" }}
                />
              </div>
              {/* Stat chip */}
              <div className="overflow-hidden rounded-sm flex flex-col items-center justify-center p-5 text-center" style={{ background: CHARCOAL }}>
                <div className="text-4xl font-black leading-none mb-1" style={{ fontFamily: "Montserrat, sans-serif", color: EMERALD }}>30+</div>
                <div className="text-white/50 text-xs leading-snug" style={{ fontFamily: "Inter, sans-serif" }}>Years in the<br />Auto Industry</div>
              </div>
            </div>

            {/* Floating badge */}
            <div
              className="absolute -bottom-5 left-6 px-6 py-3.5 rounded-sm flex items-center gap-3"
              style={{ background: EMERALD, boxShadow: `0 14px 36px rgba(45,138,107,0.3)` }}
            >
              <Award size={16} className="text-white" />
              <span className="text-white text-sm font-bold" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Founded on Quality, Efficiency & Service
              </span>
            </div>
          </FadeUp>

          {/* Story text */}
          <div>
            <FadeUp delay={0.1}>
              <Eyebrow label="Our Story" />
              <Heading>
                30 Years of
                <br />
                <span style={{ color: EMERALD }}>Proven Process.</span>
              </Heading>
              <p className="leading-relaxed mt-5 mb-6" style={{ color: "#666", fontFamily: "Inter, sans-serif", lineHeight: 1.8 }}>
                With over 30 years of experience in the automotive industry, IFS was founded on the principles of quality,
                efficiency, and exceptional customer service. We understand the significant disruption that hail damage
                can cause to your business.
              </p>
              <p className="leading-relaxed mb-10" style={{ color: "#666", fontFamily: "Inter, sans-serif", lineHeight: 1.8 }}>
                That&apos;s why we&apos;ve developed a proven process to manage every aspect of the repair — from initial
                damage assessment to the final quality control check. Our team of highly-trained technicians and on-site
                managers are dedicated to restoring your vehicles to their pre-storm condition with minimal downtime.
              </p>
            </FadeUp>

            {/* Story pillars grid */}
            <FadeUp delay={0.18}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                {storyStats.map((s) => (
                  <div
                    key={s.label}
                    className="flex items-center gap-2 px-2 py-3 rounded-sm border"
                    style={{ borderColor: "rgba(0,0,0,0.07)", background: "#fff" }}
                  >
                    <CheckCircle size={14} style={{ color: EMERALD, flexShrink: 0 }} />
                    <div>
                      <span className="text-xs font-black mr-1.5 leading-none" style={{ fontFamily: "Montserrat, sans-serif", color: EMERALD }}>{s.value}</span>
                      <span className="text-xs font-medium" style={{ color: "#777", fontFamily: "Inter, sans-serif" }}>{s.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── WHY CHOOSE IFS ───────────────────────────────────────────────────────────
const whyRows = [
  { feature: "Rapid Response Team", benefit: "Our experts are on-site within hours to assess the damage and begin the recovery process — minimizing your downtime and asset depreciation." },
  { feature: "Paintless Dent Repair (PDR)", benefit: "A cost-effective and environmentally friendly technique that preserves the factory finish of your vehicles and protects full resale value." },
  { feature: "On-Site Management", benefit: "Our dedicated on-site managers oversee every vehicle from intake to final QC sign-off — no job gets lost in the queue." },
  { feature: "Insurance Coordination", benefit: "We work directly with your insurance provider to ensure a smooth and efficient claims process with proper adjustments." },
  { feature: "Proactive Hail Planning", benefit: "We partner with you to develop a proactive plan to minimize future hail-related disruptions and maximize profitability post-event." },
  { feature: "A+ BBB Rating", benefit: "Our long-standing accreditation with the Better Business Bureau reflects our unwavering commitment to customer satisfaction." },
];

function WhyChooseIFS() {
  return (
    <section className="py-10 lg:py-28 bg-white bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <FadeUp className="grid lg:grid-cols-2 gap-10 mb-16">
          <div>
            <Eyebrow label="Why Choose IFS" />
            <Heading>
              We Know You Have
              <br />
              <span style={{ color: EMERALD }}>a Choice.</span>
            </Heading>
          </div>
          <div className="flex items-end">
            <p className="text-base leading-relaxed max-w-md" style={{ color: "#777", fontFamily: "Inter, sans-serif" }}>
              Here&apos;s what sets International Fleet Solutions apart from every other hail repair vendor in the market.
            </p>
          </div>
        </FadeUp>

        {/* Feature/Benefit table */}
        <div className="border rounded-sm overflow-hidden" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
          {/* Header row */}
          <div className="grid grid-cols-5 border-b" style={{ borderColor: "rgba(0,0,0,0.08)", background: CHARCOAL }}>
            <div className="col-span-2 px-8 py-4">
              <span className="text-xs font-bold tracking-widest uppercase text-white/50" style={{ fontFamily: "Montserrat, sans-serif" }}>Feature</span>
            </div>
            <div className="col-span-3 px-8 py-4 border-l" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
              <span className="text-xs font-bold tracking-widest uppercase text-white/50" style={{ fontFamily: "Montserrat, sans-serif" }}>Benefit</span>
            </div>
          </div>

          {whyRows.map((row, i) => (
            <FadeUp key={row.feature} delay={i * 0.06}>
              <div
                className="grid grid-cols-5 border-b group hover:bg-gray-50 transition-colors"
                style={{ borderColor: "rgba(0,0,0,0.06)" }}
              >
                <div className="col-span-2 px-3 py-5 flex items-center gap-3 border-r" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
                  <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: EMERALD }} />
                  <span className="text-sm font-bold" style={{ fontFamily: "Montserrat, sans-serif", color: CHARCOAL }}>
                    {row.feature}
                  </span>
                </div>
                <div className="col-span-3 px-8 py-5 flex items-center">
                  <p className="text-sm leading-relaxed" style={{ color: "#666", fontFamily: "Inter, sans-serif" }}>
                    {row.benefit}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────
const philLongQuote =
  "When it comes to hail repair, we choose International Fleet Solutions, Inc. (IFS) as our preferred vendor of choice. IFS brings a level of professionalism that we have come to count on for the last 5 years running. We strongly believe that if your dealership is affected by a hail storm, you would be well served by hiring International Fleet Solutions, Inc. to handle the repairs.";

const recLetterQuote =
  "The IFS team impressed me with their professionalism & expertise in this area, from the onset and through completion — including serving as our intermediary between the insurance company to ensure fairness in claims processed, and by quality control upon completion. It has been a sincere pleasure dealing with you and every member of your organization.";

const clientTestimonials = [
  { quote: philLongQuote, name: "Phil Long Dealerships", location: "Colorado Springs, CO", avatar: IMG.avatar2, initials: "PL" },
  { quote: philLongQuote, name: "Phil Long Dealerships", location: "Colorado Springs, CO", avatar: IMG.avatar1, initials: "PL" },
  { quote: philLongQuote, name: "Phil Long Dealerships", location: "Colorado Springs, CO", avatar: IMG.avatar3, initials: "PL" },
];

function ClientTestimonials() {
  return (
    <section className="py-10 lg:py-28  " style={{ background: "#f7f8f9" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <FadeUp className="text-center mb-6">
          <Eyebrow label="Client Testimonials" />
          <Heading>
            IFS Clients
          </Heading>
          <p className="text-base mt-3 max-w-lg mx-auto" style={{ color: "#777", fontFamily: "Inter, sans-serif" }}>
            Our goal is always to make sure our customers are happy. See what the people we have worked for have to say about their experiences with IFS.
          </p>
        </FadeUp>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {clientTestimonials.map((t, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div className="bg-white border rounded-sm p-7 flex flex-col h-full" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, si) => (
                    <Star key={si} size={13} fill={EMERALD} style={{ color: EMERALD }} />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-sm leading-relaxed flex-1 mb-6" style={{ color: "#555", fontFamily: "Inter, sans-serif", lineHeight: 1.8 }}>
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Attribution */}
                <div className="flex items-center gap-3 pt-5 border-t" style={{ borderColor: "rgba(0,0,0,0.07)" }}>
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover object-top flex-shrink-0"
                    style={{ filter: "grayscale(0.2)" }}
                  />
                  <div>
                    <div className="text-sm font-bold" style={{ fontFamily: "Montserrat, sans-serif", color: CHARCOAL }}>
                      {t.name}
                    </div>
                    <div className="text-xs" style={{ color: "#999", fontFamily: "Inter, sans-serif" }}>
                      {t.location}
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Recommendation Letter highlight */}
        <FadeUp>
          <div className="relative rounded-sm overflow-hidden" style={{ background: CHARCOAL }}>
            {/* Left emerald accent */}
            <div className="absolute left-0 top-0 bottom-0 w-1.5" style={{ background: EMERALD }} />

            <div className="grid lg:grid-cols-3 items-stretch">
              {/* Left label panel */}
              <div
                className="hidden lg:flex flex-col items-start justify-center p-12"
                style={{ background: "rgba(45,138,107,0.07)", borderRight: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div
                  className="w-14 h-14 flex items-center justify-center rounded-sm mb-5"
                  style={{ background: "rgba(45,138,107,0.18)" }}
                >
                  <FileText size={24} style={{ color: EMERALD }} />
                </div>
                <div className="text-xs font-bold tracking-[0.2em] uppercase mb-2" style={{ color: EMERALD, fontFamily: "Montserrat, sans-serif" }}>
                  Recommendation
                </div>
                <div className="text-white text-lg font-black leading-tight" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Letter
                </div>
                <p className="text-white/40 text-xs mt-3 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                  From a satisfied enterprise client
                </p>
              </div>

              {/* Quote */}
              <div className="lg:col-span-2 p-10 lg:p-14 flex flex-col justify-center">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill={EMERALD} style={{ color: EMERALD }} />
                  ))}
                </div>
                <blockquote
                  className="text-white/85 leading-relaxed mb-8"
                  style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(1rem, 1.4vw, 1.1rem)", lineHeight: 1.85, fontStyle: "italic" }}
                >
                  &ldquo;{recLetterQuote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0" style={{ background: EMERALD, fontFamily: "Montserrat, sans-serif" }}>
                    EC
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white" style={{ fontFamily: "Montserrat, sans-serif" }}>Enterprise Client</div>
                    <div className="text-xs" style={{ color: "#888", fontFamily: "Inter, sans-serif" }}>
                      Formal Recommendation Letter — on file
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

// ─── ABOUT CTA ────────────────────────────────────────────────────────────────
function AboutCTA({ onGoHome }: { onGoHome: () => void }) {
  return (
    <section className="py-10 lg:py-28 relative overflow-hidden" style={{ background: EMERALD }}>
      <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "repeating-linear-gradient(45deg, rgba(0,0,0,0.4) 0px, rgba(0,0,0,0.4) 1px, transparent 1px, transparent 12px)" }} />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-center justify-between gap-10">
        <div>
          <p className="text-white/65 text-xs font-semibold tracking-[0.2em] uppercase mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Need More Info or Ready for an Estimate?
          </p>
          <h2 className="text-white leading-tight" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 800, letterSpacing: "-0.02em" }}>
            Let&apos;s Protect
            <br />
            Your Inventory Today.
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={onGoHome}
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold rounded-sm hover:shadow-xl active:scale-[0.98] transition-all"
            style={{ background: "#fff", color: EMERALD, fontFamily: "Montserrat, sans-serif" }}
          >
            Get an Estimate <ArrowRight size={14} />
          </button>
          <a href="tel:+18005551234" className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-sm border border-white/30 text-white hover:bg-white/10 transition-all" style={{ fontFamily: "Montserrat, sans-serif" }}>
            <Phone size={14} /> 1-800-IFS-FLEET
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── ABOUT PAGE ROOT ─────────────────────────────────────────────────────────
export default function AboutPage({ onGoHome }: { onGoHome: () => void }) {
  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, []);

  return (
    <div>
      <AboutHero />
      <AtAGlance />
      <OurStory />
      <WhyChooseIFS />
      <ClientTestimonials />
      <AboutCTA onGoHome={onGoHome} />
    </div>
  );
}
