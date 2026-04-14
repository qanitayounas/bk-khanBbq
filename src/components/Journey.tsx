"use client";

import { useScrollReveal } from "./useScrollReveal";

const journeySteps = [
  {
    number: "01",
    chapter: "The Roots",
    title: "Three Generations of Fire & Flavor",
    description:
      "The BK Khan story begins not in a restaurant, but in the open-air kitchens of our family — where charcoal pits burned from dawn and whole animals were slow-roasted for village feasts. For three generations, the Khan family perfected the ancient art of live-fire cooking across the subcontinent, passing down techniques that predate modern BBQ by centuries.",
    quote: "We didn't learn BBQ from a book. We learned it from our grandfather's hands.",
    image: "/images/hero.png",
  },
  {
    number: "02",
    chapter: "The Crossing",
    title: "East Meets the American South",
    description:
      "When our family arrived in Texas, we discovered something remarkable — the soul of Southern BBQ shared the same DNA as our ancestral cooking. Low and slow. Smoke and patience. Respect for the animal. We saw an opportunity no one else had seized: to bridge the gap between Pakistan's centuries-old tandoor traditions and Texas's legendary pit-smoking culture.",
    quote: "Texas taught us brisket. We taught Texas what spice can do to smoke.",
    image: "/images/hero2.png",
  },
  {
    number: "03",
    chapter: "The Craft",
    title: "300 Recipes. One Perfect Menu.",
    description:
      "For over two years, our pitmasters tested more than 300 family recipes against every cut of Texas beef, every wood variety, every smoking technique. We dry-aged brisket with cardamom bark. We smoked ribs over mesquite infused with cumin seeds. Every dish on our menu survived hundreds of iterations — because at BK Khan's, close enough is never good enough.",
    quote: null,
    image: "/images/dish1.webp",
  },
  {
    number: "04",
    chapter: "The Destination",
    title: "Houston's New BBQ Landmark",
    description:
      "BK Khan's BBQ is more than a restaurant — it's a destination where Houston's legendary appetite for bold flavors meets a culinary heritage that spans continents. Our space on Westheimer Road was designed to honor both worlds: the warmth of a Texas smokehouse and the rich hospitality of a Khan family gathering. Every guest is family. Every plate tells a story.",
    quote: "We didn't come to Houston to fit in. We came to stand out.",
    image: "/images/image.png",
  },
];

