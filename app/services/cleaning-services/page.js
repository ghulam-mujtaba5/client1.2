'use client';

import { useRef, useEffect } from 'react';

// Cleaning Services service detail page
export default function CleaningServicesPage() {
  const imgRef = useRef(null);
  const ctaRef = useRef(null);
  const mapCenter = { latitude: 51.5275, longitude: -0.0915 }; // Coordinates for 128 City Road, London

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
    <main className="fade-in animate-on-scroll" style={{padding: '3.5rem 0', maxWidth: 900, margin: '0 auto', background: '#fff', borderRadius: 18, boxShadow: '0 4px 32px #1a237e13'}} aria-label="Cleaning Services main content" tabIndex={0}>
      <h1 className="slide-up animate-on-scroll" style={{fontSize: '2.5rem', fontWeight: 900, color: 'var(--primary-blue)', marginBottom: 18, letterSpacing: '-1.5px', textAlign: 'center', lineHeight: 1.1, transition: 'color 0.2s'}} tabIndex={0}
        onMouseOver={e => e.currentTarget.style.color = '#1976d2'}
        onMouseOut={e => e.currentTarget.style.color = 'var(--primary-blue)'}
        onFocus={e => e.currentTarget.style.color = '#1976d2'}
        onBlur={e => e.currentTarget.style.color = 'var(--primary-blue)'}
      >Cleaning Services</h1>
      <span className="visually-hidden" id="cleaning-desc">Professional cleaning for residential and commercial spaces. Spot treatments, deep cleans, and ongoing maintenance for homes, offices, and retail premises.</span>
      <section className="fade-in-delay animate-on-scroll" aria-describedby="cleaning-desc" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 32}}>
        <img ref={imgRef} src="/star.svg" alt="Cleaning Services" style={{height: 90, marginBottom: 18, opacity: 0.8, transition: 'transform 0.4s'}}
          tabIndex={0}
          onMouseOver={e => e.currentTarget.style.transform = 'scale(1.12)'}
          onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
          onFocus={e => e.currentTarget.style.transform = 'scale(1.12)'}
          onBlur={e => e.currentTarget.style.transform = 'scale(1)'}
        />
        <p style={{fontSize: '1.25rem', lineHeight: 1.7, marginBottom: 18, color: '#333', textAlign: 'center', maxWidth: 700, transition: 'color 0.2s'}}
          tabIndex={0}
          onMouseOver={e => e.currentTarget.style.color = '#1976d2'}
          onMouseOut={e => e.currentTarget.style.color = '#333'}
          onFocus={e => e.currentTarget.style.color = '#1976d2'}
          onBlur={e => e.currentTarget.style.color = '#333'}
        >
          Professional cleaning for residential and commercial spaces. Our trained team delivers spot treatments, deep cleans, and ongoing maintenance for homes, offices, and retail premises. Quality, value, and security in one service.
        </p>
      </section>
      <section aria-label="Cleaning features" style={{marginBottom: 32}}>
        <h2 className="slide-up animate-on-scroll" style={{fontSize: '1.35rem', color: 'var(--primary-blue)', fontWeight: 700, marginBottom: 12, textAlign: 'center', letterSpacing: '-0.5px', transition: 'color 0.2s'}}
          tabIndex={0}
          onMouseOver={e => e.currentTarget.style.color = '#1976d2'}
          onMouseOut={e => e.currentTarget.style.color = 'var(--primary-blue)'}
          onFocus={e => e.currentTarget.style.color = '#1976d2'}
          onBlur={e => e.currentTarget.style.color = 'var(--primary-blue)'}
        >What We Offer</h2>
        <ul className="slide-up animate-on-scroll" style={{fontSize: '1.12rem', color: '#222', paddingLeft: 24, lineHeight: 1.8, fontWeight: 500, margin: 0, listStyle: 'disc inside', textAlign: 'left', maxWidth: 700, marginLeft: 'auto', marginRight: 'auto'}}>
          <li tabIndex={0} style={{transition: 'color 0.2s'}} onMouseOver={e => e.currentTarget.style.color = '#1976d2'} onMouseOut={e => e.currentTarget.style.color = '#222'} onFocus={e => e.currentTarget.style.color = '#1976d2'} onBlur={e => e.currentTarget.style.color = '#222'}>Residential and commercial cleaning</li>
          <li tabIndex={0} style={{transition: 'color 0.2s'}} onMouseOver={e => e.currentTarget.style.color = '#1976d2'} onMouseOut={e => e.currentTarget.style.color = '#222'} onFocus={e => e.currentTarget.style.color = '#1976d2'} onBlur={e => e.currentTarget.style.color = '#222'}>Spot treatments and deep cleans</li>
          <li tabIndex={0} style={{transition: 'color 0.2s'}} onMouseOver={e => e.currentTarget.style.color = '#1976d2'} onMouseOut={e => e.currentTarget.style.color = '#222'} onFocus={e => e.currentTarget.style.color = '#1976d2'} onBlur={e => e.currentTarget.style.color = '#222'}>Flexible scheduling and competitive pricing</li>
          <li tabIndex={0} style={{transition: 'color 0.2s'}} onMouseOver={e => e.currentTarget.style.color = '#1976d2'} onMouseOut={e => e.currentTarget.style.color = '#222'} onFocus={e => e.currentTarget.style.color = '#1976d2'} onBlur={e => e.currentTarget.style.color = '#222'}>Fully vetted, professional staff</li>
        </ul>
      </section>
      <div style={{display: 'flex', justifyContent: 'center', marginBottom: 32}}>
        <a ref={ctaRef} className="scale-in interactive-cta" href="/contact" style={{position: 'relative', overflow: 'hidden', background: 'linear-gradient(90deg, var(--primary-blue) 60%, var(--accent-blue) 100%)', color: 'var(--white)', padding: '1rem 2.5rem', borderRadius: 8, fontWeight: 800, textDecoration: 'none', fontSize: '1.18rem', boxShadow: '0 2px 12px #2196f322', letterSpacing: '0.5px', transition: 'background 0.2s, box-shadow 0.2s'}}
          aria-label="Request a cleaning services quote"
          tabIndex={0}
          onMouseOver={e => {e.currentTarget.style.background = 'linear-gradient(90deg, #1976d2 60%, #64b5f6 100%)'; e.currentTarget.style.boxShadow = '0 6px 24px #1976d244';}}
          onMouseOut={e => {e.currentTarget.style.background = 'linear-gradient(90deg, var(--primary-blue) 60%, var(--accent-blue) 100%)'; e.currentTarget.style.boxShadow = '0 2px 12px #2196f322';}}
          onFocus={e => {e.currentTarget.style.background = 'linear-gradient(90deg, #1976d2 60%, #64b5f6 100%)'; e.currentTarget.style.boxShadow = '0 6px 24px #1976d244';}}
          onBlur={e => {e.currentTarget.style.background = 'linear-gradient(90deg, var(--primary-blue) 60%, var(--accent-blue) 100%)'; e.currentTarget.style.boxShadow = '0 2px 12px #2196f322';}}
        >Request a Quote</a>
      </div>
      {/* Contact & Map Section */}
      <section className="fade-in animate-on-scroll" aria-label="Our Address and Map" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 32}}>
        <h3 className="slide-up animate-on-scroll" style={{fontSize: '1.15rem', color: 'var(--primary-blue)', fontWeight: 700, marginBottom: 10, textAlign: 'center', letterSpacing: '-0.5px'}}>Our Address & Contact</h3>
        <address style={{fontStyle: 'normal', color: '#333', fontSize: '1.08rem', marginBottom: 16, textAlign: 'center', lineHeight: 1.7}}>
          <div style={{fontWeight: 700, color: '#1976d2', fontSize: '1.12rem'}}>AIM SECURE GROUP.UK LTD</div>
          128, City Road,<br />
          London, EC1V 2NX, UNITED KINGDOM<br />
          <span style={{fontWeight: 500, color: '#1976d2'}}>Registered in UNITED KINGDOM, Number 16083036</span><br />
          <span style={{display: 'block', marginTop: 10}}>
            <span style={{fontWeight: 700}}>Phone:</span> <a href="tel:+447448023005" style={{color: '#1976d2', textDecoration: 'underline', transition: 'color 0.2s'}} tabIndex={0} onMouseOver={e => e.currentTarget.style.color = '#0d47a1'} onMouseOut={e => e.currentTarget.style.color = '#1976d2'} onFocus={e => e.currentTarget.style.color = '#0d47a1'} onBlur={e => e.currentTarget.style.color = '#1976d2'}}>+44 7448 023005</a>
          </span>
          <span>
            <span style={{fontWeight: 700}}>Email:</span> <a href="mailto:info@aimsecuregroup.uk" style={{color: '#1976d2', textDecoration: 'underline', transition: 'color 0.2s'}} tabIndex={0} onMouseOver={e => e.currentTarget.style.color = '#0d47a1'} onMouseOut={e => e.currentTarget.style.color = '#1976d2'} onFocus={e => e.currentTarget.style.color = '#0d47a1'} onBlur={e => e.currentTarget.style.color = '#1976d2'}}>info@aimsecuregroup.uk</a>
          </span>
        </address>
        <div style={{width: '100%', maxWidth: 500, height: 260, borderRadius: 14, overflow: 'hidden', boxShadow: '0 2px 16px #1a237e11', background: 'linear-gradient(135deg, #e3f2fd 60%, #bbdefb 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 8, position: 'relative'}}>
          <iframe 
            src="https://maps.google.com/maps?width=100%25&height=260&hl=en&q=128%20City%20Road,%20London,%20EC1V%202NX,%20UK+(AIM%20SECURE%20GROUP)&t=&z=16&ie=UTF8&iwloc=B&output=embed"
            width="100%"
            height="100%"
            style={{border: 0, borderRadius: 14}}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="AIM SECURE GROUP.UK LTD Location"
            aria-label="Map showing our location at 128 City Road, London"
          ></iframe>
        </div>
      </section>
    </main>
  );
}
