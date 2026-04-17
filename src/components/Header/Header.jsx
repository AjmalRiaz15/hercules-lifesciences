import Navbar from '../common/Navbar/Navbar';
import Button from '../common/Button/Button';
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt } from 'react-icons/fa';
import styles from './Header.module.css';

function Header() {
  const topLinks = {
    phone: '+92 (300) 123-4567',
    phoneHref: 'tel:+923001234567',
    email: 'herculeslifesciences@gmail.com',
    emailHref: 'mailto:herculeslifesciences@gmail.com'
  };

  const socialLinks = [
    { label: 'Facebook', href: 'https://www.facebook.com', icon: FaFacebookF },
    { label: 'Instagram', href: 'https://www.instagram.com', icon: FaInstagram },
    { label: 'LinkedIn', href: 'https://www.linkedin.com', icon: FaLinkedinIn }
  ];

  return (
    <header className={styles.headerWrap}>
      <div className={styles.topStrip}>
        <div className={styles.topInfo}>
          <a className={styles.topLink} href={topLinks.phoneHref} aria-label="Call Hercules Life Sciences">
            <FaPhoneAlt />
            <span>{topLinks.phone}</span>
          </a>
          <a className={styles.topLink} href={topLinks.emailHref} aria-label="Email Hercules Life Sciences">
            <FaEnvelope />
            <span>{topLinks.email}</span>
          </a>
        </div>

        <div className={styles.topSocials}>
          {socialLinks.map((social) => {
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
        <Button variant="secondary">Partner With Us</Button>
      </div>
    </header>
  );
}

export default Header;
