import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Products', to: '/products' },
  { label: 'Seeds', to: '/seeds' },
  { label: 'Our Mission', to: '/our-mission' },
  { label: 'About Us', to: '/about-us' },
  { label: 'Contact', to: '/contact-us' }
];

function Navbar() {
  return (
    <nav className={styles.nav} aria-label="Main navigation">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}

export default Navbar;
