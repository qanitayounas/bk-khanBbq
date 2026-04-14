import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Details from "@/components/Details";
import FloatingCTA from "@/components/FloatingCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Details | BK Khan's BBQ - Hours, Location & Policies",
  description:
    "Visit BK Khan's BBQ at 5115 Westheimer Rd, Houston TX 77056. Open for dinner Monday–Sunday, lunch Friday–Sunday. Valet parking, smart casual dress code, BYOB-friendly.",
  keywords: [
    "BK Khan's BBQ hours",
    "BK Khan's BBQ location",
    "Houston BBQ Westheimer",
    "BBQ restaurant Galleria Houston",
    "BK Khan's BBQ parking",
    "Houston BBQ dress code",
    "BYOB BBQ Houston",
  ],
};

export default function DetailsRoute() {
  return (
    <main>
      <FloatingCTA />
      <Navbar />
      <Details />
      <Footer />
    </main>
  );
}
