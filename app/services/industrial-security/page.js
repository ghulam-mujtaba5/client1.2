'use client';

import { useRef, useEffect } from 'react';

export default function IndustrialSecurityPage() {
  const imgRef = useRef(null);
  const ctaRef = useRef(null);

  // Parallax effect for image
  useEffect(() => {
    const handleScroll = () => {
      if (imgRef.current) {
        const rect = imgRef.current.getBoundingClientRect();
        imgRef.current.style.transform = `scale(1.08) translateY(${rect.top * 0.08}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Ripple effect for CTA
  useEffect(() => {
    const btn = ctaRef.current;
    if (!btn) return;
    const createRipple = (e) => {
      const circle = document.createElement('span');
      const diameter = Math.max(btn.clientWidth, btn.clientHeight);
      const radius = diameter / 2;
      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${e.clientX - btn.getBoundingClientRect().left - radius}px`;
      circle.style.top = `${e.clientY - btn.getBoundingClientRect().top - radius}px`;
      circle.classList.add('ripple');
      btn.appendChild(circle);
      setTimeout(() => circle.remove(), 600);
    };
    btn.addEventListener('click', createRipple);
    return () => btn.removeEventListener('click', createRipple);
  }, []);

  // Animate sections/cards on scroll
  useEffect(() => {
    const animatedEls = document.querySelectorAll('.animate-on-scroll');
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.2 });
    animatedEls.forEach(el => observer.observe(el));
    return () => animatedEls.forEach(el => observer.unobserve(el));
  }, []);

  return (
    <main className="fade-in animate-on-scroll" style={{padding: '3.5rem 0', maxWidth: 900, margin: '0 auto', background: '#fff', borderRadius: 18, boxShadow: '0 4px 32px #1a237e13'}} aria-label="Industrial Security main content" tabIndex={0}>
      <h1 className="slide-up animate-on-scroll" style={{fontSize: '2.5rem', fontWeight: 900, color: 'var(--primary-blue)', marginBottom: 18, letterSpacing: '-1.5px', textAlign: 'center', lineHeight: 1.1, transition: 'color 0.2s'}} tabIndex={0}
        onMouseOver={e => e.currentTarget.style.color = '#1976d2'}
        onMouseOut={e => e.currentTarget.style.color = 'var(--primary-blue)'}
        onFocus={e => e.currentTarget.style.color = '#1976d2'}
        onBlur={e => e.currentTarget.style.color = 'var(--primary-blue)'}
      >Industrial Security</h1>
      <span className="visually-hidden" id="industrial-desc">Industrial security guards and services for factories, warehouses, and production facilities. Static and patrolling guards, surveillance, and physical security upgrades.</span>
      <section className="fade-in-delay animate-on-scroll" aria-describedby="industrial-desc" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 32}}>
        <img ref={imgRef} src="/file.svg" alt="Industrial Security" className="fade-in animate-on-scroll" style={{height: 90, marginBottom: 18, opacity: 0.8, transition: 'transform 0.4s'}}
          tabIndex={0}
          onMouseOver={e => e.currentTarget.style.transform = 'scale(1.12)'}
          onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
          onFocus={e => e.currentTarget.style.transform = 'scale(1.12)'}
          onBlur={e => e.currentTarget.style.transform = 'scale(1)'}
        />
        <p className="fade-in animate-on-scroll" style={{fontSize: '1.25rem', lineHeight: 1.7, marginBottom: 18, color: '#333', textAlign: 'center', maxWidth: 700, transition: 'color 0.2s'}}
          tabIndex={0}
          onMouseOver={e => e.currentTarget.style.color = '#1976d2'}
          onMouseOut={e => e.currentTarget.style.color = '#333'}
          onFocus={e => e.currentTarget.style.color = '#1976d2'}
          onBlur={e => e.currentTarget.style.color = '#333'}
        >
          We provide industrial security guards and services designed around the needs of factories, warehouses, and production facilities. Our solutions include static and patrolling guards, surveillance, and physical security upgrades.
        </p>
      </section>
      <section aria-label="Industrial Security features" style={{marginBottom: 32}}>
        <h2 className="slide-up animate-on-scroll" style={{fontSize: '1.35rem', color: 'var(--primary-blue)', fontWeight: 700, marginBottom: 12, textAlign: 'center', letterSpacing: '-0.5px', transition: 'color 0.2s'}}
          tabIndex={0}
          onMouseOver={e => e.currentTarget.style.color = '#1976d2'}
          onMouseOut={e => e.currentTarget.style.color = 'var(--primary-blue)'}
          onFocus={e => e.currentTarget.style.color = '#1976d2'}
          onBlur={e => e.currentTarget.style.color = 'var(--primary-blue)'}
        >What We Offer</h2>
        <ul className="slide-up animate-on-scroll fade-in-delay" style={{fontSize: '1.12rem', color: '#222', paddingLeft: 24, lineHeight: 1.8, fontWeight: 500, margin: 0, listStyle: 'disc inside', textAlign: 'left', maxWidth: 700, marginLeft: 'auto', marginRight: 'auto'}}>
          <li tabIndex={0} style={{transition: 'color 0.2s'}} onMouseOver={e => e.currentTarget.style.color = '#1976d2'} onMouseOut={e => e.currentTarget.style.color = '#222'} onFocus={e => e.currentTarget.style.color = '#1976d2'} onBlur={e => e.currentTarget.style.color = '#222'}>Factory and warehouse guarding</li>
          <li tabIndex={0} style={{transition: 'color 0.2s'}} onMouseOver={e => e.currentTarget.style.color = '#1976d2'} onMouseOut={e => e.currentTarget.style.color = '#222'} onFocus={e => e.currentTarget.style.color = '#1976d2'} onBlur={e => e.currentTarget.style.color = '#222'}>Mobile patrols and alarm response</li>
          <li tabIndex={0} style={{transition: 'color 0.2s'}} onMouseOver={e => e.currentTarget.style.color = '#1976d2'} onMouseOut={e => e.currentTarget.style.color = '#222'} onFocus={e => e.currentTarget.style.color = '#1976d2'} onBlur={e => e.currentTarget.style.color = '#222'}>Access control and visitor management</li>
          <li tabIndex={0} style={{transition: 'color 0.2s'}} onMouseOver={e => e.currentTarget.style.color = '#1976d2'} onMouseOut={e => e.currentTarget.style.color = '#222'} onFocus={e => e.currentTarget.style.color = '#1976d2'} onBlur={e => e.currentTarget.style.color = '#222'}>Surveillance and monitoring</li>
          <li tabIndex={0} style={{transition: 'color 0.2s'}} onMouseOver={e => e.currentTarget.style.color = '#1976d2'} onMouseOut={e => e.currentTarget.style.color = '#222'} onFocus={e => e.currentTarget.style.color = '#1976d2'} onBlur={e => e.currentTarget.style.color = '#222'}>Physical security upgrades</li>
        </ul>
      </section>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <a ref={ctaRef} className="scale-in interactive-cta fade-in-delay" href="/contact" style={{position: 'relative', overflow: 'hidden', background: 'linear-gradient(90deg, var(--primary-blue) 60%, var(--accent-blue) 100%)', color: 'var(--white)', padding: '1rem 2.5rem', borderRadius: 8, fontWeight: 800, textDecoration: 'none', fontSize: '1.18rem', boxShadow: '0 2px 12px #2196f322', letterSpacing: '0.5px', transition: 'background 0.2s, box-shadow 0.2s'}}
          aria-label="Request an industrial security quote"
          tabIndex={0}
          onMouseOver={e => {e.currentTarget.style.background = 'linear-gradient(90deg, #1976d2 60%, #64b5f6 100%)'; e.currentTarget.style.boxShadow = '0 6px 24px #1976d244';}}
          onMouseOut={e => {e.currentTarget.style.background = 'linear-gradient(90deg, var(--primary-blue) 60%, var(--accent-blue) 100%)'; e.currentTarget.style.boxShadow = '0 2px 12px #2196f322';}}
          onFocus={e => {e.currentTarget.style.background = 'linear-gradient(90deg, #1976d2 60%, #64b5f6 100%)'; e.currentTarget.style.boxShadow = '0 6px 24px #1976d244';}}
          onBlur={e => {e.currentTarget.style.background = 'linear-gradient(90deg, var(--primary-blue) 60%, var(--accent-blue) 100%)'; e.currentTarget.style.boxShadow = '0 2px 12px #2196f322';}}
        >Request a Quote</a>
      </div>
      <style>{`
        .ripple {
          position: absolute;
          border-radius: 50%;
          background: rgba(255,255,255,0.4);
          transform: scale(0);
          animation: ripple 0.6s linear;
          pointer-events: none;
          z-index: 2;
        }
        @keyframes ripple {
          to {
            transform: scale(2.5);
            opacity: 0;
          }
        }
        .animate-on-scroll { opacity: 0; transition: opacity 0.7s, transform 0.7s; transform: translateY(40px); }
        .animate-on-scroll.in-view { opacity: 1 !important; transform: none !important; }
        .interactive-cta:active { filter: brightness(0.95); }
      `}</style>
    </main>
  );
}
