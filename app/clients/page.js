import Navbar from '../components/Navbar';
import FeaturedClients from '../components/FeaturedClients';
import Footer from '../components/Footer';

export default function ClientsPage() {
  return (
    <main style={{ background: '#f4f8fc', minHeight: '100vh' }}>
      <Navbar />
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '3rem 1rem 2rem 1rem', display: 'grid', gap: '2.5rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary-blue)', marginBottom: 32, textAlign: 'center', letterSpacing: '-1px' }}>Our Clients</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
          {/* Louis Vuitton Card */}
          <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 16px #1a237e11', padding: '2.2rem 1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <img src="/bag.svg" alt="Louis Vuitton logo" style={{ height: 48, marginBottom: 18, opacity: 0.85 }} />
            <h2 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--primary-blue)', marginBottom: 10 }}>Luxury Retail Security Across Europe</h2>
            <p style={{ fontSize: '1.05rem', color: '#444', marginBottom: 18 }}>Comprehensive security for flagship stores, including manned guarding, loss prevention, and VIP protection in major European cities.</p>
            <a href="/case-studies/louis-vuitton-retail" style={{ background: 'var(--primary-blue)', color: 'var(--white)', padding: '0.7rem 1.5rem', borderRadius: 6, fontWeight: 600, textDecoration: 'none', fontSize: '1rem', boxShadow: '0 2px 8px #2196f322' }}>Read More</a>
          </div>
          {/* Amazon Card */}
          <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 16px #1a237e11', padding: '2.2rem 1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <img src="/factory.svg" alt="Amazon logo" style={{ height: 48, marginBottom: 18, opacity: 0.85 }} />
            <h2 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--primary-blue)', marginBottom: 10 }}>Warehouse & Logistics Security</h2>
            <p style={{ fontSize: '1.05rem', color: '#444', marginBottom: 18 }}>24/7 site protection, mobile patrols, and rapid response for Amazon logistics hubs and warehouses across the UK.</p>
            <a href="/case-studies/amazon-warehouse" style={{ background: 'var(--primary-blue)', color: 'var(--white)', padding: '0.7rem 1.5rem', borderRadius: 6, fontWeight: 600, textDecoration: 'none', fontSize: '1rem', boxShadow: '0 2px 8px #2196f322' }}>Read More</a>
          </div>
          {/* UK Music Festival Card */}
          <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 16px #1a237e11', padding: '2.2rem 1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <img src="/event.svg" alt="UK Music Festival logo" style={{ height: 48, marginBottom: 18, opacity: 0.85 }} />
            <h2 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--primary-blue)', marginBottom: 10 }}>Major Event Security</h2>
            <p style={{ fontSize: '1.05rem', color: '#444', marginBottom: 18 }}>Crowd management, access control, and incident response for a 30,000+ attendee music festival.</p>
            <a href="/case-studies/uk-music-festival" style={{ background: 'var(--primary-blue)', color: 'var(--white)', padding: '0.7rem 1.5rem', borderRadius: 6, fontWeight: 600, textDecoration: 'none', fontSize: '1rem', boxShadow: '0 2px 8px #2196f322' }}>Read More</a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
