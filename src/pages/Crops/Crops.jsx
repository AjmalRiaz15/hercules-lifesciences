import React from 'react';
import styles from './Crops.module.css';

export default function Crops() {
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
            <div className={styles.isNum}>5</div>
            <div className={styles.isLbl}>Crops Covered</div>
          </div>
          <div className={styles.isCard}>
            <div className={styles.isNum}>131+</div>
            <div className={styles.isLbl}>Products Available</div>
          </div>
          <div className={styles.isCard}>
            <div className={styles.isNum}>Punjab</div>
            <div className={styles.isLbl}>Primary Region</div>
          </div>
          <div className={styles.isCard}>
            <div className={styles.isNum}>2</div>
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
              src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&q=80"
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
        <div className={`${styles.cropCard} ${styles.reverse}`}>
          <div className={styles.cropBody}>
            <span className={styles.cropTag}>Kharif Season</span>
            <h2 className={styles.cropEnName}>Cotton</h2>
            <p className={styles.cropSci}>Gossypium hirsutum</p>
            <p className={styles.cropDescEn}>
              Pakistan's white gold. Cotton demands intensive crop protection — from sucking pests to bollworms. Hercules offers a complete insecticide and fungicide program to protect every growth stage.
            </p>
            <p className={styles.cropDescUr}>
              پاکستان کا سفید سونا۔ کپاس کو چوسنے والے کیڑوں سے لے کر سنڈی تک مکمل تحفظ کی ضرورت ہے۔ ہرکولیس ہر مرحلے کے لیے مکمل حل فراہم کرتا ہے۔
            </p>
            <div className={styles.cropDivider}></div>
            <p className={styles.prodLabel}>Recommended Products</p>
            <div className={styles.prodTags}>
              <span className={styles.prodTag}>Bogata</span>
              <span className={styles.prodTag}>Bogata Plus</span>
              <span className={styles.prodTag}>Midan</span>
              <span className={styles.prodTag}>Midan Plus</span>
              <span className={styles.prodTag}>GAGI</span>
            </div>
            <div className={styles.seasonBar}>
              <p className={styles.seasonLabel}>Sowing Season (May → Nov)</p>
              <div className={styles.seasonMonths}>
                <div className={styles.sm}></div>
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
              </div>
            </div>
          </div>
          <div className={styles.cropImg}>
            <img
              src="https://images.unsplash.com/photo-1599940824399-b87987ceb72a?w=800&q=80"
              alt="Cotton field white bolls"
              loading="lazy"
            />
            <div className={styles.cropImgOverlay}>
              <span className={styles.cropEmoji}>🌿</span>
              <div className={styles.cropUrduName}>کپاس</div>
            </div>
          </div>
        </div>

        {/* ── CROP 3: SUGARCANE ── */}
        <div className={styles.cropCard}>
          <div className={styles.cropImg}>
            <img
              src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&q=80"
              alt="Sugarcane field green"
              loading="lazy"
            />
            <div className={styles.cropImgOverlay}>
              <span className={styles.cropEmoji}>🎋</span>
              <div className={styles.cropUrduName}>گنا</div>
            </div>
          </div>
          <div className={styles.cropBody}>
            <span className={styles.cropTag}>Year-Round Crop</span>
            <h2 className={styles.cropEnName}>Sugarcane</h2>
            <p className={styles.cropSci}>Saccharum officinarum</p>
            <p className={styles.cropDescEn}>
              A high-value cash crop grown widely across Punjab and Sindh. Hercules supports sugarcane farmers with granular fertilizers, herbicides for weed control, and soil health programs for heavier cane and better juice quality.
            </p>
            <p className={styles.cropDescUr}>
              پنجاب اور سندھ میں کاشت ہونے والی قیمتی نقد فصل۔ ہرکولیس گنے کے کاشتکاروں کو کھاد، جڑی بوٹی مار ادویات اور زمین کی صحت کے پروگرام فراہم کرتا ہے۔
            </p>
            <div className={styles.cropDivider}></div>
            <p className={styles.prodLabel}>Recommended Products</p>
            <div className={styles.prodTags}>
              <span className={styles.prodTag}>Bokash</span>
              <span className={styles.prodTag}>Torban</span>
              <span className={styles.prodTag}>Sulphur</span>
              <span className={styles.prodTag}>Zelura Plus</span>
              <span className={styles.prodTag}>Kastn K</span>
            </div>
            <div className={styles.seasonBar}>
              <p className={styles.seasonLabel}>Sowing Season (Feb → Dec)</p>
              <div className={styles.seasonMonths}>
                <div className={styles.sm}></div>
                <div className={`${styles.sm} ${styles.partial}`}></div>
                <div className={`${styles.sm} ${styles.active}`}></div>
                <div className={`${styles.sm} ${styles.active}`}></div>
                <div className={`${styles.sm} ${styles.active}`}></div>
                <div className={`${styles.sm} ${styles.active}`}></div>
                <div className={`${styles.sm} ${styles.active}`}></div>
                <div className={`${styles.sm} ${styles.active}`}></div>
                <div className={`${styles.sm} ${styles.active}`}></div>
                <div className={`${styles.sm} ${styles.active}`}></div>
                <div className={`${styles.sm} ${styles.active}`}></div>
                <div className={`${styles.sm} ${styles.partial}`}></div>
              </div>
            </div>
          </div>
        </div>

        {/* ── CROP 4: MAIZE ── */}
        <div className={`${styles.cropCard} ${styles.reverse}`}>
          <div className={styles.cropBody}>
            <span className={styles.cropTag}>Kharif Season</span>
            <h2 className={styles.cropEnName}>Maize</h2>
            <p className={styles.cropSci}>Zea mays</p>
            <p className={styles.cropDescEn}>
              A rapidly growing crop across Pakistan, used for food, feed, and industrial purposes. Hercules provides hybrid maize seeds and complete nutritional programs to support fast, uniform crop growth.
            </p>
            <p className={styles.cropDescUr}>
              پاکستان بھر میں تیزی سے پھیلنے والی فصل جو خوراک اور صنعتی مقاصد کے لیے استعمال ہوتی ہے۔ ہرکولیس ہائبرڈ بیج اور مکمل غذائی پروگرام فراہم کرتا ہے۔
            </p>
            <div className={styles.cropDivider}></div>
            <p className={styles.prodLabel}>Recommended Products</p>
            <div className={styles.prodTags}>
              <span className={styles.prodTag}>Urea Phos</span>
              <span className={styles.prodTag}>Bokash</span>
              <span className={styles.prodTag}>GAGI</span>
              <span className={styles.prodTag}>Dursban</span>
              <span className={styles.prodTag}>Sadi</span>
            </div>
            <div className={styles.seasonBar}>
              <p className={styles.seasonLabel}>Sowing Season (Apr → Sep)</p>
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
          <div className={styles.cropImg}>
            <img
              src="https://images.unsplash.com/photo-1601593346740-925612772716?w=800&q=80"
              alt="Maize corn field agriculture"
              loading="lazy"
            />
            <div className={styles.cropImgOverlay}>
              <span className={styles.cropEmoji}>🌽</span>
              <div className={styles.cropUrduName}>مکئی</div>
            </div>
          </div>
        </div>

        {/* ── CROP 5: RICE ── */}
        <div className={styles.cropCard}>
          <div className={styles.cropImg}>
            <img
              src="https://images.unsplash.com/photo-1536054742370-9f5dae7e6edd?w=800&q=80"
              alt="Rice paddy field green"
              loading="lazy"
            />
            <div className={styles.cropImgOverlay}>
              <span className={styles.cropEmoji}>🍚</span>
              <div className={styles.cropUrduName}>چاول</div>
            </div>
          </div>
          <div className={styles.cropBody}>
            <span className={styles.cropTag}>Kharif Season</span>
            <h2 className={styles.cropEnName}>Rice</h2>
            <p className={styles.cropSci}>Oryza sativa</p>
            <p className={styles.cropDescEn}>
              Pakistan is among the world's top rice exporters. Hercules supports basmati and IRRI rice farmers with precise herbicide programs for weed control, fungicides for blast disease, and fertilizers for optimum grain development.
            </p>
            <p className={styles.cropDescUr}>
              پاکستان دنیا کے سرکردہ چاول برآمد کنندگان میں شامل ہے۔ ہرکولیس باسمتی اور آئی آر آر آئی چاول کے کاشتکاروں کو جڑی بوٹی مار، پھپھوندی کش اور کھاد فراہم کرتا ہے۔
            </p>
            <div className={styles.cropDivider}></div>
            <p className={styles.prodLabel}>Recommended Products</p>
            <div className={styles.prodTags}>
              <span className={styles.prodTag}>Zelura Plus</span>
              <span className={styles.prodTag}>Torban</span>
              <span className={styles.prodTag}>Midan</span>
              <span className={styles.prodTag}>SOP</span>
              <span className={styles.prodTag}>Blade</span>
            </div>
            <div className={styles.seasonBar}>
              <p className={styles.seasonLabel}>Sowing Season (Jun → Nov)</p>
              <div className={styles.seasonMonths}>
                <div className={styles.sm}></div>
                <div className={styles.sm}></div>
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
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.cta}>
          <div>
            <h2>
              Need advice for <em>your crop?</em>
            </h2>
            <p className={styles.ctaUr}>اپنی فصل کے لیے مشورہ لیں — ہم حاضر ہیں</p>
          </div>
          <button
            className={styles.ctaBtn}
            onClick={() => (window.location.href = 'mailto:herculeslifesciences@gmail.com')}
          >
            Contact Our Experts ↗
          </button>
        </div>
      </div>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <p>
          © 2026 Hercules Life Sciences. All rights reserved. &nbsp;|&nbsp;
          <a href="/privacy-policy">Privacy Policy</a> &nbsp;|&nbsp;
          <a href="/terms-of-service">Terms of Service</a>
        </p>
      </footer>
    </div>
  );
}
