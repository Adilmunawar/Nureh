import React, { useState, useRef } from 'react';
import { Play, Volume2, VolumeX, X, ShoppingBag, ChevronLeft, ChevronRight } from 'lucide-react';
import { reelsData } from '../data/reelsData';

export default function WatchAndBuy({ onAddToCart }) {
  const [activeReel, setActiveReel] = useState(null);
  const [modalMuted, setModalMuted] = useState(false);
  const [selectedSize, setSelectedSize] = useState('');
  const sliderRef = useRef(null);

  // Play/pause preview video on hover
  const handleMouseEnter = (e) => {
    const video = e.currentTarget.querySelector('video');
    if (video) {
      video.play().catch(() => {});
    }
  };

  const handleMouseLeave = (e) => {
    const video = e.currentTarget.querySelector('video');
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  const openReelModal = (reel) => {
    setActiveReel(reel);
    setSelectedSize(reel.product.sizes[0] || 'UNSTITCHED');
  };

  const closeReelModal = () => {
    setActiveReel(null);
  };

  const handleModalAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size.');
      return;
    }
    onAddToCart({
      ...activeReel.product,
      id: `reel-${activeReel.videoId}`,
      size: selectedSize
    });
    closeReelModal();
  };

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = 260;
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="watch-buy-section container">
      <div className="section-header">
        <h2 className="section-title">Watch & Buy</h2>
      </div>

      <div className="slider-relative-container">
        {/* Left Arrow Button */}
        <button className="arrow-btn prev-btn" onClick={() => scroll('left')} aria-label="Slide Left">
          <ChevronLeft size={22} />
        </button>

        {/* Reels Horizontal Slider Track */}
        <div className="reels-track" ref={sliderRef}>
          {reelsData.map((reel) => {
            const productImg = `/assets/${reel.product.image.split('/').pop()}`;
            return (
              <div
                key={reel.videoId}
                className="reel-tile"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => openReelModal(reel)}
              >
                {/* Preview HTML5 Video */}
                <video
                  className="reel-preview-video"
                  src={reel.videoUrl}
                  poster={reel.poster}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />

                {/* Play Icon Indicator */}
                <div className="play-indicator">
                  <Play size={20} fill="#ffffff" color="#ffffff" />
                </div>

                {/* Bottom Product Card Overlay */}
                <div className="reel-product-overlay" onClick={(e) => e.stopPropagation()}>
                  <img src={productImg} alt={reel.product.title} className="overlay-prod-thumb" />
                  <div className="overlay-prod-info">
                    <span className="overlay-prod-title">{reel.product.title}</span>
                    <span className="overlay-prod-price">{reel.product.price}</span>
                  </div>
                  <button className="overlay-buy-btn" onClick={() => openReelModal(reel)}>
                    Buy
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Arrow Button */}
        <button className="arrow-btn next-btn" onClick={() => scroll('right')} aria-label="Slide Right">
          <ChevronRight size={22} />
        </button>
      </div>

      {/* Immersive Vertical Video Player Modal */}
      {activeReel && (
        <div className="reel-modal-overlay animate-fade" onClick={closeReelModal}>
          <div className="reel-modal-container animate-slide-up" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button className="modal-close-btn" onClick={closeReelModal}>
              <X size={24} />
            </button>

            <div className="reel-modal-content">
              {/* Left Column: Full Vertical Video Player */}
              <div className="modal-video-wrapper">
                <video
                  className="modal-full-video"
                  src={activeReel.videoUrl}
                  autoPlay
                  loop
                  muted={modalMuted}
                  playsInline
                />
                
                {/* Audio controls */}
                <button 
                  className="modal-mute-btn" 
                  onClick={() => setModalMuted(!modalMuted)}
                >
                  {modalMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                </button>
              </div>

              {/* Right Column: Interactive Product Card Details */}
              <div className="modal-product-details">
                <span className="modal-vendor">NUREH COLLECTION</span>
                <h3 className="modal-product-title">{activeReel.product.title}</h3>
                <span className="modal-product-price">{activeReel.product.price}</span>
                
                <hr className="modal-divider" />
                
                <p className="modal-prod-desc">
                  This beautiful piece is featured in our latest Watch & Buy collection. Select your preferred styling size below to add directly to your shopping bag.
                </p>

                {/* Size Selector */}
                <div className="modal-sizes-section">
                  <span className="size-label">Select Size:</span>
                  <div className="modal-sizes-list">
                    {activeReel.product.sizes.map((size, idx) => (
                      <button
                        key={idx}
                        className={`modal-size-bubble ${selectedSize === size ? 'active' : ''}`}
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button className="modal-atc-btn" onClick={handleModalAddToCart}>
                  <ShoppingBag size={18} />
                  <span>Add to Shopping Bag</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .watch-buy-section {
          padding: 40px 15px;
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

        .reels-track {
          display: flex;
          gap: 18px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scrollbar-width: none;
          scroll-behavior: smooth;
          padding: 10px 0;
        }
        .reels-track::-webkit-scrollbar {
          display: none;
        }
        .reel-tile {
          flex: 0 0 calc(25% - 14px); /* Displays exactly 4 reels on desktop */
          min-width: 210px;
          aspect-ratio: 9/16;
          position: relative;
          overflow: hidden;
          border-radius: 8px;
          cursor: pointer;
          background-color: #000;
          scroll-snap-align: start;
        }
        
        .reel-preview-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        
        .play-indicator {
          position: absolute;
          top: 15px;
          right: 15px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background-color: rgba(0,0,0,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0.8;
          transition: var(--transition-fast);
        }
        .reel-tile:hover .play-indicator {
          opacity: 1;
          transform: scale(1.1);
        }
        
        /* Floating product overlay inside the video tile */
        .reel-product-overlay {
          position: absolute;
          bottom: 12px;
          left: 10px;
          right: 10px;
          background-color: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(5px);
          border-radius: 6px;
          padding: 8px;
          display: flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          transition: var(--transition-smooth);
        }
        .reel-tile:hover .reel-product-overlay {
          background-color: #ffffff;
        }
        .overlay-prod-thumb {
          width: 32px;
          height: 32px;
          object-fit: cover;
          border-radius: 4px;
        }
        .overlay-prod-info {
          display: flex;
          flex-direction: column;
          flex: 1;
          overflow: hidden;
        }
        .overlay-prod-title {
          font-size: 11px;
          font-weight: 600;
          color: var(--color-dark);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .overlay-prod-price {
          font-size: 10px;
          color: var(--color-text-muted);
        }
        .overlay-buy-btn {
          background-color: var(--color-dark);
          color: #ffffff;
          font-size: 10px;
          padding: 5px 10px;
          border-radius: 4px;
          text-transform: uppercase;
          font-weight: 600;
        }

        /* Full Screen Video Modal Overlay */
        .reel-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.85);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        .reel-modal-container {
          background-color: #ffffff;
          width: 100%;
          max-width: 820px;
          border-radius: 12px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 10px 40px rgba(0,0,0,0.3);
        }
        .modal-close-btn {
          position: absolute;
          top: 15px;
          right: 15px;
          color: #ffffff;
          background-color: rgba(0,0,0,0.5);
          border-radius: 50%;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
        }
        .modal-close-btn:hover {
          background-color: var(--color-dark);
        }
        
        .reel-modal-content {
          display: grid;
          grid-template-columns: 42% 58%;
          height: 580px;
        }
        
        .modal-video-wrapper {
          position: relative;
          background-color: #000000;
          height: 100%;
        }
        .modal-full-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .modal-mute-btn {
          position: absolute;
          bottom: 15px;
          left: 15px;
          color: #ffffff;
          background-color: rgba(0,0,0,0.5);
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-product-details {
          padding: 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: left;
        }
        .modal-vendor {
          font-size: 11px;
          color: var(--color-text-muted);
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 8px;
        }
        .modal-product-title {
          font-family: var(--font-heading);
          font-size: 28px;
          color: var(--color-secondary);
          margin-bottom: 6px;
        }
        .modal-product-price {
          font-size: 18px;
          font-weight: 600;
          color: var(--color-dark);
          margin-bottom: 20px;
          display: block;
        }
        .modal-divider {
          border: 0;
          height: 1px;
          background-color: rgba(0,0,0,0.08);
          margin-bottom: 20px;
        }
        .modal-prod-desc {
          font-size: 13px;
          color: var(--color-text-muted);
          line-height: 1.6;
          margin-bottom: 25px;
        }
        .modal-sizes-section {
          margin-bottom: 30px;
        }
        .size-label {
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          color: var(--color-dark);
          margin-bottom: 10px;
          display: block;
        }
        .modal-sizes-list {
          display: flex;
          gap: 8px;
        }
        .modal-size-bubble {
          font-size: 11px;
          font-weight: 600;
          border: 1px solid #dcdcdc;
          padding: 6px 14px;
          border-radius: 2px;
        }
        .modal-size-bubble.active {
          background-color: var(--color-dark);
          color: #ffffff;
          border-color: var(--color-dark);
        }
        .modal-atc-btn {
          background-color: var(--color-dark);
          color: #ffffff;
          padding: 12px 25px;
          font-size: 13px;
          font-weight: 600;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border-radius: 40px;
          letter-spacing: 1px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        .modal-atc-btn:hover {
          opacity: 0.9;
        }
        
        @media (max-width: 1024px) {
          .reel-tile {
            flex: 0 0 calc(33.333% - 12px);
          }
          .prev-btn { left: -10px; }
          .next-btn { right: -10px; }
        }
        @media (max-width: 768px) {
          .reel-modal-content {
            grid-template-columns: 1fr;
            height: auto;
            max-height: 90vh;
            overflow-y: auto;
          }
          .modal-video-wrapper {
            height: 350px;
          }
          .modal-product-details {
            padding: 20px;
          }
          .modal-close-btn {
            top: 10px;
            right: 10px;
            color: var(--color-dark);
            background-color: rgba(255,255,255,0.8);
          }
          .reel-tile {
            flex: 0 0 calc(50% - 9px);
          }
          .arrow-btn {
            width: 36px;
            height: 36px;
          }
          .prev-btn { left: -5px; }
          .next-btn { right: -5px; }
        }
        @media (max-width: 500px) {
          .arrow-btn {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
