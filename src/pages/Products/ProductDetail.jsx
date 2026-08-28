import React, { useState, useEffect, useMemo } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { FaSearchPlus, FaTimes, FaCheckCircle, FaShieldAlt } from 'react-icons/fa';
import { productsData } from '../../data/productsData';
import { productCategories } from '../../data/productCategories';
import { getProductSpecs } from '../../data/productSpecsData';
import styles from './ProductDetail.module.css';

function ProductDetail() {
  const { productSlug } = useParams();
  const [activeView, setActiveView] = useState('product'); // 'product' | 'label'
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const product = productsData.find((item) => item.slug === productSlug);

  useEffect(() => {
    // Reset to product packaging view when navigating between products
    setActiveView('product');
  }, [productSlug]);

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

  const specs = useMemo(() => {
    return getProductSpecs(product);
  }, [product]);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const category = productCategories.find((item) => item.name === product.category);
  const relatedVariants = productsData.filter(
    (item) => item.groupKey === product.groupKey
  );

  const displayTitle = product.groupTitle || product.name;
  const currentImage = activeView === 'label' && product.labelImage ? product.labelImage : product.image;

  return (
    <section className={styles.page}>
      <div className={styles.container}>
        {/* Breadcrumbs */}
        <div className={styles.breadcrumbs}>
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to={`/products?type=${category?.slug || ''}`}>Products</Link>
          <span>/</span>
          <span>{displayTitle}</span>
        </div>

        <div className={styles.layout}>
          {/* Left Column: Main Image & Gallery Thumbnails */}
          <div className={styles.galleryColumn}>
            <div
              className={styles.imageWrap}
              onClick={() => setIsLightboxOpen(true)}
              role="button"
              tabIndex={0}
              title="Click to view full screen"
            >
              <div className={styles.imageOverlayHint}>
                <span className={styles.hintPill}>
                  <FaSearchPlus /> Click to enlarge {activeView === 'label' ? 'Label' : 'Packaging'}
                </span>
              </div>
              <img
                className={styles.image}
                src={currentImage}
                alt={`${displayTitle} - ${activeView === 'label' ? 'Label Leaflet' : 'Packaging'}`}
              />
            </div>

            {/* Gallery Thumbnails (Product & Label) */}
            {product.labelImage && (
              <div className={styles.thumbnailRow}>
                <button
                  type="button"
                  className={`${styles.thumbnailBtn} ${activeView === 'product' ? styles.thumbnailBtnActive : ''}`}
                  onClick={() => setActiveView('product')}
                  aria-label="View Product Packaging"
                  title="Product Packaging"
                >
                  <img
                    src={product.image}
                    alt={`${displayTitle} Packaging`}
                    className={styles.thumbImg}
                  />
                </button>

                <button
                  type="button"
                  className={`${styles.thumbnailBtn} ${activeView === 'label' ? styles.thumbnailBtnActive : ''}`}
                  onClick={() => setActiveView('label')}
                  aria-label="View Official Product Label"
                  title="Product Label"
                >
                  <img
                    src={product.labelImage}
                    alt={`${displayTitle} Label`}
                    className={styles.thumbImg}
                  />
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Product Content Details */}
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
              <h3 className={styles.descHeading}>Product Summary</h3>
              <p className={styles.description}>{product.fullDescription || product.description}</p>
            </div>

            <div className={styles.actions}>
              <Link className={styles.backButton} to={`/products?type=${category?.slug || ''}`}>
                Back to {product.category} Products
              </Link>
            </div>
          </div>
        </div>

        {/* Detailed Agronomy Specifications Section */}
        {specs && (
          <div className={styles.specsSection}>
            <div className={styles.specsMainHeader}>
              <h2 className={styles.specsMainTitle}>
                {displayTitle} {specs.urduName && specs.urduName !== displayTitle ? `(${specs.urduName})` : ''}
              </h2>
            </div>

            {/* About Product */}
            <div className={styles.specCard}>
              <h3 className={styles.specSectionHd}>About Product</h3>
              <ul className={styles.aboutBullets}>
                {specs.about.map((bullet, idx) => (
                  <li key={idx} className={styles.aboutBulletItem}>
                    <FaCheckCircle className={styles.bulletCheck} />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Content */}
            <div className={styles.specCard}>
              <h3 className={styles.specSectionHd}>TECHNICAL CONTENT</h3>
              <div className={styles.techContentBox}>
                <p className={styles.techText}>{specs.technicalContent}</p>
              </div>
            </div>

            {/* Features and Mode of Action */}
            <div className={styles.specCard}>
              <h3 className={styles.specSectionHd}>FEATURES AND MODE OF ACTION</h3>
              <p className={styles.modeText}>{specs.modeOfAction}</p>
            </div>

            {/* Recommended Dosage & Application Table */}
            <div className={styles.specCard}>
              <div className={styles.tableHeaderWrap}>
                <h3 className={styles.specSectionHd}>RECOMMENDED DOSAGE & APPLICATION TABLE</h3>
                <span className={styles.urduTableHeading}>سفارشات براۓ استعمال</span>
              </div>
              <div className={styles.tableResponsiveWrap}>
                <table className={styles.dosageTable}>
                  <thead>
                    <tr>
                      <th>Crop (فصل)</th>
                      <th>Target Pest / Disease (ہدف کیڑے / بیماریاں)</th>
                      <th>Dosage / Acre (فی ایکڑ مقدار)</th>
                      <th>Dilution in water (پانی کی مقدار)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {specs.dosageTable.map((row, idx) => (
                      <tr key={idx}>
                        <td className={styles.cropCol}>
                          <strong>{row.crop}</strong>
                        </td>
                        <td>{row.target}</td>
                        <td className={styles.dosageCol}>{row.dosage}</td>
                        <td className={styles.waterCol}>{row.water}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Urdu Safety & Usage Advisory */}
            <div className={`${styles.specCard} ${styles.urduCard}`}>
              <div className={styles.urduCardHeader}>
                <FaShieldAlt className={styles.shieldIcon} />
                <h3 className={styles.urduCardTitle}>حفاظتی تدابیر و ہدایات براۓ استعمال</h3>
              </div>
              <ul className={styles.urduList}>
                {specs.urduInstructions.map((inst, idx) => (
                  <li key={idx} className={styles.urduListItem}>
                    <span className={styles.urduBulletDot}>•</span>
                    <span>{inst}</span>
                  </li>
                ))}
              </ul>
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
              src={currentImage}
              alt={`${displayTitle} - Full Resolution View`}
              className={styles.lightboxImage}
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default ProductDetail;