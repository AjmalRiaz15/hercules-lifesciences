import { FaBriefcase, FaGraduationCap, FaHandshake, FaSeedling, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { contactInfo } from '../../data/contactData';
import styles from './Career.module.css';

const jobOpenings = [
  {
    id: 1,
    title: 'Field Agronomist / Technical Officer',
    department: 'Agronomy & Field Services',
    location: 'Multan / South Punjab',
    type: 'Full Time',
    experience: '1-3 Years in Crop Advisory',
    description: 'Provide technical agronomic guidance to farmers, conduct field demonstrations, and assist with product trials for wheat, cotton, and sugarcane crops.'
  },
  {
    id: 2,
    title: 'Area Sales Manager',
    department: 'Sales & Commercial',
    location: 'Punjab / Sindh Regions',
    type: 'Full Time',
    experience: '3-5 Years in Agro-Chemical Sales',
    description: 'Lead sales distribution networks, manage dealer relationships, and drive regional sales growth for pesticides, fertilizers, and micronutrients.'
  },
  {
    id: 3,
    title: 'Quality Assurance & Regulatory Specialist',
    department: 'Quality & Compliance',
    location: 'Multan Office',
    type: 'Full Time',
    experience: '2+ Years in QA / Chemistry',
    description: 'Ensure formulation quality standards, oversee packaging compliance, and manage product registration documentation in accordance with agricultural regulations.'
  },
  {
    id: 4,
    title: 'Logistics & Supply Chain Coordinator',
    department: 'Operations',
    location: 'Multan Depot',
    type: 'Full Time',
    experience: '2+ Years in Warehouse / Logistics',
    description: 'Coordinate timely dispatch of agricultural products to distribution centers and dealers across Pakistan during critical farming seasons.'
  }
];

const benefits = [
  {
    icon: FaSeedling,
    title: 'Meaningful Agricultural Impact',
    desc: 'Work directly on solutions that empower local farmers and strengthen food security in Pakistan.'
  },
  {
    icon: FaGraduationCap,
    title: 'Continuous Learning & Growth',
    desc: 'Access ongoing agronomy training, mentorship from senior scientists, and industry certifications.'
  },
  {
    icon: FaHandshake,
    title: 'Collaborative Work Culture',
    desc: 'Be part of a supportive, performance-driven team where your ideas and initiative are valued.'
  },
  {
    icon: FaBriefcase,
    title: 'Competitive Compensation',
    desc: 'Attractive salary packages, performance bonuses, travel allowances, and medical coverage.'
  }
];

function Career() {
  return (
    <section className={styles.page}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.heroLeft}>
          <div className={styles.badge}>Careers at Hercules</div>
          <h1 className={styles.heroTitle}>
            Grow Your Career,
            <br />
            <span>Empower Agriculture</span>
          </h1>
          <p className={styles.heroSub}>
            Join our passionate team of agronomists, sales leaders, and operations specialists.
            Together, we deliver science-backed solutions to farmers across Pakistan.
          </p>
          <div className={styles.heroActions}>
            <a href="#openings" className={styles.primaryBtn}>
              View Open Positions <FaBriefcase />
            </a>
            <a href={contactInfo.emailHref} className={styles.secondaryBtn}>
              Send Your CV Directly
            </a>
          </div>
        </div>

        <div className={styles.heroRight}>
          <div className={styles.heroStat}>
            <div className={styles.heroStatNum}>130+</div>
            <div className={styles.heroStatLabel}>Quality Products</div>
          </div>
          <div className={styles.heroStat}>
            <div className={styles.heroStatNum}>Punjab & KPK</div>
            <div className={styles.heroStatLabel}>Operational Footprint</div>
          </div>
          <div className={styles.heroStat}>
            <div className={styles.heroStatNum}>100%</div>
            <div className={styles.heroStatLabel}>Farmer Focused</div>
          </div>
        </div>
      </div>

      {/* Why Join Us Section */}
      <div className={styles.benefitsSection}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionKicker}>Why Work With Us</p>
          <h2 className={styles.sectionHeading}>
            A workplace built on <span>innovation & care</span>
          </h2>
        </div>

        <div className={styles.benefitsGrid}>
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className={styles.benefitCard}>
                <div className={styles.benefitIconWrap}>
                  <Icon className={styles.benefitIcon} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Openings Section */}
      <div className={styles.openingsSection} id="openings">
        <div className={styles.sectionHeader}>
          <p className={styles.sectionKicker}>Current Openings</p>
          <h2 className={styles.sectionHeading}>
            Find your next <span>opportunity</span>
          </h2>
          <p className={styles.sectionDesc}>
            Explore our open roles below. If you do not find a matching opening, you can still send us your resume for future opportunities.
          </p>
        </div>

        <div className={styles.openingsGrid}>
          {jobOpenings.map((job) => (
            <article key={job.id} className={styles.jobCard}>
              <div className={styles.jobTop}>
                <span className={styles.jobDept}>{job.department}</span>
                <span className={styles.jobType}>{job.type}</span>
              </div>
              <h3 className={styles.jobTitle}>{job.title}</h3>
              <p className={styles.jobMeta}>
                <span><FaMapMarkerAlt /> {job.location}</span>
                <span><FaBriefcase /> {job.experience}</span>
              </p>
              <p className={styles.jobDesc}>{job.description}</p>
              <div className={styles.jobFooter}>
                <a
                  href={`mailto:herculeslifesciences@gmail.com?subject=Job Application: ${encodeURIComponent(job.title)}`}
                  className={styles.applyBtn}
                >
                  Apply Now ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* How to Apply Banner */}
      <div className={styles.applyBanner}>
        <div className={styles.applyContent}>
          <h2>Don't see a role that fits?</h2>
          <p>
            We are always looking for driven talent in agronomy, sales, marketing, and logistics.
            Email your resume to <strong>{contactInfo.email}</strong> or contact our team directly.
          </p>
          <div className={styles.applyContacts}>
            <a href={contactInfo.emailHref} className={styles.applyContactLink}>
              <FaEnvelope /> {contactInfo.email}
            </a>
            <a href={contactInfo.phoneHref} className={styles.applyContactLink}>
              <FaPhoneAlt /> {contactInfo.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Career;
