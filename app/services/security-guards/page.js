// Security Guards service detail page
export default function SecurityGuardsPage() {
  return (
    <main style={{padding: '2rem 0', maxWidth: 900, margin: '0 auto'}}>
      <h1 style={{fontSize: '2rem', fontWeight: 800, color: 'var(--primary-blue)', marginBottom: 24}}>Security Guards</h1>
      <img src="/file.svg" alt="Security Guards" style={{height: 80, marginBottom: 24, opacity: 0.7}} />
      <p style={{fontSize: '1.1rem', lineHeight: 1.7, marginBottom: 24}}>
        Our thoroughly vetted and highly trained professional security guards are available for any business sector and any occasion. We provide visible deterrence, rapid response, and a reassuring presence for your staff, customers, and assets. All our guards are SIA licensed and undergo continuous training to meet the highest industry standards.
      </p>
      <ul style={{marginBottom: 24}}>
        <li>24/7 manned guarding</li>
        <li>Mobile patrols and rapid response</li>
        <li>Front-of-house and concierge security</li>
        <li>Retail, corporate, and industrial coverage</li>
        <li>Uniformed and plain-clothes options</li>
      </ul>
      <a href="/contact" style={{background: 'var(--primary-blue)', color: 'var(--white)', padding: '0.8rem 2rem', borderRadius: 6, fontWeight: 700, textDecoration: 'none'}}>Request a Quote</a>
    </main>
  );
}
