import Navbar from '../components/Navbar';
import AboutSection from '../components/AboutSection';
import TrustBadges from '../components/TrustBadges';
import FeaturedClients from '../components/FeaturedClients';
import Testimonials from '../components/Testimonials';
import containerStyles from '../container.module.css';

export default function AboutPage() {
  return (
    <main className={containerStyles.pageBg}>
      <section style={{
        width: '100%',
        minHeight: '220px',
        background: 'linear-gradient(rgba(17,23,46,0.7),rgba(26,35,126,0.5)), url(/hero-bg.jpg) center/cover no-repeat',
        color: 'var(--white)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '3rem 2rem 2rem 2rem',
        position: 'relative',
        marginBottom: 0
      }}>
        <h1 style={{ fontSize: '2.3rem', fontWeight: 800, marginBottom: '1.2rem', letterSpacing: '-1px', zIndex: 3, maxWidth: 700 }}>
          About Aim Secure Group
        </h1>
        <p style={{ fontSize: '1.15rem', maxWidth: 700, marginBottom: '1.5rem', zIndex: 3, lineHeight: 1.3 }}>
          Trusted security partner for leading brands, events, and organisations across the UK and Europe. Accredited, experienced, and dedicated to your safety.
        </p>
      </section>
      <section className={containerStyles.container + ' ' + containerStyles.section}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary-blue)', marginBottom: 18 }}>Our Story</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: 1.7, marginBottom: 24 }}>
          Founded in 2005, Aim Secure Group has grown from a local security provider to a trusted partner for major brands, events, and organisations across the UK and Europe. Our reputation is built on reliability, professionalism, and a relentless focus on client satisfaction. We combine decades of experience with the latest technology and a highly trained team to deliver security solutions you can trust.
        </p>
        <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--primary-blue)', marginBottom: 10 }}>Mission & Vision</h3>
        <ul style={{ fontSize: '1.05rem', color: '#333', lineHeight: 1.7, marginBottom: 24, paddingLeft: 20 }}>
          <li><b>Mission:</b> To deliver accredited, responsive, and client-focused security services that protect people, property, and reputations.</li>
          <li><b>Vision:</b> To set the standard for security excellence in the UK and Europe, through innovation, training, and a commitment to quality.</li>
        </ul>
        <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--primary-blue)', marginBottom: 10 }}>Our Values</h3>
        <ul style={{ fontSize: '1.05rem', color: '#333', lineHeight: 1.7, marginBottom: 24, paddingLeft: 20 }}>
          <li>Integrity, transparency, and fair dealing</li>
          <li>Continuous improvement and training</li>
          <li>Client-first approach and tailored solutions</li>
          <li>Teamwork, respect, and diversity</li>
        </ul>
        <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--primary-blue)', marginBottom: 10 }}>Accreditations & Memberships</h3>
        <TrustBadges />
        <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--primary-blue)', margin: '2.5rem 0 10px 0' }}>Our Clients</h3>
        <FeaturedClients />
        <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--primary-blue)', margin: '2.5rem 0 10px 0' }}>What Our Clients Say</h3>
        <Testimonials />
      </section>
    </main>
  );
}
