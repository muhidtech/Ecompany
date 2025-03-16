"use client";

import React, { useState } from 'react';
import { FiEye, FiExternalLink } from "react-icons/fi";
import './home.css';


const portfolioItems = [
  { id: 1, title: "Lorem ipsum dolor", category: "WEB DESIGN", image: "/laptop1.jpg" },
  { id: 2, title: "Nulla ullamcorper pharetra", category: "WEB DEVELOPMENT", image: "/laptop2.jpg" },
  { id: 3, title: "Phasellus eget dictum", category: "APP DESIGN", image: "/laptop3.jpg" },
  { id: 4, title: "Donec mattis vestibulum", category: "APP DEVELOPMENT", image: "/phone1.jpg" },
  { id: 5, title: "Pellentesque ullamcorper", category: "WEB DESIGN", image: "/phone2.jpg" },
  { id: 6, title: "Sed pretium sapien", category: "WEB DEVELOPMENT", image: "/phone3.jpg" },
];

const categories = ["ALL", "WEB DESIGN", "WEB DEVELOPMENT", "APP DESIGN", "APP DEVELOPMENT"];

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredItems = activeCategory === "ALL"
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <div className="w-full">
      {/* Navbar */}
      <div className="flex justify-center md:gap-4 py-4">
        {categories.map((category) => (
          <button
            key={category}
            className={`cursor-pointer px-4 py-2 md:rounded-lg transition duration-300 ${activeCategory === category ? 'bg-green-500 text-white' : 'bg-gray-800 text-white hover:bg-green-500 hover:text-white'}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Portfolio Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        {filteredItems.map((item) => (
          <div key={item.id}
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${item.image})`,
            }}
            className="relative group overflow-hidden bg-center bg-cover h-80 rounded-lg cursor-pointer animate-fade-slide">

            <div className="absolute inset-0 flex flex-col justify-center items-center group-hover:opacity-0 transition-opacity duration-300">
              <h3 className="text-white text-lg font-bold">{item.title}</h3>
              <p className="text-white text-sm">{item.category}</p>
            </div>

            <div className='absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              <button className="cursor-pointer bg-green-500 p-3 flex justify-center items-center hover:bg-white transition duration-200 ease-in-out rounded-full">
                <FiEye className="text-white text-2xl hover:text-black" />
              </button>
              <button className="cursor-pointer bg-green-500 p-3 flex justify-center items-center hover:bg-white transition duration-200 ease-in-out rounded-full">
                <FiExternalLink className="text-white text-2xl hover:text-black" />
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;


