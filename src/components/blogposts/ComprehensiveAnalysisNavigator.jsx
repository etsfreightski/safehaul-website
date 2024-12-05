import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import ComprehensiveAnalysisPart1 from './ComprehensiveAnalysisPart1';
import ComprehensiveAnalysisPart2 from './ComprehensiveAnalysisPart2';
import ComprehensiveAnalysisPart3 from './ComprehensiveAnalysisPart3';

const ComprehensiveAnalysisNavigator = () => {
  return (
    <div className="bg-gray-200 min-h-screen pt-8">
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <Link to="/blog" className="text-[#40CBB5] font-bold mb-8 inline-block hover:underline">
          ← Back to Blog
        </Link>

        <div className="bg-white rounded-lg shadow-xl p-4 mb-8">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-black text-gray-900">
              Transportation Safety and Claims Management: A Comprehensive Analysis
            </h1>
            <div className="flex space-x-4">
              <Link to="/blog/comprehensive-analysis/part1" 
                className="px-4 py-2 rounded-full text-gray-700 hover:bg-gray-100 font-bold transition-colors">
                Part 1
              </Link>
              <Link to="/blog/comprehensive-analysis/part2"
                className="px-4 py-2 rounded-full text-gray-700 hover:bg-gray-100 font-bold transition-colors">
                Part 2
              </Link>
              <Link to="/blog/comprehensive-analysis/part3"
                className="px-4 py-2 rounded-full text-gray-700 hover:bg-gray-100 font-bold transition-colors">
                Part 3
              </Link>
            </div>
          </div>
        </div>

        <Routes>
          <Route path="part1" element={<ComprehensiveAnalysisPart1 />} />
          <Route path="part2" element={<ComprehensiveAnalysisPart2 />} />
          <Route path="part3" element={<ComprehensiveAnalysisPart3 />} />
          <Route index element={<ComprehensiveAnalysisPart1 />} />
        </Routes>
      </div>
    </div>
  );
};

export default ComprehensiveAnalysisNavigator;