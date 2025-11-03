import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import BookingForm from "@/components/BookingForm";
import FloatingCallButton from "@/components/FloatingCallButton";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <>
      <SEO 
        title="Russian Spa Centre | Best Spa in NCR | Mahipalpur Delhi"
        description="Top-rated Russian Spa Centre in NCR offering authentic Russian Banya, therapeutic massages & luxury spa treatments. Expert therapists. Book now: +91 98189 31148"
        keywords="russian spa mahipalpur, russian banya delhi, best spa in ncr, massage centre mahipalpur, luxury spa delhi, therapeutic massage"
        canonical="https://russianspacentre.lovable.app/"
      />
      <main className="min-h-screen bg-background">
        <Header />
        <Hero />
        <Services />
        <WhyChooseUs />
        <BookingForm />
        <Footer />
        <FloatingCallButton />
      </main>
    </>
  );
};

export default Index;
