import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Star, Clock, MapPin } from 'lucide-react';
import heroSpread from '@/assets/hero-spread.jpg';
import img1 from '/img1.webp';
import { useGSAP } from '@/hooks/useGSAP';

interface HeroProps {
  id?: string;
}

const Hero = ({ id }: HeroProps) => {
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { gsap, animateOnScroll, parallaxEffect } = useGSAP();

  useEffect(() => {
    if (contentRef.current) {
      // Hero content entrance animation
      gsap.fromTo(contentRef.current.children, 
        { opacity: 0, y: 50, scale: 0.95 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          delay: 0.5
        }
      );
    }

    // Parallax effect for background image
    if (heroRef.current) {
      parallaxEffect('.hero-bg', 0.3);
    }
  }, [gsap, parallaxEffect]);

  return (
    <section ref={heroRef} id={id} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroSpread} 
          alt="Delicious multi-cuisine spread at Ayushman Restaurant" 
          className="hero-bg w-full h-full object-cover transform scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/70 to-secondary/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
      </div>
      {/* Content */}
      <div ref={contentRef} className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Your Favorite Flavors,
            <span className="block bg-gradient-to-r from-accent via-white to-accent bg-clip-text text-transparent animate-glow-pulse">
              All in One Place
            </span>
          </h1>
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Experience Chinese, Fast Food, and North Indian cuisine at Ayushman Restaurant
          </p>
          {/* Rating & Info Cards */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur-md rounded-lg px-4 py-2 flex items-center space-x-2">
              <Star className="w-5 h-5 text-accent fill-current" />
              <span className="font-semibold">4.0</span>
              <span className="text-white/80">Dining (7 ratings)</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg px-4 py-2 flex items-center space-x-2">
              <Star className="w-5 h-5 text-accent fill-current" />
              <span className="font-semibold">4.0</span>
              <span className="text-white/80">Delivery (7 ratings)</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg px-4 py-2 flex items-center space-x-2">
              <Clock className="w-5 h-5 text-accent" />
              <span className="text-white/80">Currently closed for online ordering</span>
            </div>
          </div>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <a href="#menu">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 text-lg shadow-xl">
                Order Online
              </Button>
            </a>
            <a href="#contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 text-lg">
                Book a Table
              </Button>
            </a>
          </div>
          {/* Location Info */}
          <div className="flex justify-center items-center space-x-2 text-white/80">
            <MapPin className="w-4 h-4" />
            <span>260, Ground Floor, Basant Vihar Colony, Kohna, Jhunsi, Allahabad</span>
          </div>
        </div>
      </div>
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
      {/* Floating Ambience Image */}
      <div className="absolute bottom-20 right-8 hidden lg:block z-10 animate-float">
        <div className="w-64 h-40 rounded-xl overflow-hidden shadow-2xl border-4 border-white/20">
          <img 
            src={img1} 
            alt="Restaurant ambience" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;