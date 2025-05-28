// Why Choose Us / Company values section
export default function WhyChooseUs() {
  const features = [
    {
      title: 'SIA Licensed Guards',
      desc: 'All our security personnel are fully licensed and trained to SIA standards, ensuring professional and compliant service.',
      icon: '/shield.svg'
    },
    {
      title: '24/7 Coverage',
      desc: 'Round-the-clock security solutions with rapid response capabilities for complete peace of mind.',
      icon: '/globe.svg'
    },
    {
      title: 'Industry Experience',
      desc: 'Over 15 years of experience providing security solutions across various sectors and environments.',
      icon: '/star.svg'
    },
    {
      title: 'Tailored Solutions',
      desc: 'Customized security strategies designed to meet your specific requirements and challenges.',
      icon: '/file.svg'
    }
  ];

  return (
    <section className="fade-in" style={{
      width: '100%',
      background: 'linear-gradient(135deg, #EFF6FF, #F0F7FF)',
      padding: '3rem 0',
      position: 'relative',
      borderRadius: 18,
      boxShadow: '0 4px 24px rgba(26,35,126,0.07)',
      margin: '2rem 0',
      maxWidth: 1200,
      marginLeft: 'auto',
      marginRight: 'auto',
      overflow: 'hidden'
    }}>
      <h2 className="slide-up" style={{
        textAlign: 'center',
        color: '#1565C0',
        fontWeight: 800,
        fontSize: 'clamp(1.5rem, 4vw, 2rem)',
        marginBottom: '2rem',
        position: 'relative',
        textShadow: '0 2px 4px rgba(0,0,0,0.05)'
      }}>Why Choose Us?</h2>
      <div className="fade-in-delay" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 'clamp(1rem, 3vw, 2rem)',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 clamp(1rem, 3vw, 2rem)',
        position: 'relative'
      }}>
        {features.map(({title, desc, icon}, idx) => (
          <div key={title} className="scale-in" style={{
            background: '#FFFFFF',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(26,35,126,0.1)',
            padding: 'clamp(1.5rem, 3vw, 2rem)',
            fontSize: '1.05rem',
            color: '#2C3E50',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px',
            transition: 'transform 0.2s, box-shadow 0.2s',
            border: '1px solid rgba(33,150,243,0.1)',
            position: 'relative',
            outline: 'none'
          }} tabIndex={0}>
            <img src={icon} alt={title + ' icon'} style={{
              width: 'clamp(40px, 5vw, 48px)',
              height: 'clamp(40px, 5vw, 48px)',
              filter: 'drop-shadow(0 2px 4px rgba(33,150,243,0.2))',
              marginBottom: '4px'
            }} />
            <div style={{
              fontWeight: 700,
              color: '#1565C0',
              marginBottom: '8px',
              fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)'
            }}>{title}</div>
            <p style={{
              margin: 0,
              lineHeight: 1.6,
              color: '#2C3E50',
              fontSize: 'clamp(0.95rem, 2vw, 1.05rem)'
            }}>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
