"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/about", label: "The Journey" },
  { href: "/menu", label: "Menu" },
  { href: "/private-dining", label: "Private Events" },
  { href: "/gallery", label: "Off-Site Events" },
  { href: "/#details", label: "Details" },
  { href: "/contact", label: "Contact" },
  { href: "/reservations", label: "Gift Cards" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#1a1118]/98 backdrop-blur-md border-b border-white/[0.05]"
            : "bg-linear-to-b from-black/80 to-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          {/* ===== TOP ROW: Logo left, Gold buttons + social right ===== */}
          <div className="flex items-center justify-between py-2.5 border-b border-white/[0.08]">
            {/* Logo */}
            <Link href="/" className="flex flex-col group shrink-0 py-2">
              <span className="font-[family-name:var(--font-heading)] text-[32px] font-normal italic text-[#c5a44e] leading-tight tracking-[-1px]">
                Musaafer
              </span>
              <span className="text-[7px] tracking-[3px] uppercase text-[#c5a44e] mt-[-2px] opacity-80">
                The Journey Within
              </span>
            </Link>

            {/* Right: Gold buttons + Social icons + To-Go (desktop) */}
            <div className="hidden lg:flex items-center gap-2">
              {/* Gold action buttons */}
              {[
                { href: "/catering", label: "Catering" },
                { href: "/events", label: "Events" },
                { href: "/press", label: "Press" },
              ].map((btn) => (
                <Link
                  key={btn.label}
                  href={btn.href}
                  className="px-6 py-3 bg-[#c5a44e] text-black font-[family-name:var(--font-sans)] text-[10px] font-bold tracking-[2px] uppercase hover:bg-[#d4b85c] transition-all duration-300"
                >
                  {btn.label}
                </Link>
              ))}

              {/* Social icons */}
              <div className="flex items-center mx-4 gap-4">
                <a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity" aria-label="Facebook">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity" aria-label="Instagram">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
              </div>

              {/* To-Go button */}
              <Link
                href="/to-go"
                className="px-8 py-3 bg-[#c5a44e] text-black font-[family-name:var(--font-sans)] text-[10px] font-bold tracking-[2px] uppercase hover:bg-[#d4b85c] transition-all duration-300"
              >
                To-Go
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex flex-col gap-[5px] p-2"
              aria-label="Toggle menu"
            >
              <span className={`w-6 h-[1.5px] bg-[#c5a44e] transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
              <span className={`w-6 h-[1.5px] bg-[#c5a44e] transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`w-6 h-[1.5px] bg-[#c5a44e] transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
            </button>
          </div>

          {/* ===== BOTTOM ROW: Navigation links centered ===== */}
          <div className="hidden lg:flex items-center justify-end gap-10 py-4 opacity-90">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-[family-name:var(--font-sans)] text-[10px] font-light tracking-[2.5px] uppercase text-white hover:text-[#c5a44e] transition-all duration-300 whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* ===== MOBILE FULLSCREEN MENU ===== */}
      <div
        className={`fixed inset-0 z-[55] bg-[#1a1118] flex flex-col items-center justify-center transition-all duration-500 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Close button */}
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-5 right-5 p-2"
          aria-label="Close menu"
        >
          <span className="block w-7 h-[1.5px] bg-[#c5a44e] rotate-45 translate-y-[1px]" />
          <span className="block w-7 h-[1.5px] bg-[#c5a44e] -rotate-45 -translate-y-[0.5px]" />
        </button>

        <div className="flex flex-col items-center gap-5">
          {navLinks.map((link, i) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-[family-name:var(--font-sans)] text-base tracking-[4px] uppercase text-[#b8b0a2] hover:text-[#c5a44e] transition-all duration-300"
              style={{
                transitionDelay: mobileOpen ? `${i * 50 + 100}ms` : "0ms",
                transform: mobileOpen ? "translateY(0)" : "translateY(12px)",
                opacity: mobileOpen ? 1 : 0,
              }}
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile gold buttons */}
          <div
            className="flex flex-wrap justify-center gap-2 mt-8"
            style={{ opacity: mobileOpen ? 1 : 0, transition: "opacity 0.5s ease 0.5s" }}
          >
            {[
              { href: "/menu", label: "Catering" },
              { href: "/private-dining", label: "Events" },
              { href: "/about", label: "Press" },
              { href: "/menu", label: "To-Go" },
            ].map((btn) => (
              <Link
                key={btn.label}
                href={btn.href}
                onClick={() => setMobileOpen(false)}
                className="px-5 py-2.5 bg-[#c5a44e] text-[#1a1118] font-[family-name:var(--font-sans)] text-[10px] font-bold tracking-[1.5px] uppercase"
              >
                {btn.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
