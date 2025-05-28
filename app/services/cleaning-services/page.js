// Cleaning Services service detail page
export default function CleaningServicesPage() {
  return (
    <main style={{padding: '2rem 0', maxWidth: 900, margin: '0 auto'}}>
      <h1 style={{fontSize: '2rem', fontWeight: 800, color: 'var(--primary-blue)', marginBottom: 24}}>Cleaning Services</h1>
      <img src="/star.svg" alt="Cleaning Services" style={{height: 80, marginBottom: 24, opacity: 0.7}} />
      <p style={{fontSize: '1.1rem', lineHeight: 1.7, marginBottom: 24}}>
        Professional cleaning for residential and commercial spaces. Our trained team delivers spot treatments, deep cleans, and ongoing maintenance for homes, offices, and retail premises. Quality, value, and security in one service.
      </p>
      <ul style={{marginBottom: 24}}>
        <li>Residential and commercial cleaning</li>
        <li>Spot treatments and deep cleans</li>
        <li>Flexible scheduling and competitive pricing</li>
        <li>Fully vetted, professional staff</li>
      </ul>
      <a href="/contact" style={{background: 'var(--primary-blue)', color: 'var(--white)', padding: '0.8rem 2rem', borderRadius: 6, fontWeight: 700, textDecoration: 'none'}}>Request a Quote</a>
    </main>
  );
}
