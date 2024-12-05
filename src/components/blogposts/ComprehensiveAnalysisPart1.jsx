import React from 'react';
import { Link } from 'react-router-dom';

const ComprehensiveAnalysisPart1 = () => {
  return (
    <div className="prose prose-lg max-w-none">
      <article className="space-y-8">
        <h2 className="text-3xl font-bold text-gray-900">Part 1: The Evolution of Transportation Safety and Risk Management</h2>
        
        <section>
          <h3 className="text-2xl font-bold text-gray-800">The Changing Landscape of Transportation Safety</h3>
          <p className="mt-4 text-gray-700">
            The transportation industry has undergone dramatic transformations over the past decades, driven by technological advancement, regulatory evolution, and shifting market demands. This comprehensive analysis examines how these changes have shaped modern safety practices and risk management strategies in the commercial transportation sector.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-bold text-gray-800">Historical Context and Industry Evolution</h3>
          <p className="mt-4 text-gray-700">
            Transportation safety has evolved from basic mechanical inspections to sophisticated, data-driven systems. The journey spans several decades of technological advancement and regulatory development:
          </p>
          
          <div className="mt-6 space-y-8">
            <div>
              <h4 className="text-xl font-semibold text-gray-800">1950s - Foundation of Modern Safety Standards</h4>
              <ul className="mt-4 space-y-2 list-disc list-inside text-gray-700">
                <li>Establishment of initial interstate commerce safety regulations</li>
                <li>Development of standardized vehicle inspection protocols</li>
                <li>Introduction of basic driver qualification requirements</li>
                <li>Creation of preliminary accident reporting systems</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-800">1970s - Enhancement of Safety Infrastructure</h4>
              <ul className="mt-4 space-y-2 list-disc list-inside text-gray-700">
                <li>Implementation of comprehensive vehicle maintenance standards</li>
                <li>Development of systematic driver training programs</li>
                <li>Introduction of regular safety auditing processes</li>
                <li>Establishment of unified safety rating systems</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-800">1990s - Digital Revolution in Safety Management</h4>
              <ul className="mt-4 space-y-2 list-disc list-inside text-gray-700">
                <li>Introduction of electronic logging devices</li>
                <li>Implementation of computerized maintenance tracking</li>
                <li>Development of digital driver qualification files</li>
                <li>Integration of GPS tracking systems</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-800">2000s - Modern Safety Technologies</h4>
              <ul className="mt-4 space-y-2 list-disc list-inside text-gray-700">
                <li>Deployment of advanced telematics solutions</li>
                <li>Integration of IoT devices for real-time monitoring</li>
                <li>Implementation of predictive maintenance systems</li>
                <li>Development of comprehensive fleet management platforms</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Continue with remaining sections using the same styling pattern */}

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link 
            to="/blog/comprehensive-analysis/part2"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-teal-500 text-white font-bold hover:bg-teal-600 transition-colors"
          >
            Continue to Part 2: Implementation and Best Practices →
          </Link>
        </div>
      </article>
    </div>
  );
};

export default ComprehensiveAnalysisPart1;