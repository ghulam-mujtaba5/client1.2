// Services overview page
export default function ServicesPage() {
  return (
    <main style={{padding: '2rem 0', maxWidth: 1100, margin: '0 auto'}}>
      <h1 style={{fontSize: '2rem', fontWeight: 800, color: 'var(--primary-blue)', marginBottom: 24}}>Our Security Services</h1>
      <ul style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', listStyle: 'none', padding: 0}}>
        <li><a href="/services/security-guards">Security Guards</a></li>
        <li><a href="/services/corporate-security">Corporate Security</a></li>
        <li><a href="/services/event-security">Event Security</a></li>
        <li><a href="/services/retail-security">Retail Security</a></li>
        <li><a href="/services/industrial-security">Industrial Security</a></li>
        <li><a href="/services/transport-security">Transport Security</a></li>
      </ul>
    </main>
  );
}
