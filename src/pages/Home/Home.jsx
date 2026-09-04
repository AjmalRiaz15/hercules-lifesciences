import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight, FaArrowRight } from 'react-icons/fa';
import { productsData } from '../../data/productsData';
import { productCategories } from '../../data/productCategories';
import styles from './Home.module.css';

function Home() {
  const slides = useMemo(() => [
    {
      id: 'primary',
      image: '/images/home-banner-primary.jpeg',
      alt: 'Hercules Life Sciences Crop Protection & Nutrition Banner'
    },
    {
      id: 'secondary',
      image: '/images/home-banner-secondary.jpeg',
      alt: 'Hercules Life Sciences Sugarcane Yield Booster Banner'
    }
  ], []);

  // Cloned array for seamless infinite right-to-left sliding
  const extendedSlides = useMemo(() => {
    if (slides.length <= 1) return slides;
    return [slides[slides.length - 1], ...slides, slides[0]];
  }, [slides]);

  const [activeIndex, setActiveIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Touch swipe support for mobile
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const groupedCategories = useMemo(() => {
    return productCategories.map((category) => {
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
  }, []);

  // Auto-play timer (slides smoothly every 3.5s)
  useEffect(() => {
    if (!isAutoPlay || slides.length <= 1) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => prev + 1);
    }, 3500);

    return () => clearInterval(timer);
  }, [isAutoPlay, slides.length]);

  // Re-enable smooth transition after instant clone-snap
  useEffect(() => {
    if (!isTransitioning) {
      const raf = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [isTransitioning]);

  const handleTransitionEnd = () => {
    if (activeIndex === extendedSlides.length - 1) {
      // Reached end clone -> jump to real first slide seamlessly
      setIsTransitioning(false);
      setActiveIndex(1);
    } else if (activeIndex === 0) {
      // Reached start clone -> jump to real last slide seamlessly
      setIsTransitioning(false);
      setActiveIndex(extendedSlides.length - 2);
    }
  };

  const nextSlide = () => {
    if (!isTransitioning) return;
    setActiveIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (!isTransitioning) return;
    setActiveIndex((prev) => prev - 1);
  };

  const goToSlide = (index) => {
    if (!isTransitioning) return;
    setActiveIndex(index + 1);
  };

  const handleTouchStart = (e) => {
    setIsAutoPlay(false);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) {
      setIsAutoPlay(true);
      return;
    }
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 40;
    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }
    setTouchStart(null);
    setTouchEnd(null);
    setIsAutoPlay(true);
  };

  const currentDotIndex = (activeIndex - 1 + slides.length) % slides.length;

  return (
    <div className={styles.homePage}>
      <div className={styles.sliderWrap}>
        <section
          className={styles.slider}
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          aria-label="Hercules Life Sciences Promotions"
        >
          {/* Horizontal Slide Track (Moves right-to-left) */}
          <div
            className={styles.sliderTrack}
            onTransitionEnd={handleTransitionEnd}
            style={{
              transform: `translateX(-${activeIndex * 100}%)`,
              transition: isTransitioning
                ? 'transform 0.65s cubic-bezier(0.25, 1, 0.5, 1)'
                : 'none'
            }}
          >
            {extendedSlides.map((slide, index) => {
              const isPrimary = slide.image.includes('primary');

              return (
                <div key={index} className={styles.slideItem}>
                  {/* Both banner images fit edge-to-edge inside container with zero blurred side/top bars */}
                  <img
                    src={slide.image}
                    alt={slide.alt || 'Hercules Life Sciences Banner'}
                    className={`${styles.slideMainImg} ${isPrimary ? styles.primaryBanner : styles.secondaryBanner}`}
                  />
                </div>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <button
            type="button"
            onClick={prevSlide}
            className={styles.navButton}
            aria-label="Previous slide"
          >
            <FaChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            className={`${styles.navButton} ${styles.rightArrow}`}
            aria-label="Next slide"
          >
            <FaChevronRight size={18} />
          </button>

          {/* Dots Indicator */}
          <div className={styles.dotsContainer}>
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goToSlide(index)}
                className={`${styles.dot} ${index === currentDotIndex ? styles.activeDot : ''}`}
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
