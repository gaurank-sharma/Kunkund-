// import React, { useState, useEffect, useRef } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import logo from '../assets/2.webp';

// function Header() {
//   const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
//   const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
//   const [isBrandsDropdownOpen, setIsBrandsDropdownOpen] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isMobileBrandsOpen, setIsMobileBrandsOpen] = useState(false);
//   const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [showSuggestions, setShowSuggestions] = useState(false);
//   const [suggestions, setSuggestions] = useState([]);

//   const productsDropdownRef = useRef(null);
//   const categoryDropdownRef = useRef(null);
//   const brandsDropdownRef = useRef(null);
//   const mobileMenuRef = useRef(null);
//   const mobileBrandsRef = useRef(null);
//   const mobileProductsRef = useRef(null);
//   const searchRef = useRef(null);

//   const navigate = useNavigate();

//   const brandNames = ["doms", "miles", "munix", "kores", "cello", "natraj", "saino", "pierre"];

//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (productsDropdownRef.current && !productsDropdownRef.current.contains(event.target)) {
//         setIsProductsDropdownOpen(false);
//       }
//       if (categoryDropdownRef.current && !categoryDropdownRef.current.contains(event.target)) {
//         setIsCategoryDropdownOpen(false);
//       }
//       if (brandsDropdownRef.current && !brandsDropdownRef.current.contains(event.target)) {
//         setIsBrandsDropdownOpen(false);
//       }
//       if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && isMobileMenuOpen) {
//         if (event.target.closest('button[aria-label="Toggle mobile menu"]') === null) {
//           setIsMobileMenuOpen(false);
//         }
//       }
//       if (mobileBrandsRef.current && !mobileBrandsRef.current.contains(event.target)) {
//         setIsMobileBrandsOpen(false);
//       }
//       if (mobileProductsRef.current && !mobileProductsRef.current.contains(event.target)) {
//         setIsMobileProductsOpen(false);
//       }
//       if (searchRef.current && !searchRef.current.contains(event.target)) {
//         setShowSuggestions(false);
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [isMobileMenuOpen]);

//   // Handle search input changes and show suggestions
//   const handleSearchChange = (e) => {
//     const value = e.target.value;
//     setSearchQuery(value);
    
//     if (value.trim().length > 0) {
//       const normalizedQuery = value.trim().toLowerCase();
//       const matchedBrands = brandNames.filter(brand => 
//         brand.startsWith(normalizedQuery)
//       );
//       setSuggestions(matchedBrands);
//       setShowSuggestions(true);
//     } else {
//       setShowSuggestions(false);
//       setSuggestions([]);
//     }
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
    
//     // Check if the search query matches any brand name (case insensitive)
//     const normalizedQuery = searchQuery.trim().toLowerCase();
    
//     // Find if the search query matches any brand
//     const matchedBrand = brandNames.find(brand => 
//       normalizedQuery.includes(brand) || brand.includes(normalizedQuery)
//     );
    
//     if (matchedBrand) {
//       // If a brand is found in the search, navigate to that brand's page
//       navigate(`/brands#${matchedBrand.toLowerCase()}`);
//     } else if (normalizedQuery) {
//       // If it's a general search, navigate to search results page with the query
//       navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
//     }
    
//     setSearchQuery('');
//     setShowSuggestions(false);
//     setIsMobileMenuOpen(false);
//   };

//   const handleSuggestionClick = (brand) => {
//     setSearchQuery(brand);
//     setShowSuggestions(false);
    
//     // Navigate directly to the brand page
//     navigate(`/brands#${brand.toLowerCase()}`);
//   };

//   const toggleProductsDropdown = () => setIsProductsDropdownOpen(!isProductsDropdownOpen);
//   const toggleCategoryDropdown = () => setIsCategoryDropdownOpen(!isCategoryDropdownOpen);
//   const toggleBrandsDropdown = () => setIsBrandsDropdownOpen(!isBrandsDropdownOpen);
//   const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
//   const toggleMobileBrands = () => setIsMobileBrandsOpen(!isMobileBrandsOpen);
//   const toggleMobileProducts = () => setIsMobileProductsOpen(!isMobileProductsOpen);

//   const handleBrandClick = (brand) => {
//     if (brand === 'all') {
//       navigate('/brands');
//     } else {
//       navigate(`/brands#${brand.toLowerCase()}`);
//     }
//     setIsBrandsDropdownOpen(false);
//     setIsMobileBrandsOpen(false);
//     setIsMobileMenuOpen(false);
//   };

