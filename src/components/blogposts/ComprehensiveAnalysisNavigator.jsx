import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ComprehensiveAnalysisPart1 from './ComprehensiveAnalysisPart1';
import ComprehensiveAnalysisPart2 from './ComprehensiveAnalysisPart2';
import ComprehensiveAnalysisPart3 from './ComprehensiveAnalysisPart3';

const ComprehensiveAnalysisNavigator = () => {
  const [currentPart, setCurrentPart] = useState(1);

  const renderCurrentPart = () => {
    switch(currentPart) {
      case 1:
        return <ComprehensiveAnalysisPart1 />;
      case 2:
        return <ComprehensiveAnalysisPart2 />;
      case 3:
        return <ComprehensiveAnalysisPart3 />;
      default:
        return <ComprehensiveAnalysisPart1 />;
    }
  };

  return (
    <div className="bg-gray-200 min-h-screen pt-8">
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <Link to="/blog" className="text-[#40CBB5] font-bold mb-8 inline-block hover:underline">
          ← Back to Blog
        </Link>

        {/* Navigation Controls */}
        <div className="bg-white rounded-lg shadow-xl p-4 mb-8">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-black text-gray-900">
              Transportation Safety and Claims Management: A Comprehensive Analysis
            </h1>
            <div className="flex space-x-4">
              {[1, 2, 3].map((part) => (
                <button
                  key={part}
                  onClick={() => setCurrentPart(part)}
                  className={`px-4 py-2 rounded-full ${
                    currentPart === part
                      ? 'bg-[#40CBB5] text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  } font-bold transition-colors`}
                >
                  Part {part}
                </button>
              ))}
            </div>
          </div>
          
          {/* Part Description */}
          <div className="mt-4 text-gray-700">
            {currentPart === 1 && "Methodological Framework and Initial Analysis"}
            {currentPart === 2 && "Implementation Process and Intervention Protocols"}
            {currentPart === 3 && "Statistical Validation and Future Developments"}
          </div>
        </div>

        {/* Render Current Part */}
        {renderCurrentPart()}

        {/* Bottom Navigation */}
        <div className="bg-white rounded-lg shadow-xl p-4 mt-8 flex justify-between">
          <button
            onClick={() => setCurrentPart(prev => Math.max(1, prev - 1))}
            className={`px-4 py-2 rounded-full ${
              currentPart === 1 ? 'invisible' : 'text-[#40CBB5] hover:bg-gray-100'
            } font-bold transition-colors`}
          >
            ← Previous Part
          </button>
          <button
            onClick={() => setCurrentPart(prev => Math.min(3, prev + 1))}
            className={`px-4 py-2 rounded-full ${
              currentPart === 3 ? 'invisible' : 'text-[#40CBB5] hover:bg-gray-100'
            } font-bold transition-colors`}
          >
            Next Part →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveAnalysisNavigator;