import { Link } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt
} from 'react-icons/fa';
import { socialMediaLinks } from '../../data/socialMediaData';
import { contactInfo } from '../../data/contactData';
import styles from './Footer.module.css';

function Footer() {
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const footerElement = footerRef.current;
    if (footerElement) {
      observer.observe(footerElement);
    }

    return () => {
      if (footerElement) {
        observer.unobserve(footerElement);
      }
    };
  }, []);

  const quickLinks = [
    { label: 'Home', to: '/' },
    { label: 'Products', to: '/products' },
    { label: 'Crops', to: '/crops' },
    { label: 'About Us', to: '/about-us' },
    { label: 'Our Mission', to: '/our-mission' },
    { label: 'Contact Us', to: '/contact-us' }
  ];

  const products = [
    { label: 'Wheat Seeds', url: '/products' },
    { label: 'Cotton Seeds', url: '/products' },
    { label: 'Fertilizers', url: '/products' },
    { label: 'Pesticides', url: '/products' },
  ];

  return (
    <footer ref={footerRef} className={`${styles.footer} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.footerContent}>
        {/* Logo & About Section */}
        <div className={styles.column}>
          <div className={styles.logoSection}>
            <h3 className={styles.logoText}>Hercules Life Sciences</h3>
            <p className={styles.tagline}>Cultivating Excellence in Agriculture</p>
          </div>
          <p className={styles.aboutText}>
            Hercules is committed to providing premium agricultural products and solutions 
            to farmers across Pakistan, ensuring sustainable farming practices and better yields.
          </p>
          <div className={styles.socialLinks}>
            {socialMediaLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.socialIcon}
                  title={social.label}
                  aria-label={social.label}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Quick Links */}
        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Quick Links</h4>
          <ul className={styles.linkList}>
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className={styles.link}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Our Products</h4>
          <ul className={styles.linkList}>
            {products.map((product, index) => (
              <li key={index}>
                <Link to={product.url} className={styles.link}>
                  {product.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Contact Info</h4>
          <div className={styles.contactList}>
            <div className={styles.contactItem}>
              <FaPhone className={styles.contactIcon} />
              <div>
                <p className={styles.contactLabel}>Phone</p>
                <a href={contactInfo.phoneHref} className={styles.contactLink}>
                  {contactInfo.phone}
                </a>
              </div>
            </div>

            <div className={styles.contactItem}>
              <FaEnvelope className={styles.contactIcon} />
              <div>
                <p className={styles.contactLabel}>Email</p>
                <a href={contactInfo.emailHref} className={styles.contactLink}>
                  {contactInfo.email}
                </a>
              </div>
            </div>

            <div className={styles.contactItem}>
              <FaMapMarkerAlt className={styles.contactIcon} />
              <div>
                <p className={styles.contactLabel}>Address</p>
                <p className={styles.contactText}>
                  {contactInfo.address.city}, Punjab<br />
                  {contactInfo.address.country}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className={styles.copyrightBar}>
        <p className={styles.copyrightText}>
          &copy; {currentYear} Hercules Life Sciences. All rights reserved. | 
          <button className={styles.copyrightLink}> Privacy Policy </button>
          |
          <button className={styles.copyrightLink}> Terms of Service</button>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
