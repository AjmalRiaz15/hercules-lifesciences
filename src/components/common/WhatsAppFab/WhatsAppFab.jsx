import { FaWhatsapp } from 'react-icons/fa';
import { contactInfo } from '../../../data/contactData';
import styles from './WhatsAppFab.module.css';

function WhatsAppFab() {
  return (
    <a
      className={styles.fab}
      href={contactInfo.whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label={`Chat on WhatsApp ${contactInfo.whatsapp}`}
    >
      <FaWhatsapp className={styles.icon} aria-hidden="true" />
    </a>
  );
}

export default WhatsAppFab;
