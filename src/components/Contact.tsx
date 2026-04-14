"use client";

import { useState } from "react";
import { useScrollReveal } from "./useScrollReveal";

export default function Contact() {
  const { ref: leftRef, isVisible: leftVisible } = useScrollReveal(0.15);
  const { ref: rightRef, isVisible: rightVisible } = useScrollReveal(0.15);
  const { ref: imageRef, isVisible: imageVisible } = useScrollReveal(0.1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="relative pt-10 md:pt-20 lg:pt-28 pb-0 bg-dark overflow-hidden">
      {/* Damask/ornamental pattern */}
      <div className="absolute inset-0 w-full h-full opacity-[0.06]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23888888' stroke-width='0.6'%3E%3Cpath d='M60 10 C70 20 75 35 60 50 C45 35 50 20 60 10Z'/%3E%3Cpath d='M60 110 C70 100 75 85 60 70 C45 85 50 100 60 110Z'/%3E%3Cpath d='M10 60 C20 50 35 45 50 60 C35 75 20 70 10 60Z'/%3E%3Cpath d='M110 60 C100 50 85 45 70 60 C85 75 100 70 110 60Z'/%3E%3Ccircle cx='60' cy='60' r='3'/%3E%3Ccircle cx='60' cy='60' r='8'/%3E%3Cpath d='M40 40 Q50 35 60 40 Q70 35 80 40' /%3E%3Cpath d='M40 80 Q50 85 60 80 Q70 85 80 80' /%3E%3C/g%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
        backgroundSize: "120px 120px",
      }} />
      {/* Diamond lattice pattern */}
      <div className="absolute inset-0 w-full h-full opacity-[0.04]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23888888' stroke-width='0.4'%3E%3Cpath d='M40 0 L80 40 L40 80 L0 40Z'/%3E%3Cpath d='M40 15 L65 40 L40 65 L15 40Z'/%3E%3Ccircle cx='40' cy='40' r='2'/%3E%3Cpath d='M40 0 L40 15 M80 40 L65 40 M40 80 L40 65 M0 40 L15 40'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
        backgroundSize: "80px 80px",
      }} />

      <div className="max-w-[1400px] mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-24">
          {/* Left - Contact Info */}
          <div ref={leftRef} className={`transition-all duration-1000 ${leftVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            {/* Decorative knot icon */}
            <div className="text-cream/50 mb-8">
              <svg className="w-14 h-14" viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round">
                {/* Top loop */}
                <path d="M28 8 C22 8 16 14 20 20 C24 26 28 22 28 22 C28 22 32 26 36 20 C40 14 34 8 28 8Z" />
                {/* Bottom loop */}
                <path d="M28 48 C22 48 16 42 20 36 C24 30 28 34 28 34 C28 34 32 30 36 36 C40 42 34 48 28 48Z" />
                {/* Left loop */}
                <path d="M8 28 C8 22 14 16 20 20 C26 24 22 28 22 28 C22 28 26 32 20 36 C14 40 8 34 8 28Z" />
                {/* Right loop */}
                <path d="M48 28 C48 22 42 16 36 20 C30 24 34 28 34 28 C34 28 30 32 36 36 C42 40 48 34 48 28Z" />
                {/* Center dot */}
                <circle cx="28" cy="28" r="2" fill="currentColor" />
              </svg>
            </div>

            <h2 className="font-heading text-cream text-lg md:text-2xl tracking-[0.15em] md:tracking-[0.25em] uppercase mb-4 md:mb-6">
              Contact Us
            </h2>

            <p className="text-cream/50 text-sm leading-relaxed mb-8 max-w-sm">
              Join us on this Journey. If you have any questions or want to
              make a reservation, please fill out the following form.
            </p>

            <div className="space-y-3 mb-10">
              <a
                href="tel:7132428087"
                className="text-cream/60 text-sm underline underline-offset-4 decoration-cream/20 block"
              >
                713.242.8087
              </a>
              <a
                href="mailto:reservation@bkkhansbbq.com"
                className="text-cream/60 text-sm underline underline-offset-4 decoration-cream/20 block"
              >
                reservation@bkkhansbbq.com
              </a>
              <p className="text-cream/50 text-sm">
                5115 Westheimer Rd, Ste 3500 Houston, TX 77056
              </p>
            </div>

            {/* Hours */}
            <h3 className="font-heading text-cream text-base tracking-[0.25em] uppercase mb-5">
              Hours
            </h3>

            <div className="space-y-2 mb-8">
              <p className="text-cream/50 text-sm">
                <span className="text-gold">Dinner:</span>
              </p>
              <p className="text-cream/50 text-sm ml-4">
                Monday - Thursday: 5pm to 10pm
              </p>
              <p className="text-cream/50 text-sm ml-4">
                Friday - Saturday: 12pm to 11pm
              </p>
              <p className="text-cream/50 text-sm ml-4">
                Sunday: 12pm to 10pm
              </p>
            </div>

            <p className="text-cream/40 text-sm leading-relaxed">
              Private Events are welcome for both<br />
              Lunch & Dinner, 7 days a week
            </p>
          </div>

          {/* Right - Form */}
          <div ref={rightRef} className={`transition-all duration-1000 delay-200 ${rightVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            {submitted ? (
              <div className="text-center py-16 animate-fade-in">
                <span className="text-gold text-4xl mb-4 block">&#10003;</span>
                <h4 className="font-heading text-xl text-cream mb-2">
                  Thank You
                </h4>
                <p className="text-cream/50 text-sm">
                  We&rsquo;ll be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label className="text-gold text-xs tracking-[0.2em] uppercase block mb-3">
                    Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full bg-transparent border-b border-cream/20 text-cream text-sm px-0 py-2 focus:border-gold/60 focus:outline-none transition-colors duration-300"
                  />
                </div>

                <div>
                  <label className="text-gold text-xs tracking-[0.2em] uppercase block mb-3">
                    Email*
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full bg-transparent border-b border-cream/20 text-cream text-sm px-0 py-2 focus:border-gold/60 focus:outline-none transition-colors duration-300"
                  />
                </div>

                <div>
                  <label className="text-gold text-xs tracking-[0.2em] uppercase block mb-3">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-transparent border-b border-cream/20 text-cream text-sm px-0 py-2 focus:border-gold/60 focus:outline-none transition-colors duration-300"
                  />
                </div>

                <div>
                  <label className="text-gold text-xs tracking-[0.2em] uppercase block mb-3">
                    Message
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-transparent border-b border-cream/20 text-cream text-sm px-0 py-2 focus:border-gold/60 focus:outline-none transition-colors duration-300 resize-none"
                  />
                </div>

                <div className="flex justify-end mt-2">
                  <button
                    type="submit"
                    className="bg-gold text-dark text-xs tracking-[0.3em] uppercase px-16 py-4 hover:bg-cream transition-all duration-300"
                  >
                    Submit
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Food image - centered semi-circle */}
      <div ref={imageRef} className={`relative z-10 -mt-4 md:-mt-8 flex justify-center overflow-hidden transition-all duration-1000 ${imageVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}>
        <div className="w-[90%] sm:w-[85%] md:w-[60%] max-w-[1000px] mx-auto aspect-[2/1] rounded-t-full overflow-hidden">
          <img
            src="/images/image2.jpg"
            alt="Signature dish"
            className="w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
