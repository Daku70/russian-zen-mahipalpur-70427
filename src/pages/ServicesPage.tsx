import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import Services from "@/components/Services";

const ServicesPage = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <Services />
      </div>
      <Footer />
      <FloatingCallButton />
    </main>
  );
};

export default ServicesPage;
