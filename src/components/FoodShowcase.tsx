"use client";

import Image from "next/image";

export default function FoodShowcase() {
  return (
    <section className="relative bg-bg-primary pattern-bg">
      {/* Full-width food image */}
      <div className="relative aspect-[16/9] md:aspect-[21/9] max-h-[70vh] overflow-hidden">
        <Image
          src="/images/hero/hero3.jpg"
          alt="Signature BK Khan's BBQ dish"
          fill
          className="object-cover"
          sizes="100vw"
          quality={90}
        />
        {/* Subtle vignette */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at center, transparent 50%, rgba(26,17,24,0.4) 100%)",
          }}
        />
      </div>
    </section>
  );
}
