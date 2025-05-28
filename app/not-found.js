// Custom 404 page
export default function NotFound() {
  return (
    <main style={{padding: '4rem 0', textAlign: 'center', color: 'var(--primary-blue)'}}>
      <h1 style={{fontSize: '3rem', fontWeight: 900, marginBottom: 24}}>404 - Page Not Found</h1>
      <p style={{fontSize: '1.2rem', marginBottom: 32}}>Sorry, the page you are looking for does not exist or has been moved.</p>
      <a href="/" style={{background: 'var(--primary-blue)', color: 'var(--white)', padding: '0.8rem 2rem', borderRadius: 6, fontWeight: 700, textDecoration: 'none'}}>Go to Homepage</a>
    </main>
  );
}
