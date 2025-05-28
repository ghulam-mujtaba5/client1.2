import Navbar from '../components/Navbar';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function ContactPage() {
  return (
    <main style={{ width: '100%', minHeight: '100vh', background: '#f4f4f4' }}>
      <Navbar />
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '3rem 1rem 2rem 1rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary-blue)', marginBottom: 32, textAlign: 'center', letterSpacing: '-1px' }}>Contact Us</h1>
        <ContactSection />
      </section>
    </main>
  );
}
