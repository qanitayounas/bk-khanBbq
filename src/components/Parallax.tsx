"use client";

import Image from "next/image";

export default function Parallax() {
  return (
    <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/food/smoking.jpg"
          alt="Smoking BBQ"
          fill
          className="object-cover"
          sizes="100vw"
          style={{ objectPosition: "center 40%" }}
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <div className="max-w-4xl">
          {/* Decorative top */}
          <div className="ornament mb-10">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              className="text-gold"
            >
              <path
                d="M10 0L12.5 7.5L20 10L12.5 12.5L10 20L7.5 12.5L0 10L7.5 7.5Z"
                fill="currentColor"
                opacity="0.6"
              />
            </svg>
          </div>

          <blockquote className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl md:text-4xl lg:text-[46px] italic text-white leading-[1.4] font-normal">
            &ldquo;The secret to great BBQ is not in the recipe.
            <br className="hidden md:block" />
            It&apos;s in the patience to let the fire
            <br className="hidden md:block" />
            <span className="text-gold">do what it was born to do.&rdquo;</span>
          </blockquote>

          <div className="mt-10">
            <div className="w-8 h-[1px] bg-gold/40 mx-auto mb-4" />
            <span className="font-[family-name:var(--font-sans)] text-[11px] tracking-[4px] uppercase text-white/50">
              BK Khan — Founder
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
