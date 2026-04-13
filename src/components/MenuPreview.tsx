"use client";

import { useState } from "react";
import SectionDivider from "./SectionDivider";
import { useScrollReveal } from "./useScrollReveal";

const menuCategories = [
  {
    name: "Starters",
    items: [
      {
        name: "Kaddu Puri",
        description:
          "Butternut squash, spiced chutney, crisp puri — inspired by a beloved Bihar breakfast discovered during the 100-day journey",
        price: "$18",
      },
      {
        name: "Lamb Seekh Kebab",
        description:
          "Hand-minced lamb, aromatic spices, mint chutney, roomali roti",
        price: "$22",
      },
      {
        name: "Crab Malai",
        description:
          "Blue crab, coconut cream, curry leaf, mustard seed tempering",
        price: "$24",
      },
    ],
  },
  {
    name: "Signatures",
    items: [
      {
        name: "Butter Chicken Trilogy",
        description:
          "Three interpretations of Delhi's iconic dish — classic, deconstructed, and reimagined",
        price: "$38",
      },
      {
        name: "Pandra Rassa",
        description:
          "A Kolhapur white curry of slow-braised lamb, coconut, and cashew — recipe sourced from village homecooks",
        price: "$42",
      },
      {
        name: "Tandoori Grilled Lamb",
        description:
          "Perfectly seasoned rack of lamb, charred in the tandoor, served with saffron jus",
        price: "$48",
      },
    ],
  },
  {
    name: "Tasting Menu",
    items: [
      {
        name: "The Musaafer Journey",
        description:
          "Twelve-course tasting menu — a culinary voyage across the 29 states of India, available in The Shadow Room",
        price: "$165",
      },
      {
        name: "Wine Pairing",
        description:
          "Curated wine pairing to complement each course of the tasting menu",
        price: "$95",
      },
      {
        name: "Vegetarian Journey",
        description:
          "Twelve-course vegetarian tasting celebrating India's extraordinary plant-based traditions",
        price: "$145",
      },
    ],
  },
];

export default function MenuPreview() {
  const { ref, isVisible } = useScrollReveal();
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      id="menu"
      className="relative py-28 md:py-36 bg-dark-surface overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='40' fill='none' stroke='%23c9a96e' stroke-width='0.5'/%3E%3Ccircle cx='50' cy='50' r='25' fill='none' stroke='%23c9a96e' stroke-width='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div
          ref={ref}
          className={`text-center mb-16 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <p className="text-gold/70 text-xs tracking-[0.5em] uppercase mb-4">
            Culinary Artistry
          </p>
          <h2 className="font-[var(--font-heading)] text-4xl md:text-5xl lg:text-6xl text-cream tracking-wide">
            The Menu
          </h2>
          <div className="flex justify-center mt-6">
            <SectionDivider />
          </div>
          <p className="text-cream/50 max-w-xl mx-auto mt-6 leading-relaxed">
            A curated selection of dishes born from a 100-day journey across
            India, blending centuries-old recipes with contemporary technique.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-1 mb-12">
          {menuCategories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-6 py-3 text-xs tracking-[0.2em] uppercase transition-all duration-300 ${
                activeTab === i
                  ? "text-gold border-b-2 border-gold"
                  : "text-cream/40 hover:text-cream/70 border-b-2 border-transparent"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="space-y-0">
          {menuCategories[activeTab].items.map((item, i) => (
            <div
              key={`${activeTab}-${i}`}
              className="group border-b border-cream/5 py-8 animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h4 className="font-[var(--font-heading)] text-xl text-cream group-hover:text-gold transition-colors duration-300">
                    {item.name}
                  </h4>
                  <p className="text-cream/40 text-sm leading-relaxed mt-2 max-w-lg">
                    {item.description}
                  </p>
                </div>
                <span className="text-gold font-[var(--font-heading)] text-lg flex-shrink-0">
                  {item.price}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Menu CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block border border-gold/40 text-gold text-xs tracking-[0.25em] uppercase px-10 py-4 hover:bg-gold hover:text-dark transition-all duration-300 btn-shimmer"
          >
            View Full Menu
          </a>
        </div>
      </div>
    </section>
  );
}
