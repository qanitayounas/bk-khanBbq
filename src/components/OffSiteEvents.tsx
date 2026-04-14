"use client";

import { useEffect, useState } from "react";
import { useScrollReveal } from "./useScrollReveal";

const services = [
  {
    title: "Corporate Events",
    description:
      "Elevate your next corporate gathering with BK Khan's signature BBQ experience. From board meetings to company-wide celebrations, our team delivers a curated menu that sparks conversation and leaves a lasting impression on clients and colleagues alike.",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="6" y="14" width="36" height="28" rx="2" />
        <path d="M6 22h36" />
        <path d="M16 14V8h16v6" />
        <circle cx="24" cy="32" r="4" />
      </svg>
    ),
  },
  {
    title: "Weddings & Receptions",
    description:
      "Your love story deserves a feast to match. We craft bespoke wedding menus that blend the richness of our heritage with the celebratory spirit of Texas — from cocktail hour bites to the grand reception spread. Let us make your special day unforgettable.",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M24 4C18 4 14 10 14 16c0 4 2 7 5 9l-3 15h16l-3-15c3-2 5-5 5-9 0-6-4-12-10-12z" />
        <path d="M20 40h8v4h-8z" />
        <path d="M18 16c0-3 2-6 6-6" />
      </svg>
    ),
  },
  {
    title: "Social Celebrations",
    description:
      "Birthdays, anniversaries, graduations, or just because — every milestone deserves the BK Khan's touch. Our off-site catering transforms any venue into a destination dining experience with full-service setup, staffing, and cleanup.",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="24" cy="24" r="18" />
        <path d="M24 10v14l8 8" />
        <circle cx="24" cy="24" r="2" fill="currentColor" />
        <path d="M15 6l-3-3M33 6l3-3" />
      </svg>
    ),
  },
  {
    title: "Film & Production Catering",
    description:
      "Keep your cast and crew fueled with Houston's finest BBQ. We understand the pace of production — our team delivers on schedule, sets up efficiently, and serves food that keeps energy high from the first take to the final wrap.",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="10" width="40" height="28" rx="2" />
        <path d="M4 18h40" />
        <path d="M12 10V6M20 10V6M28 10V6M36 10V6" />
        <path d="M12 18v4M20 18v4M28 18v4M36 18v4" />
        <circle cx="24" cy="30" r="5" />
        <path d="M22 28l4 2-4 2z" fill="currentColor" />
      </svg>
    ),
  },
];

const whyChooseUs = [
  {
    title: "Customized Menus",
    text: "Every event gets a bespoke menu crafted to your preferences, dietary needs, and budget — from our signature smoked brisket to vegetarian-friendly sides.",
  },
  {
    title: "Full-Service Team",
    text: "Our experienced staff handles setup, service, and breakdown so you can focus on your guests. White-glove hospitality, BBQ soul.",
  },
  {
    title: "Any Venue, Any Size",
    text: "From a backyard for 20 to a ballroom for 500, we bring the full BK Khan's experience anywhere in the Greater Houston area.",
  },
  {
    title: "Premium Equipment",
    text: "We arrive with our own smokers, warmers, serving stations, and everything needed to deliver restaurant-quality food at your location.",
  },
];

