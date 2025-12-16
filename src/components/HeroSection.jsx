import React, { useState, useEffect, useMemo } from 'react';

// ✅ Same images for Mobile & Desktop
import img1 from '../assets/Hero-image-1.jpeg';
import img2 from '../assets/Hero-image-2.jpeg';

export default function HeroSection() {
  const images = useMemo(() => [img1, img2], []);

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () =>
    setCurrentIndex((prev) => (prev + 1) % images.length);

  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden shadow-xl rounded-b-lg h-[25vh] md:h-[70vh] lg:h-[65vh]">
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0 h-full">
            <img
              src={image}
              alt={`Hero Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-b-lg"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src =
                  'https://placehold.co/1600x900?text=Image+Error';
              }}
            />
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              currentIndex === index
                ? 'bg-blue-600'
                : 'bg-gray-300 bg-opacity-70 hover:bg-blue-500'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
