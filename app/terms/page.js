// Terms & Conditions page
export default function TermsPage() {
  return (
    <main style={{padding: '2rem 0', maxWidth: 900, margin: '0 auto'}}>
      <h1 style={{fontSize: '2rem', fontWeight: 800, color: 'var(--primary-blue)', marginBottom: 24}}>Terms & Conditions</h1>
      <p style={{fontSize: '1.1rem', lineHeight: 1.7, marginBottom: 24}}>
        By using our website and services, you agree to our terms and conditions. Please read them carefully.
      </p>
      <ul style={{marginBottom: 24}}>
        <li>All content is for informational purposes only.</li>
        <li>We reserve the right to update terms at any time.</li>
        <li>All services are subject to contract and availability.</li>
        <li>For questions, contact us at <a href="mailto:info@aimsecuregroup.uk" style={{color: 'var(--primary-blue)'}}>info@aimsecuregroup.uk</a>.</li>
      </ul>
    </main>
  );
}
