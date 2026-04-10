"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function PrivateDining() {
  return (
    <section className="section-padding bg-bg-primary relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Image */}
          <ScrollReveal className="reveal-left">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src="/images/venue/private-dining.jpg"
                  alt="Private dining at BK Khan's BBQ"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>
              {/* Accent */}
              <div className="absolute -top-4 -right-4 w-32 h-32 border-t border-r border-gold/20 hidden md:block" />
            </div>
          </ScrollReveal>

          {/* Right - Content */}
          <div className="order-1 lg:order-2">
            <ScrollReveal className="reveal-right">
              <div className="ornament-left mb-6">
                <span className="font-[family-name:var(--font-sans)] text-[10px] font-light tracking-[5px] uppercase text-gold">
                  Exclusive Events
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal className="reveal-right" delay={150}>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl lg:text-[44px] font-bold italic text-cream leading-[1.2] mb-8">
                Private Dining
                <br />& Special Events
              </h2>
            </ScrollReveal>

            <ScrollReveal className="reveal-right" delay={300}>
              <p className="font-[family-name:var(--font-body)] text-lg text-text-secondary font-light leading-[1.9] mb-6">
                Whether you&apos;re celebrating a milestone, hosting a
                corporate gathering, or planning an intimate dinner party,
                our private dining spaces offer an extraordinary setting
                for your most important occasions.
              </p>
            </ScrollReveal>

            <ScrollReveal className="reveal-right" delay={400}>
              <p className="font-[family-name:var(--font-body)] text-lg text-text-secondary font-light leading-[1.9] mb-10">
                Our events team will work closely with you to craft a
                bespoke menu and experience tailored to your vision.
                Accommodating parties of 10 to 120 guests.
              </p>
            </ScrollReveal>

            <ScrollReveal className="reveal-right" delay={500}>
              <Link href="/contact" className="btn-primary">
                <span>Inquire Now</span>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
