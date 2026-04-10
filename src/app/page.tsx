import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MailingList from "@/components/MailingList";
import About from "@/components/About";
import PressLogos from "@/components/PressLogos";
import ContactSection from "@/components/ContactSection";
import FoodShowcase from "@/components/FoodShowcase";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <MailingList />
      <About />
      <PressLogos />
      <ContactSection />
      <FoodShowcase />
      <Footer />
      <FloatingButtons />
    </main>
  );
}
