"use client";

import { useState } from "react";
import SectionDivider from "./SectionDivider";
import { useScrollReveal } from "./useScrollReveal";

const spaces = [
  {
    name: "Sheesh Mahal",
    subtitle: "Palace of Mirrors",
    description:
      "Over 200,000 pieces of hand-cut mirror create a dazzling mosaic, offset by chandeliers and an Empire-inspired ceiling. Velvet-covered banquettes and chairs complete the luxe ambience.",
    image:
      "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=800&q=80",
  },
  {
    name: "The Traveler's Room",
    subtitle: "Grand Colonnade",
    description:
      "A sixteen-foot high wooden arched colonnade with a commissioned twelve-foot gilded statue, showcasing a traditional Dhokra Wall with brass carvings and panels of rich brocade.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
  },
  {
    name: "Diwan Lounge",
    subtitle: "The Drawing Room",
    description:
      "Inspired by affluent Indian homes, with vignette seating, marble tables, and tufted sofas. An ornate wine display room serves as its captivating focal point.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
  },
  {
    name: "The Shadow Room",
    subtitle: "Private Dining",
    description:
      "An intimate private dining space with dedicated seating for the restaurant's exclusive twelve-course tasting menu experience, enveloped in moody elegance.",
    image:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80",
  },
];

export default function DiningSpaces() {
  const { ref, isVisible } = useScrollReveal();
  const [active, setActive] = useState(0);

  return (
    <section id="spaces" className="relative py-28 md:py-36 bg-dark">
      <div className="max-w-[1600px] mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-16 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <p className="text-gold/70 text-xs tracking-[0.5em] uppercase mb-4">
            Seven Distinct Rooms
          </p>
          <h2 className="font-[var(--font-heading)] text-4xl md:text-5xl lg:text-6xl text-cream tracking-wide">
            Dining Spaces
          </h2>
          <div className="flex justify-center mt-6">
            <SectionDivider />
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Space selector */}
          <div className="lg:col-span-2 space-y-3">
            {spaces.map((space, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-full text-left p-5 border transition-all duration-500 group ${
                  active === i
                    ? "border-gold/40 bg-dark-card"
                    : "border-cream/5 hover:border-cream/15 bg-transparent"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4
                      className={`font-[var(--font-heading)] text-lg transition-colors duration-300 ${
                        active === i ? "text-gold" : "text-cream/70 group-hover:text-cream"
                      }`}
                    >
                      {space.name}
                    </h4>
                    <p className="text-cream/30 text-xs tracking-[0.15em] uppercase mt-1">
                      {space.subtitle}
                    </p>
                  </div>
                  <span
                    className={`text-gold/40 text-lg transition-transform duration-300 ${
                      active === i ? "rotate-90" : ""
                    }`}
                  >
                    &#8250;
                  </span>
                </div>
                {active === i && (
                  <p className="text-cream/50 text-sm leading-relaxed mt-3 animate-fade-in">
                    {space.description}
                  </p>
                )}
              </button>
            ))}
          </div>

          {/* Active space image */}
          <div className="lg:col-span-3 relative">
            <div className="img-zoom rounded-sm overflow-hidden aspect-[4/3] md:aspect-[21/9] lg:aspect-[16/10]">
              <img
                src={spaces[active].image}
                alt={spaces[active].name}
                className="w-full h-full object-cover transition-all duration-700"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-dark/90 to-transparent">
              <h3 className="font-[var(--font-heading)] text-2xl text-cream">
                {spaces[active].name}
              </h3>
              <p className="text-gold/60 text-xs tracking-[0.2em] uppercase mt-1">
                {spaces[active].subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
