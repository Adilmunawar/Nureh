import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function HeroVideo() {
  const slides = [
    {
      image: '/assets/SINGLE_BANNER_91f175d8-050b-49a0-bf3b-d05e7b8d5675-082dddd02105b.jpg',
      link: '/collections/all-product',
      alt: 'NURÉH Premium Collection'
    },
    {
      image: '/assets/Website_Banner_-_Flat_Shipping_Charges_jpg.jpg',
      link: '/collections/all-product',
      alt: 'NURÉH Flat Shipping Campaign'
    },
    {
      image: '/assets/Winter_-_Desktop-b16d8344de6078.jpg',
      link: '/collections/unstitched',
      alt: 'NURÉH Winter Collection'
    }
  ];

  const [currentIdx, setCurrentIdx] = useState(0);

  // Auto-play interval
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % slides.length);
    }, 5000); // cycle every 5 seconds
    return () => clearInterval(timer);
  }, [slides.length]);

  const handlePrev = (e) => {
    e.preventDefault();
    setCurrentIdx((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = (e) => {
    e.preventDefault();
    setCurrentIdx((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="hero-slideshow-container">
      {/* Slides track */}
      {slides.map((slide, idx) => (
        <a
          key={idx}
          href={slide.link}
          className={`hero-slide-item ${idx === currentIdx ? 'active' : ''}`}
          aria-hidden={idx !== currentIdx}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="hero-slide-image"
            // High priority loading for slideshow images to ensure lightning load
            fetchPriority={idx === 0 ? "high" : "low"}
            loading={idx === 0 ? "eager" : "lazy"}
          />
        </a>
      ))}

      {/* Navigation Arrows */}
      <button className="slider-arrow prev" onClick={handlePrev} aria-label="Previous Slide">
        <ChevronLeft size={24} />
      </button>
      <button className="slider-arrow next" onClick={handleNext} aria-label="Next Slide">
        <ChevronRight size={24} />
      </button>

      {/* Progress Dots */}
      <div className="slider-dots-container">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`slider-dot ${idx === currentIdx ? 'active' : ''}`}
            onClick={() => setCurrentIdx(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      <style>{`
        .hero-slideshow-container {
          width: 100%;
          position: relative;
          overflow: hidden;
          background-color: #faf7f5;
          aspect-ratio: 2.46/1; /* Native single-banner aspect ratio */
          max-height: 620px;
        }

        .hero-slide-item {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          z-index: 1;
          transition: opacity 0.8s ease-in-out;
          pointer-events: none;
        }

        .hero-slide-item.active {
          opacity: 1;
          z-index: 2;
          pointer-events: auto;
        }

        .hero-slide-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* Navigation Arrows styled matching the live site aesthetics */
        .slider-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.85);
          color: var(--color-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 15 !important;
          box-shadow: 0 4px 15px rgba(0,0,0,0.08);
          opacity: 0.5; /* slightly visible by default */
          transition: var(--transition-smooth);
          pointer-events: auto !important;
        }

        .hero-slideshow-container:hover .slider-arrow {
          opacity: 1;
        }

        .slider-arrow:hover {
          background-color: var(--color-dark);
          color: #ffffff;
        }

        .slider-arrow.prev {
          left: 20px;
        }

        .slider-arrow.next {
          right: 20px;
        }

        /* Progress Dots overlay */
        .slider-dots-container {
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
          background-color: rgba(0,0,0,0.2);
          transition: var(--transition-smooth);
        }

        .slider-dot.active {
          background-color: var(--color-dark);
          transform: scale(1.2);
          width: 20px;
          border-radius: 4px;
        }

        @media (max-width: 1024px) {
          .hero-slideshow-container {
            aspect-ratio: 16/9;
          }
          .slider-arrow {
            opacity: 0.6;
            width: 40px;
            height: 40px;
          }
          .slider-arrow.prev { left: 10px; }
          .slider-arrow.next { right: 10px; }
        }
        @media (max-width: 768px) {
          .hero-slideshow-container {
            aspect-ratio: 4/3;
            max-height: 400px;
          }
          .slider-arrow {
            display: none; /* Hide arrows on mobile for native swipes */
          }
        }
      `}</style>
    </div>
  );
}
