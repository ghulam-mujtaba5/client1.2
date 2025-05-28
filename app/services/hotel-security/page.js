// Hotel Security service detail page
export default function HotelSecurityPage() {
  return (
    <main style={{padding: '2rem 0', maxWidth: 900, margin: '0 auto'}}>
      <h1 style={{fontSize: '2rem', fontWeight: 800, color: 'var(--primary-blue)', marginBottom: 24}}>Hotel Security</h1>
      <img src="/star.svg" alt="Hotel Security" style={{height: 80, marginBottom: 24, opacity: 0.7}} />
      <p style={{fontSize: '1.1rem', lineHeight: 1.7, marginBottom: 24}}>
        Discreet, multi-skilled security and concierge staff for hotels and hospitality venues. We ensure guest safety, asset protection, and a welcoming environment.
      </p>
      <ul style={{marginBottom: 24}}>
        <li>Concierge and front-of-house security</li>
        <li>Guest safety and incident response</li>
        <li>Surveillance and monitoring</li>
        <li>Customer service focused approach</li>
      </ul>
      <a href="/contact" style={{background: 'var(--primary-blue)', color: 'var(--white)', padding: '0.8rem 2rem', borderRadius: 6, fontWeight: 700, textDecoration: 'none'}}>Request a Quote</a>
    </main>
  );
}
