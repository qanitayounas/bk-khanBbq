"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section className="section-padding bg-bg-primary pattern-bg overflow-hidden">
      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Text content */}
          <ScrollReveal className="reveal-left">
            <div>
              <p className="font-[family-name:var(--font-body)] text-base md:text-lg text-text-secondary font-light leading-[2] mb-8">
                <span className="font-[family-name:var(--font-sans)] text-xs tracking-[3px] uppercase text-gold block mb-4">
                  A Quest for Authentic Recipes
                </span>
                Inspired by the rich heritage of flame-grilled traditions,
                BK Khan&apos;s BBQ was founded to bring the most authentic,
                carefully crafted barbecue experience to your table.
                Our culinary team has traveled extensively to perfect
                the art of fire and smoke, blending time-honored techniques
                with bold, contemporary flavors.{" "}
                <span className="text-cream font-medium">
                  A culinary journey through the finest BBQ traditions.
                </span>
              </p>

              <Link href="/about" className="btn-dark-outline inline-block">
                The Journey
              </Link>
            </div>
          </ScrollReveal>

          {/* Right - Circular food image */}
          <ScrollReveal className="reveal-right">
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Outer decorative ring */}
                <div className="w-[320px] h-[320px] md:w-[420px] md:h-[420px] rounded-full border-[8px] border-gold/20 flex items-center justify-center relative">
                  {/* Inner image circle */}
                  <div className="w-[280px] h-[280px] md:w-[370px] md:h-[370px] rounded-full overflow-hidden relative">
                    <Image
                      src="/images/food/platter.jpg"
                      alt="Signature BBQ dish"
                      fill
                      className="object-cover"
                      sizes="420px"
                    />
                  </div>
                </div>
                {/* Decorative gold accent arc */}
                <div
                  className="absolute -bottom-4 -right-4 w-[340px] h-[340px] md:w-[440px] md:h-[440px] rounded-full border-2 border-gold/10 -z-10"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
