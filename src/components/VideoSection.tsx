"use client";

import { useEffect, useRef } from "react";

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasRevealed = useRef(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play();
          if (!hasRevealed.current) {
            el.classList.add("opacity-100", "scale-100");
            el.classList.remove("opacity-0", "scale-95");
            hasRevealed.current = true;
          }
        } else {
          videoRef.current?.pause();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-dark py-8 md:py-12 lg:py-16">
      <div ref={sectionRef} className="max-w-[1400px] mx-auto px-4 md:px-6 opacity-0 scale-95 transition-all duration-1000">
        <div className="relative aspect-video rounded-sm overflow-hidden">
          {/* Video */}
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            src="/videos/video.mp4"
            muted
            loop
            playsInline
            preload="metadata"
          />

          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark/40 via-transparent to-dark/20 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
