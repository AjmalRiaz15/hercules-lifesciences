import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight, FaArrowRight } from 'react-icons/fa';
import { productsData } from '../../data/productsData';
import { productCategories } from '../../data/productCategories';
import styles from './Home.module.css';

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const groupedCategories = productCategories.map((category) => {
    const uniqueKeys = new Set(
      productsData
        .filter((product) => {
          if (category.name === 'Fertilizer') {
            return (
              product.category === 'Fertilizer' ||
              product.category === 'Special Nutrients' ||
              product.category === 'Soil Reclamation' ||
              product.category === 'Granules' ||
              product.category === 'Household' ||
              product.subCategory === 'Special Nutrients' ||
              product.subCategory === 'Soil Reclamation' ||
              product.subCategory === 'Granules' ||
              product.subCategory === 'Household'
            );
          }
          return product.category === category.name;
        })
        .map((p) => p.groupKey || p.slug)
    );

    return {
      ...category,
      count: uniqueKeys.size
    };
  });

  const slides = [
    {
      image: '/images/home-banner-primary.jpeg',
      position: 'left center'
    },
    {
      image: '/images/home-banner-secondary.jpeg',
      position: 'left center'
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
      <div className={styles.sliderWrap}>
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
                backgroundImage: `url(${slide.image})`,
                backgroundPosition: slide.position || 'center center'
              }}
            />
          ))}

          <button
            onClick={prevSlide}
            className={styles.navButton}
            aria-label="Previous slide"
          >
            <FaChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className={`${styles.navButton} ${styles.rightArrow}`}
            aria-label="Next slide"
          >
            <FaChevronRight size={20} />
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
      </div>

      <section className={styles.productsSection} id="products">
        <div className={styles.sectionHeader}>
          <p className={styles.sectionKicker}>Recently added our store</p>
          <h2 className={styles.sectionHeading}>Product Categories</h2>
        </div>

        <div className={styles.categoryGrid}>
          {groupedCategories.map((category) => (
            <Link
              key={category.name}
              className={styles.categoryCard}
              to={`/products?type=${category.slug}`}
            >
              <div className={styles.categoryImageWrap}>
                <img
                  className={styles.categoryImage}
                  src={category.image}
                  alt={category.label}
                  loading="lazy"
                />
              </div>

              <div className={styles.categoryFooter}>
                <div className={styles.categoryInfo}>
                  <h3 className={styles.categoryName}>{category.label}</h3>
                  <p className={styles.categoryCount}>{category.count} Items</p>
                </div>
                <div className={styles.categoryArrowCircle}>
                  <FaArrowRight className={styles.categoryArrowIcon} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
