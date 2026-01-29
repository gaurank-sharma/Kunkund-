// import React, { useEffect, useRef, useState } from "react";
// import { useLocation } from "react-router-dom";

// // ✅ Import School Stationary images
// import S1 from "../assets/ProductPage/ScholStat/S1.jpg";
// import S2 from "../assets/ProductPage/ScholStat/S2.jpg";
// import S3 from "../assets/ProductPage/ScholStat/S3.jpg";
// import S4 from "../assets/ProductPage/ScholStat/S4.jpg";
// import S5 from "../assets/ProductPage/ScholStat/S5.jpg";
// import S6 from "../assets/ProductPage/ScholStat/S6.jpg";
// import S7 from "../assets/ProductPage/ScholStat/S7.jpg";
// import S8 from "../assets/ProductPage/ScholStat/S8.jpg";
// import S9 from "../assets/ProductPage/ScholStat/S9.jpg";
// import S10 from "../assets/ProductPage/ScholStat/S10.jpg";
// import S11 from "../assets/ProductPage/ScholStat/S11.jpg";

// // ✅ Import Toys images
// import T1 from "../assets/ProductPage/Toys/T1.jpg";
// import T2 from "../assets/ProductPage/Toys/T2.jpg";
// import T3 from "../assets/ProductPage/Toys/T3.jpg";
// import T4 from "../assets/ProductPage/Toys/T4.jpg";
// import T5 from "../assets/ProductPage/Toys/T5.jpg";
// import T6 from "../assets/ProductPage/Toys/T6.jpg";
// import T7 from "../assets/ProductPage/Toys/T7.jpg";
// import T8 from "../assets/ProductPage/Toys/T8.jpg";
// import T9 from "../assets/ProductPage/Toys/T9.jpg";
// import T10 from "../assets/ProductPage/Toys/T10.jpg";
// import T11 from "../assets/ProductPage/Toys/T11.jpg";

// // ✅ Import Decoration images
// import D1 from "../assets/ProductPage/Decoration/D1.jpg";
// import D2 from "../assets/ProductPage/Decoration/D2.jpg";
// import D3 from "../assets/ProductPage/Decoration/D3.jpg";
// import D4 from "../assets/ProductPage/Decoration/D4.jpg";
// import D5 from "../assets/ProductPage/Decoration/D5.jpg";
// import D6 from "../assets/ProductPage/Decoration/D6.jpg";
// import D7 from "../assets/ProductPage/Decoration/D7.jpg";
// import D8 from "../assets/ProductPage/Decoration/D8.jpg";
// import D9 from "../assets/ProductPage/Decoration/D9.jpg";
// import D10 from "../assets/ProductPage/Decoration/D10.jpg";
// import D11 from "../assets/ProductPage/Decoration/D11.jpg";

// // ✅ Import Office images
// import O1 from "../assets/ProductPage/Office/O1.webp";
// import O2 from "../assets/ProductPage/Office/O2.webp";

// const categoriesData = [
//   {
//     name: "Office",
//     images: [O1, O2],
//     color: "from-blue-500 to-cyan-500",
//   },
//   {
//     name: "School Stationary",
//     images: [S1,S2,S3,S4,S5,S6,S7,S8,S9,S10,S11],
//     color: "from-purple-500 to-pink-500",
//   },
//   {
//     name: "Toys",
//     images: [T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11],
//     color: "from-green-500 to-emerald-500",
//   },
//   {
//     name: "Decoration",
//     images: [D1, D2, D3, D4, D5, D6, D7, D8, D9, D10, D11],
//     color: "from-orange-500 to-red-500",
//   },
// ];

// function ProductsPage() {
//   const location = useLocation();
//   const categoryRefs = useRef({});
//   const [activeImage, setActiveImage] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [hasScrolled, setHasScrolled] = useState(false);
//   const [enquiryForm, setEnquiryForm] = useState({
//     isOpen: false,
//     productCategory: "",
//     productIndex: null,
//     formData: {
//       name: "",
//       email: "",
//       company: "",
//       phone: "",
//       message: ""
//     }
//   });

//   useEffect(() => {
//     // Reset scroll state when location changes
//     setHasScrolled(false);
    
//     // Simulate loading time for images
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 1000);

//     return () => clearTimeout(timer);
//   }, [location]);

//   useEffect(() => {
//     if (loading || hasScrolled) return;

//     let targetSection = null;
//     let scrollMethod = "";

//     // Method 1: Check React Router state (from ProductCategories)
//     if (location.state?.scrollToSection) {
//       targetSection = location.state.scrollToSection;
//       scrollMethod = "state";
//     }
//     // Method 2: Check URL hash (from header navigation)
//     else if (location.hash) {
//       targetSection = location.hash.replace('#', '');
//       scrollMethod = "hash";
//     }
//     // Method 3: Check URL search params (backup method)
//     else if (location.search) {
//       const urlParams = new URLSearchParams(location.search);
//       targetSection = urlParams.get('section');
//       scrollMethod = "search";
//     }

//     console.log("Navigation detected:", { targetSection, scrollMethod, location });

//     if (targetSection) {
//       // Convert section name to match our category names
//       let processedSection = targetSection;
      
//       // Handle different naming conventions
//       if (processedSection === "SchoolStat") {
//         processedSection = "School Stationary";
//       }
//       // Convert kebab-case to normal name (office -> Office, school-stationary -> School Stationary)
//       else if (processedSection.includes('-')) {
//         processedSection = processedSection
//           .split('-')
//           .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//           .join(' ');
//       }
//       // Capitalize first letter if it's a single word
//       else {
//         processedSection = processedSection.charAt(0).toUpperCase() + processedSection.slice(1);
//       }

//       console.log("Processed section:", processedSection);

