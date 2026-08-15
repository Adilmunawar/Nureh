import React from 'react';

export default function HeroVideo() {
  return (
    <div className="hero-video-container">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="hero-video-element"
        poster="https://nureh.pk/cdn/shop/files/preview_images/d2d2af9121064f2999cf52977dea6e14.thumbnail.0000000000_1x1.jpg?v=1785934862"
      >
        <source
          src="https://cdn.shopify.com/videos/c/vp/d2d2af9121064f2999cf52977dea6e14/d2d2af9121064f2999cf52977dea6e14.HD-1080p-7.2Mbps-90825747.mp4?v=0"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay-shade" />

      <style>{`
        .hero-video-container {
          width: 100%;
          position: relative;
          overflow: hidden;
          background-color: #000000;
          /* Aspect ratio 2:1 on desktop (width:height) */
          aspect-ratio: 2/1;
          max-height: 680px;
        }
        .hero-video-element {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .video-overlay-shade {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.05); /* very light dimming */
          pointer-events: none;
        }

        @media (max-width: 1024px) {
          .hero-video-container {
            aspect-ratio: 16/9;
          }
        }
        @media (max-width: 768px) {
          .hero-video-container {
            aspect-ratio: 4/3;
            max-height: 400px;
          }
        }
      `}</style>
    </div>
  );
}
