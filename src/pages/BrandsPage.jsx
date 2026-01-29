// import React, { useEffect, useRef, useState } from "react";
// import { useLocation, Link, useNavigate } from "react-router-dom";

// // ✅ Import your own images for Doms
// import D1 from "../assets/Brand/Doms/D1.jpg";
// import D2 from "../assets/Brand/Doms/D2.jpg";
// import D3 from "../assets/Brand/Doms/D3.jpg";
// import D4 from "../assets/Brand/Doms/D4.jpg";
// import D5 from "../assets/Brand/Doms/D5.jpg";
// import D6 from "../assets/Brand/Doms/D6.jpg";
// import D7 from "../assets/Brand/Doms/D7.jpg";
// import D8 from "../assets/Brand/Doms/D8.jpg";
// import D9 from "../assets/Brand/Doms/D9.jpg";
// import D10 from "../assets/Brand/Doms/D10.jpg";
// import D11 from "../assets/Brand/Doms/D11.jpg";
// import DomsThumb from "../assets/Brand/Doms/Doms.jpg"
// import DomsPDF from "../assets/Brand/Doms/Doms.pdf";
// import DomsLogo from "../assets/Brand/Doms/Doms.jpg"; // Add logo import

// // ✅ Import images for Kores
// import K1 from "../assets/Brand/Kores/K1.jpg";
// import K2 from "../assets/Brand/Kores/K2.jpg";
// import K3 from "../assets/Brand/Kores/K3.jpg";
// import K4 from "../assets/Brand/Kores/K4.jpg";
// import K5 from "../assets/Brand/Kores/K5.jpg";
// import K6 from "../assets/Brand/Kores/K6.jpg";
// import K7 from "../assets/Brand/Kores/K7.jpg";
// import K8 from "../assets/Brand/Kores/K8.jpg";
// import K9 from "../assets/Brand/Kores/K9.jpg";
// import K10 from "../assets/Brand/Kores/K10.jpg";
// import K11 from "../assets/Brand/Kores/K11.jpg";
// import KoresThumb from "../assets/Brand/Kores/Kores.jpg"
// import KoresPDF from "../assets/Brand/Kores/Kores.pdf";
// import KoresLogo from "../assets/Brand/Kores/Kores.jpg"; // Add logo import

// // ✅ Import images for Munix
// import MU1 from "../assets/Brand/Munix/MU1.jpg";
// import MU2 from "../assets/Brand/Munix/MU2.jpg";
// import MU3 from "../assets/Brand/Munix/MU3.jpg";
// import MU4 from "../assets/Brand/Munix/MU4.jpg";
// import MU5 from "../assets/Brand/Munix/MU5.jpg";
// import MU6 from "../assets/Brand/Munix/MU6.jpg";
// import MU7 from "../assets/Brand/Munix/MU7.jpg";
// import MU8 from "../assets/Brand/Munix/MU8.jpg";
// import MU9 from "../assets/Brand/Munix/MU9.jpg";
// import MU10 from "../assets/Brand/Munix/MU10.jpg";
// import MU11 from "../assets/Brand/Munix/MU11.jpg";
// import MunixThumb from "../assets/Brand/Munix/Munix.jpg"
// import MunixPDF from "../assets/Brand/Munix/Munix.pdf";
// import MunixLogo from "../assets/Brand/Munix/Munix.jpg"; // Add logo import

// // ✅ Import images for Miles
// import MI1 from "../assets/Brand/Miles/MI1.jpg";
// import MI2 from "../assets/Brand/Miles/MI2.jpg";
// import MI3 from "../assets/Brand/Miles/MI3.jpg";
// import MI4 from "../assets/Brand/Miles/MI4.jpg";
// import MI5 from "../assets/Brand/Miles/MI5.jpg";
// import MI6 from "../assets/Brand/Miles/MI6.jpg";
// import MI7 from "../assets/Brand/Miles/MI7.jpg";
// import MI8 from "../assets/Brand/Miles/MI8.jpg";
// import MI9 from "../assets/Brand/Miles/MI9.jpg";
// import MI10 from "../assets/Brand/Miles/MI10.jpg";
// import MI11 from "../assets/Brand/Miles/MI11.jpg";
// import MilesThumb from "../assets/Brand/Miles/Miles.jpg"
// import MilesPDF from "../assets/Brand/Miles/Miles.pdf";
// import MilesLogo from "../assets/Brand/Miles/Miles.jpg"; // Add logo import

// // ✅ Import images for Cello
// import C1 from "../assets/Brand/Cello/1.jpg";
// import C2 from "../assets/Brand/Cello/2.jpg";
// import C3 from "../assets/Brand/Cello/3.jpg";
// import C4 from "../assets/Brand/Cello/4.jpg";
// import C5 from "../assets/Brand/Cello/5.jpg";
// import C6 from "../assets/Brand/Cello/6.jpg";
// import C7 from "../assets/Brand/Cello/7.jpg";
// import C8 from "../assets/Brand/Cello/8.jpg";
// import C9 from "../assets/Brand/Cello/9.jpg";
// import C10 from "../assets/Brand/Cello/10.jpg";
// import C11 from "../assets/Brand/Cello/11.jpg";
// import C12 from "../assets/Brand/Cello/12.jpg";
// import CelloThumb from "../assets/Brand/Cello/Ct.jpg";
// import CelloPDF from "../assets/Brand/Cello/Cello.pdf";
// import CelloLogo from "../assets/Brand/Cello/Ct.jpg"; // Add logo import

// // ✅ Import images for Natraj
// import N1 from "../assets/Brand/Natraj/1.jpg";
// import N2 from "../assets/Brand/Natraj/2.jpg";
// import N3 from "../assets/Brand/Natraj/3.jpg";
// import N4 from "../assets/Brand/Natraj/4.jpg";
// import N5 from "../assets/Brand/Natraj/5.jpg";
// import N6 from "../assets/Brand/Natraj/6.jpg";
// import N7 from "../assets/Brand/Natraj/7.jpg";
// import N8 from "../assets/Brand/Natraj/8.jpg";
// import N9 from "../assets/Brand/Natraj/9.jpg";
// import N10 from "../assets/Brand/Natraj/10.jpg";
// import N11 from "../assets/Brand/Natraj/11.jpg";
// import N12 from "../assets/Brand/Natraj/12.jpg";
// import NatrajThumb from "../assets/Brand/Natraj/Nt.jpg";
// import NatrajPDF from "../assets/Brand/Natraj/Natraj.pdf";
// import NatrajLogo from "../assets/Brand/Natraj/Nt.jpg"; // Add logo import

