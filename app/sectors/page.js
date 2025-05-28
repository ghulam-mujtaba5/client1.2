// Sectors/Industries served page
export default function SectorsPage() {
  return (
    <main style={{padding: '2rem 0', maxWidth: 1100, margin: '0 auto'}}>
      <h1 style={{fontSize: '2rem', fontWeight: 800, color: 'var(--primary-blue)', marginBottom: 24}}>Industries & Sectors We Serve</h1>
      <ul style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', listStyle: 'none', padding: 0}}>
        <li>Retail & Shopping Centres</li>
        <li>Corporate & Offices</li>
        <li>Construction & Industrial</li>
        <li>Events & Venues</li>
        <li>Transport & Logistics</li>
        <li>Hospitality & Hotels</li>
        <li>Education & Public Sector</li>
        <li>Private Estates</li>
      </ul>
    </main>
  );
}
