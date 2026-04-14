export default function Footer() {
  return (
    <footer className="bg-cream py-8 md:py-14 pb-40 md:pb-44">
      <div className="max-w-[1400px] mx-auto px-6 md:pl-12 lg:pl-24">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-10">
          {/* Left - Hours */}
          <div className="text-dark">
            <h3 className="font-heading text-base md:text-xl tracking-wide mb-3 italic">
              Hours
            </h3>
            <div className="space-y-1 text-xs md:text-sm text-dark/70">
              <p>Monday-Thursday</p>
              <p>5PM - 10PM</p>
              <p>Friday & Saturday 12PM - 11PM</p>
              <p>Sunday 12PM - 10PM</p>
            </div>
            <p className="text-dark/60 text-[10px] md:text-xs mt-3 md:mt-4">
              Private Events are welcome for both Lunch & Dinner, 7 days a week
            </p>
          </div>

          {/* Right - Copyright */}
          <div className="text-dark text-left md:text-right">
            <p className="text-xs md:text-sm mb-2">
              &copy; Copyright 2020-{new Date().getFullYear()} BK Khan's BBQ.
            </p>
            <p className="text-xs md:text-sm text-dark/70 mb-1">
              Website by{" "}
              <a href="#" className="underline underline-offset-2">
                Raydon Creative
              </a>
              .
            </p>
            <a href="#" className="text-xs md:text-sm text-dark/70 underline underline-offset-2">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