export default function OffSiteEvents() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal(0.2);
  const { ref: whyRef, isVisible: whyVisible } = useScrollReveal(0.15);
  const { ref: servicesHeaderRef, isVisible: servicesHeaderVisible } = useScrollReveal(0.2);
  const { ref: howHeaderRef, isVisible: howHeaderVisible } = useScrollReveal(0.2);
  const { ref: quoteRef, isVisible: quoteVisible } = useScrollReveal(0.15);
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHeroLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative bg-cream overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23996633' stroke-width='0.4'%3E%3Cpath d='M50 10 Q65 25 50 50 Q35 75 20 50 Q5 25 50 10Z'/%3E%3Ccircle cx='50' cy='35' r='4'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
        backgroundSize: "100px 100px",
      }} />

      {/* ===== Hero Section ===== */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src="/images/hero.png"
          alt="BK Khan's BBQ off-site catering spread"
          className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] ease-out ${
            heroLoaded ? "scale-100" : "scale-110"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-cream" />

        {/* Animated gold lines */}
        <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent transition-all duration-[2000ms] delay-700 ${heroLoaded ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`} />

        <div
          ref={headerRef}
          className={`absolute inset-0 flex flex-col items-center justify-end pb-16 md:pb-20 lg:pb-24 text-center px-4 transition-all duration-1000 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className={`font-heading text-3xl md:text-5xl lg:text-6xl text-white tracking-wide mb-4 transition-all duration-700 delay-200 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            Off-Site Events
          </h1>
          <p className={`text-white/70 max-w-xl text-sm md:text-base leading-relaxed transition-all duration-700 delay-600 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Bring Houston&apos;s most talked-about BBQ experience to your venue.
            Full-service catering for any occasion, anywhere in the Greater Houston area.
          </p>
        </div>
      </div>

      {/* ===== Services Grid ===== */}
      <div className="relative z-10 py-16 md:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div
            ref={servicesHeaderRef}
            className={`text-center mb-14 md:mb-20 transition-all duration-1000 ${
              servicesHeaderVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-gold-dark text-[10px] md:text-xs tracking-[0.4em] uppercase mb-3">
              What We Cater
            </p>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-charcoal tracking-wide">
              Events We Serve
            </h2>
            <div className={`w-16 h-px bg-gold/40 mx-auto mt-4 transition-all duration-700 delay-300 ${servicesHeaderVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`} />
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, i) => (
              <ServiceCard key={service.title} service={service} index={i} />
            ))}
          </div>
        </div>
      </div>

      {/* ===== Full-width Image Break with Parallax Feel ===== */}
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <img
          src="/images/hero2.png"
          alt="BK Khan's BBQ catering setup"
          className="absolute inset-0 w-full h-full object-cover scale-110"
          style={{ transform: "scale(1.1)" }}
        />
        <div className="absolute inset-0 bg-charcoal/50 backdrop-blur-[1px]" />
        <div
          ref={quoteRef}
          className={`absolute inset-0 flex items-center justify-center text-center px-4 transition-all duration-1200 ${
            quoteVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <blockquote className="max-w-2xl">
            {/* Decorative quote mark */}
            <div className={`text-gold/30 text-6xl md:text-8xl font-heading leading-none mb-2 transition-all duration-700 delay-200 ${quoteVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"}`}>
              &ldquo;
            </div>
            <p className={`font-heading text-xl md:text-2xl lg:text-3xl text-white italic leading-relaxed transition-all duration-700 delay-400 ${quoteVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              The food was the highlight of our entire event. Our guests are still
              talking about the brisket.
            </p>
            <div className={`flex items-center justify-center gap-3 mt-6 transition-all duration-700 delay-600 ${quoteVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <div className="w-8 h-px bg-gold/50" />
              <p className="text-gold text-sm tracking-wider">
                Corporate Client, Houston
              </p>
              <div className="w-8 h-px bg-gold/50" />
            </div>
          </blockquote>
        </div>
      </div>

      {/* ===== Why Choose Us ===== */}
      <div className="relative z-10 py-16 md:py-24 lg:py-32 bg-white">
        <div
          ref={whyRef}
          className={`max-w-6xl mx-auto px-4 md:px-6 transition-all duration-1000 ${
            whyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-14 md:mb-20">
            <p className="text-gold-dark text-[10px] md:text-xs tracking-[0.4em] uppercase mb-3">
              The BK Khan&apos;s Difference
            </p>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-charcoal tracking-wide">
              Why Choose Us
            </h2>
            <div className={`w-16 h-px bg-gold/40 mx-auto mt-4 transition-all duration-700 delay-300 ${whyVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`} />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, i) => (
              <WhyCard key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>

      {/* ===== How It Works ===== */}
      <div className="relative z-10 py-16 md:py-24 lg:py-32 bg-charcoal overflow-hidden">
        {/* Animated background glow orbs */}
        <div className="absolute top-1/4 left-[10%] w-64 h-64 rounded-full bg-gold/[0.03] blur-3xl pointer-events-none animate-pulse" />
        <div className="absolute bottom-1/4 right-[10%] w-48 h-48 rounded-full bg-gold/[0.04] blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: "1.5s" }} />

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23c9a84c' stroke-width='0.3'%3E%3Cpath d='M30 5 L35 25 L55 30 L35 35 L30 55 L25 35 L5 30 L25 25Z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "60px 60px",
        }} />

        <div className="max-w-5xl mx-auto px-4 md:px-6 relative z-10">
          <div
            ref={howHeaderRef}
            className={`text-center mb-14 md:mb-20 transition-all duration-1000 ${
              howHeaderVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className={`text-gold text-[10px] md:text-xs tracking-[0.4em] uppercase mb-3 transition-all duration-700 delay-200 ${howHeaderVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              Simple Process
            </p>
            <h2 className={`font-heading text-2xl md:text-3xl lg:text-4xl text-cream tracking-wide transition-all duration-700 delay-300 ${howHeaderVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              How It Works
            </h2>
            <div className={`w-16 h-px bg-gold/40 mx-auto mt-4 transition-all duration-700 delay-500 ${howHeaderVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`} />
          </div>

          <div className="grid md:grid-cols-3 gap-10 md:gap-8 relative">
            {/* Connecting line - animated */}
            <div className={`hidden md:block absolute top-10 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent transition-all duration-1000 delay-500 ${howHeaderVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`} />

            {[
              { step: "01", title: "Inquire", text: "Reach out with your event details — date, guest count, venue, and vision. We'll respond within 24 hours." },
              { step: "02", title: "Customize", text: "Our events team designs a custom menu and service plan tailored to your occasion, dietary needs, and budget." },
              { step: "03", title: "Celebrate", text: "We arrive, set up, serve, and clean up. You enjoy the party. It's that simple." },
            ].map((item, i) => (
              <StepCard key={item.step} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <div
      ref={ref}
      className={`bg-white p-5 md:p-8 lg:p-10 shadow-sm transition-all duration-700 group
        hover:shadow-xl hover:-translate-y-1
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Gold top accent line */}
      <div className={`w-0 h-[2px] bg-gold mb-6 transition-all duration-700 delay-300 ${isVisible ? "w-12" : "w-0"}`} />
      <div className="text-gold-dark/50 mb-5 group-hover:text-gold-dark group-hover:scale-110 transition-all duration-500 origin-left">
        {service.icon}
      </div>
      <h3 className="font-heading text-xl md:text-2xl text-charcoal tracking-wide mb-3 uppercase group-hover:text-gold-dark transition-colors duration-500">
        {service.title}
      </h3>
      <p className="text-charcoal/55 text-sm leading-relaxed">
        {service.description}
      </p>
      {/* Bottom hover line */}
      <div className="w-0 group-hover:w-full h-px bg-gold/30 mt-6 transition-all duration-500" />
    </div>
  );
}

function WhyCard({
  item,
  index,
}: {
  item: (typeof whyChooseUs)[number];
  index: number;
}) {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <div
      ref={ref}
      className={`text-center group transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-500">
        <div className="w-2.5 h-2.5 rounded-full bg-gold-dark group-hover:scale-125 transition-transform duration-500" />
      </div>
      <h3 className="font-heading text-base md:text-lg text-charcoal tracking-wide mb-2 uppercase group-hover:text-gold-dark transition-colors duration-300">
        {item.title}
      </h3>
      <p className="text-charcoal/55 text-sm leading-relaxed">
        {item.text}
      </p>
    </div>
  );
}

function StepCard({
  item,
  index,
}: {
  item: { step: string; title: string; text: string };
  index: number;
}) {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <div
      ref={ref}
      className={`text-center relative group transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className={`w-20 h-20 mx-auto mb-5 rounded-full border-2 border-gold/30 flex items-center justify-center bg-charcoal transition-all duration-700 delay-300 group-hover:border-gold group-hover:shadow-[0_0_20px_rgba(230,184,0,0.15)] group-hover:scale-110 ${
        isVisible ? "scale-100 border-gold/40" : "scale-75 border-transparent"
      }`}>
        <span className="font-heading text-xl text-gold group-hover:scale-110 transition-transform duration-500">{item.step}</span>
      </div>
      <h3 className="font-heading text-lg md:text-xl text-cream tracking-wide mb-2 uppercase group-hover:text-gold transition-colors duration-500">
        {item.title}
      </h3>
      <p className="text-cream/50 text-sm leading-relaxed max-w-xs mx-auto group-hover:text-cream/70 transition-colors duration-500">
        {item.text}
      </p>
    </div>
  );
}

