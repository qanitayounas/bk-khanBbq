"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function FloatingButtons() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Left: Reservations */}
      <Link
        href="/reservations"
        className={`floating-btn-left transition-all duration-500 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <Image
          src="/images/logo-icon.svg"
          alt=""
          width={20}
          height={32}
          className="opacity-60"
        />
        Reservations
      </Link>

      {/* Right: Order Online */}
      <Link
        href="/menu"
        className={`floating-btn-right transition-all duration-500 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        Order Online
      </Link>
    </>
  );
}
