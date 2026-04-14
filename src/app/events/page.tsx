import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Events from "@/components/Events";
import FloatingCTA from "@/components/FloatingCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Events | BK Khan's BBQ - Houston's Finest BBQ",
  description:
    "Upcoming events at BK Khan's BBQ Houston. Summer Smoke Fest, Pitmaster's Table dinners, and holiday feasts. Book your spot for Houston's most exciting BBQ experiences.",
  keywords: [
    "BK Khan's BBQ events",
    "Houston BBQ events",
    "Houston food events",
    "pitmaster dinner Houston",
    "BBQ tasting Houston",
    "Houston restaurant events",
    "smoke fest Houston",
  ],
};

export default function EventsRoute() {
  return (
    <main>
      <FloatingCTA />
      <Navbar />
      <Events />
      <Footer />
    </main>
  );
}