export default function Journey() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal(0.2);

  return (
    <section
      id="journey"
      className="relative pt-32 md:pt-40 lg:pt-48 pb-20 md:pb-28 lg:pb-36 bg-charcoal overflow-hidden"
    >
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23c9a84c' stroke-width='0.5'%3E%3Cpath d='M40 10 Q55 25 40 40 Q25 55 10 40 Q25 25 40 10Z'/%3E%3Cpath d='M40 40 Q55 55 40 70 Q25 55 40 40Z'/%3E%3Ccircle cx='40' cy='40' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 md:mb-24 transition-all duration-1000 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-gold text-[10px] md:text-xs tracking-[0.4em] md:tracking-[0.5em] uppercase mb-3 md:mb-4">
            Our Story
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-6xl text-cream tracking-wide">
            The Journey
          </h2>
          <div className="flex justify-center mt-5 md:mt-6">
            <div className="flex items-center gap-4">
              <div className="w-12 md:w-16 h-px bg-gradient-to-r from-transparent to-gold-dark/40" />
              <svg width="10" height="10" viewBox="0 0 12 12" className="text-gold/50">
                <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5Z" fill="currentColor" />
              </svg>
              <div className="w-12 md:w-16 h-px bg-gradient-to-l from-transparent to-gold-dark/40" />
            </div>
          </div>
          <p className="text-cream/50 max-w-2xl mx-auto mt-5 md:mt-6 leading-relaxed text-sm md:text-base">
            From the open-fire pits of our ancestors to the smokehouses of Texas —
            three generations of flavor, one revolutionary vision for Houston BBQ.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent hidden lg:block" />

          <div className="space-y-16 md:space-y-20 lg:space-y-32">
            {journeySteps.map((step, i) => (
              <JourneyStep key={i} step={step} index={i} />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <BottomCTA />
      </div>
    </section>
  );
}

function JourneyStep({
  step,
  index,
}: {
  step: (typeof journeySteps)[number];
  index: number;
}) {
  const { ref, isVisible } = useScrollReveal(0.15);
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative grid lg:grid-cols-2 gap-6 md:gap-10 lg:gap-16 items-center transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center z-10">
        <div className="w-3 h-3 rounded-full bg-gold/30 border border-gold/50" />
      </div>

      <div className={`${!isEven ? "lg:order-2" : ""}`}>
        <div className="relative group overflow-hidden rounded-sm shadow-lg">
          <div className="aspect-[4/3] md:aspect-video overflow-hidden">
            <img
              src={step.image}
              alt={step.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent" />
          <div className="absolute top-3 left-3 md:top-5 md:left-5">
            <span className="font-heading text-gold/25 text-5xl md:text-7xl font-bold leading-none">
              {step.number}
            </span>
          </div>
        </div>
      </div>

      <div className={`${!isEven ? "lg:order-1 lg:text-right" : ""}`}>
        <span className="text-gold text-[10px] md:text-xs tracking-[0.3em] uppercase">
          Chapter {step.number} &mdash; {step.chapter}
        </span>
        <h3 className="font-heading text-xl md:text-2xl lg:text-3xl text-cream mt-2 md:mt-3 mb-3 md:mb-4 leading-snug">
          {step.title}
        </h3>
        <div className={`w-10 md:w-12 h-px bg-gold/40 mb-3 md:mb-4 ${!isEven ? "lg:ml-auto" : ""}`} />
        <p className="text-cream/50 leading-relaxed text-sm md:text-base">
          {step.description}
        </p>
        {step.quote && (
          <blockquote className={`mt-5 md:mt-6 border-l-2 border-gold/40 pl-4 md:pl-5 ${!isEven ? "lg:border-l-0 lg:border-r-2 lg:pl-0 lg:pr-5" : ""}`}>
            <p className="text-gold font-heading text-sm md:text-base italic leading-relaxed">
              &ldquo;{step.quote}&rdquo;
            </p>
          </blockquote>
        )}
      </div>
    </div>
  );
}

function BottomCTA() {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <div
      ref={ref}
      className={`mt-20 md:mt-28 lg:mt-36 text-center transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="w-px h-12 md:h-16 bg-gradient-to-b from-gold/30 to-transparent mx-auto mb-8" />
      <p className="text-gold text-[10px] md:text-xs tracking-[0.4em] uppercase mb-3">
        The story continues
      </p>
      <h3 className="font-heading text-xl md:text-2xl lg:text-3xl text-cream mb-4 md:mb-6">
        Come Taste the Journey
      </h3>
      <p className="text-cream/50 max-w-lg mx-auto mb-6 md:mb-8 text-sm md:text-base leading-relaxed">
        Every plate at BK Khan's carries the weight of generations and the fire of Texas.
        Your seat at the table is waiting.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
        <a
          href="/contact"
          className="border-2 border-gold bg-gold text-dark text-[10px] md:text-xs tracking-[0.2em] uppercase px-8 md:px-10 py-3 md:py-3.5 hover:bg-white hover:border-white transition-all duration-300"
        >
          Reserve a Table
        </a>
        <a
          href="/menu"
          className="border-2 border-cream/30 text-cream text-[10px] md:text-xs tracking-[0.2em] uppercase px-8 md:px-10 py-3 md:py-3.5 hover:border-gold hover:text-gold transition-all duration-300"
        >
          Explore the Menu
        </a>
      </div>
    </div>
  );
}
