import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import banyaImage from "@/assets/banya.jpg";
import massageImage from "@/assets/massage.jpg";
import aromatherapyImage from "@/assets/aromatherapy.jpg";
import deepTissueImage from "@/assets/deep-tissue.jpg";
import swedishImage from "@/assets/swedish.jpg";
import coupleSpaImage from "@/assets/couple-spa.jpg";

const services = [
  {
    title: "Traditional Russian Banya",
    description: "Authentic steam bath experience with birch leaf treatment (Venik)",
    price: "₹2,500",
    duration: "60 minutes",
    image: banyaImage,
  },
  {
    title: "Deep Tissue Massage",
    description: "Therapeutic massage targeting deep muscle layers for tension relief",
    price: "₹3,500",
    duration: "90 minutes",
    image: deepTissueImage,
  },
  {
    title: "Hot Stone Therapy",
    description: "Relaxing massage using heated stones to ease muscle tension",
    price: "₹4,000",
    duration: "90 minutes",
    image: massageImage,
  },
  {
    title: "Aromatherapy Massage",
    description: "Gentle massage with essential oils for relaxation and rejuvenation",
    price: "₹3,000",
    duration: "75 minutes",
    image: aromatherapyImage,
  },
  {
    title: "Swedish Massage",
    description: "Classic relaxation massage with flowing strokes and gentle pressure",
    price: "₹2,800",
    duration: "60 minutes",
    image: swedishImage,
  },
  {
    title: "Couple's Spa Package",
    description: "Romantic spa experience for two with massage and banya access",
    price: "₹7,500",
    duration: "120 minutes",
    image: coupleSpaImage,
  },
  {
    title: "Thai Massage",
    description: "Traditional Thai massage with stretching and acupressure techniques",
    price: "₹3,200",
    duration: "75 minutes",
    image: massageImage,
  },
  {
    title: "Sports Massage",
    description: "Targeted massage for athletes to enhance performance and recovery",
    price: "₹3,800",
    duration: "60 minutes",
    image: deepTissueImage,
  },
  {
    title: "Reflexology",
    description: "Therapeutic foot massage focusing on pressure points for full body wellness",
    price: "₹2,200",
    duration: "45 minutes",
    image: swedishImage,
  },
  {
    title: "Shiatsu Massage",
    description: "Japanese pressure point massage for energy balance and relaxation",
    price: "₹3,500",
    duration: "60 minutes",
    image: aromatherapyImage,
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-spa-brown" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gold mb-4">Our Services</h2>
          <p className="text-xl text-spa-cream max-w-2xl mx-auto font-light">
            Experience authentic Russian spa treatments designed to rejuvenate your body and mind
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-card border-border overflow-hidden hover:shadow-gold transition-smooth hover:scale-105"
            >
              <div 
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              <CardHeader>
                <CardTitle className="text-gold text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-3xl font-bold text-gold">{service.price}</span>
                  <span className="text-sm text-muted-foreground">{service.duration}</span>
                </div>
                <Button 
                  onClick={() => window.location.href = "tel:+919818931148"}
                  className="w-full bg-gradient-to-r from-gold to-gold-light hover:opacity-90 text-spa-dark font-semibold transition-smooth"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now to Book
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
