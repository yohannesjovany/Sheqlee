import React, { useState, useEffect } from "react";
import Classes from "./Carousel.module.css";

const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalChildren = React.Children.count(children);
  const slides = [];

  // Group children into slides of 3
  for (let i = 0; i < totalChildren; i += 3) {
    slides.push(
      <div key={i} className={Classes.slide}>
        {React.Children.toArray(children).slice(i, i + 3)}
      </div>
    );
  }

  const totalSlides = slides.length;

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 30000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [totalSlides]);

  // Handle next slide
  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  // Handle previous slide
  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  // Handle dot click
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className={Classes.carousel}>
      {/* Slides */}
      <div
        className={Classes.slides}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides}
      </div>

      {/* Dots for Slide Indicators */}
      <div className={Classes.dots}>
        {Array.from({ length: totalSlides }).map((_, index) => (
          <span
            key={index}
            className={`${Classes.dot} ${
              index === currentIndex ? Classes.active : ""
            }`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
