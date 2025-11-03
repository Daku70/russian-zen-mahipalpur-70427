import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import heroImage from "@/assets/hero-spa.jpg";

const Hero = () => {
  const handleCallNow = () => {
    window.location.href = "tel:+919818931148";
  };

  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-label="Hero section">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.4)"
        }}
        role="img"
        aria-label="Luxurious spa treatment room with relaxing ambiance"
      />
      
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <img 
            src={logo} 
            alt="Russian Spa Centre - Premier Spa in NCR, Mahipalpur Delhi"
            title="Russian Spa Centre - Authentic Russian Banya & Luxury Spa Treatments" 
            className="w-full max-w-2xl mx-auto mb-8 animate-fade-in"
            loading="eager"
          />
          
          <p className="text-xl md:text-2xl text-spa-cream mb-8 animate-fade-in-delay font-light tracking-wide">
            Experience the healing traditions of Russian Banya in the heart of Mahipalpur, New Delhi
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
            <Button 
              size="lg" 
              onClick={scrollToBooking}
              className="bg-gradient-to-r from-gold to-gold-light hover:opacity-90 text-spa-dark font-semibold text-lg px-8 py-6 shadow-gold transition-smooth"
            >
              Book Appointment
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={handleCallNow}
              className="border-2 border-gold text-gold hover:bg-gold hover:text-spa-dark font-semibold text-lg px-8 py-6 transition-smooth"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-gold rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
