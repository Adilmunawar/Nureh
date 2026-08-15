import React from 'react';

export default function ShopBySeasons() {
  const seasons = [
    {
      title: 'SUMMER',
      image: '/assets/Summer_-_Desktop-e18c0c3c0de86.jpg',
      link: '#summer'
    },
    {
      title: 'WINTER',
      image: '/assets/Winter_-_Desktop-b16d8344de6078.jpg',
      link: '#winter'
    },
    {
      title: 'ALL SEASON',
      image: '/assets/All_Season_-_Desktop-f5b84e7516edf8.jpg',
      link: '#all-season'
    }
  ];

  return (
    <section className="shop-seasons-section container">
      <div className="section-header">
        <h2 className="section-title">Shop by Seasons</h2>
      </div>

      <div className="seasons-grid">
        {seasons.map((season, idx) => (
          <a key={idx} href={season.link} className="season-card-wrap">
            <div className="season-circle zoom-effect">
              <img src={season.image} alt={season.title} className="season-img" />
              <div className="season-overlay">
                <h3 className="season-title-text">{season.title}</h3>
              </div>
            </div>
          </a>
        ))}
      </div>

      <style>{`
        .shop-seasons-section {
          padding: 50px 15px;
        }
        .seasons-grid {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 40px;
          flex-wrap: wrap;
          margin-top: 30px;
        }
        .season-card-wrap {
          display: block;
        }
        .season-circle {
          width: 250px;
          height: 250px;
          border-radius: 50%;
          overflow: hidden;
          position: relative;
          box-shadow: 0 8px 25px rgba(0,0,0,0.06);
          border: 1px solid rgba(0,0,0,0.05);
          background-color: #faf7f5;
        }
        .season-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .season-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-smooth);
        }
        .season-circle:hover .season-overlay {
          background-color: rgba(0, 0, 0, 0.4);
        }
        .season-title-text {
          font-family: var(--font-heading);
          color: #ffffff;
          font-size: 24px;
          font-weight: 500;
          letter-spacing: 2px;
          text-transform: uppercase;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }
        
        @media (max-width: 768px) {
          .seasons-grid {
            gap: 20px;
          }
          .season-circle {
            width: 180px;
            height: 180px;
          }
          .season-title-text {
            font-size: 18px;
          }
        }
      `}</style>
    </section>
  );
}
