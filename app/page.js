import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TrustBadges from "./components/TrustBadges";
import WhyChooseUs from "./components/WhyChooseUs";
import FeaturedClients from "./components/FeaturedClients";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import Testimonials from "./components/Testimonials";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div style={{ width: '100%', minHeight: '100vh', background: '#f4f4f4' }}>
      <Navbar />
      <HeroSection />
      <TrustBadges />
      <WhyChooseUs />
      <FeaturedClients />
      <ServicesSection />
      <AboutSection />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
}
