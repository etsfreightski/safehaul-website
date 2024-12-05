import React from 'react';
import { Link } from 'react-router-dom';

const ComprehensiveAnalysisPart2 = () => {
  return (
    <div className="prose prose-lg max-w-none">
      <article className="space-y-8">
        <h2 className="text-3xl font-bold text-gray-900">Part 2: Implementation Strategies and Regulatory Framework</h2>

        <section>
          <h3 className="text-2xl font-bold text-gray-800">Regulatory Compliance Framework</h3>
          <p className="mt-4 text-gray-700">
            Transportation companies must navigate a complex regulatory landscape. Key resources and requirements include:
          </p>

          <div className="mt-6">
            <h4 className="text-xl font-semibold text-gray-800">FMCSA Guidelines</h4>
            <ul className="mt-4 space-y-2 list-disc list-inside text-gray-700">
              <li>
                <a href="https://www.fmcsa.dot.gov/regulations/title49/b/5/3" 
                   className="text-teal-600 hover:underline"
                   target="_blank" 
                   rel="noopener noreferrer">
                  Part 395: Hours of Service Requirements
                </a>
              </li>
              <li>
                <a href="https://www.fmcsa.dot.gov/regulations/title49/b/5/3"
                   className="text-teal-600 hover:underline"
                   target="_blank"
                   rel="noopener noreferrer">
                  Part 396: Vehicle Maintenance Standards
                </a>
              </li>
            </ul>
          </div>
        </section>

        {/* Continue with remaining sections using the same styling pattern */}

        <div className="mt-12 pt-8 border-t border-gray-200 flex justify-between">
          <Link 
            to="/blog/comprehensive-analysis/part1"
            className="text-teal-500 hover:underline font-bold"
          >
            ← Back to Part 1
          </Link>
          <Link 
            to="/blog/comprehensive-analysis/part3"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-teal-500 text-white font-bold hover:bg-teal-600 transition-colors"
          >
            Continue to Part 3: Future Trends →
          </Link>
        </div>
      </article>
    </div>
  );
};

export default ComprehensiveAnalysisPart2;