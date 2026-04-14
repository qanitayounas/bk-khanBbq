import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PrivateEvents from "@/components/PrivateEvents";
import FloatingCTA from "@/components/FloatingCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Private Events | BK Khan's BBQ - Houston's Finest BBQ",
  description:
    "Host your private event at BK Khan's BBQ in Houston. Five exclusive dining spaces for corporate dinners, celebrations, rehearsal dinners, and intimate gatherings on Westheimer Road.",
  keywords: [
    "private events Houston",
    "private dining Houston",
    "corporate dinner Houston",
    "rehearsal dinner Houston",
    "private party venue Houston",
    "BK Khan's BBQ events",
    "Westheimer Road private dining",
    "Houston event space",
  ],
};

export default function PrivateEventsRoute() {
  return (
    <main>
      <FloatingCTA />
      <Navbar />
      <PrivateEvents />
      <Footer />
    </main>
  );
}
