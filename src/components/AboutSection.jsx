import React from 'react';

const AboutSection = () => (
  <div id="about" className="py-24 bg-gray-200">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h2 className="text-5xl font-black text-gray-900 mb-8 drop-shadow-xl">
            Meet a Member of Our Team
          </h2>
          <div className="prose prose-lg">
            <h3 className="text-3xl font-black text-[#40CBB5] mb-6 drop-shadow-lg">
              Claims Director
            </h3>
            <p className="text-xl text-gray-900 mb-6 font-bold drop-shadow-md">
              Our leadership team brings over two decades of hands-on experience in transportation safety management, with proven success in growing fleet operations while maintaining exceptional safety standards.
            </p>
            <p className="text-xl text-gray-900 font-bold drop-shadow-md">
              Having served as Safety Directors for major carriers, we understand the real-world challenges of balancing operational efficiency with safety compliance.
            </p>
          </div>
        </div>
        <div>
          <img
            src="/lilly-pic.PNG"
            alt="Claims Director"
            className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  </div>
);

export default AboutSection;