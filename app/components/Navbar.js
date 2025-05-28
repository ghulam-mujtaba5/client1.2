// Simple navigation bar for the security website
export default function Navbar() {
  return (
    <nav style={{
      width: '100%',
      background: 'rgba(17,17,17,0.98)',
      color: '#fff',
      padding: '1.2rem 3vw',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontFamily: 'var(--font-geist-sans)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
      borderBottomLeftRadius: 12,
      borderBottomRightRadius: 12,
      transition: 'background 0.3s'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <img src="/file.svg" alt="Aim Secure Group Logo" style={{ width: 38, height: 38, marginRight: 10, filter: 'drop-shadow(0 2px 8px #e6394622)' }} />
        <span style={{ fontWeight: 900, fontSize: '1.7rem', letterSpacing: '-1px', color: '#e63946' }}>Aim Secure Group</span>
      </div>
      <ul style={{
        display: 'flex',
        gap: '2.2rem',
        listStyle: 'none',
        margin: 0,
        padding: 0
      }}>
        <li><a href="/" style={navLinkStyle}>Home</a></li>
        <li><a href="#services" style={navLinkStyle}>Services</a></li>
        <li><a href="#about" style={navLinkStyle}>About</a></li>
        <li><a href="#contact" style={navLinkStyle}>Contact</a></li>
      </ul>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', marginLeft: '2rem', gap: 2 }}>
        <a href="tel:+447448023005" style={{ color: '#e63946', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.08rem', letterSpacing: '0.5px', transition: 'color 0.2s' }}>+44 7448 023005</a>
        <a href="mailto:info@aimsecuregroup.uk" style={{ color: '#e63946', textDecoration: 'none', fontSize: '0.98rem', transition: 'color 0.2s' }}>info@aimsecuregroup.uk</a>
      </div>
    </nav>
  );
}

const navLinkStyle = {
  color: '#fff',
  textDecoration: 'none',
  fontWeight: 600,
  fontSize: '1.08rem',
  letterSpacing: '0.5px',
  padding: '0.2rem 0.5rem',
  borderRadius: 4,
  transition: 'background 0.2s, color 0.2s',
  position: 'relative',
  cursor: 'pointer',
};
