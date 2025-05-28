import Navbar from '../components/Navbar';
import TrustBadges from '../components/TrustBadges';
import Footer from '../components/Footer';

export default function TrustBadgesPage() {
  return (
    <main style={{ background: '#f4f8fc', minHeight: '100vh' }}>
      <Navbar />
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '3rem 1rem 2rem 1rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary-blue)', marginBottom: 32, textAlign: 'center', letterSpacing: '-1px' }}>Accreditations & Trust Badges</h1>
        <TrustBadges />
      </section>
      <Footer />
    </main>
  );
}
