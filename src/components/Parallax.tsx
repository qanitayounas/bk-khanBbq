"use client";

export default function Parallax() {
  return (
    <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600891964092-4316c288032e?w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-dark/70" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <p className="text-gold/70 text-xs tracking-[0.5em] uppercase mb-4">
          A Michelin-Starred Experience
        </p>
        <h2 className="font-[var(--font-heading)] text-3xl md:text-5xl lg:text-6xl text-cream max-w-3xl leading-tight">
          Where Every Dish Tells the Story of a Journey
        </h2>
        <div className="flex items-center gap-4 mt-6">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold/40" />
          <span className="text-gold/50 text-lg">&#9733;</span>
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold/40" />
        </div>
      </div>
    </section>
  );
}