//       // Wait a bit for the page to render completely
//       setTimeout(() => {
//         scrollToSection(processedSection);
//         setHasScrolled(true);
//       }, 800);
//     }
//   }, [location, loading, hasScrolled]);

//   const scrollToSection = (sectionName) => {
//     console.log("Attempting to scroll to:", sectionName);
    
//     // Find the category in our data
//     const category = categoriesData.find(cat => 
//       cat.name.toLowerCase() === sectionName.toLowerCase()
//     );
    
//     if (category) {
//       const sectionId = category.name.toLowerCase().replace(/\s+/g, '-');
//       console.log("Found category, section ID:", sectionId);
      
//       // Try using ref first
//       if (categoryRefs.current[sectionId]) {
//         console.log("Scrolling to element via ref...");
//         categoryRefs.current[sectionId].scrollIntoView({
//           behavior: "smooth",
//           block: "start",
//         });
//         return true;
//       } 
//       // Fallback: try to find by ID
//       else {
//         console.log("Trying to find element by ID...");
//         const element = document.getElementById(sectionId);
//         if (element) {
//           element.scrollIntoView({
//             behavior: "smooth",
//             block: "start",
//           });
//           return true;
//         }
//       }
//     } else {
//       console.log("Category not found:", sectionName);
//       // Try direct ID matching as last resort
//       const directElement = document.getElementById(sectionName.toLowerCase().replace(/\s+/g, '-'));
//       if (directElement) {
//         directElement.scrollIntoView({
//           behavior: "smooth",
//           block: "start",
//         });
//         return true;
//       }
//     }
    
//     console.log("Failed to scroll to section:", sectionName);
//     return false;
//   };

//   const openLightbox = (image) => {
//     setActiveImage(image);
//   };

//   const closeLightbox = () => {
//     setActiveImage(null);
//   };

//   // Open enquiry form
//   const openEnquiryForm = (categoryName, imageIndex) => {
//     setEnquiryForm({
//       isOpen: true,
//       productCategory: categoryName,
//       productIndex: imageIndex,
//       formData: {
//         name: "",
//         email: "",
//         company: "",
//         phone: "",
//         message: `I'm interested in ${categoryName} product ${imageIndex + 1}. Please provide more information.`
//       }
//     });
//   };

//   // Close enquiry form
//   const closeEnquiryForm = () => {
//     setEnquiryForm({
//       isOpen: false,
//       productCategory: "",
//       productIndex: null,
//       formData: {
//         name: "",
//         email: "",
//         company: "",
//         phone: "",
//         message: ""
//       }
//     });
//   };

//   // Handle form input changes
//   const handleFormInputChange = (e) => {
//     const { name, value } = e.target;
//     setEnquiryForm(prev => ({
//       ...prev,
//       formData: {
//         ...prev.formData,
//         [name]: value
//       }
//     }));
//   };

//   // Handle form submission
//   const handleEnquirySubmit = (e) => {
//     e.preventDefault();
    
//     // Here you would typically send the data to your backend
//     console.log("Enquiry Form Data:", {
//       ...enquiryForm.formData,
//       productCategory: enquiryForm.productCategory,
//       productIndex: enquiryForm.productIndex
//     });

//     // Show success message
//     const notification = document.createElement("div");
//     notification.className = "fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 font-medium";
//     notification.textContent = "Enquiry submitted successfully!";
//     document.body.appendChild(notification);
    
//     setTimeout(() => {
//       document.body.removeChild(notification);
//       closeEnquiryForm();
//     }, 3000);
//   };

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
//         if (activeImage) {
//           closeLightbox();
//         }
//         if (enquiryForm.isOpen) {
//           closeEnquiryForm();
//         }
//       }
//     };

//     if (activeImage || enquiryForm.isOpen) {
//       document.addEventListener("keydown", handleEscape);
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }

//     return () => {
//       document.removeEventListener("keydown", handleEscape);
//       document.body.style.overflow = "auto";
//     };
//   }, [activeImage, enquiryForm.isOpen]);

//   const addToCart = (categoryName, imageIndex, imageSrc) => {
//     const newItem = {
//       id: `${categoryName}-${imageIndex}-${Date.now()}`,
//       category: categoryName,
//       imageIndex,
//       imageSrc,
//       quantity: 1,
//       timestamp: Date.now()
//     };
    
//     const existingCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
//     const existingItemIndex = existingCartItems.findIndex(
//       item => item.category === categoryName && item.imageIndex === imageIndex
//     );
    
//     let updatedCartItems;
//     if (existingItemIndex >= 0) {
//       updatedCartItems = [...existingCartItems];
//       updatedCartItems[existingItemIndex].quantity += 1;
//     } else {
//       updatedCartItems = [...existingCartItems, newItem];
//     }
    
//     localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    
//     // Show notification
//     const notification = document.createElement("div");
//     notification.className = "fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50";
//     notification.textContent = "Added to cart!";
//     document.body.appendChild(notification);
//     setTimeout(() => document.body.removeChild(notification), 2000);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
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
//             <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
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

//       {/* Enquiry Form Modal */}
//       {enquiryForm.isOpen && (
//         <div 
//           className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4"
//           onClick={(e) => {
//             if (e.target === e.currentTarget) {
//               closeEnquiryForm();
//             }
//           }}
//         >
//           <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
//             {/* Header */}
//             <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-t-2xl text-white">
//               <div className="flex justify-between items-center">
//                 <h2 className="text-2xl font-bold">Product Enquiry</h2>
//                 <button 
//                   onClick={closeEnquiryForm}
//                   className="text-white hover:text-gray-200 transition-colors duration-200"
//                   aria-label="Close form"
//                 >
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                   </svg>
//                 </button>
//               </div>
//               <p className="mt-2 opacity-90">
//                 {enquiryForm.productCategory} - Product {enquiryForm.productIndex + 1}
//               </p>
//             </div>

