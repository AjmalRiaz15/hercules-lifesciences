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
    </section>
  );
}

export default ContactUs;