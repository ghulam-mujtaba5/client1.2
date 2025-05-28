// Guard Dog Security service detail page
export default function GuardDogSecurityPage() {
  return (
    <main style={{padding: '2rem 0', maxWidth: 900, margin: '0 auto'}}>
      <h1 style={{fontSize: '2rem', fontWeight: 800, color: 'var(--primary-blue)', marginBottom: 24}}>Guard Dog Security</h1>
      <img src="/shield.svg" alt="Guard Dog Security" style={{height: 80, marginBottom: 24, opacity: 0.7}} />
      <p style={{fontSize: '1.1rem', lineHeight: 1.7, marginBottom: 24}}>
        Highly trained security dogs and handlers for maximum deterrence and rapid response. Ideal for large sites, vacant properties, and high-risk environments.
      </p>
      <ul style={{marginBottom: 24}}>
        <li>Professional dog handlers</li>
        <li>Visible deterrent for intruders</li>
        <li>Rapid response to incidents</li>
        <li>Suitable for sites, events, and vacant premises</li>
      </ul>
      <a href="/contact" style={{background: 'var(--primary-blue)', color: 'var(--white)', padding: '0.8rem 2rem', borderRadius: 6, fontWeight: 700, textDecoration: 'none'}}>Request a Quote</a>
    </main>
  );
}