//             {/* Form */}
//             <form onSubmit={handleEnquirySubmit} className="p-6 space-y-4">
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
//                   Full Name *
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   required
//                   value={enquiryForm.formData.name}
//                   onChange={handleFormInputChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
//                   placeholder="Enter your full name"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//                   Email Address *
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   required
//                   value={enquiryForm.formData.email}
//                   onChange={handleFormInputChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
//                   placeholder="Enter your email address"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
//                   Company Name
//                 </label>
//                 <input
//                   type="text"
//                   id="company"
//                   name="company"
//                   value={enquiryForm.formData.company}
//                   onChange={handleFormInputChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
//                   placeholder="Enter your company name (optional)"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
//                   Phone Number *
//                 </label>
//                 <input
//                   type="tel"
//                   id="phone"
//                   name="phone"
//                   required
//                   value={enquiryForm.formData.phone}
//                   onChange={handleFormInputChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
//                   placeholder="Enter your phone number"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
//                   Your Message *
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   required
//                   rows="4"
//                   value={enquiryForm.formData.message}
//                   onChange={handleFormInputChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 resize-vertical"
//                   placeholder="Tell us about your requirements..."
//                 />
//               </div>

//               <div className="flex space-x-3 pt-2">
//                 <button
//                   type="button"
//                   onClick={closeEnquiryForm}
//                   className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-md hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
//                 >
//                   Submit Enquiry
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
//             Our Products
//           </h1>
//           <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
//             Explore our wide range of premium products across different categories to meet all your needs.
//           </p>
//         </div>

//         {categoriesData.map((category, index) => (
//           <div
//             key={category.name}
//             id={category.name.toLowerCase().replace(/\s+/g, '-')}
//             ref={(el) =>
//               (categoryRefs.current[category.name.toLowerCase().replace(/\s+/g, '-')] = el)
//             }
//             className="mb-16 md:mb-24 scroll-mt-16"
//           >
//             <div
//               className={`mb-8 md:mb-10 p-6 md:p-8 rounded-2xl bg-gradient-to-r ${category.color} text-white shadow-xl transform transition-all duration-500 hover:shadow-2xl`}
//             >
//               <h2 className="text-3xl md:text-4xl font-bold">{category.name}</h2>
//               <p className="mt-2 opacity-90">
//                 Explore our {category.name} collection
//               </p>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
//               {category.images.map((img, i) => (
//                 <div key={i} className="bg-white rounded-xl md:rounded-2xl shadow-lg overflow-hidden flex flex-col transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
//                   {/* Image Container */}
//                   <div 
//                     className="relative w-full h-48 md:h-64 flex items-center justify-center bg-white overflow-hidden cursor-pointer"
//                     onClick={() => openLightbox(img)}
//                   >
//                     {loading ? (
//                       <div className="w-full h-full bg-gray-200 animate-pulse rounded-xl"></div>
//                     ) : (
//                       <>
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 z-10"></div>
//                         <img
//                           src={img}
//                           alt={`${category.name} product ${i + 1}`}
//                           className="w-full h-full object-contain p-2 transform transition-transform duration-700 hover:scale-110"
//                           loading="lazy"
//                         />
//                         <div className="absolute bottom-0 left-0 right-0 p-3 text-white opacity-0 hover:opacity-100 transition-opacity duration-300 z-20">
//                           <div className="text-center font-medium text-sm">
//                             Click to enlarge
//                           </div>
//                         </div>
//                       </>
//                     )}
//                   </div>

//                   {/* Buttons */}
//                   <div className="flex justify-between items-center px-3 py-3 border-t">
//                     <button 
//                       className="bg-white border border-gray-300 text-gray-700 font-medium py-2 px-3 rounded text-sm shadow-sm hover:bg-gray-100 transition-colors duration-200 flex-1 mr-2"
//                       onClick={() => openEnquiryForm(category.name, i)}
//                     >
//                       Enquiry
//                     </button>
//                     <button 
//                       className="bg-blue-600 text-white font-medium py-2 px-3 rounded text-sm shadow-md hover:bg-blue-700 transition-colors duration-200 flex-1 ml-2 flex items-center justify-center"
//                       onClick={() => addToCart(category.name, i, img)}
//                     >
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//                       </svg>
//                       Add to Cart
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ProductsPage;

// import React, { useEffect, useRef, useState } from "react";
// import { useLocation } from "react-router-dom";
// import emailjs from "emailjs-com";
// import { useCart } from "../context/CartContext"; // ✅ 1. Import Global Context

// // EmailJS Configuration
// const serviceID = "service_g4md2ye";
// const templateID = "template_zq829sf";
// const userID = "Rvwb285TDrOGCalCR";

// // WhatsApp Configuration
// const WHATSAPP_NUMBER = "919650668139"; // Added '91' for India country code

// // ✅ Import School Stationary images
// import S1 from "../assets/ProductPage/ScholStat/S1.jpg";
// import S2 from "../assets/ProductPage/ScholStat/S2.jpg";
// import S3 from "../assets/ProductPage/ScholStat/S3.jpg";
// import S4 from "../assets/ProductPage/ScholStat/S4.jpg";
// import S5 from "../assets/ProductPage/ScholStat/S5.jpg";
// import S6 from "../assets/ProductPage/ScholStat/S6.jpg";
// import S7 from "../assets/ProductPage/ScholStat/S7.jpg";
// import S8 from "../assets/ProductPage/ScholStat/S8.jpg";
// import S9 from "../assets/ProductPage/ScholStat/S9.jpg";
// import S10 from "../assets/ProductPage/ScholStat/S10.jpg";
// import S11 from "../assets/ProductPage/ScholStat/S11.jpg";

