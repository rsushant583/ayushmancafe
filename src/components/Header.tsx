import { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useGSAP } from '@/hooks/useGSAP';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const { gsap } = useGSAP();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setIsScrolled(scrolled);
      
      // GSAP animation for navbar transition
      if (headerRef.current) {
        gsap.to(headerRef.current, {
          backgroundColor: scrolled ? 'hsla(var(--background), 0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'blur(0px)',
          boxShadow: scrolled ? '0 4px 20px -4px hsla(var(--foreground), 0.1)' : 'none',
          padding: scrolled ? '0.75rem 0' : '1.5rem 0',
          duration: 0.3,
          ease: "power2.out"
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [gsap]);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/95 backdrop-blur-sm shadow-sm ${
          isScrolled ? 'py-2' : 'py-4'
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="/ayushman_logo-removebg-preview.png" alt="Ayushman Restaurant Logo" className="w-10 h-10 rounded-lg object-contain bg-white" />
            <div>
              <h1 className="text-xl font-bold text-foreground">Ayushman Restaurant</h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+919621042506" className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </a>
            <Button className="btn-hero">Order Online</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <a href="tel:+919621042506">
              <Button size="sm" variant="outline">
                <Phone className="w-4 h-4" />
              </Button>
            </a>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col h-full">
            {/* Mobile Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div className="flex items-center space-x-2">
                <img src="/ayushman_logo-removebg-preview.png" alt="Ayushman Restaurant Logo" className="w-8 h-8 rounded-lg object-contain bg-white" />
                <span className="font-bold text-foreground">Ayushman Restaurant</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="w-6 h-6" />
              </Button>
            </div>

            {/* Mobile Navigation */}
            <nav className="flex-1 p-6">
              <div className="space-y-6">
                {navItems.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-2xl font-semibold text-foreground hover:text-primary transition-colors duration-300"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      animation: 'fade-in 0.5s ease-out forwards',
                    }}
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              {/* Mobile CTAs */}
              <div className="absolute bottom-8 left-6 right-6 space-y-4">
                <Button className="w-full btn-hero" size="lg">
                  Order Online
                </Button>
                <Button variant="outline" className="w-full" size="lg">
                  Book a Table
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;