import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-white shadow-xl">
    <nav className="max-w-7xl mx-auto px-4">
      <div className="flex items-center justify-between h-40">
        <div className="flex-1 flex justify-start">
          <Link to="/">
            <img src="/safehaul-logo.svg.PNG" alt="Safe Haul Claims & Safety Management" className="h-36 w-auto drop-shadow-xl" />
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-lg font-black text-gray-900 hover:text-[#40CBB5] transition-colors drop-shadow-md">Home</Link>
          <a href="#services" className="text-lg font-black text-gray-900 hover:text-[#40CBB5] transition-colors drop-shadow-md">Services</a>
          <a href="#permits" className="text-lg font-black text-gray-900 hover:text-[#40CBB5] transition-colors drop-shadow-md">Permits</a>
          <a href="#subscriptions" className="text-lg font-black text-gray-900 hover:text-[#40CBB5] transition-colors drop-shadow-md flex items-center">
            <span className="text-[#FFB951] mr-2 drop-shadow-lg">★</span>
            Subscriptions
            <span className="text-[#FFB951] ml-2 drop-shadow-lg">★</span>
          </a>
          <a href="#why-us" className="text-lg font-black text-gray-900 hover:text-[#40CBB5] transition-colors drop-shadow-md">Why Us</a>
          <a href="#about" className="text-lg font-black text-gray-900 hover:text-[#40CBB5] transition-colors drop-shadow-md">About</a>
          <Link to="/testimonials" className="text-lg font-black text-gray-900 hover:text-[#40CBB5] transition-colors drop-shadow-md">Testimonials</Link>
	  <Link to="/blog" className="text-lg font-black text-gray-900 hover:text-[#40CBB5] transition-colors drop-shadow-md">Blog</Link>
	  <Link to="/risk-assessment" className="text-lg font-black text-gray-900 hover:text-[#40CBB5] transition-colors drop-shadow-md">Risk Assessment</Link>
          <a href="#contact" className="text-lg font-black border-3 border-[#40CBB5] px-8 py-3 rounded-full text-[#40CBB5] hover:bg-[#40CBB5] hover:text-white transition-all shadow-xl">Contact</a>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;