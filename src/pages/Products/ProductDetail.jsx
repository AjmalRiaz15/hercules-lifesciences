import { Link, Navigate, useParams } from 'react-router-dom';
import { productsData } from '../../data/productsData';
import { productCategories } from '../../data/productCategories';
import styles from './ProductDetail.module.css';

function ProductDetail() {
  const { productSlug } = useParams();
  const product = productsData.find((item) => item.slug === productSlug);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const category = productCategories.find((item) => item.name === product.category);
  const relatedVariants = productsData.filter(
    (item) => item.groupKey === product.groupKey
  );

  const displayTitle = product.groupTitle || product.name;

  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <div className={styles.breadcrumbs}>
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to={`/products?type=${category?.slug || ''}`}>Products</Link>
          <span>/</span>
          <span>{displayTitle}</span>
        </div>

        <div className={styles.layout}>
          <div className={styles.imageWrap}>
            <img className={styles.image} src={product.image} alt={displayTitle} />
          </div>

          <div className={styles.content}>
            <div className={styles.topMeta}>
              <span className={styles.categoryBadge}>{product.category}</span>
              {product.subCategory && product.subCategory !== product.category && (
                <span className={styles.subCategoryBadge}>{product.subCategory}</span>
              )}
            </div>

            <h1>{displayTitle}</h1>

            <div className={styles.sizeBlock}>
              <p className={styles.sizeLabel}>
                {relatedVariants.length > 1 ? 'Available Sizes & Formulations:' : 'Pack Size:'}{' '}
                <strong className={styles.activeSizeHighlight}>{product.variantLabel || product.packSize}</strong>
              </p>

              {relatedVariants.length > 1 && (
                <div className={styles.sizeChips}>
                  {relatedVariants.map((variant) => {
                    const isActive = variant.slug === product.slug;

                    return (
                      <Link
                        key={variant.id || variant.slug}
                        to={`/products/${variant.slug}`}
                        className={`${styles.sizeChip} ${isActive ? styles.sizeChipActive : ''}`}
                        aria-label={`${displayTitle} - ${variant.variantLabel || variant.packSize}`}
                      >
                        {variant.variantLabel || variant.packSize}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <div className={styles.descBlock}>
              <h3 className={styles.descHeading}>Product Description</h3>
              <p className={styles.description}>{product.fullDescription || product.description}</p>
            </div>

            <div className={styles.actions}>
              <Link className={styles.backButton} to={`/products?type=${category?.slug || ''}`}>
                Back to {product.category} Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;