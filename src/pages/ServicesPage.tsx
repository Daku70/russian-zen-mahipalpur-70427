import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import Services from "@/components/Services";
import SEO from "@/components/SEO";

const ServicesPage = () => {
  return (
    <>
      <SEO 
        title="Spa Services - Russian Banya, Massage & Wellness | NCR Mahipalpur"
        description="Explore our premium spa services: Russian Banya, Deep Tissue, Swedish, Aromatherapy, Hot Stone massage & more. Expert therapists. Book: +91 98189 31148"
        keywords="russian banya, deep tissue massage, aromatherapy massage, couples spa, swedish massage, hot stone therapy, spa services ncr"
        canonical="https://russianspacentre.lovable.app/services"
      />
      <main className="min-h-screen bg-background">
        <Header />
        <div className="pt-20">
          <Services />
        </div>
        <Footer />
        <FloatingCallButton />
      </main>
    </>
  );
};

export default ServicesPage;
