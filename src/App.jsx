import React, { useState } from 'react';
import AnnouncementBar from './components/AnnouncementBar';
import Header from './components/Header';
import HeroVideo from './components/HeroVideo';
import CategoryGrid from './components/CategoryGrid';
import TrendsettersSlider from './components/TrendsettersSlider';
import WatchAndBuy from './components/WatchAndBuy';
import ShippingPromo from './components/ShippingPromo';
import NewInGrid from './components/NewInGrid';
import ShopBySeasons from './components/ShopBySeasons';
import BrandCollage from './components/BrandCollage';
import DualHighlights from './components/DualHighlights';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import HeroSlider from './components/HeroSlider'; // Flat shipping charges banner

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlistCount, setWishlistCount] = useState(0);

  // Add Item to Bag
  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      // Check if item with exact same id and size exists
      const existingIdx = prevItems.findIndex(
        (item) => item.id === product.id && item.size === product.size
      );

      if (existingIdx > -1) {
        const newItems = [...prevItems];
        newItems[existingIdx].quantity += 1;
        return newItems;
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
    // Open cart drawer on add
    setCartOpen(true);
  };

  // Adjust Quantity
  const handleUpdateQuantity = (id, size, newQty) => {
    if (newQty < 1) return;
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.size === size ? { ...item, quantity: newQty } : item
      )
    );
  };

  // Remove Item
  const handleRemoveItem = (id, size) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => !(item.id === id && item.size === size))
    );
  };

  // Calculate total items in cart for header badge
  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="site-wrapper">
      {/* Announcement Bar */}
      <AnnouncementBar />

      {/* Header Area */}
      <Header
        cartCount={totalCartCount}
        wishlistCount={wishlistCount}
        onCartOpen={() => setCartOpen(true)}
      />

      {/* Main Content Area */}
      <main id="MainContent" className="main-content">
        {/* 1. Hero Looping Video */}
        <HeroVideo />

        {/* 2. Trendsetters Product Slider */}
        <TrendsettersSlider onAddToCart={handleAddToCart} />

        {/* 3. Watch & Buy Reels Section */}
        <WatchAndBuy onAddToCart={handleAddToCart} />

        {/* 4. 3 Column Category Cards Grid */}
        <CategoryGrid />

        {/* 5. Campaign Flat Shipping Banner */}
        <HeroSlider />

        {/* 6. New In Product Grid */}
        <NewInGrid onAddToCart={handleAddToCart} />

        {/* 7. Split shipping info & stitching features */}
        <ShippingPromo />

        {/* 8. Circular Seasons Collections */}
        <ShopBySeasons />

        {/* 9. Brand visual collage grid (#NUREH) */}
        <BrandCollage />

        {/* 10. Circular Call-To-Action Highlights */}
        <DualHighlights />
      </main>

      {/* Footer Area */}
      <Footer />

      {/* Slideout Cart Drawer */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  );
}