// // ✅ Import images for Saino
// import S1 from "../assets/Brand/Saino/1.jpg";
// import S2 from "../assets/Brand/Saino/2.jpg";
// import S3 from "../assets/Brand/Saino/3.jpg";
// import S4 from "../assets/Brand/Saino/4.jpg";
// import S5 from "../assets/Brand/Saino/5.jpg";
// import S6 from "../assets/Brand/Saino/6.jpg";
// import S7 from "../assets/Brand/Saino/7.jpg";
// import S8 from "../assets/Brand/Saino/8.jpg";
// import S9 from "../assets/Brand/Saino/9.jpg";
// import S10 from "../assets/Brand/Saino/10.jpg";
// import S11 from "../assets/Brand/Saino/11.jpg";
// import S12 from "../assets/Brand/Saino/12.jpg";
// import SainoThumb from "../assets/Brand/Saino/St.jpg";
// import SainoPDF from "../assets/Brand/Saino/Saino.pdf";
// import SainoLogo from "../assets/Brand/Saino/St.jpg"; // Add logo import

// // ✅ Import images for Pierre
// import P1 from "../assets/Brand/Pier/1.jpg";
// import P2 from "../assets/Brand/Pier/2.jpg";
// import P3 from "../assets/Brand/Pier/3.jpg";
// import P4 from "../assets/Brand/Pier/4.jpg";
// import P5 from "../assets/Brand/Pier/5.jpg";
// import P6 from "../assets/Brand/Pier/6.jpg";
// import P7 from "../assets/Brand/Pier/7.jpg";
// import P8 from "../assets/Brand/Pier/8.jpg";
// import P9 from "../assets/Brand/Pier/9.jpg";
// import P10 from "../assets/Brand/Pier/10.jpg";
// import P11 from "../assets/Brand/Pier/11.jpg";
// import P12 from "../assets/Brand/Pier/12.jpg";
// import PierreThumb from "../assets/Brand/Pier/pier.jpg";
// import PierrePDF from "../assets/Brand/Pier/Pierre.pdf";
// import PierreLogo from "../assets/Brand/Pier/pier.jpg"; // Add logo import

// const brandsData = [
//   {
//     name: "Doms",
//     images: [D1, D2, D3, D4, D5, D6, D7, D8, D9, D10, D11],
//     pdf: DomsPDF,
//     pdfThumb: DomsThumb,
//     logo: DomsLogo, // Add logo
//     color: "from-blue-500 to-cyan-500",
//   },
//   {
//     name: "Kores",
//     images: [K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11],
//     pdf: KoresPDF,
//     pdfThumb: KoresThumb,
//     logo: KoresLogo, // Add logo
//     color: "from-purple-500 to-pink-500",
//   },
//   {
//     name: "Munix",
//     images: [MU1, MU2, MU3, MU4, MU5, MU6, MU7, MU8, MU9, MU10, MU11],
//     pdf: MunixPDF,
//     pdfThumb: MunixThumb,
//     logo: MunixLogo, // Add logo
//     color: "from-green-500 to-emerald-500",
//   },
//   {
//     name: "Miles",
//     images: [MI1, MI2, MI3, MI4, MI5, MI6, MI7, MI8, MI9, MI10, MI11],
//     pdf: MilesPDF,
//     pdfThumb: MilesThumb,
//     logo: MilesLogo, // Add logo
//     color: "from-orange-500 to-red-500",
//   },
//   {
//     name: "Cello",
//     images: [C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, C11, C12],
//     pdf: CelloPDF,
//     pdfThumb: CelloThumb,
//     logo: CelloLogo, // Add logo
//     color: "from-red-500 to-yellow-500",
//   },
//   {
//     name: "Natraj",
//     images: [N1, N2, N3, N4, N5, N6, N7, N8, N9, N10, N11, N12],
//     pdf: NatrajPDF,
//     pdfThumb: NatrajThumb,
//     logo: NatrajLogo, // Add logo
//     color: "from-pink-500 to-purple-500",
//   },
//   {
//     name: "Saino",
//     images: [S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12],
//     pdf: SainoPDF,
//     pdfThumb: SainoThumb,
//     logo: SainoLogo, // Add logo
//     color: "from-blue-500 to-indigo-500",
//   },
//   {
//     name: "Pierre",
//     images: [P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12],
//     pdf: PierrePDF,
//     pdfThumb: PierreThumb,
//     logo: PierreLogo, // Add logo
//     color: "from-emerald-500 to-green-700",
//   },
// ];

// // Helper function to pair images for left/right layout
// const pairImages = (images) => {
//   const pairs = [];
//   for (let i = 0; i < images.length; i += 2) {
//     if (i + 1 < images.length) {
//       pairs.push([images[i], images[i + 1]]);
//     } else {
//       pairs.push([images[i], images[0]]); // If odd number, pair last with first
//     }
//   }
//   return pairs;
// };

// function BrandsPage() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const brandRefs = useRef({});
//   const [activeImage, setActiveImage] = useState(null);
//   const [cartItems, setCartItems] = useState([]);

//   // Load cart items from localStorage on component mount
//   useEffect(() => {
//     const savedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
//     setCartItems(savedCartItems);
//   }, []);

//   // Update localStorage whenever cartItems change
//   useEffect(() => {
//     localStorage.setItem("cartItems", JSON.stringify(cartItems));
//   }, [cartItems]);

//   useEffect(() => {
//     if (location.hash) {
//       const brand = location.hash.replace("#", "");
//       if (brandRefs.current[brand]) {
//         setTimeout(() => {
//           brandRefs.current[brand].scrollIntoView({
//             behavior: "smooth",
//             block: "start",
//           });
//         }, 300);
//       }
//     }
//   }, [location]);

//   const openLightbox = (image) => setActiveImage(image);
//   const closeLightbox = () => setActiveImage(null);

//   // Close lightbox when clicking outside the image
//   const handleBackdropClick = (e) => {
//     if (e.target === e.currentTarget) {
//       closeLightbox();
//     }
//   };

//   // Close lightbox with Escape key
//   useEffect(() => {
//     const handleEscape = (e) => {
//       if (e.key === "Escape") {
//         closeLightbox();
//       }
//     };

//     if (activeImage) {
//       document.addEventListener("keydown", handleEscape);
//       document.body.style.overflow = "hidden"; // Prevent scrolling when lightbox is open
//     } else {
//       document.body.style.overflow = "auto";
//     }

//     return () => {
//       document.removeEventListener("keydown", handleEscape);
//       document.body.style.overflow = "auto";
//     };
//   }, [activeImage]);

//   const handleEnquiry = (brandName, imageIndex) => {
//     navigate("/ContactUs", { state: { brand: brandName, product: imageIndex + 1 } });
//   };

