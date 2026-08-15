import React from 'react';

export default function HeroSlider() {
  return (
    <div className="hero-banner-container">
      <a href="#collections/all-product" className="hero-banner-link">
        <img
          src="/assets/Website_Banner_-_Flat_Shipping_Charges_jpg.jpg"
          alt="NURÉH Campaign Banner"
          className="hero-banner-image"
          onError={(e) => {
            e.target.src = '/assets/Website_Banner_-_Flat_Shipping_Charges_jpg-abf52a6cafa4c.jpg';
          }}
        />
      </a>

      <style>{`
        .hero-banner-container {
          width: 100%;
          position: relative;
          overflow: hidden;
          background-color: #faf7f5;
        }
        .hero-banner-link {
          display: block;
          width: 100%;
          line-height: 0;
        }
        .hero-banner-image {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.8s ease;
        }
        .hero-banner-link:hover .hero-banner-image {
          transform: scale(1.01);
        }

        @media (max-width: 768px) {
          .hero-banner-image {
            content: url('/assets/Website_Banner_-_Flat_Shipping_Charges_jpg-abf52a6cafa4c.jpg');
          }
        }
      `}</style>
    </div>
  );
}
