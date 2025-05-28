import Image from 'next/image';
import styles from './ServiceCard.module.css';

export default function ServiceCard({ title, icon, link, desc }) {
  return (
    <a href={link} className={styles.card} aria-label={title} tabIndex={0}>
      <Image src={icon} alt={title} width={48} height={48} className={styles.icon} />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.desc}>{desc}</p>
      <span className={styles.learnMore}>
        Learn More &rarr;
      </span>
    </a>
  );
}
