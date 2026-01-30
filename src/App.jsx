// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import ContactUs from './pages/ContactUs';
// import AboutUs from './pages/AboutUs';
// import BrandsPage from './pages/BrandsPage';
// import PrivacyPolicy from './pages/PrivacyPolicy';
// import ProductsPage from './pages/ProductsPage';
// import CartPage from './pages/CartPage';
// import { CartProvider } from './context/CartContext';
// import FloatingSupport from "./components/FloatingSupport";

// import LoadingAnimation from './components/LoadingAnimation';

// export default function App() {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // Simulate loading your app data
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 3500); // Adjust time as needed

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <CartProvider>
//     <Router>
//       <div className="font-sans antialiased text-gray-800 bg-gray-50 min-h-screen flex flex-col">
//         <FloatingSupport />
//         {isLoading && <LoadingAnimation />}
//         <Header />
        
//         {/* Main content area that will change based on route */}
//         <div className="flex-grow">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/ContactUs" element={<ContactUs />} />
//             <Route path="/AboutUs" element={<AboutUs />} />
            
//             <Route path="/brands" element={<BrandsPage />} />
//             <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//             <Route path="/products" element={<ProductsPage />} />
// <Route path="/products/:category" element={<ProductsPage />} />
//     <Route path="/cart" element={<CartPage />} />

     
//           </Routes>
//         </div>
        
//         <Footer />
//       </div>
//     </Router>
//     </CartProvider>
//   );
// }




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
    // Check if we already loaded this session
    const hasLoaded = sessionStorage.getItem("appLoaded");
    
    if (hasLoaded) {
      setIsLoading(false);
    } else {
      const timer = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem("appLoaded", "true");
      }, 3500); 
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <Router>
      <CartProvider>
        <div className="font-sans antialiased text-gray-800 bg-gray-50 min-h-screen flex flex-col relative w-full overflow-x-hidden">
          
          {/* LOGIC: If loading, show ONLY animation. */}
          {isLoading ? (
            <LoadingAnimation />
          ) : (
            /* If NOT loading, show the entire website */
            <>
              {/* ✅ MOVED INSIDE: Now it only shows after animation is done */}
              <FloatingSupport />
              
              <Header />
              
              <div className="flex-grow w-full">
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
            </>
          )}
          
        </div>
      </CartProvider>
    </Router>
  );
}