//   return (
//     <header className="bg-white shadow-lg font-inter">
//       {/* Main Header */}
//       <div className="container mx-auto px-4 sm:px-6 md:px-8 py-4 flex flex-col md:flex-row items-center justify-between bg-blue-800">
//         {/* Logo Section - Centered on mobile, left on desktop */}
//         <div className="flex-shrink-0 mb-4 md:mb-0 w-full md:w-auto flex justify-center md:justify-start">
//           <Link to="/" className="flex items-center group">
//             <img 
//               src={logo} 
//               alt="Kundkund Stationers" 
//               className="h-80 w-75 md:h-45 md:w-55"  // Increased size for mobile, original for desktop
//             />
//           </Link>
//         </div>

//         {/* Search Bar with Suggestions */}
//         <div className="w-full md:w-auto md:flex-1 md:max-w-xl mx-0 md:mx-8 mb-4 md:mb-0 relative" ref={searchRef}>
//           <form onSubmit={handleSearch} className="relative flex">
//             <div className="relative flex-grow">
//               <input
//                 type="text"
//                 value={searchQuery}
//                 onChange={handleSearchChange}
//                 onFocus={() => searchQuery.length > 0 && setShowSuggestions(true)}
//                 placeholder="Search for  brands..."
//                 className="w-full p-3 pl-5 pr-12 text-white placeholder-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm shadow-sm"
//                 style={{backgroundColor: 'rgba(255, 255, 255, 0.2)'}}
//               />
//               <button
//                 type="submit"
//                 className="absolute right-0 top-0 h-full px-4 text-white hover:text-blue-300 focus:outline-none"
//               >
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </form>
          
//           {/* Search Suggestions */}
//           {showSuggestions && suggestions.length > 0 && (
//             <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-40">
//               <ul className="py-1">
//                 {suggestions.map((brand, index) => (
//                   <li key={index}>
//                     <button
//                       type="button"
//                       onClick={() => handleSuggestionClick(brand)}
//                       className="w-full text-left px-4 py-2 hover:bg-blue-50 hover:text-blue-700 capitalize"
//                     >
//                       {brand}
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>

//         {/* Mobile Toggles */}
//         <div className="flex items-center space-x-4 sm:space-x-6 justify-end w-full md:w-auto">
//           <button
//             onClick={toggleMobileMenu}
//             className="md:hidden text-white hover:text-blue-300 p-2 rounded-full hover:bg-blue-700 transition"
//             aria-label="Toggle mobile menu"
//           >
//             <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               {isMobileMenuOpen ? (
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
//               ) : (
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
//               )}
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Desktop Navigation */}
//       <nav className="hidden md:block bg-blue-800 text-white py-3 px-4 sm:px-6 md:px-8 shadow-inner ">
//         <ul className="flex justify-center space-x-6 text-sm font-medium items-center ml-45">
//           <li>
//             <Link to="/" className="hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md transition-colors duration-200">
//               HOME
//             </Link>
//           </li>

//           {/* Brands Dropdown */}
//           <li className="relative" ref={brandsDropdownRef}>
//             <button
//               onClick={toggleBrandsDropdown}
//               className="flex items-center hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md focus:outline-none transition-colors duration-200"
//             >
//               BRANDS
//               <svg className={`w-4 h-4 ml-1 transform transition-transform ${isBrandsDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//               </svg>
//             </button>
//             {isBrandsDropdownOpen && (
//               <div className="absolute top-full left-0 mt-2 w-56 bg-white text-gray-800 border border-gray-200 rounded-lg shadow-xl z-20 overflow-hidden">
//                 <button
//                   onClick={() => handleBrandClick('all')}
//                   className="block w-full text-left px-4 py-2 hover:bg-blue-50 hover:text-blue-700 font-semibold border-b border-gray-200"
//                 >
//                   All Brands
//                 </button>
//                 {["Doms", "Miles", "Munix", "Kores","Cello","Natraj","Saino","Pierre"].map((brand) => (
//                   <button
//                     key={brand}
//                     onClick={() => handleBrandClick(brand)}
//                     className="block w-full text-left px-4 py-2 hover:bg-blue-50 hover:text-blue-700"
//                   >
//                     {brand}
//                   </button>
//                 ))}
//               </div>
//             )}
//           </li>

//           {/* Products Dropdown */}
//           <li className="relative" ref={productsDropdownRef}>
//             <button
//               onClick={toggleProductsDropdown}
//               className="flex items-center hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md focus:outline-none transition-colors duration-200"
//             >
//               PRODUCTS
//               <svg className={`w-4 h-4 ml-1 transform transition-transform ${isProductsDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//               </svg>
//             </button>
//             {isProductsDropdownOpen && (
//               <div className="absolute top-full left-0 mt-2 w-56 bg-white text-gray-800 border border-gray-200 rounded-lg shadow-xl z-20 overflow-hidden">
//                 <Link to="/products#office" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700">Office</Link>
//                 <Link to="/products#stationary" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700">Stationary</Link>
//                 <Link to="/products#toys" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700">Toys</Link>
//                 <Link to="/products#decoration" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700">Decoration</Link>
//               </div>
//             )}
//           </li>

