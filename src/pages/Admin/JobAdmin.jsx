import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaBriefcase,
  FaPlus,
  FaTrash,
  FaEdit,
  FaLock,
  FaUnlock,
  FaArrowLeft,
  FaBuilding,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaRedo,
  FaEye,
  FaCalendarAlt
} from 'react-icons/fa';
import { useJobs } from '../../context/JobContext';
import { departmentOptions, jobTypeOptions, locationOptions } from '../../data/jobData';
import styles from './JobAdmin.module.css';

function JobAdmin() {
  const { jobs, addJob, updateJob, deleteJob, resetToDefaultJobs, clearAllJobs } = useJobs();

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('hercules_admin_auth') === 'true';
  });
  const [passcode, setPasscode] = useState('');
  const [authError, setAuthError] = useState('');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingJobId, setEditingJobId] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const [formData, setFormData] = useState({
    title: '',
    department: departmentOptions[0],
    location: locationOptions[0],
    type: jobTypeOptions[0],
    experience: '',
    qualification: '',
    deadline: '',
    description: ''
  });

  const handleLogin = (e) => {
    e.preventDefault();
    if (passcode.trim() === 'admin123' || passcode.trim() === 'admin') {
      setIsAuthenticated(true);
      sessionStorage.setItem('hercules_admin_auth', 'true');
      setAuthError('');
    } else {
      setAuthError('Invalid passcode. Use "admin123" to login.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('hercules_admin_auth');
    setPasscode('');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const openCreateModal = () => {
    setEditingJobId(null);
    setFormData({
      title: '',
      department: departmentOptions[0],
      location: locationOptions[0],
      type: jobTypeOptions[0],
      experience: '',
      qualification: '',
      deadline: '',
      description: ''
    });
    setIsModalOpen(true);
  };

  const openEditModal = (job) => {
    setEditingJobId(job.id);
    setFormData({
      title: job.title || '',
      department: job.department || departmentOptions[0],
      location: job.location || locationOptions[0],
      type: job.type || jobTypeOptions[0],
      experience: job.experience || '',
      qualification: job.qualification || '',
      deadline: job.deadline || '',
      description: job.description || ''
    });
    setIsModalOpen(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.description.trim()) {
      alert('Please fill in Job Title and Description.');
      return;
    }

    if (editingJobId) {
      updateJob(editingJobId, formData);
      setSuccessMessage('Job posting updated successfully!');
    } else {
      addJob(formData);
      setSuccessMessage('New job vacancy posted successfully!');
    }

    setIsModalOpen(false);
    setTimeout(() => setSuccessMessage(''), 4000);
  };

  const handleDelete = (id, title) => {
    if (window.confirm(`Are you sure you want to delete the posting for "${title}"?`)) {
      deleteJob(id);
      setSuccessMessage(`Job "${title}" deleted successfully.`);
      setTimeout(() => setSuccessMessage(''), 4000);
    }
  };

  if (!isAuthenticated) {
    return (
      <section className={styles.loginContainer}>
        <div className={styles.loginCard}>
          <div className={styles.loginIconWrap}>
            <FaLock />
          </div>
          <h2>Admin Job Portal</h2>
          <p className={styles.loginSubtitle}>
            Please enter your administrator passcode to manage Hercules Life Sciences job postings.
          </p>

          <form onSubmit={handleLogin} className={styles.loginForm}>
            <div className={styles.inputGroup}>
              <label htmlFor="passcode">Admin Passcode</label>
              <input
                id="passcode"
                type="password"
                placeholder="Enter passcode (e.g. admin123)"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                autoFocus
              />
            </div>

            {authError && <p className={styles.errorMessage}>{authError}</p>}

            <button type="submit" className={styles.loginBtn}>
              <FaUnlock /> Unlock Portal
            </button>
          </form>

          <div className={styles.loginFooter}>
            <Link to="/career" className={styles.backLink}>
              <FaArrowLeft /> Back to Public Career Page
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.adminPage}>
      {/* Header */}
      <div className={styles.adminHeader}>
        <div className={styles.headerLeft}>
          <div className={styles.badge}>Administrator Control</div>
          <h1>Job Postings Manager</h1>
          <p className={styles.headerSubtitle}>
            Post, edit, and manage all career openings displayed on the website.
          </p>
        </div>

        <div className={styles.headerActions}>
          <Link to="/career" className={styles.viewPublicBtn} target="_blank" rel="noreferrer">
            <FaEye /> View Career Page
          </Link>
          <button type="button" onClick={handleLogout} className={styles.logoutBtn}>
            <FaLock /> Log Out
          </button>
        </div>
      </div>

      {/* Success Notification */}
      {successMessage && (
        <div className={styles.successBanner}>
          <FaCheckCircle />
          <span>{successMessage}</span>
        </div>
      )}

      {/* Stats & Quick Actions Bar */}
      <div className={styles.statsStrip}>
        <div className={styles.statBox}>
          <span className={styles.statNumber}>{jobs.length}</span>
          <span className={styles.statText}>Active Job Postings</span>
        </div>
        <div className={styles.statBox}>
          <span className={styles.statNumber}>
            {new Set(jobs.map((j) => j.department)).size}
          </span>
          <span className={styles.statText}>Departments</span>
        </div>
        <div className={styles.actionGroup}>
          <button type="button" onClick={openCreateModal} className={styles.primaryActionBtn}>
            <FaPlus /> Post New Job
          </button>
          <button
            type="button"
            onClick={() => {
              if (window.confirm('Reset jobs back to default demo listings?')) {
                resetToDefaultJobs();
                setSuccessMessage('Reset to default job listings.');
              }
            }}
            className={styles.secondaryActionBtn}
            title="Reset to default listings"
          >
            <FaRedo /> Reset Defaults
          </button>
          {jobs.length > 0 && (
            <button
              type="button"
              onClick={() => {
                if (window.confirm('Are you sure you want to remove ALL job postings to test the empty state?')) {
                  clearAllJobs();
                  setSuccessMessage('All jobs cleared. Career page is now showing empty state.');
                }
              }}
              className={styles.dangerActionBtn}
              title="Clear all jobs to test empty state"
            >
              <FaTrash /> Clear All
            </button>
          )}
        </div>
      </div>

      {/* Job Listings List/Table */}
      <div className={styles.tableCard}>
        <div className={styles.tableHeader}>
          <h2>Current Job Postings ({jobs.length})</h2>
          <p>These positions appear in real-time on the website Career page.</p>
        </div>

        {jobs.length === 0 ? (
          <div className={styles.emptyTableState}>
            <FaBriefcase className={styles.emptyIcon} />
            <h3>No jobs currently posted</h3>
            <p>
              The Career page is currently displaying the <strong>"No active openings"</strong> message.
              Click the button below to add your first job opening.
            </p>
            <button type="button" onClick={openCreateModal} className={styles.primaryActionBtn}>
              <FaPlus /> Post a Job Opening
            </button>
          </div>
        ) : (
          <div className={styles.jobList}>
            {jobs.map((job) => (
              <article key={job.id} className={styles.jobItem}>
                <div className={styles.jobInfo}>
                  <div className={styles.jobItemBadges}>
                    <span className={styles.deptBadge}>
                      <FaBuilding size={11} /> {job.department}
                    </span>
                    <span className={styles.typeBadge}>{job.type}</span>
                    {job.deadline && (
                      <span className={styles.deadBadge}>
                        <FaCalendarAlt size={11} /> Deadline: {job.deadline}
                      </span>
                    )}
                  </div>
                  <h3 className={styles.jobItemTitle}>{job.title}</h3>
                  <p className={styles.jobItemMeta}>
                    <span><FaMapMarkerAlt /> {job.location}</span>
                    <span><FaBriefcase /> {job.experience || 'Experience not specified'}</span>
                    {job.qualification && <span>🎓 {job.qualification}</span>}
                  </p>
                  <p className={styles.jobItemDesc}>{job.description}</p>
                </div>

                <div className={styles.jobActions}>
                  <button
                    type="button"
                    onClick={() => openEditModal(job)}
                    className={styles.editBtn}
                    title="Edit job details"
                  >
                    <FaEdit /> Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(job.id, job.title)}
                    className={styles.deleteBtn}
                    title="Delete job posting"
                  >
                    <FaTrash /> Delete
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* Post/Edit Job Modal Form */}
      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={() => setIsModalOpen(false)}>
          <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h2>{editingJobId ? 'Edit Job Posting' : 'Post a New Job Vacancy'}</h2>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className={styles.modalCloseBtn}
                aria-label="Close modal"
              >
                &times;
              </button>
            </div>

            <form onSubmit={handleFormSubmit} className={styles.jobForm}>
              <div className={styles.formGrid}>
                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                  <label htmlFor="jobTitle">Job Title *</label>
                  <input
                    id="jobTitle"
                    name="title"
                    type="text"
                    required
                    placeholder="e.g. Field Agronomist / Area Sales Officer"
                    value={formData.title}
                    onChange={handleInputChange}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="jobDept">Department / Category *</label>
                  <select
                    id="jobDept"
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                  >
                    {departmentOptions.map((dept) => (
                      <option key={dept} value={dept}>
                        {dept}
                      </option>
                    ))}
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="jobLocation">Location *</label>
                  <select
                    id="jobLocation"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                  >
                    {locationOptions.map((loc) => (
                      <option key={loc} value={loc}>
                        {loc}
                      </option>
                    ))}
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="jobType">Employment Type *</label>
                  <select
                    id="jobType"
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                  >
                    {jobTypeOptions.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="jobExp">Required Experience</label>
                  <input
                    id="jobExp"
                    name="experience"
                    type="text"
                    placeholder="e.g. 1-3 Years in Agronomy"
                    value={formData.experience}
                    onChange={handleInputChange}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="jobQual">Minimum Qualification</label>
                  <input
                    id="jobQual"
                    name="qualification"
                    type="text"
                    placeholder="e.g. B.Sc. Agriculture / BBA"
                    value={formData.qualification}
                    onChange={handleInputChange}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="jobDeadline">Application Deadline</label>
                  <input
                    id="jobDeadline"
                    name="deadline"
                    type="date"
                    value={formData.deadline}
                    onChange={handleInputChange}
                  />
                </div>

                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                  <label htmlFor="jobDesc">Job Description & Responsibilities *</label>
                  <textarea
                    id="jobDesc"
                    name="description"
                    rows="4"
                    required
                    placeholder="Describe the role, key responsibilities, and required candidate skills..."
                    value={formData.description}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className={styles.modalActions}>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className={styles.cancelBtn}
                >
                  Cancel
                </button>
                <button type="submit" className={styles.submitBtn}>
                  {editingJobId ? 'Save Changes' : 'Publish Job Opening'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

export default JobAdmin;
