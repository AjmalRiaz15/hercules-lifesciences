import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaChevronDown, FaChevronLeft } from 'react-icons/fa';
import { navItems } from '../../../data/navigationData';
import { productCategories } from '../../../data/productCategories';
import styles from './Navbar.module.css';

function Navbar() {
  const location = useLocation();
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isFertilizerOpen, setIsFertilizerOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    setIsProductsOpen(false);
    setIsFertilizerOpen(false);
    setIsDrawerOpen(false);
  }, [location.pathname, location.search]);

  useEffect(() => {
    const onEscape = (event) => {
      if (event.key === 'Escape') {
        setIsDrawerOpen(false);
        setIsProductsOpen(false);
        setIsFertilizerOpen(false);
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

  const closeAllMenus = () => {
    setIsProductsOpen(false);
    setIsFertilizerOpen(false);
    setIsDrawerOpen(false);
  };

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

      {isDrawerOpen && (
        <button
          type="button"
          className={styles.backdrop}
          aria-label="Close menu"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}

      <nav className={`${styles.nav} ${isDrawerOpen ? styles.navOpen : ''}`} aria-label="Main navigation">
        {navItems.map((item) => {
          if (item.label === 'Products') {
            return (
              <div
                key={item.to}
                className={styles.dropdown}
                onMouseLeave={() => {
                  setIsFertilizerOpen(false);
                }}
              >
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
                    {productCategories.map((category) => {
                      if (category.subcategories && category.subcategories.length > 0) {
                        return (
                          <div
                            key={category.slug}
                            className={styles.nestedDropdown}
                            onMouseEnter={() => setIsFertilizerOpen(true)}
                            onMouseLeave={() => setIsFertilizerOpen(false)}
                          >
                            <div className={styles.nestedHeader}>
                              <Link
                                className={styles.dropdownItem}
                                to={`/products?type=${category.slug}`}
                                onClick={closeAllMenus}
                              >
                                {category.label}
                              </Link>
                              <button
                                type="button"
                                className={`${styles.nestedChevronBtn} ${isFertilizerOpen ? styles.nestedChevronOpen : ''}`}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setIsFertilizerOpen((prev) => !prev);
                                }}
                                aria-label="Toggle fertilizer subcategories"
                                aria-expanded={isFertilizerOpen}
                              >
                                <FaChevronLeft className={styles.desktopChevron} aria-hidden="true" />
                                <FaChevronDown className={styles.mobileChevron} aria-hidden="true" />
                              </button>
                            </div>

                            <div className={`${styles.nestedMenu} ${isFertilizerOpen ? styles.nestedMenuOpen : ''}`}>
                              <Link
                                className={styles.nestedDropdownItem}
                                to={`/products?type=${category.slug}`}
                                onClick={closeAllMenus}
                              >
                                {category.label}
                              </Link>
                              {category.subcategories.map((sub) => (
                                <Link
                                  key={sub.slug}
                                  className={styles.nestedDropdownItem}
                                  to={`/products?type=${sub.slug}`}
                                  onClick={closeAllMenus}
                                >
                                  {sub.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        );
                      }

                      return (
                        <Link
                          key={category.slug}
                          className={styles.dropdownItem}
                          to={`/products?type=${category.slug}`}
                          onClick={closeAllMenus}
                        >
                          {category.label}
                        </Link>
                      );
                    })}
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
