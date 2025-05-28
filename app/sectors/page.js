import WhyChooseUs from '../components/WhyChooseUs';

const sectors = [
  {
    name: 'Retail & Shopping Centres',
    icon: '/shop.svg',
    desc: 'Loss prevention, customer safety, and asset protection for retail environments and shopping centres.',
    link: '/services/retail-security',
  },
  {
    name: 'Corporate & Offices',
    icon: '/building.svg',
    desc: 'Reception, concierge, and access control for offices, business parks, and headquarters.',
    link: '/services/corporate-security',
  },
  {
    name: 'Construction & Industrial',
    icon: '/factory.svg',
    desc: 'Site security, patrols, and asset protection for construction and industrial facilities.',
    link: '/services/industrial-security',
  },
  {
    name: 'Events & Venues',
    icon: '/event.svg',
    desc: 'Crowd management, access control, and VIP protection for public and private events.',
    link: '/services/event-security',
  },
  {
    name: 'Transport & Logistics',
    icon: '/truck.svg',
    desc: 'Cargo protection, site security, and rapid response for transport and logistics operations.',
    link: '/services/transport-security',
  },
  {
    name: 'Hospitality & Hotels',
    icon: '/star.svg',
    desc: 'Discreet, professional security for hotels, hospitality, and leisure venues.',
    link: '/services/corporate-security',
  },
  {
    name: 'Education & Public Sector',
    icon: '/globe.svg',
    desc: 'Safeguarding, access control, and incident response for schools and public sector sites.',
    link: '/services/security-guards',
  },
  {
    name: 'Private Estates',
    icon: '/shield.svg',
    desc: 'Bespoke security for private estates, residential developments, and high-net-worth clients.',
    link: '/services/security-guards',
  },
];

// Sectors/Industries served page
export default function SectorsPage() {
  return (
    <main style={{padding: 0, maxWidth: 1100, margin: '0 auto'}}>
      <section style={{
        width: '100%',
        minHeight: '260px',
        background: 'linear-gradient(rgba(17,23,46,0.7),rgba(26,35,126,0.5)), url(/hero-bg.jpg) center/cover no-repeat',
        color: 'var(--white)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '3.5rem 2rem 2.5rem 2rem',
        position: 'relative',
        marginBottom: 0
      }}>
        <h1 style={{fontSize: '2.3rem', fontWeight: 800, marginBottom: '1.2rem', letterSpacing: '-1px', zIndex: 3, maxWidth: 700}}>
          Sectors & Industries We Serve
        </h1>
        <p style={{ fontSize: '1.15rem', maxWidth: 700, marginBottom: '1.5rem', zIndex: 3, lineHeight: 1.3 }}>
          Specialist security for every sector. Our SIA-licensed team protects people, property, and assets across retail, corporate, construction, events, logistics, hospitality, education, and more.
        </p>
      </section>
      <section style={{padding: '2.5rem 1rem 1.5rem 1rem', background: 'var(--white)'}}>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem', width: '100%', maxWidth: 1100, margin: '0 auto'}}>
          {sectors.map(sector => (
            <div key={sector.name} style={{background: 'var(--accent-blue-light)', borderRadius: 14, boxShadow: '0 2px 12px #1a237e11', padding: '2rem 1.2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', minHeight: 260}}>
              <img src={sector.icon} alt="" aria-hidden="true" style={{height: 48, marginBottom: 18, opacity: 0.85}} />
              <h2 style={{fontSize: '1.15rem', fontWeight: 700, color: 'var(--primary-blue)', marginBottom: 10}}>{sector.name}</h2>