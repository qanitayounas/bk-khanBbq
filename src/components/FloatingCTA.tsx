"use client";

export default function FloatingCTA() {
  return (
    <div className="fixed z-50 left-0 right-0 bottom-4 md:bottom-8 lg:bottom-12 pointer-events-none">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 flex items-end justify-between">
        {/* Reservations - Bottom Left */}
        <div className="group relative flex flex-col items-center pointer-events-auto">
          <img
            src="/images/reservation.png"
            alt="Reservation"
            className="absolute -top-12 md:-top-16 lg:-top-24 right-0 h-12 md:h-16 lg:h-24 w-auto drop-shadow-lg icon-premium icon-premium-float"
          />
          <a
            href="#contact"
            className="btn-premium border-2 border-white bg-white text-dark text-[9px] md:text-[10px] lg:text-sm tracking-[0.15em] md:tracking-[0.2em] lg:tracking-[0.25em] uppercase px-4 md:px-8 lg:px-12 py-2 md:py-3 lg:py-4"
          >
            Reservations
          </a>
        </div>

        {/* Order Online - Bottom Right */}
        <a
          href="#menu"
          className="relative border-2 border-gold bg-gold text-dark text-[9px] md:text-[10px] lg:text-sm tracking-[0.15em] md:tracking-[0.2em] lg:tracking-[0.25em] uppercase px-4 md:px-8 lg:px-12 py-2 md:py-3 lg:py-4 hover:bg-white hover:text-dark hover:border-white transition-all duration-300 pointer-events-auto"
        >
          Order Online
        </a>
      </div>
    </div>
  );
}
