import styles from './ServicesPage.module.css';
import ServiceCard from '../../components/ServiceCard';

// Service data moved to array for scalability
const services = [
  {
    title: 'Security Guards',
    icon: '/file.svg',
    link: '/services/security-guards',
    desc: 'Professional, SIA-licensed guards for all sectors and occasions.'
  },
  {
    title: 'Corporate Security',
    icon: '/globe.svg',
    link: '/services/corporate-security',
    desc: 'Concierge, static, and mobile security for your business premises.'
  },
  {
    title: 'Event Security',
    icon: '/window.svg',
    link: '/services/event-security',
    desc: 'Planning, crowd management, and on-site protection for safe events.'
  },
  {
    title: 'Retail Security',
    icon: '/vercel.svg',
    link: '/services/retail-security',
    desc: 'Reduce losses and protect assets with expert retail security solutions.'
  },
  {
    title: 'Industrial Security',
    icon: '/file.svg',
    link: '/services/industrial-security',
    desc: 'Tailored security for factories, warehouses, and production facilities.'
  },
  {
    title: 'Transport Security',
    icon: '/globe.svg',
    link: '/services/transport-security',
    desc: 'Protect high-value cargo from departure to destination.'
  }
];

export default function ServicesPage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>Our Security Services</h1>
      <div className={styles.servicesList}>
        {services.map(service => (
          <ServiceCard key={service.link} {...service} />
        ))}
      </div>
    </main>
  );
}
