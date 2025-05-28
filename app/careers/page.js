import Navbar from '../components/Navbar';
import WhyChooseUs from '../components/WhyChooseUs';

const jobs = [
  {
    title: 'Security Guard',
    location: 'London & South East',
    type: 'Full-time',
    summary: 'Frontline SIA-licensed security guard roles for retail, corporate, and events. Immediate start available.',
  },
  {
    title: 'Mobile Patrol Officer',
    location: 'Midlands',
    type: 'Full-time',
    summary: 'Mobile patrols, alarm response, and site checks. Company vehicle provided. SIA licence required.',
  },
  {
    title: 'Event Security Steward',
    location: 'UK-wide',
    type: 'Part-time / Casual',
    summary: 'Join our event team for concerts, festivals, and sporting events. Flexible shifts, training provided.',
  },
  {
    title: 'Corporate Reception Security',
    location: 'London',
    type: 'Full-time',
    summary: 'Front-of-house security and concierge for blue-chip clients. Excellent communication skills essential.',
  },
];

// Careers/Jobs page
export default function CareersPage() {
  return (
    <main style={{ width: '100%', minHeight: '100vh', background: '#f4f4f4' }}>
      <Navbar />
      <section style={{
        width: '100%',
        minHeight: '220px',
        background: 'linear-gradient(rgba(17,23,46,0.7),rgba(26,35,126,0.5)), url(/hero-bg.jpg) center/cover no-repeat',
        color: 'var(--white)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '3rem 2rem 2rem 2rem',
        position: 'relative',
        marginBottom: 0
      }}>
        <h1 style={{fontSize: '2.3rem', fontWeight: 800, marginBottom: '1.2rem', letterSpacing: '-1px', zIndex: 3, maxWidth: 700}}>
          Careers at Aim Secure Group
        </h1>
        <p style={{ fontSize: '1.15rem', maxWidth: 700, marginBottom: '1.5rem', zIndex: 3, lineHeight: 1.3 }}>
          Join a leading UK security company. We offer rewarding roles, industry-leading training, and real career progression. Your future in security starts here.
        </p>
      </section>
      <section style={{padding: '2.5rem 1rem 1.5rem 1rem', background: 'var(--white)'}}>
        <h2 style={{fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary-blue)', marginBottom: 18}}>Current Vacancies</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', width: '100%', maxWidth: 1100, margin: '0 auto', marginBottom: 32}}>
          {jobs.map(job => (
            <div key={job.title} style={{background: 'var(--accent-blue-light)', borderRadius: 14, boxShadow: '0 2px 12px #1a237e11', padding: '2rem 1.2rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', minHeight: 180}}>
              <h3 style={{fontSize: '1.15rem', fontWeight: 700, color: 'var(--primary-blue)', marginBottom: 6}}>{job.title}</h3>
              <div style={{fontSize: '0.98rem', color: '#444', marginBottom: 8}}><b>Location:</b> {job.location} &nbsp;|&nbsp; <b>Type:</b> {job.type}</div>
              <p style={{fontSize: '1.05rem', color: '#444', marginBottom: 14}}>{job.summary}</p>
              <a href="#application" style={{background: 'var(--primary-blue)', color: 'var(--white)', padding: '0.6rem 1.3rem', borderRadius: 6, fontWeight: 600, textDecoration: 'none', fontSize: '1rem', boxShadow: '0 2px 8px #2196f322'}}>Apply</a>
            </div>
          ))}
        </div>
        <WhyChooseUs />
        <section style={{margin: '2.5rem 0 0 0', background: 'var(--accent-blue-light)', borderRadius: 12, padding: '2rem 1.5rem'}}>
          <h2 style={{fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary-blue)', marginBottom: 12}}>Training, SIA Licensing & Career Progression</h2>
          <ul style={{fontSize: '1.05rem', color: '#333', lineHeight: 1.7, marginBottom: 0, paddingLeft: 20}}>
            <li>Full SIA licence training and support for new starters</li>
            <li>Ongoing professional development and upskilling</li>
            <li>Clear career paths to supervisor and management roles</li>
            <li>Employee benefits, flexible shifts, and recognition schemes</li>
          </ul>
        </section>
        <section id="application" style={{margin: '3rem 0 0 0', background: 'var(--white)', borderRadius: 12, boxShadow: '0 2px 12px #1a237e11', padding: '2.5rem 1.5rem'}}>
          <h2 style={{fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary-blue)', marginBottom: 18}}>Apply Now</h2>
          <form style={{display: 'flex', flexDirection: 'column', gap: '1.2rem', maxWidth: 500, margin: '0 auto'}}>
            <input type="text" name="name" placeholder="Full Name" required style={{padding: '0.8rem', borderRadius: 6, border: '1px solid #bbb', fontSize: '1rem'}} />
            <input type="email" name="email" placeholder="Email Address" required style={{padding: '0.8rem', borderRadius: 6, border: '1px solid #bbb', fontSize: '1rem'}} />
            <input type="tel" name="phone" placeholder="Phone Number" required style={{padding: '0.8rem', borderRadius: 6, border: '1px solid #bbb', fontSize: '1rem'}} />
            <input type="file" name="cv" accept=".pdf,.doc,.docx" style={{padding: '0.8rem', borderRadius: 6, border: '1px solid #bbb', fontSize: '1rem'}} />
            <textarea name="message" placeholder="Tell us about yourself and your experience" rows={4} style={{padding: '0.8rem', borderRadius: 6, border: '1px solid #bbb', fontSize: '1rem'}} />
            <button type="submit" style={{background: 'var(--primary-blue)', color: 'var(--white)', padding: '1rem 2.5rem', borderRadius: 6, fontWeight: 700, fontSize: '1.1rem', border: 'none', marginTop: 8, cursor: 'pointer'}}>Submit Application</button>
          </form>
        </section>
      </section>
    </main>
  );
}
