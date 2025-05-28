// Louis Vuitton Retail Security Case Study
export default function LouisVuittonRetailCaseStudy() {
  return (
    <main style={{padding: '2rem 0', maxWidth: 900, margin: '0 auto'}}>
      <h1 style={{fontSize: '2rem', fontWeight: 800, color: 'var(--primary-blue)', marginBottom: 24}}>Luxury Retail Security Across Europe</h1>
      <img src="/bag.svg" alt="Louis Vuitton logo" style={{height: 60, marginBottom: 24, opacity: 0.85}} />
      <p style={{fontSize: '1.1rem', lineHeight: 1.7, marginBottom: 24}}>
        Comprehensive security for flagship stores, including manned guarding, loss prevention, and VIP protection in major European cities. Our team delivers tailored solutions for luxury retail environments, ensuring the safety of staff, customers, and high-value merchandise.
      </p>
      <ul style={{marginBottom: 24}}>
        <li>Manned guarding for flagship stores</li>
        <li>Loss prevention and asset protection</li>
        <li>VIP and celebrity protection</li>
        <li>Discreet, professional service</li>
        <li>Coverage in major European cities</li>
      </ul>
      <a href="/case-studies" style={{background: 'var(--primary-blue)', color: 'var(--white)', padding: '0.8rem 2rem', borderRadius: 6, fontWeight: 700, textDecoration: 'none'}}>Back to Case Studies</a>
    </main>
  );
}
