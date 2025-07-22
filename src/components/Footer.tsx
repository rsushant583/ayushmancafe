import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="/ayushman_logo-removebg-preview.png" alt="Ayushman Restaurant Logo" className="w-10 h-10 rounded-lg object-contain bg-white" />
              <div>
                <h3 className="text-xl font-bold">Ayushman Restaurant</h3>
                <p className="text-sm text-primary-foreground/80">Restaurant</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Experience the authentic taste of traditional Indian cuisine with a modern twist. Your satisfaction is our priority.
            </p>
            <div className="flex space-x-2">
              <a href="https://www.instagram.com/ayushmanrestaurant" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors">
                <span className="text-sm">ig</span>
              </a>
              <a href="https://www.facebook.com/ayushmanrestaurant" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors">
                <span className="text-sm">f</span>
              </a>
              <a href="https://twitter.com/ayushmanrestro" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors">
                <span className="text-sm">tw</span>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-foreground/80 mt-0.5 flex-shrink-0" />
                <p className="text-primary-foreground/80 text-sm">
                  260, Ground Floor, Basant Vihar Colony, Kohna, Jhunsi, Allahabad
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-foreground/80 flex-shrink-0" />
                <a 
                  href="tel:+919621042506" 
                  className="text-primary-foreground/80 hover:text-white transition-colors text-sm"
                >
                  +91 96210 42506
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-primary-foreground/80 flex-shrink-0" />
                <p className="text-primary-foreground/80 text-sm">
                  Daily: 11:30 AM - 11:00 PM
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-foreground/80 flex-shrink-0" />
                <p className="text-primary-foreground/80 text-sm">
                  contact@ayushmanrestaurant.com
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              <a href="#menu" className="text-primary-foreground/80 hover:text-white transition-colors text-sm py-1">
                Our Menu
              </a>
              <a href="#about" className="text-primary-foreground/80 hover:text-white transition-colors text-sm py-1">
                About Us
              </a>
              <a href="#contact" className="text-primary-foreground/80 hover:text-white transition-colors text-sm py-1">
                Contact
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors text-sm py-1">
                Reservations
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors text-sm py-1">
                Online Order
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors text-sm py-1">
                Gallery
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors text-sm py-1">
                Reviews
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors text-sm py-1">
                Careers
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Ayushman Restaurant. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;