import styles from './Button.module.css';

function Button({ children, variant = 'primary', ...props }) {
  const className = `${styles.button} ${styles[variant] || styles.primary}`;

  return (
    <button type="button" className={className} {...props}>
      {children}
    </button>
  );
}

export default Button;
