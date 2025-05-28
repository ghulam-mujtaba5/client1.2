// Simple footer with quick links and copyright
export default function Footer() {
  return (
    <footer style={{background: 'var(--primary-blue)', color: 'var(--white)', padding: '2rem 0 1.2rem 0', textAlign: 'center', marginTop: '3rem'}} aria-label="Site footer">
      <div style={{maxWidth: 1100, margin: '0 auto', fontSize: '1rem'}}>
        <div style={{marginBottom: 12}}>
          <img src="/logo.svg" alt="Aim Secure Group logo" style={{height: 36, marginBottom: 8}} />
        </div>
        <div style={{marginBottom: 8}}>
          &copy; {new Date().getFullYear()} AIM SECURE GROUP.UK LTD. All rights reserved.<br />
          Registered in UNITED KINGDOM, Number 16083036 | SIA Approved Contractor<br />
          <span>Phone: <a href="tel:+447448023005" style={{ color: 'var(--white)', textDecoration: 'underline' }}>+44 7448 023005</a></span> | 
          <span>Email: <a href="mailto:info@aimsecuregroup.uk" style={{ color: 'var(--white)', textDecoration: 'underline' }}>info@aimsecuregroup.uk</a></span><br />
          <span>Address: 128, City Road, London, EC1V 2NX, UNITED KINGDOM</span>
        </div>
        <nav aria-label="Legal links" style={{marginBottom: 8}}>
          <a href="/privacy-policy" style={{color: 'var(--white)', margin: '0 1rem', textDecoration: 'underline'}} rel="noopener noreferrer">Privacy Policy</a>
          <a href="/terms" style={{color: 'var(--white)', margin: '0 1rem', textDecoration: 'underline'}} rel="noopener noreferrer">Terms &amp; Conditions</a>
        </nav>
        <div style={{fontSize: '0.95rem', opacity: 0.8}}>
          Website by Aim Secure Group. All trademarks and logos are property of their respective owners.
        </div>
      </div>
    </footer>
  );
}
