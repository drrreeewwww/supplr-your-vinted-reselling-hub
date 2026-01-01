import { ArrowRight, TrendingUp, Package, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8 animate-fade-in">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Start your reselling journey today</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Master{" "}
            <span className="gradient-text">Vinted Reselling</span>
            <br />
            with Supplr
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Everything you need to build a profitable Vinted reselling business. Guides, mystery boxes, and exclusive supplier lists.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <a href="#products">
              <Button variant="hero" size="xl">
                Explore Products
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
            <a href="#guide">
              <Button variant="outline" size="xl">
                Learn More
              </Button>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-2xl md:text-3xl font-bold text-foreground">500+</span>
              </div>
              <span className="text-sm text-muted-foreground">Happy Resellers</span>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Package className="w-5 h-5 text-primary" />
                <span className="text-2xl md:text-3xl font-bold text-foreground">1000+</span>
              </div>
              <span className="text-sm text-muted-foreground">Boxes Sold</span>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span className="text-2xl md:text-3xl font-bold text-foreground">£50k+</span>
              </div>
              <span className="text-sm text-muted-foreground">Customer Profit</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
