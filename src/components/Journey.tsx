"use client";

import { useState } from "react";
import { useScrollReveal } from "./useScrollReveal";

const regionStops = [
  {
    id: "punjab",
    name: "Punjab",
    x: 28,
    y: 22,
    description: "Where the Khan family legacy began — open-pit roasting over wood fires, whole lamb feasts, and recipes passed down through three generations of village celebrations.",
  },
  {
    id: "sindh",
    name: "Sindh",
    x: 18,
    y: 45,
    description: "The land of spiced slow-cooked meats. Our family gathered techniques for marinating with mustard oil and smoking with desert wood — flavors that define our signature dry rub.",
  },
  {
    id: "peshawar",
    name: "Peshawar",
    x: 22,
    y: 12,
    description: "The gateway to the Khyber Pass and home to the legendary chapli kebab. From these frontier kitchens, we learned the art of hand-ground spice blends that elevate every cut.",
  },
  {
    id: "lahore",
    name: "Lahore",
    x: 33,
    y: 28,
    description: "The food capital. Lahore's street-side tandoors taught us how fire, clay, and patience create flavors no modern oven can replicate — the soul of our tandoor-smoked brisket.",
  },
  {
    id: "texas",
    name: "Texas",
    x: 72,
    y: 40,
    description: "Where our ancestral techniques met post oak, mesquite, and the mighty beef brisket. Texas gave us the canvas — we brought the colors. The fusion was born.",
  },
];

