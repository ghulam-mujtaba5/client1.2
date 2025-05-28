import Image from "next/image";

// Hero section for homepage
export default function HeroSection() {
  return (
    <section style={{
      width: '100%',
      minHeight: '70vh',
      background: 'linear-gradient(rgba(17,23,46,0.7),rgba(26,35,126,0.5)), url(/hero-bg.jpg) center/cover no-repeat',
      color: 'var(--white)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '6rem 2rem 4rem 2rem',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: '0 8px 32px rgba(26,35,126,0.18)'
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'none',
        background: 'radial-gradient(circle at 60% 40%, var(--accent-blue) 0%, transparent 70%)'
      }} />
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" style={{ position: 'absolute', right: 40, top: 40, opacity: 0.12, zIndex: 2, maxWidth: '20vw', minWidth: 60 }}><circle cx="60" cy="60" r="58" stroke="var(--white)" strokeWidth="4" /><rect x="35" y="35" width="50" height="50" rx="12" fill="var(--primary-blue)" opacity="0.2" /></svg>
      <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.2rem', letterSpacing: '-1px', zIndex: 3, animation: 'fadeInUp 1.2s', maxWidth: 600 }}>
        Security & Protection You Can Trust
      </h1>
      <p style={{ fontSize: '1.35rem', maxWidth: 700, marginBottom: '2.5rem', zIndex: 3, animation: 'fadeInUp 1.5s', lineHeight: 1.3 }}>
        Accredited, experienced, and responsive security solutions for businesses, events, and individuals across the UK & Europe. Your safety is our mission.
      </p>
      <a href="#contact" style={{
        background: 'linear-gradient(90deg, var(--primary-blue) 60%, var(--accent-blue) 100%)',
        color: 'var(--white)',
        padding: '1rem 2.5rem',
        borderRadius: '6px',
        fontWeight: 700,
        textDecoration: 'none',
        fontSize: '1.25rem',
        boxShadow: '0 4px 16px rgba(26,35,126,0.18)',
        zIndex: 3,
        animation: 'fadeInUp 1.8s',
        width: 'fit-content',
        margin: '0 auto'
      }}>
        Get a Free Quote
      </a>
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', zIndex: 2 }}>
        <Image src="/vercel.svg" alt="Security graphic" width={120} height={40} style={{ opacity: 0.18, margin: '0 auto', maxWidth: '30vw', minWidth: 40 }} />
      </div>
      <style>{`
        @media (max-width: 700px) {
          section {
            padding: 2.5rem 0.5rem 2rem 0.5rem !important;
          }
          h1 {
            font-size: 1.5rem !important;
            max-width: 95vw !important;
          }
          p {
            font-size: 1rem !important;
            max-width: 95vw !important;
          }
          svg {
            width: 60px !important;
            height: 60px !important;
            right: 10px !important;
            top: 10px !important;
          }
        }
      `}</style>
    </section>
  );
}
