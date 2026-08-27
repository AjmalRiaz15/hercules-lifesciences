import React, { useState, useEffect, useMemo } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { FaArrowLeft, FaCalendarAlt, FaSearchPlus, FaTimes } from 'react-icons/fa';
import { cropsData } from '../../data/cropsData';
import { productsData } from '../../data/productsData';
import styles from './CropDetail.module.css';

export default function CropDetail() {
  const { cropSlug } = useParams();
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const crop = cropsData.find((c) => c.slug === cropSlug || c.id === cropSlug);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsLightboxOpen(false);
      }
    };
    if (isLightboxOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isLightboxOpen]);

  const matchedProducts = useMemo(() => {
    if (!crop || !crop.recommendedProducts) return [];
    const results = [];
    const addedKeys = new Set();

    crop.recommendedProducts.forEach((term) => {
      const found = productsData.find((p) => {
        const key = p.groupKey || p.slug;
        if (addedKeys.has(key)) return false;
        const nameLower = p.name.toLowerCase();
        const groupTitleLower = (p.groupTitle || '').toLowerCase();
        const slugLower = p.slug.toLowerCase();
        const termLower = term.toLowerCase();
        return (
          nameLower.includes(termLower) ||
          groupTitleLower.includes(termLower) ||
          slugLower.includes(termLower)
        );
      });

      if (found) {
        const key = found.groupKey || found.slug;
        addedKeys.add(key);
        results.push({
          ...found,
          displayName: found.groupTitle || found.name
        });
      }
    });

    return results;
  }, [crop]);

  if (!crop) {
    return <Navigate to="/crops" replace />;
  }

  const flyer = crop.flyerImage || crop.image;

  return (
    <section className={styles.page}>
      <div className={styles.container}>
        {/* Breadcrumbs */}
        <div className={styles.breadcrumbs}>
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/crops">Crops</Link>
          <span>/</span>
          <span>{crop.name}</span>
        </div>

        {/* Top Header */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={styles.badgeWrap}>
              <span className={styles.seasonBadge}>
                <FaCalendarAlt /> {crop.season}
              </span>
              <span className={styles.sciBadge}>{crop.scientificName}</span>
            </div>
            <h1 className={styles.cropTitle}>
              {crop.name} <span className={styles.urduTitle}>({crop.urduName})</span>
            </h1>
            <p className={styles.cropDesc}>{crop.description}</p>
          </div>

          <div className={styles.headerRight}>
            <Link to="/crops" className={styles.backBtn}>
              <FaArrowLeft /> Back to All Crops
            </Link>
          </div>
        </div>

        {/* Crops Quick Navigation Bar */}
        <div className={styles.quickNav}>
          <span className={styles.quickNavLabel}>Explore Crops:</span>
          <div className={styles.navChips}>
            {cropsData.map((item) => {
              const isActive = item.slug === crop.slug;
              return (
                <Link
                  key={item.id}
                  to={`/crops/${item.slug}`}
                  className={`${styles.navChip} ${isActive ? styles.navChipActive : ''}`}
                >
                  <img src={item.image} alt={item.name} className={styles.chipAvatar} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Main Flyer / Leaflet Card */}
        <div className={styles.flyerCard}>
          <div className={styles.flyerHeader}>
            <div>
              <p className={styles.flyerKicker}>Crop Protection & Advisory Schedule</p>
              <h2 className={styles.flyerHeading}>{crop.name} Advisory & Solution Guide</h2>
            </div>
            <div className={styles.clickHintBadge}>
              <FaSearchPlus /> Click image to enlarge
            </div>
          </div>

          <div
            className={styles.flyerImageWrap}
            onClick={() => setIsLightboxOpen(true)}
            role="button"
            tabIndex={0}
            title="Click to view full resolution"
          >
            <div className={styles.imageOverlayHint}>
              <span className={styles.hintPill}>
                <FaSearchPlus /> Click to view full resolution
              </span>
            </div>
            <img
              src={flyer}
              alt={`${crop.name} Advisory Flyer Guide`}
              className={styles.flyerImage}
            />
          </div>
        </div>

        {/* Recommended Products Grid Section */}
        {matchedProducts.length > 0 && (
          <div className={styles.recommendSection}>
            <div className={styles.recommendHeader}>
              <p className={styles.recKicker}>Hercules Agronomy Solutions</p>
              <h3 className={styles.recTitle}>Recommended Products for {crop.name}</h3>
              <p className={styles.recSub}>
                Explore Hercules specialized crop protection and nutritional formulations for optimal yield in {crop.name}.
              </p>
            </div>

            <div className={styles.productGrid}>
              {matchedProducts.map((product) => (
                <Link
                  key={product.groupKey || product.id}
                  to={`/products/${product.slug}`}
                  className={styles.productCard}
                  title={`View details for ${product.displayName || product.name}`}
                >
                  <div className={styles.productImgWrap}>
                    <img
                      src={product.image}
                      alt={product.displayName || product.name}
                      className={styles.productImg}
                      loading="lazy"
                    />
                  </div>
                  <div className={styles.productBody}>
                    <div className={styles.productMeta}>
                      <span className={styles.productCategory}>{product.category}</span>
                    </div>
                    <h4 className={styles.productName}>{product.displayName || product.name}</h4>
                    <p className={styles.productDesc}>{product.description}</p>
                    <span className={styles.viewDetailBtn}>
                      View product details →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* In-Page Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className={styles.lightboxOverlay}
          onClick={() => setIsLightboxOpen(false)}
        >
          <div
            className={styles.lightboxContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className={styles.closeBtn}
              onClick={() => setIsLightboxOpen(false)}
              aria-label="Close full view"
            >
              <FaTimes />
            </button>
            <img
              src={flyer}
              alt={`${crop.name} Advisory Flyer Full`}
              className={styles.lightboxImage}
            />
          </div>
        </div>
      )}
    </section>
  );
}
