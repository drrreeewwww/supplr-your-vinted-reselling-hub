import { FileText, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useCart } from "@/context/CartContext";

const SupplierLists = () => {
  const handlePurchaseBundle = () => {
    window.open("https://buy.stripe.com/9B614pdlO1N023z2cW5sA00", "_blank");
  };
  
  const handleOutOfStock = () => {
    toast.info("Currently out of stock", {
      description: "Check back soon for availability!",
    });
  };

  return (
    <section id="suppliers" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
            <FileText className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Supplier Lists</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Exclusive{" "}
            <span className="gradient-text">Supplier Lists</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Skip the research. Get instant access to verified suppliers with the best wholesale prices for Vinted reselling.
          </p>
        </div>

        {/* Supplier Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* UK Streetwear */}
          <div className="relative rounded-2xl bg-card border border-border p-8 card-glow">
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold">
              Starter Pack
            </div>

            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6">
              <FileText className="w-7 h-7 text-primary" />
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-2">UK Streetwear Suppliers</h3>
            <p className="text-muted-foreground mb-6">
              Curated list of UK-based streetwear wholesalers. Perfect for getting started with trending brands.
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary" />
                <span className="text-foreground">10 verified suppliers</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary" />
                <span className="text-foreground">UK streetwear focus</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary" />
                <span className="text-foreground">Contact details included</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary" />
                <span className="text-foreground">Occasional updates</span>
              </li>
            </ul>

            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-foreground">£6.99</span>
              <Button onClick={handleOutOfStock} disabled className="opacity-60">
                Out of Stock
              </Button>
            </div>
          </div>

          {/* All Suppliers */}
          <div className="relative rounded-2xl bg-card border-2 border-primary p-8 card-glow">
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
              Best Value
            </div>

            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center mb-6">
              <FileText className="w-7 h-7 text-primary" />
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-2">Complete Supplier Bundle</h3>
            <p className="text-muted-foreground mb-6">
              The ultimate supplier list. Every category, every niche, every opportunity for maximum profit.
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary" />
                <span className="text-foreground">100+ verified suppliers</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary" />
                <span className="text-foreground">All categories covered</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary" />
                <span className="text-foreground">International options</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary" />
                <span className="text-foreground">Priority support</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary" />
                <span className="text-foreground">Exclusive Discord access</span>
              </li>
            </ul>

            <div className="flex items-center justify-between">
              <div>
                <span className="text-3xl font-bold text-foreground">£12.99</span>
                <span className="text-muted-foreground ml-2 line-through">£17.99</span>
              </div>
              <Button variant="gradient" onClick={handlePurchaseBundle}>
                Get Bundle
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupplierLists;
