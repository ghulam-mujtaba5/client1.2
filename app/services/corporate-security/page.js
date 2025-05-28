import Testimonials from '../../components/Testimonials';

// Corporate Security service detail page
export default function CorporateSecurityPage() {
  return (
    <main style={{padding: '0', maxWidth: 900, margin: '0 auto'}}>
      <section style={{
        width: '100%',
        minHeight: '320px',
        background: 'linear-gradient(rgba(17,23,46,0.7),rgba(26,35,126,0.5)), url(/hero-bg.jpg) center/cover no-repeat',
        color: 'var(--white)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '4rem 2rem 3rem 2rem',
        position: 'relative',
        marginBottom: 0
      }}>
        <img src="/building.svg" alt="Corporate Security" style={{height: 80, marginBottom: 24, opacity: 0.8}} />
        <h1 style={{fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.2rem', letterSpacing: '-1px', zIndex: 3, maxWidth: 600}}>
          Corporate Security
        </h1>
        <p style={{ fontSize: '1.25rem', maxWidth: 700, marginBottom: '1.5rem', zIndex: 3, lineHeight: 1.3 }}>
          Discreet, professional security for your business, people, and reputation. Concierge, static, and mobile solutions tailored to your corporate needs.
        </p>
        <a href="/contact" style={{background: 'linear-gradient(90deg, var(--primary-blue) 60%, var(--accent-blue) 100%)', color: 'var(--white)', padding: '1rem 2.5rem', borderRadius: '6px', fontWeight: 700, textDecoration: 'none', fontSize: '1.15rem', boxShadow: '0 2px 8px #2196f322', marginTop: 8}}>Request a Quote</a>
      </section>
      <section style={{padding: '2.5rem 1rem 1.5rem 1rem', background: 'var(--white)'}}>
        <h2 style={{fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary-blue)', marginBottom: 18}}>Service Overview</h2>
        <p style={{fontSize: '1.1rem', lineHeight: 1.7, marginBottom: 24}}>
          Our corporate security services include highly trained static and mobile guards, concierge security for your foyer, secure executive transport, and more. We protect your people, property, and reputation with a discreet, professional approach tailored to your business needs. All staff are SIA licensed, uniformed or plain-clothes as required, and supported by our 24/7 operations team.
        </p>
        <h3 style={{fontSize: '1.15rem', fontWeight: 700, color: 'var(--primary-blue)', marginBottom: 10}}>Key Features & Benefits</h3>
        <ul style={{marginBottom: 24, paddingLeft: 20, color: '#333', fontSize: '1.05rem', lineHeight: 1.7}}>
          <li>Reception and concierge security</li>
          <li>Executive and VIP protection</li>
          <li>Access control and visitor management</li>
          <li>Mobile patrols and alarm response</li>
          <li>Security for offices, business parks, and headquarters</li>
          <li>Discreet, uniformed, or plain-clothes staff</li>
          <li>Fully vetted, SIA-licensed, and insured personnel</li>
        </ul>
        <h3 style={{fontSize: '1.15rem', fontWeight: 700, color: 'var(--primary-blue)', marginBottom: 10}}>Sectors Served</h3>
        <ul style={{display: 'flex', flexWrap: 'wrap', gap: '1.2rem', listStyle: 'none', padding: 0, marginBottom: 32}}>
          <li style={{background: 'var(--accent-blue-light)', borderRadius: 8, padding: '0.6rem 1.2rem', fontWeight: 600}}>Corporate & Offices</li>
          <li style={{background: 'var(--accent-blue-light)', borderRadius: 8, padding: '0.6rem 1.2rem', fontWeight: 600}}>Business Parks</li>
          <li style={{background: 'var(--accent-blue-light)', borderRadius: 8, padding: '0.6rem 1.2rem', fontWeight: 600}}>Headquarters</li>
          <li style={{background: 'var(--accent-blue-light)', borderRadius: 8, padding: '0.6rem 1.2rem', fontWeight: 600}}>Retail & Shopping Centres</li>
          <li style={{background: 'var(--accent-blue-light)', borderRadius: 8, padding: '0.6rem 1.2rem', fontWeight: 600}}>Events & Venues</li>
        </ul>
        <Testimonials />
        <div style={{textAlign: 'center', marginTop: 32}}>
          <a href="/contact" style={{background: 'var(--primary-blue)', color: 'var(--white)', padding: '1rem 2.5rem', borderRadius: 6, fontWeight: 700, textDecoration: 'none', fontSize: '1.15rem', boxShadow: '0 2px 8px #2196f322'}}>Get a Free Security Assessment</a>
        </div>
      </section>
    </main>
  );
}
