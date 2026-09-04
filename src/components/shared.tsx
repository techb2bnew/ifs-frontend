export const EMERALD = "#2D8A6B";
export const CHARCOAL = "#111111";

export function Logo() {
  return (
    <div className="flex items-center gap-2.5" style={{ fontFamily: "Montserrat, sans-serif" }}>
      <div className="flex items-center gap-2.5" style={{ fontFamily: "Montserrat, sans-serif" }}>
        <img src="/ifs-logo.png" alt="IFS logo" width={130} />
      </div>
    </div>
  );
}

export function CTAButton({
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
