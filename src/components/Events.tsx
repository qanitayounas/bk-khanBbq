"use client";

import { useEffect, useState } from "react";
import { useScrollReveal } from "./useScrollReveal";

const upcomingEvents = [
  {
    title: "Summer Smoke Fest",
    date: "May 17th",
    description:
      "An evening of live music, unlimited craft cocktails, and a curated BBQ tasting menu featuring limited-edition smoked cuts you won't find on our regular menu. Live band. Open bar. One unforgettable night.",
    image: "/images/event1.jpg",
    cta: "Book Today",
  },
  {
    title: "Pitmaster's Table",
    date: "June 7th",
    description:
      "An intimate 12-seat dinner hosted by our head pitmaster. Watch the craft up close, hear the stories behind each dish, and enjoy a 7-course smoked tasting menu paired with whiskey selections.",
    image: "/images/event2.jpg",
    cta: "Reserve Your Seat",
  },
  {
    title: "Khan Family Feast",
    date: "July 4th Weekend",
    description:
      "Celebrate Independence Day the BK Khan's way — a family-style feast with whole smoked brisket, tandoor-fired lamb, sides for days, and fireworks on the patio. Bring the whole family.",
    image: "/images/event3.jpg",
    cta: "Book Today",
  },
];

export default function Events() {
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHeroLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative bg-dark min-h-screen overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23c9a84c' stroke-width='0.3'%3E%3Cpath d='M30 5 L35 25 L55 30 L35 35 L30 55 L25 35 L5 30 L25 25Z'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
        backgroundSize: "60px 60px",
      }} />

      {/* Ambient glow orbs */}
      <div className="absolute top-[15%] right-[10%] w-72 h-72 rounded-full bg-gold/[0.02] blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-[30%] left-[5%] w-56 h-56 rounded-full bg-gold/[0.03] blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: "2s" }} />
      <div className="absolute top-[60%] right-[25%] w-40 h-40 rounded-full bg-gold/[0.02] blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: "4s" }} />

      {/* ===== Giant EVENTS Title ===== */}
      <div className="relative z-10 pt-36 md:pt-44 lg:pt-48 pb-8 md:pb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h1
            className={`font-heading text-[2.5rem] md:text-[7rem] lg:text-[10rem] xl:text-[12rem] tracking-[0.15em] uppercase leading-none text-center md:text-left transition-all duration-[2000ms] ease-out ${
              heroLoaded ? "opacity-100 translate-y-0 text-cream/[0.07]" : "opacity-0 translate-y-16 text-cream/0"
            }`}
          >
            Events
          </h1>
          {/* Animated gold line under title */}
          <div className={`h-px bg-gradient-to-r from-gold/40 via-gold/20 to-transparent max-w-md transition-all duration-1000 delay-700 ${heroLoaded ? "opacity-100 scale-x-100 origin-left" : "opacity-0 scale-x-0 origin-left"}`} />
        </div>
      </div>

      {/* ===== Event Cards ===== */}
      <div className="relative z-10 pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="space-y-20 md:space-y-28">
            {upcomingEvents.map((event, i) => (
              <EventCard key={event.title} event={event} index={i} />
            ))}
          </div>
        </div>
      </div>

      {/* ===== Bottom CTA ===== */}
      <BottomSection />

      {/* Inline keyframes */}
      <style jsx>{`
        @keyframes shimmerLine {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 0px rgba(230,184,0,0); }
          50% { box-shadow: 0 0 30px rgba(230,184,0,0.15); }
        }
      `}</style>
    </section>
  );
}

