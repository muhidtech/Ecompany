'use client';

import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';
import { BiUpArrowAlt } from 'react-icons/bi';
import Link from 'next/link';

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-green-500 text-white p-10 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Go Green Section */}
        <div>
          <h2 className="text-3xl font-bold mb-4">GO GREEN</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a
            tortor commodo, sollicitudin velit nec, lobortis erat.
          </p>
        </div>

        {/* About Us */}
        <div>
          <h3 className="text-xl font-semibold mb-4">ABOUT US</h3>
          <ul className="space-y-2">
            <li><Link href="../">Home</Link></li>
            <li><Link href="../about">About us</Link></li>
            <li><Link href="../service">Our services</Link></li>
            <li><Link href="#">Terms & Conditions</Link></li>
            <li><Link href="#">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-xl font-semibold mb-4">CONTACT US</h3>
          <p>Your Location<br />Your City<br />Your Country</p>
          <p><strong>Phone:</strong> +123-456-7890</p>
          <p><strong>Email:</strong> info@example.com</p>

          {/* Social Links */}
          <div className="flex gap-4 mt-4">
            <FaTwitter className="cursor-pointer hover:text-black" />
            <FaFacebookF className="cursor-pointer hover:text-black" />
            <FaLinkedinIn className="cursor-pointer hover:text-black" />
            <FaInstagram className="cursor-pointer hover:text-black" />
            <FaYoutube className="cursor-pointer hover:text-black" />
          </div>
        </div>

        {/* Subscription */}
        <div>
          <h3 className="text-xl font-semibold mb-4">SUBSCRIPTION</h3>
          <p className="mb-4">
            Stay updated with our latest news and offers.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="p-2 w-full text-black border-1 border-white"
            />
            <button className="bg-black p-2 text-white">Subscribe</button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-10 text-sm">
        &copy; {new Date().getFullYear()} Your Site Name. All Rights Reserved
      </div>

      {/* Back to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 bg-green-600 p-3 rounded-full shadow-lg hover:bg-green-700"
          aria-label="Back to top"
        >
          <BiUpArrowAlt size={30} className="text-white" />
        </button>
      )}
    </footer>
  );
};

export default Footer;
