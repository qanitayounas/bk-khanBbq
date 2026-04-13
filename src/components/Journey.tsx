"use client";

import SectionDivider from "./SectionDivider";
import { useScrollReveal } from "./useScrollReveal";

const journeySteps = [
  {
    number: "01",
    title: "The Vision",
    description:
      "Shammi and Mithu Malik envisioned bringing the diverse culinary heritage of India to Houston. From a 30-seat restaurant in Lagos, Nigeria, the dream grew into something extraordinary.",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80",
  },
  {
    number: "02",
    title: "100-Day Journey",
    description:
      "Two chefs embarked on an ambitious 100-day journey across 29 states of India, gathering stories, experiences, and over 300 age-old regional recipes from homecooks and local artisans.",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80",
  },
  {
    number: "03",
    title: "Crafting the Menu",
    description:
      "Each recipe collected was translated with contemporary techniques and local ingredients, honoring tradition while creating something entirely new for the Houston dining scene.",
    image:
      "https://images.unsplash.com/photo-1567337710282-00832b415979?w=600&q=80",
  },
  {
    number: "04",
    title: "Musaafer is Born",
    description:
      "The 10,000 square-foot space in the Galleria was hand-crafted in India, referencing opulent palaces and spice markets, creating seven distinct rooms that transport guests across the subcontinent.",
    image:
      "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=600&q=80",
  },
];

export default function Journey() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="journey"
      className="relative py-28 md:py-36 bg-dark-surface"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a96e' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div
          ref={ref}
          className={`text-center mb-20 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <p className="text-gold/70 text-xs tracking-[0.5em] uppercase mb-4">
            Our Story
          </p>
          <h2 className="font-[var(--font-heading)] text-4xl md:text-5xl lg:text-6xl text-cream tracking-wide">
            The Journey
          </h2>
          <div className="flex justify-center mt-6">
            <SectionDivider />
          </div>
          <p className="text-cream/50 max-w-2xl mx-auto mt-6 leading-relaxed">
            A 100-day expedition across 29 states of India — gathering stories,
            recipes, and inspiration that would shape an extraordinary dining
            destination.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent hidden md:block" />

          <div className="space-y-16 md:space-y-24">
            {journeySteps.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <JourneyStep key={i} step={step} isEven={isEven} />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function JourneyStep({
  step,
  isEven,
}: {
  step: (typeof journeySteps)[number];
  isEven: boolean;
}) {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <div
      ref={ref}
      className={`grid md:grid-cols-2 gap-8 lg:gap-16 items-center ${
        isVisible
          ? isEven
            ? "animate-slide-left"
            : "animate-slide-right"
          : "opacity-0"
      }`}
    >
      {/* Image */}
      <div className={`${!isEven ? "md:order-2" : ""}`}>
        <div className="img-zoom rounded-sm overflow-hidden relative group aspect-video">
          <img
            src={step.image}
            alt={step.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/10 transition-all duration-500" />
          <div className="absolute top-4 left-4 text-gold/30 font-[var(--font-heading)] text-6xl font-bold">
            {step.number}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={`${!isEven ? "md:order-1 md:text-right" : ""}`}>
        <span className="text-gold/40 text-xs tracking-[0.3em] uppercase">
          Chapter {step.number}
        </span>
        <h3 className="font-[var(--font-heading)] text-2xl md:text-3xl text-cream mt-3 mb-4">
          {step.title}
        </h3>
        <div
          className={`w-12 h-px bg-gold/40 mb-4 ${
            !isEven ? "md:ml-auto" : ""
          }`}
        />
        <p className="text-cream/55 leading-relaxed">{step.description}</p>
      </div>
    </div>
  );
}
