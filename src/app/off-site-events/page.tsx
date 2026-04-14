import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import OffSiteEvents from "@/components/OffSiteEvents";
import FloatingCTA from "@/components/FloatingCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Off-Site Events & Catering | BK Khan's BBQ - Houston",
  description:
    "BK Khan's BBQ full-service off-site catering for corporate events, weddings, social celebrations, and film production in Houston. Custom menus, professional service, any venue.",
  keywords: [
    "BBQ catering Houston",
    "off-site catering Houston",
    "corporate catering Houston",
    "wedding catering Houston TX",
    "event catering Westheimer",
    "BK Khan's BBQ catering",
    "Houston BBQ catering service",
    "private event catering Texas",
  ],
};

export default function OffSiteEventsRoute() {
  return (
    <main>
      <FloatingCTA />
      <Navbar />
      <OffSiteEvents />
      <Footer />
    </main>
  );
}
