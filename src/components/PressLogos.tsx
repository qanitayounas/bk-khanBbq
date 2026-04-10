"use client";

import Image from "next/image";

const pressLogos = [
  { name: "TIME", style: "font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold italic" },
  { name: "culturemap", style: "font-[family-name:var(--font-sans)] text-2xl md:text-3xl font-light tracking-wider" },
  { name: "Houston Press", style: "font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold italic" },
];

export default function PressLogos() {
  return (
    <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/venue/restaurant.jpg"
          alt="BK Khan's BBQ interior"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Press logos */}
      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 lg:gap-28">
          {pressLogos.map((logo) => (
            <div
              key={logo.name}
              className={`${logo.style} text-white/80 hover:text-white transition-colors duration-300 cursor-default`}
            >
              {logo.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
