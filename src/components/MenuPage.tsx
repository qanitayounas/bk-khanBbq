"use client";

import { useScrollReveal } from "./useScrollReveal";

const menuCategories = [
  { label: "Dinner Menu", href: "#" },
  { label: "Lunch Menu", href: "#" },
  { label: "To-Go", href: "#" },
  { label: "Dessert", href: "#" },
  { label: "Tasting Menu", href: "#" },
  { label: "Cocktails", href: "#" },
  { label: "Spirits", href: "#" },
  { label: "Wine", href: "#" },
];

export default function MenuPage() {
  const { ref: menuRef, isVisible: menuVisible } = useScrollReveal(0.1);

  return (
    <section className="relative min-h-screen bg-cream pt-40 md:pt-52 lg:pt-56 pb-20 md:pb-28 overflow-hidden">

      {/* ===== Animated floating flowers / spice petals ===== */}

      {/* Petal 1 - top left, slow drift */}
      <div className="absolute top-[10%] left-[5%] animate-[floatDrift_12s_ease-in-out_infinite] pointer-events-none">
        <div className="w-20 h-20 md:w-28 md:h-28 opacity-[0.45] blur-[0.5px]">
          <svg viewBox="0 0 100 100" fill="none">
            <path d="M50 5 Q70 25 60 50 Q50 75 30 50 Q10 25 50 5Z" stroke="#c9a84c" strokeWidth="1" fill="#c9a84c" fillOpacity="0.25" />
            <path d="M50 5 L50 60" stroke="#c9a84c" strokeWidth="0.5" />
            <circle cx="50" cy="35" r="3" fill="#c9a84c" fillOpacity="0.2" />
          </svg>
        </div>
      </div>

      {/* Petal 2 - top right, float + rotate */}
      <div className="absolute top-[8%] right-[10%] animate-[floatRotate_15s_ease-in-out_infinite] pointer-events-none">
        <div className="w-16 h-16 md:w-24 md:h-24 opacity-[0.40]">
          <svg viewBox="0 0 100 100" fill="none">
            <path d="M50 10 Q75 30 65 55 Q50 80 35 55 Q25 30 50 10Z" stroke="#8B6914" strokeWidth="1.2" fill="#c9a84c" fillOpacity="0.2" />
            <path d="M40 45 Q50 35 60 45 Q50 55 40 45Z" stroke="#8B6914" strokeWidth="0.8" fill="#c9a84c" fillOpacity="0.3" />
          </svg>
        </div>
      </div>

      {/* Petal 3 - mid left, glass glow */}
      <div className="absolute top-[35%] left-[3%] md:left-[8%] animate-[floatGlow_10s_ease-in-out_infinite_1s] pointer-events-none">
        <div className="w-24 h-24 md:w-36 md:h-36 opacity-[0.38] backdrop-blur-[1px]">
          <svg viewBox="0 0 120 120" fill="none">
            <path d="M60 10 Q90 35 75 65 Q60 95 45 65 Q30 35 60 10Z" stroke="#c9a84c" strokeWidth="1" fill="#c9a84c" fillOpacity="0.2" />
            <path d="M60 10 L60 80" stroke="#c9a84c" strokeWidth="0.4" />
            <circle cx="60" cy="45" r="5" stroke="#c9a84c" strokeWidth="0.5" fill="#c9a84c" fillOpacity="0.25" />
            <circle cx="60" cy="45" r="2" fill="#c9a84c" fillOpacity="0.4" />
          </svg>
        </div>
      </div>

      {/* Petal 4 - mid right, slow float */}
      <div className="absolute top-[40%] right-[2%] md:right-[6%] animate-[floatDrift_14s_ease-in-out_infinite_2s] pointer-events-none">
        <div className="w-20 h-20 md:w-32 md:h-32 opacity-[0.40]">
          <svg viewBox="0 0 100 100" fill="none">
            <path d="M50 8 Q78 28 65 58 Q50 88 35 58 Q22 28 50 8Z" stroke="#c9a84c" strokeWidth="1" fill="#c9a84c" fillOpacity="0.2" />
            <path d="M42 50 Q50 40 58 50 Q50 60 42 50Z" stroke="#8B6914" strokeWidth="0.8" fill="#c9a84c" fillOpacity="0.3" />
            <path d="M50 8 L50 70" stroke="#c9a84c" strokeWidth="0.4" />
          </svg>
        </div>
      </div>

      {/* Petal 5 - bottom left */}
      <div className="absolute bottom-[15%] left-[12%] animate-[floatRotate_18s_ease-in-out_infinite_3s] pointer-events-none">
        <div className="w-14 h-14 md:w-22 md:h-22 opacity-[0.42]">
          <svg viewBox="0 0 80 80" fill="none">
            <path d="M40 5 Q60 20 52 42 Q40 65 28 42 Q20 20 40 5Z" stroke="#c9a84c" strokeWidth="1" fill="#c9a84c" fillOpacity="0.25" />
            <circle cx="40" cy="30" r="3" fill="#c9a84c" fillOpacity="0.4" />
          </svg>
        </div>
      </div>

      {/* Petal 6 - bottom right, glow */}
      <div className="absolute bottom-[20%] right-[8%] animate-[floatGlow_13s_ease-in-out_infinite_4s] pointer-events-none">
        <div className="w-18 h-18 md:w-28 md:h-28 opacity-[0.40]">
          <svg viewBox="0 0 100 100" fill="none">
            <path d="M50 8 Q72 25 62 52 Q50 80 38 52 Q28 25 50 8Z" stroke="#c9a84c" strokeWidth="1" fill="#c9a84c" fillOpacity="0.2" />
            <path d="M50 8 L50 65" stroke="#c9a84c" strokeWidth="0.4" />
            <circle cx="50" cy="38" r="4" stroke="#c9a84c" strokeWidth="0.5" fill="#c9a84c" fillOpacity="0.3" />
          </svg>
        </div>
      </div>

      {/* Petal 7 - center top, large slow float */}
      <div className="absolute top-[15%] left-[40%] animate-[floatDrift_16s_ease-in-out_infinite_5s] pointer-events-none">
        <div className="w-12 h-12 md:w-20 md:h-20 opacity-[0.35]">
          <svg viewBox="0 0 80 80" fill="none">
            <path d="M40 5 Q58 18 50 40 Q40 62 30 40 Q22 18 40 5Z" stroke="#8B6914" strokeWidth="0.8" fill="#c9a84c" fillOpacity="0.2" />
          </svg>
        </div>
      </div>

      {/* Petal 8 - bottom center */}
      <div className="absolute bottom-[8%] left-[55%] animate-[floatRotate_11s_ease-in-out_infinite_2.5s] pointer-events-none">
        <div className="w-16 h-16 md:w-24 md:h-24 opacity-[0.38]">
          <svg viewBox="0 0 100 100" fill="none">
            <path d="M50 10 Q70 30 60 55 Q50 80 40 55 Q30 30 50 10Z" stroke="#c9a84c" strokeWidth="1" fill="#c9a84c" fillOpacity="0.2" />
            <circle cx="50" cy="40" r="3" fill="#c9a84c" fillOpacity="0.35" />
          </svg>
        </div>
      </div>

      {/* ===== Glassmorphism floating orbs ===== */}
      <div className="absolute top-[20%] right-[20%] w-32 h-32 md:w-48 md:h-48 rounded-full bg-gold/[0.08] backdrop-blur-sm border border-gold/[0.15] animate-[floatGlow_20s_ease-in-out_infinite] pointer-events-none" />
      <div className="absolute bottom-[25%] left-[15%] w-24 h-24 md:w-40 md:h-40 rounded-full bg-gold/[0.06] backdrop-blur-sm border border-gold/[0.12] animate-[floatDrift_18s_ease-in-out_infinite_3s] pointer-events-none" />
      <div className="absolute top-[55%] right-[30%] w-20 h-20 md:w-28 md:h-28 rounded-full bg-gold/[0.07] backdrop-blur-[2px] border border-gold/[0.12] animate-[floatRotate_22s_ease-in-out_infinite_6s] pointer-events-none" />

      {/* ===== Large decorative spice SVG - center background ===== */}
      <div className="absolute left-1/2 top-1/2 -translate-x-[60%] -translate-y-[45%] opacity-[0.15] pointer-events-none animate-[spinSlow_60s_linear_infinite]">
        <svg width="700" height="700" viewBox="0 0 700 700" fill="none">
          <g transform="translate(350,350)" stroke="#8B6914" strokeWidth="1.5" fill="none">
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
              <g key={angle} transform={`rotate(${angle})`}>
                <path d="M0 -25 Q35 -90 12 -170 Q0 -200 -12 -170 Q-35 -90 0 -25Z" />
                <line x1="0" y1="-25" x2="0" y2="-160" strokeWidth="0.5" />
              </g>
            ))}
            <circle cx="0" cy="0" r="25" />
            <circle cx="0" cy="0" r="10" fill="#8B6914" fillOpacity="0.2" />
          </g>
        </svg>
      </div>

      {/* ===== Main content ===== */}
      <div
        ref={menuRef}
        className={`max-w-6xl mx-auto px-4 md:px-6 relative z-10 transition-all duration-1000 ${
          menuVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 md:gap-10 lg:gap-20">
          {/* Left - Hero image */}
          <div className="flex-1 w-full max-w-xl lg:max-w-2xl">
            <div className="relative group">
              <img
                src="/images/menu.webp"
                alt="BK Khan's BBQ signature spread"
                className="w-full h-auto object-cover shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
              />
              {/* Subtle gold border accent with animation */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold/20 -z-10 transition-all duration-700 group-hover:-bottom-6 group-hover:-right-6 group-hover:border-gold/40" />
              {/* Top-left accent line */}
              <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-gold/30 transition-all duration-700 group-hover:w-20 group-hover:h-20 group-hover:border-gold/50" />
            </div>
          </div>

          {/* Right - Menu categories */}
          <div className="flex-1 flex flex-col items-center lg:items-start gap-5 md:gap-6 lg:pt-8">
            <p className="text-gold-dark text-[10px] md:text-xs tracking-[0.4em] uppercase mb-2">
              Explore Our Menus
            </p>

            {menuCategories.map((cat, i) => (
              <a
                key={cat.label}
                href={cat.href}
                className="group relative transition-all duration-300"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <span className="font-heading text-base md:text-lg lg:text-xl tracking-[0.15em] md:tracking-[0.25em] uppercase text-charcoal/70 group-hover:text-gold-dark transition-colors duration-300">
                  {cat.label}
                </span>
                <span className="block w-0 group-hover:w-full h-px bg-gold transition-all duration-400 mt-1" />
              </a>
            ))}

            {/* Flower pattern - bottom right of menu */}
            <div className="mt-6 self-end opacity-[0.5] animate-[floatGlow_12s_ease-in-out_infinite_1s]">
              <svg width="220" height="220" viewBox="0 0 220 220" fill="none">
                {/* Large flower */}
                <g transform="translate(110,110)">
                  {[0, 36, 72, 108, 144, 180, 216, 252, 288, 324].map((angle) => (
                    <g key={angle} transform={`rotate(${angle})`}>
                      <path d="M0 -12 Q15 -45 5 -85 Q0 -100 -5 -85 Q-15 -45 0 -12Z" stroke="#c9a84c" strokeWidth="1.2" fill="#c9a84c" fillOpacity="0.15" />
                    </g>
                  ))}
                  <circle cx="0" cy="0" r="14" stroke="#c9a84c" strokeWidth="1" fill="#c9a84c" fillOpacity="0.2" />
                  <circle cx="0" cy="0" r="6" fill="#c9a84c" fillOpacity="0.35" />
                </g>
                {/* Small accent petals */}
                <g transform="translate(45,45) scale(0.3)">
                  {[0, 60, 120, 180, 240, 300].map((angle) => (
                    <g key={angle} transform={`rotate(${angle})`}>
                      <path d="M0 -10 Q12 -35 4 -65 Q0 -75 -4 -65 Q-12 -35 0 -10Z" stroke="#c9a84c" strokeWidth="1.5" fill="#c9a84c" fillOpacity="0.2" />
                    </g>
                  ))}
                  <circle cx="0" cy="0" r="10" fill="#c9a84c" fillOpacity="0.25" />
                </g>
                {/* Tiny accent flower */}
                <g transform="translate(175,170) scale(0.22)">
                  {[0, 72, 144, 216, 288].map((angle) => (
                    <g key={angle} transform={`rotate(${angle})`}>
                      <path d="M0 -8 Q10 -30 3 -55 Q0 -65 -3 -55 Q-10 -30 0 -8Z" stroke="#c9a84c" strokeWidth="2" fill="#c9a84c" fillOpacity="0.2" />
                    </g>
                  ))}
                  <circle cx="0" cy="0" r="8" fill="#c9a84c" fillOpacity="0.3" />
                </g>
                {/* Decorative dots and curves */}
                <circle cx="30" cy="180" r="3" fill="#c9a84c" fillOpacity="0.3" />
                <circle cx="190" cy="40" r="2.5" fill="#c9a84c" fillOpacity="0.25" />
                <circle cx="160" cy="200" r="2" fill="#c9a84c" fillOpacity="0.3" />
                <path d="M20 140 Q35 130 45 145" stroke="#c9a84c" strokeWidth="0.8" fill="none" />
                <path d="M170 60 Q185 50 195 65" stroke="#c9a84c" strokeWidth="0.8" fill="none" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Inline keyframes ===== */}
      <style jsx>{`
        @keyframes floatDrift {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-18px) translateX(8px); }
          50% { transform: translateY(-8px) translateX(-6px); }
          75% { transform: translateY(-22px) translateX(4px); }
        }
        @keyframes floatRotate {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-15px) rotate(8deg); }
          50% { transform: translateY(-6px) rotate(-5deg); }
          75% { transform: translateY(-20px) rotate(12deg); }
        }
        @keyframes floatGlow {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.35; }
          50% { transform: translateY(-14px) scale(1.08); opacity: 0.5; }
        }
        @keyframes spinSlow {
          0% { transform: translate(-60%, -45%) rotate(0deg); }
          100% { transform: translate(-60%, -45%) rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
