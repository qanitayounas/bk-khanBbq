"use client";

import { useState } from "react";
import { useScrollReveal } from "./useScrollReveal";

const rooms = [
  "The Khan Room",
  "The Smokehouse Lounge",
  "The Courtyard",
  "The Heritage Hall",
  "The Ember Room",
];

const eventTypes = [
  "Corporate Dinner",
  "Wedding / Reception",
  "Birthday / Anniversary",
  "Rehearsal Dinner",
  "Holiday Party",
  "Engagement Party",
  "Business Meeting",
  "Other",
];

const timeSlots = [
  "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
  "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
  "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM",
  "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM",
  "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM",
  "9:00 PM", "9:30 PM", "10:00 PM",
];

export default function PrivateEventForm() {
  const { ref: formRef, isVisible: formVisible } = useScrollReveal(0.05);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    room: "",
    eventDate: "",
    startTime: "",
    endTime: "",
    eventType: "",
    guests: "",
    info: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ email: "", name: "", phone: "", room: "", eventDate: "", startTime: "", endTime: "", eventType: "", guests: "", info: "" });
  };

  return (
    <section className="relative bg-cream min-h-screen pt-44 md:pt-52 lg:pt-56 pb-20 md:pb-28 overflow-hidden">
      {/* Decorative swirl - right side */}
      <div className="absolute right-0 top-1/4 opacity-[0.06] pointer-events-none">
        <svg width="300" height="600" viewBox="0 0 300 600" fill="none">
          <path d="M200 50 Q280 100 250 200 Q220 300 280 400 Q340 500 260 550" stroke="#c9a84c" strokeWidth="1.5" fill="none" />
          <path d="M220 80 Q300 130 270 230 Q240 330 300 430 Q360 530 280 580" stroke="#c9a84c" strokeWidth="0.8" fill="none" />
          <circle cx="250" cy="200" r="8" stroke="#c9a84c" strokeWidth="0.8" fill="none" />
          <circle cx="280" cy="400" r="6" stroke="#c9a84c" strokeWidth="0.8" fill="none" />
        </svg>
      </div>

      <div className="max-w-3xl mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div
          ref={formRef}
          className={`text-center mb-10 md:mb-14 transition-all duration-1000 ${
            formVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Decorative icon */}
          <div className="flex justify-center mb-4">
            <svg width="36" height="36" viewBox="0 0 40 40" fill="none" className="opacity-40">
              <path d="M20 5 Q25 15 20 20 Q15 15 20 5Z" stroke="#8B6914" strokeWidth="1.2" />
              <path d="M20 35 Q25 25 20 20 Q15 25 20 35Z" stroke="#8B6914" strokeWidth="1.2" />
              <path d="M5 20 Q15 15 20 20 Q15 25 5 20Z" stroke="#8B6914" strokeWidth="1.2" />
              <path d="M35 20 Q25 15 20 20 Q25 25 35 20Z" stroke="#8B6914" strokeWidth="1.2" />
              <circle cx="20" cy="20" r="2" fill="#8B6914" fillOpacity="0.4" />
            </svg>
          </div>
          <h1 className="font-heading text-xl md:text-2xl lg:text-3xl text-charcoal tracking-[0.15em] md:tracking-[0.25em] uppercase">
            Request Private Event Inquiry
          </h1>
        </div>

        {/* Form */}
        {submitted ? (
          <div className="text-center py-20 animate-fade-in">
            <span className="text-gold-dark text-5xl mb-4 block">&#10003;</span>
            <h3 className="font-heading text-2xl text-charcoal mb-3">Thank You!</h3>
            <p className="text-charcoal/50 text-sm">
              We&apos;ve received your inquiry and will be in touch within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Email */}
            <div>
              <label className="text-gold-dark text-xs tracking-[0.2em] uppercase block mb-2">
                Email <span className="text-gold-dark">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border border-charcoal/20 text-charcoal text-sm px-4 py-3 focus:border-gold-dark focus:outline-none transition-colors duration-300"
              />
            </div>

            {/* Name & Phone */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-gold-dark text-xs tracking-[0.2em] uppercase block mb-2">
                  First and Last Name <span className="text-gold-dark">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border border-charcoal/20 text-charcoal text-sm px-4 py-3 focus:border-gold-dark focus:outline-none transition-colors duration-300"
                />
              </div>
              <div>
                <label className="text-gold-dark text-xs tracking-[0.2em] uppercase block mb-2">
                  Phone Number <span className="text-gold-dark">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border border-charcoal/20 text-charcoal text-sm px-4 py-3 focus:border-gold-dark focus:outline-none transition-colors duration-300"
                />
              </div>
            </div>

            {/* Room & Date */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-gold-dark text-xs tracking-[0.2em] uppercase block mb-2">
                  Room Interested In <span className="text-gold-dark">*</span>
                </label>
                <select
                  name="room"
                  value={formData.room}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border border-charcoal/20 text-charcoal text-sm px-4 py-3 focus:border-gold-dark focus:outline-none transition-colors duration-300 appearance-none cursor-pointer"
                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M2 4l4 4 4-4' fill='none' stroke='%23999' stroke-width='1.5'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center" }}
                >
                  <option value="">Select a room</option>
                  {rooms.map((room) => (
                    <option key={room} value={room}>{room}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-gold-dark text-xs tracking-[0.2em] uppercase block mb-2">
                  Event Date <span className="text-gold-dark">*</span>
                </label>
                <input
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border border-charcoal/20 text-charcoal text-sm px-4 py-3 focus:border-gold-dark focus:outline-none transition-colors duration-300 cursor-pointer"
                />
              </div>
            </div>

            {/* Start & End Time */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-gold-dark text-xs tracking-[0.2em] uppercase block mb-2">
                  Start Time <span className="text-gold-dark">*</span>
                </label>
                <select
                  name="startTime"
                  value={formData.startTime}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border border-charcoal/20 text-charcoal text-sm px-4 py-3 focus:border-gold-dark focus:outline-none transition-colors duration-300 appearance-none cursor-pointer"
                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M2 4l4 4 4-4' fill='none' stroke='%23999' stroke-width='1.5'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center" }}
                >
                  <option value="">Select time</option>
                  {timeSlots.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-gold-dark text-xs tracking-[0.2em] uppercase block mb-2">
                  End Time <span className="text-gold-dark">*</span>
                </label>
                <select
                  name="endTime"
                  value={formData.endTime}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border border-charcoal/20 text-charcoal text-sm px-4 py-3 focus:border-gold-dark focus:outline-none transition-colors duration-300 appearance-none cursor-pointer"
                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M2 4l4 4 4-4' fill='none' stroke='%23999' stroke-width='1.5'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center" }}
                >
                  <option value="">Select time</option>
                  {timeSlots.map((t) => (
                    <option key={`end-${t}`} value={t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Event Type & Guests */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-gold-dark text-xs tracking-[0.2em] uppercase block mb-2">
                  Type of Event <span className="text-gold-dark">*</span>
                </label>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border border-charcoal/20 text-charcoal text-sm px-4 py-3 focus:border-gold-dark focus:outline-none transition-colors duration-300 appearance-none cursor-pointer"
                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M2 4l4 4 4-4' fill='none' stroke='%23999' stroke-width='1.5'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center" }}
                >
                  <option value="">Select type</option>
                  {eventTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-gold-dark text-xs tracking-[0.2em] uppercase block mb-2">
                  Number of Guests <span className="text-gold-dark">*</span>
                </label>
                <input
                  type="number"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  required
                  min="1"
                  className="w-full bg-transparent border border-charcoal/20 text-charcoal text-sm px-4 py-3 focus:border-gold-dark focus:outline-none transition-colors duration-300"
                />
              </div>
            </div>

            {/* Additional Info */}
            <div>
              <label className="text-gold-dark text-xs tracking-[0.2em] uppercase block mb-2">
                Additional Information
              </label>
              <textarea
                name="info"
                value={formData.info}
                onChange={handleChange}
                rows={4}
                className="w-full bg-transparent border border-charcoal/20 text-charcoal text-sm px-4 py-3 focus:border-gold-dark focus:outline-none transition-colors duration-300 resize-none"
              />
            </div>

            {/* Submit */}
            <div className="flex justify-center pt-2">
              <button
                type="submit"
                className="bg-gold-dark text-white text-xs tracking-[0.25em] uppercase px-16 py-4 hover:bg-charcoal transition-colors duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
