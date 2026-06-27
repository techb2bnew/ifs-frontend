import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import AboutPage from "./AboutPage";
import ServicesPage from "./ServicesPage";
import WhoWeServePage from "./WhoWeServePage";
import TestimonialsPage from "./TestimonialsPage";
import ContactPage from "./ContactPage";
import CertificationsPage from "./CertificationsPage";
import {
  Menu,
  X,
  ChevronRight,
  ChevronLeft,
  Shield,
  Truck,
  Wrench,
  Building2,
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Star,
  Users,
  Award,
  Clock,
  Send,
} from "lucide-react";

// ─── Brand constants ─────────────────────────────────────────────────────────
const EMERALD = "#2D8A6B";
const CHARCOAL = "#111111";

// ─── Image library ───────────────────────────────────────────────────────────
const IMG = {
  // Hero cycling backgrounds
  heroBg1: "https://images.unsplash.com/photo-1645400379459-f6fd3d963fd4?w=1920&h=1080&fit=crop&auto=format",
  heroBg2: "https://images.unsplash.com/photo-1618418721668-0d1f72aa4bab?w=1920&h=1080&fit=crop&auto=format",
  heroBg3: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&h=1080&fit=crop&auto=format",
  // Hero right panel: PDR technician
  heroTech: "https://images.unsplash.com/photo-1771340012319-0b4fca008b54?w=900&h=1100&fit=crop&auto=format",
  // Services collage
  svc1: "https://images.unsplash.com/photo-1632405862117-236585cfb757?w=800&h=600&fit=crop&auto=format",
  svc2: "https://images.unsplash.com/photo-1769021955466-ed4372792114?w=800&h=600&fit=crop&auto=format",
  svc3: "https://images.unsplash.com/photo-1770656505784-3fad3cd41fcf?w=800&h=600&fit=crop&auto=format",
  svc4: "https://images.unsplash.com/photo-1676018366904-c083ed678e60?w=800&h=600&fit=crop&auto=format",
  // Benefits
  benefitMain: "https://images.unsplash.com/photo-1737649316494-6a32b7fda654?w=1000&h=800&fit=crop&auto=format",
  benefitAccent: "https://images.unsplash.com/photo-1597724903883-84d0be041aa8?w=500&h=500&fit=crop&auto=format",
  // Testimonial avatars
  avatar1: "https://images.unsplash.com/photo-1575145053102-78eb0d5a0f7a?w=200&h=200&fit=crop&auto=format",
  avatar2: "https://images.unsplash.com/photo-1596963829984-c6b749a57108?w=200&h=200&fit=crop&auto=format",
  avatar3: "https://images.unsplash.com/photo-1562101074-ddc04071bdc8?w=200&h=200&fit=crop&auto=format",
  // About Us team
  team1: "https://images.unsplash.com/photo-1767339736147-676bd47eddb6?w=700&h=900&fit=crop&auto=format",
  team2: "https://images.unsplash.com/photo-1758767355046-1986dda2d967?w=700&h=900&fit=crop&auto=format",
  team3: "https://images.unsplash.com/photo-1676018366904-c083ed678e60?w=700&h=900&fit=crop&auto=format",
  teamWide: "https://images.unsplash.com/photo-1771340012319-0b4fca008b54?w=1400&h=700&fit=crop&auto=format",
  // Contact facility
  facility: "https://images.unsplash.com/photo-1771530789155-b1f03fbf82b5?w=1200&h=800&fit=crop&auto=format",
};

// ─── Data ────────────────────────────────────────────────────────────────────
const navLinks = [
  { label: "Services", href: "services" },
  { label: "Who We Serve", href: "who-we-serve" },
  { label: "Testimonials", href: "testimonials" },
  { label: "Certifications", href: "certifications" },
  { label: "About Us", href: "about" },
  { label: "Contact", href: "contact" },
];

const stats = [
  { value: "500K+", label: "Vehicles Restored" },
  { value: "98%", label: "Client Retention Rate" },
  { value: "48 Hr", label: "Average Turnaround" },
  { value: "32", label: "States Covered" },
];

const services = [
  {
    icon: Shield,
    title: "Catastrophic Hail Event Response",
    description:
      "Nationwide rapid-deployment teams mobilize within hours of major hail events. We manage multi-thousand-unit inventories with military-grade logistics and real-time status reporting.",
    tag: "Enterprise Scale",
  },
  {
    icon: Truck,
    title: "Fleet & Inventory Repair",
    description:
      "Purpose-built programs for rental fleets, manufacturer lots, and corporate vehicle pools. Dedicated account managers, volume SLAs, and custom reporting pipelines.",
    tag: "Fleet Focused",
  },
  {
    icon: Wrench,
    title: "Paintless Dent Repair (PDR)",
    description:
      "OEM-grade PDR executed by certified master technicians. No filler, no repaint — factory finish preserved and resale value protected. The gold standard for manufacturers.",
    tag: "OEM Certified",
  },
  {
    icon: Building2,
    title: "Dealership Partnership Programs",
    description:
      "Structured agreements that keep your lot moving. Priority scheduling, guaranteed capacity, and seamless DMS integration so your team focuses on selling.",
    tag: "Dealer Programs",
  },
];

const benefits = [
  { icon: Award, title: "Factory-Original Finish", body: "Zero paint, zero filler. OEM finish preserved at every step." },
  { icon: Clock, title: "48-Hour Guaranteed Turnaround", body: "Across any fleet size. We don't bill until you're satisfied." },
  { icon: CheckCircle, title: "Full Resale Value Protected", body: "PDR leaves no CarFax record. Your assets retain full market value." },
  { icon: Users, title: "Dedicated Account Team", body: "One call, one point of contact — from estimate to handoff." },
];

