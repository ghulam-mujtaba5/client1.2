// Amazon Warehouse & Logistics Security Case Study
export default function AmazonWarehouseCaseStudy() {
  return (
    <main style={{padding: '2rem 0', maxWidth: 900, margin: '0 auto'}}>
      <h1 style={{fontSize: '2rem', fontWeight: 800, color: 'var(--primary-blue)', marginBottom: 24}}>Warehouse & Logistics Security</h1>
      <img src="/factory.svg" alt="Amazon logo" style={{height: 60, marginBottom: 24, opacity: 0.85}} />
      <p style={{fontSize: '1.1rem', lineHeight: 1.7, marginBottom: 24}}>
        24/7 site protection, mobile patrols, and rapid response for Amazon logistics hubs and warehouses across the UK. Our security solutions ensure the safety of staff, assets, and supply chain operations at all times.
      </p>
      <ul style={{marginBottom: 24}}>
        <li>Continuous site protection</li>
        <li>Mobile patrols and alarm response</li>
        <li>Incident management and reporting</li>
        <li>Security for logistics and supply chain</li>
      </ul>
      <a href="/case-studies" style={{background: 'var(--primary-blue)', color: 'var(--white)', padding: '0.8rem 2rem', borderRadius: 6, fontWeight: 700, textDecoration: 'none'}}>Back to Case Studies</a>
    </main>
  );
}
