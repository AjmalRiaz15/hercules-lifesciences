import { useState, useEffect, useMemo } from 'react';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaMapMarkerAlt,
  FaBuilding,
  FaExternalLinkAlt
} from 'react-icons/fa';
import { contactInfo } from '../../data/contactData';
import { productsData } from '../../data/productsData';
import styles from './AboutUs.module.css';

function useCountUp(target, duration = 1400) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const end = parseInt(target, 10);
    if (isNaN(end) || end === 0) {
      setCount(end || 0);
      return;
    }

    let startTime = null;
    let frameId;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * end));

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [target, duration]);

  return count;
}

function AboutUs() {
  const totalDistinctProducts = useMemo(() => {
    const set = new Set(productsData.map((p) => p.groupKey || p.slug));
    return set.size;
  }, []);

  const animatedProductsCount = useCountUp(totalDistinctProducts, 1400);

  return (
    <section className={styles.page}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.heroLeft}>
          <div className={styles.badge}>About Us</div>
          <h1 className={styles.heroTitle}>
            Cultivating Excellence
            <br />
            in Agriculture
          </h1>
          <p className={styles.heroSub}>
            Hercules Life Sciences is committed to providing premium agricultural
            products and solutions to farmers across Pakistan, ensuring sustainable
            farming practices and better yields every season.
          </p>
        </div>

        <div className={styles.heroRight}>
          <div className={styles.heroStat}>
            <div className={styles.heroStatHeader}>
              <div className={styles.heroStatNum}>Multan</div>
              <span className={styles.statPulseDot} />
            </div>
            <div className={styles.heroStatLabel}>Headquarters, Punjab</div>
          </div>
          <div className={styles.heroStat}>
            <div className={styles.heroStatNum}>{animatedProductsCount}+</div>
            <div className={styles.heroStatLabel}>Products in Catalog</div>
          </div>
          <div className={styles.heroStat}>
            <div className={styles.heroStatNum}>Punjab</div>
            <div className={styles.heroStatLabel}>Primary Service Area</div>
          </div>
          <div className={styles.heroStat}>
            <div className={styles.heroStatNum}>KPK</div>
            <div className={styles.heroStatLabel}>Regional Office</div>
          </div>
        </div>
      </div>

      {/* Story Cards */}
      <div className={styles.storySection}>
        <div className={`${styles.storyCard} ${styles.accent}`}>
          <p className={styles.cardLabel}>Who We Are</p>
          <h2 className={styles.cardHeading}>A science-driven agricultural company</h2>
          <p className={styles.cardBody}>
            Hercules Life Sciences was founded with a simple belief: every farmer in
            Pakistan deserves access to strong agricultural knowledge and products.
            We combine scientific research with field experience to deliver solutions
            that perform in real farms.
          </p>
        </div>

        <div className={styles.storyCard}>
          <p className={styles.cardLabel}>What We Do</p>
          <h2 className={styles.cardHeading}>From seeds to harvest, we stay involved</h2>
          <p className={styles.cardBody}>
            From premium wheat and cotton seeds to fertilizers and crop protection
            products, our range supports the full farming cycle. We do not just sell
            products, we help farmers use them effectively.
          </p>
        </div>
      </div>

      {/* Our Mission Section */}
      <div className={styles.missionSection}>
        <div className={styles.missionHeader}>
          <span className={styles.badge}>Our Mission</span>
          <h2 className={styles.missionTitle}>
            Growing Better Every Season — <span>Our Mission & Core Purpose</span>
          </h2>
          <p className={styles.missionStatement}>
            Our mission is to deliver science-led farming solutions that protect crops, improve yields, and support a more prosperous, sustainable agricultural ecosystem across Pakistan.
          </p>
        </div>

        <div className={styles.missionGrid}>
          <div className={styles.missionCard}>
            <div className={styles.pillarIcon}>🛡️</div>
            <h3>Crop Protection</h3>
            <p>Safeguarding harvests from pests, disease, and environmental stress with proven crop protection products.</p>
          </div>
          <div className={styles.missionCard}>
            <div className={styles.pillarIcon}>📈</div>
            <h3>Improved Yields</h3>
            <p>Data-driven agronomic guidance and high-efficacy inputs that maximize farm output season after season.</p>
          </div>
          <div className={styles.missionCard}>
            <div className={styles.pillarIcon}>🌱</div>
            <h3>Sustainability</h3>
            <p>Responsible agricultural practices that preserve soil health and protect Pakistan's natural resources.</p>
          </div>
          <div className={styles.missionCard}>
            <div className={styles.pillarIcon}>🤝</div>
            <h3>Farmer Support</h3>
            <p>Direct field advisory and accessible agronomy expertise for every farmer, regardless of scale.</p>
          </div>
        </div>
      </div>

      {/* Head Office & Map Location Section */}
      <div className={styles.locationSection}>
        <div className={styles.locationCard}>
          <div className={styles.locationHeader}>
            <span className={styles.locationBadge}>
              <FaBuilding /> Corporate Headquarters
            </span>
            <h2 className={styles.locationTitle}>Hercules Life Sciences</h2>
            <p className={styles.locationSubtitle}>
              <FaMapMarkerAlt className={styles.pinIcon} /> {contactInfo.address.city}, Punjab, {contactInfo.address.country}
            </p>
          </div>

          <div className={styles.contactList}>
            <div className={styles.contactItem}>
              <span className={styles.contactIconWrap}>
                <FaPhoneAlt />
              </span>
              <div className={styles.contactItemContent}>
                <span className={styles.contactItemLabel}>Direct Phone</span>
                <a href={contactInfo.phoneHref} className={styles.contactItemLink}>
                  {contactInfo.phone}
                </a>
              </div>
            </div>

            <div className={styles.contactItem}>
              <span className={styles.contactIconWrap}>
                <FaEnvelope />
              </span>
              <div className={styles.contactItemContent}>
                <span className={styles.contactItemLabel}>Official Email</span>
                <a href={contactInfo.emailHref} className={styles.contactItemLink}>
                  {contactInfo.email}
                </a>
              </div>
            </div>

            <div className={styles.contactItem}>
              <span className={styles.contactIconWrap}>
                <FaClock />
              </span>
              <div className={styles.contactItemContent}>
                <span className={styles.contactItemLabel}>Business Hours</span>
                <span className={styles.contactItemValue}>
                  {contactInfo.businessHours?.days || 'Mon – Sat'}: {contactInfo.businessHours?.hours || '9:00 AM – 6:00 PM'}
                </span>
              </div>
            </div>
          </div>

          <div className={styles.actionWrap}>
            <a
              href={`https://maps.google.com/?q=Hercules+Life+Sciences+Multan+Pakistan`}
              target="_blank"
              rel="noreferrer"
              className={styles.directionsBtn}
            >
              Get Directions <FaExternalLinkAlt />
            </a>
          </div>
        </div>

        <div className={styles.mapContainer}>
          <iframe
            title="Hercules Life Sciences Multan Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13796.84279144414!2d71.4362!3d30.1956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b339a00000001%3A0x0!2sMultan%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
