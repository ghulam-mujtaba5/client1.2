// Retail Security service detail page
export default function RetailSecurityPage() {
  return (
    <main style={{padding: '2rem 0', maxWidth: 900, margin: '0 auto'}}>
      <h1 style={{fontSize: '2rem', fontWeight: 800, color: 'var(--primary-blue)', marginBottom: 24}}>Retail Security</h1>
      <img src="/vercel.svg" alt="Retail Security" style={{height: 80, marginBottom: 24, opacity: 0.7}} />
      <p style={{fontSize: '1.1rem', lineHeight: 1.7, marginBottom: 24}}>
        Our retail security solutions help businesses of any size cut crime-related losses and boost profits. We provide uniformed and plain-clothes guards, surveillance, and loss prevention expertise for shops, malls, and supermarkets.
      </p>
      <ul style={{marginBottom: 24}}>
        <li>Shoplifting prevention and deterrence</li>
        <li>Employee theft detection</li>
        <li>Customer service and safety</li>
        <li>Surveillance and offsite monitoring</li>
        <li>Security for retail parks and shopping centres</li>
      </ul>
      <a href="/contact" style={{background: 'var(--primary-blue)', color: 'var(--white)', padding: '0.8rem 2rem', borderRadius: 6, fontWeight: 700, textDecoration: 'none'}}>Request a Quote</a>
    </main>
  );
}
