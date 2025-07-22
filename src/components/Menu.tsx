import { useState, useEffect } from 'react';
import { Search, Star, Clock, Smartphone, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { menuData, MenuItem, MenuCategory } from '@/data/menuData';
import masalaDosa from '@/assets/masala-dosa.jpg';
import MenuModal from './MenuModal';
import { useGSAP } from '@/hooks/useGSAP';
import img2 from '/img2.webp';

interface MenuProps {
  id?: string;
}

const Menu = ({ id }: MenuProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { staggerOnScroll, animateOnScroll } = useGSAP();

  // Removed GSAP animation to prevent items from becoming invisible

  const filteredCategories = menuData.filter(category => {
    if (selectedCategory === 'all') return true;
    return category.categoryName === selectedCategory;
  }).map(category => ({
    ...category,
    items: category.items.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.items.length > 0);

  const categories = ['all', ...menuData.map(cat => cat.categoryName)];

  const handleItemClick = (item: MenuItem, categoryName: string) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  return (
    <section id={id} className="py-20 bg-background scroll-mt-20 relative overflow-visible">
      {/* Ambience Background Image */}
      <img src={img2} alt="Menu ambience" className="pointer-events-none select-none absolute inset-0 w-full h-full object-cover opacity-10 z-0" style={{filter: 'blur(1.5px)'}} />
      <div className="container mx-auto px-4 relative z-10 overflow-visible">
        {/* Header */}
        <div className="menu-header text-center mb-12">
          <h2 className="heading-section">Our Menu</h2>
          <p className="text-warm text-lg max-w-2xl mx-auto">
            Discover our extensive collection of authentic flavors from around the world
          </p>
        </div>

        {/* Online Ordering Status */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-secondary" />
                <span className="font-medium text-foreground">
                  Currently closed for online ordering. Opens at 11:30 AM
                </span>
              </div>
              <div className="text-sm text-muted-foreground">
                Live tracking available
              </div>
            </div>
          </div>

          {/* App Promotion */}
          <div className="bg-gradient-primary rounded-xl p-6 text-white mb-8 shadow-elegant">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <Smartphone className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl">Order via Mobile App</h3>
                  <p className="text-white/90">Online ordering with live tracking available on our mobile app</p>
                  <div className="flex items-center space-x-4 mt-2 text-sm">
                    <span>✓ Live Order Tracking</span>
                    <span>✓ Exclusive Offers</span>
                    <span>✓ Faster Checkout</span>
                  </div>
                </div>
              </div>
              <Button className="bg-white text-primary hover:bg-white/90 shadow-lg px-6 py-3">
                <Download className="w-4 h-4 mr-2" />
                Download App
              </Button>
            </div>
          </div>
        </div>

        {/* Enhanced Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <input
              type="text"
              placeholder="Search dishes, cuisines, or ingredients..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input pl-12 text-lg"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="capitalize"
            >
              {category === 'all' ? 'All Items' : category}
            </Button>
          ))}
        </div>

        {/* Menu Categories */}
        <div className="max-w-6xl mx-auto overflow-visible">
          {filteredCategories.map((category) => (
            <div key={category.categoryName} className="mb-12">
              <h3 className="text-2xl font-bold text-foreground mb-6 border-b border-border pb-2">
                {category.categoryName}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-visible">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="menu-item-card card-menu-item group animate-fade-in"
                    onClick={() => handleItemClick(item, category.categoryName)}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {item.name}
                          </h4>
                          {item.bestseller && (
                            <Badge variant="secondary" className="bg-accent text-accent-foreground">
                              <Star className="w-3 h-3 mr-1 fill-current" />
                              Bestseller
                            </Badge>
                          )}
                        </div>
                        {item.description && (
                          <p className="text-sm text-muted-foreground mb-2">
                            {item.description}
                          </p>
                        )}
                      </div>
                      <div className="text-right ml-4">
                        <span className="text-lg font-bold text-primary">₹{item.price}</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">Click for details & add to cart</span>
                      <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <Button size="sm" variant="outline" className="text-xs">
                          Quick Add
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Menu Modal */}
        <MenuModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          item={selectedItem}
        />

        {/* No Results */}
        {filteredCategories.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No items found matching your search.</p>
            <Button 
              variant="outline" 
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="mt-4"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Menu;