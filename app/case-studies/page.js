import Navbar from '../components/Navbar';
// Case Studies page

const caseStudies = [
  {
    id: 'louis-vuitton-retail',
    client: 'Louis Vuitton',
    logo: '/bag.svg',
    title: 'Luxury Retail Security Across Europe',
    summary: 'Comprehensive security for flagship stores, including manned guarding, loss prevention, and VIP protection in major European cities.',
    link: '/case-studies/louis-vuitton-retail',
  },
  {
    id: 'amazon-logistics',
    client: 'Amazon',
    logo: '/truck.svg',
    title: 'Warehouse & Logistics Security',
    summary: '24/7 site protection, mobile patrols, and rapid response for Amazon logistics hubs and warehouses across the UK.',
    link: '/case-studies/amazon-logistics',
  },
  {
    id: 'uk-music-festival',
    client: 'UK Music Festival',
    logo: '/event.svg',
    title: 'Major Event Security',
    summary: 'Crowd management, access control, and incident response for a 30,000+ attendee music festival.',
    link: '/case-studies/uk-music-festival',
  },
];

export default function CaseStudiesPage() {
  return (
    <main style={{ width: '100%', minHeight: '100vh', background: '#f4f4f4' }}>
      <Navbar />
      <section style={{
        width: '100%',
        minHeight: '220px',
        background: 'linear-gradient(rgba(17,23,46,0.7),rgba(26,35,126,0.5)), url(/hero-bg.jpg) center/cover no-repeat',
        color: 'var(--white)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '3rem 2rem 2rem 2rem',
        position: 'relative',
        marginBottom: 0
      }}>
        <h1 style={{fontSize: '2.3rem', fontWeight: 800, marginBottom: '1.2rem', letterSpacing: '-1px', zIndex: 3, maxWidth: 700}}>
          Case Studies
        </h1>
        <p style={{ fontSize: '1.15rem', maxWidth: 700, marginBottom: '1.5rem', zIndex: 3, lineHeight: 1.3 }}>
          Real-world results for leading brands, events, and organisations. Explore our proven track record in retail, logistics, events, and more.
        </p>
      </section>
      <section style={{padding: '2.5rem 1rem 1.5rem 1rem', background: 'var(--white)'}}>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', width: '100%', maxWidth: 1100, margin: '0 auto'}}>
          {caseStudies.map(cs => (
            <div key={cs.id} style={{background: 'var(--accent-blue-light)', borderRadius: 14, boxShadow: '0 2px 12px #1a237e11', padding: '2rem 1.2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', minHeight: 220}}>
              <img src={cs.logo} alt={cs.client + ' logo'} style={{height: 48, marginBottom: 18, opacity: 0.85}} />
              <h2 style={{fontSize: '1.15rem', fontWeight: 700, color: 'var(--primary-blue)', marginBottom: 10}}>{cs.title}</h2>
              <p style={{fontSize: '1.05rem', color: '#444', marginBottom: 18}}>{cs.summary}</p>
              <a href={cs.link} style={{background: 'var(--primary-blue)', color: 'var(--white)', padding: '0.7rem 1.5rem', borderRadius: 6, fontWeight: 600, textDecoration: 'none', fontSize: '1rem', boxShadow: '0 2px 8px #2196f322'}}>Read More</a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
