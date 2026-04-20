import { contactInfo } from '../../data/contactData';
import { productsData } from '../../data/productsData';
import styles from './AboutUs.module.css';

function AboutUs() {
  const totalProducts = productsData.length;

  return (
    <section className={styles.page}>
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
            <div className={styles.heroStatNum}>Multan</div>
            <div className={styles.heroStatLabel}>Headquarters, Punjab</div>
          </div>
          <div className={styles.heroStat}>
            <div className={styles.heroStatNum}>{totalProducts}</div>
            <div className={styles.heroStatLabel}>Products in Catalog</div>
          </div>
          <div className={styles.heroStat}>
            <div className={styles.heroStatNum}>Punjab</div>
            <div className={styles.heroStatLabel}>Primary Service Area</div>
          </div>
        </div>
      </div>

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

      <div className={styles.timelineSection}>
        <h2 className={styles.sectionHeading}>
          Our <span>journey</span>
        </h2>

        <div className={styles.timeline}>
          <div className={styles.tlItem}>
            <div className={styles.tlLeft}>
              <div className={styles.tlDot} />
              <div className={styles.tlLine} />
            </div>
            <div className={styles.tlYear}>Founded</div>
            <div className={styles.tlContent}>
              <h4>Hercules Life Sciences established</h4>
              <p>
                Company founded in Multan, Punjab with a mission to serve Pakistan's
                farming community with science-backed solutions.
              </p>
            </div>
          </div>

          <div className={styles.tlItem}>
            <div className={styles.tlLeft}>
              <div className={styles.tlDot} />
              <div className={styles.tlLine} />
            </div>
            <div className={styles.tlYear}>Growth</div>
            <div className={styles.tlContent}>
              <h4>Product line expanded</h4>
              <p>
                Launched wheat seeds, cotton seeds, fertilizers, and pesticides to
                become a one-stop agricultural solution provider.
              </p>
            </div>
          </div>

          <div className={styles.tlItem}>
            <div className={styles.tlLeft}>
              <div className={styles.tlDot} />
              <div className={styles.tlLine} />
            </div>
            <div className={styles.tlYear}>Today</div>
            <div className={styles.tlContent}>
              <h4>Serving farmers across Punjab</h4>
              <p>
                Continuing to grow our reach and impact, supporting farmers with
                premium products and practical guidance every season.
              </p>
            </div>
          </div>

          <div className={styles.tlItem}>
            <div className={styles.tlLeft}>
              <div className={styles.tlDot} />
              <div className={styles.tlLine} />
            </div>
            <div className={styles.tlYear}>Vision</div>
            <div className={styles.tlContent}>
              <h4>A sustainable food ecosystem for Pakistan</h4>
              <p>
                Working toward a future where every farmer has the tools, knowledge,
                and support to feed the nation and protect the land.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.teamSection}>
        <h2 className={styles.sectionHeading}>
          Our <span>team</span>
        </h2>

        <div className={styles.teamGrid}>
          <div className={styles.teamCard}>
            <div className={styles.teamAvatar}>H</div>
            <p className={styles.teamName}>Leadership Team</p>
            <p className={styles.teamRole}>Management & Strategy</p>
            <span className={styles.teamTag}>Executive</span>
          </div>
          <div className={styles.teamCard}>
            <div className={styles.teamAvatar}>A</div>
            <p className={styles.teamName}>Agronomy Experts</p>
            <p className={styles.teamRole}>Crop Science & Research</p>
            <span className={styles.teamTag}>Science</span>
          </div>
          <div className={styles.teamCard}>
            <div className={styles.teamAvatar}>S</div>
            <p className={styles.teamName}>Sales & Support</p>
            <p className={styles.teamRole}>Farmer Relations</p>
            <span className={styles.teamTag}>Field Team</span>
          </div>
          <div className={styles.teamCard}>
            <div className={styles.teamAvatar}>L</div>
            <p className={styles.teamName}>Logistics Team</p>
            <p className={styles.teamRole}>Supply & Distribution</p>
            <span className={styles.teamTag}>Operations</span>
          </div>
        </div>
      </div>

      <div className={styles.locationBar}>
        <div className={styles.locIcon} aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="#a8d5a2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        </div>

        <div className={styles.locInfo}>
          <h3>Headquartered in {contactInfo.address.city}, {contactInfo.address.country}</h3>
          <p>Serving farmers across Pakistan with premium agricultural products and expert guidance</p>
        </div>

        <div className={styles.locContacts}>
          <div className={styles.locContactItem}>{contactInfo.phone}</div>
          <div className={styles.locContactItem}>{contactInfo.email}</div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
