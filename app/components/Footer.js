// Simple footer with quick links and copyright
export default function Footer() {
  return (
    <footer style={{
      width: '100%',
      background: 'var(--black)',
      color: 'var(--white)',
      padding: '2.5rem 2rem 1.5rem 2rem',
      fontFamily: 'var(--font-geist-sans)',
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
      boxShadow: '0 -2px 16px rgba(26,35,126,0.08)'
    }}>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: '2rem',
        maxWidth: 1200,
        margin: '0 auto 1.5rem auto'
      }}>
        <div style={{ minWidth: 220 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
            <img src="/file.svg" alt="Aim Secure Group Logo" style={{ width: 32, height: 32, filter: 'drop-shadow(0 2px 8px #2196f322)' }} />
            <span style={{ fontWeight: 800, fontSize: '1.2rem', color: 'var(--primary-blue)' }}>Aim Secure Group</span>
          </div>
          <div style={{ color: '#bbb', fontSize: '0.98rem', marginBottom: 8 }}>
            Security & Cleaning Services UK-wide
          </div>
          <div style={{ display: 'flex', gap: 10, marginTop: 8 }}>
            <a href="https://facebook.com" target="_blank" rel="noopener" style={iconLink}><img src="/globe.svg" alt="Facebook" width={22} height={22} /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener" style={iconLink}><img src="/window.svg" alt="Twitter" width={22} height={22} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener" style={iconLink}><img src="/vercel.svg" alt="LinkedIn" width={22} height={22} /></a>
          </div>
        </div>
        <div style={{ minWidth: 180 }}>
          <div style={{ fontWeight: 700, marginBottom: 8 }}>Quick Links</div>
          <a href="/" style={footerLink}>Home</a><br />
          <a href="/services" style={footerLink}>Services</a><br />
          <a href="/sectors" style={footerLink}>Sectors</a><br />
          <a href="/case-studies" style={footerLink}>Case Studies</a><br />
          <a href="/careers" style={footerLink}>Careers</a><br />
          <a href="#about" style={footerLink}>About</a><br />
          <a href="#contact" style={footerLink}>Contact</a><br />
          <a href="/privacy-policy" style={footerLink}>Privacy Policy</a><br />
          <a href="/terms" style={footerLink}>Terms & Conditions</a>
        </div>
        <div style={{ minWidth: 220 }}>
          <div style={{ fontWeight: 700, marginBottom: 8 }}>Contact</div>
          <div style={{ color: 'var(--white)', fontWeight: 600 }}>+44 7448 023005</div>
          <div style={{ color: 'var(--white)', fontWeight: 600 }}>info@aimsecuregroup.uk</div>
          <div style={{ color: '#bbb', fontSize: '0.98rem', marginTop: 6 }}>AIM SECURE GROUP.UK LTD<br />128, City Road, London, EC1V 2NX, UNITED KINGDOM<br />Registered in UNITED KINGDOM, Number 16083036</div>
        </div>
        <div style={{ minWidth: 220 }}>
          <div style={{ fontWeight: 700, marginBottom: 8 }}>Accreditations</div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <span style={badgeStyle}><img src="/shield.svg" alt="SIA" style={{height:18,verticalAlign:'middle',marginRight:4}} />SIA Approved</span>
            <span style={badgeStyle}><img src="/check.svg" alt="ISO" style={{height:18,verticalAlign:'middle',marginRight:4}} />ISO 9001</span>
            <span style={badgeStyle}><img src="/star.svg" alt="SafeContractor" style={{height:18,verticalAlign:'middle',marginRight:4}} />SafeContractor</span>
            <span style={badgeStyle}><img src="/building.svg" alt="ICO" style={{height:18,verticalAlign:'middle',marginRight:4}} />ICO Registered</span>
          </div>
        </div>
      </div>
      <div style={{ textAlign: 'center', color: '#bbb', fontSize: '0.95rem', marginTop: 16 }}>
        &copy; {new Date().getFullYear()} Aim Secure Group Ltd. Registered in England & Wales. Company Reg # 11555978. All rights reserved.
      </div>
    </footer>
  );
}

const footerLink = {
  color: 'var(--primary-blue)',
  textDecoration: 'none',
  fontWeight: 600,
  fontSize: '1rem',
  marginBottom: 4,
  display: 'inline-block',
  transition: 'color 0.2s',
};

const iconLink = {
  display: 'inline-block',
  borderRadius: 6,
  background: 'var(--primary-blue)',
  padding: 4,
  transition: 'background 0.2s',
};

const badgeStyle = {
  background: 'var(--primary-blue)',
  color: 'var(--white)',
  borderRadius: 8,
  padding: '0.3rem 0.8rem',
  fontWeight: 700,
  fontSize: '0.95rem',
  letterSpacing: '0.5px',
  marginBottom: 4,
  boxShadow: '0 2px 8px #1a237e22',
};