function EventCard({
  event,
  index,
}: {
  event: (typeof upcomingEvents)[number];
  index: number;
}) {
  const { ref, isVisible } = useScrollReveal(0.15);
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      }`}
    >
      <div className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8 md:gap-14 lg:gap-20`}>
        {/* Event Poster/Image */}
        <div
          className={`w-full md:w-2/5 transition-all duration-700 delay-200 ${
            isVisible
              ? "opacity-100 scale-100"
              : isEven
                ? "opacity-0 -translate-x-12 scale-95"
                : "opacity-0 translate-x-12 scale-95"
          }`}
        >
          <div className="relative group" style={{ animationName: isVisible ? "glowPulse" : "none", animationDuration: "4s", animationTimingFunction: "ease-in-out", animationIterationCount: "infinite", animationDelay: `${index * 0.5}s` }}>
            <div className="overflow-hidden shadow-2xl group-hover:shadow-[0_20px_60px_-10px_rgba(230,184,0,0.15)] transition-shadow duration-700">
              <img
                src={event.image}
                alt={event.title}
                className="w-full aspect-[3/4] object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
              />
              {/* Shimmer overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ backgroundSize: "200% 100%", animation: "shimmerLine 2s infinite" }} />
            </div>
            {/* Gold corner accents - animated */}
            <div className={`absolute -top-2 -left-2 border-t-2 border-l-2 border-gold/30 transition-all duration-700 group-hover:border-gold/70 ${isVisible ? "w-8 h-8 opacity-100" : "w-0 h-0 opacity-0"}`} style={{ transitionDelay: "500ms" }} />
            <div className={`absolute -bottom-2 -right-2 border-b-2 border-r-2 border-gold/30 transition-all duration-700 group-hover:border-gold/70 ${isVisible ? "w-8 h-8 opacity-100" : "w-0 h-0 opacity-0"}`} style={{ transitionDelay: "700ms" }} />
            {/* Extra corners on hover */}
            <div className="absolute -top-2 -right-2 w-0 h-0 border-t-2 border-r-2 border-gold/0 transition-all duration-500 group-hover:w-6 group-hover:h-6 group-hover:border-gold/40" />
            <div className="absolute -bottom-2 -left-2 w-0 h-0 border-b-2 border-l-2 border-gold/0 transition-all duration-500 group-hover:w-6 group-hover:h-6 group-hover:border-gold/40" />
          </div>
        </div>

        {/* Event Details */}
        <div className={`w-full md:w-3/5 ${isEven ? "" : "md:text-right"}`}>
          <p
            className={`text-gold/60 text-[10px] md:text-xs tracking-[0.4em] uppercase mb-3 transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            Upcoming Event
          </p>
          <h2
            className={`font-heading text-2xl md:text-3xl lg:text-4xl text-cream tracking-wide uppercase mb-2 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            {event.title}
          </h2>
          <div className={`flex items-center gap-3 mb-5 ${isEven ? "" : "md:justify-end"}`}>
            <div className={`h-px bg-gold/40 transition-all duration-700 ${isVisible ? "w-8" : "w-0"}`} style={{ transitionDelay: "500ms" }} />
            <p
              className={`text-gold text-sm md:text-base tracking-wider transition-all duration-500 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              {event.date}
            </p>
            <div className={`h-px bg-gold/40 transition-all duration-700 ${isVisible ? "w-8" : "w-0"}`} style={{ transitionDelay: "500ms" }} />
          </div>
          <p
            className={`text-cream/45 text-sm md:text-base leading-relaxed mb-8 max-w-lg ${isEven ? "" : "md:ml-auto"} transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            {event.description}
          </p>
          <a
            href="/#contact"
            className={`inline-block border-2 border-cream/40 text-cream text-xs tracking-[0.25em] uppercase px-10 py-3.5 transition-all duration-300 hover:border-gold hover:text-gold hover:scale-105 hover:shadow-[0_0_20px_rgba(230,184,0,0.1)] ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "700ms" }}
          >
            {event.cta}
          </a>
        </div>
      </div>
    </div>
  );
}

function BottomSection() {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <div className="relative z-10 border-t border-cream/10">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto px-4 py-16 md:py-24 text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className={`text-gold/50 text-[10px] md:text-xs tracking-[0.4em] uppercase mb-3 transition-all duration-700 delay-200 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          Host Your Own
        </p>
        <h3 className={`font-heading text-xl md:text-2xl lg:text-3xl text-cream tracking-wide mb-4 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          Planning a Private Event?
        </h3>
        <p className={`text-cream/40 text-sm md:text-base leading-relaxed mb-8 max-w-lg mx-auto transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          From intimate dinners to grand celebrations, our five exclusive spaces
          are ready for your next occasion.
        </p>
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-3 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <a
            href="/private-events"
            className="bg-gold text-dark text-xs tracking-[0.2em] uppercase px-10 py-3.5 hover:bg-white hover:scale-105 hover:shadow-[0_0_25px_rgba(230,184,0,0.2)] transition-all duration-300"
          >
            Private Events
          </a>
          <a
            href="/off-site-events"
            className="border-2 border-cream/30 text-cream text-xs tracking-[0.2em] uppercase px-10 py-3 hover:border-gold hover:text-gold hover:scale-105 transition-all duration-300"
          >
            Off-Site Catering
          </a>
        </div>
      </div>
    </div>
  );
}
