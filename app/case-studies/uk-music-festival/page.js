// UK Music Festival Security Case Study
export default function UKMusicFestivalCaseStudy() {
  return (
    <main style={{padding: '2rem 0', maxWidth: 900, margin: '0 auto'}}>
      <h1 style={{fontSize: '2rem', fontWeight: 800, color: 'var(--primary-blue)', marginBottom: 24}}>Major Event Security</h1>
      <img src="/event.svg" alt="UK Music Festival logo" style={{height: 60, marginBottom: 24, opacity: 0.85}} />
      <p style={{fontSize: '1.1rem', lineHeight: 1.7, marginBottom: 24}}>
        Crowd management, access control, and incident response for a 30,000+ attendee music festival. Our experienced team ensures the safety and enjoyment of all guests, artists, and staff at large-scale events.
      </p>
      <ul style={{marginBottom: 24}}>
        <li>Crowd management and safety</li>
        <li>Access control and ticket checks</li>
        <li>Incident response and emergency planning</li>
        <li>VIP and artist protection</li>
      </ul>
      <a href="/case-studies" style={{background: 'var(--primary-blue)', color: 'var(--white)', padding: '0.8rem 2rem', borderRadius: 6, fontWeight: 700, textDecoration: 'none'}}>Back to Case Studies</a>
    </main>
  );
}
