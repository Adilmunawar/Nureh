import React from 'react';
import { Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-container">
        <div className="footer-columns">
          
          {/* Column 1: Customer Support */}
          <div className="footer-col support-col">
            <div className="footer-logo-wrap">
              <img 
                src="/assets/NUREH-N.gif" 
                alt="Nureh N Logo" 
                className="footer-logo-gif" 
                onError={(e) => {
                  e.target.src = 'https://nureh.pk/cdn/shop/files/Nureh_Header_and_Footer_75752b53-dc6c-40bd-b326-d589e0d7df51.png?v=1698352944&width=120';
                }}
              />
            </div>
            <h4 className="footer-col-title">For Customer Support</h4>
            <ul className="support-info-list">
              <li className="support-item">
                <Mail size={16} className="support-icon" />
                <a href="mailto:customer.care@nureh.pk">customer.care@nureh.pk</a>
              </li>
              <li className="support-item">
                <Mail size={16} className="support-icon" />
                <a href="mailto:info@nureh.pk">info@nureh.pk</a>
              </li>
              <li className="support-item align-top">
                <Phone size={16} className="support-icon" />
                <span>
                  +92 322 9144444 <br />
                  <small>11:00 am To 04:30 pm (Mon - Sat)</small>
                </span>
              </li>
            </ul>
            <div className="footer-social-links">
              <a href="https://facebook.com/nurehofficial" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="https://instagram.com/nurehofficial" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Useful Links */}
          <div className="footer-col links-col">
            <h4 className="footer-col-title">Useful Links</h4>
            <ul className="footer-links-list">
              <li><a href="#contact-us">Contact Us</a></li>
              <li><a href="#store-locator">Store Locator</a></li>
              <li><a href="#terms-conditions">Terms & Conditions</a></li>
              <li><a href="#cancellation-policy">Order Cancellation</a></li>
              <li><a href="#order-exchange">Order Exchange</a></li>
              <li><a href="#faqs">FAQs</a></li>
              <li><a href="#track-order">Track Order</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>

          {/* Column 3: Policies */}
          <div className="footer-col policies-col">
            <h4 className="footer-col-title">Policies</h4>
            <ul className="footer-links-list">
              <li><a href="#privacy-policy">Privacy Policy</a></li>
              <li><a href="#exchange-refund">Exchange/Refund Policy</a></li>
              <li><a href="#shipping-policy">Shipping Policy</a></li>
            </ul>
          </div>

          {/* Column 4: Wholesale Inquiry */}
          <div className="footer-col wholesale-col">
            <h4 className="footer-col-title">For Wholesale Inquiry</h4>
            <ul className="support-info-list">
              <li className="support-item">
                <Mail size={16} className="support-icon" />
                <a href="mailto:wholesale@nureh.pk">wholesale@nureh.pk</a>
              </li>
              <li className="support-item">
                <span className="whatsapp-dot-icon"></span>
                <a href="https://wa.me/923033404444" target="_blank" rel="noopener noreferrer">+92 303 3404444</a>
              </li>
              <li className="support-item">
                <span className="whatsapp-dot-icon"></span>
                <a href="https://wa.me/923001786000" target="_blank" rel="noopener noreferrer">+92 300 1786000</a>
              </li>
            </ul>
          </div>

          {/* Column 5: Newsletter */}
          <div className="footer-col newsletter-col">
            <h4 className="footer-col-title">Sign up for the newsletter</h4>
            <p className="newsletter-desc">Be the first to know about our biggest and best sales. We'll never send more than one email a month.</p>
            <form className="footer-newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                required 
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-submit-btn">Subscribe</button>
            </form>
          </div>

        </div>

        {/* Divider */}
        <hr className="footer-divider" />

        {/* Bottom Bar */}
        <div className="footer-bottom-grid">
          <div className="footer-copyright">
            Copyright © 2026 <span className="brand-accent">Nureh.pk</span>
          </div>
          <div className="footer-payment-badges">
            <img src="/assets/master-f5a74105.svg" alt="MasterCard" className="payment-badge" />
            <img src="/assets/visa-b614b878.svg" alt="Visa" className="payment-badge" />
          </div>
        </div>
      </div>

      <style>{`
        .site-footer {
          background-color: var(--color-footer-bg);
          color: var(--color-dark);
          padding: 70px 0 25px;
          border-top: 1px solid var(--color-dark);
          text-align: left;
        }
        .footer-columns {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr 0.8fr 1fr 1.2fr;
          gap: 40px;
        }
        
        .footer-logo-wrap {
          margin-bottom: 25px;
        }
        .footer-logo-gif {
          width: 50px;
          height: 76px;
          object-fit: contain;
          display: block;
        }
        
        .footer-col-title {
          font-size: 15px;
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 20px;
          letter-spacing: 1px;
        }
        
        .support-info-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          font-size: 13.5px;
        }
        .support-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .support-item.align-top {
          align-items: flex-start;
        }
        .support-icon {
          color: var(--color-dark);
          flex-shrink: 0;
        }
        .whatsapp-dot-icon {
          width: 16px;
          height: 16px;
          background-color: #25d366; /* WhatsApp green */
          border-radius: 50%;
          display: inline-block;
          flex-shrink: 0;
          position: relative;
        }
        .whatsapp-dot-icon::after {
          content: "";
          position: absolute;
          width: 8px;
          height: 8px;
          background-color: #fff;
          border-radius: 50%;
          top: 4px;
          left: 4px;
        }
        
        .footer-social-links {
          display: flex;
          gap: 15px;
          margin-top: 25px;
        }
        .footer-social-links a {
          color: var(--color-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background-color: rgba(0, 0, 0, 0.05);
          transition: var(--transition-fast);
        }
        .footer-social-links a:hover {
          background-color: var(--color-dark);
          color: #ffffff;
        }
        
        .footer-links-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
          font-size: 13.5px;
        }
        .footer-links-list a:hover {
          padding-left: 4px;
        }
        
        .newsletter-desc {
          font-size: 13px;
          line-height: 1.5;
          margin-bottom: 20px;
          color: var(--color-secondary);
        }
        .footer-newsletter-form {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .newsletter-input {
          padding: 10px 15px;
          font-size: 13.5px;
          border: 1px solid var(--color-dark);
          background-color: transparent;
          border-radius: 2px;
          color: var(--color-dark);
          outline: none;
          text-align: center;
        }
        .newsletter-input::placeholder {
          color: rgba(0, 0, 0, 0.45);
        }
        .newsletter-submit-btn {
          background-color: var(--color-dark);
          color: #ffffff;
          padding: 10px 20px;
          font-size: 13px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          border-radius: 2px;
          border: 1px solid var(--color-dark);
        }
        .newsletter-submit-btn:hover {
          opacity: 0.9;
        }
        
        .footer-divider {
          border: 0;
          height: 1px;
          background-color: rgba(0,0,0,0.08);
          margin: 45px 0 20px;
        }
        
        .footer-bottom-grid {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 13px;
          color: var(--color-text-muted);
        }
        .brand-accent {
          font-weight: 600;
          color: var(--color-dark);
        }
        .footer-payment-badges {
          display: flex;
          gap: 12px;
        }
        .payment-badge {
          height: 25px;
          width: auto;
          object-fit: contain;
        }

        @media (max-width: 1100px) {
          .footer-columns {
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
          }
          .newsletter-col {
            grid-column: span 2;
          }
        }
        @media (max-width: 768px) {
          .footer-columns {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          .newsletter-col {
            grid-column: span 1;
          }
          .footer-bottom-grid {
            flex-direction: column;
            gap: 15px;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
