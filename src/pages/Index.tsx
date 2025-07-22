import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BestsellerMarquee from '@/components/BestsellerMarquee';
import CuisineShowcase from '@/components/CuisineShowcase';
import Menu from '@/components/Menu';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

const Index = () => {
  useSmoothScroll(); // Initialize Lenis smooth scrolling

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 md:pt-28">
        <Hero id="home" />
        <BestsellerMarquee />
        <CuisineShowcase id="about" />
        <Menu id="menu" />
        <Contact id="contact" />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
