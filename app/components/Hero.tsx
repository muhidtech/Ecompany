"use client";

import React, { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function Hero() {
  const data = [
    {
      header: "Game Development",
      subheader:
        "Professionally enhance team building applications before error-free portals. Proactively supply backward-compatible applications before empowered users.",
      image: "/bg1.jpg",
    },
    {
      header: "Web Development",
      subheader:
        "Proactively supply backward-compatible applications before empowered users. Collaboratively foster wireless models via exceptional technologies.",
      image: "/bg2.jpg",
    },
    {
      header: "Mobile Development",
      subheader:
        "Collaboratively foster wireless models via exceptional technologies. Intrinsicly coordinate high-payoff.",
      image: "/bg3.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {data.map((item, index) => (
        <div
          key={index}
          className={`absolute inset-0 flex flex-col items-center justify-center bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${item.image})`,
          }}
        >
          <h1 className="text-4xl text-white font-bold text-center mb-4 animate-fadeIn">
            {item.header}
          </h1>
          <p className="text-white max-w-xl text-center px-4 animate-fadeIn">
            {item.subheader}
          </p>

          <button className="mt-8 md:px-12 px-8 md:py-4 py-2 bg-green-500 text-white md:text-2xl text-lg md:rounded-3xl rounded-2xl cursor-pointer animate-fadeIn">
            Get Started
          </button>
        </div>
      ))}

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute cursor-pointer left-0 md:left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl z-10"
      >
        <FiChevronLeft />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute cursor-pointer right-0 md:right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl z-10"
      >
        <FiChevronRight />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {data.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1 w-8 rounded-full cursor-pointer transition-all duration-300 ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Hero;
