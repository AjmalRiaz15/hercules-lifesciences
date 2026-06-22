import { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { productsData } from '../../data/productsData';
import { productCategories, getCategoryBySlug } from '../../data/productCategories';
import { FaBug, FaShieldAlt, FaFlask, FaLeaf, FaSeedling, FaHome, FaCubes } from 'react-icons/fa';
import styles from './Products.module.css';

const categoryIcons = {
  Insecticide: FaBug,
  Fungicide: FaShieldAlt,
  Herbicide: FaFlask,
  Fertilizer: FaLeaf,
  'Special Nutrients': FaCubes,
  'Soil Reclamation': FaSeedling,
  Granules: FaSeedling,
  Household: FaHome
};

const normalizeProductName = (name) =>
  name
    .replace(/\s*\([^)]*\)/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();

const formatProductName = (name) =>
  name
    .replace(/\s*\([^)]*\)/g, '')
    .replace(/\s+/g, ' ')
    .trim();

function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategorySlug = searchParams.get('type');

  const activeCategoryMeta = useMemo(
    () => (activeCategorySlug ? getCategoryBySlug(activeCategorySlug) : null),
    [activeCategorySlug]
  );

  const hasActiveType = Boolean(activeCategoryMeta);

  const filteredProducts = useMemo(
    () =>
      activeCategoryMeta
        ? productsData.filter((product) => product.category === activeCategoryMeta.name)
        : [],
    [activeCategoryMeta]
  );

  const uniqueProducts = useMemo(() => {
    const uniqueMap = new Map();

    filteredProducts.forEach((product) => {
      const normalizedName = normalizeProductName(product.name);
      if (!uniqueMap.has(normalizedName)) {
        uniqueMap.set(normalizedName, {
          ...product,
          displayName: formatProductName(product.name)
        });
      }
    });

    return Array.from(uniqueMap.values());
  }, [filteredProducts]);

  const categoryCounts = useMemo(() => {
    return productCategories.reduce((accumulator, category) => {
      const uniqueNames = new Set(
        productsData
          .filter((product) => product.category === category.name)
          .map((product) => normalizeProductName(product.name))
      );

      accumulator[category.name] = uniqueNames.size;
      return accumulator;
    }, {});
  }, []);

  const selectedCount = uniqueProducts.length;

  const handleCategorySelect = (categorySlug) => {
    setSearchParams({ type: categorySlug });
  };

  return (
    <section className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>Product Categories</p>
          <h1>Browse products by type</h1>
          <p className={styles.intro}>
            Select a medicine type from the navbar or here to see matching compact cards with
            image, short description, and a read more view for the full product detail.
          </p>
        </div>

        <div className={styles.heroStats}>
          <div className={styles.statCard}>
            <span className={styles.statValue}>{productCategories.length}</span>
            <span className={styles.statLabel}>Core types</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statValue}>{productsData.length}</span>
            <span className={styles.statLabel}>Featured products</span>
          </div>
        </div>
      </header>

      {!hasActiveType && (
        <div className={styles.filterRow}>
          {productCategories.map((category) => {
            const Icon = categoryIcons[category.name] || FaLeaf;
            const isActive = activeCategorySlug === category.slug;
            const count = categoryCounts[category.name] || 0;

            return (
              <button
                key={category.name}
                type="button"
                onClick={() => handleCategorySelect(category.slug)}
                className={`${styles.categoryCard} ${styles[category.accent]} ${isActive ? styles.activeCategoryCard : ''}`}
              >
                <div className={styles.categoryHeader}>
                  <span className={styles.iconWrap}>
                    <Icon />
                  </span>
                  <div>
                    <h2>{category.name}</h2>
                    <p>{count} products</p>
                  </div>
                </div>

                <p className={styles.categoryText}>{category.description}</p>

                <span className={styles.categoryLink}>View products</span>
              </button>
            );
          })}
        </div>
      )}

      {hasActiveType && (
        <section className={styles.catalog}>
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.sectionLabel}>Selected Type</p>
              <h2>{activeCategoryMeta?.name}</h2>
              <p className={styles.sectionDescription}>{activeCategoryMeta?.description}</p>
            </div>
            <div className={styles.sectionActions}>
              <button type="button" className={styles.clearSelection} onClick={() => setSearchParams({})}>
                Browse all categories
              </button>
              <span className={styles.sectionCount}>{selectedCount} items</span>
            </div>
          </div>

          <div className={styles.grid}>
            {uniqueProducts.map((product) => (
              <article key={product.id} className={styles.card}>
                <div className={styles.cardImageWrap}>
                  <img className={styles.cardImage} src={product.image} alt={product.name} />
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.cardTop}>
                    <span className={styles.cardBadge}>{product.category}</span>
                    <span className={styles.cardType}>{product.category}</span>
                  </div>
                  <h3>{product.displayName || product.name}</h3>
                  <p className={styles.cardDescription}>{product.description}</p>
                  <Link className={styles.readMoreButton} to={`/products/${product.slug}`}>
                    Read more
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </section>
  );
}

export default Products;
