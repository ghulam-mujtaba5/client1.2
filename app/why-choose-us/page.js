import Navbar from '../components/Navbar';
import WhyChooseUs from '../components/WhyChooseUs';
import Footer from '../components/Footer';

export default function WhyChooseUsPage() {
  return (
    <main style={{ width: '100%', minHeight: '100vh', background: '#f4f4f4' }}>
      <Navbar />
      <section className="fade-in" style={{ maxWidth: 1200, margin: '0 auto', padding: '3rem 1rem 2rem 1rem' }}>
        <h1 className="slide-up" style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary-blue)', marginBottom: 32, textAlign: 'center', letterSpacing: '-1px' }}>Why Choose Us</h1>
        <WhyChooseUs />
      </section>
      <Footer />
    </main>
  );
}
