"use client";

import ScrollReveal from "./ScrollReveal";

export default function Welcome() {
  return (
    <section className="section-padding bg-bg-primary relative">
      {/* Subtle decorative corners */}
      <div className="absolute top-12 left-12 w-20 h-20 border-t border-l border-border opacity-20 hidden md:block" />
      <div className="absolute bottom-12 right-12 w-20 h-20 border-b border-r border-border opacity-20 hidden md:block" />

      <div className="max-w-3xl mx-auto px-6 text-center">
        <ScrollReveal>
          <div className="ornament mb-8">
            <span className="font-[family-name:var(--font-sans)] text-[10px] font-light tracking-[5px] uppercase text-gold">
              Welcome
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold italic text-cream leading-[1.3] mb-8">
            A Culinary Journey Through
            <br />
            <span className="text-gradient-gold">Flame & Tradition</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="w-[1px] h-10 bg-gradient-to-b from-gold/0 via-gold to-gold/0 mx-auto mb-8" />
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <p className="font-[family-name:var(--font-body)] text-lg md:text-xl text-text-secondary font-light leading-[1.9] italic">
            At BK Khan&apos;s BBQ, we honor the ancient art of fire and smoke.
            Our pitmasters transform premium cuts into extraordinary
            experiences through time-honored techniques and an unwavering
            devotion to craft. Every dish that leaves our kitchen carries
            the warmth of tradition and the spark of innovation.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={550}>
          <div className="mt-10 flex items-center justify-center gap-4">
            <div className="w-12 h-[1px] bg-gold/30" />
            <span className="font-[family-name:var(--font-heading)] text-sm italic text-gold">
              Est. 2024
            </span>
            <div className="w-12 h-[1px] bg-gold/30" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
