import { productsData } from '../../data/productsData';
import styles from './Sustainability.module.css';

function Sustainability() {
  const totalProducts = productsData.length;
  const totalCategories = new Set(productsData.map((item) => item.category)).size;

  return (
    <section className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.badge}>Sustainability</div>
        <h1 className={styles.heroTitle}>
          Farming for <em>Today</em>
          <br />
          and <em>Tomorrow</em>
        </h1>
        <p className={styles.heroSub}>
          At Hercules Life Sciences, sustainability is not an afterthought, it is
          woven into everything we do. We believe responsible farming today is the
          only way to ensure food security for the generations ahead.
        </p>

        <div className={styles.heroPillRow}>
          <div className={styles.heroPill}><span className={styles.heroPillDot} />Soil Health</div>
          <div className={styles.heroPill}><span className={styles.heroPillDot} />Water Conservation</div>
          <div className={styles.heroPill}><span className={styles.heroPillDot} />Reduced Chemicals</div>
          <div className={styles.heroPill}><span className={styles.heroPillDot} />Better Yields</div>
        </div>
      </div>

      <div className={styles.impactRow}>
        <div className={styles.impactCard}>
          <div className={styles.impactNum}>↓30%</div>
          <div className={styles.impactLabel}>Target chemical reduction through precision inputs</div>
        </div>
        <div className={styles.impactCard}>
          <div className={styles.impactNum}>{totalCategories}</div>
          <div className={styles.impactLabel}>Core categories aligned with responsible farming</div>
        </div>
        <div className={styles.impactCard}>
          <div className={styles.impactNum}>{totalProducts}</div>
          <div className={styles.impactLabel}>Products supported by long-term agronomic guidance</div>
        </div>
      </div>

      <div className={styles.promiseGrid}>
        <article className={styles.promiseCard}>
          <div className={styles.pIcon} aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22V12M12 12C12 7 7 4 2 6M12 12C12 7 17 4 22 6" />
            </svg>
          </div>
          <h2 className={styles.pTitle}>Healthy Soil</h2>
          <p className={styles.pDesc}>
            We promote fertilizer programs that replenish nutrients without depleting
            the organic matter that keeps Punjab's soil productive.
          </p>
        </article>

        <article className={styles.promiseCard}>
          <div className={styles.pIcon} aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4" />
              <circle cx="12" cy="12" r="4" />
            </svg>
          </div>
          <h2 className={styles.pTitle}>Smart Water Use</h2>
          <p className={styles.pDesc}>
            Our crop guidance encourages irrigation scheduling that conserves
            groundwater resources season after season.
          </p>
        </article>

        <article className={styles.promiseCard}>
          <div className={styles.pIcon} aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </div>
          <h2 className={styles.pTitle}>Responsible Inputs</h2>
          <p className={styles.pDesc}>
            We guide farmers toward the right dose at the right time, reducing waste,
            cost, and environmental impact without sacrificing results.
          </p>
        </article>

        <article className={styles.promiseCard}>
          <div className={styles.pIcon} aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 3v18h18" />
              <path d="M18 9l-5 5-4-4-3 3" />
            </svg>
          </div>
          <h2 className={styles.pTitle}>Long-term Yields</h2>
          <p className={styles.pDesc}>
            Sustainable practices protect the environment and also build fertility
            that supports stronger harvests for decades to come.
          </p>
        </article>
      </div>

      <div className={styles.approachSection}>
        <div className={`${styles.approachCard} ${styles.greenTint}`}>
          <p className={styles.secLabel}>Our Approach</p>
          <h2 className={styles.secHeading}>Science guides every sustainable choice we make</h2>
          <p className={styles.secBody}>
            We do not ask farmers to choose between productivity and sustainability.
            Our agronomists recommend programs that deliver both high yields and a
            lower environmental footprint.
          </p>
        </div>

        <div className={styles.approachCard}>
          <p className={styles.secLabel}>Farmer Education</p>
          <h2 className={styles.secHeading}>Empowering farmers with knowledge, not just products</h2>
          <p className={styles.secBody}>
            We invest in practical education, from proper pesticide application to
            better soil practices, so farmers can make stronger independent decisions
            for their land and future.
          </p>
        </div>
      </div>

      <div className={styles.goalsSection}>
        <h2 className={styles.sectionHeading}>
          Our <span>sustainability goals</span>
        </h2>

        <div className={styles.goalsList}>
          <div className={styles.goalRow}>
            <div className={styles.goalNum}>01</div>
            <div className={styles.goalText}>
              <h4>Reduce chemical overuse across all farm partners</h4>
              <p>
                Promote precision agriculture so farmers apply the minimum effective
                amount of pesticides and fertilizers, protecting soil, water, and
                human health.
              </p>
            </div>
          </div>

          <div className={styles.goalRow}>
            <div className={styles.goalNum}>02</div>
            <div className={styles.goalText}>
              <h4>Expand access to high-quality seeds for small farmers</h4>
              <p>
                Ensure even small-scale farmers in rural Punjab have access to
                certified wheat and cotton seeds that improve yield stability.
              </p>
            </div>
          </div>

          <div className={styles.goalRow}>
            <div className={styles.goalNum}>03</div>
            <div className={styles.goalText}>
              <h4>Support soil health through balanced fertilizer programs</h4>
              <p>
                Promote soil testing and tailored fertilizer plans that restore rather
                than deplete soil biology and organic matter.
              </p>
            </div>
          </div>

          <div className={styles.goalRow}>
            <div className={styles.goalNum}>04</div>
            <div className={styles.goalText}>
              <h4>Build a more sustainable food ecosystem in Pakistan</h4>
              <p>
                Contribute to an agricultural sector that can feed a growing
                population while preserving natural resources for future generations.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.pledgeBanner}>
        <h2>
          Our pledge to <em>Pakistan's land</em>
        </h2>
        <p>
          Every product we provide, every recommendation we make, and every farmer
          we support brings us closer to an agricultural future that is productive,
          resilient, and sustainable.
        </p>
        <div className={styles.pledgeDivider} />
      </div>
    </section>
  );
}

export default Sustainability;
