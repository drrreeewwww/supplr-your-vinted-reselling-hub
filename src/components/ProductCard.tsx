import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  price: number;
  image?: string;
  badge?: string;
  popular?: boolean;
}

const ProductCard = ({ id, title, description, price, image, badge, popular }: ProductCardProps) => {
  const { addItem } = useCart();
  
  const handleAddToCart = () => {
    addItem({ id, title, price });
    toast.success(`${title} added to cart!`, {
      description: `£${price.toFixed(2)}`,
    });
  };

  return (
    <div className={`relative group rounded-2xl bg-card border border-border overflow-hidden card-glow ${popular ? 'ring-2 ring-primary' : ''}`}>
      {/* Popular Badge */}
      {popular && (
        <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
          Most Popular
        </div>
      )}

      {/* Badge */}
      {badge && !popular && (
        <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold">
          {badge}
        </div>
      )}

      {/* Image */}
      <div className="relative h-48 bg-secondary/50 flex items-center justify-center overflow-hidden">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        ) : (
          <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
            <ShoppingCart className="w-8 h-8 text-primary" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-foreground">
            £{price.toFixed(2)}
          </span>
          <Button onClick={handleAddToCart} size="sm">
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
