// Simple footer with quick links and copyright
export default function Footer() {
  return (
    <footer style={{background: 'var(--primary-blue)', color: 'var(--white)', padding: '2rem 0 1.2rem 0', textAlign: 'center', marginTop: '3rem'}} aria-label="Site footer">
      <div style={{maxWidth: 1100, margin: '0 auto', fontSize: '1rem'}}>
        <div style={{marginBottom: 12}}>
          <img src="/logo.svg" alt="Aim Secure Group logo" style={{height: 36, marginBottom: 8}} />
        </div>
        <div style={{marginBottom: 8}}>
          &copy; {new Date().getFullYear()} Aim Secure Group Ltd. All rights reserved.<br />
          Company No. 12345678 | SIA Approved Contractor | info@aimsecuregroup.uk | 0800 123 4567
        </div>
        <nav aria-label="Legal links" style={{marginBottom: 8}}>
          <a href="/privacy-policy" style={{color: 'var(--white)', margin: '0 1rem', textDecoration: 'underline'}} rel="noopener">Privacy Policy</a>
          <a href="/terms" style={{color: 'var(--white)', margin: '0 1rem', textDecoration: 'underline'}} rel="noopener">Terms &amp; Conditions</a>
        </nav>
        <div style={{fontSize: '0.95rem', opacity: 0.8}}>
          Website by Aim Secure Group. All trademarks and logos are property of their respective owners.
        </div>
      </div>
    </footer>
  );
}
