import Navbar from '../common/Navbar/Navbar';
import Button from '../common/Button/Button';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.brandBlock}>
        <span className={styles.brand}>Hercules Life Sciences</span>
        <span className={styles.tagline}>Growing Better Every Season</span>
      </div>
      <Navbar />
      <Button variant="secondary">Partner With Us</Button>
    </header>
  );
}

export default Header;
