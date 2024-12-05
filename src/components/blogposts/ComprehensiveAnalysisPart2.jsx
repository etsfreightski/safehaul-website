import React from 'react';
import { Link } from 'react-router-dom';

const ComprehensiveAnalysisPart2 = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Commercial Vehicle Safety: A Deep Dive into Regulations and Best Practices</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">FMCSA Compliance and Safety Standards</h2>
        <p className="mb-4">
          According to the <a href="https://www.fmcsa.dot.gov/regulations/hours-of-service" 
             className="text-blue-600 hover:underline" 
             target="_blank" 
             rel="noopener noreferrer">Federal Motor Carrier Safety Administration</a>, 
          Hours of Service (HOS) regulations are critical for preventing driver fatigue and ensuring road safety.
        </p>
        
        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-semibold mb-3">Key Compliance Requirements:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>11-hour driving limit within a 14-hour window</li>
            <li>Mandatory 30-minute breaks after 8 hours of driving</li>
            <li>60/70 hour limit over 7/8 consecutive days</li>
            <li>Electronic logging device (ELD) requirements</li>
          </ul>
          <p className="mt-4 text-sm">
            Source: <a href="https://www.fmcsa.dot.gov/regulations/rulemaking/2015-12336" 
                      className="text-blue-600 hover:underline" 
                      target="_blank" 
                      rel="noopener noreferrer">FMCSA Final Rule on ELDs</a>
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Vehicle Maintenance and Inspection</h2>
        <p className="mb-4">
          The <a href="https://www.fmcsa.dot.gov/regulations/cargo-securement/cargo-securement-rules" 
                className="text-blue-600 hover:underline" 
                target="_blank" 
                rel="noopener noreferrer">FMCSA Cargo Securement Rules</a> establish specific requirements for:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Pre-trip inspections</li>
          <li>Load securing procedures</li>
          <li>Vehicle maintenance documentation</li>
          <li>Annual inspection requirements</li>
        </ul>
      </section>

      <nav className="flex justify-between items-center mt-12 pt-6 border-t">
        <Link to="/blog/comprehensive-analysis" 
              className="text-blue-600 hover:underline">
          ← Back to Overview
        </Link>
        <Link to="/blog/comprehensive-analysis/part3" 
              className="text-blue-600 hover:underline">
          Continue to Part 3 →
        </Link>
      </nav>
    </article>
  );
};

export default ComprehensiveAnalysisPart2;