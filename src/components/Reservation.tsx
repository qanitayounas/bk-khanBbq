"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

export default function Reservation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    occasion: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Your reservation request has been received.");
  };

  return (
    <section className="section-padding bg-bg-secondary relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full opacity-[0.03]"
        style={{
          background: "radial-gradient(circle, var(--color-gold), transparent 60%)",
        }}
      />

      <div className="relative max-w-3xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="ornament mb-8">
              <span className="font-[family-name:var(--font-sans)] text-[10px] font-light tracking-[5px] uppercase text-gold">
                Reservations
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold italic text-cream leading-[1.2] mb-6">
              Reserve Your Table
            </h2>
            <p className="font-[family-name:var(--font-body)] text-lg md:text-xl text-text-secondary font-light italic max-w-lg mx-auto">
              Join us for an unforgettable evening of flame-grilled excellence
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <form
            onSubmit={handleSubmit}
            className="border border-border p-8 md:p-14 bg-bg-primary/40 backdrop-blur-sm"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block font-[family-name:var(--font-sans)] text-[10px] tracking-[3px] uppercase text-gold mb-3">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-border py-3 text-cream font-[family-name:var(--font-body)] text-lg focus:outline-none focus:border-gold transition-colors duration-400 placeholder:text-text-muted"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block font-[family-name:var(--font-sans)] text-[10px] tracking-[3px] uppercase text-gold mb-3">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-border py-3 text-cream font-[family-name:var(--font-body)] text-lg focus:outline-none focus:border-gold transition-colors duration-400 placeholder:text-text-muted"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block font-[family-name:var(--font-sans)] text-[10px] tracking-[3px] uppercase text-gold mb-3">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-border py-3 text-cream font-[family-name:var(--font-body)] text-lg focus:outline-none focus:border-gold transition-colors duration-400 placeholder:text-text-muted"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              <div>
                <label className="block font-[family-name:var(--font-sans)] text-[10px] tracking-[3px] uppercase text-gold mb-3">
                  Number of Guests
                </label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-border py-3 text-cream font-[family-name:var(--font-body)] text-lg focus:outline-none focus:border-gold transition-colors duration-400 appearance-none cursor-pointer"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={n} className="bg-bg-primary text-cream">
                      {n} {n === 1 ? "Guest" : "Guests"}
                    </option>
                  ))}
                  <option value="8+" className="bg-bg-primary text-cream">
                    8+ Guests (Private Dining)
                  </option>
                </select>
              </div>
              <div>
                <label className="block font-[family-name:var(--font-sans)] text-[10px] tracking-[3px] uppercase text-gold mb-3">
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-border py-3 text-cream font-[family-name:var(--font-body)] text-lg focus:outline-none focus:border-gold transition-colors duration-400"
                />
              </div>
              <div>
                <label className="block font-[family-name:var(--font-sans)] text-[10px] tracking-[3px] uppercase text-gold mb-3">
                  Preferred Time
                </label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-border py-3 text-cream font-[family-name:var(--font-body)] text-lg focus:outline-none focus:border-gold transition-colors duration-400"
                />
              </div>
            </div>

            <div className="mt-8">
              <label className="block font-[family-name:var(--font-sans)] text-[10px] tracking-[3px] uppercase text-gold mb-3">
                Occasion
              </label>
              <select
                name="occasion"
                value={formData.occasion}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-border py-3 text-cream font-[family-name:var(--font-body)] text-lg focus:outline-none focus:border-gold transition-colors duration-400 appearance-none cursor-pointer"
              >
                <option value="" className="bg-bg-primary text-cream">Select occasion (optional)</option>
                <option value="birthday" className="bg-bg-primary text-cream">Birthday</option>
                <option value="anniversary" className="bg-bg-primary text-cream">Anniversary</option>
                <option value="business" className="bg-bg-primary text-cream">Business Dinner</option>
                <option value="celebration" className="bg-bg-primary text-cream">Celebration</option>
                <option value="date" className="bg-bg-primary text-cream">Date Night</option>
                <option value="other" className="bg-bg-primary text-cream">Other</option>
              </select>
            </div>

            <div className="mt-8">
              <label className="block font-[family-name:var(--font-sans)] text-[10px] tracking-[3px] uppercase text-gold mb-3">
                Special Requests
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="w-full bg-transparent border-b border-border py-3 text-cream font-[family-name:var(--font-body)] text-lg focus:outline-none focus:border-gold transition-colors duration-400 resize-none placeholder:text-text-muted"
                placeholder="Dietary restrictions, seating preferences, celebrations..."
              />
            </div>

            <div className="text-center mt-12">
              <button type="submit" className="btn-filled">
                Request Reservation
              </button>
            </div>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
