import React, { useState } from 'react';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem }) {
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  // Calculate Subtotal
  const subtotal = cartItems.reduce((acc, item) => {
    return acc + (item.priceNumber * item.quantity);
  }, 0);

  // Free shipping threshold (e.g., Rs. 15,000)
  const shippingThreshold = 15000;
  const progressPercent = Math.min((subtotal / shippingThreshold) * 100, 100);
  const remainingForFreeShipping = shippingThreshold - subtotal;

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      alert('Checkout completed successfully! Thank you for shopping with NURÉH.');
      setIsCheckingOut(false);
      // Optional: Clear cart logic
    }, 2000);
  };

  return (
    <div className={`cart-drawer-wrapper ${isOpen ? 'open' : ''}`}>
      {/* Dark overlay backdrop */}
      <div className="cart-backdrop" onClick={onClose} />

      {/* Cart side panel */}
      <div className="cart-panel">
        <div className="cart-header">
          <h3 className="cart-title">
            <ShoppingBag size={20} />
            <span>Shopping Cart ({cartItems.length})</span>
          </h3>
          <button className="cart-close-btn" onClick={onClose} aria-label="Close Cart">
            <X size={22} />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        {cartItems.length > 0 && (
          <div className="shipping-progress-container">
            <p className="shipping-progress-text">
              {remainingForFreeShipping > 0 ? (
                <span>Add <strong>Rs.{remainingForFreeShipping.toLocaleString()}</strong> more for <strong>FREE SHIPPING</strong>!</span>
              ) : (
                <span className="free-shipping-unlocked">🎉 Your order qualifies for <strong>FREE SHIPPING</strong>!</span>
              )}
            </p>
            <div className="progress-bar-track">
              <div className="progress-bar-fill" style={{ width: `${progressPercent}%` }} />
            </div>
          </div>
        )}

        {/* Cart Content */}
        <div className="cart-items-container">
          {cartItems.length === 0 ? (
            <div className="empty-cart-state animate-fade">
              <div className="empty-cart-icon">
                <ShoppingBag size={48} strokeWidth={1} />
              </div>
              <h4>Your bag is empty</h4>
              <p>Looks like you haven't added anything to your cart yet.</p>
              <button className="btn-continue-shopping" onClick={onClose}>
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="cart-items-list">
              {cartItems.map((item, idx) => {
                const itemImage = `/assets/${item.image.split('/').pop()}`;
                return (
                  <div key={`${item.id}-${item.size}-${idx}`} className="cart-item-row">
                    <img src={itemImage} alt={item.title} className="cart-item-img" />
                    
                    <div className="cart-item-details">
                      <div className="cart-item-meta">
                        <h4 className="cart-item-title">{item.title}</h4>
                        <span className="cart-item-size">Size: {item.size}</span>
                      </div>
                      
                      <div className="cart-item-pricing-qty">
                        {/* Quantity controls */}
                        <div className="qty-selectors">
                          <button 
                            className="qty-btn" 
                            onClick={() => onUpdateQuantity(item.id, item.size, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            <Minus size={12} />
                          </button>
                          <span className="qty-number">{item.quantity}</span>
                          <button 
                            className="qty-btn" 
                            onClick={() => onUpdateQuantity(item.id, item.size, item.quantity + 1)}
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        
                        <span className="cart-item-price-sum">
                          Rs.{(item.priceNumber * item.quantity).toLocaleString()}.00
                        </span>
                      </div>
                    </div>

                    <button 
                      className="cart-item-remove-btn" 
                      onClick={() => onRemoveItem(item.id, item.size)}
                      title="Remove Item"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer summary and Checkout */}
        {cartItems.length > 0 && (
          <div className="cart-footer-panel">
            <div className="subtotal-row">
              <span className="subtotal-label">Subtotal</span>
              <span className="subtotal-value">Rs.{subtotal.toLocaleString()}.00</span>
            </div>
            <p className="tax-notice">Shipping and taxes calculated at checkout.</p>
            
            <button 
              className="btn-checkout" 
              onClick={handleCheckout}
              disabled={isCheckingOut}
            >
              {isCheckingOut ? (
                <div className="checkout-loader">
                  <span className="spinner-dot"></span>
                  <span>Processing...</span>
                </div>
              ) : (
                <span>Proceed to Checkout</span>
              )}
            </button>
          </div>
        )}
      </div>

      <style>{`
        .cart-drawer-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1000;
          visibility: hidden;
          transition: visibility 0.4s;
        }
        .cart-drawer-wrapper.open {
          visibility: visible;
        }
        
        .cart-backdrop {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.4);
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .cart-drawer-wrapper.open .cart-backdrop {
          opacity: 1;
        }
        
        .cart-panel {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          max-width: 440px;
          background-color: #ffffff;
          box-shadow: -10px 0 35px rgba(0,0,0,0.15);
          display: flex;
          flex-direction: column;
          transform: translateX(100%);
          transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .cart-drawer-wrapper.open .cart-panel {
          transform: translateX(0);
        }
        
        .cart-header {
          padding: 24px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .cart-title {
          font-family: var(--font-body);
          font-size: 16px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 10px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .cart-close-btn {
          color: var(--color-dark);
          padding: 4px;
        }
        .cart-close-btn:hover {
          color: var(--color-text-muted);
        }
        
        /* Shipping progress bar styling */
        .shipping-progress-container {
          background-color: #faf7f5;
          padding: 15px 24px;
          border-bottom: 1px solid rgba(0,0,0,0.03);
          text-align: left;
        }
        .shipping-progress-text {
          font-size: 12px;
          margin-bottom: 8px;
          color: var(--color-secondary);
        }
        .free-shipping-unlocked {
          color: var(--color-success);
          font-weight: 500;
        }
        .progress-bar-track {
          width: 100%;
          height: 6px;
          background-color: #e5e5e5;
          border-radius: 3px;
          overflow: hidden;
        }
        .progress-bar-fill {
          height: 100%;
          background-color: var(--color-dark);
          transition: width 0.4s ease-out;
        }

        /* Cart Items scroll area */
        .cart-items-container {
          flex: 1;
          overflow-y: auto;
          padding: 24px;
        }
        
        .empty-cart-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 80%;
          text-align: center;
        }
        .empty-cart-icon {
          color: var(--color-text-muted);
          margin-bottom: 20px;
          background-color: #faf7f5;
          width: 90px;
          height: 90px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .empty-cart-state h4 {
          font-family: var(--font-body);
          font-size: 17px;
          font-weight: 600;
          text-transform: uppercase;
          margin-bottom: 6px;
        }
        .empty-cart-state p {
          font-size: 13px;
          color: var(--color-text-muted);
          max-width: 250px;
          margin-bottom: 24px;
          line-height: 1.4;
        }
        .btn-continue-shopping {
          background-color: var(--color-dark);
          color: #ffffff;
          padding: 10px 24px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          border-radius: 40px;
        }
        
        .cart-items-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .cart-item-row {
          display: flex;
          gap: 15px;
          padding-bottom: 20px;
          border-bottom: 1px solid rgba(0,0,0,0.05);
          position: relative;
          text-align: left;
        }
        .cart-item-img {
          width: 80px;
          height: 110px;
          object-fit: cover;
          border-radius: 2px;
          background-color: #f7f7f7;
        }
        .cart-item-details {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex: 1;
        }
        .cart-item-title {
          font-family: var(--font-body);
          font-size: 14.5px;
          font-weight: 600;
          color: var(--color-secondary);
          margin-bottom: 4px;
        }
        .cart-item-size {
          font-size: 12px;
          color: var(--color-text-muted);
        }
        .cart-item-pricing-qty {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 10px;
        }
        
        .qty-selectors {
          display: flex;
          align-items: center;
          border: 1px solid #dcdcdc;
          border-radius: 2px;
        }
        .qty-btn {
          width: 26px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-dark);
        }
        .qty-btn:disabled {
          color: #c0c0c0;
          cursor: not-allowed;
        }
        .qty-number {
          font-size: 12px;
          font-weight: 600;
          min-width: 24px;
          text-align: center;
        }
        .cart-item-price-sum {
          font-size: 13.5px;
          font-weight: 600;
          color: var(--color-dark);
        }
        .cart-item-remove-btn {
          color: var(--color-text-muted);
          position: absolute;
          top: 0;
          right: 0;
          padding: 4px;
        }
        .cart-item-remove-btn:hover {
          color: var(--color-accent);
        }
        
        /* Drawer footer panel */
        .cart-footer-panel {
          padding: 24px;
          border-top: 1px solid rgba(0, 0, 0, 0.08);
          background-color: #ffffff;
        }
        .subtotal-row {
          display: flex;
          justify-content: space-between;
          font-size: 16px;
          font-weight: 700;
          margin-bottom: 8px;
          color: var(--color-dark);
        }
        .tax-notice {
          font-size: 11.5px;
          color: var(--color-text-muted);
          margin-bottom: 20px;
          text-align: left;
        }
        .btn-checkout {
          width: 100%;
          background-color: var(--color-dark);
          color: #ffffff;
          padding: 14px;
          font-size: 13px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          border-radius: 40px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        .btn-checkout:hover {
          opacity: 0.95;
        }
        .btn-checkout:disabled {
          opacity: 0.8;
          cursor: not-allowed;
        }
        
        .checkout-loader {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .spinner-dot {
          width: 8px;
          height: 8px;
          background-color: #ffffff;
          border-radius: 50%;
          animation: dotPulse 1s infinite alternate;
        }
        @keyframes dotPulse {
          from { transform: scale(0.6); opacity: 0.4; }
          to { transform: scale(1.2); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
