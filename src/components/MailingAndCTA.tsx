"use client";

import { useState, useEffect } from "react";
import { useScrollReveal } from "./useScrollReveal";

const plateImages = [
  "/images/dish1.webp",
  "/images/dish2.webp",
  "/images/dish3.jpg",
];

export default function MailingAndCTA() {
  const [email, setEmail] = useState("");
  const [currentPlate, setCurrentPlate] = useState(0);
  const { ref: mailingRef, isVisible: mailingVisible } = useScrollReveal(0.2);
  const { ref: questRef, isVisible: questVisible } = useScrollReveal(0.15);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPlate((prev) => (prev + 1) % plateImages.length);
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-dark overflow-hidden">
      {/* Ornate paisley/floral pattern overlay - covers full section */}
      <div className="absolute inset-0 w-full h-full opacity-[0.15]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23c9a84c' stroke-width='0.8'%3E%3Cpath d='M100 30 Q130 50 120 90 Q110 130 80 130 Q50 130 50 100 Q50 60 100 30Z'/%3E%3Cpath d='M90 50 Q110 60 105 85 Q100 110 80 110 Q65 110 65 95 Q65 70 90 50Z'/%3E%3Ccircle cx='85' cy='80' r='5'/%3E%3Ccircle cx='80' cy='95' r='3'/%3E%3Ccircle cx='90' cy='65' r='3'/%3E%3Cpath d='M140 140 Q160 120 170 140 Q180 160 160 170 Q140 180 130 160Z'/%3E%3Cpath d='M150 145 Q160 135 165 145 Q170 155 160 160 Q150 165 145 155Z'/%3E%3Cpath d='M10 10 Q30 5 25 25 Q20 45 5 30'/%3E%3Cpath d='M190 10 Q170 5 175 25 Q180 45 195 30'/%3E%3Cpath d='M10 190 Q30 195 25 175 Q20 155 5 170'/%3E%3Cpath d='M190 190 Q170 195 175 175 Q180 155 195 170'/%3E%3Ccircle cx='30' cy='170' r='2'/%3E%3Ccircle cx='40' cy='160' r='2'/%3E%3Ccircle cx='50' cy='155' r='2'/%3E%3Ccircle cx='170' cy='30' r='2'/%3E%3Ccircle cx='160' cy='40' r='2'/%3E%3Ccircle cx='155' cy='50' r='2'/%3E%3Ccircle cx='155' cy='155' r='15'/%3E%3Ccircle cx='155' cy='155' r='10'/%3E%3Ccircle cx='155' cy='155' r='5'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
        backgroundSize: "200px 200px",
      }} />
      {/* Secondary smaller repeating motif */}
      <div className="absolute inset-0 w-full h-full opacity-[0.1]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23c9a84c' stroke-width='0.5'%3E%3Cpath d='M50 10 Q65 25 50 50 Q35 75 20 50 Q5 25 50 10Z'/%3E%3Ccircle cx='50' cy='35' r='4'/%3E%3Cpath d='M50 50 Q60 45 55 55 Q50 65 45 55 Q40 45 50 50Z'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
        backgroundSize: "100px 100px",
      }} />

      {/* Join Mailing List */}
      <div ref={mailingRef} className={`relative z-10 bg-gold py-10 md:py-14 lg:py-20 transition-all duration-1000 ${mailingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="max-w-[1600px] mx-auto px-4 md:px-6">
          <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
            <h2 className="font-heading text-dark text-lg md:text-2xl lg:text-3xl tracking-[0.15em] md:tracking-[0.25em] uppercase leading-relaxed text-center md:text-left">
              Join the<br />
              Mailing List
            </h2>
            <div className="flex flex-col items-end gap-3 w-full md:w-[300px] lg:w-[340px]">
              <input
                type="email"
                placeholder="EMAIL"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white text-dark px-4 py-3 lg:px-5 lg:py-3.5 text-sm tracking-[0.1em] placeholder:text-muted border-none outline-none w-full"
              />
              <button className="bg-dark text-cream text-xs tracking-[0.25em] uppercase px-6 py-2.5 lg:px-8 lg:py-3 hover:bg-charcoal transition-colors duration-300">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quest Section */}
      <div ref={questRef} className="relative z-10 py-12 md:py-20 lg:py-28">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-20">
            {/* Left - Text & Buttons */}
            <div className={`flex-1 max-w-lg transition-all duration-1000 ${questVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
              <p className="font-heading text-cream/70 text-[10px] md:text-xs lg:text-sm tracking-[0.1em] lg:tracking-[0.12em] leading-[2] uppercase">
                A quest for authentic recipes and
                unique ingredients from the east and
                west, that have been gathered by three
                generations of an age-old family. A tribute
                to the innovations in royal kitchens that
                have led to a{" "}
                <span className="text-gold font-heading">culinary journey</span>
                {" "}across the country.{" "}
                <span className="text-gold font-heading">A Indian fine
                dining experience.</span>
              </p>

              <div className="flex gap-3 md:gap-4 mt-6 md:mt-10">
                <a
                  href="/menu"
                  className="border-2 border-cream/60 text-cream text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.25em] uppercase px-5 md:px-8 py-2.5 md:py-3 hover:bg-gold hover:text-dark hover:border-gold transition-all duration-300"
                >
                  Menu
                </a>
                <a
                  href="/the-journey"
                  className="border-2 border-cream/60 text-cream text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.25em] uppercase px-5 md:px-8 py-2.5 md:py-3 hover:bg-gold hover:text-dark hover:border-gold transition-all duration-300"
                >
                  The Journey
                </a>
              </div>
            </div>

            {/* Right - Single Rotating Plate */}
            <div className={`flex-1 flex justify-center md:justify-end transition-all duration-1000 delay-300 ${questVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
              <div className="relative w-[70%] sm:w-[60%] md:w-full max-w-[420px] aspect-square rounded-full overflow-hidden border-2 border-gold/20 shadow-2xl bg-dark-card">
                {/* Always visible first image as base */}
                <img
                  src={plateImages[0]}
                  alt="Dish"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {plateImages.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`Dish ${i + 1}`}
                    loading="eager"
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                      currentPlate === i ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
