// News/blog preview for homepage
export default function NewsPreview() {
  return (
    <section className="fade-in" style={{width: '100%', background: 'var(--white)', padding: '3rem 0', borderTop: '1px solid #eee'}}>
      <h2 className="slide-up" style={{textAlign: 'center', color: 'var(--primary-blue)', fontWeight: 800, fontSize: '2rem', marginBottom: 32}}>Latest News & Insights</h2>
      <div className="fade-in-delay" style={{display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center'}}>
        <NewsCard title="Security Guard Roles and Responsibilities" date="April 26, 2025" link="/news" desc="What makes a great security guard? Our guide to the key skills and duties." />
        <NewsCard title="Event Security: How Many Security Guards?" date="March 28, 2025" link="/news" desc="How to plan the right level of security for your event." />
        <NewsCard title="Logistics Security: Protecting the Supply Chain" date="April 22, 2025" link="/news" desc="Best practices for securing your logistics and supply chain." />
      </div>
    </section>
  );
}

function NewsCard({ title, date, link, desc }) {
  return (
    <a className="scale-in" href={link} style={{
      background: 'var(--accent-blue-light)',
      borderRadius: 12,
      boxShadow: '0 2px 12px #1a237e11',
      padding: '2rem',
      maxWidth: 340,
      minWidth: 220,
      fontSize: '1.05rem',
      color: 'var(--gray-dark)',
      textDecoration: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      transition: 'box-shadow 0.2s',
    }}>
      <div style={{fontWeight: 700, color: 'var(--primary-blue)'}}>{title}</div>
      <div style={{fontSize: '0.95rem', color: '#888'}}>{date}</div>
      <div>{desc}</div>
      <span style={{marginTop: 8, color: 'var(--primary-blue)', fontWeight: 600, fontSize: '0.98rem'}}>Read more &rarr;</span>
    </a>
  );
}