export default function Journey() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal(0.1);
  const { ref: mapRef, isVisible: mapVisible } = useScrollReveal(0.1);
  const { ref: defRef, isVisible: defVisible } = useScrollReveal(0.15);
  const [activeRegion, setActiveRegion] = useState<string | null>(null);

  const activeStop = regionStops.find((r) => r.id === activeRegion);

  return (
    <section className="relative overflow-hidden">
      {/* ===== Top Section - Cream ===== */}
      <div className="relative bg-cream pt-44 md:pt-52 lg:pt-56 pb-12 md:pb-16">
        {/* Decorative swirl right */}
        <div className="absolute right-0 top-1/4 opacity-[0.06] pointer-events-none">
          <svg width="250" height="500" viewBox="0 0 250 500" fill="none">
            <path d="M180 40 Q250 90 220 180 Q190 270 250 360 Q310 450 230 490" stroke="#c9a84c" strokeWidth="1.2" fill="none" />
            <path d="M200 60 Q270 110 240 200 Q210 290 270 380 Q330 470 250 510" stroke="#c9a84c" strokeWidth="0.6" fill="none" />
          </svg>
        </div>

        <div
          ref={headerRef}
          className={`max-w-3xl mx-auto px-4 text-center transition-all duration-1000 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Decorative icon */}
          <div className={`flex justify-center mb-5 transition-all duration-700 delay-200 ${headerVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}>
            <svg width="36" height="36" viewBox="0 0 40 40" fill="none" className="opacity-40">
              <path d="M20 5 Q25 15 20 20 Q15 15 20 5Z" stroke="#8B6914" strokeWidth="1.2" />
              <path d="M20 35 Q25 25 20 20 Q15 25 20 35Z" stroke="#8B6914" strokeWidth="1.2" />
              <path d="M5 20 Q15 15 20 20 Q15 25 5 20Z" stroke="#8B6914" strokeWidth="1.2" />
              <path d="M35 20 Q25 15 20 20 Q25 25 35 20Z" stroke="#8B6914" strokeWidth="1.2" />
              <circle cx="20" cy="20" r="2" fill="#8B6914" fillOpacity="0.4" />
            </svg>
          </div>

          <h1 className={`font-heading text-3xl md:text-4xl lg:text-5xl text-charcoal tracking-wide uppercase transition-all duration-700 delay-300 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            The 3 Generation
          </h1>
          <p className={`text-gold-dark text-xs md:text-sm tracking-[0.4em] md:tracking-[0.5em] uppercase mt-2 transition-all duration-700 delay-400 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Journey
          </p>

          <p className={`text-charcoal/55 max-w-2xl mx-auto mt-6 md:mt-8 leading-relaxed text-sm md:text-base transition-all duration-700 delay-500 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Three generations of the Khan family carried the ancient art of live-fire
            cooking from the villages of Pakistan to the smokehouses of Texas,
            gathering recipes, techniques, and stories along the way — flavors that
            have been translated into our menu.
          </p>

          <p className={`text-charcoal/40 text-sm mt-4 italic transition-all duration-700 delay-600 ${headerVisible ? "opacity-100" : "opacity-0"}`}>
            Explore the journey by hovering (desktop) / tapping (mobile) over the map.
          </p>
        </div>

        {/* Definition */}
        <div
          ref={defRef}
          className={`max-w-lg mx-auto px-4 mt-10 md:mt-14 text-center transition-all duration-1000 ${
            defVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-heading text-2xl md:text-3xl text-charcoal italic">
            bk khan&apos;s
          </h2>
          <p className="text-charcoal/50 text-sm mt-1">
            noun (बीके खान)
          </p>
          <p className="text-charcoal/45 text-sm mt-3 leading-relaxed">
            translated means &apos;a family of fire keepers&apos;, making the journey an integral
            part of our restaurant menu &amp; its offerings.
          </p>
        </div>
      </div>

      {/* ===== Dark Section - Map ===== */}
      <div className="relative bg-charcoal py-12 md:py-20">
        <div
          ref={mapRef}
          className={`max-w-6xl mx-auto px-4 md:px-8 transition-all duration-1000 ${
            mapVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {/* Map SVG */}
            <div className="flex-1 w-full max-w-2xl relative">
              <svg
                viewBox="0 0 100 80"
                className="w-full h-auto"
                style={{ filter: "drop-shadow(0 4px 20px rgba(230,184,0,0.1))" }}
              >
                {/* Pakistan outline (simplified) */}
                <path
                  d="M15 8 L30 5 L38 10 L40 18 L38 25 L42 32 L35 38 L30 50 L22 55 L15 48 L10 35 L8 25 L12 15Z"
                  fill="#cc9f00"
                  fillOpacity="0.8"
                  stroke="#e6b800"
                  strokeWidth="0.5"
                  className="transition-all duration-500"
                />
                {/* Texas outline (simplified) */}
                <path
                  d="M60 25 L78 22 L85 28 L88 38 L82 50 L75 55 L68 58 L62 52 L58 42 L55 35 L58 28Z"
                  fill="#cc9f00"
                  fillOpacity="0.8"
                  stroke="#e6b800"
                  strokeWidth="0.5"
                  className="transition-all duration-500"
                />
                {/* Journey path - dotted line connecting them */}
                <path
                  d="M35 30 Q45 15 50 20 Q55 25 50 35 Q48 40 55 38 Q60 35 65 38"
                  fill="none"
                  stroke="#e6b800"
                  strokeWidth="0.4"
                  strokeDasharray="1.5 1.5"
                  className="transition-all duration-500"
                  opacity="0.6"
                />

                {/* Region markers */}
                {regionStops.map((stop) => (
                  <g
                    key={stop.id}
                    className="cursor-pointer"
                    onMouseEnter={() => setActiveRegion(stop.id)}
                    onMouseLeave={() => setActiveRegion(null)}
                    onClick={() => setActiveRegion(activeRegion === stop.id ? null : stop.id)}
                  >
                    {/* Outer pulse ring */}
                    <circle
                      cx={stop.x}
                      cy={stop.y}
                      r="3.5"
                      fill="none"
                      stroke="#e6b800"
                      strokeWidth="0.3"
                      opacity={activeRegion === stop.id ? "0.8" : "0.3"}
                      className="transition-all duration-300"
                    />
                    {/* Inner circle */}
                    <circle
                      cx={stop.x}
                      cy={stop.y}
                      r="2"
                      fill="#e6b800"
                      fillOpacity={activeRegion === stop.id ? "1" : "0.6"}
                      stroke="#fff"
                      strokeWidth="0.3"
                      className="transition-all duration-300"
                    />
                    {/* Hover expand */}
                    {activeRegion === stop.id && (
                      <circle
                        cx={stop.x}
                        cy={stop.y}
                        r="5"
                        fill="none"
                        stroke="#e6b800"
                        strokeWidth="0.2"
                        opacity="0.5"
                      />
                    )}
                  </g>
                ))}
              </svg>
            </div>

            {/* Info panel */}
            <div className="flex-1 min-h-[200px] flex items-center">
              {activeStop ? (
                <div className="animate-fade-in">
                  <p className="text-gold text-[10px] md:text-xs tracking-[0.4em] uppercase mb-2">
                    {activeStop.name}
                  </p>
                  <div className="w-10 h-px bg-gold/40 mb-4" />
                  <p className="text-cream/60 text-sm md:text-base leading-relaxed">
                    {activeStop.description}
                  </p>
                </div>
              ) : (
                <div className="text-center lg:text-left">
                  <p className="text-cream/30 text-sm italic">
                    Hover over a region to explore the journey
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