// // ✅ Import Toys images
// import T1 from "../assets/ProductPage/Toys/T1.jpg";
// import T2 from "../assets/ProductPage/Toys/T2.jpg";
// import T3 from "../assets/ProductPage/Toys/T3.jpg";
// import T4 from "../assets/ProductPage/Toys/T4.jpg";
// import T5 from "../assets/ProductPage/Toys/T5.jpg";
// import T6 from "../assets/ProductPage/Toys/T6.jpg";
// import T7 from "../assets/ProductPage/Toys/T7.jpg";
// import T8 from "../assets/ProductPage/Toys/T8.jpg";
// import T9 from "../assets/ProductPage/Toys/T9.jpg";
// import T10 from "../assets/ProductPage/Toys/T10.jpg";
// import T11 from "../assets/ProductPage/Toys/T11.jpg";

// // ✅ Import Decoration images
// import D1 from "../assets/ProductPage/Decoration/D1.jpg";
// import D2 from "../assets/ProductPage/Decoration/D2.jpg";
// import D3 from "../assets/ProductPage/Decoration/D3.jpg";
// import D4 from "../assets/ProductPage/Decoration/D4.jpg";
// import D5 from "../assets/ProductPage/Decoration/D5.jpg";
// import D6 from "../assets/ProductPage/Decoration/D6.jpg";
// import D7 from "../assets/ProductPage/Decoration/D7.jpg";
// import D8 from "../assets/ProductPage/Decoration/D8.jpg";
// import D9 from "../assets/ProductPage/Decoration/D9.jpg";
// import D10 from "../assets/ProductPage/Decoration/D10.jpg";
// import D11 from "../assets/ProductPage/Decoration/D11.jpg";

// // ✅ Import Office images
// import O1 from "../assets/ProductPage/Office/O1.webp";
// import O2 from "../assets/ProductPage/Office/O2.webp";

// const categoriesData = [
//   {
//     name: "Office",
//     images: [O1, O2],
//     color: "from-blue-500 to-cyan-500",
//   },
//   {
//     name: "School Stationary",
//     images: [S1,S2,S3,S4,S5,S6,S7,S8,S9,S10,S11],
//     color: "from-purple-500 to-pink-500",
//   },
//   {
//     name: "Toys",
//     images: [T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11],
//     color: "from-green-500 to-emerald-500",
//   },
//   {
//     name: "Decoration",
//     images: [D1, D2, D3, D4, D5, D6, D7, D8, D9, D10, D11],
//     color: "from-orange-500 to-red-500",
//   },
// ];

// function ProductsPage() {
//   const location = useLocation();
//   const categoryRefs = useRef({});
//   const [activeImage, setActiveImage] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [hasScrolled, setHasScrolled] = useState(false);
  
//   // Cart States
//   // const [cartItems, setCartItems] = useState([]);
//   // const [isCartOpen, setIsCartOpen] = useState(false);
//   // const [checkoutForm, setCheckoutForm] = useState({
//   //   name: "",
//   //   phone: "",
//   //   address: ""
//   // });
  
//   // Enquiry Form State
//   const [enquiryForm, setEnquiryForm] = useState({
//     isOpen: false,
//     productCategory: "",
//     productIndex: null,
//     formData: {
//       name: "",
//       email: "",
//       company: "",
//       phone: "",
//       message: ""
//     }
//   });

//   // Load initial cart
//   // useEffect(() => {
//   //   const items = JSON.parse(localStorage.getItem("cartItems")) || [];
//   //   setCartItems(items);
//   // }, []);

//   // Scrolling Logic
//   useEffect(() => {
//     setHasScrolled(false);
//     const timer = setTimeout(() => setLoading(false), 1000);
//     return () => clearTimeout(timer);
//   }, [location]);

//   useEffect(() => {
//     if (loading || hasScrolled) return;
//     let targetSection = null;
//     if (location.state?.scrollToSection) targetSection = location.state.scrollToSection;
//     else if (location.hash) targetSection = location.hash.replace('#', '');
//     else if (location.search) {
//       const urlParams = new URLSearchParams(location.search);
//       targetSection = urlParams.get('section');
//     }

//     if (targetSection) {
//       let processedSection = targetSection;
//       if (processedSection === "SchoolStat") processedSection = "School Stationary";
//       else if (processedSection.includes('-')) {
//         processedSection = processedSection.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
//       } else {
//         processedSection = processedSection.charAt(0).toUpperCase() + processedSection.slice(1);
//       }
//       setTimeout(() => {
//         scrollToSection(processedSection);
//         setHasScrolled(true);
//       }, 800);
//     }
//   }, [location, loading, hasScrolled]);

//   const scrollToSection = (sectionName) => {
//     const category = categoriesData.find(cat => cat.name.toLowerCase() === sectionName.toLowerCase());
//     if (category) {
//       const sectionId = category.name.toLowerCase().replace(/\s+/g, '-');
//       if (categoryRefs.current[sectionId]) {
//         categoryRefs.current[sectionId].scrollIntoView({ behavior: "smooth", block: "start" });
//         return true;
//       } 
//     }
//     return false;
//   };

//   const openLightbox = (image) => setActiveImage(image);
//   const closeLightbox = () => setActiveImage(null);

//   // Enquiry Logic
//   const openEnquiryForm = (categoryName, imageIndex) => {
//     setEnquiryForm({
//       isOpen: true,
//       productCategory: categoryName,
//       productIndex: imageIndex,
//       formData: {
//         name: "",
//         email: "",
//         company: "",
//         phone: "",
//         message: `I'm interested in ${categoryName} product ${imageIndex + 1}. Please provide more information.`
//       }
//     });
//   };

//   const closeEnquiryForm = () => {
//     setEnquiryForm({
//       isOpen: false,
//       productCategory: "",
//       productIndex: null,
//       formData: { name: "", email: "", company: "", phone: "", message: "" }
//     });
//   };

