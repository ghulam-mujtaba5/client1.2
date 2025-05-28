// Vacant Premises Security service detail page
export default function VacantPremisesSecurityPage() {
  return (
    <main style={{padding: '2rem 0', maxWidth: 900, margin: '0 auto'}}>
      <h1 style={{fontSize: '2rem', fontWeight: 800, color: 'var(--primary-blue)', marginBottom: 24}}>Vacant Premises Security</h1>
      <img src="/window.svg" alt="Vacant Premises Security" style={{height: 80, marginBottom: 24, opacity: 0.7}} />
      <p style={{fontSize: '1.1rem', lineHeight: 1.7, marginBottom: 24}}>
        Protection for empty properties against trespass, vandalism, and theft. Our team provides regular patrols, alarm response, and physical security upgrades for vacant sites.
      </p>
      <ul style={{marginBottom: 24}}>
        <li>Regular site patrols</li>
        <li>Alarm response and incident management</li>
        <li>Physical security upgrades</li>
        <li>Detailed reporting and documentation</li>
      </ul>
      <a href="/contact" style={{background: 'var(--primary-blue)', color: 'var(--white)', padding: '0.8rem 2rem', borderRadius: 6, fontWeight: 700, textDecoration: 'none'}}>Request a Quote</a>
    </main>
  );
}
