// Featured clients/brands section
export default function FeaturedClients() {
  return (
    <section style={{width: '100%', background: 'var(--white)', padding: '2rem 0', borderBottom: '1px solid #eee'}}>
      <div style={{fontWeight: 700, color: 'var(--primary-blue)', marginBottom: 16, fontSize: '1.1rem', textAlign: 'center'}}>Trusted by leading brands</div>
      <div style={{display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', alignItems: 'center'}}>
        <img src="/vercel.svg" alt="Amazon" style={{height: 40, opacity: 0.7}} />
        <img src="/globe.svg" alt="JD Sports" style={{height: 40, opacity: 0.7}} />
        <img src="/window.svg" alt="Toyota" style={{height: 40, opacity: 0.7}} />
        <img src="/file.svg" alt="Sky Sports" style={{height: 40, opacity: 0.7}} />
      </div>
    </section>
  );
}
