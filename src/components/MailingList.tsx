"use client";

import { useState } from "react";

export default function MailingList() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <section className="bg-gold py-8 md:py-10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left text */}
          <h2 className="font-[family-name:var(--font-sans)] text-lg md:text-xl tracking-[6px] uppercase text-bg-primary font-light text-center md:text-left">
            Join The
            <br />
            Mailing List
          </h2>

          {/* Right form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="EMAIL"
              className="bg-transparent border border-bg-primary/30 px-6 py-3 text-bg-primary placeholder:text-bg-primary/50 font-[family-name:var(--font-sans)] text-sm tracking-[2px] focus:outline-none focus:border-bg-primary min-w-[280px]"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-bg-primary text-gold font-[family-name:var(--font-sans)] text-xs font-bold tracking-[2px] uppercase hover:bg-bg-dark transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
