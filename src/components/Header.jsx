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
          <div className="hidden md:flex items-center space-x-4 ml-0">
            <Link to="/" className="text-lg font-semibold text-gray-900 hover:text-[#40CBB5] transition-colors drop-shadow-md whitespace-nowrap">Home</Link>
            <button onClick={() => scrollToSection('services')} className="text-lg font-semibold text-gray-900 hover:text-[#40CBB5] transition-colors drop-shadow-md whitespace-nowrap">Services</button>
            <Link to="/services/claims" className="text-lg font-semibold text-gray-900 hover:text-[#40CBB5] transition-colors drop-shadow-md whitespace-nowrap">Claims</Link>
            <button onClick={() => scrollToSection('subscriptions')} className="text-lg font-semibold text-gray-900 hover:text-[#40CBB5] transition-colors drop-shadow-md flex items-center whitespace-nowrap">
              <span className="text-[#FFB951] mr-1 text-xl drop-shadow-lg">★</span>
              Subscriptions
              <span className="text-[#FFB951] ml-1 text-xl drop-shadow-lg">★</span>
            </button>
            <button onClick={() => scrollToSection('why-us')} className="text-lg font-semibold text-gray-900 hover:text-[#40CBB5] transition-colors drop-shadow-md whitespace-nowrap">Why Us</button>
            <Link to="/about" className="text-lg font-semibold text-gray-900 hover:text-[#40CBB5] transition-colors drop-shadow-md whitespace-nowrap">About</Link>
            <Link to="/risk-assessment" className="text-lg font-semibold text-gray-900 hover:text-[#40CBB5] transition-colors drop-shadow-md whitespace-nowrap">Risk Assessment</Link>
            <Link to="/testimonials" className="text-lg font-semibold text-gray-900 hover:text-[#40CBB5] transition-colors drop-shadow-md whitespace-nowrap">Testimonials</Link>
            <Link to="/blog" className="text-lg font-semibold text-gray-900 hover:text-[#40CBB5] transition-colors drop-shadow-md whitespace-nowrap">Blog</Link>
            <Link to="/reviews" className="text-lg font-semibold text-gray-900 hover:text-[#40CBB5] transition-colors drop-shadow-md whitespace-nowrap">Reviews</Link>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-lg font-semibold border-2 border-[#40CBB5] px-8 py-2.5 rounded-full text-[#40CBB5] hover:bg-[#40CBB5] hover:text-white transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1 whitespace-nowrap"
            >
              Contact
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 bg-white shadow-lg p-6 z-50">
            <div className="flex flex-col space-y-6">
              <Link to="/" className="text-base font-semibold text-gray-900 hover:text-[#40CBB5] transition-colors">Home</Link>
              <button onClick={() => scrollToSection('services')} className="text-base font-semibold text-gray-900 hover:text-[#40CBB5] transition-colors text-left">Services</button>
              <Link to="/services/claims" className="text-base font-semibold text-gray-900 hover:text-[#40CBB5] transition-colors">Claims</Link>
              <button onClick={() => scrollToSection('subscriptions')} className="text-base font-semibold text-gray-900 hover:text-[#40CBB5] transition-colors flex items-center">
                <span className="text-[#FFB951] mr-1 text-lg">★</span>
                Subscriptions
                <span className="text-[#FFB951] ml-1 text-lg">★</span>
              </button>
              <button onClick={() => scrollToSection('why-us')} className="text-base font-semibold text-gray-900 hover:text-[#40CBB5] transition-colors text-left">Why Us</button>
              <button onClick={() => scrollToSection('about')} className="text-base font-semibold text-gray-900 hover:text-[#40CBB5] transition-colors text-left">About</button>
              <Link to="/risk-assessment" className="text-base font-semibold text-gray-900 hover:text-[#40CBB5] transition-colors">Risk Assessment</Link>
              <Link to="/testimonials" className="text-base font-semibold text-gray-900 hover:text-[#40CBB5] transition-colors">Testimonials</Link>
              <Link to="/blog" className="text-base font-semibold text-gray-900 hover:text-[#40CBB5] transition-colors">Blog</Link>
              <Link to="/reviews" className="text-base font-semibold text-gray-900 hover:text-[#40CBB5] transition-colors">Reviews</Link>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-base font-semibold border-2 border-[#40CBB5] px-6 py-2 rounded-full text-[#40CBB5] hover:bg-[#40CBB5] hover:text-white transition-all text-center shadow-md"
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