const testimonials = [
  {
    quote:
      "IFS handled over 4,200 units across our Midwest distribution centers after back-to-back hail events last spring. Their logistics, communication, and output quality were genuinely unprecedented. They're the only vendor we call.",
    name: "Marcus W.",
    title: "VP of Vehicle Operations",
    company: "National Auto Distribution Corp.",
    rating: 5,
    avatar: IMG.avatar2,
  },
  {
    quote:
      "We've tried six PDR vendors in the last decade. International Fleet Solutions operates in a different category entirely. Their technicians, turnaround discipline, and account management make every other provider look amateur.",
    name: "Sandra T.",
    title: "Director of Fleet Asset Management",
    company: "Summit Rental Group — 38,000 Vehicle Fleet",
    rating: 5,
    avatar: IMG.avatar1,
  },
  {
    quote:
      "After a catastrophic hail event wiped out 1,800 units on our lot, IFS was on-site within 36 hours with a full crew. They delivered every vehicle on schedule. Our GM called it the most professional vendor experience in 20 years.",
    name: "David K.",
    title: "General Manager",
    company: "Regional Automotive Group — 12 Franchise Locations",
    rating: 5,
    avatar: IMG.avatar3,
  },
];


// ─── Utility ─────────────────────────────────────────────────────────────────
function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionEyebrow({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="w-8 h-px" style={{ background: EMERALD }} />
      <span
        className="text-xs font-semibold tracking-[0.2em] uppercase"
        style={{ color: EMERALD, fontFamily: "Montserrat, sans-serif" }}
      >
        {label}
      </span>
    </div>
  );
}

function SectionHeading({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <h2
      className="leading-tight"
      style={{
        fontFamily: "Montserrat, sans-serif",
        fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
        fontWeight: 800,
        color: light ? "#fff" : CHARCOAL,
        letterSpacing: "-0.02em",
      }}
    >
      {children}
    </h2>
  );
}

// ─── Logo ────────────────────────────────────────────────────────────────────
function Logo({ reversed = false }: { reversed?: boolean }) {
  const textColor = reversed ? "#ffffff" : CHARCOAL;
  return (
    <div className="flex items-center gap-2.5" style={{ fontFamily: "Montserrat, sans-serif" }}>
      <div className="flex items-center gap-2.5" style={{ fontFamily: "Montserrat, sans-serif" }}>
        <img src="/ifs-logo.png" alt="IFS logo" width={130} className=" " />
      </div>
    </div>
  );
}

// ─── CTA Button ──────────────────────────────────────────────────────────────
function CTAButton({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
}: {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "dark";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
}) {
  const sizes = { sm: "px-5 py-2.5 text-sm", md: "px-7 py-3.5 text-sm", lg: "px-9 py-[1.1rem] text-sm" };
  const base = "inline-flex items-center gap-2 font-semibold tracking-wide transition-all duration-200 cursor-pointer select-none rounded-sm";

  const styles: Record<string, React.CSSProperties> = {
    primary: { background: EMERALD, color: "#fff" },
    outline: { border: "1px solid rgba(255,255,255,0.35)", color: "#fff" },
    dark: { background: CHARCOAL, color: "#fff" },
  };
  const hovers: Record<string, string> = {
    primary: "hover:brightness-110 hover:shadow-lg active:scale-[0.98]",
    outline: "hover:bg-white/10 active:scale-[0.98]",
    dark: "hover:bg-neutral-800 active:scale-[0.98]",
  };

  const handleClick = onClick ?? (href ? () => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }) : undefined);

  return (
    <button className={`${base} ${sizes[size]} ${hovers[variant]} ${className}`} style={styles[variant]} onClick={handleClick}>
      {children}
    </button>
  );
}

