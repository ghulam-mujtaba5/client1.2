// Transport Security service detail page
export default function TransportSecurityPage() {
  return (
    <main style={{padding: '2rem 0', maxWidth: 900, margin: '0 auto'}}>
      <h1 style={{fontSize: '2rem', fontWeight: 800, color: 'var(--primary-blue)', marginBottom: 24}}>Transport Security</h1>
      <img src="/globe.svg" alt="Transport Security" style={{height: 80, marginBottom: 24, opacity: 0.7}} />
      <p style={{fontSize: '1.1rem', lineHeight: 1.7, marginBottom: 24}}>
        Our transport security services protect high-value cargo from departure to destination. We offer vehicle tracking, onboard guards, and security escorts for road, rail, and maritime transport.
      </p>
      <ul style={{marginBottom: 24}}>
        <li>Vehicle tracking and monitoring</li>
        <li>Onboard security guards</li>
        <li>Security escorts for high-value cargo</li>
        <li>Protection for road, rail, and sea transport</li>
        <li>Rapid response to incidents</li>
      </ul>
      <a href="/contact" style={{background: 'var(--primary-blue)', color: 'var(--white)', padding: '0.8rem 2rem', borderRadius: 6, fontWeight: 700, textDecoration: 'none'}}>Request a Quote</a>
    </main>
  );
}
