"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const actionButtons = [
  { label: "Catering", href: "#contact" },
  { label: "Events", href: "#contact" },
  { label: "Press", href: "#about" },
  { label: "To-Go", href: "#menu" },
];

const navLinks = [
  { label: "The Journey", href: "/the-journey" },
  { label: "Menu", href: "/menu" },
  { label: "Private Events", href: "#spaces" },
  { label: "Off-Site Events", href: "#contact" },
  { label: "Details", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Gift Cards", href: "#contact" },
];

function isActive(href: string, pathname: string) {
  if (href.startsWith("#")) return false;
  return pathname === href;
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-[1400px] mx-auto px-4 xl:px-6 flex items-center justify-between py-5 xl:py-6">
        {/* Logo */}
        <a href="/" className="shrink-0 relative z-10">
          <img
            src="/logo.png"
            alt="BK Khan's BBQ"
            className="h-16 lg:h-22 xl:h-28 w-auto"
          />
        </a>

        {/* Desktop Right Side - Two Rows */}
        <div className="hidden lg:flex flex-col items-end gap-3 xl:gap-4 min-w-0">
          {/* Top Row: Catering, Events, Press, [social icons], To-Go */}
          <div className="flex items-center flex-wrap justify-end gap-1.5 xl:gap-2">
            <a href="#contact" className="bg-gold text-dark text-xs xl:text-sm tracking-[0.1em] uppercase px-4 xl:px-6 py-2 xl:py-2.5 font-semibold hover:bg-white hover:text-dark transition-all duration-300 whitespace-nowrap">Catering</a>
            <a href="#contact" className="bg-gold text-dark text-xs xl:text-sm tracking-[0.1em] uppercase px-4 xl:px-6 py-2 xl:py-2.5 font-semibold hover:bg-white hover:text-dark transition-all duration-300 whitespace-nowrap">Events</a>
            <a href="#about" className="bg-gold text-dark text-xs xl:text-sm tracking-[0.1em] uppercase px-4 xl:px-6 py-2 xl:py-2.5 font-semibold hover:bg-white hover:text-dark transition-all duration-300 whitespace-nowrap">Press</a>

            {/* Social Icons */}
            <a href="#" aria-label="Facebook" className="text-cream/80 hover:text-gold transition-colors duration-300 mx-1 xl:mx-1.5">
              <svg className="w-5 h-5 xl:w-5.5 xl:h-5.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="text-cream/80 hover:text-gold transition-colors duration-300 mr-1 xl:mr-1.5">
              <svg className="w-5 h-5 xl:w-5.5 xl:h-5.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5A4.25 4.25 0 0020.5 16.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.25-2.5a1 1 0 110 2 1 1 0 010-2z" />
              </svg>
            </a>

            <a href="#menu" className="bg-gold text-dark text-xs xl:text-sm tracking-[0.1em] uppercase px-4 xl:px-6 py-2 xl:py-2.5 font-semibold hover:bg-white hover:text-dark transition-all duration-300 whitespace-nowrap">To-Go</a>
          </div>

          {/* Bottom Row: Navigation Links */}
          <div className="flex items-center flex-wrap justify-end gap-3 xl:gap-5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-xs xl:text-sm tracking-[0.1em] xl:tracking-[0.12em] uppercase transition-colors duration-300 whitespace-nowrap border-b ${
                  isActive(link.href, pathname)
                    ? "text-gold border-gold"
                    : "text-white border-transparent hover:text-gold"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2 group"
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-px bg-gold transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[4px]" : ""}`}
          />
          <span
            className={`w-6 h-px bg-gold transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`w-6 h-px bg-gold transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[4px]" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-dark/98 backdrop-blur-xl flex flex-col items-center gap-6 py-20 transition-all duration-500 lg:hidden overflow-y-auto ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ top: 0 }}
      >
        {navLinks.map((link, i) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className={`text-sm tracking-[0.2em] uppercase transition-colors duration-300 shrink-0 border-b ${
              isActive(link.href, pathname)
                ? "text-gold border-gold"
                : "text-white border-transparent hover:text-gold"
            }`}
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            {link.label}
          </a>
        ))}
        <div className="w-16 h-px bg-gold/30 mt-2 shrink-0" />
        {actionButtons.map((btn) => (
          <a
            key={btn.label}
            href={btn.href}
            onClick={() => setMobileOpen(false)}
            className="bg-gold text-dark text-xs tracking-[0.2em] uppercase px-8 py-3 font-semibold shrink-0"
          >
            {btn.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
