import { useState, useEffect } from 'react';
import {
  FaBriefcase,
  FaGraduationCap,
  FaHandshake,
  FaSeedling,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaFilter,
  FaSearch,
  FaCopy,
  FaCheck,
  FaExternalLinkAlt
} from 'react-icons/fa';
import { useJobs } from '../../context/JobContext';
import { contactInfo } from '../../data/contactData';
import styles from './Career.module.css';

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
  const { jobs } = useJobs();
  const [selectedDept, setSelectedDept] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  // Apply Modal state
  const [activeApplicationJob, setActiveApplicationJob] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const departments = ['All', ...Array.from(new Set(jobs.map((job) => job.department)))];

  const filteredJobs = jobs.filter((job) => {
    const matchesDept = selectedDept === 'All' || job.department === selectedDept;
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesDept && matchesSearch;
  });

  const getSubject = (job) => {
    return job
      ? `Job Application: ${job.title} - Hercules Life Sciences`
      : 'General Job Application - Hercules Life Sciences';
  };

  const getBody = (job) => {
    if (job) {
      return `Dear Hercules Life Sciences HR Team,\n\nI am applying for the position of "${job.title}" (Department: ${job.department}, Location: ${job.location}).\n\nPlease find my candidate details below:\n\n• Full Name: \n• Contact Number / WhatsApp: \n• Current City: \n• Total Experience: \n• Highest Qualification: \n\n[Please attach your updated CV / Resume to this email]\n\nThank you,\n`;
    }
    return `Dear Hercules Life Sciences HR Team,\n\nI would like to submit my resume for career opportunities at Hercules Life Sciences.\n\nMy Details:\n• Full Name: \n• Contact Number / WhatsApp: \n• Desired Department / Role: \n• Current City: \n• Total Experience: \n• Highest Qualification: \n\n[Please attach your updated CV / Resume to this email]\n\nThank you,\n`;
  };

  const getMailtoUrl = (job) => {
    const subject = encodeURIComponent(getSubject(job));
    const body = encodeURIComponent(getBody(job));
    return `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
  };

  const getGmailWebUrl = (job) => {
    const subject = encodeURIComponent(getSubject(job));
    const body = encodeURIComponent(getBody(job));
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${contactInfo.email}&su=${subject}&body=${body}`;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const openApplyModal = (job) => {
    setActiveApplicationJob(job || { title: 'General Career Application', department: 'General', location: 'Pakistan' });
    setCopiedEmail(false);
  };

  const closeApplyModal = () => {
    setActiveApplicationJob(null);
    setCopiedEmail(false);
  };

  const animatedJobsCount = useCountUp(jobs.length, 1200);
  const animatedFocusCount = useCountUp(100, 1600);

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
            <button
              type="button"
              onClick={() => openApplyModal(null)}
              className={styles.secondaryBtn}
            >
              Send Your CV Directly
            </button>
          </div>
        </div>

        <div className={styles.heroRight}>
          <div className={styles.heroStat}>
            <div className={styles.heroStatHeader}>
              <div className={styles.heroStatNum}>{animatedJobsCount}</div>
              <span className={styles.statPulseDot} />
            </div>
            <div className={styles.heroStatLabel}>Open Positions</div>
          </div>
          <div className={styles.heroStat}>
            <div className={styles.heroStatNum}>Punjab & KPK</div>
            <div className={styles.heroStatLabel}>Operational Footprint</div>
          </div>
          <div className={styles.heroStat}>
            <div className={styles.heroStatNum}>{animatedFocusCount}%</div>
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
            Browse through our current vacancies below. Click apply to submit your profile directly to our hiring team.
          </p>
        </div>

        {/* Filter / Search Bar (only if there are jobs) */}
        {jobs.length > 0 && (
          <div className={styles.filterBar}>
            <div className={styles.searchBox}>
              <FaSearch className={styles.searchIcon} />
              <input
                type="text"
                placeholder="Search jobs by title, location or keyword..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {departments.length > 2 && (
              <div className={styles.deptFilter}>
                <FaFilter className={styles.filterIcon} />
                <select
                  value={selectedDept}
                  onChange={(e) => setSelectedDept(e.target.value)}
                  aria-label="Filter by department"
                >
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>
                      {dept === 'All' ? 'All Departments' : dept}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
        )}

        {/* JOB LISTINGS OR EMPTY STATE */}
        {jobs.length === 0 ? (
          /* When NO jobs are posted */
          <div className={styles.emptyStateCard}>
            <div className={styles.emptyIconCircle}>
              <FaBriefcase />
            </div>
            <h3>Currently No Active Job Openings</h3>
            <p className={styles.emptySubtitle}>
              Filhal koi nayi vacancy available nahi hai, lekin hum hamesha behtareen aur mehnati talent ki talash mein rehte hain.
            </p>
            <p className={styles.emptyNote}>
              Agar aap Agronomy, Sales, Quality Control, ya Supply Chain mein hamari team ka hissa banna chahte hain, to apna resume neeche diye gaye button se bhejiye. Hamari HR team nayi position aane par aapse rabta karegi.
            </p>
            <div className={styles.emptyActions}>
              <button
                type="button"
                onClick={() => openApplyModal(null)}
                className={styles.primaryBtn}
              >
                <FaEnvelope /> Drop Your CV / Resume
              </button>
              <a href={contactInfo.phoneHref} className={styles.secondaryEmptyBtn}>
                <FaPhoneAlt /> Contact HR: {contactInfo.phone}
              </a>
            </div>
          </div>
        ) : filteredJobs.length === 0 ? (
          /* When filters yield no match */
          <div className={styles.noMatchCard}>
            <p>No jobs found matching your search criteria.</p>
            <button
              type="button"
              onClick={() => {
                setSearchTerm('');
                setSelectedDept('All');
              }}
              className={styles.resetFilterBtn}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          /* Normal Job Listings Grid */
          <div className={styles.openingsGrid}>
            {filteredJobs.map((job) => (
              <article key={job.id} className={styles.jobCard}>
                <div className={styles.jobTop}>
                  <span className={styles.jobDept}>{job.department}</span>
                  <span className={styles.jobType}>{job.type}</span>
                </div>
                <h3 className={styles.jobTitle}>{job.title}</h3>
                <div className={styles.jobMeta}>
                  <span><FaMapMarkerAlt /> {job.location}</span>
                  {job.experience && <span><FaBriefcase /> {job.experience}</span>}
                  {job.qualification && <span>🎓 {job.qualification}</span>}
                  {job.deadline && (
                    <span className={styles.jobDeadline}>
                      <FaCalendarAlt /> Deadline: {job.deadline}
                    </span>
                  )}
                </div>
                <p className={styles.jobDesc}>{job.description}</p>
                <div className={styles.jobFooter}>
                  <button
                    type="button"
                    onClick={() => openApplyModal(job)}
                    className={styles.applyBtn}
                  >
                    Apply Now ↗
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
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
            <button
              type="button"
              onClick={() => openApplyModal(null)}
              className={styles.applyContactLink}
            >
              <FaEnvelope /> {contactInfo.email}
            </button>
            <a href={contactInfo.phoneHref} className={styles.applyContactLink}>
              <FaPhoneAlt /> {contactInfo.phone}
            </a>
          </div>
        </div>
      </div>

      {/* APPLY VIA EMAIL MODAL */}
      {activeApplicationJob && (
        <div className={styles.modalOverlay} onClick={closeApplyModal}>
          <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <div>
                <span className={styles.modalKicker}>Job Application</span>
                <h2>{activeApplicationJob.title}</h2>
              </div>
              <button
                type="button"
                onClick={closeApplyModal}
                className={styles.modalCloseBtn}
                aria-label="Close dialog"
              >
                &times;
              </button>
            </div>

            <div className={styles.modalBody}>
              <div className={styles.receiverBox}>
                <div className={styles.receiverLabel}>
                  <span>Receiver (Company Email)</span>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className={styles.copyBtn}
                    title="Copy email address"
                  >
                    {copiedEmail ? (
                      <>
                        <FaCheck /> Copied!
                      </>
                    ) : (
                      <>
                        <FaCopy /> Copy Email
                      </>
                    )}
                  </button>
                </div>
                <div className={styles.receiverEmail}>{contactInfo.email}</div>
              </div>

              <div className={styles.subjectBox}>
                <span className={styles.boxLabel}>Email Subject</span>
                <p className={styles.subjectText}>{getSubject(activeApplicationJob)}</p>
              </div>

              <div className={styles.instructionsBox}>
                <p className={styles.instructionHeading}>📎 What to include in your email:</p>
                <ul>
                  <li>Your updated <strong>CV / Resume</strong> attached as a PDF or Word document.</li>
                  <li>Your <strong>Full Name</strong>, <strong>Contact Number / WhatsApp</strong>, and <strong>City</strong>.</li>
                  <li>Brief note on your relevant experience & qualifications.</li>
                </ul>
              </div>

              <div className={styles.sendActionButtons}>
                <a
                  href={getGmailWebUrl(activeApplicationJob)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.gmailBtn}
                >
                  <FaEnvelope /> Send via Gmail (Browser) <FaExternalLinkAlt size={12} />
                </a>

                <a
                  href={getMailtoUrl(activeApplicationJob)}
                  className={styles.defaultMailBtn}
                >
                  <FaBriefcase /> Open Default Mail App (Outlook / Phone)
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Career;
