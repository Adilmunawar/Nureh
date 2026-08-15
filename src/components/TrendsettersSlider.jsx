import React, { useRef } from 'react';
import ProductCard from './ProductCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { trendsettersProducts } from '../data/productsData';

export default function TrendsettersSlider({ onAddToCart }) {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = 320;
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="trendsetters-section container">
      <div className="section-header">
        <h2 className="section-title">Trendsetters</h2>
      </div>

      <div className="slider-relative-container">
        {/* Left Arrow Button */}
        <button className="arrow-btn prev-btn" onClick={() => scroll('left')} aria-label="Slide Left">
          <ChevronLeft size={22} />
        </button>

        {/* Slider Track */}
        <div className="slider-track" ref={sliderRef}>
          {trendsettersProducts.map((product) => (
            <div key={product.id} className="slider-item">
              <ProductCard product={product} onAddToCart={onAddToCart} />
            </div>
          ))}
        </div>

        {/* Right Arrow Button */}
        <button className="arrow-btn next-btn" onClick={() => scroll('right')} aria-label="Slide Right">
          <ChevronRight size={22} />
        </button>
      </div>

      <style>{`
        .trendsetters-section {
          padding: 60px 15px;
          position: relative;
        }
        .slider-relative-container {
          position: relative;
          width: 100%;
        }
        .arrow-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1px solid rgba(0,0,0,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(255, 255, 255, 0.9);
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          color: var(--color-dark);
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          transition: var(--transition-smooth);
        }
        .arrow-btn:hover {
          background-color: var(--color-dark);
          color: #ffffff;
          border-color: var(--color-dark);
        }
        .prev-btn {
          left: -22px;
        }
        .next-btn {
          right: -22px;
        }
        
        .slider-track {
          display: flex;
          gap: 20px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scrollbar-width: none; /* Hide standard Firefox scrollbar */
          scroll-behavior: smooth;
          padding: 10px 0;
          -webkit-overflow-scrolling: touch;
        }
        .slider-track::-webkit-scrollbar {
          display: none; /* Hide Chrome/Safari scrollbar */
        }
        .slider-item {
          flex: 0 0 calc(25% - 15px); /* 4 columns on desktop */
          min-width: 280px;
          scroll-snap-align: start;
        }

        @media (max-width: 1200px) {
          .slider-item {
            flex: 0 0 calc(33.333% - 14px); /* 3 columns */
          }
          .prev-btn { left: -10px; }
          .next-btn { right: -10px; }
        }
        @media (max-width: 768px) {
          .slider-item {
            flex: 0 0 calc(50% - 10px); /* 2 columns */
          }
          .trendsetters-section {
            padding: 40px 15px;
          }
          .arrow-btn {
            width: 36px;
            height: 36px;
          }
          .prev-btn { left: -5px; }
          .next-btn { right: -5px; }
        }
        @media (max-width: 500px) {
          .slider-item {
            flex: 0 0 100%; /* 1 column */
          }
          .arrow-btn {
            display: none; /* hide arrows on very small mobile for native touch swipe */
          }
        }
      `}</style>
    </section>
  );
}
