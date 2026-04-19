import Navbar from '../common/Navbar/Navbar';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { contactInfo } from '../../data/contactData';
import { socialMediaLinks } from '../../data/socialMediaData';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.headerWrap}>
      <div className={styles.topStrip}>
        <div className={styles.topInfo}>
          <a className={styles.topLink} href={contactInfo.phoneHref} aria-label="Call Hercules Life Sciences">
            <FaPhoneAlt />
            <span>{contactInfo.phone}</span>
          </a>
          <a className={styles.topLink} href={contactInfo.emailHref} aria-label="Email Hercules Life Sciences">
            <FaEnvelope />
            <span>{contactInfo.email}</span>
          </a>
        </div>

        <div className={styles.topSocials}>
          {socialMediaLinks.map((social) => {
            const Icon = social.icon;

            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className={styles.socialLink}
              >
                <Icon />
              </a>
            );
          })}
        </div>
      </div>

      <div className={styles.header}>
        <div className={styles.brandBlock}>
          <span className={styles.brand}>Hercules Life Sciences</span>
          <span className={styles.tagline}>Growing Better Every Season</span>
        </div>
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
