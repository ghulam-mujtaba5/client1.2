// Call-to-action banner for homepage
export default function CallToActionBanner() {
  return (
    <section style={{
      width: '100%', 
      background: 'linear-gradient(135deg, var(--primary-blue), #1565C0)', 
      color: 'var(--white)', 
      padding: '2.5rem 1rem',
      textAlign: 'center', 
      borderRadius: 16, 
      margin: '2.5rem 0',
      boxShadow: '0 4px 20px rgba(33, 150, 243, 0.15)'
    }}>
      <h2 style={{
        fontWeight: 900, 
        fontSize: 'clamp(1.7rem, 4vw, 2.3rem)', 
        marginBottom: '1.2rem',
        textShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        Ready to secure your business?
      </h2>
      <p style={{
        fontSize: 'clamp(1.08rem, 2.5vw, 1.18rem)', 
        marginBottom: '1.5rem',
        maxWidth: '800px',
        margin: '0 auto 1.5rem auto',
        opacity: 0.95
      }}>
        Contact our expert team today for a free, no-obligation quote and security assessment.
      </p>
      <a href="#contact" style={{
        background: '#FFA000',
        color: '#000',
        padding: '1.1rem 2.7rem',
        borderRadius: '10px',
        fontWeight: '900',
        textDecoration: 'none',
        fontSize: 'clamp(1.08rem, 2.5vw, 1.18rem)',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        display: 'inline-block',
        transition: 'transform 0.2s, box-shadow 0.2s',
        border: '2px solid rgba(255,255,255,0.1)',
        marginTop: '0.5rem'
      }}>
        Get a Free Quote
      </a>
    </section>
  );
}
