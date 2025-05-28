// Services overview page
export default function ServicesPage() {
  return (
    <main style={{padding: '2rem 0', maxWidth: 1100, margin: '0 auto'}}>
      <h1 style={{fontSize: '2rem', fontWeight: 800, color: 'var(--primary-blue)', marginBottom: 24}}>Our Security Services</h1>
      <div className="services-list" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', listStyle: 'none', padding: 0}}>
        <ServiceCard title="Security Guards" icon="/file.svg" link="/services/security-guards" desc="Professional, SIA-licensed guards for all sectors and occasions." />
        <ServiceCard title="Corporate Security" icon="/globe.svg" link="/services/corporate-security" desc="Concierge, static, and mobile security for your business premises." />
        <ServiceCard title="Event Security" icon="/window.svg" link="/services/event-security" desc="Planning, crowd management, and on-site protection for safe events." />
        <ServiceCard title="Retail Security" icon="/vercel.svg" link="/services/retail-security" desc="Reduce losses and protect assets with expert retail security solutions." />
        <ServiceCard title="Industrial Security" icon="/file.svg" link="/services/industrial-security" desc="Tailored security for factories, warehouses, and production facilities." />
        <ServiceCard title="Transport Security" icon="/globe.svg" link="/services/transport-security" desc="Protect high-value cargo from departure to destination." />
      </div>
      <style>{`
        @media (max-width: 700px) {
          .services-list {
            display: flex !important;
            flex-direction: column !important;
            gap: 1.2rem !important;
          }
        }
      `}</style>
    </main>
  );
}

function ServiceCard({ title, icon, link, desc }) {
  return (
    <a href={link} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      background: 'var(--white)',
      borderRadius: 14,
      boxShadow: '0 4px 24px rgba(26,35,126,0.10)',
      padding: '2rem 1rem',
      textAlign: 'center',
      minHeight: 210,
      textDecoration: 'none',
      color: 'var(--gray-dark)',
      transition: 'transform 0.2s, box-shadow 0.2s',
      border: '1.5px solid var(--accent-blue-light)',
      marginBottom: 8,
      cursor: 'pointer',
    }}>
      <img src={icon} alt={title} style={{height: 48, marginBottom: 18, filter: 'drop-shadow(0 2px 8px #2196f322)'}} />
      <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: 10, color: 'var(--primary-blue)' }}>{title}</h2>
      <p style={{ fontSize: '1.05rem', color: '#444', lineHeight: 1.6 }}>{desc}</p>
    </a>
  );
}
