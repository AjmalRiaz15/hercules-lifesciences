import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight, FaChevronRight as FaArrow } from 'react-icons/fa';
import { cropsData } from '../../data/cropsData';
import styles from './Crops.module.css';

export default function Crops() {
  const scrollRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll > 0) {
      setScrollProgress((scrollLeft / maxScroll) * 100);
    } else {
      setScrollProgress(0);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', handleScroll);
      return () => el.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = 260;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <div className={styles.cropsPage}>
      <div className={styles.container}>
        {/* Main Header */}
        <h1 className={styles.pageTitle}>CROPS</h1>

        {/* Carousel Section */}
        <div className={styles.carouselWrap}>
          <div className={styles.cardsTrack} ref={scrollRef}>
            {cropsData.map((crop) => (
              <Link
                key={crop.id}
                to={`/crops/${crop.slug}`}
                className={styles.cropCard}
                title={`${crop.name} - ${crop.urduName}`}
              >
                <div className={styles.imageCircle}>
                  <img
                    src={crop.image}
                    alt={crop.name}
                    className={styles.cropImg}
                    loading="lazy"
                  />
                </div>
                <div className={styles.cropName}>
                  <span>{crop.name}</span>
                  <FaArrow className={styles.nameArrow} />
                </div>
              </Link>
            ))}
          </div>

          {/* Navigation Controls & Progress Track */}
          <div className={styles.sliderControls}>
            <button
              type="button"
              className={styles.navBtn}
              onClick={() => scroll('left')}
              aria-label="Previous crops"
            >
              <FaChevronLeft />
            </button>

            <div className={styles.progressBarWrap}>
              <div
                className={styles.progressBarFill}
                style={{ width: `${Math.max(15, scrollProgress)}%` }}
              />
            </div>

            <button
              type="button"
              className={styles.navBtn}
              onClick={() => scroll('right')}
              aria-label="Next crops"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
