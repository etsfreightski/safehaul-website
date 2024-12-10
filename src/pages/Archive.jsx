import React from 'react';
import { Link } from 'react-router-dom';

const Archive = () => {
  const archivedNews = [
    {
      title: "FMCSA Proposes New Safety Regulations for Commercial Vehicles",
      date: "2024-01-15",
      category: "Regulatory",
      description: "New proposals aim to enhance road safety with advanced driver assistance systems.",
      readTime: "5 min read"
    },
    {
      title: "Rising Insurance Costs Impact Transportation Industry",
      date: "2024-01-12",
      category: "Industry Trends",
      description: "Analysis of increasing insurance premiums and strategies for mitigation.",
      readTime: "4 min read"
    },
    {
      title: "Best Practices for Claims Management in 2024",
      date: "2024-01-10",
      category: "Best Practices",
      description: "Updated guidelines for efficient claims processing and resolution.",
      readTime: "6 min read"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          News & Updates Archive
        </h1>
        <p className="text-xl text-gray-600">
          Browse our historical collection of news, regulatory updates, and industry insights.
        </p>
      </div>
      
      <div className="grid gap-8">
        {archivedNews.map((item, index) => (
          <div 
            key={index}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="mb-2">
              <span className="inline-block bg-[#40CBB5] text-white px-3 py-1 rounded-full text-sm">
                {item.category}
              </span>
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              {item.title}
            </h2>
            <p className="text-gray-600 mb-4">
              {item.description}
            </p>
            <div className="text-sm text-gray-500">
              {item.date} • {item.readTime}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Archive;
