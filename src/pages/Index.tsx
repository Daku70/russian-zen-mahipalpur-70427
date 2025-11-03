import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import BookingForm from "@/components/BookingForm";
import FloatingCallButton from "@/components/FloatingCallButton";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
      <BookingForm />
      <Footer />
      <FloatingCallButton />
    </main>
  );
};

export default Index;
