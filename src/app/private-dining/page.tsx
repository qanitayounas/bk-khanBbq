import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";
import Link from "next/link";
import FloatingButtons from "@/components/FloatingButtons";

export const metadata = {
  title: "Private Dining | BK Khan's BBQ",
  description:
    "Host your next event at BK Khan's BBQ. Private dining rooms and bespoke menus for every occasion.",
};

const spaces = [
  {
    name: "The Ember Room",
    capacity: "Up to 20 guests",
    desc: "An intimate private dining room perfect for business dinners, celebrations, and special occasions. Features a dedicated service team and bespoke menu options.",
    image: "/images/venue/private-dining.jpg",
  },
  {
    name: "The Khan Hall",
    capacity: "Up to 60 guests",
    desc: "Our grand private event space with open views of the kitchen and smokers. Ideal for corporate events, rehearsal dinners, and milestone celebrations.",
    image: "/images/venue/restaurant.jpg",
  },
  {
    name: "Full Venue Buyout",
    capacity: "Up to 120 guests",
    desc: "Transform the entire restaurant into your exclusive venue. Complete with dedicated bar, custom menus, and personalized decor to match your vision.",
    image: "/images/venue/ambiance.jpg",
  },
];

export default function PrivateDiningPage() {
  return (
    <main>
      <Navbar />

      <PageHero
        subtitle="Exclusive Events"
        title="Private"
        titleAccent="Dining"
        description="Extraordinary spaces for your most important occasions"
        image="/images/venue/restaurant.jpg"
      />

      {/* Intro */}
      <section className="section-padding bg-bg-secondary">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="font-[family-name:var(--font-body)] text-lg md:text-xl text-text-secondary font-light leading-[1.9] italic">
              Whether you&apos;re hosting an intimate dinner for two or a grand
              celebration for one hundred, BK Khan&apos;s offers bespoke
              private dining experiences tailored to your vision. Our events
              team will work closely with you to curate a menu, ambiance,
              and service style that transforms your occasion into an
              unforgettable memory.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Spaces */}
      <section className="section-padding bg-bg-primary">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="text-center mb-20">
              <div className="ornament mb-8">
                <span className="font-[family-name:var(--font-sans)] text-[10px] font-light tracking-[5px] uppercase text-gold">
                  Our Spaces
                </span>
              </div>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl lg:text-[44px] font-bold italic text-cream">
                Private Event Venues
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {spaces.map((space, i) => (
              <ScrollReveal key={space.name} delay={i * 150}>
                <div className="group h-full flex flex-col">
                  {/* Image */}
                  <div className="aspect-[4/3] relative overflow-hidden mb-8">
                    <Image
                      src={space.image}
                      alt={space.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
                  </div>
                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="font-[family-name:var(--font-heading)] text-2xl italic text-cream group-hover:text-gold-light transition-colors duration-400 mb-2">
                      {space.name}
                    </h3>
                    <span className="font-[family-name:var(--font-sans)] text-[10px] tracking-[2px] uppercase text-gold mb-4">
                      {space.capacity}
                    </span>
                    <p className="font-[family-name:var(--font-body)] text-text-secondary font-light leading-[1.8] flex-1">
                      {space.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={500}>
            <div className="text-center mt-16">
              <Link href="/contact" className="btn-primary">
                <span>Inquire About Private Dining</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <FloatingButtons />
      <Footer />
    </main>
  );
}
