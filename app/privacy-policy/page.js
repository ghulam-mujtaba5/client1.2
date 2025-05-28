// Privacy Policy page
export default function PrivacyPolicyPage() {
  return (
    <main style={{padding: '2rem 0', maxWidth: 900, margin: '0 auto'}}>
      <h1 style={{fontSize: '2rem', fontWeight: 800, color: 'var(--primary-blue)', marginBottom: 24}}>Privacy Policy</h1>
      <p style={{fontSize: '1.1rem', lineHeight: 1.7, marginBottom: 24}}>
        We are committed to protecting your privacy. This policy explains how we collect, use, and safeguard your information in accordance with UK law and GDPR.
      </p>
      <ul style={{marginBottom: 24}}>
        <li>We only collect data necessary for our services.</li>
        <li>Your data is never sold or shared with third parties without consent.</li>
        <li>We use secure systems and encryption to protect your information.</li>
        <li>You can request, update, or delete your data at any time.</li>
      </ul>
      <p>For more details, contact us at <a href="mailto:info@aimsecuregroup.uk" style={{color: 'var(--primary-blue)'}}>info@aimsecuregroup.uk</a>.</p>
    </main>
  );
}
