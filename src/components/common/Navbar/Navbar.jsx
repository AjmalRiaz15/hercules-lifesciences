import { NavLink } from 'react-router-dom';
import { navItems } from '../../../data/navigationData';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.nav} aria-label="Main navigation">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.to === '/'}
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
