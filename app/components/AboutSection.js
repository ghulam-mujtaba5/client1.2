// About/company section
export default function AboutSection() {
  return (
    <section id="about" className="about-section" style={{
      width: '100%',
      background: 'var(--white)',
      color: 'var(--gray-dark)',
      padding: '4rem 2rem',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '3rem',
      fontFamily: 'var(--font-geist-sans)',
      maxWidth: 1200,
      margin: '0 auto',
      borderRadius: 16,
      boxShadow: '0 4px 24px rgba(26,35,126,0.07)',
      animation: 'fadeInUp 1.2s'
    }}>
      <div style={{ flex: 1, minWidth: 260 }}>
        <h2 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '1.5rem', color: 'var(--primary-blue)' }}>About Us</h2>
        <p style={{ fontSize: '1.15rem', lineHeight: 1.7, marginBottom: 24 }}>
          With decades of experience, our accredited team delivers innovative security solutions across the UK and Europe. We are committed to protecting people, property, and reputations with integrity, professionalism, and the latest technology. Our services are tailored to your needs, with no hidden charges or unnecessary extras. Trusted by leading brands and local businesses alike.
        </p>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', marginTop: 16 }}>
          <span style={{ background: 'var(--primary-blue)', color: 'var(--white)', borderRadius: 8, padding: '0.5rem 1.2rem', fontWeight: 700, fontSize: '1rem', letterSpacing: '0.5px', boxShadow: '0 2px 8px #1a237e22' }}>SIA Approved</span>
        </div>
      </div>
      <div style={{ flex: 1, minWidth: 260, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src="/globe.svg" alt="Accreditation badge" style={{ width: 120, height: 120, opacity: 0.18, filter: 'drop-shadow(0 2px 8px #2196f322)' }} />
      </div>
      <style>{`
        @media (max-width: 700px) {
          .about-section {
            flex-direction: column !important;
            gap: 1.2rem !important;
            padding: 2rem 0.5rem !important;
          }
          .about-section > div {
            min-width: 0 !important;
            width: 100% !important;
            text-align: center !important;
          }
          .about-section img {
            margin: 0 auto !important;
          }
        }
      `}</style>
    </section>
  );
}
