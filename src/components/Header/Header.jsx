import Navbar from '../common/Navbar/Navbar';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { contactInfo } from '../../data/contactData';
import { socialMediaLinks } from '../../data/socialMediaData';
import styles from './Header.module.css';

function Header() {
  const topLinks = [
    {
      key: 'phone',
      href: contactInfo.phoneHref,
      label: 'Call Hercules Life Sciences',
      icon: FaPhoneAlt,
      text: contactInfo.phone
    },
    {
      key: 'email',
      href: contactInfo.emailHref,
      label: 'Email Hercules Life Sciences',
      icon: FaEnvelope,
      text: contactInfo.email
    }
  ];

  return (
    <header className={styles.headerWrap}>
      <div className={styles.topStrip}>
        <div className={styles.topDesktop}>
          <div className={styles.topInfo}>
            {topLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a key={link.key} className={styles.topLink} href={link.href} aria-label={link.label}>
                  <Icon />
                  <span>{link.text}</span>
                </a>
              );
            })}
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

        <div className={styles.topMobile} aria-label="Contact strip">
          <div className={styles.marquee}>
            <div className={styles.marqueeGroup}>
              {topLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <a key={link.key} className={styles.topLink} href={link.href} aria-label={link.label}>
                    <Icon />
                    <span>{link.text}</span>
                  </a>
                );
              })}

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

            <div className={styles.marqueeGroup} aria-hidden="true">
              {topLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <a key={`${link.key}-repeat`} className={styles.topLink} href={link.href} aria-label={link.label} tabIndex={-1}>
                    <Icon />
                    <span>{link.text}</span>
                  </a>
                );
              })}

              {socialMediaLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={`${social.label}-repeat`}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className={styles.socialLink}
                    tabIndex={-1}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.header}>
        <div className={styles.brandBlock}>
          <img className={styles.brandLogo} src="/images/main-logo.png" alt="Hercules Life Sciences" />
          <div className={styles.brandTextGroup}>
            <span className={styles.brand}>Hercules Life Sciences</span>
            <span className={styles.tagline}>Growing Better Every Season</span>
          </div>
        </div>
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
