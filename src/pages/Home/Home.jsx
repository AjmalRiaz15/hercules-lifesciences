import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { productsData } from '../../data/productsData';
import styles from './Home.module.css';

const categoryMeta = [
  { name: 'Insecticide', description: 'Fast crop protection against harmful insects.' },
  { name: 'Fungicide', description: 'Protection against fungal pressure.' },
  { name: 'Herbicide', description: 'Selective solutions for weed control.' },
  { name: 'Fertilizer', description: 'Balanced inputs for stronger growth.' },
  { name: 'Granious', description: 'Granular formulations for even field coverage.' },
  { name: 'Household', description: 'Everyday protection products for home use.' }
];

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const groupedCategories = categoryMeta.map((category) => ({
    ...category,
    count: productsData.filter((product) => product.category === category.name).length
  }));

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d',
      heading: 'Gandum ki Double Pedawar',
      subheading: 'Premium Wheat Seeds for Maximum Yield',
      button: 'Shop Now'
    },
    {
      image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854',
      heading: 'Behtareen Cotton Seeds',
      subheading: 'High-Quality Cotton for Better Returns',
      button: 'Explore'
    },
    {
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399',
      heading: 'Zameen ki Taqat Barhao',
      subheading: 'Advanced Fertilizers for Fertile Soil',
      button: 'Learn More'
    },
    {
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449',
      heading: 'فصل کو محفوظ رکھو',
      subheading: 'Effective Pest Protection Solutions',
      button: 'Get Protected'
    }
  ];

  useEffect(() => {
    if (!isAutoPlay) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [isAutoPlay, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlay(false);
  };

  return (
    <div className={styles.homePage}>
      <section
        className={styles.slider}
        onMouseEnter={() => setIsAutoPlay(false)}
        onMouseLeave={() => setIsAutoPlay(true)}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${slide.image})`
            }}
          >
            <div className={styles.slideContent}>
              <h1 className={styles.slideHeading}>{slide.heading}</h1>
              <p className={styles.slideSubheading}>{slide.subheading}</p>
              <button className={styles.slideButton}>{slide.button}</button>
            </div>
          </div>
        ))}

        <button
          onClick={prevSlide}
          className={styles.navButton}
          aria-label="Previous slide"
        >
          <FaChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className={`${styles.navButton} ${styles.rightArrow}`}
          aria-label="Next slide"
        >
          <FaChevronRight size={24} />
        </button>

        <div className={styles.dotsContainer}>
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ''}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <section className={styles.productsSection} id="products">
        <div className={styles.sectionHeader}>
          <div>
            <p className={styles.sectionKicker}>Product Categories</p>
            <h2>Scroll down to explore products</h2>
          </div>
          <Link className={styles.sectionLink} to="/products">
            View full catalog
          </Link>
        </div>

        <div className={styles.categoryGrid}>
          {groupedCategories.map((category) => (
            <article key={category.name} className={styles.categoryCard}>
              <p className={styles.categoryCount}>{category.count} items</p>
              <h3>{category.name}</h3>
              <p>{category.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
