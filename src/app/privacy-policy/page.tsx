"use client";

import { useEffect } from "react";
import { motion } from "motion/react";

const EMERALD = "#2D8A6B";
const CHARCOAL = "#111111";

const sections = [
  {
    title: "1. Information We Collect",
    body: [
      "When you submit an estimate request, contact form, or emergency response request on this website, we collect the information you provide directly — including your name, company or dealership name, email address, phone number, fleet or unit count, and any details you share about your hail event or service needs.",
      "We do not collect payment information through this website, and we do not use tracking cookies, advertising pixels, or third-party analytics scripts on this site.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    body: [
      "Information submitted through our forms is used solely to respond to your inquiry — to prepare an estimate, schedule a consultation, coordinate emergency hail response, or otherwise fulfill the request you've made.",
      "We do not sell, rent, or trade your personal or business information to third parties for marketing purposes.",
    ],
  },
  {
    title: "3. How We Share Information",
    body: [
      "We may share your information with insurance carriers or adjusters only when necessary to coordinate a claim on your behalf, and only with your knowledge as part of an active service engagement.",
      "We do not otherwise disclose your information to third parties except where required by law.",
    ],
  },
  {
    title: "4. Data Retention",
    body: [
      "We retain estimate requests and contact submissions for as long as reasonably necessary to respond to your inquiry and maintain business records, after which they may be deleted.",
    ],
  },
  {
    title: "5. Your Rights",
    body: [
      "You may request that we delete any personal information you've submitted to us, or ask what information we hold about you, by contacting us using the details below.",
    ],
  },
  {
    title: "6. Security",
    body: [
      "We take reasonable administrative and technical measures to protect the information submitted through this site. However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    title: "7. Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised effective date.",
    ],
  },
  {
    title: "8. Contact Us",
    body: [
      "If you have questions about this Privacy Policy or how your information is handled, contact us at info@ifshail.com or 239.919.7963.",
    ],
  },
];

export default function PrivacyPolicyPage() {
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
              Privacy Policy
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
            International Fleet Solutions (&ldquo;IFS,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;) respects your privacy. This policy explains
            what information we collect through this website, how we use it, and the choices you have.
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
