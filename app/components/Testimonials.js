// Testimonials section
export default function Testimonials() {
  return (
    <section style={{width: '100%', background: 'var(--white)', padding: '3rem 0', borderTop: '1px solid #eee', borderBottom: '1px solid #eee'}}>
      <h2 style={{textAlign: 'center', color: 'var(--primary-blue)', fontWeight: 800, fontSize: '2rem', marginBottom: 32}}>What Our Clients Say</h2>
      <div style={{display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center'}}>
        <TestimonialCard name="Retail Director, Louis Vuitton" text="Titan Security provided us with outstanding retail security across Europe. Their professionalism and attention to detail are unmatched." />
        <TestimonialCard name="Event Manager, UK" text="The team ensured our event was safe and smooth. Highly recommended for any high-profile occasion." />
        <TestimonialCard name="Logistics Manager, Amazon" text="Reliable, responsive, and always professional. Our warehouses are in safe hands with Aim Secure Group." />
      </div>
    </section>
  );
}

function TestimonialCard({ name, text }) {
  return (
    <div style={{background: 'var(--accent-blue-light)', borderRadius: 12, boxShadow: '0 2px 12px #1a237e11', padding: '2rem', maxWidth: 340, minWidth: 220, fontSize: '1.05rem', color: 'var(--gray-dark)'}}>
      <p style={{fontStyle: 'italic', marginBottom: 16}}>&ldquo;{text}&rdquo;</p>
      <div style={{fontWeight: 700, color: 'var(--primary-blue)'}}>{name}</div>
    </div>
  );
}
