import type { Metadata } from "next";
import "../styles/index.css";
import { EstimateModalProvider } from "@/components/EstimateModal";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Corporate Homepage for IFS",
  description:
    "Delivers a premium corporate homepage showcasing elite hail repair and paintless dent services for auto manufacturers, fleets, and dealerships.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ minHeight: "100%", margin: 0 }}>
        <EstimateModalProvider>
          <div className="min-h-screen" style={{ fontFamily: "Inter, sans-serif" }}>
            <Nav />
            {children}
            <Footer />
          </div>
        </EstimateModalProvider>
      </body>
    </html>
  );
}
