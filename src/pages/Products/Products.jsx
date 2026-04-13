import { productsData } from '../../data/productsData';
import { formatCurrency } from '../../utils/helpers';
import styles from './Products.module.css';

function Products() {
  return (
    <section className={styles.page}>
      <h1>Crop Protection Products</h1>
      <div className={styles.grid}>
        {productsData.map((product) => (
          <article key={product.id} className={styles.card}>
            <h2>{product.name}</h2>
            <p>{product.category}</p>
            <p>{formatCurrency(product.price)}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Products;
