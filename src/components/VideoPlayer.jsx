import React, { useEffect, useRef, useState } from 'react';

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16">
      <div 
        ref={containerRef}
        className={`container mx-auto px-4 max-w-6xl transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            See How We Transform Transportation Safety
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch our quick overview of how Safe Haul helps companies reduce claims and improve safety
          </p>
        </div>
        
        <div className="relative rounded-xl overflow-hidden shadow-2xl bg-white">
          <div className="aspect-w-16 aspect-h-9">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              controls
              playsInline
              preload="metadata"
              poster="/truck-driver.JPG"
            >
              <source src="/safety-vid.MOV" type="video/quicktime" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2">Professional Management</h3>
            <p className="text-gray-600">Expert handling of claims and safety protocols</p>
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2">Multilingual Support</h3>
            <p className="text-gray-600">Services available in multiple languages</p>
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2">24/7 Assistance</h3>
            <p className="text-gray-600">Round-the-clock support for your needs</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPlayer;
