import { MapPin, Phone, Clock, DollarSign, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface ContactProps {
  id?: string;
}

const Contact = ({ id }: ContactProps) => {
  return (
    <section id={id} className="py-20 bg-muted/30 scroll-mt-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="heading-section">Visit Us</h2>
          <p className="text-warm text-lg max-w-2xl mx-auto">
            Come experience the vibrant flavors and warm hospitality at Ayushman Restaurant
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Location Card */}
            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Our Location</h3>
                  <p className="text-muted-foreground mb-3">
                    260, Ground Floor, Basant Vihar Colony, Kohna, Jhunsi, Allahabad
                  </p>
                  <Button variant="outline" size="sm">
                    Get Directions
                  </Button>
                </div>
              </div>
            </Card>

            {/* Contact Card */}
            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Contact Us</h3>
                  <a 
                    href="tel:+919621042506" 
                    className="text-muted-foreground hover:text-primary transition-colors text-lg font-medium"
                  >
                    +91 96210 42506
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">
                    Available during restaurant hours
                  </p>
                </div>
              </div>
            </Card>

            {/* Hours Card */}
            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Opening Hours</h3>
                  <div className="space-y-1 text-muted-foreground">
                    <p><span className="font-medium">Monday - Sunday:</span> 11:30 AM - 11:00 PM</p>
                    <p className="text-sm text-primary">Currently Open</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Pricing Card */}
            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Average Cost</h3>
                  <p className="text-muted-foreground">
                    <span className="text-xl font-bold text-foreground">₹1,000</span> for two people
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Inclusive of taxes
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Map and Ratings */}
          <div className="space-y-8">
            {/* Interactive Map Placeholder */}
            <Card className="p-6">
              <h3 className="font-semibold text-lg text-foreground mb-4">Find Us Here</h3>
              <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center relative overflow-hidden">
                {/* Map placeholder with styling to indicate it's interactive */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
                <div className="relative z-10 text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                  <p className="text-foreground font-medium">Interactive Map</p>
                  <p className="text-sm text-muted-foreground">Click to open in Google Maps</p>
                </div>
                {/* Simulated map elements */}
                <div className="absolute top-4 left-4 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <div className="absolute bottom-6 right-6 w-3 h-3 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-accent rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </Card>

            {/* Ratings */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center">
                <div className="flex items-center justify-center space-x-1 mb-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <span className="text-2xl font-bold text-foreground">4.0</span>
                </div>
                <p className="text-sm text-muted-foreground">Delivery Rating</p>
                <p className="text-xs text-muted-foreground mt-1">7 reviews</p>
              </Card>
              
              <Card className="p-6 text-center">
                <div className="flex items-center justify-center space-x-1 mb-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <span className="text-2xl font-bold text-foreground">4.0</span>
                </div>
                <p className="text-sm text-muted-foreground">Dining Rating</p>
                <p className="text-xs text-muted-foreground mt-1">7 reviews</p>
              </Card>
            </div>

            {/* Reservation CTA */}
            <Card className="p-6 bg-gradient-primary text-white">
              <h3 className="font-semibold text-xl mb-2">Reserve Your Table</h3>
              <p className="text-white/90 mb-4">
                Book ahead to guarantee your spot for lunch or dinner
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="bg-white text-primary hover:bg-white/90 flex-1">
                  Book a Table
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary flex-1">
                  Call to Reserve
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;