// ─── NAV ─────────────────────────────────────────────────────────────────────
function   Nav({ onNavigate, currentPage, onRequestEstimate }: { onNavigate: (page: string) => void; currentPage: string; onRequestEstimate: () => void }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const handleLink = (href: string) => {
    setOpen(false);
    if (!href.startsWith("#")) {
      // Page-level navigation
      onNavigate(href);
    } else {
      if (currentPage !== "home") {
        onNavigate("home");
        setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }), 120);
      } else {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(17,17,17,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between" style={{ height: 72 }}>
        <button onClick={() => onNavigate("home")} className="focus:outline-none">
          <Logo reversed />
        </button>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <button
              key={l.label}
              onClick={() => handleLink(l.href)}
              className="text-sm font-medium tracking-wide transition-colors duration-200 cursor-pointer text-white/55 hover:text-white"
              style={{ color: (currentPage === l.href) ? "#fff" : "rgba(255,255,255,0.65)" }}
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-5">
          <a href="tel:2399197963" className="text-sm text-white/55 hover:text-white transition-colors flex items-center gap-1.5">
            <Phone size={13} /> <span className="font-medium">239.919.7963</span>
          </a>
          <CTAButton onClick={onRequestEstimate} size="sm">
            Get an Estimate <ArrowRight size={13} />
          </CTAButton>
        </div>

        <button className="lg:hidden text-white/80 hover:text-white transition-colors" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden" style={{ background: "rgba(17,17,17,0.98)", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          <div className="px-6 py-6 flex flex-col gap-5">
            {navLinks.map((l) => (
              <button key={l.label} onClick={() => handleLink(l.href)} className="text-left text-sm font-medium text-white/65 hover:text-white transition-colors">
                {l.label}
              </button>
            ))}
            <div className="pt-4 border-t" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
              <CTAButton onClick={onRequestEstimate} size="md">Get an Estimate <ArrowRight size={13} /></CTAButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
function Hero({ onRequestEstimate }: { onRequestEstimate: () => void }) {
  const [bgIndex, setBgIndex] = useState(0);
  const bgImages = [IMG.heroBg1, IMG.heroBg2, IMG.heroBg3];

  useEffect(() => {
    const t = setInterval(() => setBgIndex((i) => (i + 1) % bgImages.length), 5500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: CHARCOAL }}>

      {/* ── Animated crossfade background images ── */}
      <div className="absolute inset-0">
        {bgImages.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0 transition-opacity duration-[2000ms]"
            style={{ opacity: i === bgIndex ? 1 : 0 }}
          >
            <img
              src={src}
              alt=""
              className="w-full h-full object-cover"
              style={{
                opacity: 0.18,
                transform: i === bgIndex ? "scale(1.04)" : "scale(1)",
                transition: "transform 5.5s ease-out",
              }}
            />
          </div>
        ))}

        {/* Gradient overlay — heavier on left for text legibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(110deg, rgba(17,17,17,0.97) 40%, rgba(17,17,17,0.72) 65%, rgba(17,17,17,0.35) 100%)",
          }}
        />

        {/* Subtle emerald glow bottom-left */}
        <div
          className="absolute bottom-0 left-0 w-[60%] h-[40%] opacity-[0.07]"
          style={{ background: `radial-gradient(ellipse at 0% 100%, ${EMERALD}, transparent 70%)` }}
        />

        {/* Animated scanline shimmer */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage: "repeating-linear-gradient(0deg, rgba(255,255,255,0.4) 0px, transparent 1px, transparent 4px)",
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-20 grid lg:grid-cols-12 gap-10 items-center w-full">

        {/* Left: text */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <motion.div
                className="h-px"
                style={{ background: EMERALD }}
                initial={{ width: 0 }}
                animate={{ width: 40 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
              <span
                className="text-xs font-semibold tracking-[0.22em] uppercase"
                style={{ color: EMERALD, fontFamily: "Montserrat, sans-serif" }}
              >
                B2B Fleet Hail Recovery Specialists
              </span>
            </div>
          </motion.div>

          <motion.h1
            className="text-white leading-[1.04] mb-6"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "clamp(2.8rem, 5.5vw, 5rem)",
              fontWeight: 900,
              letterSpacing: "-0.03em",
            }}
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22 }}
          >
            When Hail Happens,
            <br />
            <span style={{ color: EMERALD }}>Trust IFS.</span>
          </motion.h1>

          <motion.p
            className="text-white/58 mb-10 max-w-lg"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(1rem, 1.6vw, 1.15rem)", lineHeight: 1.75 }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.38 }}
          >
            The enterprise standard for catastrophic hail recovery, paintless dent repair, and large-scale inventory
            restoration — trusted by auto manufacturers, national fleets, and franchise dealership groups.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <CTAButton onClick={onRequestEstimate} size="lg">
              Request Enterprise Estimate <ArrowRight size={15} />
            </CTAButton>
            <CTAButton href="#services" variant="outline" size="lg">
              Explore Services
            </CTAButton>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-5 items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.65 }}
          >
            {["BBB Accredited A+", "OEM-Certified PDR", "48-State Coverage", "ISO 9001 Quality"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle size={13} style={{ color: EMERALD }} />
                <span className="text-white/45 text-xs font-medium tracking-wide" style={{ fontFamily: "Inter, sans-serif" }}>
                  {item}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: PDR technician image card */}
        <motion.div
          className="lg:col-span-5 hidden lg:block"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.45 }}
        >
          <div className="relative">
            {/* Main technician image */}
            <div
              className="relative overflow-hidden rounded-sm"
              style={{ border: "1px solid rgba(255,255,255,0.08)", height: 480 }}
            >
              <img
                src={IMG.heroTech}
                alt="IFS certified PDR technician repairing hail damage on a premium vehicle"
                className="w-full h-full object-cover"
                style={{ filter: "brightness(0.85) contrast(1.05)" }}
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(17,17,17,0.7) 0%, transparent 50%)" }}
              />
              {/* Floating label */}
              <div
                className="absolute bottom-6 left-6 right-6 px-5 py-4 rounded-sm"
                style={{ background: "rgba(17,17,17,0.82)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: EMERALD }} />
                  <span className="text-white text-xs font-semibold" style={{ fontFamily: "Montserrat, sans-serif" }}>
                    Certified Master PDR Technicians
                  </span>
                </div>
                <p className="text-white/45 text-xs mt-1.5" style={{ fontFamily: "Inter, sans-serif" }}>
                  OEM-grade paintless dent repair — factory finish guaranteed
                </p>
              </div>
            </div>

            {/* Floating stat chip */}
            <motion.div
              className="absolute -top-5 -right-5 px-5 py-4 rounded-sm"
              style={{ background: EMERALD, boxShadow: `0 12px 40px rgba(45,138,107,0.4)` }}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="text-white font-black text-2xl leading-none" style={{ fontFamily: "Montserrat, sans-serif" }}>
                500K+
              </div>
              <div className="text-white/75 text-xs mt-0.5" style={{ fontFamily: "Inter, sans-serif" }}>
                Vehicles Restored
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-35">
        <div className="w-px h-10" style={{ background: `linear-gradient(to bottom, ${EMERALD}, transparent)`, animation: "pulse 2s infinite" }} />
        <span className="text-white/40 text-xs tracking-widest uppercase" style={{ fontFamily: "Inter, sans-serif" }}>Scroll</span>
      </div>
    </section>
  );
}

