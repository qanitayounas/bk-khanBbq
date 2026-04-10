"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

const categories = [
  { name: "Signature Platters", count: "4 dishes" },
  { name: "From the Grill", count: "5 dishes" },
  { name: "Starters", count: "4 dishes" },
  { name: "Sides", count: "5 dishes" },
  { name: "Desserts", count: "3 dishes" },
  { name: "Beverages", count: "5 selections" },
];

export default function MenuPreview() {
  return (
    <section className="section-padding bg-bg-secondary relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Content */}
          <div>
            <ScrollReveal>
              <div className="ornament-left mb-6">
                <span className="font-[family-name:var(--font-sans)] text-[10px] font-light tracking-[5px] uppercase text-gold">
                  Our Menu
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl lg:text-[44px] font-bold italic text-cream leading-[1.2] mb-8">
                A Menu Crafted
                <br />
                for the Discerning Palate
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <p className="font-[family-name:var(--font-body)] text-lg text-text-secondary font-light leading-[1.9] mb-10">
                From our legendary slow-smoked brisket to innovative
                flame-grilled creations, each dish on our menu reflects
                a harmonious balance of heritage techniques and bold
                contemporary flavors. Every ingredient is carefully
                sourced, every preparation meticulously timed.
              </p>
            </ScrollReveal>

            {/* Category list */}
            <ScrollReveal delay={400}>
              <div className="space-y-4 mb-12">
                {categories.map((cat) => (
                  <div
                    key={cat.name}
                    className="flex items-center justify-between py-3 border-b border-border group hover:border-gold/30 transition-colors duration-400 cursor-pointer"
                  >
                    <span className="font-[family-name:var(--font-heading)] text-lg italic text-cream group-hover:text-gold-light transition-colors duration-400">
                      {cat.name}
                    </span>
                    <span className="font-[family-name:var(--font-sans)] text-[10px] tracking-[2px] uppercase text-text-muted">
                      {cat.count}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={500}>
              <Link href="/menu" className="btn-primary">
                <span>View Full Menu</span>
              </Link>
            </ScrollReveal>
          </div>

          {/* Right - Image */}
          <ScrollReveal className="reveal-right">
            <div className="relative">
              <div className="aspect-[3/4] relative overflow-hidden">
                <Image
                  src="/images/food/kebabs.jpg"
                  alt="Grilled kebabs"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>
              {/* Border accent */}
              <div className="absolute -bottom-5 -left-5 w-full h-full border border-gold/20 -z-10 hidden md:block" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
