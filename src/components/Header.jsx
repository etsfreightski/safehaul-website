import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const scrollToSection = (sectionId) => {
    if (!isHomePage) {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white shadow-xl">
      <nav className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-40">
          <div className="flex-shrink-0 flex justify-start w-48">
            <Link to="/">
              <img src="/safehaul-logo.svg.PNG" alt="Safe Haul Claims & Safety Management" className="h-36 w-auto drop-shadow-xl" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-900 p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-xl font-black text-gray-900 hover:text-[#40CBB5] transition-colors drop-shadow-md">Home</Link>
            <button onClick={() => scrollToSection('services')} className="text-xl font-black text-gray-900 hover:text-[#40CBB5] transition-colors drop-shadow-md">Services</button>
            <button onClick={() => scrollToSection('subscriptions')} className="text-xl font-black text-gray-900 hover:text-[#40CBB5] transition-colors drop-shadow-md flex items-center">
              <span className="text-[#FFB951] mr-2 text-2xl drop-shadow-lg">★</span>
              Subscriptions
              <span className="text-[#FFB951] ml-2 text-2xl drop-shadow-lg">★</span>
            </button>
            <button onClick={() => scrollToSection('why-us')} className="text-xl font-black text-gray-900 hover:text-[#40CBB5] transition-colors drop-shadow-md">Why Us</button>
            <button onClick={() => scrollToSection('about')} className="text-xl font-black text-gray-900 hover:text-[#40CBB5] transition-colors drop-shadow-md">About</button>
            <Link to="/risk-assessment" className="text-xl font-black text-gray-900 hover:text-[#40CBB5] transition-colors drop-shadow-md">Risk Assessment</Link>
            <Link to="/testimonials" className="text-xl font-black text-gray-900 hover:text-[#40CBB5] transition-colors drop-shadow-md">Testimonials</Link>
            <Link to="/blog" className="text-xl font-black text-gray-900 hover:text-[#40CBB5] transition-colors drop-shadow-md">Blog</Link>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-xl font-black border-4 border-[#40CBB5] px-10 py-4 rounded-full text-[#40CBB5] hover:bg-[#40CBB5] hover:text-white transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Contact
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 bg-white shadow-lg p-6 z-50">
            <div className="flex flex-col space-y-6">
              <Link to="/" className="text-xl font-black text-gray-900 hover:text-[#40CBB5] transition-colors">Home</Link>
              <button onClick={() => scrollToSection('services')} className="text-xl font-black text-gray-900 hover:text-[#40CBB5] transition-colors text-left">Services</button>
              <button onClick={() => scrollToSection('subscriptions')} className="text-xl font-black text-gray-900 hover:text-[#40CBB5] transition-colors flex items-center">
                <span className="text-[#FFB951] mr-2 text-2xl">★</span>
                Subscriptions
                <span className="text-[#FFB951] ml-2 text-2xl">★</span>
              </button>
              <button onClick={() => scrollToSection('why-us')} className="text-xl font-black text-gray-900 hover:text-[#40CBB5] transition-colors text-left">Why Us</button>
              <button onClick={() => scrollToSection('about')} className="text-xl font-black text-gray-900 hover:text-[#40CBB5] transition-colors text-left">About</button>
              <Link to="/risk-assessment" className="text-xl font-black text-gray-900 hover:text-[#40CBB5] transition-colors">Risk Assessment</Link>
              <Link to="/testimonials" className="text-xl font-black text-gray-900 hover:text-[#40CBB5] transition-colors">Testimonials</Link>
              <Link to="/blog" className="text-xl font-black text-gray-900 hover:text-[#40CBB5] transition-colors">Blog</Link>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-xl font-black border-4 border-[#40CBB5] px-10 py-4 rounded-full text-[#40CBB5] hover:bg-[#40CBB5] hover:text-white transition-all text-center shadow-xl"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;