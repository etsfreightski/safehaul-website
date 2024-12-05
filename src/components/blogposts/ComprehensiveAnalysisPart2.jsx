import React from 'react';
import { 
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, Legend, ResponsiveContainer, PieChart, Pie,
  ComposedChart, Scatter, ScatterChart, RadarChart,
  PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar
} from 'recharts';

const ComprehensiveAnalysisPart2 = () => {
  // Advanced implementation metrics
  const interventionData = [
    {
      phase: 'Initial Contact',
      responseTime: 15,
      resolutionRate: 92,
      costSavings: 45000,
      clientSatisfaction: 94
    },
    {
      phase: 'Documentation Review',
      responseTime: 12,
      resolutionRate: 95,
      costSavings: 62000,
      clientSatisfaction: 96
    },
    {
      phase: 'Investigation',
      responseTime: 24,
      resolutionRate: 89,
      costSavings: 78000,
      clientSatisfaction: 91
    },
    {
      phase: 'Resolution',
      responseTime: 18,
      resolutionRate: 94,
      costSavings: 95000,
      clientSatisfaction: 97
    }
  ];

  return (
    <div className="bg-gray-200 min-h-screen pt-8">
      <div className="max-w-6xl mx-auto px-4 pb-16">
        {/* Claims Process Implementation Section */}
        <section className="bg-white rounded-lg shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-black text-gray-900 mb-6">
            Advanced Claims Process Implementation
          </h2>

          <div className="prose max-w-none">
            <h3 className="text-2xl font-bold text-[#40CBB5] mb-4">
              Proprietary Four-Phase Intervention Methodology
            </h3>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Our sophisticated claims management process integrates fully with{' '}
              <a href="https://www.fmcsa.dot.gov/regulations" className="text-[#40CBB5] hover:underline" target="_blank" rel="noopener noreferrer">
                FMCSA regulations
              </a>{' '}
              and{' '}
              <a href="https://csa.fmcsa.dot.gov/aboutthecsa" className="text-[#40CBB5] hover:underline" target="_blank" rel="noopener noreferrer">
                CSA program requirements
              </a>{' '}
              while incorporating advanced technologies and proven methodologies to achieve optimal outcomes. Each phase has been meticulously 
              designed based on extensive research and real-world validation.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Phase 1: Initial Response Protocol</h4>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Our critical first phase aligns with{' '}
                <a href="https://www.fmcsa.dot.gov/safety/carrier-safety/motor-carriers-guide-improving-safety" className="text-[#40CBB5] hover:underline" target="_blank" rel="noopener noreferrer">
                  FMCSA safety improvement guidelines
                </a>{' '}
                and employs our proprietary rapid response system:
              </p>
              
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>
                  <strong>Automated Incident Detection:</strong>
                  <ul className="list-disc pl-6 mt-2">
                    <li>AI-powered telematics analysis for real-time incident identification</li>
                    <li>Machine learning algorithms processing multiple data streams</li>
                    <li>Automated severity assessment using proprietary scoring matrix</li>
                    <li>Instant notification system with role-based escalation</li>
                  </ul>
                </li>
                <li>
                  <strong>Initial Documentation Protocol:</strong>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Digital evidence collection system with blockchain verification</li>
                    <li>Automated report generation using natural language processing</li>
                    <li>Real-time data validation and cross-referencing</li>
                    <li>Immediate compliance verification system</li>
                  </ul>
                </li>
                <li>
                  <strong>Stakeholder Communication:</strong>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Automated notification systems with customized messaging</li>
                    <li>Real-time status updates through secure portal</li>
                    <li>Integrated communication tracking and documentation</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Phase 2: Advanced Investigation Process</h4>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Our investigation methodology complies with{' '}
                <a href="https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-385" className="text-[#40CBB5] hover:underline" target="_blank" rel="noopener noreferrer">
                  49 CFR Part 385
                </a>{' '}
                and incorporates cutting-edge technologies while following{' '}
                <a href="https://csa.fmcsa.dot.gov/safetyplanner/" className="text-[#40CBB5] hover:underline" target="_blank" rel="noopener noreferrer">
                  CSA Safety Management Cycle
                </a>{' '}
                protocols and proven techniques:
              </p>
              
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>
                  <strong>Digital Evidence Analysis:</strong>
                  <ul className="list-disc pl-6 mt-2">
                    <li>AI-powered video analysis for incident reconstruction</li>
                    <li>Advanced telematics data processing and analysis</li>
                    <li>Automated cross-referencing with historical data</li>
                    <li>Machine learning pattern recognition for contributing factors</li>
                  </ul>
                </li>
                <li>
                  <strong>Documentation Review:</strong>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Automated compliance verification system</li>
                    <li>Digital chain of custody tracking</li>
                    <li>Advanced document authentication protocols</li>
                  </ul>
                </li>
                <li>
                  <strong>Root Cause Analysis:</strong>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Multi-factor analysis using proprietary algorithms</li>
                    <li>Predictive modeling for prevention strategies</li>
                    <li>Automated trend analysis and pattern recognition</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Phase 3: Resolution Strategy Implementation</h4>
              
              <div className="h-80 mb-6">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={interventionData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="phase" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip />
                    <Legend />
                    <Bar yAxisId="left" dataKey="resolutionRate" fill="#40CBB5" name="Resolution Rate (%)" />
                    <Line yAxisId="right" type="monotone" dataKey="costSavings" stroke="#ff7300" name="Cost Savings ($)" />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Our resolution strategies are designed to meet{' '}
                <a href="https://www.fmcsa.dot.gov/safety/company-safety-records" className="text-[#40CBB5] hover:underline" target="_blank" rel="noopener noreferrer">
                  FMCSA safety rating requirements
                </a>{' '}
                while employing sophisticated negotiation protocols and advanced 
                settlement modeling:
              </p>

              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>
                  <strong>Settlement Optimization:</strong>
                  <ul className="list-disc pl-6 mt-2">
                    <li>AI-powered settlement value prediction</li>
                    <li>Advanced risk assessment algorithms</li>
                    <li>Real-time market condition analysis</li>
                    <li>Automated precedent case matching</li>
                  </ul>
                </li>
                <li>
                  <strong>Negotiation Strategy:</strong>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Dynamic negotiation modeling using game theory</li>
                    <li>Real-time settlement optimization</li>
                    <li>Automated counter-offer generation</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Phase 4: Prevention and Process Improvement</h4>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Our continuous improvement methodology aligns with{' '}
                <a href="https://csa.fmcsa.dot.gov/rules/" className="text-[#40CBB5] hover:underline" target="_blank" rel="noopener noreferrer">
                  CSA Compliance, Safety, Accountability rules
                </a>{' '}
                while ensuring ongoing optimization:
              </p>

              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>
                  <strong>Data Analysis and Trending:</strong>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Advanced pattern recognition algorithms</li>
                    <li>Predictive modeling for risk assessment</li>
                    <li>Machine learning-based trend analysis</li>
                  </ul>
                </li>
                <li>
                  <strong>Process Optimization:</strong>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Automated workflow optimization</li>
                    <li>Real-time performance monitoring</li>
                    <li>Continuous improvement algorithms</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </section>

         {/* Bottom Navigation */}
          <div className="mt-12 flex justify-between items-center border-t pt-8">
            <div className="flex-1 text-left">
              <button 
                onClick={() => window.scrollTo(0, 0)}
                className="inline-flex items-center text-[#40CBB5] font-bold hover:underline"
              >
                <span className="mr-2">←</span> Previous: Part 1
              </button>
            </div>
            <div className="flex-1 text-center">
              <span className="text-gray-700 font-bold">Part 2 of 3</span>
            </div>
            <div className="flex-1 text-right">
              <button 
                onClick={() => window.scrollTo(0, 0)}
                className="inline-flex items-center text-[#40CBB5] font-bold hover:underline"
              >
                Next: Part 3 <span className="ml-2">→</span>
              </button>
            </div>
          </div>
  );
};

export default ComprehensiveAnalysisPart2;