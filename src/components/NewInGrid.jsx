import React from 'react';
import ProductCard from './ProductCard';
import { newInProducts } from '../data/productsData';

export default function NewInGrid({ onAddToCart }) {
  return (
    <section className="new-in-section container" id="new-in">
      <div className="section-header">
        <h2 className="section-title">New In</h2>
      </div>

      {/* Product Grid */}
      <div className="products-grid grid-4 animate-fade">
        {newInProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>

      {/* View All Button */}
      <div className="view-all-container">
        <a href="#collections/new-in" className="btn-view-all">
          View All
        </a>
      </div>

      <style>{`
        .new-in-section {
          padding: 60px 15px;
        }
        .products-grid {
          margin-top: 30px;
        }
        .view-all-container {
          text-align: center;
          margin-top: 45px;
        }
        .btn-view-all {
          display: inline-block;
          background-color: transparent;
          color: var(--color-dark);
          border: 1px solid var(--color-dark);
          padding: 12px 40px;
          font-size: 13px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 2px;
          border-radius: 40px;
          transition: var(--transition-smooth);
        }
        .btn-view-all:hover {
          background-color: var(--color-dark);
          color: #ffffff;
        }
        
        @media (max-width: 768px) {
          .new-in-section {
            padding: 40px 15px;
          }
          .view-all-container {
            margin-top: 30px;
          }
          .btn-view-all {
            padding: 10px 30px;
            font-size: 11.5px;
          }
        }
      `}</style>
    </section>
  );
}
