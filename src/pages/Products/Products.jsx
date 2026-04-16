import { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { productsData } from '../../data/productsData';
import { productCategories, getCategoryBySlug } from '../../data/productCategories';
import { FaBug, FaShieldAlt, FaFlask, FaLeaf, FaSeedling, FaHome } from 'react-icons/fa';
import styles from './Products.module.css';

const categoryIcons = {
  Insecticide: FaBug,
  Fungicide: FaShieldAlt,
  Herbicide: FaFlask,
  Fertilizer: FaLeaf,
  Granious: FaSeedling,
  Household: FaHome
};

function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategorySlug = searchParams.get('type') || productCategories[0].slug;

  const activeCategoryMeta = useMemo(
    () => getCategoryBySlug(activeCategorySlug) || productCategories[0],
    [activeCategorySlug]
  );

  const filteredProducts = useMemo(
    () => productsData.filter((product) => product.category === activeCategoryMeta.name),
    [activeCategoryMeta.name]
  );

  const selectedCount = filteredProducts.length;

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

      <div className={styles.filterRow}>
        {productCategories.map((category) => {
          const Icon = categoryIcons[category.name] || FaLeaf;
          const isActive = activeCategorySlug === category.slug;
          const count = productsData.filter((product) => product.category === category.name).length;

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

      <section className={styles.catalog}>
        <div className={styles.sectionHeader}>
          <div>
            <p className={styles.sectionLabel}>Selected Type</p>
            <h2>{activeCategoryMeta.name}</h2>
            <p className={styles.sectionDescription}>{activeCategoryMeta.description}</p>
          </div>
          <span className={styles.sectionCount}>{selectedCount} items</span>
        </div>

        <div className={styles.grid}>
          {filteredProducts.map((product) => (
            <article key={product.id} className={styles.card}>
              <div className={styles.cardImageWrap}>
                <img className={styles.cardImage} src={product.image} alt={product.name} />
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardTop}>
                  <span className={styles.cardBadge}>{product.category}</span>
                  <span className={styles.cardType}>{product.category}</span>
                </div>
                <h3>{product.name}</h3>
                <p className={styles.cardDescription}>{product.description}</p>
                <Link className={styles.readMoreButton} to={`/products/${product.slug}`}>
                  Read more
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}

export default Products;
