import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Raleway } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BK Khan's BBQ | Authentic Flame-Grilled Excellence",
  description:
    "Experience the art of flame-grilled perfection at BK Khan's BBQ. Premium cuts, authentic recipes, and an unforgettable dining experience.",
  keywords: "BBQ, restaurant, flame-grilled, Khan, premium dining, barbecue",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cormorant.variable} ${raleway.variable}`}
    >
      <body className="min-h-screen bg-bg-primary text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
