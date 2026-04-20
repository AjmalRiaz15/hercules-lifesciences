import { Link } from 'react-router-dom';
import { productsData } from '../../data/productsData';
import styles from './OurMission.module.css';

function OurMission() {
  const totalProducts = productsData.length;

  return (
    <section className={styles.page}>
      <div className={styles.heroBanner}>
        <div className={styles.missionLabel}>Our Mission</div>
        <h1 className={styles.heroTitle}>Growing Better Every Season</h1>
        <p className={styles.heroStatement}>
          Deliver science-led farming solutions that protect crops, improve yields,
          and support a more sustainable food ecosystem across Pakistan.
        </p>
        <div className={styles.heroDivider} />
      </div>

      <div className={styles.statsRow}>
        <div className={styles.statCard}>
          <div className={styles.statNum}>10+</div>
          <div className={styles.statLabel}>Years of expertise</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statNum}>{totalProducts}</div>
          <div className={styles.statLabel}>Products in catalog</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statNum}>100%</div>
          <div className={styles.statLabel}>Farmer-focused</div>
        </div>
      </div>

      <div className={styles.pillarsGrid}>
        <article className={styles.pillarCard}>
          <div className={styles.pillarIcon} aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2a10 10 0 0 1 10 10c0 5.5-4.5 10-10 10S2 17.5 2 12" />
              <path d="M12 6v6l4 2" />
            </svg>
          </div>
          <h2 className={styles.pillarTitle}>Crop Protection</h2>
          <p className={styles.pillarDesc}>
            Safeguarding harvests from pests, disease, and environmental stress with
            proven solutions.
          </p>
        </article>

        <article className={styles.pillarCard}>
          <div className={styles.pillarIcon} aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 3v18h18" />
              <path d="M18 9l-5 5-4-4-3 3" />
            </svg>
          </div>
          <h2 className={styles.pillarTitle}>Improved Yields</h2>
          <p className={styles.pillarDesc}>
            Data-driven agronomic guidance and premium seeds that maximize output
            season after season.
          </p>
        </article>

        <article className={styles.pillarCard}>
          <div className={styles.pillarIcon} aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3" />
              <path d="M2 12h3M19 12h3M12 2v3M12 19v3" />
            </svg>
          </div>
          <h2 className={styles.pillarTitle}>Sustainability</h2>
          <p className={styles.pillarDesc}>
            Responsible farming practices that preserve soil health and protect
            Pakistan's natural resources.
          </p>
        </article>

        <article className={styles.pillarCard}>
          <div className={styles.pillarIcon} aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <h2 className={styles.pillarTitle}>Farmer Support</h2>
          <p className={styles.pillarDesc}>
            Ongoing expert guidance so every farmer, small or large, gets the help
            they need to thrive.
          </p>
        </article>
      </div>

      <div className={styles.valuesSection}>
        <h2 className={styles.sectionHeading}>
          What we <span>stand for</span>
        </h2>
        <div className={styles.valuesList}>
          <div className={styles.valueRow}>
            <div className={styles.valueDot} />
            <p className={styles.valueText}>
              <strong>Science first.</strong> Every product and recommendation we
              offer is backed by rigorous agricultural research and field-tested
              results.
            </p>
          </div>
          <div className={styles.valueRow}>
            <div className={styles.valueDot} />
            <p className={styles.valueText}>
              <strong>Farmer before profit.</strong> We measure our success by the
              prosperity of the farmers and communities we serve across Punjab and
              beyond.
            </p>
          </div>
          <div className={styles.valueRow}>
            <div className={styles.valueDot} />
            <p className={styles.valueText}>
              <strong>Long-term thinking.</strong> Sustainable agriculture is not a
              trend, it is the only path to a food-secure future for Pakistan and the
              world.
            </p>
          </div>
          <div className={styles.valueRow}>
            <div className={styles.valueDot} />
            <p className={styles.valueText}>
              <strong>Accessible expertise.</strong> Premium agronomic knowledge
              should be available to every farmer, regardless of farm size or
              location.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.ctaBanner}>
        <div className={styles.ctaText}>
          <h3>Ready to grow better?</h3>
          <p>Reach out to our team at herculeslifesciences@gmail.com</p>
        </div>
        <Link className={styles.ctaBtn} to="/contact-us">
          Get in touch ↗
        </Link>
      </div>
    </section>
  );
}

export default OurMission;
