// Industrial Security service detail page
export default function IndustrialSecurityPage() {
  return (
    <main style={{padding: '2rem 0', maxWidth: 900, margin: '0 auto'}}>
      <h1 style={{fontSize: '2rem', fontWeight: 800, color: 'var(--primary-blue)', marginBottom: 24}}>Industrial Security</h1>
      <img src="/file.svg" alt="Industrial Security" style={{height: 80, marginBottom: 24, opacity: 0.7}} />
      <p style={{fontSize: '1.1rem', lineHeight: 1.7, marginBottom: 24}}>
        We provide industrial security guards and services designed around the needs of factories, warehouses, and production facilities. Our solutions include static and patrolling guards, surveillance, and physical security upgrades.
      </p>
      <ul style={{marginBottom: 24}}>
        <li>Factory and warehouse guarding</li>
        <li>Mobile patrols and alarm response</li>
        <li>Access control and visitor management</li>
        <li>Surveillance and monitoring</li>
        <li>Physical security upgrades</li>
      </ul>
      <a href="/contact" style={{background: 'var(--primary-blue)', color: 'var(--white)', padding: '0.8rem 2rem', borderRadius: 6, fontWeight: 700, textDecoration: 'none'}}>Request a Quote</a>
    </main>
  );
}
