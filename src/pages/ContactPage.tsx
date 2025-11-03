import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import BookingForm from "@/components/BookingForm";

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <BookingForm />
      </div>
      <Footer />
      <FloatingCallButton />
    </main>
  );
};

export default ContactPage;
