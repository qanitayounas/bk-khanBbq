"use client";

import SectionDivider from "./SectionDivider";
import { useScrollReveal } from "./useScrollReveal";

export default function About() {
  const { ref: ref1, isVisible: v1 } = useScrollReveal();
  const { ref: ref2, isVisible: v2 } = useScrollReveal();

  return (
    <section id="about" className="relative py-28 md:py-36 bg-dark">
      {/* Decorative corner elements */}
      <div className="absolute top-12 left-12 w-24 h-24 border-t border-l border-gold/10" />
      <div className="absolute bottom-12 right-12 w-24 h-24 border-b border-r border-gold/10" />

      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref1} className={`text-center mb-20 ${v1 ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="text-gold/70 text-xs tracking-[0.5em] uppercase mb-4">
            Welcome to
          </p>
          <h2 className="font-[var(--font-heading)] text-4xl md:text-5xl lg:text-6xl text-cream tracking-wide">
            Musaafer
          </h2>
          <p className="text-gold/50 text-sm tracking-[0.3em] uppercase mt-3 italic">
            &ldquo;The Traveler&rdquo;
          </p>
          <div className="flex justify-center mt-6">
            <SectionDivider />
          </div>
        </div>

        <div ref={ref2} className={`grid md:grid-cols-2 gap-12 lg:gap-20 items-center ${v2 ? "animate-fade-in-up" : "opacity-0"}`}>
          {/* Image Side */}
          <div className="relative group">
            <div className="img-zoom rounded-sm overflow-hidden aspect-[3/4] md:aspect-[4/5] lg:aspect-[3/4]">
              <img
                src="https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&q=80"
                alt="Elegant dining interior"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating accent frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold/20 rounded-sm -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
            {/* Michelin badge */}
            <div className="absolute -top-6 -left-6 bg-dark-card border border-gold/30 px-4 py-3 flex flex-col items-center">
              <span className="text-gold text-lg">&#9733;</span>
              <span className="text-[9px] tracking-[0.2em] uppercase text-cream/60 mt-1">
                Michelin
              </span>
              <span className="text-[9px] tracking-[0.2em] uppercase text-cream/60">
                Starred
              </span>
            </div>
          </div>

          {/* Text Side */}
          <div className="space-y-6">
            <h3 className="font-[var(--font-heading)] text-2xl md:text-3xl text-cream leading-snug">
              An Elegant Two-Story Space with Sweeping Windows
            </h3>
            <div className="w-12 h-px bg-gold/40" />
            <p className="text-cream/60 leading-relaxed text-[15px]">
              Musaafer, meaning &ldquo;traveler&rdquo; in ancient Hindi and Persian, is a
              Michelin-starred Indian fine dining destination nestled within
              Houston&rsquo;s prestigious Galleria. Our 10,000 square-foot space showcases
              the art, architecture, and culinary traditions of India.
            </p>
            <p className="text-cream/60 leading-relaxed text-[15px]">
              Founded by Shammi and Mithu Malik of The Spice Route Company,
              Musaafer offers guests an unforgettable dining experience with a
              world-class wine program and unparalleled hospitality, all within
              seven distinct rooms inspired by India&rsquo;s royal palaces and spice markets.
            </p>
            <div className="flex flex-wrap gap-8 pt-4">
              <div>
                <span className="text-gradient-gold font-[var(--font-heading)] text-3xl">
                  7
                </span>
                <p className="text-cream/40 text-xs tracking-[0.2em] uppercase mt-1">
                  Dining Rooms
                </p>
              </div>
              <div>
                <span className="text-gradient-gold font-[var(--font-heading)] text-3xl">
                  29
                </span>
                <p className="text-cream/40 text-xs tracking-[0.2em] uppercase mt-1">
                  States Explored
                </p>
              </div>
              <div>
                <span className="text-gradient-gold font-[var(--font-heading)] text-3xl">
                  300+
                </span>
                <p className="text-cream/40 text-xs tracking-[0.2em] uppercase mt-1">
                  Recipes Gathered
                </p>
              </div>
            </div>
            <a
              href="#journey"
              className="inline-block mt-4 text-gold text-xs tracking-[0.2em] uppercase border-b border-gold/30 pb-1 hover:border-gold transition-colors duration-300"
            >
              Discover Our Journey &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
