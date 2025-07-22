import { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';
import { useGSAP } from '@/hooks/useGSAP';

const bestsellerItems = [
  { name: "Masala Dosa", image: "/api/placeholder/120/120", price: "₹119", badge: "Bestseller" },
  { name: "Paneer Tikka Pizza", image: "/api/placeholder/120/120", price: "₹180", badge: "Top Rated" },
  { name: "Chilli Paneer", image: "/api/placeholder/120/120", price: "₹239", badge: "Popular" },
  { name: "Hakka Noodles", image: "/api/placeholder/120/120", price: "₹179", badge: "Chef's Choice" },
  { name: "Paneer Butter Masala", image: "/api/placeholder/120/120", price: "₹249", badge: "Bestseller" },
  { name: "Veg Biryani", image: "/api/placeholder/120/120", price: "₹149", badge: "Popular" },
  { name: "Cheese Garlic Toast", image: "/api/placeholder/120/120", price: "₹89", badge: "Quick Bite" },
];

const BestsellerMarquee = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  // Removed GSAP animation to prevent items from becoming invisible

  return (
    <section className="py-12 bg-gradient-to-r from-muted/30 to-accent/10 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="heading-section">Our Bestsellers</h2>
          <p className="text-warm max-w-2xl mx-auto">
            Discover the dishes that keep our customers coming back for more
          </p>
        </div>
        
        <div 
          ref={marqueeRef}
          className="bestseller-marquee relative"
        >
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-background to-transparent z-10"></div>
          
          <div className="flex animate-marquee">
            {/* First set of items */}
            {bestsellerItems.map((item, index) => (
              <div key={`first-${index}`} className="marquee-item flex-shrink-0">
                <div className="relative group cursor-pointer">
                  <div className="bg-card rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 min-w-[200px]">
                    <div className="relative mb-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 rounded-full mx-auto object-cover ring-2 ring-primary/20"
                      />
                      <div className="bestseller-badge">
                        <Star className="w-3 h-3 mr-1 inline" />
                        {item.badge}
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <h3 className="font-semibold text-foreground mb-1">{item.name}</h3>
                      <p className="text-primary font-bold text-lg">{item.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {bestsellerItems.map((item, index) => (
              <div key={`second-${index}`} className="marquee-item flex-shrink-0">
                <div className="relative group cursor-pointer">
                  <div className="bg-card rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 min-w-[200px]">
                    <div className="relative mb-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 rounded-full mx-auto object-cover ring-2 ring-primary/20"
                      />
                      <div className="bestseller-badge">
                        <Star className="w-3 h-3 mr-1 inline" />
                        {item.badge}
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <h3 className="font-semibold text-foreground mb-1">{item.name}</h3>
                      <p className="text-primary font-bold text-lg">{item.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestsellerMarquee;