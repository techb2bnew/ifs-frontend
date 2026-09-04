"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Phone } from "lucide-react";
import { CTAButton, Logo } from "./shared";
import { useEstimateModal } from "./EstimateModal";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Who We Serve", href: "/who-we-serve" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Certifications", href: "/certifications" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { open: openEstimateModal } = useEstimateModal();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

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
        <Link href="/" className="focus:outline-none">
          <Logo />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium tracking-wide transition-colors duration-200 cursor-pointer text-white/55 hover:text-white"
              style={{ color: pathname === l.href ? "#fff" : "rgba(255,255,255,0.65)" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-5">
          <a href="tel:2399197963" className="text-sm text-white/55 hover:text-white transition-colors flex items-center gap-1.5">
            <Phone size={13} /> <span className="font-medium">239.919.7963</span>
          </a>
          <CTAButton onClick={openEstimateModal} size="sm">
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
              <Link key={l.label} href={l.href} onClick={() => setOpen(false)} className="text-left text-sm font-medium text-white/65 hover:text-white transition-colors">
                {l.label}
              </Link>
            ))}
            <div className="pt-4 border-t" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
              <CTAButton onClick={() => { setOpen(false); openEstimateModal(); }} size="md">Get an Estimate <ArrowRight size={13} /></CTAButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
