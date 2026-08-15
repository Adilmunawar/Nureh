import React, { useState, useEffect } from 'react';

export default function AnnouncementBar() {
  const announcements = [
    'NEW STORE OPENED At Giga Boutique Mall Islamabad, Grand Opening Discount Flat 30% OFF 13-15 Aug',
    'Additional 10% OFF with Debit/Credit Card Payment on local orders. Coupon Code: "Prepaid Order"'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % announcements.length);
        setFade(true);
      }, 300); // match transition speed
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="announcement-bar">
      <div className="container">
        <p className={`announcement-text ${fade ? 'fade-in' : 'fade-out'}`}>
          {announcements[currentIndex]}
        </p>
      </div>
      <style>{`
        .announcement-bar {
          background-color: #000000;
          color: #ffffff;
          min-height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          font-size: 13px;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          z-index: 100;
          position: relative;
        }
        .announcement-text {
          transition: opacity 0.3s ease-in-out;
          margin: 0;
          padding: 5px 15px;
          font-weight: 500;
        }
        .announcement-text.fade-in {
          opacity: 1;
        }
        .announcement-text.fade-out {
          opacity: 0;
        }
        .announcement-text strong {
          font-weight: 700;
        }
      `}</style>
    </div>
  );
}