//   const handleFormInputChange = (e) => {
//     const { name, value } = e.target;
//     setEnquiryForm(prev => ({
//       ...prev,
//       formData: { ...prev.formData, [name]: value }
//     }));
//   };

//   const handleEnquirySubmit = async (e) => {
//     e.preventDefault();
//     const templateParams = {
//         name: enquiryForm.formData.name,
//         email: enquiryForm.formData.email,
//         phone: enquiryForm.formData.phone,
//         book: `${enquiryForm.productCategory} - Product ${enquiryForm.productIndex + 1} ${enquiryForm.formData.company ? `(Company: ${enquiryForm.formData.company})` : ''}`,
//         message: enquiryForm.formData.message,
//     };

//     try {
//         await emailjs.send(serviceID, templateID, templateParams, userID);
//         const notification = document.createElement("div");
//         notification.className = "fixed bottom-4 left-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-[100] font-medium";
//         notification.textContent = "Enquiry submitted successfully!";
//         document.body.appendChild(notification);
//         setTimeout(() => {
//           document.body.removeChild(notification);
//           closeEnquiryForm();
//         }, 3000);
//     } catch (error) {
//         console.error("EmailJS error:", error);
//         alert("Failed to send enquiry.");
//     }
//   };

//   // Cart & WhatsApp Logic
//  const addToCart = (categoryName, imageIndex, imageSrc) => {
//     // Generate a name since these products don't have explicit names in your data
//     const productName = `${categoryName} Product ${imageIndex + 1}`;
    
//     // Call Global Context
//     globalAddToCart(categoryName, imageIndex, imageSrc, productName);
    
//     // Notification (Create a temporary div)
//     const notification = document.createElement("div");
//     notification.className = "fixed top-20 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-[100]";
//     notification.textContent = "Added to cart!";
//     document.body.appendChild(notification);
//     setTimeout(() => document.body.removeChild(notification), 2000);
//   };
    
 
//     // 1. Build the Message
//     let message = `*📦 New Order Request*\n\n`;
    
//     // 2. Customer Details
//     message += `*Customer Details:*\n`;
//     message += `Name: ${checkoutForm.name}\n`;
//     message += `Phone: ${checkoutForm.phone}\n`;
//     if (checkoutForm.address) message += `Address: ${checkoutForm.address}\n`;
//     message += `\n-------------------------\n`;
    
//     // 3. Order Items
//     message += `*Order Items:*\n`;
//     cartItems.forEach((item, index) => {
//       // NOTE: We cannot send image files via API link, so we send the exact description
//       message += `${index + 1}. *${item.category}* (Product #${item.imageIndex + 1})\n`;
//       message += `   Qty: ${item.quantity}\n`;
//     });

//     message += `\n-------------------------\n`;
//     message += `*Total Items:* ${cartItems.reduce((acc, item) => acc + item.quantity, 0)}\n`;
//     message += `\nSent via Website Checkout`;

//     // 4. Encode and Open WhatsApp
//     const encodedMessage = encodeURIComponent(message);
//     const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
//     window.open(whatsappUrl, '_blank');
//   };

//   const handleBackdropClick = (e) => {
//     if (e.target === e.currentTarget) closeLightbox();
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 relative">
      
//       {/* ✅ CART FLOATING BUTTON */}
//       {/* <button 
//         onClick={() => setIsCartOpen(true)}
//         className="fixed bottom-8 right-8 z-[100] bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 border-2 border-white flex items-center justify-center"
//       >
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5H21m-2 8a2 2 0 01-2 2H7a2 2 0 110-4h14a2 2 0 012 2v2a2 2 0 01-2 2h-2m-3-12a2 2 0 100-4 2 2 0 000 4z" />
//         </svg>
//         {cartItems.length > 0 && (
//           <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center border-2 border-white">
//             {cartItems.length}
//           </span>
//         )}
//       </button> */}

//       {/* ✅ CART SIDEBAR */}
//       {isCartOpen && (
//         <div className="fixed inset-0 z-[110] flex justify-end">
//           {/* Transparent Backdrop */}
//           <div 
//             className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" 
//             onClick={() => setIsCartOpen(false)}
//           ></div>
          
//           {/* Sidebar Content */}
//           <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-slideInRight">
//             <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white flex justify-between items-center shadow-md">
//               <h2 className="text-xl font-bold">Your Cart ({cartItems.length})</h2>
//               <button onClick={() => setIsCartOpen(false)} className="hover:bg-white/20 p-2 rounded-full">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               </button>
//             </div>

//             {/* Cart Items List */}
//             <div className="flex-1 overflow-y-auto p-4 space-y-4">
//               {cartItems.length === 0 ? (
//                 <div className="text-center text-gray-500 mt-10">
//                   <p>Your cart is empty.</p>
//                 </div>
//               ) : (
//                 cartItems.map((item) => (
//                   <div key={item.id} className="flex gap-4 bg-gray-50 p-3 rounded-lg border border-gray-100">
//                     <img src={item.imageSrc} alt="Product" className="w-20 h-20 object-contain bg-white rounded-md" />
//                     <div className="flex-1">
//                       <h3 className="font-semibold text-gray-800">{item.category}</h3>
//                       <p className="text-sm text-gray-600">Product #{item.imageIndex + 1}</p>
//                       <p className="text-sm font-medium text-blue-600 mt-1">Qty: {item.quantity}</p>
//                     </div>
//                     <button 
//                       onClick={() => removeFromCart(item.id)}
//                       className="text-red-500 hover:text-red-700 self-start p-1"
//                     >
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
//                       </svg>
//                     </button>
//                   </div>
//                 ))
//               )}
//             </div>

