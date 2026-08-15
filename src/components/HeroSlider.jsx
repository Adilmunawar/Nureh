import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function HeroSlider() {
  const slides = [
    {
      id: 1,
      image: '/assets/shafia_banner_1.png',
      alt: 'Shafia Campaign - Flat Shipping Worldwide',
      link: '#collections/all-product'
    },
    {
      id: 2,
      image: '/assets/shafia_banner_2.png',
      alt: 'Shafia Summer Lawn Edit',
      link: '#collections/summer-lawn'
    },
    {
      id: 3,
      image: '/assets/shafia_banner_3.png',
      alt: 'Shafia Winter Festive Collection',
      link: '#collections/winter-festive'
    },
    {
      id: 4,
      image: '/assets/shafia_banner_4.png',
      alt: 'Shafia Timeless Best Sellers',
      link: '#collections/best-sellers'
    }
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handlePrev = (e) => {
    e.preventDefault();
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.preventDefault();
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const handleDotClick = (idx, e) => {
    e.preventDefault();
    setCurrent(idx);
  };

  return (
    <div className="hero-banner-container">
      <div className="slides-wrapper">
        {slides.map((slide, idx) => (
          <a
            key={slide.id}
            href={slide.link}
            className={`hero-banner-link ${idx === current ? 'active' : ''}`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="hero-banner-image"
              loading={idx === 0 ? "eager" : "lazy"}
            />
          </a>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button className="slider-arrow prev-arrow" onClick={handlePrev} aria-label="Previous Slide">
        <ChevronLeft size={24} />
      </button>
      <button className="slider-arrow next-arrow" onClick={handleNext} aria-label="Next Slide">
        <ChevronRight size={24} />
      </button>

      {/* Dot Indicators */}
      <div className="slider-dots">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`slider-dot ${idx === current ? 'active' : ''}`}
            onClick={(e) => handleDotClick(idx, e)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      <style>{`
        .hero-banner-container {
          width: 100%;
          position: relative;
          overflow: hidden;
          background-color: #faf7f5;
          aspect-ratio: 1800/800; /* standard landscape banner aspect ratio */
        }
        @media (max-width: 768px) {
          .hero-banner-container {
            aspect-ratio: 1800/1000; /* adjustments for mobile landscape */
          }
        }
        .slides-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
        }
        .hero-banner-link {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          z-index: 1;
          pointer-events: none;
          transition: opacity 0.8s ease-in-out;
        }
        .hero-banner-link.active {
          opacity: 1;
          z-index: 2;
          pointer-events: auto;
        }
        .hero-banner-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 1.2s ease;
        }
        .hero-banner-link:hover .hero-banner-image {
          transform: scale(1.02);
        }

        /* Arrows */
        .slider-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background-color: rgba(255, 255, 255, 0.7);
          border: none;
          color: #000;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          opacity: 0;
          transition: all 0.3s ease;
          z-index: 10;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }
        .hero-banner-container:hover .slider-arrow {
          opacity: 1;
        }
        .slider-arrow:hover {
          background-color: #ffffff;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        .prev-arrow {
          left: 20px;
        }
        .next-arrow {
          right: 20px;
        }

        /* Dots */
        .slider-dots {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 10px;
          z-index: 10;
        }
        .slider-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.5);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }
        .slider-dot.active {
          background-color: #ffffff;
          transform: scale(1.2);
        }
        .slider-dot:hover {
          background-color: rgba(255, 255, 255, 0.8);
        }
      `}</style>
    </div>
  );
}
