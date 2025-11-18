import React, { useRef, useEffect, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
import "./book.css";

gsap.registerPlugin(ScrollTrigger);

const bookPages = [
  {
    title: "Welcome to Kundkund Stationers",
    content: "Scroll down to start your journey!",
  },
];

export default function Book() {
  const bookRef = useRef(null);
  const wrapperRef = useRef(null);
  const [bookHeight, setBookHeight] = useState(600);
  const navigate = useNavigate();

 useEffect(() => {
  let currentPage = 0;
  const pageCount = 3;

  const st = ScrollTrigger.create({
    trigger: wrapperRef.current,
    start: "top top",
    end: "+=" + window.innerHeight * 2,
    scrub: true,
    pin: true,
    anticipatePin: 1,
    onUpdate: (self) => {
      const newPage = Math.floor(self.progress * (pageCount - 1));
      if (
        bookRef.current &&
        newPage !== currentPage &&
        newPage < pageCount
      ) {
        bookRef.current.pageFlip().flip(newPage);
        currentPage = newPage;
      }

      if (self.progress > 0.75) {
        setTimeout(() => {
          ScrollTrigger.getAll().forEach(t => t.kill()); 
          document.body.style.overflow = "auto";          
          document.documentElement.style.overflow = "auto";
          document.body.style.position = "static";
          navigate("/home");
        }, 300);
      }
    },
  });

  return () => {
    st.kill(); // Clean up on unmount
  };
}, [navigate]);


  return (
    <div
      ref={wrapperRef}
      className="w-screen h-screen flex justify-center items-center bg-white overflow-hidden"
      id="book-app"
    >
      <div className="max-w-screen-md w-full flex justify-center items-center overflow-hidden">
        <HTMLFlipBook
          width={380}
          height={bookHeight}
          maxShadowOpacity={0.5}
          showCover={true}
          size="fixed"
          ref={bookRef}
        >
          {/* Cover Page */}
          <div className="page cover">
            <div className="page-content">
              <img
                src="/cover_image.png"
                alt="Cover"
                className="pokemon-logo"
              />
            </div>
          </div>

          {/* 1 Inner Page */}
          {bookPages.map((page, index) => (
            <div className="page" key={index}>
              <div className="page-content">
                <h2 className="pokemon-name">{page.title}</h2>
                <p className="pokemon-description">{page.content}</p>
              </div>
            </div>
          ))}

          {/* Back Page */}
          <div className="page">
            <div className="page-content">
               <img
                src="/inner2.png"
                alt="Inner Page 2"
                className="pokemon-logo"
              />
            </div>
          </div>
        </HTMLFlipBook>
      </div>
    </div>
  );
}
