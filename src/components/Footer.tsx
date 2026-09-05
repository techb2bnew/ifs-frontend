"use client";

import { useState } from "react";
import Link from "next/link";
import { EMERALD, Logo } from "./shared";

const companyLinks: { label: string; href: string }[] = [
  { label: "About Us", href: "/about" },
  { label: "Who We Serve", href: "/who-we-serve" },
  // { label: "Testimonials", href: "/testimonials" },
  { label: "Certifications", href: "/certifications" },
  { label: "Contact", href: "/contact" },
];

const cols: Record<string, string[]> = {
  Company: ["About IFS", "Leadership Team", "Certifications", "Careers", "Press"],
};

function ContactInfo() {
  return (
    <div className="space-y-5">
      <div>
        <p className="text-sm font-bold text-white mb-1" style={{ fontFamily: "Montserrat, sans-serif" }}>Number</p>
        <a href="tel:2399197963" className="text-xs text-white/50 hover:text-white/65 transition-colors" style={{ fontFamily: "Inter, sans-serif" }}>
          239.919.7963
        </a>
      </div>
      <div>
        <p className="text-sm font-bold text-white mb-1" style={{ fontFamily: "Montserrat, sans-serif" }}>Email</p>
        <a href="mailto:info@ifshail.com" className="text-xs text-white/50 hover:text-white/65 transition-colors" style={{ fontFamily: "Inter, sans-serif" }}>
          info@ifshail.com
        </a>
      </div>
      <div>
        <p className="text-sm font-bold text-white mb-1" style={{ fontFamily: "Montserrat, sans-serif" }}>Company Headquarters</p>
        <p className="text-xs text-white/50 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
          728 Northwest Highway, Suite 272<br />Fox River Grove, IL 60021
        </p>
      </div>
      <div>
        <p className="text-sm font-bold text-white mb-1" style={{ fontFamily: "Montserrat, sans-serif" }}>Regional Offices</p>
        <p className="text-xs text-white/50 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
          Bradenton, FL &nbsp;&middot;&nbsp; Austin, TX
        </p>
      </div>
    </div>
  );
}

export default function Footer() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggle = (section: string) =>
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));

  return (
    <footer style={{ background: "#0a0a0a" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="py-16 border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Brand column — same on all screens */}
            <div className="lg:col-span-1">
              <Logo />
              <p className="text-white/50 text-xs leading-relaxed mt-5 max-w-[180px]" style={{ fontFamily: "Inter, sans-serif" }}>
                The enterprise standard for catastrophic hail recovery and paintless dent repair.
              </p>
              <div className="flex items-center gap-3 mt-5">
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
                          <Link
                            href={l.href}
                            className="text-xs text-white/50 hover:text-white/65 transition-colors text-left cursor-pointer"
                            style={{ fontFamily: "Inter, sans-serif" }}
                          >
                            {l.label}
                          </Link>
                        </li>
                      ))
                      : links.map((l) => (
                        <li key={l}><a href="#" className="text-xs text-white/50 hover:text-white/65 transition-colors cursor-pointer" style={{ fontFamily: "Inter, sans-serif" }}>{l}</a></li>
                      ))
                    }
                  </ul>
                </div>
              ))}

              <div>
                <h4 className="text-xs font-semibold tracking-[0.18em] uppercase mb-5" style={{ color: EMERALD, fontFamily: "Montserrat, sans-serif" }}>Contact Us</h4>
                <ContactInfo />
              </div>
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
                            <Link
                              href={l.href}
                              className="text-xs text-white/50 hover:text-white/65 transition-colors text-left"
                              style={{ fontFamily: "Inter, sans-serif" }}
                            >
                              {l.label}
                            </Link>
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

              <div className="border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                <button
                  onClick={() => toggle("Contact Us")}
                  className="w-full flex items-center justify-between py-4"
                >
                  <h4 className="text-xs font-semibold tracking-[0.18em] uppercase" style={{ color: EMERALD, fontFamily: "Montserrat, sans-serif" }}>
                    Contact Us
                  </h4>
                  <svg
                    className="w-4 h-4 text-white/40 transition-transform duration-250"
                    style={{ transform: openSections["Contact Us"] ? "rotate(180deg)" : "rotate(0deg)" }}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: openSections["Contact Us"] ? "400px" : "0px" }}
                >
                  <div className="pb-4">
                    <ContactInfo />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>© 2026 International Fleet Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            {[
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms of Service", href: "/terms-of-service" },
              // { label: "Accessibility", href: "#" },
            ].map((i) => (
              <Link key={i.label} href={i.href} className="text-white/50 text-xs hover:text-white/45 transition-colors" style={{ fontFamily: "Inter, sans-serif" }}>{i.label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
