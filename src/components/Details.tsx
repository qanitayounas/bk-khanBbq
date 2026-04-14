"use client";

import { useScrollReveal } from "./useScrollReveal";

const policies = [
  "Parking: Complimentary valet and public parking available",
  "Reservations for 8 or more guests require advance notice",
  "Dress Code: Smart casual — No athletic wear or flip-flops (Management reserves the right to deny admission)",
  "No Pets Allowed (Service animals welcome)",
  "No Smoking or Vaping on premises",
  "Children of all ages are welcome; kids' menu available",
  "Payments: Visa, MasterCard, American Express, Discover, and BK Khan's Gift Cards accepted",
  "20% gratuity added for parties of 8 or more",
  "Outside desserts or cakes are subject to a $5 per person plating fee",
  "To maintain the comfort of our guests, professional photography equipment requires prior approval",
  "We are a BYOB-friendly establishment — no corkage fee on select nights (ask for details)",
];

export default function Details() {
  const { ref: topRef, isVisible: topVisible } = useScrollReveal(0.1);
  const { ref: policyRef, isVisible: policyVisible } = useScrollReveal(0.1);
  const { ref: contactRef, isVisible: contactVisible } = useScrollReveal(0.1);

  return (
    <section className="relative overflow-hidden">
      {/* ===== White Section: Overview, Hours, Policies ===== */}
      <div className="relative bg-cream">
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23c9a84c' stroke-width='0.3'%3E%3Cpath d='M40 10 Q55 25 40 40 Q25 55 10 40 Q25 25 40 10Z'/%3E%3Ccircle cx='40' cy='40' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "80px 80px",
        }} />

        {/* Overview & Hours */}
        <div className="relative z-10 pt-44 md:pt-52 lg:pt-56 pb-16 md:pb-24">
          <div
            ref={topRef}
            className={`max-w-6xl mx-auto px-4 md:px-8 transition-all duration-1000 ${
              topVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 lg:gap-28">
              {/* Overview */}
              <div className={`transition-all duration-700 delay-200 ${topVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
                <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-charcoal tracking-wide uppercase mb-6">
                  Overview
                </h2>
                <div className="w-12 h-px bg-gold-dark/40 mb-6" />
                <p className="text-charcoal/60 text-sm md:text-base leading-[1.9]">
                  You&apos;ll find BK Khan&apos;s BBQ on Westheimer Road in Houston&apos;s
                  vibrant Galleria district — where the energy of the city meets the
                  soul of slow-smoked perfection. Our two-level space combines the
                  warmth of a traditional Texas smokehouse with the refinement of a
                  fine dining experience. Guests are treated to three generations of
                  family recipes, a curated craft cocktail program, and hospitality
                  that makes every visit feel like coming home.
                </p>
              </div>

              {/* Hours */}
              <div className={`transition-all duration-700 delay-400 ${topVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
                <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-charcoal tracking-wide uppercase mb-6">
                  Hours
                </h2>
                <div className="w-12 h-px bg-gold-dark/40 mb-6" />

                <div className="space-y-4">
                  <div>
                    <p className="text-gold-dark text-sm tracking-wider mb-2">Dinner:</p>
                    <div className="space-y-1 text-charcoal/60 text-sm">
                      <p>Monday – Thursday: 5pm to 10pm</p>
                      <p>Friday – Saturday: 12pm to 11pm</p>
                      <p>Sunday: 12pm to 10pm</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-gold-dark text-sm tracking-wider mb-2">Lunch (Fri–Sun):</p>
                    <div className="space-y-1 text-charcoal/60 text-sm">
                      <p>Friday – Sunday: 12pm to 3pm</p>
                    </div>
                  </div>

                  <div className="pt-2">
                    <p className="text-charcoal/40 text-sm italic">
                      Private Events are welcome for both Lunch &amp; Dinner, 7 days a week
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Policies */}
        <div className="relative z-10 pb-16 md:pb-24">
          <div
            ref={policyRef}
            className={`max-w-6xl mx-auto px-4 md:px-8 transition-all duration-1000 ${
              policyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="border-t border-charcoal/10 pt-10 md:pt-14">
              <ul className="space-y-3">
                {policies.map((policy, i) => (
                  <li
                    key={i}
                    className={`flex items-start gap-3 text-charcoal/55 text-sm leading-relaxed transition-all duration-500 ${
                      policyVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                    }`}
                    style={{ transitionDelay: `${i * 80}ms` }}
                  >
                    <span className="text-gold-dark/50 mt-1 shrink-0">•</span>
                    <span>{policy}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Charcoal Section: Contact & Map ===== */}
      <div className="relative bg-charcoal">
        <div className="relative z-10 py-12 md:py-20">
          <div
            ref={contactRef}
            className={`max-w-6xl mx-auto px-4 md:px-8 transition-all duration-1000 ${
              contactVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Contact Info */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-10 md:mb-14">
              <a
                href="tel:7132428087"
                className="text-cream/70 text-sm hover:text-gold transition-colors duration-300 tracking-wider"
              >
                713.242.8087
              </a>
              <span className="hidden md:block text-gold/30">|</span>
              <a
                href="mailto:reservation@bkkhansbbq.com"
                className="text-cream/70 text-sm hover:text-gold transition-colors duration-300 tracking-wider"
              >
                reservation@bkkhansbbq.com
              </a>
            </div>

            {/* Address */}
            <p className="text-center text-cream/50 text-sm tracking-wider mb-8 md:mb-12">
              5115 Westheimer Rd, Ste 3500, Houston, TX 77056
            </p>

            {/* Map */}
            <div className={`w-full max-w-4xl mx-auto overflow-hidden shadow-lg transition-all duration-700 delay-300 ${contactVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.2!2d-95.461!3d29.7387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDQ0JzE5LjMiTiA5NcKwMjcnMzkuNiJX!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[250px] md:h-[350px]"
                title="BK Khan's BBQ Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
