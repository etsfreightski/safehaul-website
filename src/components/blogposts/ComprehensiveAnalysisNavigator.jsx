import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import ComprehensiveAnalysisPart1 from './ComprehensiveAnalysisPart1';
import ComprehensiveAnalysisPart2 from './ComprehensiveAnalysisPart2';
import ComprehensiveAnalysisPart3 from './ComprehensiveAnalysisPart3';

const ComprehensiveAnalysisNavigator = () => {
  return (
    <div className="bg-gray-100 min-h-screen pt-8">
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <Link to="/blog" className="text-teal-500 font-bold mb-8 inline-block hover:underline">
          ← Back to Blog
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <h1 className="text-2xl font-black text-gray-900">
              Transportation Safety and Claims Management: A Comprehensive Analysis
            </h1>
            <nav className="flex gap-2">
              <Link to="part1" 
                className="px-6 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-teal-500 hover:text-white font-bold transition-colors">
                Part 1
              </Link>
              <Link to="part2"
                className="px-6 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-teal-500 hover:text-white font-bold transition-colors">
                Part 2
              </Link>
              <Link to="part3"
                className="px-6 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-teal-500 hover:text-white font-bold transition-colors">
                Part 3
              </Link>
            </nav>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <Routes>
            <Route path="part1" element={<ComprehensiveAnalysisPart1 />} />
            <Route path="part2" element={<ComprehensiveAnalysisPart2 />} />
            <Route path="part3" element={<ComprehensiveAnalysisPart3 />} />
            <Route index element={<ComprehensiveAnalysisPart1 />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveAnalysisNavigator;