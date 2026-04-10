"use client";

import ScrollReveal from "./ScrollReveal";

const accolades = [
  {
    source: "Houston Chronicle",
    quote: "A masterclass in the art of barbecue — BK Khan's elevates the craft to fine dining heights.",
    year: "2024",
  },
  {
    source: "Texas Monthly",
    quote: "Bold, soulful, and utterly unforgettable. This is BBQ at its most refined.",
    year: "2024",
  },
  {
    source: "Eater Houston",
    quote: "The most exciting addition to Houston's dining scene this year.",
    year: "2024",
  },
];

const awards = [
  "Best New Restaurant 2024",
  "Pitmaster of the Year",
  "Top 10 BBQ in Texas",
  "Critics' Choice Award",
];

export default function Accolades() {
  return (
    <section className="section-padding bg-bg-tertiary relative">
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "radial-gradient(var(--color-gold) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12">
        <ScrollReveal>
          <div className="text-center mb-20">
            <div className="ornament mb-8">
              <span className="font-[family-name:var(--font-sans)] text-[10px] font-light tracking-[5px] uppercase text-gold">
                Recognition
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold italic text-cream leading-[1.2]">
              Accolades & Press
            </h2>
          </div>
        </ScrollReveal>

        {/* Awards strip */}
        <ScrollReveal delay={200}>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 mb-20">
            {awards.map((award) => (
              <div key={award} className="flex items-center gap-3">
                <svg width="8" height="8" viewBox="0 0 8 8">
                  <path d="M4 0L5 3L8 4L5 5L4 8L3 5L0 4L3 3Z" fill="currentColor" className="text-gold" />
                </svg>
                <span className="font-[family-name:var(--font-sans)] text-[11px] tracking-[2px] uppercase text-text-secondary">
                  {award}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Press quotes */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {accolades.map((item, i) => (
            <ScrollReveal key={item.source} delay={i * 150 + 300}>
              <div className="border border-border p-8 md:p-10 hover:border-gold/30 transition-all duration-500 group h-full flex flex-col bg-bg-primary/30">
                {/* Quote mark */}
                <div className="font-[family-name:var(--font-heading)] text-[60px] leading-none text-gold/20 group-hover:text-gold/40 transition-colors duration-500 mb-2">
                  &ldquo;
                </div>
                <p className="font-[family-name:var(--font-body)] text-lg text-text-secondary font-light italic leading-[1.8] flex-1 -mt-4">
                  {item.quote}
                </p>
                <div className="mt-8 pt-6 border-t border-border">
                  <div className="font-[family-name:var(--font-sans)] text-[11px] tracking-[2px] uppercase text-gold">
                    {item.source}
                  </div>
                  <div className="font-[family-name:var(--font-sans)] text-[10px] tracking-[2px] text-text-muted mt-1">
                    {item.year}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
