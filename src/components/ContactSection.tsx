"use client";

import ScrollReveal from "./ScrollReveal";

export default function ContactSection() {
  return (
    <section className="section-padding bg-bg-primary pattern-bg">
      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Contact info */}
          <ScrollReveal className="reveal-left">
            <div>
              {/* Decorative ornament */}
              <div className="flex items-center gap-2 mb-8">
                <svg width="24" height="24" viewBox="0 0 24 24" className="text-gold">
                  <path d="M12 2L14 8L20 10L14 12L12 18L10 12L4 10L10 8Z" fill="currentColor" opacity="0.6" />
                </svg>
                <svg width="16" height="16" viewBox="0 0 16 16" className="text-gold">
                  <path d="M8 1L9.5 5.5L14 7L9.5 8.5L8 13L6.5 8.5L2 7L6.5 5.5Z" fill="currentColor" opacity="0.4" />
                </svg>
              </div>

              <h2 className="font-[family-name:var(--font-sans)] text-xl md:text-2xl tracking-[6px] uppercase text-text-primary font-light mb-10">
                Contact Us
              </h2>

              <p className="font-[family-name:var(--font-body)] text-text-secondary font-light leading-[1.9] mb-8 max-w-md">
                Join us on this journey. If you have any questions or want to
                make a reservation, please fill out the following form.
              </p>

              <div className="space-y-4 mb-10">
                <a
                  href="tel:+15550001234"
                  className="block font-[family-name:var(--font-body)] text-text-secondary hover:text-gold transition-colors text-lg font-light"
                >
                  713-236-0887
                </a>
                <a
                  href="mailto:info@bkkhansbbq.com"
                  className="block font-[family-name:var(--font-body)] text-text-secondary hover:text-gold transition-colors text-lg font-light"
                >
                  info@bkkhansbbq.com
                </a>
                <p className="font-[family-name:var(--font-body)] text-text-secondary text-lg font-light">
                  123 Flame Street, Ste 100<br />
                  Houston, TX 77001
                </p>
              </div>

              {/* Hours */}
              <div className="border-t border-border pt-8">
                <h3 className="font-[family-name:var(--font-sans)] text-sm tracking-[4px] uppercase text-text-primary mb-6">
                  Hours
                </h3>
                <div className="space-y-2 font-[family-name:var(--font-body)] text-text-secondary font-light">
                  <p>
                    <span className="text-cream italic">Dinner</span>
                  </p>
                  <p>Monday - Thursday: 5pm to 10pm</p>
                  <p>Friday - Saturday: 12pm to 11pm</p>
                  <p>Sunday: 12pm to 9pm</p>
                  <p className="mt-4 italic text-cream">
                    Private Events are welcome for both
                    <br />
                    Lunch & Dinner, 7 days a week
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right - Contact form */}
          <ScrollReveal className="reveal-right">
            <form className="space-y-6">
              {[
                { label: "Name", type: "text", placeholder: "" },
                { label: "Email", type: "email", placeholder: "" },
                { label: "Phone", type: "tel", placeholder: "" },
              ].map((field) => (
                <div key={field.label}>
                  <label className="block font-[family-name:var(--font-sans)] text-xs tracking-[2px] uppercase text-text-secondary mb-2">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    className="w-full bg-transparent border border-border px-4 py-3 text-cream font-[family-name:var(--font-body)] text-base focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
              ))}

              <div>
                <label className="block font-[family-name:var(--font-sans)] text-xs tracking-[2px] uppercase text-text-secondary mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full bg-transparent border border-border px-4 py-3 text-cream font-[family-name:var(--font-body)] text-base focus:outline-none focus:border-gold transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button type="submit" className="btn-gold-filled w-full sm:w-auto">
                  Submit
                </button>
              </div>

              {/* Gold divider line under form */}
              <div className="pt-4">
                <div className="gold-line" />
              </div>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
