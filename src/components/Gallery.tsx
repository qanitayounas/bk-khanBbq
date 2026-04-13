"use client";

import { useState } from "react";
import SectionDivider from "./SectionDivider";
import { useScrollReveal } from "./useScrollReveal";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80",
    alt: "Elegant dining hall with chandeliers",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",
    alt: "Signature tandoori dish",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=600&q=80",
    alt: "Artisan cocktail with Indian spices",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80",
    alt: "Biryani presentation",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
    alt: "Bar lounge area",
    span: "col-span-2 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600&q=80",
    alt: "Dessert artistry",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80",
    alt: "Fine dining table setting",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=600&q=80",
    alt: "Spice arrangement",
    span: "col-span-1 row-span-1",
  },
];

export default function Gallery() {
  const { ref, isVisible } = useScrollReveal();
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="gallery" className="relative py-28 md:py-36 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-16 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <p className="text-gold/70 text-xs tracking-[0.5em] uppercase mb-4">
            Visual Story
          </p>
          <h2 className="font-[var(--font-heading)] text-4xl md:text-5xl lg:text-6xl text-cream tracking-wide">
            Gallery
          </h2>
          <div className="flex justify-center mt-6">
            <SectionDivider />
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`${img.span} img-zoom cursor-pointer relative group rounded-sm overflow-hidden ${
                img.span.includes("row-span-2") ? "aspect-square md:aspect-auto" : 
                img.span.includes("col-span-2") ? "aspect-[2/1] md:aspect-auto" : "aspect-square"
              }`}
              onClick={() => setLightbox(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/40 transition-all duration-500 flex items-center justify-center">
                <span className="text-cream/0 group-hover:text-cream/90 text-xs tracking-[0.2em] uppercase transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  View
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[60] bg-dark/95 backdrop-blur-xl flex items-center justify-center p-4 animate-fade-in cursor-pointer"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-cream/60 hover:text-cream text-2xl transition-colors"
            aria-label="Close lightbox"
          >
            &#10005;
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightbox(
                (lightbox - 1 + galleryImages.length) % galleryImages.length
              );
            }}
            className="absolute left-4 md:left-8 text-cream/40 hover:text-gold text-3xl transition-colors"
            aria-label="Previous"
          >
            &#8249;
          </button>
          <img
            src={galleryImages[lightbox].src}
            alt={galleryImages[lightbox].alt}
            className="max-w-full max-h-[85vh] object-contain animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox + 1) % galleryImages.length);
            }}
            className="absolute right-4 md:right-8 text-cream/40 hover:text-gold text-3xl transition-colors"
            aria-label="Next"
          >
            &#8250;
          </button>
        </div>
      )}
    </section>
  );
}
