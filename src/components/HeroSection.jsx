import React from 'react';

const HeroSection = () => (
  <div className="relative bg-gray-200 py-32">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="text-left">
          <h1 className="text-5xl tracking-tight font-black text-gray-900 sm:text-6xl md:text-7xl mb-8 drop-shadow-xl">
            <span className="block">Professional</span>
            <span className="block text-[#40CBB5] drop-shadow-xl text-shadow-outline">Claims & Safety Management</span>
          </h1>
          <p className="mt-6 text-xl text-gray-900 md:text-2xl leading-relaxed font-bold drop-shadow-lg">
            Industry leaders in transportation safety, bringing executive-level expertise and proven success in fleet safety management.
          </p>
          <div className="mt-10">
            <a href="#contact" className="inline-block bg-[#40CBB5] text-white text-xl px-12 py-4 rounded-lg hover:bg-[#35af9e] transition-all duration-300 shadow-2xl font-black">
              Get Started
            </a>
          </div>
        </div>
        <div>
          <img src="/truck-driver.JPG" alt="Professional truck driver" className="w-full rounded-lg shadow-2xl" />
        </div>
      </div>
    </div>
  </div>
);

export default HeroSection;