import React from 'react';
import { Truck, Globe, Scissors } from 'lucide-react';

export default function ShippingPromo() {
  return (
    <section className="shipping-promo-section container">
      <div className="shipping-promo-grid">
        {/* Left: Graphic Banner */}
        <div className="promo-banner-card zoom-effect">
          <img 
            src="/assets/Website_Banner_-_Flat_Shipping_Charges_jpg-abf52a6cafa4c.jpg" 
            alt="Flat Shipping Charges" 
            className="promo-banner-img"
          />
        </div>

        {/* Right: Informational Features Card */}
        <div className="promo-info-card">
          <h3 className="promo-card-title">Shopping Made Easy</h3>
          <p className="promo-card-subtitle">Enjoy premium clothing delivered straight to your doorstep.</p>
          
          <div className="features-list">
            <div className="feature-item">
              <div className="feature-icon">
                <Truck size={20} />
              </div>
              <div className="feature-text">
                <h5>FLAT SHIPPING LOCALLY</h5>
                <p>Enjoy low flat rates across Pakistan. Orders processed and shipped within 2-4 business days.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <Globe size={20} />
              </div>
              <div className="feature-text">
                <h5>WORLDWIDE EXPRESS</h5>
                <p>Fast global shipping via DHL Express. International orders delivered in 5-7 business days.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <Scissors size={20} />
              </div>
              <div className="feature-text">
                <h5>PREMIUM STITCHING</h5>
                <p>Get custom-tailored stitching options for all unstitched suits, crafted to your exact size guidelines.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .shipping-promo-section {
          padding: 40px 15px;
        }
        .shipping-promo-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 30px;
          align-items: stretch;
        }
        .promo-banner-card {
          border-radius: 4px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0,0,0,0.03);
          background-color: #faf7f5;
          display: flex;
          align-items: center;
        }
        .promo-banner-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        
        .promo-info-card {
          background-color: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.05);
          border-radius: 4px;
          padding: 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: left;
          box-shadow: 0 4px 15px rgba(0,0,0,0.02);
        }
        .promo-card-title {
          font-family: var(--font-heading);
          font-size: 32px;
          color: var(--color-secondary);
          margin-bottom: 8px;
        }
        .promo-card-subtitle {
          font-size: 14px;
          color: var(--color-text-muted);
          margin-bottom: 30px;
        }
        
        .features-list {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .feature-item {
          display: flex;
          gap: 15px;
          align-items: flex-start;
        }
        .feature-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: #fae1d5;
          color: var(--color-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .feature-text h5 {
          font-size: 13px;
          font-weight: 600;
          color: var(--color-dark);
          margin-bottom: 4px;
          letter-spacing: 1px;
        }
        .feature-text p {
          font-size: 12.5px;
          color: var(--color-text-muted);
          line-height: 1.5;
        }
        
        @media (max-width: 1024px) {
          .shipping-promo-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .promo-info-card {
            padding: 30px;
          }
        }
      `}</style>
    </section>
  );
}
