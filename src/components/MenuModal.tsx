import { useState, useEffect } from 'react';
import { X, Star, ShoppingCart, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MenuItem {
  name: string;
  price: number;
  bestseller?: boolean;
  description?: string;
  image?: string;
}

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: MenuItem | null;
}

const MenuModal = ({ isOpen, onClose, item }: MenuModalProps) => {
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setQuantity(1);
    setIsFavorite(false);
  }, [item]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !item) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const totalPrice = item.price * quantity;

  return (
    <div 
      className="modal-overlay animate-fade-in"
      onClick={handleBackdropClick}
    >
      <div className="bg-card rounded-xl max-w-md w-full shadow-2xl animate-scale-in relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Item Image */}
        <div className="relative h-48 rounded-t-xl overflow-hidden">
          <img
            src={item.image || '/api/placeholder/400/200'}
            alt={item.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          
          {item.bestseller && (
            <div className="absolute top-4 left-4 bg-secondary text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
              <Star className="w-4 h-4 mr-1 fill-current" />
              Bestseller
            </div>
          )}
          
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className={`absolute top-4 right-12 p-2 rounded-full transition-colors ${
              isFavorite ? 'bg-red-500 text-white' : 'bg-white/80 text-foreground hover:bg-white'
            }`}
          >
            <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-foreground mb-2">{item.name}</h2>
            <p className="text-muted-foreground text-sm mb-3">Authentic recipe with fresh ingredients</p>
            
            <p className="text-warm leading-relaxed">
              {item.description || `Delicious ${item.name} prepared with authentic spices and fresh ingredients. A perfect blend of flavors that will tantalize your taste buds.`}
            </p>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-3xl font-bold text-primary">₹{item.price}</span>
              <span className="text-muted-foreground ml-2">per item</span>
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center justify-between mb-6">
            <span className="font-medium text-foreground">Quantity:</span>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
              >
                -
              </button>
              <span className="w-8 text-center font-semibold">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg font-semibold">
            <ShoppingCart className="w-5 h-5 mr-2" />
            Add ₹{totalPrice} to Cart
          </Button>

          {/* Note */}
          <p className="text-center text-muted-foreground text-sm mt-3">
            Available for delivery and dine-in
          </p>
        </div>
      </div>
    </div>
  );
};

export default MenuModal;