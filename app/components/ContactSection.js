// Contact section with form and details
export default function ContactSection() {
  return (
    <section id="contact" className="contact-section" style={{
      width: '100%',
      background: 'var(--accent-blue-light)',
      color: 'var(--gray-dark)',
      padding: '4rem 2rem',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'center',
      gap: '3rem',
      fontFamily: 'var(--font-geist-sans)',
      maxWidth: 1200,
      margin: '0 auto',
      borderRadius: 16,
      boxShadow: '0 4px 24px rgba(26,35,126,0.07)',
      animation: 'fadeInUp 1.2s'
    }}>
      <div style={{ flex: 1, minWidth: 320 }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem', color: 'var(--primary-blue)' }}>Get in Touch</h2>
        <form style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          width: '100%',
          maxWidth: 400,
          background: 'var(--white)',
          padding: '2rem',
          borderRadius: 12,
          boxShadow: '0 2px 8px rgba(26,35,126,0.07)',
          animation: 'fadeInUp 1.5s'
        }} aria-label="Contact form">
          <label htmlFor="name" style={labelStyle}>Your Name</label>
          <input id="name" name="name" type="text" placeholder="Enter your name" required style={inputStyle} aria-required="true" />
          <label htmlFor="email" style={labelStyle}>Your Email</label>
          <input id="email" name="email" type="email" placeholder="Enter your email" required style={inputStyle} aria-required="true" />
          <label htmlFor="phone" style={labelStyle}>Phone</label>
          <input id="phone" name="phone" type="tel" placeholder="Enter your phone number" style={inputStyle} />
          <label htmlFor="message" style={labelStyle}>How can we help?</label>
          <textarea id="message" name="message" placeholder="Type your message" rows={4} required style={inputStyle} aria-required="true" />
          <button type="submit" style={{
            background: 'linear-gradient(90deg, var(--primary-blue) 60%, var(--accent-blue) 100%)',
            color: 'var(--white)',
            border: 'none',
            borderRadius: 6,
            padding: '0.85rem',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            cursor: 'pointer',
            marginTop: '0.5rem',
            boxShadow: '0 2px 8px #1a237e22',
            transition: 'all 0.2s'
          }} aria-label="Send message">Send</button>
        </form>
        <div style={{ marginTop: '2rem', color: 'var(--gray-dark)', textAlign: 'left', fontSize: '1.08rem' }}>
          <div style={{ marginBottom: 6 }}><img src="/phone.svg" alt="Phone" style={{height:20,verticalAlign:'middle',marginRight:6}} />Call us: <a href="tel:+447448023005" style={{ color: 'var(--primary-blue)', textDecoration: 'none', fontWeight: 600 }}>+44 7448 023005</a></div>
          <div style={{ marginBottom: 6 }}><img src="/mail.svg" alt="Email" style={{height:20,verticalAlign:'middle',marginRight:6}} />Email: <a href="mailto:info@aimsecuregroup.uk" style={{ color: 'var(--primary-blue)', textDecoration: 'none', fontWeight: 600 }}>info@aimsecuregroup.uk</a></div>
          <div style={{ marginTop: 8 }}><img src="/building.svg" alt="Address" style={{height:20,verticalAlign:'middle',marginRight:6}} />AIM SECURE GROUP.UK LTD<br />128, City Road, London, EC1V 2NX, UNITED KINGDOM<br />Registered in UNITED KINGDOM, Number 16083036</div>
        </div>
      </div>
      <div style={{ flex: 1, minWidth: 320, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1.5rem' }}>
        <div style={{ width: '100%', height: 220, background: 'var(--primary-blue)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--white)', fontSize: 18, fontWeight: 600, boxShadow: '0 2px 8px #1a237e22', opacity: 0.85 }}>
          [Map Placeholder]
        </div>
        <div style={{ color: '#888', fontSize: '0.98rem', textAlign: 'center' }}>
          Our team responds within 24 hours. For urgent matters, please call directly.
        </div>
      </div>
      <style>{`
        @media (max-width: 700px) {
          .contact-section {
            flex-direction: column !important;
            gap: 1.2rem !important;
            padding: 2rem 0.5rem !important;
          }
          .contact-section > div {
            min-width: 0 !important;
            width: 100% !important;
            text-align: center !important;
          }
        }
      `}</style>
    </section>
  );
}

const inputStyle = {
  padding: '0.75rem',
  borderRadius: 4,
  border: '1px solid var(--accent-blue)',
  fontSize: '1rem',
  width: '100%',
  background: 'var(--accent-blue-light)',
  color: 'var(--gray-dark)',
  marginBottom: 2,
};

const labelStyle = {
  fontWeight: 600,
  color: 'var(--primary-blue)',
  marginBottom: 2,
  fontSize: '1rem',
};
