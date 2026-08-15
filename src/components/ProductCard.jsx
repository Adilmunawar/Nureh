import React, { useState } from 'react';
import { ShoppingBag, Eye } from 'lucide-react';

export default function ProductCard({ product, onAddToCart, onQuickView }) {
  const [hovered, setHovered] = useState(false);
  const [selectedSize, setSelectedSize] = useState(
    product.sizes && product.sizes.length > 0 && !product.sizes.includes('UNSTITCHED') 
      ? '' 
      : 'UNSTITCHED'
  );

  const mainImage = `/assets/${product.image.split('/').pop()}`;
  const hoverImage = product.image2 ? `/assets/${product.image2.split('/').pop()}` : mainImage;

  const handleAddToCart = (e) => {
    e.stopPropagation();
    if (!product.available) return;
    if (!selectedSize) {
      alert('Please select a size first.');
      return;
    }
    onAddToCart({
      ...product,
      size: selectedSize
    });
  };

  return (
    <div 
      className="t4s-product-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="product-image-container">
        {/* Product Image Swap */}
        <img
          src={hovered ? hoverImage : mainImage}
          alt={product.title}
          className="product-img"
          loading="lazy"
        />

        {/* Badges */}
        <div className="badge-container">
          {!product.available && <span className="badge-soldout">Sold out</span>}
          {product.badge && <span className="badge-restocked">{product.badge}</span>}
        </div>

        {/* Hover Quick Action Buttons */}
        {product.available && (
          <div className="product-actions">
            <button 
              className="action-btn atc-btn" 
              onClick={handleAddToCart}
              title="Quick Add to Bag"
              disabled={!selectedSize}
            >
              <ShoppingBag size={18} />
              <span>Add to Cart</span>
            </button>
          </div>
        )}
      </div>

      <div className="product-details">
        <span className="product-vendor">{product.vendor || 'SHAFIA'}</span>
        <h4 className="product-title-text">{product.title}</h4>
        <div className="product-price-wrapper">
          {product.comparePrice && (
            <del className="compare-price">{product.comparePrice}</del>
          )}
          <span className="current-price">{product.price}</span>
        </div>

        {/* Size Selectors (displayed dynamically on hover or below details) */}
        {product.sizes && product.sizes.length > 0 && product.available && (
          <div className="product-sizes-list">
            {product.sizes.map((size, idx) => {
              const isSoldOut = product.soldOutSizes && product.soldOutSizes.includes(size);
              return (
                <button
                  key={idx}
                  className={`size-bubble ${selectedSize === size ? 'active' : ''} ${isSoldOut ? 'sold-out' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (!isSoldOut) setSelectedSize(size);
                  }}
                  disabled={isSoldOut}
                >
                  {size}
                </button>
              );
            })}
          </div>
        )}
      </div>

      <style>{`
        .t4s-product-card {
          background-color: transparent;
          text-align: left;
          transition: var(--transition-smooth);
          position: relative;
          display: flex;
          flex-direction: column;
        }
        .product-image-container {
          position: relative;
          overflow: hidden;
          width: 100%;
          aspect-ratio: 2/3;
          background-color: #f3f3f3;
        }
        .product-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .t4s-product-card:hover .product-img {
          transform: scale(1.03);
        }
        
        .badge-container {
          position: absolute;
          top: 12px;
          right: 12px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          z-index: 5;
        }
        
        /* Quick add actions on hover */
        .product-actions {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0));
          padding: 20px 15px 15px;
          transform: translateY(100%);
          transition: var(--transition-smooth);
          display: flex;
          justify-content: center;
          opacity: 0;
        }
        .t4s-product-card:hover .product-actions {
          transform: translateY(0);
          opacity: 1;
        }
        .action-btn {
          background-color: #ffffff;
          color: var(--color-dark);
          border: 1px solid #ffffff;
          padding: 10px 20px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          display: flex;
          align-items: center;
          gap: 8px;
          border-radius: 40px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
        }
        .action-btn:hover:not(:disabled) {
          background-color: var(--color-dark);
          color: #ffffff;
          border-color: var(--color-dark);
        }
        .action-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        /* Product Info details */
        .product-details {
          padding: 15px 4px;
        }
        .product-vendor {
          font-size: 11px;
          text-transform: uppercase;
          color: var(--color-text-muted);
          letter-spacing: 1.5px;
          margin-bottom: 5px;
          display: block;
        }
        .product-title-text {
          font-family: var(--font-heading);
          font-size: 14px;
          font-weight: 500;
          color: var(--color-secondary);
          margin-bottom: 5px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .product-price-wrapper {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
        }
        .current-price {
          font-size: 14px;
          font-weight: 500;
          color: var(--color-dark);
        }
        .compare-price {
          font-size: 13px;
          color: var(--color-text-muted);
          text-decoration: line-through;
        }
        
        /* Size items selector */
        .product-sizes-list {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 8px;
        }
        .size-bubble {
          font-size: 10px;
          font-weight: 600;
          color: var(--color-secondary);
          border: 1px solid #dcdcdc;
          width: auto;
          min-width: 28px;
          height: 22px;
          padding: 0 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 2px;
          transition: var(--transition-fast);
        }
        .size-bubble:hover:not(.sold-out) {
          border-color: var(--color-dark);
        }
        .size-bubble.active {
          background-color: var(--color-dark);
          color: #ffffff;
          border-color: var(--color-dark);
        }
        .size-bubble.sold-out {
          position: relative;
          color: #c0c0c0;
          border-color: #f0f0f0;
          cursor: not-allowed;
          background-color: #fafafa;
        }
        .size-bubble.sold-out::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 1px;
          background-color: #c0c0c0;
          transform: rotate(-30deg);
        }
      `}</style>
    </div>
  );
}
