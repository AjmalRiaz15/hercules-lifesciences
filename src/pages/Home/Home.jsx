import { useAppContext } from '../../context/AppContext';
import styles from './Home.module.css';

function Home() {
  const { companyName } = useAppContext();

  return (
    <section className={styles.page}>
      <h1>Welcome to {companyName}</h1>
      <p>
        We help farmers improve yield and resilience with research-backed products
        and precision agriculture guidance.
      </p>
    </section>
  );
}

export default Home;