// ─── STATS BAR ───────────────────────────────────────────────────────────────
function StatsBar() {
  return (
    <section className="bg-white border-b" style={{ borderColor: "rgba(0,0,0,0.07)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4" style={{ borderLeft: "1px solid rgba(0,0,0,0.07)" }}>
          {stats.map((s) => (
            <div key={s.label} className="px-4 lg:px-8 py-10 border-r border-b lg:border-b-0" style={{ borderColor: "rgba(0,0,0,0.07)" }}>
              <div className="text-4xl font-black mb-1.5 leading-none" style={{ fontFamily: "Montserrat, sans-serif", color: EMERALD }}>
                {s.value}
              </div>
              <div className="text-sm font-medium" style={{ color: "#999", fontFamily: "Inter, sans-serif" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── SERVICES ────────────────────────────────────────────────────────────────
function Services() {
  return (
    <section id="services" className="py-10 lg:py-15 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-10 mb-16">
          <FadeUp>
            <SectionEyebrow label="What We Do" />
            <SectionHeading>
              Enterprise-Grade Repair.
              <br />
              <span style={{ color: EMERALD }}>Built for Scale.</span>
            </SectionHeading>
          </FadeUp>
          <FadeUp delay={0.12} className="flex items-end">
            <p className="text-base leading-relaxed" style={{ color: "#777", fontFamily: "Inter, sans-serif", maxWidth: 440 }}>
              IFS is purpose-built for high-volume operations — engineered for the unique demands of manufacturers,
              fleet operators, and multi-point dealership groups.
            </p>
          </FadeUp>
        </div>

        {/* Main layout: services cards left + image collage right */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">

          {/* Service cards */}
          <div className="grid gap-px bg-gray-100">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <FadeUp key={s.title} delay={i * 0.08}>
                  <div className="bg-white p-8 group hover:bg-gray-50 transition-colors duration-200 cursor-pointer">
                    <div className="flex items-start gap-5">
                      <div className="flex-shrink-0 w-11 h-11 flex items-center justify-center rounded-sm" style={{ background: "rgba(45,138,107,0.09)" }}>
                        <Icon size={20} style={{ color: EMERALD }} />
                      </div>
                      <div className="flex-1">
                        <span className="text-xs font-semibold tracking-widest uppercase px-2 py-0.5 rounded-sm mb-2 inline-block" style={{ color: EMERALD, background: "rgba(45,138,107,0.08)", fontFamily: "Inter, sans-serif" }}>
                          {s.tag}
                        </span>
                        <h3 className="mb-2 font-bold leading-snug" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "1.05rem", color: CHARCOAL }}>
                          {s.title}
                        </h3>
                        <p className="text-sm leading-relaxed" style={{ color: "#888", fontFamily: "Inter, sans-serif" }}>
                          {s.description}
                        </p>
                        <div className="flex items-center gap-1.5 mt-4 text-sm font-semibold group-hover:gap-3 transition-all" style={{ color: EMERALD, fontFamily: "Inter, sans-serif" }}>
                          Learn More <ArrowRight size={13} />
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              );
            })}
          </div>

          {/* PDR image collage */}
          <FadeUp delay={0.18} className="grid grid-cols-2 gap-3 sticky top-28">
            <div className="col-span-2 overflow-hidden rounded-sm bg-gray-100" style={{ height: 240 }}>
              <img
                src={IMG.svc1}
                alt="IFS technicians performing large-scale hail dent restoration on fleet vehicles"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="overflow-hidden rounded-sm bg-gray-100" style={{ height: 160 }}>
              <img
                src={IMG.svc2}
                alt="Precision crease repair on a vehicle panel"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="overflow-hidden rounded-sm bg-gray-100" style={{ height: 160 }}>
              <img
                src={IMG.svc3}
                alt="PDR glue-pulling technique on hail-damaged bumper"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="col-span-2 overflow-hidden rounded-sm bg-gray-100 relative" style={{ height: 180 }}>
              <img
                src={IMG.svc4}
                alt="Dent lifting with specialized PDR rods on a high-end vehicle"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 flex items-end p-5" style={{ background: "linear-gradient(to top, rgba(17,17,17,0.6), transparent)" }}>
                <span className="text-white text-xs font-semibold tracking-wider uppercase" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  PDR · Dent Lifting · Crease Repair · Glue Pull
                </span>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

// ─── WHO WE SERVE ────────────────────────────────────────────────────────────
function WhoWeServe({ onRequestEstimate }: { onRequestEstimate: () => void }) {
  const clients = [
    "Auto Manufacturers", "National Fleet Operators", "Franchise Dealerships",
    "Rental Car Companies", "Corporate Fleets", "Insurance Carriers",
  ];
  return (
    <section id="who-we-serve" className="py-10 lg:py-15 relative overflow-hidden" style={{ background: CHARCOAL }}>
      <div className="absolute inset-0">
        <img src={IMG.heroBg2} alt="" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0" style={{ background: `linear-gradient(to right, ${CHARCOAL} 40%, rgba(17,17,17,0.85))` }} />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeUp>
            <SectionEyebrow label="Who We Serve" />
            <SectionHeading light>
              Organizations That
              <br />
              Can&apos;t Afford
              <br />
              <span style={{ color: EMERALD }}>Downtime.</span>
            </SectionHeading>
            <p className="text-white/52 leading-relaxed mt-5 mb-8" style={{ fontFamily: "Inter, sans-serif", maxWidth: 440 }}>
              When your inventory represents hundreds of millions in assets and every idle day costs revenue,
              you need a partner — not a vendor.
            </p>
            <CTAButton onClick={onRequestEstimate} size="md">Schedule a Consultation <ArrowRight size={14} /></CTAButton>
          </FadeUp>
          <FadeUp delay={0.15} className="grid grid-cols-2 gap-3">
            {clients.map((c) => (
              <div key={c} className="px-5 py-4 rounded-sm border flex items-center gap-3" style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.08)" }}>
                <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: EMERALD }} />
                <span className="text-white/72 text-sm font-medium" style={{ fontFamily: "Inter, sans-serif" }}>{c}</span>
              </div>
            ))}
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

// ─── BENEFITS ────────────────────────────────────────────────────────────────
function Benefits() {
  return (
    <section className="py-10 lg:py-15 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image block */}
          <FadeUp className="relative">
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2 overflow-hidden rounded-sm bg-gray-100" style={{ height: 340 }}>
                <img
                  src={IMG.benefitMain}
                  alt="Satisfied fleet client inspecting perfectly restored vehicle alongside IFS team"
                  className="w-full h-full object-cover"
                  style={{ filter: "brightness(0.95)" }}
                />
              </div>
              <div className="overflow-hidden rounded-sm bg-gray-100 relative" style={{ height: 180 }}>
                <img
                  src={IMG.benefitAccent}
                  alt="Happy customer with their hail-repaired vehicle"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Stat chip overlaid */}
              <div
                className="overflow-hidden rounded-sm flex flex-col items-center justify-center p-6 text-center"
                style={{ background: CHARCOAL, height: 180 }}
              >
                <div className="text-4xl font-black mb-2 leading-none" style={{ fontFamily: "Montserrat, sans-serif", color: EMERALD }}>
                  98%
                </div>
                <div className="text-white/60 text-xs leading-snug" style={{ fontFamily: "Inter, sans-serif" }}>
                  client retention
                  <br />
                  over 30+ years
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div
              className="absolute -bottom-5 left-8 px-6 py-4 rounded-sm flex items-center gap-3"
              style={{ background: EMERALD, boxShadow: `0 16px 40px rgba(45,138,107,0.35)` }}
            >
              <CheckCircle size={18} className="text-white" />
              <span className="text-white text-sm font-semibold" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Zero Paint. Zero Filler. Factory Finish.
              </span>
            </div>
          </FadeUp>

          {/* Benefits list */}
          <div>
            <FadeUp>
              <SectionEyebrow label="Why Choose IFS" />
              <SectionHeading>
                The Results Speak
                <br />
                <span style={{ color: EMERALD }}>For Themselves.</span>
              </SectionHeading>
              <p className="text-base leading-relaxed mt-4 mb-10" style={{ color: "#777", fontFamily: "Inter, sans-serif", maxWidth: 420 }}>
                Every vehicle we touch is returned to pre-event condition — or better. Our clients don&apos;t
                just repair. They recover full asset value.
              </p>
            </FadeUp>

            <div className="space-y-6">
              {benefits.map((b, i) => {
                const Icon = b.icon;
                return (
                  <FadeUp key={b.title} delay={i * 0.09}>
                    <div className="flex items-start gap-5 p-5 rounded-sm border hover:border-emerald-200 transition-colors duration-200" style={{ borderColor: "rgba(0,0,0,0.07)" }}>
                      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-sm" style={{ background: "rgba(45,138,107,0.09)" }}>
                        <Icon size={18} style={{ color: EMERALD }} />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.95rem", color: CHARCOAL }}>
                          {b.title}
                        </h4>
                        <p className="text-sm leading-relaxed" style={{ color: "#888", fontFamily: "Inter, sans-serif" }}>
                          {b.body}
                        </p>
                      </div>
                    </div>
                  </FadeUp>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


// ─── TESTIMONIALS ────────────────────────────────────────────────────────────
function Testimonials() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section id="testimonials" className="py-10 lg:py-15 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <FadeUp className="text-center mb-16">
          <SectionEyebrow label="Client Testimonials" />
          <SectionHeading>
            Trusted by the
            <br />
            <span style={{ color: EMERALD }}>Industry&apos;s Best.</span>
          </SectionHeading>
        </FadeUp>

        {/* BBB + badges row */}
        <FadeUp className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          <div className="p-6 border rounded-sm flex flex-col items-center text-center" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
            <div className="w-14 h-14 rounded-full flex items-center justify-center mb-3 font-black text-xl text-white" style={{ background: CHARCOAL, fontFamily: "Montserrat, sans-serif" }}>A+</div>
            <div className="text-xs font-bold mb-0.5" style={{ color: CHARCOAL, fontFamily: "Montserrat, sans-serif" }}>BBB Accredited</div>
            <div className="text-xs" style={{ color: "#999", fontFamily: "Inter, sans-serif" }}>A+ Rating Since 2004</div>
          </div>
          {[
            { v: "30+", l: "Years Operating", s: "Enterprise-only since day one" },
            { v: "OEM", l: "PDR Certified", s: "Factory-grade standards" },
            { v: "48", l: "States Covered", s: "Rapid deployment nationwide" },
          ].map((b) => (
            <div key={b.l} className="p-6 border rounded-sm flex flex-col items-center text-center" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
              <div className="text-3xl font-black mb-2 leading-none" style={{ fontFamily: "Montserrat, sans-serif", color: EMERALD }}>{b.v}</div>
              <div className="text-xs font-bold mb-0.5" style={{ color: CHARCOAL, fontFamily: "Montserrat, sans-serif" }}>{b.l}</div>
              <div className="text-xs" style={{ color: "#999", fontFamily: "Inter, sans-serif" }}>{b.s}</div>
            </div>
          ))}
        </FadeUp>

        {/* Testimonial slider */}
        <FadeUp>
          <div className="rounded-sm overflow-hidden" style={{ background: CHARCOAL }}>
            <div className="grid lg:grid-cols-3">

              {/* Customer photo panel */}
              <div className="relative overflow-hidden bg-gray-800" style={{ minHeight: 340 }}>
                <img
                  key={t.avatar}
                  src={t.avatar}
                  alt={`${t.name} — satisfied IFS client`}
                  className="w-full h-full object-cover object-top"
                  style={{ filter: "brightness(0.7) grayscale(0.2)", transition: "opacity 0.4s" }}
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to right, transparent 60%, rgba(17,17,17,0.7))" }} />
                {/* Emerald left bar */}
                <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: EMERALD }} />
              </div>

              {/* Quote panel */}
              <div className="lg:col-span-2 p-10 lg:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 mb-6">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={14} fill={EMERALD} style={{ color: EMERALD }} />
                    ))}
                  </div>
                  <blockquote
                    className="text-white/82 leading-relaxed mb-8"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(1rem, 1.4vw, 1.1rem)", lineHeight: 1.8 }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div>
                    <div className="text-sm font-bold text-white" style={{ fontFamily: "Montserrat, sans-serif" }}>{t.name}</div>
                    <div className="text-xs mt-0.5" style={{ color: "#888", fontFamily: "Inter, sans-serif" }}>
                      {t.title} — {t.company}
                    </div>
                  </div>
                </div>

                {/* Controls */}
                <div className="flex items-center gap-4 mt-10">
                  <div className="flex gap-2">
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActive(i)}
                        className="h-0.5 rounded-full transition-all duration-300"
                        style={{ width: i === active ? 28 : 14, background: i === active ? EMERALD : "rgba(255,255,255,0.2)" }}
                        aria-label={`Testimonial ${i + 1}`}
                      />
                    ))}
                  </div>
                  <div className="ml-auto flex gap-2">
                    <button
                      onClick={() => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1))}
                      className="w-9 h-9 rounded-sm border flex items-center justify-center text-white/50 hover:text-white transition-all"
                      style={{ borderColor: "rgba(255,255,255,0.15)" }}
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      onClick={() => setActive((a) => (a + 1) % testimonials.length)}
                      className="w-9 h-9 rounded-sm border flex items-center justify-center text-white/50 hover:text-white transition-all"
                      style={{ borderColor: "rgba(255,255,255,0.15)" }}
                    >
                      <ChevronRight size={16} />
                    </button>
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

