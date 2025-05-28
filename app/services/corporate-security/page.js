// Corporate Security service detail page
export default function CorporateSecurityPage() {
  return (
    <main style={{padding: '2rem 0', maxWidth: 900, margin: '0 auto'}}>
      <h1 style={{fontSize: '2rem', fontWeight: 800, color: 'var(--primary-blue)', marginBottom: 24}}>Corporate Security</h1>
      <img src="/globe.svg" alt="Corporate Security" style={{height: 80, marginBottom: 24, opacity: 0.7}} />
      <p style={{fontSize: '1.1rem', lineHeight: 1.7, marginBottom: 24}}>
        Our corporate security services include highly trained static and mobile guards, concierge security for your foyer, secure executive transport, and more. We protect your people, property, and reputation with a discreet, professional approach tailored to your business needs.
      </p>
      <ul style={{marginBottom: 24}}>
        <li>Reception and concierge security</li>
        <li>Executive and VIP protection</li>
        <li>Access control and visitor management</li>
        <li>Mobile patrols and alarm response</li>
        <li>Security for offices, business parks, and headquarters</li>
      </ul>
      <a href="/contact" style={{background: 'var(--primary-blue)', color: 'var(--white)', padding: '0.8rem 2rem', borderRadius: 6, fontWeight: 700, textDecoration: 'none'}}>Request a Quote</a>
    </main>
  );
}
