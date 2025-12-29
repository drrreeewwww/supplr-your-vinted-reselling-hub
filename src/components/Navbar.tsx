import { ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { totalItems, setIsOpen: setCartOpen } = useCart();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-bold text-foreground">Supplr</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#products" className="text-muted-foreground hover:text-foreground transition-colors">
              Products
            </a>
            <a href="#guide" className="text-muted-foreground hover:text-foreground transition-colors">
              Guide
            </a>
            <a href="#boxes" className="text-muted-foreground hover:text-foreground transition-colors">
              Mystery Boxes
            </a>
            <a href="#suppliers" className="text-muted-foreground hover:text-foreground transition-colors">
              Suppliers
            </a>
          </div>

          {/* Cart Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" size="icon" className="relative" onClick={() => setCartOpen(true)}>
              <ShoppingBag className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              <a href="#products" className="text-muted-foreground hover:text-foreground transition-colors">
                Products
              </a>
              <a href="#guide" className="text-muted-foreground hover:text-foreground transition-colors">
                Guide
              </a>
              <a href="#boxes" className="text-muted-foreground hover:text-foreground transition-colors">
                Mystery Boxes
              </a>
              <a href="#suppliers" className="text-muted-foreground hover:text-foreground transition-colors">
                Suppliers
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
