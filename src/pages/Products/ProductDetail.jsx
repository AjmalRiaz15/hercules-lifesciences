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
            <p className={styles.packSize}>Weight / Volume: {product.packSize}</p>
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