import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Journey from "@/components/Journey";
import FloatingCTA from "@/components/FloatingCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "The Journey | BK Khan's BBQ - Houston's Finest BBQ",
  description:
    "Three generations of fire & flavor. Discover how BK Khan's BBQ bridges Pakistan's ancient tandoor traditions with Texas legendary pit-smoking culture in Houston.",
  keywords: [
    "BK Khan's BBQ",
    "Houston BBQ",
    "Texas BBQ",
    "Indian BBQ fusion",
    "Westheimer Road restaurant",
    "Houston fine dining",
    "family BBQ heritage",
  ],
};

export default function TheJourneyPage() {
  return (
    <main>
      <FloatingCTA />
      <Navbar />
      <Journey />
      <Footer />
    </main>
  );
}
