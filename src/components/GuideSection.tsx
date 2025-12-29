import { BookOpen, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const features = [
  "Complete beginner-friendly walkthrough",
  "Sourcing strategies that work in 2024",
  "Pricing formulas for maximum profit",
  "How to build a 5-star seller rating",
  "Shipping & packaging tips",
  "Scaling your business to £1000+/month",
];

const GuideSection = () => {
  const handlePurchase = () => {
    toast.success("Guide added to cart!", {
      description: "£12.99",
    });
  };

  return (
    <section id="guide" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-card to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Bestselling Guide</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              The Definitive Guide to{" "}
              <span className="gradient-text">Vinted Reselling</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8">
              Everything you need to know to start and scale a profitable Vinted reselling business. From sourcing to selling, we've got you covered.
            </p>

            {/* Features List */}
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Price & CTA */}
            <div className="flex items-center gap-6">
              <div>
                <span className="text-3xl font-bold text-foreground">£12.99</span>
                <span className="text-muted-foreground ml-2 line-through">£24.99</span>
              </div>
              <Button variant="hero" onClick={handlePurchase}>
                Get the Guide
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Visual */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
              <div className="relative bg-card border border-border rounded-3xl p-8 card-glow animate-float">
                <div className="w-64 h-80 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex flex-col items-center justify-center">
                  <BookOpen className="w-16 h-16 text-primary mb-4" />
                  <span className="text-lg font-bold text-foreground text-center px-4">
                    The Definitive Guide to Vinted Reselling
                  </span>
                  <span className="text-sm text-muted-foreground mt-2">by Supplr</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuideSection;
