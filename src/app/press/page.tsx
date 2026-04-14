import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Press from "@/components/Press";
import FloatingCTA from "@/components/FloatingCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Press | BK Khan's BBQ - Houston's Finest BBQ",
  description:
    "BK Khan's BBQ in the press. Featured in Houstonia, Texas Monthly, Eater Houston, Houston Chronicle, and more. Discover why critics call us Houston's boldest new BBQ destination.",
  keywords: [
    "BK Khan's BBQ press",
    "BK Khan's BBQ reviews",
    "Houston BBQ news",
    "best BBQ Houston",
    "Texas Monthly BBQ",
    "Houston restaurant reviews",
    "BK Khan's BBQ media",
  ],
};

export default function PressRoute() {
  return (
    <main>
      <FloatingCTA />
      <Navbar />
      <Press />
      <Footer />
    </main>
  );
}
