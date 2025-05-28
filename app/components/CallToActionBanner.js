// Call-to-action banner for homepage
export default function CallToActionBanner() {
  return (
    <section style={{width: '100%', background: 'var(--primary-blue)', color: 'var(--white)', padding: '2.5rem 0', textAlign: 'center', borderRadius: 12, margin: '2rem 0'}}>
      <h2 style={{fontWeight: 800, fontSize: '2rem', marginBottom: 16}}>Ready to secure your business?</h2>
      <p style={{fontSize: '1.15rem', marginBottom: 24}}>Contact our expert team today for a free, no-obligation quote and security assessment.</p>
      <a href="#contact" style={{background: 'var(--accent-blue)', color: 'var(--white)', padding: '1rem 2.5rem', borderRadius: 6, fontWeight: 700, textDecoration: 'none', fontSize: '1.15rem', boxShadow: '0 2px 8px #2196f322'}}>Get a Free Quote</a>
    </section>
  );
}