//           <li>
//             <Link to="/AboutUs" className="hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md transition-colors duration-200">
//               ABOUT US
//             </Link>
//           </li>
//           <li>
//             <Link to="/ContactUs" className="hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md transition-colors duration-200">
//               CONTACT US
//             </Link>
//           </li>
//         </ul>
//       </nav>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden fixed inset-0 bg-blue-800 z-30" onClick={toggleMobileMenu}>
//           <div
//             className="fixed top-0 right-0 w-64 h-full bg-white shadow-xl p-6 overflow-y-auto"
//             ref={mobileMenuRef}
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="flex justify-end mb-6">
//               <button onClick={toggleMobileMenu} className="text-gray-600 hover:text-gray-900 p-2 rounded-full hover:bg-gray-100" aria-label="Close mobile menu">
//                 <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               </button>
//             </div>
//             <nav>
//               <ul className="flex flex-col space-y-2 text-lg">
//                 <li>
//                   <Link to="/" className="block py-2 px-3 hover:bg-blue-50 hover:text-blue-700 rounded-md" onClick={toggleMobileMenu}>
//                     HOME
//                   </Link>
//                 </li>

//                 {/* Mobile Brands Dropdown */}
//                 <li className="relative" ref={mobileBrandsRef}>
//                   <button
//                     onClick={toggleMobileBrands}
//                     className="flex items-center justify-between w-full py-2 px-3 hover:bg-blue-50 hover:text-blue-700 rounded-md focus:outline-none"
//                   >
//                     <span>BRANDS</span>
//                     <svg
//                       className={`w-4 h-4 ml-2 transform transition-transform ${isMobileBrandsOpen ? 'rotate-180' : ''}`}
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                     </svg>
//                   </button>
//                   {isMobileBrandsOpen && (
//                     <div className="ml-4 mt-1 bg-gray-50 rounded-md overflow-hidden">
//                       <button
//                         onClick={() => handleBrandClick('all')}
//                         className="block w-full text-left px-3 py-2 text-base hover:bg-blue-100 hover:text-blue-700 font-semibold border-b border-gray-200"
//                       >
//                         All Brands
//                       </button>
//                       {["Doms", "Munix", "Miles", "Kores","Cello","Natraj","Saino","Pierre"].map((brand) => (
//                         <button
//                           key={brand}
//                           onClick={() => handleBrandClick(brand)}
//                           className="block w-full text-left px-3 py-2 text-base hover:bg-blue-100 hover:text-blue-700"
//                         >
//                           {brand}
//                         </button>
//                       ))}
//                     </div>
//                   )}
//                 </li>

//                 {/* Mobile Products Dropdown */}
//                 <li className="relative" ref={mobileProductsRef}>
//                   <button
//                     onClick={toggleMobileProducts}
//                     className="flex items-center justify-between w-full py-2 px-3 hover:bg-blue-50 hover:text-blue-700 rounded-md focus:outline-none"
//                   >
//                     <span>PRODUCTS</span>
//                     <svg
//                       className={`w-4 h-4 ml-2 transform transition-transform ${isMobileProductsOpen ? 'rotate-180' : ''}`}
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                     </svg>
//                   </button>
//                   {isMobileProductsOpen && (
//                     <div className="ml-4 mt-1 bg-gray-50 rounded-md overflow-hidden">
//                       <Link to="/products#office" className="block px-3 py-2 text-base hover:bg-blue-100 hover:text-blue-700" onClick={toggleMobileMenu}>Office</Link>
//                       <Link to="/products#stationary" className="block px-3 py-2 text-base hover:bg-blue-100 hover:text-blue-700" onClick={toggleMobileMenu}>Stationary</Link>
//                       <Link to="/products#toys" className="block px-3 py-2 text-base hover:bg-blue-100 hover:text-blue-700" onClick={toggleMobileMenu}>Toys</Link>
//                       <Link to="/products#decoration" className="block px-3 py-2 text-base hover:bg-blue-100 hover:text-blue-700" onClick={toggleMobileMenu}>Decoration</Link>
//                     </div>
//                   )}
//                 </li>

//                 <li>
//                   <Link to="/AboutUs" className="block py-2 px-3 hover:bg-blue-50 hover:text-blue-700 rounded-md" onClick={toggleMobileMenu}>
//                     ABOUT US
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/ContactUs" className="block py-2 px-3 hover:bg-blue-50 hover:text-blue-700 rounded-md" onClick={toggleMobileMenu}>
//                     CONTACT US
//                   </Link>
//                 </li>
//               </ul>
//             </nav>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

// export default Header;




