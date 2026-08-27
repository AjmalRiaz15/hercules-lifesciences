import { useState, useEffect, useMemo } from 'react';
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

function useCountUp(target, duration = 1400) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const end = parseInt(target, 10);
    if (isNaN(end) || end === 0) {
      setCount(end || 0);
      return;
    }

    let startTime = null;
    let frameId;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * end));

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [target, duration]);

  return count;
}

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
        ? productsData.filter(
            (product) =>
              product.category === activeCategoryMeta.name ||
              product.subCategory === activeCategoryMeta.name
          )
        : [],
    [activeCategoryMeta]
  );

  const uniqueProducts = useMemo(() => {
    const uniqueMap = new Map();

    filteredProducts.forEach((product) => {
      const key = product.groupKey || product.slug;
      if (!uniqueMap.has(key)) {
        uniqueMap.set(key, {
          ...product,
          displayName: product.groupTitle || product.name
        });
      }
    });

    return Array.from(uniqueMap.values());
  }, [filteredProducts]);

  const categoryCounts = useMemo(() => {
    return productCategories.reduce((accumulator, category) => {
      const uniqueKeys = new Set(
        productsData
          .filter(
            (product) =>
              product.category === category.name ||
              product.subCategory === category.name
          )
          .map((product) => product.groupKey || product.slug)
      );

      accumulator[category.name] = uniqueKeys.size;
      return accumulator;
    }, {});
  }, []);

  const totalDistinctProducts = useMemo(() => {
    const totalSet = new Set(productsData.map((p) => p.groupKey || p.slug));
    return totalSet.size;
  }, []);

  const animatedCategoriesCount = useCountUp(productCategories.length, 1000);
  const animatedProductsCount = useCountUp(totalDistinctProducts, 1600);

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
            Select a category from the navbar or here to see matching cards with
            image, formulation description, and access to all sizes and variants in the product detail view.
          </p>
        </div>

        <div className={styles.heroStats}>
          <div className={styles.statCard}>
            <div className={styles.statTop}>
              <span className={styles.statValue}>{animatedCategoriesCount}</span>
              <span className={styles.statGlowDot}></span>
            </div>
            <span className={styles.statLabel}>Core types</span>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statTop}>
              <span className={styles.statValue}>{animatedProductsCount}</span>
              <span className={styles.statGlowDot}></span>
            </div>
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
              <Link
                key={product.groupKey || product.id}
                className={styles.card}
                to={`/products/${product.slug}`}
              >
                <div className={styles.cardImageWrap}>
                  <img className={styles.cardImage} src={product.image} alt={product.displayName || product.name} />
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.cardTop}>
                    <span className={styles.cardBadge}>{product.category}</span>
                    <span className={styles.cardType}>{product.category}</span>
                  </div>
                  <h3>{product.displayName || product.name}</h3>
                  <p className={styles.cardDescription}>{product.description}</p>
                  <span className={styles.readMoreButton}>
                    Read more
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </section>
  );
}

export default Products;
