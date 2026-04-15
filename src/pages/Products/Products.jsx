import { productsData } from '../../data/productsData';
import { formatCurrency } from '../../utils/helpers';
import {
  FaSeedling,
  FaLeaf,
  FaShieldAlt,
  FaFlask,
  FaBoxOpen,
  FaArrowRight
} from 'react-icons/fa';
import styles from './Products.module.css';

const categoryMeta = [
  {
    name: 'Crop Nutrition',
    icon: FaLeaf,
    description: 'Balanced inputs that help crops grow stronger and perform better.',
    accent: 'nutrition'
  },
  {
    name: 'Bio Stimulant',
    icon: FaSeedling,
    description: 'Growth-support products designed to improve vigor and stress tolerance.',
    accent: 'stimulant'
  },
  {
    name: 'Fungicide',
    icon: FaShieldAlt,
    description: 'Protection solutions that defend crops against fungal pressure.',
    accent: 'fungicide'
  },
  {
    name: 'Herbicide',
    icon: FaFlask,
    description: 'Selective weed control products for cleaner, healthier fields.',
    accent: 'herbicide'
  }
];

const groupedProducts = categoryMeta.map((category) => ({
  ...category,
  products: productsData.filter((product) => product.category === category.name)
}));

function Products() {
  return (
    <section className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>Product Categories</p>
          <h1>Browse products by category</h1>
          <p className={styles.intro}>
            A clearer catalog view for farmers and distributors, grouped by product type so the
            right solution is easier to find.
          </p>
        </div>

        <div className={styles.heroStats}>
          <div className={styles.statCard}>
            <span className={styles.statValue}>{categoryMeta.length}</span>
            <span className={styles.statLabel}>Core categories</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statValue}>{productsData.length}</span>
            <span className={styles.statLabel}>Featured products</span>
          </div>
        </div>
      </header>

      <div className={styles.categoryGrid}>
        {groupedProducts.map((category) => {
          const Icon = category.icon;

          return (
            <article key={category.name} className={`${styles.categoryCard} ${styles[category.accent]}`}>
              <div className={styles.categoryHeader}>
                <span className={styles.iconWrap}>
                  <Icon />
                </span>
                <div>
                  <h2>{category.name}</h2>
                  <p>{category.products.length} products</p>
                </div>
              </div>

              <p className={styles.categoryText}>{category.description}</p>

              <a className={styles.categoryLink} href={`#${category.name.toLowerCase().replace(/\s+/g, '-')}`}>
                View category <FaArrowRight />
              </a>
            </article>
          );
        })}
      </div>

      <div className={styles.catalog}>
        {groupedProducts.map((category) => (
          <section
            key={category.name}
            id={category.name.toLowerCase().replace(/\s+/g, '-')}
            className={styles.categorySection}
          >
            <div className={styles.sectionHeader}>
              <div>
                <p className={styles.sectionLabel}>Category</p>
                <h2>{category.name}</h2>
              </div>
              <span className={styles.sectionCount}>{category.products.length} items</span>
            </div>

            <div className={styles.grid}>
              {category.products.map((product) => (
                <article key={product.id} className={styles.card}>
                  <div className={styles.cardTop}>
                    <span className={styles.cardBadge}>{product.category}</span>
                    <FaBoxOpen className={styles.cardIcon} />
                  </div>
                  <h3>{product.name}</h3>
                  <p className={styles.cardPrice}>{formatCurrency(product.price)}</p>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}

export default Products;
