import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FloatingCTA from "@/components/FloatingCTA";
import MailingAndCTA from "@/components/MailingAndCTA";
import VideoSection from "@/components/VideoSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <FloatingCTA />
      <div className="relative">
        <Navbar />
        <Hero />
      </div>
      <MailingAndCTA />
      <VideoSection />
      <Contact />
      <Footer />
    </main>
  );
}
