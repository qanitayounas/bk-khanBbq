import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import MenuPage from "@/components/MenuPage";
import FloatingCTA from "@/components/FloatingCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Menu | BK Khan's BBQ - Houston's Finest BBQ",
  description:
    "Explore BK Khan's BBQ menu featuring smoked brisket, tandoor-fired ribs, craft cocktails, and curated wines. Dinner, lunch, to-go, and tasting menus available in Houston.",
  keywords: [
    "BK Khan's BBQ menu",
    "Houston BBQ menu",
    "Texas BBQ",
    "smoked brisket Houston",
    "Indian BBQ fusion menu",
    "craft cocktails Houston",
    "tasting menu Houston",
  ],
};

export default function MenuRoute() {
  return (
    <main>
      <FloatingCTA />
      <Navbar />
      <MenuPage />
      <Footer />
    </main>
  );
}
