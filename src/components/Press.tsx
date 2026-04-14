"use client";

import { useScrollReveal } from "./useScrollReveal";

const pressItems = [
  {
    publication: "Houstonia Magazine",
    title: "Houston's Boldest New BBQ Destination",
    image: "/images/hero.png",
    link: "#",
    rotate: "-6deg",
  },
  {
    publication: "Houston Chronicle",
    title: "BK Khan's: Where Three Generations of Spice Meet Texas Smoke",
    image: "/images/dish1.webp",
    link: "#",
    rotate: "4deg",
  },
  {
    publication: "Eater Houston",
    title: "The 15 Best New Restaurants in Houston Right Now",
    image: "/images/hero2.png",
    link: "#",
    rotate: "-3deg",
  },
  {
    publication: "Houston Business Journal",
    title: "How BK Khan's BBQ is Redefining Houston's Food Scene",
    image: "/images/event1.jpg",
    link: "#",
    rotate: "5deg",
  },
  {
    publication: "Texas Monthly",
    title: "The New Guard of Texas BBQ",
    image: "/images/dish2.webp",
    link: "#",
    rotate: "-5deg",
  },
  {
    publication: "Food & Wine",
    title: "A Family's 100-Year BBQ Legacy Comes to Houston",
    image: "/images/menu.webp",
    link: "#",
    rotate: "3deg",
  },
  {
    publication: "CultureMap Houston",
    title: "BK Khan's BBQ Brings Tandoor-Smoked Brisket to Westheimer",
    image: "/images/event2.jpg",
    link: "#",
    rotate: "-4deg",
  },
  {
    publication: "Houston Press",
    title: "Best New BBQ Joint: BK Khan's Earns Top Honors",
    image: "/images/press1.jpg",
    link: "#",
    rotate: "6deg",
  },
  {
    publication: "PaperCity Magazine",
    title: "Smoke & Spice: Inside BK Khan's Culinary Revolution",
    image: "/images/press2.avif",
    link: "#",
    rotate: "-2deg",
  },
  {
    publication: "Forbes Travel",
    title: "10 Houston Restaurants Worth Flying For",
    image: "/images/press3.jpg",
    link: "#",
    rotate: "4deg",
  },
  {
    publication: "The Infatuation",
    title: "BK Khan's BBQ: The Only Review You Need",
    image: "/images/press4.jpg",
    link: "#",
    rotate: "-5deg",
  },
  {
    publication: "Bon Appétit",
    title: "The Fusion Pitmaster Changing BBQ Forever",
    image: "/images/event3.jpg",
    link: "#",
    rotate: "3deg",
  },
  {
    publication: "Thrillist",
    title: "The Pitmaster Who Bridges Two Continents With Smoke",
    image: "/images/event4.jpg",
    link: "#",
    rotate: "-3deg",
  },
  {
    publication: "GQ",
    title: "Houston's Most Stylish Restaurant Also Has the Best Brisket",
    image: "/images/event5.avif",
    link: "#",
    rotate: "5deg",
  },
  {
    publication: "Condé Nast Traveler",
    title: "Where to Eat in Houston: The Definitive List",
    image: "/images/dish3.jpg",
    link: "#",
    rotate: "-4deg",
  },
  {
    publication: "Bloomberg",
    title: "A Family's Three-Generation BBQ Empire Hits Houston",
    image: "/images/image.png",
    link: "#",
    rotate: "2deg",
  },
  {
    publication: "Robb Report",
    title: "Fine Dining Meets Open Flame at BK Khan's",
    image: "/images/image2.jpg",
    link: "#",
    rotate: "-6deg",
  },
  {
    publication: "Travel + Leisure",
    title: "The Best BBQ in America Isn't Where You Think",
    image: "/images/press1.jpg",
    link: "#",
    rotate: "4deg",
  },
  {
    publication: "New York Times",
    title: "Houston's New BBQ King Has Roots in Another Continent",
    image: "/images/press4.jpg",
    link: "#",
    rotate: "-2deg",
  },
];

