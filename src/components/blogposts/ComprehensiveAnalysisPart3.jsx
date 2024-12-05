import React from 'react';
import { Link } from 'react-router-dom';

const ComprehensiveAnalysisPart3 = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Technology and Data in Commercial Transportation Safety</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Safety Management Systems (SMS)</h2>
        <p className="mb-4">
          The <a href="https://csa.fmcsa.dot.gov/About" 
             className="text-blue-600 hover:underline" 
             target="_blank" 
             rel="noopener noreferrer">FMCSA's Compliance, Safety, Accountability (CSA) program</a> uses 
          data-driven systems to identify high-risk carriers and improve safety performance.
        </p>
        
        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-semibold mb-3">SMS BASICs Categories:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Unsafe Driving</li>
            <li>Hours-of-Service Compliance</li>
            <li>Driver Fitness</li>
            <li>Controlled Substances/Alcohol</li>
            <li>Vehicle Maintenance</li>
            <li>Hazardous Materials Compliance</li>
            <li>Crash Indicator</li>
          </ul>
          <p className="mt-4 text-sm">
            Source: <a href="https://csa.fmcsa.dot.gov/About/Measure" 
                      className="text-blue-600 hover:underline" 
                      target="_blank" 
                      rel="noopener noreferrer">CSA Methodology</a>
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Technology Integration</h2>
        <p className="mb-4">
          The <a href="https://www.fmcsa.dot.gov/hours-service/elds/electronic-logging-devices" 
                className="text-blue-600 hover:underline" 
                target="_blank" 
                rel="noopener noreferrer">ELD mandate</a> has revolutionized safety monitoring through:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Automated HOS tracking</li>
          <li>Real-time compliance monitoring</li>
          <li>Improved data accuracy</li>
          <li>Reduced paperwork burden</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Future Developments</h2>
        <p className="mb-4">
          Keep track of upcoming regulations and technology requirements through the
          <a href="https://www.fmcsa.dot.gov/regulations/notices" 
             className="text-blue-600 hover:underline ml-1" 
             target="_blank" 
             rel="noopener noreferrer">FMCSA Notices and Rules</a> portal.
        </p>
      </section>

      <nav className="flex justify-between items-center mt-12 pt-6 border-t">
        <Link to="/blog/comprehensive-analysis/part2" 
              className="text-blue-600 hover:underline">
          ← Back to Part 2
        </Link>
        <Link to="/blog/comprehensive-analysis" 
              className="text-blue-600 hover:underline">
          Back to Overview →
        </Link>
      </nav>
    </article>
  );
};

export default ComprehensiveAnalysisPart3;