//   const addToCart = (brandName, imageIndex, imageSrc) => {
//     const priceMap = {
//       "Doms": 12.99,
//       "Kores": 9.99,
//       "Munix": 14.99,
//       "Miles": 11.99
//     };
    
//     const basePrice = priceMap[brandName] || 10.99;
//     const price = basePrice + (imageIndex * 0.5);
    
//     const newItem = {
//       id: `${brandName}-${imageIndex}-${Date.now()}`,
//       brand: brandName,
//       imageIndex,
//       imageSrc,
//       price,
//       quantity: 1,
//       timestamp: Date.now()
//     };
    
//     const existingCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
//     const existingItemIndex = existingCartItems.findIndex(
//       item => item.brand === brandName && item.imageIndex === imageIndex
//     );
    
//     let updatedCartItems;
//     if (existingItemIndex >= 0) {
//       updatedCartItems = [...existingCartItems];
//       updatedCartItems[existingItemIndex].quantity += 1;
//     } else {
//       updatedCartItems = [...existingCartItems, newItem];
//     }
    
//     setCartItems(updatedCartItems);
//     localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    
//     const notification = document.createElement("div");
//     notification.className = "fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50";
//     notification.textContent = "Added to cart!";
//     document.body.appendChild(notification);
//     setTimeout(() => document.body.removeChild(notification), 2000);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
//       {/* Cart Icon */}
//       <div className="fixed top-4 right-4 z-40">
//         <Link to="/cart" className="relative flex items-center justify-center bg-blue-600 p-3 rounded-full shadow-lg hover:bg-blue-700 transition">
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
//           </svg>
//           {cartItems.length > 0 && (
//             <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
//               {cartItems.reduce((total, item) => total + item.quantity, 0)}
//             </span>
//           )}
//         </Link>
//       </div>

//       {/* Lightbox Modal */}
//       {activeImage && (
//         <div 
//           className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4" 
//           onClick={handleBackdropClick}
//         >
//           <div className="relative max-w-4xl max-h-full w-full">
//             {/* Cross Button */}
//             <button 
//               className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200 z-10 md:top-4 md:right-4 bg-black/50 rounded-full p-2 backdrop-blur-sm"
//               onClick={closeLightbox}
//               aria-label="Close image"
//             >
//               <svg 
//                 xmlns="http://www.w3.org/2000/svg" 
//                 className="h-8 w-8 md:h-10 md:w-10" 
//                 fill="none" 
//                 viewBox="0 0 24 24" 
//                 stroke="currentColor"
//                 strokeWidth={2}
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>
            
//             {/* Image */}
//             <img 
//               src={activeImage} 
//               alt="Enlarged view" 
//               className="w-full h-auto max-h-[80vh] object-contain rounded-lg" 
//             />
            
//             {/* Download Button */}
//             <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
//               <a 
//                 href={activeImage} 
//                 download 
//                 className="bg-white/90 text-gray-900 px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-white transition-colors duration-200 backdrop-blur-sm"
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
//                 </svg>
//                 <span>Download</span>
//               </a>
//             </div>
//           </div>
//         </div>
//       )}

//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
//             Our Brands
//           </h1>
//           <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
//             Discover our premium collection of brands, each offering unique products designed to meet your needs.
//           </p>
//         </div>

//         {brandsData.map((brand) => {
//           const imagePairs = pairImages(brand.images);
          
//           return (
//             <div key={brand.name} id={brand.name.toLowerCase()} ref={(el) => (brandRefs.current[brand.name.toLowerCase()] = el)} className="mb-16 md:mb-24 scroll-mt-16">
//               {/* Brand Header with Logo */}
//               <div className={`mb-8 md:mb-10 p-6 md:p-8 rounded-2xl bg-gradient-to-r ${brand.color} text-white shadow-xl`}>
//                 <div className="flex items-center space-x-4">
//                   {brand.logo && (
//                     <div className="flex-shrink-0">
//                       <img 
//                         src={brand.logo} 
//                         alt={`${brand.name} logo`} 
//                         className="h-12 w-12 md:h-16 md:w-16 object-contain bg-white rounded-lg p-1"
//                       />
//                     </div>
//                   )}
//                   <div>
//                     <h2 className="text-3xl md:text-4xl font-bold">{brand.name}</h2>
//                     <p className="mt-2 opacity-90">Explore our {brand.name} product collection</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Grid */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
//                 {imagePairs.map((pair, i) => (
//                   <div key={i} className="bg-white rounded-xl md:rounded-2xl shadow-lg overflow-hidden flex flex-col">
//                     <div className="flex h-48 md:h-64">
//                       <div className="flex-1 flex items-center justify-center bg-white overflow-hidden border-r">
//                         <img
//                           src={pair[0]}
//                           alt={`${brand.name} product ${i * 2 + 1}`}
//                           className="max-h-full max-w-full object-contain p-2 cursor-pointer hover:scale-105 transition-transform duration-300"
//                           onClick={() => openLightbox(pair[0])}
//                         />
//                       </div>
//                       <div className="flex-1 flex items-center justify-center bg-white overflow-hidden">
//                         <img
//                           src={pair[1]}
//                           alt={`${brand.name} product ${i * 2 + 2}`}
//                           className="max-h-full max-w-full object-contain p-2 cursor-pointer hover:scale-105 transition-transform duration-300"
//                           onClick={() => openLightbox(pair[1])}
//                         />
//                       </div>
//                     </div>

//                     {/* Buttons */}
//                     <div className="flex justify-between items-center px-3 py-2 border-t">
//                       <button
//                         className="bg-white border border-gray-300 text-gray-700 font-medium py-1 px-3 rounded text-sm shadow-sm hover:bg-gray-100 transition-colors duration-200"
//                         onClick={() => handleEnquiry(brand.name, i * 2)}
//                       >
//                         Enquiry
//                       </button>
//                       <div className="flex space-x-2">
//                         <button
//                           className="bg-blue-600 text-white p-2 rounded-full shadow-md hover:scale-110 hover:bg-blue-700 transition-all duration-200"
//                           onClick={() => addToCart(brand.name, i * 2, pair[0])}
//                           title="Add left product to cart"
//                         >
//                           <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//                           </svg>
//                         </button>
//                         <button
//                           className="bg-blue-600 text-white p-2 rounded-full shadow-md hover:scale-110 hover:bg-blue-700 transition-all duration-200"
//                           onClick={() => addToCart(brand.name, i * 2 + 1, pair[1])}
//                           title="Add right product to cart"
//                         >
//                           <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//                           </svg>
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}