//             {/* ✅ Checkout Details Form inside Sidebar */}
//             {cartItems.length > 0 && (
//               <div className="p-4 bg-gray-50 border-t space-y-3">
//                  <h3 className="font-bold text-gray-700">Enter Details to Order</h3>
                 
//                  <input 
//                    type="text" 
//                    name="name" 
//                    placeholder="Your Name *" 
//                    value={checkoutForm.name}
//                    onChange={handleCheckoutInput}
//                    className="w-full p-2 border border-gray-300 rounded focus:border-blue-500 focus:outline-none"
//                  />
                 
//                  <input 
//                    type="tel" 
//                    name="phone" 
//                    placeholder="Phone Number *" 
//                    value={checkoutForm.phone}
//                    onChange={handleCheckoutInput}
//                    className="w-full p-2 border border-gray-300 rounded focus:border-blue-500 focus:outline-none"
//                  />
                 
//                  <textarea 
//                    name="address" 
//                    placeholder="Address / Message (Optional)" 
//                    rows="2"
//                    value={checkoutForm.address}
//                    onChange={handleCheckoutInput}
//                    className="w-full p-2 border border-gray-300 rounded focus:border-blue-500 focus:outline-none resize-none"
//                  ></textarea>

//                 <button 
//                   className="w-full bg-green-600 text-white py-3 rounded-xl font-bold shadow-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2 mt-2"
//                   onClick={handleWhatsAppCheckout}
//                 >
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
//                     <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
//                   </svg>
//                   Order via WhatsApp
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       )}

//       {/* Lightbox Modal */}
//       {activeImage && (
//         <div 
//           className="fixed inset-0 bg-black bg-opacity-90 z-[120] flex items-center justify-center p-4" 
//           onClick={handleBackdropClick}
//         >
//           <div className="relative max-w-4xl max-h-full w-full">
//             <button 
//               className="absolute -top-12 right-0 text-white z-10 md:top-4 md:right-4 bg-black/50 rounded-full p-2"
//               onClick={closeLightbox}
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>
//             <img src={activeImage} alt="Enlarged" className="w-full h-auto max-h-[80vh] object-contain rounded-lg" />
//           </div>
//         </div>
//       )}

//       {/* Enquiry Form Modal (Transparent Outside) */}
//       {enquiryForm.isOpen && (
//         <div 
//           className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-transparent backdrop-blur-sm"
//           onClick={(e) => e.target === e.currentTarget && closeEnquiryForm()}
//         >
//           <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto ring-4 ring-blue-500/30">
//             <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-t-2xl text-white sticky top-0 z-10">
//               <div className="flex justify-between items-center">
//                 <h2 className="text-2xl font-bold">Enquiry</h2>
//                 <button onClick={closeEnquiryForm} className="text-white hover:text-gray-200">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                   </svg>
//                 </button>
//               </div>
//               <p className="mt-2 text-sm opacity-90">{enquiryForm.productCategory} — Product {enquiryForm.productIndex + 1}</p>
//             </div>

//             <form onSubmit={handleEnquirySubmit} className="p-6 space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
//                 <input type="text" name="name" required value={enquiryForm.formData.name} onChange={handleFormInputChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="Your Name" />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
//                 <input type="email" name="email" required value={enquiryForm.formData.email} onChange={handleFormInputChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="Your Email" />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
//                 <input type="tel" name="phone" required value={enquiryForm.formData.phone} onChange={handleFormInputChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="Your Phone" />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
//                 <input type="text" name="company" value={enquiryForm.formData.company} onChange={handleFormInputChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="Company Name" />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
//                 <textarea name="message" required rows="3" value={enquiryForm.formData.message} onChange={handleFormInputChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="I am interested in..."></textarea>
//               </div>

//               <div className="flex space-x-3 pt-2">
//                 <button type="button" onClick={closeEnquiryForm} className="flex-1 px-4 py-2 border rounded-lg hover:bg-gray-50">Cancel</button>
//                 <button type="submit" className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Submit</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto pb-24">
//         <div className="text-center mb-16">
//           <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">Our Products</h1>
//           <p className="text-lg text-gray-600">Explore our premium range.</p>
//         </div>

//         {categoriesData.map((category) => (
//           <div key={category.name} id={category.name.toLowerCase().replace(/\s+/g, '-')} ref={(el) => (categoryRefs.current[category.name.toLowerCase().replace(/\s+/g, '-')] = el)} className="mb-16 scroll-mt-16">
//             <div className={`mb-8 p-6 rounded-2xl bg-gradient-to-r ${category.color} text-white shadow-xl`}>
//               <h2 className="text-3xl font-bold">{category.name}</h2>
//             </div>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//               {category.images.map((img, i) => (
//                 <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow">
//                   <div className="relative h-48 cursor-pointer bg-white" onClick={() => openLightbox(img)}>
//                     {loading ? <div className="w-full h-full bg-gray-200 animate-pulse"></div> : <img src={img} alt="Product" className="w-full h-full object-contain p-2 hover:scale-110 transition-transform duration-500" loading="lazy" />}
//                   </div>
//                   <div className="flex border-t p-3 gap-2">
//                     <button onClick={() => openEnquiryForm(category.name, i)} className="flex-1 bg-gray-100 text-gray-700 py-2 rounded text-sm hover:bg-gray-200">Enquiry</button>
//                     <button onClick={() => addToCart(category.name, i, img)} className="flex-1 bg-blue-600 text-white py-2 rounded text-sm hover:bg-blue-700 flex justify-center items-center gap-1">
//                       <span>+</span> Cart
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ProductsPage;





import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import emailjs from "emailjs-com";
import { useCart } from "../context/CartContext"; // ✅ Import Global Context

// EmailJS Configuration
const serviceID = "service_g4md2ye";
const templateID = "template_zq829sf";
const userID = "Rvwb285TDrOGCalCR";

