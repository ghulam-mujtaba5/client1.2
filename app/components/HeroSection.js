import Image from "next/image";

// Hero section for homepage
export default function HeroSection() {
  return (
    <section style={{
      width: '100%',
      minHeight: '70vh',
      background: 'linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.5)), url(/hero-bg.jpg) center/cover no-repeat',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '6rem 2rem 4rem 2rem',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: '0 8px 32px rgba(0,0,0,0.18)'
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'none',
        background: 'radial-gradient(circle at 60% 40%, rgba(230,57,70,0.18) 0%, transparent 70%)'
      }} />
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" style={{ position: 'absolute', right: 40, top: 40, opacity: 0.12, zIndex: 2 }}><circle cx="60" cy="60" r="58" stroke="#fff" strokeWidth="4" /><rect x="35" y="35" width="50" height="50" rx="12" fill="#e63946" opacity="0.2" /></svg>
      <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.2rem', letterSpacing: '-1px', zIndex: 3, animation: 'fadeInUp 1.2s' }}>
        Security & Protection You Can Trust
      </h1>
      <p style={{ fontSize: '1.35rem', maxWidth: 700, marginBottom: '2.5rem', zIndex: 3, animation: 'fadeInUp 1.5s' }}>
        Accredited, experienced, and responsive security solutions for businesses, events, and individuals across the UK & Europe. Your safety is our mission.
      </p>
      <a href="#contact" style={{
        background: 'linear-gradient(90deg, #e63946 60%, #ffb703 100%)',
        color: '#fff',
        padding: '1rem 2.5rem',
        borderRadius: '6px',
        fontWeight: 700,
        textDecoration: 'none',
        fontSize: '1.25rem',
        boxShadow: '0 4px 16px rgba(230,57,70,0.18)',
        zIndex: 3,
        animation: 'fadeInUp 1.8s'
      }}>
        Get a Free Quote
      </a>
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', zIndex: 2 }}>
        <Image src="/vercel.svg" alt="Security graphic" width={120} height={40} style={{ opacity: 0.18, margin: '0 auto' }} />
      </div>
    </section>
  );
}
