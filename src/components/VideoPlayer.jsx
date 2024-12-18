import React, { useState } from 'react';

const VideoPlayer = ({ language = 'en' }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // This will be updated with YouTube URLs later
  const videoSources = {
    en: '/safety-vid.MOV',
    // Add other language versions here when available
    // pl: 'polish-version-url',
    // ro: 'romanian-version-url',
    // es: 'spanish-version-url',
    // ua: 'ukrainian-version-url'
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-8 rounded-xl overflow-hidden shadow-2xl">
      <div className="aspect-w-16 aspect-h-9">
        <video
          src={videoSources[language]}
          controls
          className="w-full h-full object-cover"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          playsInline // Better mobile experience
          preload="metadata" // Faster initial load
        >
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="bg-white p-4">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Safe Haul Claims & Safety Management
        </h3>
        <p className="text-gray-600">
          Learn how we help transportation companies manage claims and improve safety.
        </p>
      </div>
    </div>
  );
};

export default VideoPlayer;
