import React from 'react';

export default function CategoryGrid() {
  const categories = [
    {
      title: 'UNSTITCHED',
      image: '/assets/Main_Category_Banner_Collection_Image_Desktop_d27ccf60-8652-45de-be42-ec2c103916a8-0f12d989836fa8.jpg',
      link: '/collections/unstitched'
    },
    {
      title: 'LUXURY PRET',
      image: '/assets/Main_Category_Banner_Collection_Image_Desktop_3_03435152-d37e-4f15-93e7-8636a5db3b58-3e7a66304efeb.jpg',
      link: '/collections/luxury-pret'
    },
    {
      title: 'PRET',
      image: '/assets/Main_Category_Banner_Collection_Image_Desktop_baad5abf-036c-4bd3-b689-c935de7fb5e9-29cb8a16fa2208.jpg',
      link: '/collections/pret'
    }
  ];

  return (
    <section className="category-grid-section container">
      <div className="grid-3">
        {categories.map((cat, idx) => (
          <a key={idx} href={cat.link} className="category-block zoom-effect">
            <img src={cat.image} alt={cat.title} className="category-image" />
            <div className="category-overlay-badge">
              <h3 className="category-title-text">{cat.title}</h3>
              <span className="category-subtitle-text">Shop Now</span>
            </div>
          </a>
        ))}
      </div>

      <style>{`
        .category-grid-section {
          padding: 40px 15px;
        }
        .category-block {
          position: relative;
          display: block;
          aspect-ratio: 4/5;
          overflow: hidden;
          background-color: #faf7f5;
          border-radius: 4px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.03);
          border: 1px solid rgba(0,0,0,0.04);
        }
        .category-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .category-overlay-badge {
          position: absolute;
          bottom: 25px;
          left: 50%;
          transform: translateX(-50%);
          background-color: #ffffff;
          padding: 12px 24px;
          min-width: 160px;
          text-align: center;
          box-shadow: 0 4px 15px rgba(0,0,0,0.08);
          transition: var(--transition-smooth);
          border-radius: 2px;
        }
        .category-block:hover .category-overlay-badge {
          background-color: var(--color-dark);
          color: #ffffff;
        }
        .category-title-text {
          font-family: var(--font-heading);
          font-size: 15px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--color-dark);
          margin-bottom: 2px;
          transition: var(--transition-smooth);
        }
        .category-block:hover .category-title-text {
          color: #ffffff;
        }
        .category-subtitle-text {
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--color-text-muted);
          transition: var(--transition-smooth);
          display: block;
        }
        .category-block:hover .category-subtitle-text {
          color: rgba(255,255,255,0.7);
        }
        
        @media (max-width: 1024px) {
          .category-block {
            aspect-ratio: 3/2;
          }
        }
      `}</style>
    </section>
  );
}
