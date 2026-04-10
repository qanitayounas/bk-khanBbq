import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import FloatingButtons from "@/components/FloatingButtons";

export const metadata = {
  title: "Menu | BK Khan's BBQ",
  description:
    "Explore our full menu of flame-grilled masterpieces at BK Khan's BBQ.",
};

const menuCategories = [
  {
    name: "Signature Platters",
    desc: "Our legendary combinations, served family-style",
    items: [
      { name: "The Khan's Feast", description: "Slow-smoked brisket, pulled lamb, flame-kissed chicken, signature spiced rub, house sauces, pickled onions, fresh bread", price: "$65" },
      { name: "Royal Rack of Ribs", description: "Full rack baby back ribs, 14-hour smoke, bourbon-molasses glaze, coleslaw, cornbread", price: "$42" },
      { name: "Flame Emperor Brisket", description: "Prime-grade beef brisket, 16-hour oak smoke, hand-carved to order, two sides", price: "$38" },
      { name: "The Grand Smoke", description: "Sampler of all our smoked meats with three sides and house-made pickles", price: "$85" },
    ],
  },
  {
    name: "From the Grill",
    desc: "Direct flame, bold flavors",
    items: [
      { name: "Seekh Kebab Royale", description: "Hand-ground lamb seekh kebabs, aromatic spices, charcoal grilled, mint chutney", price: "$28" },
      { name: "Tandoori Smoked Wings", description: "Jumbo wings marinated in yogurt and spices, finished in our custom smoker", price: "$22" },
      { name: "Wagyu Burger Khan", description: "American Wagyu patty, smoked gouda, caramelized onions, truffle aioli, brioche bun", price: "$32" },
      { name: "Grilled Lamb Chops", description: "Double-cut lamb chops, herb crust, roasted garlic, seasonal vegetables", price: "$45" },
      { name: "Flame-Kissed Salmon", description: "Atlantic salmon, cedar plank smoked, dill cream, charred lemon", price: "$36" },
    ],
  },
  {
    name: "Starters",
    desc: "Begin your journey",
    items: [
      { name: "Smoked Bone Marrow", description: "Roasted bone marrow with chimichurri, grilled sourdough", price: "$18" },
      { name: "BBQ Nachos Supreme", description: "Pulled brisket, three-cheese blend, pickled jalapenos, house BBQ sauce", price: "$16" },
      { name: "Charred Corn Ribs", description: "Flame-grilled corn ribs, spiced butter, cotija cheese, lime", price: "$14" },
      { name: "Smoked Hummus", description: "Hickory-smoked chickpea hummus, warm pita, olive oil, paprika", price: "$12" },
    ],
  },
  {
    name: "Sides",
    desc: "Perfect companions",
    items: [
      { name: "Truffle Mac & Cheese", description: "Three-cheese blend with black truffle oil and panko crust", price: "$12" },
      { name: "Smoked Collard Greens", description: "Slow-cooked with smoked turkey, apple cider vinegar", price: "$10" },
      { name: "Jalapeno Cornbread", description: "Cast-iron baked with honey butter", price: "$8" },
      { name: "Loaded Baked Beans", description: "Pit beans with brisket burnt ends and brown sugar", price: "$10" },
      { name: "Crispy Brussels Sprouts", description: "Flash-fried, balsamic glaze, pomegranate seeds", price: "$12" },
    ],
  },
  {
    name: "Desserts",
    desc: "A sweet finish",
    items: [
      { name: "Smoked Bourbon Pecan Pie", description: "House-smoked pecans, bourbon caramel, vanilla bean ice cream", price: "$14" },
      { name: "Charred Pineapple", description: "Flame-grilled pineapple, rum glaze, coconut cream", price: "$12" },
      { name: "Chocolate Lava Cake", description: "Dark chocolate fondant, smoked sea salt, espresso cream", price: "$15" },
    ],
  },
  {
    name: "Beverages",
    desc: "Craft cocktails & curated selections",
    items: [
      { name: "The Smoke Signal", description: "Mezcal, smoked honey, lime, activated charcoal", price: "$16" },
      { name: "Khan's Old Fashioned", description: "Bourbon, smoked maple, orange bitters, charred cherry", price: "$15" },
      { name: "Ember Margarita", description: "Tequila, fire-roasted jalapeno, lime, agave", price: "$14" },
      { name: "Fresh Lemonade", description: "House-made with mint, ginger, or classic", price: "$6" },
      { name: "Craft Beer Selection", description: "Rotating local and imported craft beers on tap", price: "$8+" },
    ],
  },
];

export default function MenuPage() {
  return (
    <main>
      <Navbar />

      <PageHero
        subtitle="Culinary Excellence"
        title="Our"
        titleAccent="Menu"
        description="Every dish, a masterpiece of flame and flavor"
        image="/images/food/brisket.jpg"
      />

      <section className="section-padding bg-bg-secondary">
        <div className="max-w-3xl mx-auto px-6">
          {menuCategories.map((category, catIdx) => (
            <ScrollReveal key={category.name} delay={catIdx * 80}>
              <div className="mb-24 last:mb-0">
                {/* Category header */}
                <div className="text-center mb-14">
                  <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl lg:text-4xl italic text-gold mb-3">
                    {category.name}
                  </h2>
                  <p className="font-[family-name:var(--font-body)] text-text-secondary font-light italic">
                    {category.desc}
                  </p>
                  <div className="w-12 h-[1px] bg-gold/30 mx-auto mt-5" />
                </div>

                {/* Items */}
                <div className="space-y-8">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="group pb-8 border-b border-border last:border-0 hover:border-gold/30 transition-colors duration-500"
                    >
                      <div className="flex justify-between items-baseline gap-4 mb-2">
                        <h3 className="font-[family-name:var(--font-heading)] text-xl md:text-2xl italic text-cream group-hover:text-gold-light transition-colors duration-400">
                          {item.name}
                        </h3>
                        <div className="flex-1 border-b border-dotted border-border/50 min-w-[40px] translate-y-[-4px]" />
                        <span className="font-[family-name:var(--font-heading)] text-lg md:text-xl text-gold italic font-medium shrink-0">
                          {item.price}
                        </span>
                      </div>
                      <p className="font-[family-name:var(--font-body)] text-text-secondary font-light text-base leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}

          <ScrollReveal>
            <div className="text-center mt-8 border border-border p-8 bg-bg-primary/30">
              <p className="font-[family-name:var(--font-body)] text-text-muted italic text-base">
                Please inform your server of any allergies or dietary restrictions.
                <br />
                Consuming raw or undercooked meats may increase your risk of foodborne illness.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <FloatingButtons />
      <Footer />
    </main>
  );
}
