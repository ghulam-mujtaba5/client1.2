import Navbar from '../components/Navbar';
import FeaturedClients from '../components/FeaturedClients';
import Footer from '../components/Footer';

export default function ClientsPage() {
  return (
    <main style={{ background: '#f4f8fc', minHeight: '100vh' }}>
      <Navbar />
      <section className="fade-in" style={{ maxWidth: 1200, margin: '0 auto', padding: '3rem 1rem 2rem 1rem', display: 'grid', gap: '2.5rem', borderRadius: 18, boxShadow: '0 4px 24px rgba(26,35,126,0.07)', background: '#fff', marginTop: '2rem', marginBottom: '2rem' }}>
        <h1 className="slide-up" style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--primary-blue)', marginBottom: 32, textAlign: 'center', letterSpacing: '-1px', lineHeight: 1.1 }}>Our Clients</h1>
        <div className="fade-in-delay" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
          {/* Louis Vuitton Card */}
          <div className="scale-in" style={{ background: '#f8fafc', borderRadius: 16, boxShadow: '0 2px 16px #1a237e11', padding: '2.2rem 1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <img src="/bag.svg" alt="Louis Vuitton logo" style={{ height: 56, marginBottom: 18, opacity: 0.85 }} />
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary-blue)', marginBottom: 10, letterSpacing: '-0.5px' }}>Luxury Retail Security Across Europe</h2>
            <p style={{ fontSize: '1.08rem', color: '#444', marginBottom: 18, lineHeight: 1.6 }}>Comprehensive security for flagship stores, including manned guarding, loss prevention, and VIP protection in major European cities.</p>
            <a href="/case-studies/louis-vuitton-retail" style={{ background: 'var(--primary-blue)', color: 'var(--white)', padding: '0.8rem 1.7rem', borderRadius: 8, fontWeight: 700, textDecoration: 'none', fontSize: '1.08rem', boxShadow: '0 2px 8px #2196f322', marginTop: 8 }}>Read More</a>
          </div>
          {/* Amazon Card */}
          <div className="scale-in" style={{ background: '#f8fafc', borderRadius: 16, boxShadow: '0 2px 16px #1a237e11', padding: '2.2rem 1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <img src="/factory.svg" alt="Amazon logo" style={{ height: 56, marginBottom: 18, opacity: 0.85 }} />
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary-blue)', marginBottom: 10, letterSpacing: '-0.5px' }}>Warehouse & Logistics Security</h2>
            <p style={{ fontSize: '1.08rem', color: '#444', marginBottom: 18, lineHeight: 1.6 }}>24/7 site protection, mobile patrols, and rapid response for Amazon logistics hubs and warehouses across the UK.</p>
            <a href="/case-studies/amazon-warehouse" style={{ background: 'var(--primary-blue)', color: 'var(--white)', padding: '0.8rem 1.7rem', borderRadius: 8, fontWeight: 700, textDecoration: 'none', fontSize: '1.08rem', boxShadow: '0 2px 8px #2196f322', marginTop: 8 }}>Read More</a>
          </div>
          {/* UK Music Festival Card */}
          <div className="scale-in" style={{ background: '#f8fafc', borderRadius: 16, boxShadow: '0 2px 16px #1a237e11', padding: '2.2rem 1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <img src="/event.svg" alt="UK Music Festival logo" style={{ height: 56, marginBottom: 18, opacity: 0.85 }} />
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary-blue)', marginBottom: 10, letterSpacing: '-0.5px' }}>Major Event Security</h2>
            <p style={{ fontSize: '1.08rem', color: '#444', marginBottom: 18, lineHeight: 1.6 }}>Crowd management, access control, and incident response for a 30,000+ attendee music festival.</p>
            <a href="/case-studies/uk-music-festival" style={{ background: 'var(--primary-blue)', color: 'var(--white)', padding: '0.8rem 1.7rem', borderRadius: 8, fontWeight: 700, textDecoration: 'none', fontSize: '1.08rem', boxShadow: '0 2px 8px #2196f322', marginTop: 8 }}>Read More</a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
