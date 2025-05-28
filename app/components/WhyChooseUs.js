// Why Choose Us / Company values section
export default function WhyChooseUs() {
  return (
    <section style={{width: '100%', background: 'var(--accent-blue-light)', padding: '3rem 0', borderTop: '1px solid #eee'}}>
      <h2 style={{textAlign: 'center', color: 'var(--primary-blue)', fontWeight: 800, fontSize: '2rem', marginBottom: 32}}>Why Choose Us?</h2>
      <div style={{display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center'}}>
        <ValueCard title="Price Promise" desc="We deliver premium security at the best value. We'll beat any genuine competitor quote." icon="/star.svg" />
        <ValueCard title="Fair Dealing" desc="Clear pricing, simple contracts, and no hidden charges. We value transparency." icon="/check.svg" />
        <ValueCard title="Targeted Security" desc="Services tailored to your needs, with ongoing assessment and planning." icon="/shield.svg" />
        <ValueCard title="Expertise" desc="Decades of experience across the UK and Europe. Accredited and trusted." icon="/building.svg" />
        <ValueCard title="Dedication" desc="24/7 support and a team that cares about your safety and satisfaction." icon="/star.svg" />
      </div>
    </section>
  );
}

function ValueCard({ title, desc, icon }) {
  return (
    <div style={{background: 'var(--white)', borderRadius: 12, boxShadow: '0 2px 12px #1a237e11', padding: '2rem', maxWidth: 300, minWidth: 200, fontSize: '1.05rem', color: 'var(--gray-dark)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12}}>
      {icon && <img src={icon} alt="" aria-hidden="true" style={{height: 36, marginBottom: 8}} />}
      <div style={{fontWeight: 700, color: 'var(--primary-blue)', marginBottom: 8}}>{title}</div>
      <div>{desc}</div>
    </div>
  );
}