// ─── CONTACT ─────────────────────────────────────────────────────────────────
function Contact() {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", fleet: "", message: "" });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-10 lg:py-15" style={{ background: "#f7f8f9" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16">

          {/* Left: facility image + info */}
          <FadeUp>
            <SectionEyebrow label="Contact Us" />
            <SectionHeading>
              Let&apos;s Protect
              <br />
              <span style={{ color: EMERALD }}>Your Inventory.</span>
            </SectionHeading>
            <p className="text-base leading-relaxed mt-4 mb-8" style={{ color: "#777", fontFamily: "Inter, sans-serif", maxWidth: 420 }}>
              Our enterprise team will respond within 2 business hours. For catastrophic hail events,
              call our emergency line for immediate deployment coordination.
            </p>

            {/* Facility image */}
            {/* <div className="overflow-hidden rounded-sm bg-gray-200 mb-8 relative" style={{ height: 260 }}>
              <img
                src={IMG.facility}
                alt="IFS state-of-the-art PDR repair facility with polished floors and modern equipment"
                className="w-full h-full object-cover"
                style={{ filter: "brightness(0.85)" }}
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(17,17,17,0.55) 0%, transparent 50%)" }} />
              <div className="absolute bottom-5 left-5">
                <span className="text-white text-xs font-semibold tracking-wider uppercase" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  IFS Fleet Repair Facility
                </span>
              </div>
            </div> */}

            <div className="space-y-4">
              {[
                { icon: Phone, label: "Main Line", val: "239.919.7963" },
                // { icon: Phone, label: "Emergency Hail Response", val: "1-800-IFS-911" },
                { icon: Mail, label: "Enterprise Inquiries", val: "info@ifshail.com" },
                { icon: MapPin, label: "Headquarters", val: "Dallas, TX — with 48-state coverage" },
              ].map(({ icon: Icon, label, val }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-sm flex-shrink-0 flex items-center justify-center" style={{ background: "rgba(45,138,107,0.09)" }}>
                    <Icon size={15} style={{ color: EMERALD }} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-400 mb-0.5" style={{ fontFamily: "Inter, sans-serif" }}>{label}</div>
                    <div className="text-sm font-medium" style={{ color: CHARCOAL, fontFamily: "Inter, sans-serif" }}>{val}</div>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>

          {/* Right: form */}
          <FadeUp delay={0.15}>
            <div className="bg-white rounded-sm border p-8 lg:p-10" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
              {sent ? (
                <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-5" style={{ background: "rgba(45,138,107,0.1)" }}>
                    <CheckCircle size={32} style={{ color: EMERALD }} />
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "Montserrat, sans-serif", color: CHARCOAL }}>
                    Request Received
                  </h3>
                  <p className="text-sm text-gray-500" style={{ fontFamily: "Inter, sans-serif" }}>
                    Your enterprise team will be in touch within 2 business hours.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-lg font-bold mb-6" style={{ fontFamily: "Montserrat, sans-serif", color: CHARCOAL }}>
                    Request an Enterprise Estimate
                  </h3>
                  <form onSubmit={submit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { key: "name", label: "Full Name", placeholder: "James Harlow", col: 1 },
                        { key: "company", label: "Company / Organization", placeholder: "Acme Fleet Corp.", col: 1 },
                      ].map((f) => (
                        <div key={f.key}>
                          <label className="block text-xs font-semibold mb-1.5" style={{ color: "#555", fontFamily: "Inter, sans-serif" }}>{f.label}</label>
                          <input
                            type="text"
                            placeholder={f.placeholder}
                            value={form[f.key as keyof typeof form]}
                            onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                            required
                            className="w-full px-4 py-3 text-sm rounded-sm border outline-none focus:ring-2 transition-all"
                            style={{ borderColor: "rgba(0,0,0,0.12)", fontFamily: "Inter, sans-serif", focusRingColor: EMERALD } as React.CSSProperties}
                          />
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold mb-1.5" style={{ color: "#555", fontFamily: "Inter, sans-serif" }}>Email Address</label>
                        <input type="email" placeholder="j.harlow@company.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required className="w-full px-4 py-3 text-sm rounded-sm border outline-none transition-all" style={{ borderColor: "rgba(0,0,0,0.12)", fontFamily: "Inter, sans-serif" }} />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold mb-1.5" style={{ color: "#555", fontFamily: "Inter, sans-serif" }}>Phone Number</label>
                        <input type="tel" placeholder="(555) 000-0000" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-3 text-sm rounded-sm border outline-none transition-all" style={{ borderColor: "rgba(0,0,0,0.12)", fontFamily: "Inter, sans-serif" }} />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: "#555", fontFamily: "Inter, sans-serif" }}>Estimated Fleet / Unit Count</label>
                      <select value={form.fleet} onChange={(e) => setForm({ ...form, fleet: e.target.value })} className="w-full px-4 py-3 text-sm rounded-sm border outline-none transition-all bg-white" style={{ borderColor: "rgba(0,0,0,0.12)", fontFamily: "Inter, sans-serif", color: form.fleet ? CHARCOAL : "#aaa" }}>
                        <option value="" disabled>Select unit count</option>
                        {["Under 50 units", "50–250 units", "250–1,000 units", "1,000–5,000 units", "5,000+ units"].map((o) => <option key={o} value={o}>{o}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: "#555", fontFamily: "Inter, sans-serif" }}>Tell Us About Your Situation</label>
                      <textarea
                        rows={4}
                        placeholder="Describe the hail event, affected units, location, timeline requirements..."
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full px-4 py-3 text-sm rounded-sm border outline-none transition-all resize-none"
                        style={{ borderColor: "rgba(0,0,0,0.12)", fontFamily: "Inter, sans-serif" }}
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-white rounded-sm transition-all hover:brightness-110 active:scale-[0.99]"
                      style={{ background: EMERALD, fontFamily: "Montserrat, sans-serif" }}
                    >
                      Submit Enterprise Request <Send size={14} />
                    </button>
                    <p className="text-center text-xs" style={{ color: "#bbb", fontFamily: "Inter, sans-serif" }}>
                      Response within 2 business hours · Emergency line available 24/7
                    </p>
                  </form>
                </>
              )}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

// ─── CTA BAND ────────────────────────────────────────────────────────────────
function CTABand({ onRequestEstimate }: { onRequestEstimate: () => void }) {
  return (
    <section className="py-15 relative overflow-hidden" style={{ background: EMERALD }}>
      <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "repeating-linear-gradient(45deg, rgba(0,0,0,0.4) 0px, rgba(0,0,0,0.4) 1px, transparent 1px, transparent 12px)" }} />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-center justify-between gap-10">
        <div>
          <p className="text-white/65 text-xs font-semibold tracking-[0.2em] uppercase mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Ready to Protect Your Inventory?
          </p>
          <h2 className="text-white leading-tight" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 800, letterSpacing: "-0.02em" }}>
            Get an Enterprise Estimate<br />Within 24 Hours.
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={onRequestEstimate}
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold rounded-sm hover:shadow-xl active:scale-[0.98] transition-all"
            style={{ background: "#fff", color: EMERALD, fontFamily: "Montserrat, sans-serif" }}
          >
            Request Estimate <ArrowRight size={14} />
          </button>
          <a href="tel:2399197963" className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-sm border border-white/30 text-white hover:bg-white/10 transition-all" style={{ fontFamily: "Montserrat, sans-serif" }}>
            <Phone size={14} /> 239.919.7963
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ──────────────────────────────────────────────────────────────────
function Footer({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});
  const companyLinks: { label: string; href: string }[] = [
    { label: "About Us", href: "about" },
    { label: "Who We Serve", href: "who-we-serve" },
    { label: "Testimonials", href: "testimonials" },
    { label: "Certifications", href: "certifications" },
    { label: "Contact", href: "contact" },
  ];
  const cols: Record<string, string[]> = {
    Services: ["Hail Event Response", "Fleet Repair Programs", "Paintless Dent Repair", "Dealership Partnerships", "OEM Programs"],
    Company: ["About IFS", "Leadership Team", "Certifications", "Careers", "Press"],
    // Resources: ["Case Studies", "Event Response Guide", "Industry Reports", "FAQs", "Blog"],
    Contact: ["Get an Estimate", "239.919.7963", "info@ifshail.com", "Find a Location", "Emergency Line"],
  };

  const toggle = (section: string) =>
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));

  return (
    <footer style={{ background: "#0a0a0a" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="py-16 border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Brand column — same on all screens */}
            <div className="lg:col-span-1">
              <Logo reversed />
              <p className="text-white/50 text-xs leading-relaxed mt-5 max-w-[180px]" style={{ fontFamily: "Inter, sans-serif" }}>
                The enterprise standard for catastrophic hail recovery and paintless dent repair.
              </p>
              <div className="flex items-center gap-3 mt-5">
                {/* <div className="w-8 h-8 rounded-sm flex items-center justify-center text-xs font-black" style={{ background: "rgba(45,138,107,0.15)", color: EMERALD, fontFamily: "Montserrat, sans-serif" }}>A+</div>
                <span className="text-white/50 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>BBB Accredited</span> */}
                <img src="/blue-seal.png" alt="Better Business Bureau Accredited" className="h-12" />
              </div>
            </div>

            {/* Desktop: normal grid columns */}
            <div className="hidden lg:contents">
              {Object.entries(cols).map(([section, links]) => (
                <div key={section}> 
                  <h4 className="text-xs font-semibold tracking-[0.18em] uppercase mb-5" style={{ color: EMERALD, fontFamily: "Montserrat, sans-serif" }}>{section}</h4>

                  <ul className="space-y-3">
                    {section === "Company"
                      ? companyLinks.map((l) => (
                        <li key={l.label}>
                          <button
                            onClick={() => { onNavigate(l.href); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                            className="text-xs text-white/50 hover:text-white/65 transition-colors text-left cursor-pointer"
                            style={{ fontFamily: "Inter, sans-serif" }}
                          >
                            {l.label}
                          </button>
                        </li>
                      ))
                      : links.map((l) => (
                        <li key={l}><a href="#" className="text-xs text-white/50 hover:text-white/65 transition-colors cursor-pointer" style={{ fontFamily: "Inter, sans-serif" }}>{l}</a></li>
                      ))
                    }
                  </ul>
                </div>
              ))}
            </div>

            {/* Mobile: accordion */}
            <div className="lg:hidden col-span-full border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
              {Object.entries(cols).map(([section, links]) => (
                <div key={section} className="border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                  <button
                    onClick={() => toggle(section)}
                    className="w-full flex items-center justify-between py-4"
                  >
                    <h4 className="text-xs font-semibold tracking-[0.18em] uppercase" style={{ color: EMERALD, fontFamily: "Montserrat, sans-serif" }}>
                      {section}
                    </h4>
                    <svg
                      className="w-4 h-4 text-white/40 transition-transform duration-250"
                      style={{ transform: openSections[section] ? "rotate(180deg)" : "rotate(0deg)" }}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{ maxHeight: openSections[section] ? "400px" : "0px" }}
                  >
                    <ul className="space-y-3 pb-4">
                       {section === "Company"
                      ? companyLinks.map((l) => (
                        <li key={l.label}>
                          <button
                            onClick={() => { onNavigate(l.href); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                            className="text-xs text-white/50 hover:text-white/65 transition-colors text-left"
                            style={{ fontFamily: "Inter, sans-serif" }}
                          >
                            {l.label}
                          </button>
                        </li>
                      ))
                      : links.map((l) => (
                        <li key={l}><a href="#" className="text-xs text-white/50 hover:text-white/65 transition-colors" style={{ fontFamily: "Inter, sans-serif" }}>{l}</a></li>
                      ))
                    }
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>© 2026 International Fleet Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Accessibility"].map((i) => (
              <a key={i} href="#" className="text-white/50 text-xs hover:text-white/45 transition-colors" style={{ fontFamily: "Inter, sans-serif" }}>{i}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── ROOT ────────────────────────────────────────────────────────────────────
export default function App() {
  type Page = "home" | "services" | "who-we-serve" | "testimonials" | "certifications" | "about" | "contact";
  const [page, setPage] = useState<Page>("home");
  const [modalOpen, setModalOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", fleet: "", message: "" });

  const navigate = (target: string) => {
    const pages: Page[] = ["services", "who-we-serve", "testimonials", "certifications", "about", "contact"];
    if (pages.includes(target as Page)) {
      setPage(target as Page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setPage("home");
    }
  };
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };
  const goToContact = () => {
    setPage("contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen" style={{ fontFamily: "Inter, sans-serif" }}>
      <Nav onNavigate={navigate} currentPage={page} onRequestEstimate={() => setModalOpen(true)} />

      {page === "services" && <><ServicesPage onGetEstimate={goToContact} /><Footer onNavigate={navigate} /></>}
      {page === "who-we-serve" && <><WhoWeServePage onGetEstimate={goToContact} /><Footer onNavigate={navigate} /></>}
      {page === "testimonials" && <><TestimonialsPage onGetEstimate={goToContact} /><Footer onNavigate={navigate} /></>}
      {page === "certifications" && <><CertificationsPage onGetEstimate={goToContact} /><Footer onNavigate={navigate} /></>}
      {page === "about" && <><AboutPage onGoHome={goToContact} /><Footer onNavigate={navigate} /></>}
      {page === "contact" && <><ContactPage /><Footer onNavigate={navigate} /></>}
      {page === "home" && (
        <main>
          <Hero onRequestEstimate={() => setModalOpen(true)} />
          <StatsBar />
          <Services />
          <WhoWeServe onRequestEstimate={() => setModalOpen(true)} />
          <Benefits />
          <Testimonials />
          <Contact />
          <CTABand onRequestEstimate={() => setModalOpen(true)} />
          <Footer onNavigate={navigate} />
        </main>
      )}

      {
        modalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
            onClick={(e) => e.target === e.currentTarget && setModalOpen(false)}
          >
            <div
              className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-sm"
              style={{ background: "#fff" }}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-2 lg:px-8 py-4 border-b" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
                <div>
                  <h2 className="text-lg font-bold" style={{ color: CHARCOAL, fontFamily: "Montserrat, sans-serif" }}>
                    Request an Estimate
                  </h2>
                  <p className="text-xs mt-0.5" style={{ color: "#888", fontFamily: "Inter, sans-serif" }}>
                    Enterprise fleet & hail recovery
                  </p>
                </div>
                <button
                  onClick={() => setModalOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-sm transition-colors hover:bg-black/5"
                >
                  <X size={16} color={CHARCOAL} />
                </button>
              </div>

              {/* Form */}
              <div className="px-2 lg:px-8 py-6">
                {/* 👇 apna existing form yahan paste karo */}
                <form onSubmit={submit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { key: "name", label: "Full Name", placeholder: "James Harlow", col: 1 },
                      { key: "company", label: "Company / Organization", placeholder: "Acme Fleet Corp.", col: 1 },
                    ].map((f) => (
                      <div key={f.key}>
                        <label className="block text-xs font-semibold mb-1.5" style={{ color: "#555", fontFamily: "Inter, sans-serif" }}>{f.label}</label>
                        <input
                          type="text"
                          placeholder={f.placeholder}
                          value={form[f.key as keyof typeof form]}
                          onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                          required
                          className="w-full px-4 py-3 text-sm rounded-sm border outline-none focus:ring-2 transition-all"
                          style={{ borderColor: "rgba(0,0,0,0.12)", fontFamily: "Inter, sans-serif", focusRingColor: EMERALD } as React.CSSProperties}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: "#555", fontFamily: "Inter, sans-serif" }}>Email Address</label>
                      <input type="email" placeholder="j.harlow@company.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required className="w-full px-4 py-3 text-sm rounded-sm border outline-none transition-all" style={{ borderColor: "rgba(0,0,0,0.12)", fontFamily: "Inter, sans-serif" }} />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: "#555", fontFamily: "Inter, sans-serif" }}>Phone Number</label>
                      <input type="tel" placeholder="(555) 000-0000" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-3 text-sm rounded-sm border outline-none transition-all" style={{ borderColor: "rgba(0,0,0,0.12)", fontFamily: "Inter, sans-serif" }} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: "#555", fontFamily: "Inter, sans-serif" }}>Estimated Fleet / Unit Count</label>
                    <select value={form.fleet} onChange={(e) => setForm({ ...form, fleet: e.target.value })} className="w-full px-4 py-3 text-sm rounded-sm border outline-none transition-all bg-white" style={{ borderColor: "rgba(0,0,0,0.12)", fontFamily: "Inter, sans-serif", color: form.fleet ? CHARCOAL : "#aaa" }}>
                      <option value="" disabled>Select unit count</option>
                      {["Under 50 units", "50–250 units", "250–1,000 units", "1,000–5,000 units", "5,000+ units"].map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: "#555", fontFamily: "Inter, sans-serif" }}>Tell Us About Your Situation</label>
                    <textarea
                      rows={4}
                      placeholder="Describe the hail event, affected units, location, timeline requirements..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 text-sm rounded-sm border outline-none transition-all resize-none"
                      style={{ borderColor: "rgba(0,0,0,0.12)", fontFamily: "Inter, sans-serif" }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-white rounded-sm transition-all hover:brightness-110 active:scale-[0.99]"
                    style={{ background: EMERALD, fontFamily: "Montserrat, sans-serif" }}
                  >
                    Submit Enterprise Request <Send size={14} />
                  </button>
                  <p className="text-center text-xs" style={{ color: "#bbb", fontFamily: "Inter, sans-serif" }}>
                    Response within 2 business hours · Emergency line available 24/7
                  </p>
                </form>
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
}
