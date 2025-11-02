import Hero from "@/components/Hero";
import Services from "@/components/Services";
import BookingForm from "@/components/BookingForm";
import FloatingCallButton from "@/components/FloatingCallButton";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Services />
      <BookingForm />
      <Footer />
      <FloatingCallButton />
    </main>
  );
};

export default Index;
