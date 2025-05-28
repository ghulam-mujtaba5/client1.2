// News/Blog page
export default function NewsPage() {
  return (
    <main style={{padding: '2rem 0', maxWidth: 1100, margin: '0 auto'}}>
      <h1 style={{fontSize: '2rem', fontWeight: 800, color: 'var(--primary-blue)', marginBottom: 24}}>Latest News & Insights</h1>
      <ul style={{listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '2rem'}}>
        <li>
          <h2 style={{fontSize: '1.2rem', fontWeight: 700}}>Security Guard Roles and Responsibilities</h2>
          <p>What makes a great security guard? Our guide to the key skills and duties.</p>
        </li>
        <li>
          <h2 style={{fontSize: '1.2rem', fontWeight: 700}}>Event Security: How Many Security Guards?</h2>
          <p>How to plan the right level of security for your event.</p>
        </li>
      </ul>
    </main>
  );
}
