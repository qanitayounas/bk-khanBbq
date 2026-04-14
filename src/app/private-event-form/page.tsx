import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PrivateEventForm from "@/components/PrivateEventForm";
import FloatingCTA from "@/components/FloatingCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Private Event Inquiry | BK Khan's BBQ - Houston",
  description:
    "Request a private event at BK Khan's BBQ Houston. Fill out our inquiry form to reserve The Khan Room, Smokehouse Lounge, Courtyard, Heritage Hall, or Ember Room.",
  keywords: [
    "private event inquiry Houston",
    "book private dining Houston",
    "BK Khan's BBQ reservation",
    "private party Houston BBQ",
    "event booking Westheimer",
  ],
};

export default function PrivateEventFormRoute() {
  return (
    <main>
      <FloatingCTA />
      <Navbar />
      <PrivateEventForm />
      <Footer />
    </main>
  );
}
