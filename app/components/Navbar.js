"use client";
import { useState } from "react";

// Simple navigation bar for the security website
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav style={{
      width: '100%',
      background: 'rgba(17,23,46,0.98)', // deep blue-black
      color: 'var(--white)',
      padding: '1.2rem 3vw',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontFamily: 'var(--font-geist-sans)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      boxShadow: '0 2px 16px rgba(26,35,126,0.08)',
      borderBottomLeftRadius: 12,
      borderBottomRightRadius: 12,
      transition: 'background 0.3s',
      flexWrap: 'wrap',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <img src="/file.svg" alt="Aim Secure Group Logo" style={{ width: 38, height: 38, marginRight: 10, filter: 'drop-shadow(0 2px 8px #2196f322)' }} />
        <span style={{ fontWeight: 900, fontSize: '1.7rem', letterSpacing: '-1px', color: 'var(--primary-blue)' }}>Aim Secure Group</span>
      </div>
      <button
        aria-label="Open navigation menu"
        onClick={() => setOpen((v) => !v)}
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          color: 'var(--white)',
          fontSize: 28,
          marginLeft: 16,
          cursor: 'pointer',
        }}
        className="nav-mobile-btn"
      >
        &#9776;
      </button>
      <ul
        style={{
          display: 'flex',
          gap: '2.2rem',
          listStyle: 'none',
          margin: 0,
          padding: 0,
          flexDirection: 'row',
        }}
        className={open ? 'nav-open' : ''}
      >
        <li><a href="/" style={navLinkStyle}>Home</a></li>
        <li><a href="#services" style={navLinkStyle}>Services</a></li>
        <li><a href="#about" style={navLinkStyle}>About</a></li>
        <li><a href="#contact" style={navLinkStyle}>Contact</a></li>
      </ul>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', marginLeft: '2rem', gap: 2, fontSize: '1rem' }}>
        <a href="tel:+447448023005" style={{ color: 'var(--primary-blue)', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.08rem', letterSpacing: '0.5px', transition: 'color 0.2s' }}>+44 7448 023005</a>
        <a href="mailto:info@aimsecuregroup.uk" style={{ color: 'var(--primary-blue)', textDecoration: 'none', fontSize: '0.98rem', transition: 'color 0.2s' }}>info@aimsecuregroup.uk</a>
      </div>
      <style>{`
        @media (max-width: 900px) {
          nav {
            flex-direction: column !important;
            align-items: flex-start !important;
            padding: 1rem 2vw !important;
          }
          .nav-mobile-btn {
            display: block !important;
          }
          ul {
            display: none !important;
            flex-direction: column !important;
            width: 100%;
            gap: 1.2rem !important;
            margin-top: 1rem !important;
            background: rgba(17,23,46,0.98);
            border-radius: 8px;
            padding: 1rem 0.5rem !important;
          }
          .nav-open {
            display: flex !important;
          }
          div[style*='flex-direction: column'] {
            margin-left: 0 !important;
            margin-top: 1rem !important;
            align-items: flex-start !important;
          }
        }
        @media (max-width: 600px) {
          nav {
            padding: 0.7rem 1vw !important;
          }
          span {
            font-size: 1.1rem !important;
          }
          div[style*='flex-direction: column'] a {
            font-size: 0.95rem !important;
          }
        }
      `}</style>
    </nav>
  );
}

const navLinkStyle = {
  color: 'var(--white)',
  textDecoration: 'none',
  fontWeight: 600,
  fontSize: '1.08rem',
  letterSpacing: '0.5px',
  padding: '0.2rem 0.5rem',
  borderRadius: 4,
  transition: 'background 0.2s, color 0.2s',
  position: 'relative',
  cursor: 'pointer',
  background: 'none',
};
