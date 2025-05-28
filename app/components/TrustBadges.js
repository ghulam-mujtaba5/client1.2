// Trust badges and client logos section
export default function TrustBadges() {
  return (
    <section style={{width: '100%', background: 'var(--white)', padding: '2rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center', borderTop: '1px solid #eee', borderBottom: '1px solid #eee'}}>
      <div style={{fontWeight: 700, color: 'var(--primary-blue)', marginBottom: 16, fontSize: '1.1rem'}}>Trusted by leading brands & fully accredited</div>
      <div style={{display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', alignItems: 'center'}}>
        <img src="/shield.svg" alt="SIA Approved" style={{height: 40, opacity: 0.7}} />
        <img src="/check.svg" alt="ISO 9001" style={{height: 40, opacity: 0.7}} />
        <img src="/star.svg" alt="SafeContractor" style={{height: 40, opacity: 0.7}} />
        <img src="/building.svg" alt="ICO Registered" style={{height: 40, opacity: 0.7}} />
        <img src="/next.svg" alt="Client Logo" style={{height: 40, opacity: 0.7}} />
      </div>
    </section>
  );
}