// WhatsApp Configuration
const WHATSAPP_NUMBER = "919650668139"; 

// ✅ Import School Stationary images
import S1 from "../assets/ProductPage/ScholStat/S1.jpg";
import S2 from "../assets/ProductPage/ScholStat/S2.jpg";
import S3 from "../assets/ProductPage/ScholStat/S3.jpg";
import S4 from "../assets/ProductPage/ScholStat/S4.jpg";
import S5 from "../assets/ProductPage/ScholStat/S5.jpg";
import S6 from "../assets/ProductPage/ScholStat/S6.jpg";
import S7 from "../assets/ProductPage/ScholStat/S7.jpg";
import S8 from "../assets/ProductPage/ScholStat/S8.jpg";
import S9 from "../assets/ProductPage/ScholStat/S9.jpg";
import S10 from "../assets/ProductPage/ScholStat/S10.jpg";
import S11 from "../assets/ProductPage/ScholStat/S11.jpg";

// ✅ Import Toys images
import T1 from "../assets/ProductPage/Toys/T1.jpg";
import T2 from "../assets/ProductPage/Toys/T2.jpg";
import T3 from "../assets/ProductPage/Toys/T3.jpg";
import T4 from "../assets/ProductPage/Toys/T4.jpg";
import T5 from "../assets/ProductPage/Toys/T5.jpg";
import T6 from "../assets/ProductPage/Toys/T6.jpg";
import T7 from "../assets/ProductPage/Toys/T7.jpg";
import T8 from "../assets/ProductPage/Toys/T8.jpg";
import T9 from "../assets/ProductPage/Toys/T9.jpg";
import T10 from "../assets/ProductPage/Toys/T10.jpg";
import T11 from "../assets/ProductPage/Toys/T11.jpg";

// ✅ Import Decoration images
import D1 from "../assets/ProductPage/Decoration/D1.jpg";
import D2 from "../assets/ProductPage/Decoration/D2.jpg";
import D3 from "../assets/ProductPage/Decoration/D3.jpg";
import D4 from "../assets/ProductPage/Decoration/D4.jpg";
import D5 from "../assets/ProductPage/Decoration/D5.jpg";
import D6 from "../assets/ProductPage/Decoration/D6.jpg";
import D7 from "../assets/ProductPage/Decoration/D7.jpg";
import D8 from "../assets/ProductPage/Decoration/D8.jpg";
import D9 from "../assets/ProductPage/Decoration/D9.jpg";
import D10 from "../assets/ProductPage/Decoration/D10.jpg";
import D11 from "../assets/ProductPage/Decoration/D11.jpg";

// ✅ Import Office images
import O1 from "../assets/ProductPage/Office/O1.webp";
import O2 from "../assets/ProductPage/Office/O2.webp";

const categoriesData = [
  {
    name: "Office",
    images: [O1, O2],
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "School Stationary",
    images: [S1,S2,S3,S4,S5,S6,S7,S8,S9,S10,S11],
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Toys",
    images: [T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11],
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Decoration",
    images: [D1, D2, D3, D4, D5, D6, D7, D8, D9, D10, D11],
    color: "from-orange-500 to-red-500",
  },
];

