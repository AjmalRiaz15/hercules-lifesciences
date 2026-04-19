import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import { navItems } from '../../../data/navigationData';
import { productCategories } from '../../../data/productCategories';
import styles from './Navbar.module.css';

function Navbar() {
  const location = useLocation();
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    setIsProductsOpen(false);
    setIsDrawerOpen(false);
  }, [location.pathname, location.search]);

  useEffect(() => {
    const onEscape = (event) => {
      if (event.key === 'Escape') {
        setIsDrawerOpen(false);
        setIsProductsOpen(false);
      }
    };

    window.addEventListener('keydown', onEscape);
    return () => window.removeEventListener('keydown', onEscape);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isDrawerOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isDrawerOpen]);

  return (
    <>
      <button
        type="button"
        className={styles.menuButton}
        onClick={() => setIsDrawerOpen((open) => !open)}
        aria-label={isDrawerOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isDrawerOpen}
      >
        <span className={styles.menuLine} />
        <span className={styles.menuLine} />
        <span className={styles.menuLine} />
      </button>

      {isDrawerOpen && <button type="button" className={styles.backdrop} aria-label="Close menu" onClick={() => setIsDrawerOpen(false)} />}

      <nav className={`${styles.nav} ${isDrawerOpen ? styles.navOpen : ''}`} aria-label="Main navigation">
        {navItems.map((item) => {
          if (item.label === 'Products') {
            return (
              <div key={item.to} className={styles.dropdown}>
                <button
                  type="button"
                  className={`${styles.link} ${location.pathname.startsWith('/products') ? styles.active : ''} ${styles.dropdownToggle}`}
                  onClick={() => setIsProductsOpen((open) => !open)}
                  aria-expanded={isProductsOpen}
                >
                  {item.label}
                  <span className={`${styles.chevron} ${isProductsOpen ? styles.chevronOpen : ''}`}>
                    <FaChevronDown aria-hidden="true" />
                  </span>
                </button>

                {isProductsOpen && (
                  <div className={styles.dropdownMenu}>
                    <Link className={styles.dropdownItem} to="/products" onClick={() => setIsProductsOpen(false)}>
                      All Products
                    </Link>

                    {productCategories.map((category) => (
                      <Link
                        key={category.slug}
                        className={styles.dropdownItem}
                        to={`/products?type=${category.slug}`}
                        onClick={() => setIsProductsOpen(false)}
                      >
                        {category.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          }

          return (
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
          );
        })}
      </nav>
    </>
  );
}

export default Navbar;
