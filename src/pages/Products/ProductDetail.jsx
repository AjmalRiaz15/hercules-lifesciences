import { Link, Navigate, useParams } from 'react-router-dom';
import { productsData } from '../../data/productsData';
import { productCategories } from '../../data/productCategories';
import styles from './ProductDetail.module.css';

const normalizeProductName = (name) =>
  name
    .replace(/\s*\([^)]*\)/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();

const formatSizeLabel = (packSize) => {
  const match = packSize.match(/^(\d+(?:\.\d+)?)\s*(ml|gm|g|kg)\b/i);

  if (!match) {
    return packSize;
  }

  const quantity = Number(match[1]);
  const unit = match[2].toLowerCase();

  if (unit === 'ml') {
    if (quantity >= 1000 && quantity % 1000 === 0) {
      return `${quantity / 1000} Ltr`;
    }

    return `${quantity} Mls`;
  }

  if (unit === 'kg') {
    return `${quantity} Kg`;
  }

  return `${quantity} Gm`;
};

function ProductDetail() {
  const { productSlug } = useParams();
  const product = productsData.find((item) => item.slug === productSlug);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const category = productCategories.find((item) => item.name === product.category);
  const relatedProducts = productsData.filter(
    (item) =>
      item.category === product.category &&
      normalizeProductName(item.name) === normalizeProductName(product.name)
  );

  const uniqueVariants = Array.from(
    new Map(relatedProducts.map((item) => [item.packSize.toLowerCase(), item])).values()
  );

  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <div className={styles.breadcrumbs}>
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to={`/products?type=${category?.slug || ''}`}>Products</Link>
          <span>/</span>
          <span>{product.name}</span>
        </div>

        <div className={styles.layout}>
          <div className={styles.imageWrap}>
            <img className={styles.image} src={product.image} alt={product.name} />
          </div>

          <div className={styles.content}>
            <p className={styles.category}>{product.category}</p>
            <h1>{product.name}</h1>
            <div className={styles.sizeBlock}>
              <p className={styles.sizeLabel}>Size: {formatSizeLabel(product.packSize)}</p>
              <div className={styles.sizeChips}>
                {uniqueVariants.map((variant) => {
                  const isActive = variant.slug === product.slug;

                  return (
                    <Link
                      key={variant.slug}
                      to={`/products/${variant.slug}`}
                      className={`${styles.sizeChip} ${isActive ? styles.sizeChipActive : ''}`}
                      aria-label={`${variant.name} size ${formatSizeLabel(variant.packSize)}`}
                    >
                      {formatSizeLabel(variant.packSize)}
                    </Link>
                  );
                })}
              </div>
            </div>
            <p className={styles.description}>{product.fullDescription || product.description}</p>

            <div className={styles.actions}>
              <Link className={styles.backButton} to={`/products?type=${category?.slug || ''}`}>
                Back to products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;