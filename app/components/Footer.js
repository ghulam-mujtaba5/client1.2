// Simple footer with quick links and copyright
export default function Footer() {
  return (
    <footer style={{
      width: '100%',
      background: '#111',
      color: '#fff',
      padding: '2.5rem 2rem 1.5rem 2rem',
      textAlign: 'center',
      fontFamily: 'var(--font-geist-sans)',
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
      boxShadow: '0 -2px 16px rgba(0,0,0,0.08)'
    }}>
      <div style={{ marginBottom: '1.2rem', display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
        <a href="/" style={linkStyle}>Home</a>
        <a href="#services" style={linkStyle}>Services</a>
        <a href="#about" style={linkStyle}>About</a>
        <a href="#contact" style={linkStyle}>Contact</a>
        <a href="tel:+447448023005" style={linkStyle}>Call</a>
        <a href="mailto:info@aimsecuregroup.uk" style={linkStyle}>Email</a>
      </div>
      <div style={{ marginBottom: '1.2rem', display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
        <a href="#" style={iconStyle} aria-label="Facebook"><svg width="24" height="24" fill="#fff" style={{ verticalAlign: 'middle' }}><circle cx="12" cy="12" r="12" fill="#e63946" /><text x="12" y="17" textAnchor="middle" fontSize="14" fill="#fff" fontFamily="Arial">f</text></svg></a>
        <a href="#" style={iconStyle} aria-label="Twitter"><svg width="24" height="24" fill="#fff" style={{ verticalAlign: 'middle' }}><circle cx="12" cy="12" r="12" fill="#e63946" /><text x="12" y="17" textAnchor="middle" fontSize="14" fill="#fff" fontFamily="Arial">t</text></svg></a>
        <a href="#" style={iconStyle} aria-label="LinkedIn"><svg width="24" height="24" fill="#fff" style={{ verticalAlign: 'middle' }}><circle cx="12" cy="12" r="12" fill="#e63946" /><text x="12" y="17" textAnchor="middle" fontSize="14" fill="#fff" fontFamily="Arial">in</text></svg></a>
      </div>
      <div style={{ fontSize: '0.98rem', color: '#bbb' }}>
        &copy; {new Date().getFullYear()} Aim Secure Group. All rights reserved.
      </div>
    </footer>
  );
}

const linkStyle = {
  color: '#e63946',
  textDecoration: 'none',
  margin: '0 0.5rem',
  fontWeight: 600,
  fontSize: '1.08rem',
  transition: 'color 0.2s',
};

const iconStyle = {
  display: 'inline-block',
  margin: '0 0.2rem',
  opacity: 0.85,
  transition: 'opacity 0.2s',
};