import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// --- THE CUSTOM LOGO COMPONENT ---
// This combines your provided SVG paths (Icon) with the Text in a horizontal layout
// to keep the header SLIM.
const KundKundLogo = ({ className }) => (
  <svg 
    viewBox="0 0 1000 225" // Wide viewbox to fit Icon + Text side-by-side
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
  >
    {/* PART 1: YOUR PROVIDED ICON PATHS (Scaled and positioned to the left) */}
    {/* The original SVG was flipped/scaled by Potrace. I have adjusted the transform 
        to make it sit correctly on the left side. */}
    <g transform="translate(0, 225) scale(0.1, -0.1)" fill="currentColor">
      <path d="M1251 2093 c-12 -31 -63 -115 -113 -187 -115 -163 -142 -226 -136 -315 5 -67 42 -158 93 -226 93 -126 165 -301 165 -404 0 -88 36 -97 39 -9 4 117 40 221 117 340 146 226 168 308 114 433 -17 39 -31 60 -142 221 -30 44 -66 108 -78 142 -13 34 -26 62 -30 62 -4 0 -17 -26 -29 -57z m79 -114 c0 -10 4 -19 9 -19 5 0 14 -13 21 -30 7 -16 17 -27 23 -23 6 3 7 1 3 -5 -6 -11 8 -33 50 -78 12 -13 20 -25 17 -27 -2 -3 7 -17 21 -32 14 -15 23 -32 20 -37 -3 -5 -1 -15 5 -22 18 -22 34 -126 23 -150 -14 -30 -24 -58 -29 -80 -2 -10 -19 -40 -38 -66 -19 -26 -35 -52 -35 -58 0 -6 -11 -23 -25 -38 -13 -14 -22 -30 -19 -35 3 -5 1 -9 -4 -9 -10 0 -65 -114 -67 -141 -4 -30 -15 -41 -31 -28 -7 6 -11 16 -7 22 4 6 0 8 -10 4 -10 -4 -14 -2 -12 6 8 20 -11 72 -24 69 -7 -1 -10 2 -7 7 8 12 -14 62 -24 56 -4 -2 -15 15 -25 40 -10 24 -22 42 -26 40 -4 -3 -10 2 -13 11 -4 10 -2 13 7 8 6 -4 -1 5 -16 21 -16 17 -26 36 -24 46 4 13 0 16 -12 12 -9 -4 -13 -2 -8 2 4 5 0 19 -8 31 -8 12 -17 41 -21 63 -4 22 -9 39 -13 37 -3 -2 -6 16 -6 39 0 24 2 42 4 39 5 -5 36 77 46 120 6 25 25 47 36 40 5 -3 6 3 2 13 -3 10 -2 15 2 11 11 -11 38 29 29 44 -4 6 -3 9 2 6 5 -3 20 8 34 25 14 17 18 27 10 22 -8 -5 -3 7 13 27 15 20 27 42 27 48 0 6 4 9 9 6 5 -4 12 7 16 23 l6 30 35 -35 c19 -20 34 -44 34 -55z"/>
      <path d="M1291 1835 c0 -5 9 -26 19 -45 76 -138 85 -164 85 -235 0 -64 -4 -78 -50 -165 -27 -52 -51 -97 -53 -100 -7 -11 -36 19 -63 65 -57 96 -63 116 -64 200 0 78 1 83 53 178 52 96 56 119 13 74 -41 -45 -89 -152 -98 -222 -2 -21 -5 -42 -6 -45 -3 -15 17 -87 33 -118 11 -19 17 -39 15 -43 -3 -4 2 -9 10 -13 8 -3 15 -12 15 -21 0 -8 4 -15 9 -15 5 0 11 -9 14 -19 3 -13 17 -22 40 -26 37 -7 61 0 52 16 -4 5 2 6 11 2 14 -5 16 -3 11 11 -5 13 -3 17 6 13 9 -3 13 3 13 17 -1 11 4 20 11 19 7 -2 10 4 7 12 -4 8 -1 15 6 15 7 0 9 8 4 23 -3 12 -3 19 1 15 10 -10 38 29 30 41 -3 5 0 29 6 53 10 38 9 54 -11 121 -13 42 -33 89 -46 102 -13 14 -18 25 -11 25 7 0 4 7 -7 15 -10 7 -15 18 -12 24 4 5 2 12 -4 16 -5 3 -10 1 -10 -6 0 -7 -7 -4 -15 7 -8 10 -14 15 -14 9z"/>
      <path d="M485 1613 c16 -44 17 -74 1 -98 -21 -32 -16 -41 31 -47 59 -8 184 -64 270 -121 108 -72 268 -232 338 -340 31 -49 59 -86 62 -83 7 7 -87 169 -134 232 -73 98 -176 204 -257 265 -85 65 -301 209 -312 209 -3 0 -3 -8 1 -17z m71 -68 c4 -8 10 -13 14 -10 5 3 11 -4 15 -15 3 -11 11 -20 16 -20 6 0 7 6 3 13 -9 13 26 -12 38 -28 8 -11 -12 -26 -25 -18 -5 3 -4 9 2 13 7 4 -5 6 -26 5 -44 -1 -63 13 -63 49 0 28 17 35 26 11z"/>
      <path d="M1945 1552 c-120 -80 -224 -160 -283 -216 -110 -104 -243 -283 -275 -368 -11 -30 2 -20 30 25 108 168 285 329 458 415 73 37 101 47 188 66 27 6 27 7 11 31 -12 18 -15 39 -12 70 4 30 2 45 -6 44 -6 0 -56 -30 -111 -67z m82 -35 c1 -17 -1 -26 -4 -18 -4 9 -7 10 -13 2 -3 -7 -24 -15 -46 -18 -21 -4 -45 -12 -52 -20 -7 -7 -19 -13 -25 -12 -8 0 -8 2 1 6 6 2 10 9 6 14 -3 5 0 9 6 9 6 0 9 4 6 9 -3 5 6 12 20 15 14 4 37 17 51 31 32 29 48 24 50 -18z"/>
      <path d="M300 1410 c-13 -8 -12 -11 5 -24 11 -9 23 -16 28 -16 4 0 16 -9 27 -20 14 -14 18 -27 14 -50 l-6 -30 65 0 c275 0 553 -172 748 -462 74 -110 73 -138 -1 -37 -85 116 -140 176 -212 235 -186 150 -442 226 -662 196 -47 -6 -96 -16 -108 -23 l-22 -12 28 -22 c19 -15 28 -33 31 -59 2 -21 6 -40 9 -43 3 -3 27 3 53 13 72 29 270 27 376 -4 201 -58 410 -203 560 -390 41 -51 34 -76 -7 -27 -233 276 -498 399 -821 383 -98 -5 -182 -29 -198 -55 -4 -6 47 -12 131 -16 341 -15 630 -118 848 -303 35 -30 70 -54 78 -54 9 0 25 19 37 42 28 56 198 222 285 280 82 54 223 119 314 144 92 26 287 26 352 1 26 -10 52 -16 58 -12 5 3 10 21 10 40 0 24 7 39 25 53 14 11 25 25 25 30 0 32 -210 52 -339 33 -251 -37 -475 -180 -646 -412 -57 -78 -55 -76 -55 -58 0 8 19 44 43 80 131 204 346 372 547 429 41 12 119 24 173 27 96 6 98 7 93 29 -9 33 1 49 46 79 53 35 39 45 -66 45 -286 0 -621 -233 -810 -564 -24 -43 -50 -100 -56 -127 -7 -27 -15 -49 -19 -49 -3 0 -17 30 -30 66 -51 141 -232 373 -384 491 -76 59 -204 125 -302 157 -60 20 -100 26 -165 26 -47 0 -92 -5 -100 -10z m194 -31 c15 -5 32 -6 36 -4 5 3 11 1 15 -5 3 -5 12 -10 20 -10 28 0 135 -54 122 -62 -8 -5 -7 -8 6 -9 27 -2 30 -3 70 -22 20 -10 37 -24 37 -31 0 -8 8 -17 18 -21 14 -5 15 -4 5 6 -7 7 -13 17 -13 21 0 5 11 -2 25 -16 25 -25 33 -56 15 -56 -6 0 -9 6 -8 13 2 6 -6 12 -17 12 -11 0 -24 6 -28 13 -4 6 -15 12 -23 12 -9 0 -12 5 -8 12 5 7 3 8 -5 3 -7 -4 -23 -2 -34 4 -37 18 -82 34 -91 32 -4 -1 -33 5 -63 14 -30 9 -75 17 -101 18 -41 2 -49 6 -70 37 -15 23 -19 36 -11 39 8 2 8 6 -2 12 -16 10 65 1 105 -12z m1686 8 c0 -2 -9 -22 -20 -45 -17 -35 -25 -42 -48 -41 -15 1 -47 -1 -72 -6 -25 -4 -61 -9 -80 -10 -46 -3 -128 -34 -227 -87 -54 -28 -69 -25 -33 7 11 10 20 15 20 11 0 -4 10 3 23 16 26 27 61 48 79 48 9 0 8 -4 -2 -11 -13 -9 -13 -10 0 -6 8 2 14 10 12 17 -1 6 7 14 18 17 11 3 20 9 20 14 0 5 6 9 13 9 8 0 29 8 48 17 60 30 249 68 249 50z m-1220 -267 c5 0 14 -10 20 -22 10 -21 10 -22 -4 -5 -8 10 -17 18 -20 17 -13 -2 -85 63 -80 72 4 6 21 -6 40 -26 19 -20 38 -36 44 -36z m-459 48 c48 -2 85 -6 82 -10 -2 -5 6 -8 19 -8 13 0 30 -6 37 -12 9 -8 12 -9 7 -1 -4 7 1 9 14 6 11 -3 17 -10 13 -16 -3 -6 -1 -7 6 -3 6 4 17 3 24 -3 7 -5 25 -12 39 -15 15 -2 37 -14 49 -25 12 -11 26 -18 31 -15 4 3 8 1 8 -5 0 -6 7 -8 15 -5 10 4 15 0 15 -11 0 -11 5 -15 16 -11 8 3 12 2 9 -4 -3 -6 -1 -10 4 -10 6 0 19 -8 30 -19 18 -18 18 -18 -4 -18 -17 0 -22 4 -18 15 4 10 2 13 -5 8 -6 -3 -13 -2 -17 4 -3 5 -11 10 -16 10 -6 0 -7 -5 -3 -12 4 -7 3 -8 -5 -4 -6 4 -9 11 -6 15 2 5 -9 11 -25 15 -20 3 -30 12 -30 23 0 16 -2 16 -11 3 -8 -11 -12 -12 -16 -2 -2 6 -18 12 -34 12 -17 0 -28 4 -25 9 4 5 -3 7 -14 4 -11 -3 -26 -1 -33 5 -6 5 -48 13 -92 16 -142 11 -184 12 -172 3 7 -5 3 -7 -12 -3 -13 3 -37 -2 -52 -9 -15 -8 -34 -12 -43 -9 -15 6 -41 64 -28 64 4 0 0 5 -8 11 -11 8 -7 9 17 5 18 -3 35 -1 38 3 2 5 28 7 57 5 29 -2 92 -5 139 -6z m1172 -2 c4 -9 1 -13 -7 -10 -7 3 -29 -11 -49 -31 -20 -20 -37 -31 -37 -25 0 6 7 13 15 16 8 4 15 12 15 20 0 8 7 14 15 14 9 0 18 7 21 15 8 19 20 19 27 1z m568 2 l76 -3 -14 -22 c-9 -13 -13 -23 -9 -23 3 0 -2 -9 -11 -20 -11 -13 -19 -16 -24 -9 -4 7 -11 9 -16 6 -5 -3 -27 -2 -49 3 -68 14 -115 19 -110 12 2 -4 -29 -6 -70 -5 -41 1 -74 -2 -74 -6 0 -4 -17 -8 -37 -9 -20 -1 -40 -7 -43 -13 -4 -6 -26 -12 -48 -13 -23 -1 -45 -5 -49 -10 -4 -4 0 -4 10 0 9 3 17 3 17 0 0 -10 -53 -29 -75 -27 -17 2 -18 0 -5 -9 12 -10 11 -11 -7 -7 -13 3 -23 1 -23 -4 0 -5 -7 -9 -16 -9 -23 0 19 39 71 65 22 11 42 23 45 27 22 29 242 84 320 81 36 -1 99 -4 141 -5z m-1627 -194 c9 -3 16 -10 16 -15 0 -4 21 -5 46 -2 36 4 45 3 39 -7 -6 -10 -1 -11 21 -6 20 4 24 4 15 -3 -11 -7 -2 -11 32 -16 52 -8 60 -14 46 -35 -7 -13 -9 -12 -9 3 0 13 -9 17 -40 17 -22 0 -40 4 -40 9 0 4 -33 13 -72 20 -40 6 -86 16 -103 21 -16 5 -55 13 -85 19 -51 8 -48 9 32 5 47 -2 93 -7 102 -10z"/>
      <path d="M1920 1005 c-180 -37 -348 -126 -494 -265 -70 -67 -145 -160 -129 -160 5 0 29 20 53 45 90 92 282 200 450 253 126 40 257 61 418 69 72 3 132 9 132 12 0 14 -58 40 -114 50 -78 14 -235 12 -316 -4z m190 -24 c0 -4 -30 -7 -67 -5 -53 2 -61 1 -38 -6 l30 -9 -32 3 c-18 1 -34 -1 -35 -6 -2 -5 -23 -11 -48 -14 -25 -2 -50 -6 -56 -8 -6 -2 -17 0 -25 5 -16 10 -5 12 44 9 15 -1 27 4 27 10 0 7 6 10 13 7 7 -3 24 1 38 9 26 15 149 19 149 5z m-290 -50 c0 -5 -14 -12 -30 -16 -19 -4 -28 -11 -24 -18 5 -8 2 -8 -7 1 -17 16 -29 15 -29 -1 0 -8 -6 -14 -12 -15 -7 0 -24 -3 -38 -6 -14 -4 -19 -3 -11 0 8 4 29 17 48 30 19 13 41 20 49 17 8 -3 14 0 14 6 0 6 9 11 20 11 11 0 20 -4 20 -9z"/>
    </g>

    {/* PART 2: THE TEXT (Placed to the Right) */}
    <g transform="translate(280, 100)" fill="currentColor">
      {/* Title: KUNDKUND */}
      <text x="0" y="20" fontFamily="'Times New Roman', serif" fontSize="90" fontWeight="bold" letterSpacing="2">
        KUNDKUND
      </text>
      
      {/* Subtitle: STATIONERS */}
      <text x="4" y="70" fontFamily="sans-serif" fontSize="28" letterSpacing="14" opacity="0.9">
        STATIONERS
      </text>
      
      {/* Footer: RELIABLE SINCE 2017 */}
      <g transform="translate(5, 105)">
        {/* Left Line */}
        <line x1="0" y1="-5" x2="40" y2="-5" stroke="currentColor" strokeWidth="3" opacity="0.7" />
        
        {/* Text */}
        <text x="50" y="0" fontFamily="sans-serif" fontSize="16" fontWeight="bold" letterSpacing="2">
          RELIABLE SINCE 2017
        </text>
        
        {/* Right Line */}
        <line x1="270" y1="-5" x2="310" y2="-5" stroke="currentColor" strokeWidth="3" opacity="0.7" />
      </g>
    </g>
  </svg>
);