//                 {/* PDF card */}
//                 {brand.pdf && (
//                   <a key={`${brand.name}-pdf`} href={brand.pdf} target="_blank" rel="noopener noreferrer" className="block relative group">
//                     <div className="relative w-full h-48 md:h-64 rounded-xl md:rounded-2xl shadow-lg overflow-hidden border-2 border-white">
//                       <img src={brand.pdfThumb} alt={`${brand.name} PDF`} className="w-full h-full object-cover opacity-40 group-hover:opacity-30 transition-all duration-300" />
//                       <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-gray-900/40 flex flex-col items-center justify-center p-4 text-center">
//                         <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1">
//                           <h3 className="text-sm md:text-lg font-bold text-gray-800">{brand.name}</h3>
//                         </div>
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-16 md:w-16 text-white mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                         </svg>
//                         <span className="text-base md:text-xl font-bold text-white">Product Catalog</span>
//                         <span className="text-sm md:text-lg text-white">Download PDF</span>
//                         <div className="mt-2 px-3 py-1 bg-white text-gray-900 rounded-full text-xs md:text-sm font-medium">Click to view</div>
//                       </div>
//                     </div>
//                   </a>
//                 )}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default BrandsPage;

import React, { useEffect, useRef, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";
import { useCart } from "../context/CartContext";

// --- ASSET IMPORTS (EXISTING) ---
// Keep your existing imports here...
import D1 from "../assets/Brand/Doms/D1.jpg";
import D2 from "../assets/Brand/Doms/D2.jpg";
import D3 from "../assets/Brand/Doms/D3.jpg";
import D4 from "../assets/Brand/Doms/D4.jpg";
import D5 from "../assets/Brand/Doms/D5.jpg";
import D6 from "../assets/Brand/Doms/D6.jpg";
import D7 from "../assets/Brand/Doms/D7.jpg";
import D8 from "../assets/Brand/Doms/D8.jpg";
import D9 from "../assets/Brand/Doms/D9.jpg";
import D10 from "../assets/Brand/Doms/D10.jpg";
import D11 from "../assets/Brand/Doms/D11.jpg";
import DomsThumb from "../assets/Brand/Doms/Doms.jpg"
import DomsPDF from "../assets/Brand/Doms/Doms.pdf";
import DomsLogo from "../assets/Brand/Doms/Doms.jpg";

import K1 from "../assets/Brand/Kores/K1.jpg";
import K2 from "../assets/Brand/Kores/K2.jpg";
import K3 from "../assets/Brand/Kores/K3.jpg";
import K4 from "../assets/Brand/Kores/K4.jpg";
import K5 from "../assets/Brand/Kores/K5.jpg";
import K6 from "../assets/Brand/Kores/K6.jpg";
import K7 from "../assets/Brand/Kores/K7.jpg";
import K8 from "../assets/Brand/Kores/K8.jpg";
import K9 from "../assets/Brand/Kores/K9.jpg";
import K10 from "../assets/Brand/Kores/K10.jpg";
import K11 from "../assets/Brand/Kores/K11.jpg";
import KoresThumb from "../assets/Brand/Kores/Kores.jpg"
import KoresPDF from "../assets/Brand/Kores/Kores.pdf";
import KoresLogo from "../assets/Brand/Kores/Kores.jpg";

import MU1 from "../assets/Brand/Munix/MU1.jpg";
import MU2 from "../assets/Brand/Munix/MU2.jpg";
import MU3 from "../assets/Brand/Munix/MU3.jpg";
import MU4 from "../assets/Brand/Munix/MU4.jpg";
import MU5 from "../assets/Brand/Munix/MU5.jpg";
import MU6 from "../assets/Brand/Munix/MU6.jpg";
import MU7 from "../assets/Brand/Munix/MU7.jpg";
import MU8 from "../assets/Brand/Munix/MU8.jpg";
import MU9 from "../assets/Brand/Munix/MU9.jpg";
import MU10 from "../assets/Brand/Munix/MU10.jpg";
import MU11 from "../assets/Brand/Munix/MU11.jpg";
import MunixThumb from "../assets/Brand/Munix/Munix.jpg"
import MunixPDF from "../assets/Brand/Munix/Munix.pdf";
import MunixLogo from "../assets/Brand/Munix/Munix.jpg";

import MI1 from "../assets/Brand/Miles/MI1.jpg";
import MI2 from "../assets/Brand/Miles/MI2.jpg";
import MI3 from "../assets/Brand/Miles/MI3.jpg";
import MI4 from "../assets/Brand/Miles/MI4.jpg";
import MI5 from "../assets/Brand/Miles/MI5.jpg";
import MI6 from "../assets/Brand/Miles/MI6.jpg";
import MI7 from "../assets/Brand/Miles/MI7.jpg";
import MI8 from "../assets/Brand/Miles/MI8.jpg";
import MI9 from "../assets/Brand/Miles/MI9.jpg";
import MI10 from "../assets/Brand/Miles/MI10.jpg";
import MI11 from "../assets/Brand/Miles/MI11.jpg";
import MilesThumb from "../assets/Brand/Miles/Miles.jpg"
import MilesPDF from "../assets/Brand/Miles/Miles.pdf";
import MilesLogo from "../assets/Brand/Miles/Miles.jpg";

import C1 from "../assets/Brand/Cello/1.jpg";
import C2 from "../assets/Brand/Cello/2.jpg";
import C3 from "../assets/Brand/Cello/3.jpg";
import C4 from "../assets/Brand/Cello/4.jpg";
import C5 from "../assets/Brand/Cello/5.jpg";
import C6 from "../assets/Brand/Cello/6.jpg";
import C7 from "../assets/Brand/Cello/7.jpg";
import C8 from "../assets/Brand/Cello/8.jpg";
import C9 from "../assets/Brand/Cello/9.jpg";
import C10 from "../assets/Brand/Cello/10.jpg";
import C11 from "../assets/Brand/Cello/11.jpg";
import C12 from "../assets/Brand/Cello/12.jpg";
import CelloThumb from "../assets/Brand/Cello/Ct.jpg";
import CelloPDF from "../assets/Brand/Cello/Cello.pdf";
import CelloLogo from "../assets/Brand/Cello/Ct.jpg";

import N1 from "../assets/Brand/Natraj/1.jpg";
import N2 from "../assets/Brand/Natraj/2.jpg";
import N3 from "../assets/Brand/Natraj/3.jpg";
import N4 from "../assets/Brand/Natraj/4.jpg";
import N5 from "../assets/Brand/Natraj/5.jpg";
import N6 from "../assets/Brand/Natraj/6.jpg";
import N7 from "../assets/Brand/Natraj/7.jpg";
import N8 from "../assets/Brand/Natraj/8.jpg";
import N9 from "../assets/Brand/Natraj/9.jpg";
import N10 from "../assets/Brand/Natraj/10.jpg";
import N11 from "../assets/Brand/Natraj/11.jpg";
import N12 from "../assets/Brand/Natraj/12.jpg";
import NatrajThumb from "../assets/Brand/Natraj/Nt.jpg";
import NatrajPDF from "../assets/Brand/Natraj/Natraj.pdf";
import NatrajLogo from "../assets/Brand/Natraj/Nt.jpg";

import S1 from "../assets/Brand/Saino/1.jpg";
import S2 from "../assets/Brand/Saino/2.jpg";
import S3 from "../assets/Brand/Saino/3.jpg";
import S4 from "../assets/Brand/Saino/4.jpg";
import S5 from "../assets/Brand/Saino/5.jpg";
import S6 from "../assets/Brand/Saino/6.jpg";
import S7 from "../assets/Brand/Saino/7.jpg";
import S8 from "../assets/Brand/Saino/8.jpg";
import S9 from "../assets/Brand/Saino/9.jpg";
import S10 from "../assets/Brand/Saino/10.jpg";
import S11 from "../assets/Brand/Saino/11.jpg";
import S12 from "../assets/Brand/Saino/12.jpg";
import SainoThumb from "../assets/Brand/Saino/St.jpg";
import SainoPDF from "../assets/Brand/Saino/Saino.pdf";
import SainoLogo from "../assets/Brand/Saino/St.jpg";

import P1 from "../assets/Brand/Pier/1.jpg";
import P2 from "../assets/Brand/Pier/2.jpg";
import P3 from "../assets/Brand/Pier/3.jpg";
import P4 from "../assets/Brand/Pier/4.jpg";
import P5 from "../assets/Brand/Pier/5.jpg";
import P6 from "../assets/Brand/Pier/6.jpg";
import P7 from "../assets/Brand/Pier/7.jpg";
import P8 from "../assets/Brand/Pier/8.jpg";
import P9 from "../assets/Brand/Pier/9.jpg";
import P10 from "../assets/Brand/Pier/10.jpg";
import P11 from "../assets/Brand/Pier/11.jpg";
import P12 from "../assets/Brand/Pier/12.jpg";
import PierreThumb from "../assets/Brand/Pier/pier.jpg";
import PierrePDF from "../assets/Brand/Pier/Pierre.pdf";
import PierreLogo from "../assets/Brand/Pier/pier.jpg";


import Pd1 from "../assets/Brand/Saino/Pidilite/fevigum.jpg";
import PedilitePdf  from "../assets/Brand/pedilite.pdf";
import FlairPdf  from "../assets/Brand/pen.pdf";
import MontexPdf from "../assets/Brand/montex.pdf"





// --- DATA CONFIGURATION ---
// I have converted "images" array to "products" array of objects.
// EDIT NAMES HERE for each product.

const brandsData = [
  {
    name: "Doms",
    products: [
        { name: "Doms Pencil Box", img: D1 },
        { name: "Doms Eraser Set", img: D2 },
        { name: "Doms Water Colours", img: D3 },
        { name: "Doms Sketch Pens", img: D4 },
        { name: "Doms Geometry Box", img: D5 },
        { name: "Doms Crayons", img: D6 },
        { name: "Doms Brush Pens", img: D7 },
        { name: "Doms Sharpener", img: D8 },
        { name: "Doms Scale", img: D9 },
        { name: "Doms Marker", img: D10 },
        { name: "Doms Notebook", img: D11 },
    ],
    pdf: DomsPDF,
    pdfThumb: DomsThumb,
    logo: DomsLogo,
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Kores",
    products: [
        { name: "Kores Glue Stick", img: K1 },
        { name: "Kores Carbon Paper", img: K2 },
        { name: "Kores White Board Marker", img: K3 },
        { name: "Kores Correction Pen", img: K4 },
        { name: "Kores Stapler", img: K5 },
        { name: "Kores Punch", img: K6 },
        { name: "Kores Post-it", img: K7 },
        { name: "Kores Tape", img: K8 },
        { name: "Kores Highlighters", img: K9 },
        { name: "Kores Inks", img: K10 },
        { name: "Kores Scissors", img: K11 },
    ],
    pdf: KoresPDF,
    pdfThumb: KoresThumb,
    logo: KoresLogo,
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Munix",
    products: [
        { name: "Munix Scissors Small", img: MU1 },
        { name: "Munix Scissors Large", img: MU2 },
        { name: "Munix Cutter", img: MU3 },
        { name: "Munix Knife", img: MU4 },
        { name: "Munix Tape Dispenser", img: MU5 },
        { name: "Munix Product 6", img: MU6 },
        { name: "Munix Product 7", img: MU7 },
        { name: "Munix Product 8", img: MU8 },
        { name: "Munix Product 9", img: MU9 },
        { name: "Munix Product 10", img: MU10 },
        { name: "Munix Product 11", img: MU11 },
    ],
    pdf: MunixPDF,
    pdfThumb: MunixThumb,
    logo: MunixLogo,
    color: "from-green-500 to-emerald-500",
  },
  
  {
    name: "Cello",
    products: [
        { name: "Cello Butterflow", img: C1 },
        { name: "Cello Gripper", img: C2 },
        { name: "Cello Gel Pen", img: C3 },
        { name: "Cello Ball Pen", img: C4 },
        { name: "Cello Maxriter", img: C5 },
        { name: "Cello Finegrip", img: C6 },
        { name: "Cello Tape", img: C7 },
        { name: "Cello Bottle", img: C8 },
        { name: "Cello Tiffin", img: C9 },
        { name: "Cello Product 10", img: C10 },
        { name: "Cello Product 11", img: C11 },
        { name: "Cello Product 12", img: C12 },
    ],
    pdf: CelloPDF,
    pdfThumb: CelloThumb,
    logo: CelloLogo,
    color: "from-red-500 to-yellow-500",
  },
  {
    name: "Natraj + Apsara",
    products: [
        { name: "Natraj 621 Pencil", img: N1 },
        { name: "Natraj Bold", img: N2 },
        { name: "Natraj Eraser", img: N3 },
        { name: "Natraj Sharpener", img: N4 },
        { name: "Natraj Scale", img: N5 },
        { name: "Natraj Kit", img: N6 },
        { name: "Natraj Colors", img: N7 },
        { name: "Natraj Pens", img: N8 },
        { name: "Natraj Product 9", img: N9 },
        { name: "Natraj Product 10", img: N10 },
        { name: "Natraj Product 11", img: N11 },
        { name: "Natraj Product 12", img: N12 },
    ],
    pdf: NatrajPDF,
    pdfThumb: NatrajThumb,
    logo: NatrajLogo,
    color: "from-pink-500 to-purple-500",
  },
  {
    name: "Saino",
    products: [
        { name: "Saino Softek", img: S1 },
        { name: "Saino Gel", img: S2 },
        { name: "Saino Ball", img: S3 },
        { name: "Saino Pro", img: S4 },
        { name: "Saino Product 5", img: S5 },
        { name: "Saino Product 6", img: S6 },
        { name: "Saino Product 7", img: S7 },
        { name: "Saino Product 8", img: S8 },
        { name: "Saino Product 9", img: S9 },
        { name: "Saino Product 10", img: S10 },
        { name: "Saino Product 11", img: S11 },
        { name: "Saino Product 12", img: S12 },
    ],
    pdf: SainoPDF,
    pdfThumb: SainoThumb,
    logo: SainoLogo,
    color: "from-blue-500 to-indigo-500",
  },
  {
    name: "Pierre",
    products: [
        { name: "Pierre Cardin Pen", img: P1 },
        { name: "Pierre Roller", img: P2 },
        { name: "Pierre Gold", img: P3 },
        { name: "Pierre Silver", img: P4 },
        { name: "Pierre Gift Set", img: P5 },
        { name: "Pierre Product 6", img: P6 },
        { name: "Pierre Product 7", img: P7 },
        { name: "Pierre Product 8", img: P8 },
        { name: "Pierre Product 9", img: P9 },
        { name: "Pierre Product 10", img: P10 },
        { name: "Pierre Product 11", img: P11 },
        { name: "Pierre Product 12", img: P12 },
    ],
    pdf: PierrePDF,
    pdfThumb: PierreThumb,
    logo: PierreLogo,
    color: "from-emerald-500 to-green-700",
  },
  // --- NEW TEMPLATE BRANDS (Add your details here) ---
  {
    name: "Pidilite",
    products: [
       // Use placeholder for now, replace `img` with your import later
       { name: "Fevicol", img: "https://scoffco.com/cdn/shop/files/71yeTZ8_PMS._SX450.jpg?v=1730548353&width=1445" },
       { name: "Moldit clay", img: "https://bbag.in/cdn/shop/files/Pidilite-Fevicryl-Mouldit-Clay-90g_2.webp?v=1733816433&width=1080" },
       { name: "Fabric Glue", img: "https://canvazo.com/cdn/shop/products/Pidilite-Fevicryl-Fabric-Glue-Pidilite-1667642708.jpg?v=1667642709" },
       { name: "Acrylic colour", img: "https://intelkidsstore.com/cdn/shop/files/096009ec-e81e-4351-881a-db884207e6f2_1200x1200.jpg?v=1684771320" },
        { name: "Mseal", img: "https://assets.pidilite.com/is/image/pidilite/Mseal-2nd-Section-2?ts=1712908605671&dpr=off" },
       { name: "Rangeela ", img: "https://kundantraders.co.in/cdn/shop/products/PidiliteRangeelaTemperaColor_1024x.webp?v=1678452755" },
       { name: "Glass colour ", img: "https://m.media-amazon.com/images/I/711bRhKb8RL.jpg" },
       { name: "Fevigum", img: Pd1 },
    ],
    pdf: PedilitePdf , // Add pdf import if you have one
    pdfThumb: "https://placehold.co/400x400?text=PDF",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b3/Pidilite_logo.svg/1200px-Pidilite_logo.svg.png",
    color: "from-gray-500 to-slate-500",
  },
  {
    name: "Flair",
    products: [
       { name: "Move Pen Pencil", img: "https://m.media-amazon.com/images/I/71nn+TERZiL.jpg" },
       { name: "Hotline Pen", img: "https://m.media-amazon.com/images/I/81XC0ai6+8L._AC_UF1000,1000_QL80_.jpg" },
      { name: "Glitter Pens", img: "https://thegoodstore.in/cdn/shop/files/1_b5b4e1e6-b815-4fc1-8501-28f448194193.png?crop=center&height=922&v=1715157325&width=922" },
       { name: "Fluid", img: "https://m.media-amazon.com/images/I/61HYyj77y3L.jpg" },
      { name: "Permanent Markers", img: "https://m.media-amazon.com/images/I/51TJPddSL5L.jpg" },
       { name: "Move Kits", img: "https://www.rapiddeliveryservices.in/uploads/webp/move_kit_1228-.webp" },
    ],
    pdf: FlairPdf,
    pdfThumb: "https://placehold.co/400x400?text=PDF",
    logo: "https://www.flairworld.in/images/our-brands/flair_brand.jpg",
    color: "from-indigo-500 to-blue-500",
  },
  {
    name: "Montex",
    products: [
       { name: "Texta pen", img: "https://images.meesho.com/images/products/472018465/ql0hf_512.webp?width=512"  },
       { name: "Mega Top", img: "https://mumbaionlinestationery.com/wp-content/uploads/2021/01/QTHXHWy9s3yLrapyErDjHA2fJqEsq9yIbilgVWeG.jpeg" },
        { name: "Gold Touch", img: "https://m.media-amazon.com/images/I/61Bz843ouwL.jpg" },
       { name: "Mint", img: "https://images-eu.ssl-images-amazon.com/images/I/51aDvLq7-dL._AC_UL495_SR435,495_.jpg" },
        { name: "Impression Gold", img: "https://rukminim2.flixcart.com/image/480/640/kdt50nk0/pen/a/x/j/montex-gld712-original-imafumwhakhgbxqk.jpeg?q=90" },
       { name: "Student Fountain2", img: "https://topperskit.com/cdn/shop/files/97_6b607576-93b2-44c6-ad24-d63f96a48480.jpg?v=1709311699" },
    ],
    pdf: MontexPdf,
    pdfThumb: "https://placehold.co/400x400?text=PDF",
    logo: "https://cdn-media.nxtby.com/media/codazon_cache/brand/250x/Brand-logo/Montex.png",
    color: "from-teal-500 to-cyan-500",
  },
 
];

// --- NOTIFICATION COMPONENT ---
function Notification({ message, onClose, isError }) {
  if (!message) return null;

  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  return (
    <div 
      className={`fixed bottom-5 right-5 p-4 rounded-lg shadow-xl text-white z-50 ${
        isError ? 'bg-red-600' : 'bg-green-600'
      }`}
    >
      {message}
      <button onClick={onClose} className="ml-4 font-bold">✕</button>
    </div>
  );
}

// --- ENQUIRY MODAL COMPONENT ---
function EnquiryModal({ show, onClose, bookName, setNotification }) {
  if (!show) return null;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const onFormSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceID = "service_g4md2ye";
    const templateID = "template_zq829sf";
    const userID = "Rvwb285TDrOGCalCR";

    const templateParams = {
      book: bookName,
      ...formData,
    };

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then(() => {
        setNotification("Enquiry submitted successfully!");
        setLoading(false);
        setFormData({ name: "", email: "", phone: "", message: "" });
        onClose();
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        setLoading(false);
        setNotification("Failed to send enquiry!", true);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white w-full max-w-md rounded-xl p-6 shadow-xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-800 transition-colors"
          onClick={onClose}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        <h2 className="text-xl font-semibold mb-2 text-center text-gray-800">
          Product Enquiry
        </h2>

        <p className="text-sm text-gray-600 mb-6 text-center">
          Enquiring about: <span className="font-semibold text-blue-600">{bookName}</span>
        </p>

        <form onSubmit={onFormSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleInputChange}
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            placeholder="Your Message / Quantity Needed"
            rows="3"
            required
            value={formData.message}
            onChange={handleInputChange}
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400"
          >
            {loading ? "Sending..." : "Submit Enquiry"}
          </button>
        </form>
      </div>
    </div>
  );
}

// Helper: Pair the product objects instead of just images
const placeholderProduct = { name: "Coming Soon", img: "https://placehold.co/400x400/F3F4F6/777?text=No+Image" };

const pairProducts = (products) => {
  const pairs = [];
  for (let i = 0; i < products.length; i += 2) {
    if (i + 1 < products.length) {
      pairs.push([products[i], products[i + 1]]);
    } else {
      pairs.push([products[i], placeholderProduct]); 
    }
  }
  return pairs;
};

// --- PRODUCT CARD COMPONENT ---
// This handles the "Select and Add" logic cleanly
const ProductCard = ({ pair, brandName, addToCart, openLightbox, handleEnquiry }) => {
  const [selectedIdx, setSelectedIdx] = useState(null); // null, 0 (left), or 1 (right)

  // Reset selection when pair changes (optional, usually component unmounts but safe to keep)
  useEffect(() => {
    setSelectedIdx(null);
  }, [pair]);

  const handleAddToCart = () => {
    if (selectedIdx === null) return;
    const product = pair[selectedIdx];
    // Generate a unique index for the cart logic based on brand and product name
    const uniqueIndex = product.name; 
    addToCart(brandName, uniqueIndex, product);
  };

  return (
    <div className="bg-white rounded-xl md:rounded-2xl shadow-lg overflow-hidden flex flex-col h-full">
      {/* Image Area */}
      <div className="flex h-48 md:h-64 relative">
        {/* Left Image */}
        <div 
          className={`flex-1 flex flex-col items-center justify-center bg-white overflow-hidden border-r cursor-pointer transition-all duration-300 relative ${selectedIdx === 0 ? 'bg-blue-50 ring-inset ring-4 ring-blue-500' : 'hover:bg-gray-50'}`}
          onClick={() => setSelectedIdx(0)}
        >
          {selectedIdx === 0 && <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full z-10">Selected</div>}
          <img
            src={pair[0].img}
            alt={pair[0].name}
            className="max-h-full max-w-full object-contain p-2"
            onClick={(e) => {
               e.stopPropagation(); 
               setSelectedIdx(0);
               // Optional: Double click to open lightbox? Or separate icon?
               // Let's keep lightbox interaction separate or user might get annoyed
            }}
          />
           <button 
              className="absolute bottom-2 right-2 p-1 bg-gray-100 rounded-full hover:bg-gray-200 text-gray-500"
              onClick={(e) => { e.stopPropagation(); openLightbox(pair[0].img); }}
           >
              🔍
           </button>
        </div>

        {/* Right Image */}
        <div 
          className={`flex-1 flex flex-col items-center justify-center bg-white overflow-hidden cursor-pointer transition-all duration-300 relative ${selectedIdx === 1 ? 'bg-blue-50 ring-inset ring-4 ring-blue-500' : 'hover:bg-gray-50'}`}
          onClick={() => {
              if (pair[1].name !== "Coming Soon") setSelectedIdx(1)
          }}
        >
          {selectedIdx === 1 && <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full z-10">Selected</div>}
          <img
            src={pair[1].img}
            alt={pair[1].name}
            className={`max-h-full max-w-full object-contain p-2 ${pair[1].name === "Coming Soon" ? 'opacity-50' : ''}`}
            onClick={(e) => {
               e.stopPropagation(); 
               if(pair[1].name !== "Coming Soon") setSelectedIdx(1);
            }}
          />
           {pair[1].name !== "Coming Soon" && (
             <button 
                className="absolute bottom-2 right-2 p-1 bg-gray-100 rounded-full hover:bg-gray-200 text-gray-500"
                onClick={(e) => { e.stopPropagation(); openLightbox(pair[1].img); }}
             >
                🔍
             </button>
           )}
        </div>
      </div>

      {/* Info & Action Area */}
      <div className="p-4 border-t flex flex-col flex-grow justify-end">
        {/* Names Display */}
        <div className="flex justify-between text-xs md:text-sm text-gray-500 mb-3 text-center">
            <span className={`w-1/2 px-1 ${selectedIdx === 0 ? 'font-bold text-blue-600' : ''}`}>{pair[0].name}</span>
            <span className={`w-1/2 px-1 ${selectedIdx === 1 ? 'font-bold text-blue-600' : ''}`}>{pair[1].name}</span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-2">
            
            {/* The Main "Add to Cart" Button */}
            <button
                onClick={handleAddToCart}
                disabled={selectedIdx === null}
                className={`w-full py-2 rounded-lg font-semibold shadow-md transition-all duration-200 flex items-center justify-center gap-2
                    ${selectedIdx !== null 
                        ? 'bg-blue-600 text-white hover:bg-blue-700 hover:scale-[1.02]' 
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {selectedIdx !== null ? `Add ${pair[selectedIdx].name}` : "Select an Item"}
            </button>

            {/* Enquiry Button (Secondary) */}
            <button
                className="w-full bg-white border border-gray-300 text-gray-700 font-medium py-1.5 rounded-lg text-sm hover:bg-gray-50 transition-colors"
                onClick={() => {
                    const targetName = selectedIdx !== null ? pair[selectedIdx].name : `${brandName} Products`;
                    handleEnquiry(targetName);
                }}
            >
                Enquiry {selectedIdx !== null ? "for Selected" : ""}
            </button>
        </div>
      </div>
    </div>
  );
};


// --- MAIN COMPONENT ---
function BrandsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const brandRefs = useRef({});
  const [activeImage, setActiveImage] = useState(null);
  // const [cartItems, setCartItems] = useState([]);
  
  // --- Modal State ---
  const [modalOpen, setModalOpen] = useState(false);
  const [enquiryItem, setEnquiryItem] = useState("");
  const [notification, setNotification] = useState(null); 
  const { addToCart: globalAddToCart } = useCart();

  // // Load cart items from localStorage
  // useEffect(() => {
  //   try {
  //     const savedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  //     setCartItems(savedCartItems);
  //   } catch (e) {
  //     console.error("Failed to parse cart items:", e);
  //     setCartItems([]);
  //   }
  // }, []);

  // // Update localStorage
  // useEffect(() => {
  //   localStorage.setItem("cartItems", JSON.stringify(cartItems));
  // }, [cartItems]);

  // Scroll to brand
  useEffect(() => {
    if (location.hash) {
      const brand = location.hash.replace("#", "");
      if (brandRefs.current[brand]) {
        setTimeout(() => {
          brandRefs.current[brand].scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 300);
      }
    }
  }, [location]);

  const openLightbox = (image) => setActiveImage(image);
  const closeLightbox = () => setActiveImage(null);
  
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) closeLightbox();
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") closeLightbox();
    };
    if (activeImage) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [activeImage]);

  const handleEnquiry = (productName) => {
    setEnquiryItem(productName);
    setModalOpen(true);
  };

  // const addToCart = (brandName, uniqueId, product) => {
  //   if(product.img.includes("placehold.co") && product.name === "Coming Soon") return;

  //   const priceMap = { "Doms": 12.99, "Kores": 9.99, "Munix": 14.99, "Miles": 11.99 };
  //   const basePrice = priceMap[brandName] || 10.99;
    
  //   const newItem = {
  //     id: `${brandName}-${uniqueId}-${Date.now()}`,
  //     brand: brandName,
  //     name: product.name,
  //     imageSrc: product.img,
  //     price: basePrice, // Logic for price can be improved if you add price to product object
  //     quantity: 1,
  //     timestamp: Date.now()
  //   };
    
  //   setCartItems(prevCart => {
  //     const existingItemIndex = prevCart.findIndex(
  //       item => item.name === product.name
  //     );
      
  //     let updatedCart;
  //     if (existingItemIndex >= 0) {
  //       updatedCart = [...prevCart];
  //       updatedCart[existingItemIndex].quantity += 1;
  //     } else {
  //       updatedCart = [...prevCart, newItem];
  //     }
  //     return updatedCart;
  //   });
    
  //   setNotification({ message: `Added ${product.name} to cart!`, isError: false });
  // };


    const addToCart = (brandName, uniqueId, product) => {
    // 1. Validation: Ignore placeholder/coming soon items
    if(product.img.includes("placehold.co") && product.name === "Coming Soon") return;

    // 2. Call the Global Context function
    // We pass '0' as the index because the Context generates a unique ID using the product name
    globalAddToCart(brandName, 0, product.img, product.name);
    
    // 3. Show Success Notification
    setNotification({ message: `Added ${product.name} to cart!`, isError: false });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
      {/* Cart Icon */}
    

      {/* Lightbox Modal */}
      {activeImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4" 
          onClick={handleBackdropClick}
        >
          <div className="relative max-w-4xl max-h-full w-full">
            <button 
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200 z-10 md:top-4 md:right-4 bg-black/50 rounded-full p-2 backdrop-blur-sm"
              onClick={closeLightbox}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-10 md:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img 
              src={activeImage} 
              alt="Enlarged view" 
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg" 
            />
          </div>
        </div>
      )}

      {/* --- RENDER THE MODAL AND NOTIFICATION --- */}
      <EnquiryModal 
        show={modalOpen} 
        onClose={() => setModalOpen(false)} 
        bookName={enquiryItem}
        setNotification={(msg, isError = false) => setNotification({ message: msg, isError })}
      />
      <Notification 
        message={notification?.message}
        isError={notification?.isError}
        onClose={() => setNotification(null)} 
      />

      {/* Page Content */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            Our Brands
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our premium collection of brands, each offering unique products designed to meet your needs.
          </p>
        </div>

        {brandsData.map((brand) => {
          // Use pairProducts logic now
          const productPairs = pairProducts(brand.products);
          
          return (
            <div key={brand.name} id={brand.name.toLowerCase().replace(/\s+/g, '')} ref={(el) => (brandRefs.current[brand.name.toLowerCase().replace(/\s+/g, '')] = el)} className="mb-16 md:mb-24 scroll-mt-16">
              {/* Brand Header */}
              <div className={`mb-8 md:mb-10 p-6 md:p-8 rounded-2xl bg-gradient-to-r ${brand.color} text-white shadow-xl`}>
                <div className="flex items-center space-x-4">
                  {brand.logo && (
                    <div className="flex-shrink-0">
                      <img 
                        src={brand.logo} 
                        alt={`${brand.name} logo`} 
                        className="h-12 w-12 md:h-16 md:w-16 object-contain bg-white rounded-lg p-1"
                      />
                    </div>
                  )}
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold">{brand.name}</h2>
                    <p className="mt-2 opacity-90">Explore our {brand.name} product collection</p>
                  </div>
                </div>
              </div>

              {/* Product Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {productPairs.map((pair, i) => (
                    <ProductCard 
                        key={i} 
                        pair={pair} 
                        brandName={brand.name}
                        addToCart={addToCart}
                        openLightbox={openLightbox}
                        handleEnquiry={handleEnquiry}
                    />
                ))}

                {/* PDF card */}
                {brand.pdf && (
                  <a key={`${brand.name}-pdf`} href={brand.pdf} target="_blank" rel="noopener noreferrer" className="block relative group h-full">
                    <div className="relative w-full h-full min-h-[16rem] rounded-xl md:rounded-2xl shadow-lg overflow-hidden border-2 border-white">
                      <img src={brand.pdfThumb} alt={`${brand.name} PDF`} className="w-full h-full object-cover opacity-40 group-hover:opacity-30 transition-all duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-gray-900/40 flex flex-col items-center justify-center p-4 text-center">
                        <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1">
                          <h3 className="text-sm md:text-lg font-bold text-gray-800">{brand.name}</h3>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-16 md:w-16 text-white mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-base md:text-xl font-bold text-white">Product Catalog</span>
                        <div className="mt-2 px-3 py-1 bg-white text-gray-900 rounded-full text-xs md:text-sm font-medium">Click to view</div>
                      </div>
                    </div>
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BrandsPage;
