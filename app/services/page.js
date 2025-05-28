import Navbar from '../components/Navbar';
import styles from './ServicesPage.module.css';
import ServiceCard from '../../components/ServiceCard';
import HeroSection from '../components/HeroSection';
import WhyChooseUs from '../components/WhyChooseUs';
import CallToActionBanner from '../components/CallToActionBanner';

// Service data moved to array for scalability
const services = [
	{
		title: 'Security Guards',
		icon: '/shield.svg',
		link: '/services/security-guards',
		desc: 'Professional, SIA-licensed guards for all sectors and occasions.',
	},
	{
		title: 'Corporate Security',
		icon: '/building.svg',
		link: '/services/corporate-security',
		desc: 'Concierge, static, and mobile security for your business premises.',
	},
	{
		title: 'Event Security',
		icon: '/crowd.svg',
		link: '/services/event-security',
		desc: 'Planning, crowd management, and on-site protection for safe events.',
	},
	{
		title: 'Retail Security',
		icon: '/bag.svg',
		link: '/services/retail-security',
		desc: 'Reduce losses and protect assets with expert retail security solutions.',
	},
	{
		title: 'Industrial Security',
		icon: '/factory.svg',
		link: '/services/industrial-security',
		desc: 'Tailored security for factories, warehouses, and production facilities.',
	},
	{
		title: 'Transport Security',
		icon: '/patrol.svg',
		link: '/services/transport-security',
		desc: 'Protect high-value cargo from departure to destination.',
	},
];

export default function ServicesPage() {
  return (
	<main style={{ width: '100%', minHeight: '100vh', background: '#f4f4f4' }} aria-label="Services main content">
	  <Navbar />
	  <HeroSection />
	  <section
		style={{
		  maxWidth: 900,
		  margin: '0 auto',
		  padding: 'clamp(1rem, 4vw, 2.5rem) clamp(1rem, 2vw, 0) clamp(0.75rem, 3vw, 1.5rem)',
		  textAlign: 'center',
		}}
		aria-labelledby="services-main-heading"
	  >
		<h1 id="services-main-heading" className={styles.heading} tabIndex={-1}>
		  Our Security Services
		</h1>
		<p
		  style={{
			fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
			color: 'var(--gray-dark)',
			margin: '0 auto clamp(1.25rem, 4vw, 2rem) auto',
			maxWidth: '90%',
			padding: '0 clamp(0.5rem, 2vw, 1rem)',
		  }}
		>
					Accredited, professional, and responsive security solutions for every sector. Our SIA-licensed team delivers peace of mind for businesses, events, and individuals across the UK and Europe. Explore our full range of services below.
				</p>
				<span className="visually-hidden" id="services-list-desc">
					List of all security services provided by Aim Secure Group, each with a description and link to more details.
				</span>
			</section>
			<h2 className="visually-hidden">All Security Services</h2>
			<div className={styles.servicesList} aria-describedby="services-list-desc">
				{services.map(service => (
					<ServiceCard key={service.link} {...service} aria-label={`Learn more about ${service.title} - ${service.desc}`} />
				))}
			</div>
			<WhyChooseUs />
			<CallToActionBanner />
		</main>
	);
}
