import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import SEO from "@/components/SEO";
import banyaImg from "@/assets/banya.jpg";
import massageImg from "@/assets/massage.jpg";
import deepTissueImg from "@/assets/deep-tissue.jpg";
import aromatherapyImg from "@/assets/aromatherapy.jpg";
import swedishImg from "@/assets/swedish.jpg";
import coupleImg from "@/assets/couple-spa.jpg";
import facialImg from "@/assets/facial.jpg";

const GalleryPage = () => {
  const galleryImages = [
    { src: banyaImg, alt: "Traditional Russian Banya experience", title: "Russian Banya" },
    { src: massageImg, alt: "Relaxing massage therapy", title: "Massage Therapy" },
    { src: deepTissueImg, alt: "Deep tissue massage treatment", title: "Deep Tissue" },
    { src: aromatherapyImg, alt: "Aromatherapy session with essential oils", title: "Aromatherapy" },
    { src: swedishImg, alt: "Swedish massage relaxation", title: "Swedish Massage" },
    { src: coupleImg, alt: "Couple's spa experience", title: "Couple's Spa" },
    { src: facialImg, alt: "Premium facial treatment", title: "Facial Treatment" },
  ];

  return (
    <>
      <SEO 
        title="Gallery - Luxury Spa Facilities | Russian Spa Centre NCR"
        description="View our premium spa facilities, treatment rooms, and authentic Russian Banya. Experience luxury and tranquility at NCR's finest spa centre in Mahipalpur."
        keywords="spa gallery, luxury spa photos, russian banya images, spa facilities ncr, wellness centre gallery"
        canonical="https://russianspacentre.lovable.app/gallery"
      />
      <main className="min-h-screen bg-background">
        <Header />
      <div className="pt-20 min-h-screen">
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <h1 className="text-4xl md:text-5xl font-serif text-center mb-4 text-foreground">
              Our Gallery
            </h1>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Experience the tranquility and luxury of our spa through these moments
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <div 
                  key={index} 
                  className="group relative overflow-hidden rounded-lg shadow-elegant hover:shadow-glow transition-smooth aspect-[4/3]"
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-spa-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end">
                    <h3 className="text-gold font-serif text-xl p-6">{image.title}</h3>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <p className="text-muted-foreground mb-6">
                Visit us to experience the luxury and tranquility firsthand
              </p>
              <a 
                href="/contact" 
                className="inline-block bg-gradient-primary text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-smooth shadow-elegant"
              >
                Book Your Experience
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <FloatingCallButton />
      </main>
    </>
  );
};

export default GalleryPage;
