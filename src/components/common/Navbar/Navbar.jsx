import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { navItems } from '../../../data/navigationData';
import { productCategories } from '../../../data/productCategories';
import styles from './Navbar.module.css';

function Navbar() {
  const location = useLocation();
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  useEffect(() => {
    setIsProductsOpen(false);
  }, [location.pathname, location.search]);

  return (
    <nav className={styles.nav} aria-label="Main navigation">
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
                <span className={styles.chevron}>⌄</span>
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
  );
}

export default Navbar;
