"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-bg-dark border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left: Logo + Reservations */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo-icon.svg"
                alt="BK Khan's BBQ"
                width={36}
                height={56}
              />
            </Link>
            <Link
              href="/reservations"
              className="btn-dark-outline text-[9px] py-2.5 px-6"
            >
              Reservations
            </Link>
          </div>

          {/* Center: Hours */}
          <div className="text-center">
            <h4 className="font-[family-name:var(--font-sans)] text-xs tracking-[2px] uppercase text-text-primary mb-3">
              Hours
            </h4>
            <div className="font-[family-name:var(--font-body)] text-text-secondary text-sm font-light space-y-1">
              <p>Monday-Thursday</p>
              <p className="text-cream">5PM - 10PM</p>
              <p className="mt-2">Friday & Saturday: 12PM - 11PM</p>
              <p>Sunday: 12PM - 9PM</p>
              <p className="mt-2 italic text-cream text-xs">
                Private Events are welcome for both<br />
                Lunch & Dinner, 7 days a week
              </p>
            </div>
          </div>

          {/* Right side: Copyright + Order */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="text-center md:text-right">
              <p className="font-[family-name:var(--font-sans)] text-text-muted text-[10px] tracking-[1px]">
                &copy; Copyright 2020-{new Date().getFullYear()} BK Khan&apos;s BBQ
              </p>
              <div className="flex gap-4 mt-2 justify-center md:justify-end">
                <Link
                  href="#"
                  className="font-[family-name:var(--font-sans)] text-text-muted text-[10px] tracking-[1px] hover:text-gold transition-colors underline"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
            <Link href="/menu" className="btn-gold-filled text-[10px]">
              Order Online
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
