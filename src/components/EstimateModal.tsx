"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { X, Send } from "lucide-react";
import { EMERALD, CHARCOAL } from "./shared";

type EstimateModalContextValue = { open: () => void };

const EstimateModalContext = createContext<EstimateModalContextValue | null>(null);

export function useEstimateModal() {
  const ctx = useContext(EstimateModalContext);
  if (!ctx) throw new Error("useEstimateModal must be used within EstimateModalProvider");
  return ctx;
}

export function EstimateModalProvider({ children }: { children: ReactNode }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", fleet: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <EstimateModalContext.Provider value={{ open: () => setModalOpen(true) }}>
      {children}

      {modalOpen && (
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
              {sent ? (
                <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-5" style={{ background: "rgba(45,138,107,0.1)" }}>
                    <Send size={24} style={{ color: EMERALD }} />
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "Montserrat, sans-serif", color: CHARCOAL }}>
                    Request Received
                  </h3>
                  <p className="text-sm text-gray-500" style={{ fontFamily: "Inter, sans-serif" }}>
                    Your enterprise team will be in touch within 2 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={submit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { key: "name", label: "Full Name", placeholder: "James Harlow" },
                      { key: "company", label: "Company / Organization", placeholder: "Acme Fleet Corp." },
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
                          style={{ borderColor: "rgba(0,0,0,0.12)", fontFamily: "Inter, sans-serif" }}
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
              )}
            </div>
          </div>
        </div>
      )}
    </EstimateModalContext.Provider>
  );
}
