// Cleaning Services service detail page
export default function CleaningServicesPage() {
  return (
    <main className="fade-in" style={{padding: '3.5rem 0', maxWidth: 900, margin: '0 auto', background: '#fff', borderRadius: 18, boxShadow: '0 4px 32px #1a237e13'}} aria-label="Cleaning Services main content">
      <h1 className="slide-up" style={{fontSize: '2.5rem', fontWeight: 900, color: 'var(--primary-blue)', marginBottom: 18, letterSpacing: '-1.5px', textAlign: 'center', lineHeight: 1.1}}>Cleaning Services</h1>
      <span className="visually-hidden" id="cleaning-desc">Professional cleaning for residential and commercial spaces. Spot treatments, deep cleans, and ongoing maintenance for homes, offices, and retail premises.</span>
      <section className="fade-in-delay" aria-describedby="cleaning-desc" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 32}}>
        <img src="/star.svg" alt="Cleaning Services" style={{height: 90, marginBottom: 18, opacity: 0.8, transition: 'transform 0.4s'}} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.08)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'} />
        <p style={{fontSize: '1.25rem', lineHeight: 1.7, marginBottom: 18, color: '#333', textAlign: 'center', maxWidth: 700}}>
          Professional cleaning for residential and commercial spaces. Our trained team delivers spot treatments, deep cleans, and ongoing maintenance for homes, offices, and retail premises. Quality, value, and security in one service.
        </p>
      </section>
      <section aria-label="Cleaning features" style={{marginBottom: 32}}>
        <h2 className="slide-up" style={{fontSize: '1.35rem', color: 'var(--primary-blue)', fontWeight: 700, marginBottom: 12, textAlign: 'center', letterSpacing: '-0.5px'}}>What We Offer</h2>
        <ul className="slide-up" style={{fontSize: '1.12rem', color: '#222', paddingLeft: 24, lineHeight: 1.8, fontWeight: 500, margin: 0, listStyle: 'disc inside', textAlign: 'left', maxWidth: 700, marginLeft: 'auto', marginRight: 'auto'}}>
          <li>Residential and commercial cleaning</li>
          <li>Spot treatments and deep cleans</li>
          <li>Flexible scheduling and competitive pricing</li>
          <li>Fully vetted, professional staff</li>
        </ul>
      </section>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <a className="scale-in" href="/contact" style={{background: 'linear-gradient(90deg, var(--primary-blue) 60%, var(--accent-blue) 100%)', color: 'var(--white)', padding: '1rem 2.5rem', borderRadius: 8, fontWeight: 800, textDecoration: 'none', fontSize: '1.18rem', boxShadow: '0 2px 12px #2196f322', letterSpacing: '0.5px', transition: 'background 0.2s'}} aria-label="Request a cleaning services quote">Request a Quote</a>
      </div>
    </main>
  );
}
