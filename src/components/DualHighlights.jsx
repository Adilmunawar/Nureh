import React from 'react';

export default function DualHighlights() {
  return (
    <section className="dual-highlights-section container">
      <div className="highlights-grid">
        {/* Highlight 1: Trend of the Week */}
        <a href="#trend-of-the-week" className="highlight-card">
          <div className="highlight-circle zoom-effect">
            <img 
              src="/assets/Trend_of_the_Week_9d2cebdc-d097-464e-973c-80b3e9a5b4d0-f8fcae4d25046.png" 
              alt="Trend of the Week" 
              className="highlight-img"
            />
            <div className="highlight-overlay">
              <span className="highlight-label">TREND OF THE WEEK</span>
            </div>
          </div>
        </a>

        {/* Highlight 2: Best Seller */}
        <a href="#best-sellers" className="highlight-card">
          <div className="highlight-circle zoom-effect">
            <img 
              src="/assets/Best_Seller_70024cea-d86d-4773-9d68-456edf717650-ecc171260d5da.png" 
              alt="Best Seller" 
              className="highlight-img"
            />
            <div className="highlight-overlay">
              <span className="highlight-label">BEST SELLERS</span>
            </div>
          </div>
        </a>
      </div>

      <style>{`
        .dual-highlights-section {
          padding: 40px 15px;
          display: flex;
          justify-content: center;
        }
        .highlights-grid {
          display: flex;
          gap: 60px;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
        }
        .highlight-card {
          display: block;
        }
        .highlight-circle {
          width: 320px;
          height: 320px;
          border-radius: 50%;
          overflow: hidden;
          position: relative;
          box-shadow: 0 10px 30px rgba(0,0,0,0.06);
          border: 1px solid rgba(0,0,0,0.05);
          background-color: #ffffff;
        }
        .highlight-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .highlight-circle:hover .highlight-img {
          transform: scale(1.08) rotate(3deg);
        }
        .highlight-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-smooth);
        }
        .highlight-circle:hover .highlight-overlay {
          background-color: rgba(0, 0, 0, 0.3);
        }
        .highlight-label {
          font-family: var(--font-heading);
          color: #ffffff;
          font-size: 20px;
          font-weight: 600;
          letter-spacing: 2px;
          text-align: center;
          padding: 0 15px;
          text-shadow: 0 2px 10px rgba(0,0,0,0.4);
        }
        
        @media (max-width: 768px) {
          .highlights-grid {
            gap: 30px;
          }
          .highlight-circle {
            width: 250px;
            height: 250px;
          }
          .highlight-label {
            font-size: 16px;
          }
        }
      `}</style>
    </section>
  );
}
