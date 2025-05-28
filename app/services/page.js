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
		<main className={styles.container}>
			<HeroSection />
			<section
				style={{
					maxWidth: 900,
					margin: '0 auto',
					padding: '2.5rem 0 1.5rem 0',
					textAlign: 'center',
				}}
			>
				<h1 className={styles.heading}>Our Security Services</h1>
				<p
					style={{
						fontSize: '1.2rem',
						color: 'var(--gray-dark)',
						margin: '0 auto 2rem auto',
						maxWidth: 700,
					}}
				>
					Accredited, professional, and responsive security solutions for every
					sector. Our SIA-licensed team delivers peace of mind for businesses,
					events, and individuals across the UK and Europe. Explore our full range
					of services below.
				</p>
			</section>
			<div className={styles.servicesList}>
				{services.map(service => (
					<ServiceCard key={service.link} {...service} />
				))}
			</div>
			<WhyChooseUs />
			<CallToActionBanner />
		</main>
	);
}
