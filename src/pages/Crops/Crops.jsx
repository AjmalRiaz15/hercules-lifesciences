import React, { useState, useEffect, useMemo } from 'react';
import { productsData } from '../../data/productsData';
import styles from './Crops.module.css';

function useCountUp(target, duration = 1400) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const end = parseInt(target, 10);
    if (isNaN(end) || end === 0) {
      setCount(end || 0);
      return;
    }

    let startTime = null;
    let frameId;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * end));

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [target, duration]);

  return count;
}

export default function Crops() {
  const totalDistinctProducts = useMemo(() => {
    const set = new Set(productsData.map((p) => p.groupKey || p.slug));
    return set.size;
  }, []);

  const animatedCrops = useCountUp(5, 1000);
  const animatedProducts = useCountUp(totalDistinctProducts, 1400);
  const animatedSeasons = useCountUp(2, 800);

  return (
    <div>
      {/* HERO */}
      <div className={styles.hero}>
        <div className={styles.pageBadge}>Crops / فصلیں</div>
        <h1 className={styles.heroTitle}>
          Our <em>Crop Solutions</em>
        </h1>
        <p className={styles.heroUrdu}>ہر فصل کے لیے بہترین زرعی حل</p>
        <p className={styles.heroDesc}>
          From wheat fields of Punjab to sugarcane farms of Sindh — Hercules Life Sciences provides science-backed products for every major crop grown in Pakistan.
        </p>
        <div className={styles.heroPills}>
          <span className={styles.hp}>🌾 Wheat / گندم</span>
          <span className={styles.hp}>🌿 Cotton / کپاس</span>
          <span className={styles.hp}>🎋 Sugarcane / گنا</span>
          <span className={styles.hp}>🌽 Maize / مکئی</span>
          <span className={styles.hp}>🍚 Rice / چاول</span>
        </div>
      </div>

      <div className={styles.wrap}>
        {/* STATS */}
        <div className={styles.introStrip}>
          <div className={styles.isCard}>
            <div className={styles.isNum}>{animatedCrops}</div>
            <div className={styles.isLbl}>Crops Covered</div>
          </div>
          <div className={styles.isCard}>
            <div className={styles.isNum}>{animatedProducts}+</div>
            <div className={styles.isLbl}>Products Available</div>
          </div>
          <div className={styles.isCard}>
            <div className={styles.isNum}>Punjab</div>
            <div className={styles.isLbl}>Primary Region</div>
          </div>
          <div className={styles.isCard}>
            <div className={styles.isNum}>{animatedSeasons}</div>
            <div className={styles.isLbl}>Seasons Supported</div>
          </div>
        </div>

        <div className={styles.secHeader}>
          <p className={styles.secLbl}>ہماری فصلیں — Our Crops</p>
          <h2 className={styles.secHd}>
            Science-led solutions for <span>every crop</span>
          </h2>
        </div>

        {/* ── CROP 1: WHEAT ── */}
        <div className={styles.cropCard}>
          <div className={styles.cropImg}>
            <img
              src="/images/wheat.jpg"
              alt="Wheat field golden harvest"
              loading="lazy"
            />
            <div className={styles.cropImgOverlay}>
              <span className={styles.cropEmoji}>🌾</span>
              <div className={styles.cropUrduName}>گندم</div>
            </div>
          </div>
          <div className={styles.cropBody}>
            <span className={styles.cropTag}>Rabi Season</span>
            <h2 className={styles.cropEnName}>Wheat</h2>
            <p className={styles.cropSci}>Triticum aestivum</p>
            <p className={styles.cropDescEn}>
              Pakistan's most important staple crop. Hercules provides premium wheat seeds with high germination rates, paired with targeted fertilizers and pesticide programs to maximize yield per acre.
            </p>
            <p className={styles.cropDescUr}>
              پاکستان کی سب سے اہم فصل۔ ہرکولیس اعلیٰ معیار کے گندم کے بیج، کھاد اور کیڑے مار ادویات فراہم کرتا ہے تاکہ فی ایکڑ پیداوار زیادہ سے زیادہ ہو۔
            </p>
            <div className={styles.cropDivider}></div>
            <p className={styles.prodLabel}>Recommended Products</p>
            <div className={styles.prodTags}>
              <span className={styles.prodTag}>Urea Phos</span>
              <span className={styles.prodTag}>SOP</span>
              <span className={styles.prodTag}>Sulphur</span>
              <span className={styles.prodTag}>Dursban</span>
              <span className={styles.prodTag}>Blade</span>
            </div>
            <div className={styles.seasonBar}>
              <p className={styles.seasonLabel}>Sowing Season (Oct → Apr)</p>
              <div className={styles.seasonMonths}>
                <div className={styles.sm}></div>
                <div className={styles.sm}></div>
                <div className={styles.sm}></div>
                <div className={`${styles.sm} ${styles.partial}`}></div>
                <div className={`${styles.sm} ${styles.active}`}></div>
                <div className={`${styles.sm} ${styles.active}`}></div>
                <div className={`${styles.sm} ${styles.active}`}></div>
                <div className={`${styles.sm} ${styles.active}`}></div>
                <div className={`${styles.sm} ${styles.active}`}></div>
                <div className={`${styles.sm} ${styles.partial}`}></div>
                <div className={styles.sm}></div>
                <div className={styles.sm}></div>
              </div>
            </div>
          </div>
        </div>

        {/* ── CROP 2: COTTON ── */}
        <div className={styles.cropCard}>
          <div className={styles.cropImg}>
            <img
              src="/images/cotton (1).jpg"
              alt="Cotton field white harvest"
              loading="lazy"
            />
            <div className={styles.cropImgOverlay}>
              <span className={styles.cropEmoji}>🌿</span>
              <div className={styles.cropUrduName}>کپاس</div>
            </div>
          </div>
          <div className={styles.cropBody}>
            <span className={styles.cropTag}>Kharif Season</span>
            <h2 className={styles.cropEnName}>Cotton</h2>
            <p className={styles.cropSci}>Gossypium hirsutum</p>
            <p className={styles.cropDescEn}>
              The backbone of Pakistan's textile industry and economy. Hercules offers high-purity cotton seeds with resistance to major pests and specialized boll-development nutrition.
            </p>
            <p className={styles.cropDescUr}>
              پاکستان کی ٹیکسٹائل انڈسٹری کی ریڑھ کی ہڈی۔ ہرکولیس کیڑوں کے خلاف مزاحمت رکھنے والے اعلیٰ معیار کے کپاس کے بیج اور خصوصی کھاد فراہم کرتا ہے۔
            </p>
            <div className={styles.cropDivider}></div>
            <p className={styles.prodLabel}>Recommended Products</p>
            <div className={styles.prodTags}>
              <span className={styles.prodTag}>Acephate</span>
              <span className={styles.prodTag}>Bifenthrin</span>
              <span className={styles.prodTag}>Emamectin</span>
              <span className={styles.prodTag}>Kastu-K</span>
              <span className={styles.prodTag}>Meedan</span>
            </div>
            <div className={styles.seasonBar}>
              <p className={styles.seasonLabel}>Sowing Season (Apr → Nov)</p>
              <div className={styles.seasonMonths}>
                <div className={styles.sm}></div>
                <div className={styles.sm}></div>
                <div className={styles.sm}></div>
                <div className={`${styles.sm} ${styles.partial}`}></div>
                <div className={`${styles.sm} ${styles.active}`}></div>
                <div className={`${styles.sm} ${styles.active}`}></div>
                <div className={`${styles.sm} ${styles.active}`}></div>
                <div className={`${styles.sm} ${styles.active}`}></div>
                <div className={`${styles.sm} ${styles.active}`}></div>
                <div className={`${styles.sm} ${styles.active}`}></div>
                <div className={`${styles.sm} ${styles.partial}`}></div>
                <div className={styles.sm}></div>
              </div>
            </div>
          </div>
        </div>

        {/* ── CROP 3: SUGARCANE ── */}
        <div className={styles.cropCard}>
          <div className={styles.cropImg}>
            <img
              src="/images/sugercane.jpg"
              alt="Sugarcane farm"
              loading="lazy"
            />
            <div className={styles.cropImgOverlay}>
              <span className={styles.cropEmoji}>🎋</span>
              <div className={styles.cropUrduName}>گنا</div>
            </div>
          </div>
          <div className={styles.cropBody}>
            <span className={styles.cropTag}>Year-Round / Kharif</span>
            <h2 className={styles.cropEnName}>Sugarcane</h2>
            <p className={styles.cropSci}>Saccharum officinarum</p>
            <p className={styles.cropDescEn}>
              A heavy-feeding, high-sugar cash crop. Hercules provides intensive soil nutrition packages, systemic insecticides, and growth promoters for thick, juicy canes.
            </p>
            <p className={styles.cropDescUr}>
              ایک اہم نقد آور فصل۔ ہرکولیس گنے کی فصل کے لیے مکمل غذائی پلان، کیڑے مار ادویات اور پیداوار بڑھانے والے حل فراہم کرتا ہے۔
            </p>
            <div className={styles.cropDivider}></div>
            <p className={styles.prodLabel}>Recommended Products</p>
            <div className={styles.prodTags}>
              <span className={styles.prodTag}>Fentrol</span>
              <span className={styles.prodTag}>Bogata</span>
              <span className={styles.prodTag}>Urea Phos</span>
              <span className={styles.prodTag}>Chlorfenapyr</span>
            </div>
            <div className={styles.seasonBar}>
              <p className={styles.seasonLabel}>Growing Season (Feb → Jan)</p>
              <div className={styles.seasonMonths}>
                <div className={`${styles.sm} ${styles.active}`}></div>
                <div className={`${styles.sm} ${styles.active}`}></div>
                <div className={`${styles.sm} ${styles.active}`}></div>
                <div className={`${styles.sm} ${styles.active}`}></div>
                <div className={`${styles.sm} ${styles.active}`}></div>
                <div className={`${styles.sm} ${styles.active}`}></div>
                <div className={`${styles.sm} ${styles.active}`}></div>
                <div className={`${styles.sm} ${styles.active}`}></div>
                <div className={`${styles.sm} ${styles.active}`}></div>
                <div className={`${styles.sm} ${styles.active}`}></div>
                <div className={`${styles.sm} ${styles.active}`}></div>
                <div className={`${styles.sm} ${styles.active}`}></div>
              </div>
            </div>
          </div>
        </div>

        {/* ── CROP 4: MAIZE ── */}
        <div className={styles.cropCard}>
          <div className={styles.cropImg}>
            <img
              src="/images/maize (1).jpg"
              alt="Maize corn field"
              loading="lazy"
            />
            <div className={styles.cropImgOverlay}>
              <span className={styles.cropEmoji}>🌽</span>
              <div className={styles.cropUrduName}>مکئی</div>
            </div>
          </div>
          <div className={styles.cropBody}>
            <span className={styles.cropTag}>Spring & Kharif</span>
            <h2 className={styles.cropEnName}>Maize / Corn</h2>
            <p className={styles.cropSci}>Zea mays</p>
            <p className={styles.cropDescEn}>
              Fast-growing, versatile crop for grain and fodder. Hercules delivers early-season protection, weed-free management, and balanced NPK inputs for uniform cob development.
            </p>
            <p className={styles.cropDescUr}>
              اناج اور چارے کے لیے تیزی سے بڑھنے والی فصل۔ ہرکولیس مکئی کے لیے جڑی بوٹی مار ادویات اور متوازن کھادیں فراہم کرتا ہے۔
            </p>
            <div className={styles.cropDivider}></div>
            <p className={styles.prodLabel}>Recommended Products</p>
            <div className={styles.prodTags}>
              <span className={styles.prodTag}>Atrazine</span>
              <span className={styles.prodTag}>Gengwei</span>
              <span className={styles.prodTag}>Lagao</span>
              <span className={styles.prodTag}>Zelura</span>
            </div>
            <div className={styles.seasonBar}>
              <p className={styles.seasonLabel}>Sowing Season (Feb → Aug)</p>
              <div className={styles.seasonMonths}>
                <div className={styles.sm}></div>
                <div className={`${styles.sm} ${styles.active}`}></div>
                <div className={`${styles.sm} ${styles.active}`}></div>
                <div className={`${styles.sm} ${styles.active}`}></div>
                <div className={`${styles.sm} ${styles.active}`}></div>
                <div className={`${styles.sm} ${styles.active}`}></div>
                <div className={`${styles.sm} ${styles.active}`}></div>
                <div className={`${styles.sm} ${styles.active}`}></div>
                <div className={styles.sm}></div>
                <div className={styles.sm}></div>
                <div className={styles.sm}></div>
                <div className={styles.sm}></div>
              </div>
            </div>
          </div>
        </div>

        {/* ── CROP 5: RICE ── */}
        <div className={styles.cropCard}>
          <div className={styles.cropImg}>
            <img
              src="/images/rice (1) (1).jpg"
              alt="Rice paddy fields"
              loading="lazy"
            />
            <div className={styles.cropImgOverlay}>
              <span className={styles.cropEmoji}>🍚</span>
              <div className={styles.cropUrduName}>چاول</div>
            </div>
          </div>
          <div className={styles.cropBody}>
            <span className={styles.cropTag}>Kharif Season</span>
            <h2 className={styles.cropEnName}>Rice / Paddy</h2>
            <p className={styles.cropSci}>Oryza sativa</p>
            <p className={styles.cropDescEn}>
              Pakistan's world-renowned Basmati and coarse rice varieties require careful water, pest, and disease management. Hercules supports rice growers from nursery to grain filling.
            </p>
            <p className={styles.cropDescUr}>
              پاکستان کا مشہور باسمتی چاول۔ ہرکولیس پنیری سے لے کر فصل پکنے تک بیماریوں اور کیڑوں سے تحفظ کے بہترین حل فراہم کرتا ہے۔
            </p>
            <div className={styles.cropDivider}></div>
            <p className={styles.prodLabel}>Recommended Products</p>
            <div className={styles.prodTags}>
              <span className={styles.prodTag}>Butachlor</span>
              <span className={styles.prodTag}>Metalaxyl</span>
              <span className={styles.prodTag}>Cyclone</span>
              <span className={styles.prodTag}>Joba</span>
            </div>
            <div className={styles.seasonBar}>
              <p className={styles.seasonLabel}>Sowing Season (May → Nov)</p>
              <div className={styles.seasonMonths}>
                <div className={styles.sm}></div>
                <div className={styles.sm}></div>
                <div className={styles.sm}></div>
                <div className={styles.sm}></div>
                <div className={`${styles.sm} ${styles.active}`}></div>
                <div className={`${styles.sm} ${styles.active}`}></div>
                <div className={`${styles.sm} ${styles.active}`}></div>
                <div className={`${styles.sm} ${styles.active}`}></div>
                <div className={`${styles.sm} ${styles.active}`}></div>
                <div className={`${styles.sm} ${styles.active}`}></div>
                <div className={`${styles.sm} ${styles.partial}`}></div>
                <div className={styles.sm}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
