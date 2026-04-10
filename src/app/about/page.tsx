import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";
import Link from "next/link";
import FloatingButtons from "@/components/FloatingButtons";

export const metadata = {
  title: "Our Story | BK Khan's BBQ",
  description:
    "Discover the story behind BK Khan's BBQ — a legacy of flame-grilled excellence.",
};

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      <PageHero
        subtitle="Our Story"
        title="A Legacy of"
        titleAccent="Flame & Flavor"
        description="Generations of culinary mastery, distilled into every dish"
        image="/images/food/smoking.jpg"
      />

      {/* Story */}
      <section className="section-padding bg-bg-secondary">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image */}
            <ScrollReveal className="reveal-left">
              <div className="relative">
                <div className="aspect-[3/4] relative overflow-hidden">
                  <Image
                    src="/images/venue/kitchen.jpg"
                    alt="Our kitchen"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </div>
                <div className="absolute -bottom-5 -right-5 w-full h-full border border-gold/20 -z-10 hidden md:block" />
              </div>
            </ScrollReveal>

            {/* Text */}
            <div>
              <ScrollReveal className="reveal-right">
                <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl lg:text-[44px] font-bold italic text-cream leading-[1.2] mb-8">
                  The Beginning
                </h2>
              </ScrollReveal>

              <ScrollReveal className="reveal-right" delay={150}>
                <p className="font-[family-name:var(--font-body)] text-lg text-text-secondary font-light leading-[1.9] mb-6">
                  BK Khan&apos;s BBQ was born from a simple yet profound belief:
                  that the art of flame-grilled cooking is one of humanity&apos;s
                  oldest and most sacred culinary traditions. Our founder,
                  inspired by generations of family recipes and a deep
                  reverence for the transformative power of fire, set out to
                  create a dining experience that honors this ancient craft.
                </p>
              </ScrollReveal>

              <ScrollReveal className="reveal-right" delay={300}>
                <p className="font-[family-name:var(--font-body)] text-lg text-text-secondary font-light leading-[1.9]">
                  Every morning before dawn, our pitmasters begin their ritual.
                  Premium cuts are carefully selected, hand-rubbed with our
                  proprietary spice blends, and placed into our custom-built
                  smokers. Over the next twelve to sixteen hours, the wood does
                  its magic.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-bg-primary">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Text - left */}
            <div className="order-2 lg:order-1">
              <ScrollReveal className="reveal-left">
                <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl lg:text-[44px] font-bold italic text-cream leading-[1.2] mb-8">
                  Our Philosophy
                </h2>
              </ScrollReveal>

              <ScrollReveal className="reveal-left" delay={150}>
                <p className="font-[family-name:var(--font-body)] text-lg text-text-secondary font-light leading-[1.9] mb-6">
                  We source only the finest ingredients: prime-grade beef from
                  sustainable ranches, locally grown produce, and artisanal
                  breads baked fresh daily. Our sauces are crafted in-house
                  using recipes perfected over years of experimentation.
                </p>
              </ScrollReveal>

              <ScrollReveal className="reveal-left" delay={300}>
                <p className="font-[family-name:var(--font-body)] text-lg text-text-secondary font-light leading-[1.9]">
                  At BK Khan&apos;s, we believe that a great meal is more than
                  food — it&apos;s an experience. From the moment you walk through
                  our doors, you&apos;re enveloped in the warm glow of our open
                  kitchen, the intoxicating aroma of slow-smoked meats, and
                  the welcoming embrace of genuine hospitality.
                </p>
              </ScrollReveal>
            </div>

            {/* Image - right */}
            <ScrollReveal className="reveal-right order-1 lg:order-2">
              <div className="relative">
                <div className="aspect-[3/4] relative overflow-hidden">
                  <Image
                    src="/images/venue/restaurant.jpg"
                    alt="Restaurant interior"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </div>
                <div className="absolute -bottom-5 -left-5 w-full h-full border border-gold/20 -z-10 hidden md:block" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-bg-secondary">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="text-center mb-20">
              <div className="ornament mb-8">
                <span className="font-[family-name:var(--font-sans)] text-[10px] font-light tracking-[5px] uppercase text-gold">
                  Our Values
                </span>
              </div>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl lg:text-[44px] font-bold italic text-cream leading-[1.2]">
                What We Stand For
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                title: "Quality",
                desc: "Only premium, sustainably sourced ingredients make it to our kitchen. We never compromise on what goes into our food.",
              },
              {
                title: "Tradition",
                desc: "Time-honored techniques passed down through generations of pitmasters form the foundation of everything we create.",
              },
              {
                title: "Passion",
                desc: "Every dish is crafted with love, patience, and an unwavering attention to detail that elevates each bite.",
              },
            ].map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 150}>
                <div className="border border-border p-10 text-center hover:border-gold/30 transition-all duration-500 bg-bg-primary/30 h-full">
                  <h3 className="font-[family-name:var(--font-heading)] text-2xl italic text-gold mb-5">
                    {v.title}
                  </h3>
                  <p className="font-[family-name:var(--font-body)] text-text-secondary font-light leading-[1.8]">
                    {v.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={500}>
            <div className="text-center mt-16">
              <Link href="/reservations" className="btn-primary">
                <span>Reserve Your Experience</span>
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
