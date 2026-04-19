import { useRef, useState } from 'react';
import styles from './ContactUs.module.css';

function ContactUs() {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comment: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    window.setTimeout(() => {
      setIsSuccess(true);
      setIsSubmitting(false);
    }, 800);
  };

  const onReset = () => {
    if (formRef.current) {
      formRef.current.reset();
    }
    setFormData({
      name: '',
      email: '',
      phone: '',
      comment: ''
    });
    setIsSuccess(false);
    setIsSubmitting(false);
  };

  return (
    <section className={styles.page}>
      <div className={styles.container}>
        {isSuccess && (
          <div className={styles.successOverlay}>
            <div className={styles.successCard}>
              <div className={styles.successIcon}>✓</div>
              <h1 className={styles.heading}>Thank You!</h1>
              <p className={styles.successText}>
                We have received your message and will get back to you shortly.
              </p>
              <button type="button" onClick={onReset} className={styles.backButton}>
                Send another message
              </button>
            </div>
          </div>
        )}

        <div className={styles.card}>
          <div className={styles.header}>
            <h1 className={styles.heading}>Get in Touch</h1>
            <p className={styles.subheading}>
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className={styles.contentWrapper}>
            <div className={styles.columnSection}>
              <h2 className={styles.sectionHeading}>Send us a Message</h2>
              <div className={styles.formCard}>
                <form ref={formRef} className={styles.form} onSubmit={onSubmit}>
            <div className={styles.rowFields}>
              <div className={styles.inputGroup}>
                <label className={styles.inputLabel} htmlFor="name">
                  Full Name <span className={styles.optional}>(Optional)</span>
                </label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="John Doe" 
                  className={styles.inputField}
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.inputLabel} htmlFor="email">
                  Email Address <span className={styles.required}>*</span>
                </label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="john@example.com" 
                  required 
                  className={styles.inputField}
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.inputLabel} htmlFor="phone">
                Phone Number <span className={styles.optional}>(Optional)</span>
              </label>
              <input 
                type="tel" 
                id="phone" 
                placeholder="+1 234 567 8900" 
                className={styles.inputField}
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.inputLabel} htmlFor="comment">
                Message <span className={styles.optional}>(Optional)</span>
              </label>
              <textarea 
                id="comment" 
                placeholder="Tell us how we can help you..." 
                className={styles.textareaField}
                value={formData.comment}
                onChange={handleChange}
              />
            </div>

            <div className={styles.submitWrap}>
              <button 
                type="submit" 
                className={styles.sendButton} 
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className={styles.spinner}></span>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </div>
          </form>
              </div>
            </div>

            <div className={styles.columnSection}>
              <h2 className={styles.sectionHeading}>Our Location</h2>
              <div className={styles.locationCard}>
                <div className={styles.mapSection}>
                <div className={styles.mapContainer}>
                  <iframe
                    title="Hercules Life Sciences Location - Multan, Pakistan"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3424.6891267234567!2d71.4346!3d30.1575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1sHercules%20Life%20Sciences%20Multan!2s30.1575%2C71.4346!5e0!3m2!1sen!2s!4v1713607200"
                    width="100%"
                    height="300"
                    style={{ border: 'none', borderRadius: '12px' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;