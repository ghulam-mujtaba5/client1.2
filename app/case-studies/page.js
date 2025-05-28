// Case Studies page
export default function CaseStudiesPage() {
  return (
    <main style={{padding: '2rem 0', maxWidth: 1100, margin: '0 auto'}}>
      <h1 style={{fontSize: '2rem', fontWeight: 800, color: 'var(--primary-blue)', marginBottom: 24}}>Client Case Studies</h1>
      <ul style={{listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '2rem'}}>
        <li>
          <h2 style={{fontSize: '1.2rem', fontWeight: 700}}>Retail Security: Louis Vuitton Across Europe</h2>
          <p>How we provided retail security for a luxury brand across multiple countries.</p>
        </li>
        <li>
          <h2 style={{fontSize: '1.2rem', fontWeight: 700}}>Event Security in Wales: Celebrity Birthday Party</h2>
          <p>Ensuring safety and privacy for a high-profile event.</p>
        </li>
        <li>
          <h2 style={{fontSize: '1.2rem', fontWeight: 700}}>Warehouse Security: Amazon</h2>
          <p>Protecting logistics and supply chain for a global e-commerce leader.</p>
        </li>
      </ul>
    </main>
  );
}
