"use client";

import { useScrollReveal } from "./useScrollReveal";

const eventSpaces = [
  {
    name: "The Khan Room",
    description:
      "Our most exclusive private dining space, The Khan Room embodies the grandeur of a royal family feast. Hand-selected woodwork and warm amber lighting create an atmosphere of intimacy and prestige. Perfect for milestone celebrations, corporate dinners, and gatherings where every detail matters.",
    features: ["24-36 Seated", "30-40 Cocktail", "75\" TV & AV System", "Dedicated Service Team"],
    image: "/images/event2.jpg",
  },
  {
    name: "The Smokehouse Lounge",
    description:
      "Where the aroma of slow-smoked meats meets sophisticated ambiance. The Smokehouse Lounge features exposed brick, custom ironwork, and views into our open pit kitchen. Watch our pitmasters craft your meal while you entertain your guests in true Texas style.",
    features: ["20-30 Seated", "25-35 Cocktail", "Open Kitchen View", "Semi-Private"],
    image: "/images/event1.jpg",
  },
  {
    name: "The Courtyard",
    description:
      "Our stunning covered outdoor space brings the spirit of a Khan family courtyard gathering to Houston. Equipped with ceiling fans, string lighting, and a dedicated bar, The Courtyard is the ideal setting for rehearsal dinners, engagement parties, and relaxed celebrations under the Texas sky.",
    features: ["18-32 Seated", "30-45 Cocktail", "Outdoor Bar", "Audio System"],
    image: "/images/event3.jpg",
  },
  {
    name: "The Heritage Hall",
    description:
      "A multi-faceted event space that tells the story of three generations through art, photography, and curated artifacts from our family's culinary journey. The Heritage Hall features a massive live-edge mesquite table that seats your entire party as one family — because at BK Khan's, that's exactly what you are.",
    features: ["40-60 Seated", "50-70 Cocktail", "Full AV System", "Private Entrance"],
    image: "/images/event4.jpg",
  },
  {
    name: "The Ember Room",
    description:
      "Inspired by the glowing embers of our ancestral cooking pits, this intimate space is wrapped in warm tones and soft lighting. The Ember Room is perfect for business meetings, intimate dinners, and private tastings where conversation flows as freely as our craft cocktails.",
    features: ["12-18 Seated", "15-25 Cocktail", "Audio Capabilities", "Custom Menu Options"],
    image: "/images/event5.avif",
  },
];

export default function PrivateEvents() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal(0.2);

  return (
    <section className="relative bg-cream pt-40 md:pt-48 lg:pt-56 pb-20 md:pb-28 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23996633' stroke-width='0.4'%3E%3Cpath d='M60 10 C70 20 75 35 60 50 C45 35 50 20 60 10Z'/%3E%3Cpath d='M60 110 C70 100 75 85 60 70 C45 85 50 100 60 110Z'/%3E%3Cpath d='M10 60 C20 50 35 45 50 60 C35 75 20 70 10 60Z'/%3E%3Cpath d='M110 60 C100 50 85 45 70 60 C85 75 100 70 110 60Z'/%3E%3Ccircle cx='60' cy='60' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
        backgroundSize: "120px 120px",
      }} />

      {/* Header */}
      <div
        ref={headerRef}
        className={`text-center mb-16 md:mb-24 relative z-10 transition-all duration-1000 ${
          headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Decorative icon */}
        <div className="flex justify-center mb-5">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="opacity-40">
            <rect x="5" y="5" width="12" height="12" stroke="#8B6914" strokeWidth="1.5" transform="rotate(45 11 11)" />
            <rect x="23" y="5" width="12" height="12" stroke="#8B6914" strokeWidth="1.5" transform="rotate(45 29 11)" />
            <rect x="5" y="23" width="12" height="12" stroke="#8B6914" strokeWidth="1.5" transform="rotate(45 11 29)" />
            <rect x="23" y="23" width="12" height="12" stroke="#8B6914" strokeWidth="1.5" transform="rotate(45 29 29)" />
          </svg>
        </div>
        <p className="text-gold-dark text-[10px] md:text-xs tracking-[0.5em] uppercase mb-3">
          Exclusive Spaces
        </p>
        <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-charcoal tracking-wide">
          Private Events
        </h1>
        <p className="text-charcoal/50 max-w-xl mx-auto mt-5 leading-relaxed text-sm md:text-base px-4">
          Host your next celebration in one of Houston's most distinctive dining destinations.
          From intimate gatherings to grand celebrations, every event at BK Khan's is crafted with care.
        </p>
      </div>

      {/* Event Spaces */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        <div className="space-y-20 md:space-y-32">
          {eventSpaces.map((space, i) => (
            <EventSpace key={space.name} space={space} index={i} />
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <BottomCTA />
    </section>
  );
}

function EventSpace({
  space,
  index,
}: {
  space: (typeof eventSpaces)[number];
  index: number;
}) {
  const { ref, isVisible } = useScrollReveal(0.1);
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      <div className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-0`}>
        {/* Image */}
        <div className="flex-1 min-h-[250px] md:min-h-[350px] lg:min-h-[400px] relative overflow-hidden group">
          <img
            src={space.image}
            alt={space.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </div>

        {/* Content Card */}
        <div className="flex-1 bg-white p-5 md:p-8 lg:p-14 flex flex-col justify-center items-center text-center shadow-sm">
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-charcoal tracking-wide mb-4 md:mb-6 uppercase">
            {space.name}
          </h2>

          <p className="text-charcoal/60 text-sm md:text-base leading-relaxed max-w-md mb-6 md:mb-8">
            {space.description}
          </p>

          {/* Features */}
          <p className="text-gold-dark text-[10px] md:text-xs tracking-[0.35em] uppercase font-semibold mb-3">
            Features
          </p>
          <div className="space-y-1 mb-6 md:mb-8">
            {space.features.map((feature) => (
              <p key={feature} className="text-charcoal/50 text-sm">
                {feature}
              </p>
            ))}
          </div>

          {/* Reserve Button */}
          <a
            href="/private-event-form"
            className="inline-block bg-charcoal text-white text-xs tracking-[0.25em] uppercase px-10 py-3.5 hover:bg-gold-dark transition-colors duration-300"
          >
            Reserve
          </a>
        </div>
      </div>
    </div>
  );
}

function BottomCTA() {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <div
      ref={ref}
      className={`max-w-3xl mx-auto px-4 mt-20 md:mt-28 text-center relative z-10 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="w-px h-12 bg-gradient-to-b from-gold-dark/30 to-transparent mx-auto mb-6" />
      <h3 className="font-heading text-xl md:text-2xl lg:text-3xl text-charcoal mb-4">
        Planning Something Special?
      </h3>
      <p className="text-charcoal/50 text-sm md:text-base leading-relaxed mb-6 max-w-lg mx-auto">
        Our events team will work with you to customize every detail — from curated menus
        and craft cocktail packages to decor and entertainment. Let us make it unforgettable.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <a
          href="mailto:events@bkkhansbbq.com"
          className="bg-gold-dark text-white text-xs tracking-[0.2em] uppercase px-8 py-3.5 hover:bg-charcoal transition-colors duration-300"
        >
          Contact Events Team
        </a>
        <a
          href="tel:7132428087"
          className="border-2 border-charcoal/30 text-charcoal text-xs tracking-[0.2em] uppercase px-8 py-3 hover:border-gold-dark hover:text-gold-dark transition-colors duration-300"
        >
          Call 713.242.8087
        </a>
      </div>
    </div>
  );
}
