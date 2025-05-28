// Featured clients/brands section
export default function FeaturedClients() {
  return (
    <section style={{width: '100%', background: 'var(--white)', padding: '2.5rem 0', borderBottom: '1px solid #eee', borderRadius: 16, boxShadow: '0 4px 24px rgba(26,35,126,0.07)', margin: '2rem 0'}}>
      <div style={{fontWeight: 900, color: 'var(--primary-blue)', marginBottom: 20, fontSize: '1.3rem', textAlign: 'center', letterSpacing: '-1px'}}>Trusted by Leading Brands</div>
      <div style={{display: 'flex', flexWrap: 'wrap', gap: '2.5rem', justifyContent: 'center', alignItems: 'center'}}>
        <img src="/vercel.svg" alt="Amazon" style={{height: 48, opacity: 0.7}} />
        <img src="/globe.svg" alt="JD Sports" style={{height: 48, opacity: 0.7}} />
        <img src="/window.svg" alt="Toyota" style={{height: 48, opacity: 0.7}} />
        <img src="/file.svg" alt="Sky Sports" style={{height: 48, opacity: 0.7}} />
      </div>
    </section>
  );
}
