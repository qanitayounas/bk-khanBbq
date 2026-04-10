"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-bg-dark">
      {/* Full-screen background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero1.jpg"
          alt="BK Khan's BBQ restaurant interior"
          fill
          className="object-cover"
          sizes="100vw"
          priority
          quality={90}
        />
      </div>

      {/* Dark overlay - subtle */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Bottom gradient for readability */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40"
        style={{ background: "linear-gradient(to top, rgba(14,10,13,0.8), transparent)" }}
      />

      {/* Bottom floating elements */}
      <div className="absolute bottom-0 left-0 right-0 z-10 px-6 md:px-10 pb-8">
        <div className="max-w-[1400px] mx-auto flex items-end justify-between">
          {/* Left: Reservations button */}
          <a
            href="/reservations"
            className={`btn-dark-outline transition-all duration-1000 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            Reservations
          </a>

          {/* Center: Badge/Logo mark */}
          <div
            className={`text-center transition-all duration-1000 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <Image
              src="/images/logo-icon.svg"
              alt="BK Khan's BBQ"
              width={40}
              height={64}
              className="mx-auto mb-2"
            />
            <div className="font-[family-name:var(--font-sans)] text-[10px] tracking-[3px] uppercase text-gold">
              Est. 2024
            </div>
          </div>

          {/* Right: Order Online button */}
          <a
            href="/menu"
            className={`btn-gold-filled transition-all duration-1000 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            Order Online
          </a>
        </div>
      </div>
    </section>
  );
}
