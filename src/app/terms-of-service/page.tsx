"use client";

import { useEffect } from "react";
import { motion } from "motion/react";

const EMERALD = "#2D8A6B";
const CHARCOAL = "#111111";

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: [
      "By accessing or using this website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use this site.",
    ],
  },
  {
    title: "2. Use of This Website",
    body: [
      "This website is provided to give organizations information about IFS's hail recovery, fleet repair, and paintless dent repair (PDR) services, and to allow prospective clients to request estimates and consultations.",
      "You agree to use this website only for lawful purposes and not to submit false, misleading, or fraudulent information through any form on this site.",
    ],
  },
  {
    title: "3. No Guarantee of Estimate Accuracy",
    body: [
      "Estimates requested through this website are preliminary and based on the information you provide. Final pricing, scope, and turnaround times are confirmed after an on-site or documented assessment and are subject to a separate service agreement.",
    ],
  },
  {
    title: "4. Intellectual Property",
    body: [
      "All content on this website — including text, images, graphics, and logos — is the property of International Fleet Solutions or its licensors and may not be copied, reproduced, or distributed without prior written permission.",
    ],
  },
  {
    title: "5. Third-Party Links",
    body: [
      "This site may reference or link to third-party organizations (such as the Better Business Bureau). We are not responsible for the content or practices of third-party websites.",
    ],
  },
  {
    title: "6. Limitation of Liability",
    body: [
      "This website and its content are provided \"as is\" without warranties of any kind. IFS is not liable for any indirect, incidental, or consequential damages arising from your use of this website.",
    ],
  },
  {
    title: "7. Governing Law",
    body: [
      "These Terms of Service are governed by the laws of the State of Texas, without regard to conflict-of-law principles.",
    ],
  },
  {
    title: "8. Changes to These Terms",
    body: [
      "We may update these Terms of Service from time to time. Continued use of this website after changes are posted constitutes acceptance of the revised terms.",
    ],
  },
  {
    title: "9. Contact Us",
    body: [
      "Questions about these Terms of Service can be directed to info@ifshail.com or 239.919.7963.",
    ],
  },
];

export default function TermsOfServicePage() {
  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, []);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden flex flex-col justify-end" style={{ background: CHARCOAL, minHeight: 320 }}>
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{ background: "linear-gradient(110deg, rgba(17,17,17,1) 60%, rgba(17,17,17,0.9))" }} />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 opacity-[0.06]" style={{ background: `radial-gradient(ellipse at 0% 100%, ${EMERALD}, transparent 65%)` }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-14 w-full">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-3 mb-5">
              <motion.div className="h-px" style={{ background: EMERALD }} initial={{ width: 0 }} animate={{ width: 40 }} transition={{ duration: 0.8, delay: 0.3 }} />
              <span className="text-xs font-semibold tracking-[0.22em] uppercase" style={{ color: EMERALD, fontFamily: "Montserrat, sans-serif" }}>Legal</span>
            </div>
            <h1 className="text-white mb-3" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1.05 }}>
              Terms of Service
            </h1>
            {/* <p className="text-white/50 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
              Effective date: September 5, 2026
            </p> */}
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-10 lg:py-15 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <p className="leading-relaxed mb-12" style={{ color: "#666", fontFamily: "Inter, sans-serif", lineHeight: 1.85, fontSize: "1.05rem" }}>
            These Terms of Service govern your use of the International Fleet Solutions (&ldquo;IFS&rdquo;) website. Please read
            them carefully before using this site.
          </p>

          <div className="space-y-10">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="mb-3" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "1.25rem", fontWeight: 800, color: CHARCOAL, letterSpacing: "-0.01em" }}>
                  {s.title}
                </h2>
                {s.body.map((p, i) => (
                  <p key={i} className="leading-relaxed mb-3 last:mb-0" style={{ color: "#666", fontFamily: "Inter, sans-serif", lineHeight: 1.85 }}>
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
