"use client";

import { useEffect, useState, useCallback } from "react";

const heroImages = [
  "/images/hero.png",
  "/images/hero2.png",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrent((c) => (c + 1) % heroImages.length);
  }, []);

  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    // hero2 (index 1) shows for 10s, hero1 (index 0) shows for 4s
    const duration = current === 1 ? 10000 : 4000;
    const timer = setTimeout(nextSlide, duration);
    return () => clearTimeout(timer);
  }, [current, nextSlide]);

  return (
    <section id="home" className="relative h-[60vh] md:h-[80vh] lg:h-screen w-full overflow-hidden bg-dark">
      {/* Background Images */}
      {heroImages.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${current === i ? "opacity-100" : "opacity-0"} 
            ${i === 1 ? "bg-[85%_center]" : "bg-[65%_center]"} md:bg-center`}
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
          }}
        />
      ))}

      {/* Subtle vignette overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-dark/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-dark/20 via-transparent to-dark/20" />

      {/* Slide Indicators - Bottom Center */}
      <div
        className={`absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-2 transition-all duration-1000 delay-700 ${loaded ? "opacity-100" : "opacity-0"
          }`}
      >
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1 rounded-full transition-all duration-500 ${current === i
              ? "bg-gold w-8"
              : "bg-cream/40 w-4 hover:bg-cream/60"
              }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
