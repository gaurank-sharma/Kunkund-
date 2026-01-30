import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import BrandsPage from './pages/BrandsPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import { CartProvider } from './context/CartContext';
import FloatingSupport from "./components/FloatingSupport";

import LoadingAnimation from './components/LoadingAnimation';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading your app data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <CartProvider>
    <Router>
      <div className="font-sans antialiased text-gray-800 bg-gray-50 min-h-screen flex flex-col">
        <FloatingSupport />
        {isLoading && <LoadingAnimation />}
        <Header />
        
        {/* Main content area that will change based on route */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            
            <Route path="/brands" element={<BrandsPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/products" element={<ProductsPage />} />
<Route path="/products/:category" element={<ProductsPage />} />
    <Route path="/cart" element={<CartPage />} />

     
          </Routes>
        </div>
        
        <Footer />
      </div>
    </Router>
    </CartProvider>
  );
}



