// Careers/Jobs page
export default function CareersPage() {
  return (
    <main style={{padding: '2rem 0', maxWidth: 700, margin: '0 auto'}}>
      <h1 style={{fontSize: '2rem', fontWeight: 800, color: 'var(--primary-blue)', marginBottom: 24}}>Careers at Aim Secure Group</h1>
      <p>We are always looking for talented, motivated individuals to join our team. If you are interested in a career in security, please send your CV to <a href="mailto:info@aimsecuregroup.uk" style={{color: 'var(--primary-blue)'}}>info@aimsecuregroup.uk</a>.</p>
      <ul style={{marginTop: 24, listStyle: 'none', padding: 0}}>
        <li><strong>Security Guard (London)</strong> – Full Time</li>
        <li><strong>Mobile Patrol Officer (UK-wide)</strong> – Full Time</li>
        <li><strong>Event Security Staff</strong> – Part Time</li>
      </ul>
    </main>
  );
}
