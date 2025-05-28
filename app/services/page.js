import Navbar from '../components/Navbar';
import styles from './ServicesPage.module.css';
import containerStyles from '../container.module.css';
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
	{
		title: 'Cleaning Services',
		icon: '/star.svg',
		link: '/services/cleaning-services',
		desc: 'Professional cleaning for residential and commercial spaces. Quality, value, and security in one service.',
	},
	{
		title: 'Keyholding & Alarm Response',
		icon: '/file.svg',
		link: '/services/keyholding-alarm-response',
		desc: '24/7 secure keyholding and rapid alarm response for your premises.',
	},
	{
		title: 'Guard Dog Security',
		icon: '/shield.svg',
		link: '/services/guard-dog-security',
		desc: 'Highly trained security dogs and handlers for maximum deterrence and rapid response.',
	},
	{
		title: 'Hotel Security',
		icon: '/star.svg',
		link: '/services/hotel-security',
		desc: 'Discreet, multi-skilled security and concierge staff for hotels and hospitality venues.',
	},
	{
		title: 'Vacant Premises Security',
		icon: '/window.svg',
		link: '/services/vacant-premises-security',
		desc: 'Protection for empty properties against trespass, vandalism, and theft.',
	},
];

export default function ServicesPage() {
	return (
		<main className={containerStyles.pageBg} aria-label="Services main content">
			<Navbar />
			<HeroSection />
			<section className={styles.servicesSection} aria-labelledby="services-main-heading">
				<h1 id="services-main-heading" className={styles.heading}>
					Our Security Services
				</h1>
				<p className={styles.serviceDescription}>
					Accredited, professional, and responsive security solutions for every sector. Our SIA-licensed team delivers peace of mind for businesses, events, and individuals across the UK and Europe. Explore our full range of services below.
				</p>
				<span className="visually-hidden" id="services-list-desc">
					List of all security services provided by Aim Secure Group, each with a description and link to more details.
				</span>
			</section>
			<section aria-labelledby="all-services-heading" className={containerStyles.section}>
				<h2 id="all-services-heading" className="visually-hidden">All Security Services</h2>
				<div className={styles.servicesList} aria-describedby="services-list-desc" role="list">
					{services.map(service => (
						<ServiceCard
							key={service.link}
							{...service}
							aria-label={`Learn more about ${service.title} - ${service.desc}`}
						/>
					))}
				</div>
			</section>
			<WhyChooseUs />
			<CallToActionBanner />
		</main>
	);
}
