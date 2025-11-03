import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import WhyChooseUs from "@/components/WhyChooseUs";
import SEO from "@/components/SEO";

const AboutUs = () => {
  return (
    <>
      <SEO 
        title="About Us - Best Spa in NCR | Russian Spa Centre Mahipalpur"
        description="Discover why Russian Spa Centre is NCR's premier wellness destination. Expert therapists, authentic Russian Banya, luxury facilities & exceptional service since 2010."
        keywords="best spa ncr, russian spa mahipalpur, luxury spa delhi, wellness centre, authentic russian banya"
        canonical="https://russianspacentre.lovable.app/about"
      />
      <main className="min-h-screen bg-background">
        <Header />
        <div className="pt-20">
          <WhyChooseUs />
        </div>
        <Footer />
        <FloatingCallButton />
      </main>
    </>
  );
};

export default AboutUs;
