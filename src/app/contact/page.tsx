import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import FloatingButtons from "@/components/FloatingButtons";

export const metadata = {
  title: "Contact | BK Khan's BBQ",
  description:
    "Get in touch with BK Khan's BBQ. Find our location, hours, and contact information.",
};

export default function ContactPage() {
  return (
    <main>
      <Navbar />

      <PageHero
        subtitle="Get In Touch"
        title="Contact"
        titleAccent="Us"
        image="/images/venue/ambiance.jpg"
      />

      <section className="section-padding bg-bg-secondary">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Info */}
            <div>
              <ScrollReveal className="reveal-left">
                <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl italic text-cream mb-12">
                  We&apos;d Love to Hear From You
                </h2>
              </ScrollReveal>

              <div className="space-y-10">
                {[
                  {
                    label: "Location",
                    content: (
                      <p className="font-[family-name:var(--font-body)] text-cream text-lg font-light leading-relaxed">
                        123 Flame Street<br />Houston, TX 77001
                      </p>
                    ),
                  },
                  {
                    label: "Reservations",
                    content: (
                      <a
                        href="tel:+15550001234"
                        className="font-[family-name:var(--font-body)] text-cream text-lg font-light hover:text-gold transition-colors duration-400"
                      >
                        +1 (555) 000-1234
                      </a>
                    ),
                  },
                  {
                    label: "Email",
                    content: (
                      <a
                        href="mailto:info@bkkhansbbq.com"
                        className="font-[family-name:var(--font-body)] text-cream text-lg font-light hover:text-gold transition-colors duration-400"
                      >
                        info@bkkhansbbq.com
                      </a>
                    ),
                  },
                  {
                    label: "Hours",
                    content: (
                      <div className="font-[family-name:var(--font-body)] text-cream text-lg font-light space-y-1.5">
                        <p>Monday — Thursday: 11am — 10pm</p>
                        <p>Friday — Saturday: 11am — 11pm</p>
                        <p>Sunday: 12pm — 9pm</p>
                      </div>
                    ),
                  },
                ].map((item, i) => (
                  <ScrollReveal key={item.label} className="reveal-left" delay={i * 100}>
                    <div>
                      <h3 className="font-[family-name:var(--font-sans)] text-[10px] tracking-[3px] uppercase text-gold mb-3">
                        {item.label}
                      </h3>
                      {item.content}
                    </div>
                  </ScrollReveal>
                ))}

                <ScrollReveal className="reveal-left" delay={400}>
                  <div>
                    <h3 className="font-[family-name:var(--font-sans)] text-[10px] tracking-[3px] uppercase text-gold mb-4">
                      Follow Us
                    </h3>
                    <div className="flex gap-3">
                      {["Instagram", "Facebook", "Twitter", "TikTok"].map((s) => (
                        <a
                          key={s}
                          href="#"
                          className="border border-border px-5 py-2.5 text-text-secondary hover:text-gold hover:border-gold transition-all duration-400 font-[family-name:var(--font-sans)] text-[10px] tracking-[2px] uppercase"
                        >
                          {s}
                        </a>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>

            {/* Contact Form */}
            <ScrollReveal className="reveal-right">
              <form className="border border-border p-8 md:p-12 bg-bg-primary/40 backdrop-blur-sm">
                <h3 className="font-[family-name:var(--font-heading)] text-2xl italic text-cream mb-10">
                  Send a Message
                </h3>
                <div className="space-y-8">
                  {[
                    { label: "Name", type: "text", placeholder: "Your name" },
                    { label: "Email", type: "email", placeholder: "your@email.com" },
                    { label: "Subject", type: "text", placeholder: "How can we help?" },
                  ].map((field) => (
                    <div key={field.label}>
                      <label className="block font-[family-name:var(--font-sans)] text-[10px] tracking-[3px] uppercase text-gold mb-3">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        required
                        className="w-full bg-transparent border-b border-border py-3 text-cream font-[family-name:var(--font-body)] text-lg focus:outline-none focus:border-gold transition-colors duration-400 placeholder:text-text-muted"
                        placeholder={field.placeholder}
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block font-[family-name:var(--font-sans)] text-[10px] tracking-[3px] uppercase text-gold mb-3">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      required
                      className="w-full bg-transparent border-b border-border py-3 text-cream font-[family-name:var(--font-body)] text-lg focus:outline-none focus:border-gold transition-colors duration-400 resize-none placeholder:text-text-muted"
                      placeholder="Tell us more..."
                    />
                  </div>
                  <div className="pt-2">
                    <button type="submit" className="btn-filled">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="h-[400px] bg-bg-tertiary relative flex items-center justify-center border-t border-border">
        <div className="text-center">
          <p className="font-[family-name:var(--font-heading)] text-2xl italic text-text-muted mb-2">
            Map
          </p>
          <p className="font-[family-name:var(--font-sans)] text-[10px] tracking-[3px] uppercase text-text-muted">
            123 Flame Street, Houston, TX 77001
          </p>
        </div>
      </section>

      <FloatingButtons />
      <Footer />
    </main>
  );
}
