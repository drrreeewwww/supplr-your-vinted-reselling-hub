import { Package, Sparkles, TrendingUp, Star } from "lucide-react";
import ProductCard from "./ProductCard";

const boxes = [
  {
    title: "Starter Box",
    description: "Perfect for beginners. 5-8 items with guaranteed profit potential.",
    price: 25,
    badge: "Entry Level",
  },
  {
    title: "Standard Box",
    description: "10-15 quality items. Mix of brands with strong resale value.",
    price: 50,
    popular: true,
  },
  {
    title: "Premium Box",
    description: "15-20 premium items. Designer and sought-after streetwear pieces.",
    price: 70,
    badge: "Best Value",
  },
  {
    title: "Elite Box",
    description: "20-25 hand-picked items. Rare finds and high-profit potential pieces.",
    price: 90,
    badge: "Top Tier",
  },
];

const MysteryBoxes = () => {
  return (
    <section id="boxes" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
            <Package className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Mystery Boxes</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Reselling{" "}
            <span className="gradient-text">Mystery Boxes</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pre-sourced boxes packed with profitable items ready to list on Vinted. Every box is hand-curated for maximum resale value.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-border">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
            <div>
              <span className="font-semibold text-foreground">Hand-Picked Items</span>
              <p className="text-sm text-muted-foreground">Carefully selected for profit</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-border">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <div>
              <span className="font-semibold text-foreground">2-3x Return</span>
              <p className="text-sm text-muted-foreground">Average profit per box</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-border">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Star className="w-6 h-6 text-primary" />
            </div>
            <div>
              <span className="font-semibold text-foreground">Quality Guaranteed</span>
              <p className="text-sm text-muted-foreground">A-grade items only</p>
            </div>
          </div>
        </div>

        {/* Boxes Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {boxes.map((box, index) => (
            <ProductCard key={index} {...box} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MysteryBoxes;
