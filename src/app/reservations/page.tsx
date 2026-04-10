import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Reservation from "@/components/Reservation";
import FloatingButtons from "@/components/FloatingButtons";

export const metadata = {
  title: "Reservations | BK Khan's BBQ",
  description:
    "Reserve your table at BK Khan's BBQ for an unforgettable dining experience.",
};

export default function ReservationsPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        subtitle="Join Us"
        title=""
        titleAccent="Reservations"
        description="Secure your place for an extraordinary evening"
        image="/images/venue/private-dining.jpg"
      />
      <Reservation />
      <FloatingButtons />
      <Footer />
    </main>
  );
}
