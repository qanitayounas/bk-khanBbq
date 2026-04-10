"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const dishes = [
  {
    name: "The Khan's Feast",
    desc: "A royal platter of slow-smoked brisket, pulled lamb, and flame-kissed chicken served with our signature spiced rub",
    price: "$65",
    image: "/images/food/platter.jpg",
  },
  {
    name: "Flame Emperor Brisket",
    desc: "Prime-grade beef brisket, oak-smoked for sixteen hours and hand-carved to order at your table",
    price: "$38",
    image: "/images/food/brisket.jpg",
  },
  {
    name: "Royal Rack of Ribs",
    desc: "Full rack of baby back ribs with our bourbon-molasses glaze, slow-smoked to tender perfection",
    price: "$42",
    image: "/images/food/ribs.jpg",
  },
];

export default function SignatureDishes() {
  return (
    <section className="section-padding bg-bg-primary relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-20">
            <div className="ornament mb-8">
              <span className="font-[family-name:var(--font-sans)] text-[10px] font-light tracking-[5px] uppercase text-gold">
                Signature Creations
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold italic text-cream leading-[1.2] mb-6">
              Our Celebrated Dishes
            </h2>
            <p className="font-[family-name:var(--font-body)] text-lg md:text-xl text-text-secondary font-light italic max-w-xl mx-auto">
              Masterpieces born from fire, time, and an uncompromising pursuit of flavor
            </p>
          </div>
        </ScrollReveal>

        {/* Dishes Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {dishes.map((dish, i) => (
            <ScrollReveal key={dish.name} delay={i * 150}>
              <div className="group cursor-pointer">
                {/* Image area */}
                <div className="relative aspect-[4/5] overflow-hidden mb-8">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center">
                    <span className="font-[family-name:var(--font-sans)] text-[10px] tracking-[4px] uppercase text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 border border-white/70 px-6 py-3">
                      View Details
                    </span>
                  </div>
                  {/* Corner accents */}
                  <div className="absolute top-5 left-5 w-6 h-6 border-t border-l border-gold/0 group-hover:border-gold/60 transition-all duration-500" />
                  <div className="absolute bottom-5 right-5 w-6 h-6 border-b border-r border-gold/0 group-hover:border-gold/60 transition-all duration-500" />
                </div>

                {/* Text */}
                <div className="text-center">
                  <h3 className="font-[family-name:var(--font-heading)] text-xl md:text-2xl italic text-cream group-hover:text-gold-light transition-colors duration-400 mb-3">
                    {dish.name}
                  </h3>
                  <p className="font-[family-name:var(--font-body)] text-text-secondary font-light text-base leading-relaxed mb-3 max-w-xs mx-auto">
                    {dish.desc}
                  </p>
                  <span className="font-[family-name:var(--font-heading)] text-lg text-gold italic">
                    {dish.price}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
