// Keyholding & Alarm Response service detail page
export default function KeyholdingAlarmResponsePage() {
  return (
    <main style={{padding: '2rem 0', maxWidth: 900, margin: '0 auto'}}>
      <h1 style={{fontSize: '2rem', fontWeight: 800, color: 'var(--primary-blue)', marginBottom: 24}}>Keyholding & Alarm Response</h1>
      <img src="/file.svg" alt="Keyholding & Alarm Response" style={{height: 80, marginBottom: 24, opacity: 0.7}} />
      <p style={{fontSize: '1.1rem', lineHeight: 1.7, marginBottom: 24}}>
        Secure keyholding and rapid alarm response for your premises. Our SIA-licensed team ensures your property is protected 24/7, responding to alarms and emergencies with professionalism and speed.
      </p>
      <ul style={{marginBottom: 24}}>
        <li>24/7 keyholding and alarm response</li>
        <li>Rapid incident attendance</li>
        <li>Secure storage and handling of keys</li>
        <li>Detailed incident reporting</li>
      </ul>
      <a href="/contact" style={{background: 'var(--primary-blue)', color: 'var(--white)', padding: '0.8rem 2rem', borderRadius: 6, fontWeight: 700, textDecoration: 'none'}}>Request a Quote</a>
    </main>
  );
}
