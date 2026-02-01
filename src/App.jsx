

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
//   // ✅ FIX 1: Use lazy initialization to check session storage immediately.
//   // This prevents the loading state from being 'true' for a split second on refresh.
//   const [isLoading, setIsLoading] = useState(() => {
//     return !sessionStorage.getItem("appLoaded");
//   });

//   useEffect(() => {
//     if (isLoading) {
//       const timer = setTimeout(() => {
//         setIsLoading(false);
//         sessionStorage.setItem("appLoaded", "true");
//       }, 3500); 
//       return () => clearTimeout(timer);
//     }
//   }, [isLoading]);

//   return (
//     <Router>
//       <CartProvider>
//         <div className="font-sans antialiased text-gray-800 bg-gray-50 min-h-screen flex flex-col relative w-full overflow-x-hidden">
          
//           {/* LOGIC: Mutually Exclusive Rendering */}
//           {isLoading ? (
//             // State A: Loading
//             <LoadingAnimation />
//           ) : (
//             // State B: Website (FloatingSupport is ONLY here)
//             <>
//               <FloatingSupport />
              
//               <Header />
              
//               <div className="flex-grow w-full">
//                 <Routes>
//                   <Route path="/" element={<Home />} />
//                   <Route path="/ContactUs" element={<ContactUs />} />
//                   <Route path="/AboutUs" element={<AboutUs />} />
//                   <Route path="/brands" element={<BrandsPage />} />
//                   <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//                   <Route path="/products" element={<ProductsPage />} />
//                   <Route path="/products/:category" element={<ProductsPage />} />
//                   <Route path="/cart" element={<CartPage />} />
//                 </Routes>
//               </div>
              
//               <Footer />
//             </>
//           )}
          
//         </div>
//       </CartProvider>
//     </Router>
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
  // ✅ FIX 1: Use lazy initialization to check session storage immediately.
  const [isLoading, setIsLoading] = useState(() => {
    return !sessionStorage.getItem("appLoaded");
  });

  useEffect(() => {
    if (isLoading) {
      // ✅ CHANGED: Set to 7000ms (7 seconds)
      const timer = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem("appLoaded", "true");
      }, 7000); 
      
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    <Router>
      <CartProvider>
        <div className="font-sans antialiased text-gray-800 bg-gray-50 min-h-screen flex flex-col relative w-full overflow-x-hidden">
          
          {/* LOGIC: Mutually Exclusive Rendering */}
          {isLoading ? (
            // State A: Loading (Runs for 7 seconds now)
            <LoadingAnimation />
          ) : (
            // State B: Website
            <>
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