function Header() {
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isBrandsDropdownOpen, setIsBrandsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileBrandsOpen, setIsMobileBrandsOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  const productsDropdownRef = useRef(null);
  const brandsDropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const searchRef = useRef(null);

  const navigate = useNavigate();
  const brandNames = ["doms", "kores","pedilite", "montex", "flair", "munix", "cello", "natraj", "saino", "pierre"];

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (productsDropdownRef.current && !productsDropdownRef.current.contains(event.target)) setIsProductsDropdownOpen(false);
      if (brandsDropdownRef.current && !brandsDropdownRef.current.contains(event.target)) setIsBrandsDropdownOpen(false);
      if (searchRef.current && !searchRef.current.contains(event.target)) setShowSuggestions(false);
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && isMobileMenuOpen) {
         if (!event.target.closest('button[aria-label="Toggle mobile menu"]')) setIsMobileMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    if (value.trim().length > 0) {
      const matchedBrands = brandNames.filter(brand => brand.startsWith(value.trim().toLowerCase()));
      setSuggestions(matchedBrands);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
      setSuggestions([]);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const normalizedQuery = searchQuery.trim().toLowerCase();
    const matchedBrand = brandNames.find(brand => normalizedQuery.includes(brand));
    if (matchedBrand) navigate(`/brands#${matchedBrand.toLowerCase()}`);
    else if (normalizedQuery) navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    setSearchQuery('');
    setShowSuggestions(false);
    setIsMobileMenuOpen(false);
  };

  const handleSuggestionClick = (brand) => {
    setSearchQuery(brand);
    setShowSuggestions(false);
    navigate(`/brands#${brand.toLowerCase()}`);
  };

  const handleBrandClick = (brand) => {
    navigate(brand === 'all' ? '/brands' : `/brands#${brand.toLowerCase()}`);
    setIsBrandsDropdownOpen(false);
    setIsMobileBrandsOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-blue-800 shadow-lg font-inter sticky top-0 z-50">
      {/* Top Bar */}
      <div className="container mx-auto px-4 py-2 flex items-center justify-between gap-4">
        
        {/* LOGO SECTION - Uses the exact paths you provided */}
        <div className="flex-shrink-0">
          <Link to="/" className="flex items-center text-white hover:opacity-90 transition-opacity">
            {/* h-14 controls the Slim height. The SVG scales to fill this height. */}
            <KundKundLogo className="h-14 w-auto" />
          </Link>
        </div>

        {/* SEARCH BAR - Compact & Slim */}
        <div className="flex-1 max-w-lg relative hidden md:block" ref={searchRef}>
          <form onSubmit={handleSearch} className="relative flex w-full">
            <div className="relative flex-grow">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                onFocus={() => searchQuery.length > 0 && setShowSuggestions(true)}
                placeholder="Search..."
                className="w-full py-1.5 pl-4 pr-10 text-white placeholder-blue-200 border border-blue-500 rounded-full focus:outline-none focus:ring-1 focus:ring-white focus:border-transparent transition-all duration-200 text-sm bg-blue-700 bg-opacity-40"
              />
              <button type="submit" className="absolute right-0 top-0 h-full px-3 text-white hover:text-blue-200">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </button>
            </div>
          </form>
          {showSuggestions && suggestions.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded shadow-xl z-40">
              <ul className="py-1">
                {suggestions.map((brand, i) => (
                  <li key={i}><button type="button" onClick={() => handleSuggestionClick(brand)} className="w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-blue-50 capitalize">{brand}</button></li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex-shrink-0 flex items-center gap-2">
           {/* Mobile Search Icon could go here if needed */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white p-1 rounded hover:bg-blue-700">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>}
            </svg>
          </button>
        </div>
      </div>

      {/* Desktop Navigation - Slim Strip */}
      <div className="hidden md:block border-t border-blue-700 bg-blue-900">
        <nav className="container mx-auto">
          <ul className="flex justify-center space-x-8 text-sm font-medium text-white py-1.5">
            <li><Link to="/" className="hover:text-yellow-400 transition-colors">HOME</Link></li>
            
            <li className="relative group" ref={brandsDropdownRef}>
              <button onClick={() => setIsBrandsDropdownOpen(!isBrandsDropdownOpen)} className="flex items-center hover:text-yellow-400 transition-colors focus:outline-none">
                BRANDS <svg className={`w-3 h-3 ml-1 transition-transform ${isBrandsDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              {isBrandsDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white text-gray-800 rounded shadow-lg z-50 border border-gray-200">
                  <button onClick={() => handleBrandClick('all')} className="block w-full text-left px-4 py-2 hover:bg-blue-50 font-bold border-b">All Brands</button>
                  {brandNames.map(b => <button key={b} onClick={() => handleBrandClick(b)} className="block w-full text-left px-4 py-2 hover:bg-blue-50 capitalize">{b}</button>)}
                </div>
              )}
            </li>

            <li className="relative" ref={productsDropdownRef}>
              <button onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)} className="flex items-center hover:text-yellow-400 transition-colors focus:outline-none">
                PRODUCTS <svg className={`w-3 h-3 ml-1 transition-transform ${isProductsDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              {isProductsDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white text-gray-800 rounded shadow-lg z-50 border border-gray-200">
                  <Link to="/products#office" className="block px-4 py-2 hover:bg-blue-50">Office</Link>
                  <Link to="/products#stationary" className="block px-4 py-2 hover:bg-blue-50">Stationary</Link>
                  <Link to="/products#toys" className="block px-4 py-2 hover:bg-blue-50">Toys</Link>
                  <Link to="/products#decoration" className="block px-4 py-2 hover:bg-blue-50">Decoration</Link>
                </div>
              )}
            </li>

            <li><Link to="/AboutUs" className="hover:text-yellow-400 transition-colors">ABOUT US</Link></li>
            <li><Link to="/ContactUs" className="hover:text-yellow-400 transition-colors">CONTACT US</Link></li>
          </ul>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-50" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-xl p-5 overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="flex justify-end mb-4">
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-500 hover:bg-gray-100 p-1 rounded-full"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg></button>
            </div>
            
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="mb-4">
               <input type="text" value={searchQuery} onChange={handleSearchChange} placeholder="Search..." className="w-full p-2 border border-gray-300 rounded text-sm" />
               {suggestions.length > 0 && (
                 <div className="mt-1 border border-gray-200 rounded">
                   {suggestions.map((brand, i) => <button key={i} type="button" onClick={() => {handleSuggestionClick(brand); setIsMobileMenuOpen(false);}} className="block w-full text-left px-3 py-1 text-sm hover:bg-gray-100 capitalize">{brand}</button>)}
                 </div>
               )}
            </form>

            <nav className="space-y-4 text-gray-800">
              <Link to="/" className="block font-medium" onClick={() => setIsMobileMenuOpen(false)}>HOME</Link>
              <div>
                <button onClick={() => setIsMobileBrandsOpen(!isMobileBrandsOpen)} className="flex justify-between w-full font-medium">BRANDS <svg className={`w-4 h-4 transition-transform ${isMobileBrandsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></button>
                {isMobileBrandsOpen && <div className="ml-4 mt-2 space-y-2 text-sm text-gray-600"><button onClick={() => handleBrandClick('all')} className="block w-full text-left font-bold">All Brands</button>{brandNames.map(b => <button key={b} onClick={() => handleBrandClick(b)} className="block w-full text-left capitalize">{b}</button>)}</div>}
              </div>
              <div>
                <button onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)} className="flex justify-between w-full font-medium">PRODUCTS <svg className={`w-4 h-4 transition-transform ${isMobileProductsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></button>
                {isMobileProductsOpen && <div className="ml-4 mt-2 space-y-2 text-sm text-gray-600"><Link to="/products#office" className="block" onClick={() => setIsMobileMenuOpen(false)}>Office</Link><Link to="/products#stationary" className="block" onClick={() => setIsMobileMenuOpen(false)}>Stationary</Link><Link to="/products#toys" className="block" onClick={() => setIsMobileMenuOpen(false)}>Toys</Link><Link to="/products#decoration" className="block" onClick={() => setIsMobileMenuOpen(false)}>Decoration</Link></div>}
              </div>
              <Link to="/AboutUs" className="block font-medium" onClick={() => setIsMobileMenuOpen(false)}>ABOUT US</Link>
              <Link to="/ContactUs" className="block font-medium" onClick={() => setIsMobileMenuOpen(false)}>CONTACT US</Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;