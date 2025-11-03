import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import BookingForm from "@/components/BookingForm";
import SEO from "@/components/SEO";

const ContactPage = () => {
  return (
    <>
      <SEO 
        title="Contact Us - Book Your Spa Appointment | Russian Spa NCR"
        description="Book your appointment at Russian Spa Centre Mahipalpur. Call +91 98189 31148 or fill our online form. Open daily 10 AM - 10 PM. Visit us in Delhi NCR."
        keywords="book spa appointment, contact russian spa, spa booking mahipalpur, russian spa phone number, wellness centre contact"
        canonical="https://russianspacentre.lovable.app/contact"
      />
      <main className="min-h-screen bg-background">
        <Header />
        <div className="pt-20">
          <BookingForm />
        </div>
        <Footer />
        <FloatingCallButton />
      </main>
    </>
  );
};

export default ContactPage;
