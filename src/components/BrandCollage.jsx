import React from 'react';

export default function BrandCollage() {
  const images = [
    '/assets/Zarnab-65bc368191b6c8.jpg',
    '/assets/Ansar_Sisters-3cd09c8df39908.jpg',
    '/assets/Alizeh_183c8bbf-214e-4fa9-bd54-03594b8ca950-1bed1105ca505.jpg',
    '/assets/Areesha_Kamran-8824eee8308f9.jpg'
  ];

  return (
    <section className="brand-collage-section container">
      <div className="section-header">
        <h2 className="section-title">#SHAFIA</h2>
        <p className="section-subtitle">Share your style with us by tagging @shafiaofficial on Instagram</p>
      </div>

      <div className="collage-grid">
        {images.map((img, idx) => (
          <div key={idx} className="collage-item zoom-effect">
            <img src={img} alt={`Shafia Spotted ${idx + 1}`} className="collage-img" />
            <div className="collage-hover-overlay">
              <svg 
                viewBox="0 0 24 24" 
                width="24" 
                height="24" 
                fill="none" 
                stroke="#ffffff" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="instagram-svg"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              <span className="overlay-tag">@shafiaofficial</span>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .brand-collage-section {
          padding: 50px 15px;
        }
        .section-subtitle {
          font-size: 13.5px;
          color: var(--color-text-muted);
          margin-top: 5px;
        }
        .collage-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 15px;
          margin-top: 30px;
        }
        .collage-item {
          position: relative;
          aspect-ratio: 1/1;
          overflow: hidden;
          background-color: #f7f7f7;
          border-radius: 4px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.03);
          cursor: pointer;
        }
        .collage-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .collage-hover-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.4);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          opacity: 0;
          transition: var(--transition-smooth);
        }
        .collage-item:hover .collage-hover-overlay {
          opacity: 1;
        }
        .overlay-tag {
          color: #ffffff;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.5px;
        }
        
        @media (max-width: 900px) {
          .collage-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
          }
        }
      `}</style>
    </section>
  );
}
