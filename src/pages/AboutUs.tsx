import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import WhyChooseUs from "@/components/WhyChooseUs";

const AboutUs = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <WhyChooseUs />
      </div>
      <Footer />
      <FloatingCallButton />
    </main>
  );
};

export default AboutUs;
