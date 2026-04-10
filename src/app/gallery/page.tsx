import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";
import FloatingButtons from "@/components/FloatingButtons";

export const metadata = {
  title: "Gallery | BK Khan's BBQ",
  description: "Take a visual journey through the BK Khan's BBQ experience.",
};

const galleryItems = [
  { title: "Smoked Brisket", subtitle: "16-hour oak smoke", image: "/images/food/brisket.jpg", span: "" },
  { title: "The Khan's Feast", subtitle: "Signature platter", image: "/images/food/platter.jpg", span: "md:col-span-2" },
  { title: "Flame-Grilled Ribs", subtitle: "Bourbon-molasses glaze", image: "/images/food/ribs.jpg", span: "" },
  { title: "Seekh Kebabs", subtitle: "Hand-ground lamb", image: "/images/food/kebabs.jpg", span: "" },
  { title: "Our Kitchen", subtitle: "Where the magic happens", image: "/images/venue/kitchen.jpg", span: "" },
  { title: "Private Dining", subtitle: "Exclusive events", image: "/images/venue/private-dining.jpg", span: "md:col-span-2" },
  { title: "Craft Cocktails", subtitle: "Smoky signatures", image: "/images/food/cocktail.jpg", span: "" },
  { title: "Sweet Finishes", subtitle: "Charred desserts", image: "/images/food/dessert.jpg", span: "" },
  { title: "The Ambiance", subtitle: "Warm & inviting", image: "/images/venue/ambiance.jpg", span: "" },
];

export default function GalleryPage() {
  return (
    <main>
      <Navbar />

      <PageHero
        subtitle="Visual Journey"
        title="Our"
        titleAccent="Gallery"
        description="A glimpse into the BK Khan's experience"
        image="/images/venue/restaurant.jpg"
      />

      <section className="section-padding bg-bg-secondary">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {galleryItems.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 80}>
                <div
                  className={`group relative aspect-[4/3] overflow-hidden cursor-pointer ${item.span}`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes={item.span ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                  />
                  {/* Hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500 flex items-center justify-center">
                    <div className="text-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      <h3 className="font-[family-name:var(--font-heading)] text-xl md:text-2xl italic text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="font-[family-name:var(--font-sans)] text-[10px] tracking-[2px] uppercase text-gold">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                  {/* Corner accents */}
                  <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-gold/0 group-hover:border-gold/60 transition-all duration-500" />
                  <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-gold/0 group-hover:border-gold/60 transition-all duration-500" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <FloatingButtons />
      <Footer />
    </main>
  );
}
