"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface PageHeroProps {
  subtitle: string;
  title: string;
  titleAccent?: string;
  description?: string;
  image?: string;
}

export default function PageHero({
  subtitle,
  title,
  titleAccent,
  description,
  image = "/images/hero/hero2.jpg",
}: PageHeroProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative h-[55vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={`${title} ${titleAccent || ""}`}
          fill
          className="object-cover"
          sizes="100vw"
          priority
          quality={80}
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{ background: "linear-gradient(to top, var(--color-bg-primary), transparent)" }}
      />

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <span className="font-[family-name:var(--font-sans)] text-[10px] font-light tracking-[5px] uppercase text-gold">
            {subtitle}
          </span>
        </div>

        <h1
          className={`font-[family-name:var(--font-sans)] text-2xl sm:text-3xl md:text-4xl tracking-[6px] uppercase text-white font-light leading-[1.4] mt-6 mb-4 transition-all duration-1000 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          {title}
          {titleAccent && (
            <>
              {" "}
              <span className="text-gold">{titleAccent}</span>
            </>
          )}
        </h1>

        {description && (
          <p
            className={`font-[family-name:var(--font-body)] text-lg md:text-xl text-cream-dark font-light italic max-w-lg mx-auto transition-all duration-1000 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
