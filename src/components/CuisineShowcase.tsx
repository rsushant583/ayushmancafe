import { Badge } from '@/components/ui/badge';

const cuisines = [
  {
    name: 'North Indian',
    description: 'Authentic flavors from the heart of India',
    icon: '🇮🇳',
    specialties: ['Paneer Butter Masala', 'Dal Makhani', 'Tandoori Roti'],
    color: 'from-orange-500 to-red-500'
  },
  {
    name: 'Chinese',
    description: 'Wok-tossed delights and Indo-Chinese fusion',
    icon: '🥢',
    specialties: ['Hakka Noodles', 'Chilli Paneer', 'Fried Rice'],
    color: 'from-red-600 to-yellow-500'
  },
  {
    name: 'Italian',
    description: 'Wood-fired pizzas and creamy pastas',
    icon: '🍕',
    specialties: ['Margherita Pizza', 'White Sauce Pasta', 'Garlic Bread'],
    color: 'from-green-600 to-red-600'
  },
  {
    name: 'South Indian',
    description: 'Crispy dosas and traditional flavors',
    icon: '🥥',
    specialties: ['Masala Dosa', 'Filter Coffee', 'Coconut Chutney'],
    color: 'from-green-500 to-yellow-500'
  },
  {
    name: 'Street Food',
    description: 'Popular Indian street food favorites',
    icon: '🌶️',
    specialties: ['Pav Bhaji', 'Chaat', 'Vada Pav'],
    color: 'from-yellow-500 to-orange-500'
  },
  {
    name: 'Beverages',
    description: 'Refreshing drinks and traditional beverages',
    icon: '🥤',
    specialties: ['Fresh Lime', 'Lassi', 'Hot Coffee'],
    color: 'from-blue-500 to-cyan-500'
  }
];

interface CuisineShowcaseProps {
  id?: string;
}

const CuisineShowcase = ({ id }: CuisineShowcaseProps) => {
  return (
    <section id={id} className="py-20 bg-gradient-to-b from-background to-muted/30 scroll-mt-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="heading-section">Diverse Cuisines</h2>
          <p className="text-warm text-lg max-w-2xl mx-auto">
            From traditional Indian delicacies to international favorites, we bring you a world of flavors under one roof
          </p>
        </div>

        {/* Cuisine Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {cuisines.map((cuisine, index) => (
            <div
              key={cuisine.name}
              className="group relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-white to-muted/50 border border-border hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cuisine.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {cuisine.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {cuisine.name}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {cuisine.description}
                </p>
                
                {/* Specialties */}
                <div className="space-y-2">
                  <span className="text-xs font-medium text-primary uppercase tracking-wide">
                    Popular Items:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {cuisine.specialties.map((specialty) => (
                      <Badge
                        key={specialty}
                        variant="secondary"
                        className="text-xs bg-muted/50 text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Can't decide? Our chefs recommend trying our popular combo meals!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-hero">View Full Menu</button>
            <button className="btn-accent">Today's Specials</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CuisineShowcase;