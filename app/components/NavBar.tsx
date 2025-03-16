"use client";

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import Link from 'next/link';
import './homes.css';


function NavBar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => pathname === href;

  return (
    <div className={`w-full fixed flex justify-between items-center p-5 z-50 transition-colors duration-300 ${isScrolled ? 'bg-black/60' : 'bg-transparent'}`}>
      {/* Logo */}
      <h1 className='md:text-4xl text-2xl text-green-500 font-medium cursor-pointer transition-transform duration-300 hover:scale-110'>
        <Link href='/'>Ecompany</Link>
      </h1>

      {/* Navigation Links */}
      <div
        className={`fixed top-0 right-0 max-lg:h-screen w-[50%] max-lg:bg-black/50 flex flex-col max-lg:items-center gap-10 max-lg:pt-20 text-start text-white text-lg pr-3 
          transition-transform duration-500 ease-in-out lg:static lg:flex-row lg:h-auto lg:w-auto lg:bg-transparent 
          ${menuOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"}`}
      >
        {[
          { name: 'HOME', path: '/' },
          { name: 'ABOUT', path: '/about' },
          { name: 'SERVICE', path: '/service' },
          { name: 'PORTFOLIO', path: '/portfolio' },
          { name: 'PRICE', path: '/price' },
          { name: 'CONTACT', path: '/contact' },
        ].map((link) => (
          <Link
            key={link.name}
            href={link.path}
            className={`link ${isActive(link.path) ? 'active' : ''}`}
          >
            {link.name}
          </Link>
        ))}

        {/* Dropdown Menu */}
        <div
          className="relative flex items-center cursor-pointer text-sm md:text-lg"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          DROPDOWN <FiChevronDown className="ml-1" />
          {dropdownOpen && (
            <div className='absolute top-full mt-2 w-40 bg-white py-3 shadow-lg flex flex-col text-black md:text-sm text-xs'>
              {['DROPDOWN 1', 'DROPDOWN 2', 'DROPDOWN 3', 'DROPDOWN 4', 'DROPDOWN 5'].map((item) => (
                <Link key={item} href="#" className='px-4 py-2 hover:bg-gray-200'>
                  {item}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Close Menu Button */}
        <button
          className="absolute top-5 right-5 text-4xl text-white lg:hidden"
          onClick={() => setMenuOpen(false)}
          aria-label="Close Menu"
        >
          <FiX />
        </button>
      </div>

      {/* Hamburger Button */}
      {!menuOpen && (
        <button
          className="lg:hidden cursor-pointer text-3xl text-white hover:scale-110 transition duration-300"
          onClick={() => setMenuOpen(true)}
          aria-label="Open Menu"
        >
          <FiMenu />
        </button>
      )}
    </div>
  );
}

export default NavBar;
