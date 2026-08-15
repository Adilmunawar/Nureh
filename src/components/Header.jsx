import React, { useState } from 'react';
import { Search, User, Heart, ShoppingBag, Menu, X, ChevronDown } from 'lucide-react';

export default function Header({ cartCount, onCartOpen, wishlistCount = 0 }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const categories = [
    { name: 'NEW IN', link: '/collections/new-in', hasDropdown: false },
    {
      name: 'UNSTITCHED',
      link: '/collections/unstitched',
      hasDropdown: true,
      subItems: ['Lawn Collection', 'Luxury Chiffon', 'Linen Series', 'Khaddar Edit']
    },
    {
      name: 'PRET',
      link: '/collections/pret',
      hasDropdown: true,
      subItems: ['Ready To Wear', 'Casual Pret', 'Formal Wear', 'Solid Co-ords']
    },
    {
      name: 'LUXURY PRET',
      link: '/collections/luxury-pret',
      hasDropdown: true,
      subItems: ['Silk Suits', 'Organza Festive', 'Velvet Luxury']
    },
    { name: 'RESTOCKED', link: '/collections/restocked', hasDropdown: false },
    {
      name: 'DAILY WEAR',
      link: '/collections/daily-wear',
      hasDropdown: true,
      subItems: ['Printed Kurtis', 'Cotton Basic Trousers', 'Matching Sets']
    },
    { name: 'VALUE PRICES', link: '/collections/sale', hasDropdown: false, isSale: true }
  ];

  return (
    <header className="site-header">
      <div className="container">
        <div className="header-grid">
          {/* Mobile Menu Toggle */}
          <div className="header-col-left-mobile">
            <button className="mobile-toggle-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Menu size={24} />
            </button>
          </div>

          {/* Left: Search & Account Icons */}
          <div className="header-col-left">
            <button className="icon-btn search-btn" aria-label="Search">
              <Search size={21} />
            </button>
            <button className="icon-btn account-btn" aria-label="Account">
              <User size={21} />
            </button>
          </div>

          {/* Center: Brand Logo */}
          <div className="header-col-center">
            <a href="/" className="logo-link">
              <img 
                src="/shafia.svg" 
                alt="SHAFIA Store" 
                className="header-logo-img"
                onError={(e) => {
                  e.target.style.display = 'none';
                  const span = document.createElement('span');
                  span.className = 'logo-text';
                  span.innerText = 'SHAFIA';
                  e.target.parentNode.appendChild(span);
                }}
              />
            </a>
          </div>

          {/* Right: Wishlist & Cart Toggles */}
          <div className="header-col-right">
            <button className="icon-btn wishlist-btn" aria-label="Wishlist">
              <span className="icon-wrapper">
                <Heart size={21} />
                {wishlistCount > 0 && <span className="badge">{wishlistCount}</span>}
              </span>
            </button>
            <button className="icon-btn cart-btn" onClick={onCartOpen} aria-label="Cart">
              <span className="icon-wrapper">
                <ShoppingBag size={21} />
                <span className="badge">{cartCount}</span>
              </span>
            </button>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {categories.map((cat, idx) => (
              <li key={idx} className={`nav-item ${cat.hasDropdown ? 'has-dropdown' : ''}`}>
                <a
                  href={cat.link}
                  className={`nav-link ${cat.isSale ? 'link-sale' : ''}`}
                >
                  {cat.name} {cat.hasDropdown && <ChevronDown size={12} className="caret" />}
                </a>
                
                {cat.hasDropdown && (
                  <div className="dropdown-menu">
                    <ul className="dropdown-list">
                      {cat.subItems.map((sub, sIdx) => (
                        <li key={sIdx} className="dropdown-item">
                          <a href={`/collections/${sub.toLowerCase().replace(/ /g, '-')}`}>{sub}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation Sidebar drawer */}
        {mobileMenuOpen && (
          <div className="mobile-nav-overlay animate-fade" onClick={() => setMobileMenuOpen(false)}>
            <div className="mobile-nav-panel animate-slide" onClick={(e) => e.stopPropagation()}>
              <div className="mobile-nav-header">
                <span className="logo-text-small">SHAFIA</span>
                <button className="close-btn" onClick={() => setMobileMenuOpen(false)}>
                  <X size={24} />
                </button>
              </div>
              <ul className="mobile-nav-list">
                {categories.map((cat, idx) => (
                  <li key={idx} className="mobile-nav-item">
                    <a
                      href={cat.link}
                      className={`mobile-nav-link ${cat.isSale ? 'link-sale' : ''}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {cat.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .site-header {
          background-color: #ffffff;
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
          position: relative;
          z-index: 99;
          width: 100%;
        }
        .header-grid {
          display: grid;
          grid-template-columns: 1fr 2fr 1fr;
          align-items: center;
          height: 70px;
        }
        .header-col-left {
          display: flex;
          gap: 15px;
        }
        .header-col-left-mobile {
          display: none;
        }
        .header-col-center {
          text-align: center;
        }
        .header-col-right {
          display: flex;
          justify-content: flex-end;
          gap: 15px;
        }
        .logo-text {
          font-family: var(--font-heading);
          font-size: 32px;
          font-weight: 500;
          letter-spacing: 4px;
          color: var(--color-dark);
        }
        .header-logo-img {
          max-height: 40px;
          width: auto;
          object-fit: contain;
          vertical-align: middle;
          transition: var(--transition-smooth);
        }
        .logo-link {
          display: inline-block;
        }
        .icon-btn {
          color: var(--color-dark);
          padding: 8px;
          position: relative;
        }
        .icon-btn:hover {
          color: var(--color-text-muted);
        }
        .icon-wrapper {
          position: relative;
          display: inline-block;
        }
        .badge {
          position: absolute;
          top: -6px;
          right: -8px;
          background-color: var(--color-dark);
          color: #ffffff;
          font-size: 10px;
          font-weight: 600;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        /* Desktop navigation */
        .desktop-nav {
          display: flex;
          justify-content: center;
          padding-bottom: 10px;
        }
        .nav-list {
          display: flex;
          gap: 5px;
        }
        .nav-item {
          position: relative;
        }
        .nav-link {
          font-size: 13px;
          font-weight: 600;
          color: var(--color-dark);
          padding: 8px 18px;
          letter-spacing: 0.8px;
          display: flex;
          align-items: center;
          text-transform: uppercase;
        }
        .nav-link:hover {
          color: var(--color-text-muted);
        }
        .link-sale {
          color: var(--color-accent) !important;
        }
        .caret {
          margin-left: 4px;
          transition: transform 0.2s ease;
        }
        .nav-item:hover .caret {
          transform: rotate(180deg);
        }
        
        /* Dropdown menus */
        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%) translateY(10px);
          background-color: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow: 0 10px 25px rgba(0,0,0,0.06);
          min-width: 180px;
          opacity: 0;
          visibility: hidden;
          transition: all 0.2s ease-in-out;
          border-radius: 4px;
        }
        .nav-item:hover .dropdown-menu {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
        }
        .dropdown-list {
          padding: 10px 0;
        }
        .dropdown-item a {
          display: block;
          padding: 8px 20px;
          font-size: 13px;
          color: var(--color-secondary);
        }
        .dropdown-item a:hover {
          background-color: #f7f7f7;
          color: var(--color-dark);
        }

        /* Mobile nav styling */
        .mobile-nav-overlay {
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          background-color: rgba(0,0,0,0.4);
          z-index: 1000;
        }
        .mobile-nav-panel {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          width: 280px;
          background-color: #ffffff;
          padding: 20px;
          display: flex;
          flex-direction: column;
          box-shadow: 5px 0 25px rgba(0,0,0,0.15);
          animation: slideInLeft 0.3s ease-out forwards;
        }
        @keyframes slideInLeft {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        .mobile-nav-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
          border-bottom: 1px solid rgba(0,0,0,0.08);
          padding-bottom: 15px;
        }
        .logo-text-small {
          font-family: var(--font-heading);
          font-size: 24px;
          font-weight: 500;
          letter-spacing: 2px;
        }
        .mobile-nav-list {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        .mobile-nav-link {
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          display: block;
          padding: 8px 0;
          border-bottom: 1px solid rgba(0,0,0,0.03);
        }
        
        @media (max-width: 1024px) {
          .header-grid {
            grid-template-columns: 1fr 1fr 1fr;
          }
          .header-col-left {
            display: none;
          }
          .header-col-left-mobile {
            display: flex;
            align-items: center;
          }
          .desktop-nav {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}