const featuredArticle = {
  publication: "Texas Monthly",
  title: "BK Khan's Signature: Cardamom-Smoked Brisket",
  description:
    "How a three-generation family recipe and Texas post oak created the most talked-about brisket in Houston. Our pitmasters share the secrets behind the 16-hour smoke that has critics and locals lining up.",
  image: "/images/image2.jpg",
  link: "#",
};

export default function Press() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal(0.1);
  const { ref: galleryRef, isVisible: galleryVisible } = useScrollReveal(0.05);
  const { ref: featuredRef, isVisible: featuredVisible } = useScrollReveal(0.15);

  return (
    <section className="relative bg-charcoal min-h-screen overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23c9a84c' stroke-width='0.3'%3E%3Cpath d='M30 5 L35 25 L55 30 L35 35 L30 55 L25 35 L5 30 L25 25Z'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
        backgroundSize: "60px 60px",
      }} />

      {/* Header */}
      <div className="relative z-10 pt-44 md:pt-52 lg:pt-56 pb-10 md:pb-14">
        <div
          ref={headerRef}
          className={`text-center transition-all duration-1000 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="#"
            className={`inline-block border-2 border-cream/40 text-cream text-xs md:text-sm tracking-[0.3em] uppercase px-8 md:px-12 py-3 md:py-4 hover:border-gold hover:text-gold transition-all duration-500 delay-300 ${
              headerVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            Press Archive
          </a>
        </div>
      </div>

      {/* Press Gallery - Scattered Magazine Style */}
      <div className="relative z-10 pb-16 md:pb-24">
        <div
          ref={galleryRef}
          className="max-w-7xl mx-auto px-4 md:px-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {pressItems.map((item, i) => (
              <PressCard key={item.title} item={item} index={i} isVisible={galleryVisible} />
            ))}
          </div>
        </div>
      </div>

      {/* Featured Article */}
      <div className="relative z-10 pb-16 md:pb-24">
        <div
          ref={featuredRef}
          className={`max-w-5xl mx-auto px-4 md:px-8 transition-all duration-1000 ${
            featuredVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="border-t border-cream/10 pt-12 md:pt-16">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              {/* Image */}
              <div className={`w-full md:w-1/2 max-w-md transition-all duration-700 delay-200 ${featuredVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
                <div className="relative group overflow-hidden">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/40 via-transparent to-transparent" />
                </div>
              </div>

              {/* Content */}
              <div className={`w-full md:w-1/2 text-center md:text-left transition-all duration-700 delay-400 ${featuredVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
                <p className="text-gold/60 text-[10px] md:text-xs tracking-[0.3em] uppercase mb-3">
                  {featuredArticle.publication}
                </p>
                <h3 className="font-heading text-xl md:text-2xl lg:text-3xl text-cream tracking-wide mb-4 uppercase">
                  {featuredArticle.title}
                </h3>
                <p className="text-cream/45 text-sm leading-relaxed mb-6">
                  {featuredArticle.description}
                </p>
                <a
                  href={featuredArticle.link}
                  className="inline-block border-2 border-cream/40 text-cream text-xs tracking-[0.25em] uppercase px-8 py-3 hover:border-gold hover:text-gold transition-all duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PressCard({
  item,
  index,
  isVisible,
}: {
  item: (typeof pressItems)[number];
  index: number;
  isVisible: boolean;
}) {
  return (
    <a
      href={item.link}
      className={`group relative block transition-all duration-700 hover:z-10 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{
        transitionDelay: `${index * 100}ms`,
        transform: isVisible ? `rotate(${item.rotate})` : `rotate(${item.rotate}) translateY(48px)`,
      }}
    >
      <div className="relative overflow-hidden shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500">
        <div className="aspect-[3/4] overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
        {/* Text */}
        <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
          <p className="text-gold text-[9px] md:text-[10px] tracking-[0.2em] uppercase mb-1">
            {item.publication}
          </p>
          <p className="text-white text-[10px] md:text-xs leading-snug line-clamp-2">
            {item.title}
          </p>
        </div>
      </div>
    </a>
  );
}