function ProductsPage() {
  const location = useLocation();
  const categoryRefs = useRef({});
  const [activeImage, setActiveImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);
  
  // ✅ Use Global Cart Hook
  const { addToCart: globalAddToCart } = useCart();
  
  // Enquiry Form State
  const [enquiryForm, setEnquiryForm] = useState({
    isOpen: false,
    productCategory: "",
    productIndex: null,
    formData: {
      name: "",
      email: "",
      company: "",
      phone: "",
      message: ""
    }
  });

  // Scrolling Logic
  useEffect(() => {
    setHasScrolled(false);
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [location]);

  useEffect(() => {
    if (loading || hasScrolled) return;
    let targetSection = null;
    if (location.state?.scrollToSection) targetSection = location.state.scrollToSection;
    else if (location.hash) targetSection = location.hash.replace('#', '');
    else if (location.search) {
      const urlParams = new URLSearchParams(location.search);
      targetSection = urlParams.get('section');
    }

    if (targetSection) {
      let processedSection = targetSection;
      if (processedSection === "SchoolStat") processedSection = "School Stationary";
      else if (processedSection.includes('-')) {
        processedSection = processedSection.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
      } else {
        processedSection = processedSection.charAt(0).toUpperCase() + processedSection.slice(1);
      }
      setTimeout(() => {
        scrollToSection(processedSection);
        setHasScrolled(true);
      }, 800);
    }
  }, [location, loading, hasScrolled]);

  const scrollToSection = (sectionName) => {
    const category = categoriesData.find(cat => cat.name.toLowerCase() === sectionName.toLowerCase());
    if (category) {
      const sectionId = category.name.toLowerCase().replace(/\s+/g, '-');
      if (categoryRefs.current[sectionId]) {
        categoryRefs.current[sectionId].scrollIntoView({ behavior: "smooth", block: "start" });
        return true;
      } 
    }
    return false;
  };

  const openLightbox = (image) => setActiveImage(image);
  const closeLightbox = () => setActiveImage(null);

  // Enquiry Logic
  const openEnquiryForm = (categoryName, imageIndex) => {
    setEnquiryForm({
      isOpen: true,
      productCategory: categoryName,
      productIndex: imageIndex,
      formData: {
        name: "",
        email: "",
        company: "",
        phone: "",
        message: `I'm interested in ${categoryName} product ${imageIndex + 1}. Please provide more information.`
      }
    });
  };

  const closeEnquiryForm = () => {
    setEnquiryForm({
      isOpen: false,
      productCategory: "",
      productIndex: null,
      formData: { name: "", email: "", company: "", phone: "", message: "" }
    });
  };

  const handleFormInputChange = (e) => {
    const { name, value } = e.target;
    setEnquiryForm(prev => ({
      ...prev,
      formData: { ...prev.formData, [name]: value }
    }));
  };

  const handleEnquirySubmit = async (e) => {
    e.preventDefault();
    const templateParams = {
        name: enquiryForm.formData.name,
        email: enquiryForm.formData.email,
        phone: enquiryForm.formData.phone,
        book: `${enquiryForm.productCategory} - Product ${enquiryForm.productIndex + 1} ${enquiryForm.formData.company ? `(Company: ${enquiryForm.formData.company})` : ''}`,
        message: enquiryForm.formData.message,
    };

    try {
        await emailjs.send(serviceID, templateID, templateParams, userID);
        const notification = document.createElement("div");
        notification.className = "fixed bottom-4 left-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-[100] font-medium";
        notification.textContent = "Enquiry submitted successfully!";
        document.body.appendChild(notification);
        setTimeout(() => {
          document.body.removeChild(notification);
          closeEnquiryForm();
        }, 3000);
    } catch (error) {
        console.error("EmailJS error:", error);
        alert("Failed to send enquiry.");
    }
  };

  // ✅ Updated addToCart using Global Context
  const addToCart = (categoryName, imageIndex, imageSrc) => {
    const productName = `${categoryName} Product ${imageIndex + 1}`;
    
    // Call Global Context
    globalAddToCart(categoryName, imageIndex, imageSrc, productName);
    
    // Show Notification
    const notification = document.createElement("div");
    notification.className = "fixed top-20 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-[100]";
    notification.textContent = "Added to cart!";
    document.body.appendChild(notification);
    setTimeout(() => document.body.removeChild(notification), 2000);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) closeLightbox();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 relative">
      
      {/* ✅ FLOATING SUPPORT BUTTONS (Replaces Floating Cart) */}
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-4">
        {/* Call Button */}
        <a 
          href="tel:+919650668139" 
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 hover:scale-110 transition-transform duration-300 flex items-center justify-center border-2 border-white"
          title="Call Us"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>

        {/* WhatsApp Button */}
        <a 
          href={`https://wa.me/${WHATSAPP_NUMBER}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-transform duration-300 flex items-center justify-center border-2 border-white"
          title="Chat on WhatsApp"
        >
           <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
             <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
           </svg>
        </a>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-[120] flex items-center justify-center p-4" 
          onClick={handleBackdropClick}
        >
          <div className="relative max-w-4xl max-h-full w-full">
            <button 
              className="absolute -top-12 right-0 text-white z-10 md:top-4 md:right-4 bg-black/50 rounded-full p-2"
              onClick={closeLightbox}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img src={activeImage} alt="Enlarged" className="w-full h-auto max-h-[80vh] object-contain rounded-lg" />
          </div>
        </div>
      )}

      {/* Enquiry Form Modal */}
      {enquiryForm.isOpen && (
        <div 
          className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-transparent backdrop-blur-sm"
          onClick={(e) => e.target === e.currentTarget && closeEnquiryForm()}
        >
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto ring-4 ring-blue-500/30">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-t-2xl text-white sticky top-0 z-10">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Enquiry</h2>
                <button onClick={closeEnquiryForm} className="text-white hover:text-gray-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <p className="mt-2 text-sm opacity-90">{enquiryForm.productCategory} — Product {enquiryForm.productIndex + 1}</p>
            </div>

            <form onSubmit={handleEnquirySubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                <input type="text" name="name" required value={enquiryForm.formData.name} onChange={handleFormInputChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input type="email" name="email" required value={enquiryForm.formData.email} onChange={handleFormInputChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="Your Email" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                <input type="tel" name="phone" required value={enquiryForm.formData.phone} onChange={handleFormInputChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="Your Phone" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                <input type="text" name="company" value={enquiryForm.formData.company} onChange={handleFormInputChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="Company Name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                <textarea name="message" required rows="3" value={enquiryForm.formData.message} onChange={handleFormInputChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="I am interested in..."></textarea>
              </div>

              <div className="flex space-x-3 pt-2">
                <button type="button" onClick={closeEnquiryForm} className="flex-1 px-4 py-2 border rounded-lg hover:bg-gray-50">Cancel</button>
                <button type="submit" className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Submit</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto pb-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">Our Products</h1>
          <p className="text-lg text-gray-600">Explore our premium range.</p>
        </div>

        {categoriesData.map((category) => (
          <div key={category.name} id={category.name.toLowerCase().replace(/\s+/g, '-')} ref={(el) => (categoryRefs.current[category.name.toLowerCase().replace(/\s+/g, '-')] = el)} className="mb-16 scroll-mt-16">
            <div className={`mb-8 p-6 rounded-2xl bg-gradient-to-r ${category.color} text-white shadow-xl`}>
              <h2 className="text-3xl font-bold">{category.name}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {category.images.map((img, i) => (
                <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow">
                  <div className="relative h-48 cursor-pointer bg-white" onClick={() => openLightbox(img)}>
                    {loading ? <div className="w-full h-full bg-gray-200 animate-pulse"></div> : <img src={img} alt="Product" className="w-full h-full object-contain p-2 hover:scale-110 transition-transform duration-500" loading="lazy" />}
                  </div>
                  <div className="flex border-t p-3 gap-2">
                    <button onClick={() => openEnquiryForm(category.name, i)} className="flex-1 bg-gray-100 text-gray-700 py-2 rounded text-sm hover:bg-gray-200">Enquiry</button>
                    <button onClick={() => addToCart(category.name, i, img)} className="flex-1 bg-blue-600 text-white py-2 rounded text-sm hover:bg-blue-700 flex justify-center items-center gap-1">
                      <span>+</span> Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
