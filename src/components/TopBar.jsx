import React from 'react';
import { Phone, Mail, Clock, Globe } from 'lucide-react';

const TopBar = () => (
  <div className="bg-[#40CBB5] text-white py-3 shadow-lg">
    <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-center">
      <div className="flex flex-wrap gap-4 md:gap-8">
        <a href="tel:218-203-2097" className="flex items-center space-x-2 hover:text-gray-100">
          <Phone size={20} className="drop-shadow-lg" />
          <span className="text-lg font-bold drop-shadow-lg">(218) 203-2097</span>
        </a>
        <a href="mailto:info@safehaulclaims.com" className="flex items-center space-x-2 hover:text-gray-100">
          <Mail size={20} className="drop-shadow-lg" />
          <span className="text-lg font-bold drop-shadow-lg">info@safehaulclaims.com</span>
        </a>
        <div className="flex items-center space-x-2">
          <Globe size={20} className="drop-shadow-lg" />
          <span className="text-lg font-bold drop-shadow-lg">EN | PL | RU | ES | UA</span>
        </div>
      </div>
      <div className="flex items-center space-x-2 mt-2 md:mt-0">
        <Clock size={20} className="drop-shadow-lg" />
        <span className="text-lg font-bold drop-shadow-lg">Mon - Fri: 8:00 AM - 5:00 PM CST</span>
      </div>
    </div>
  </div>
);

export default TopBar;
