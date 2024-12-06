import React from 'react';
import { Helmet } from 'react-helmet';

const FMCSASafetyRegulations = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Helmet>
        <title>FMCSA Proposes New Safety Regulations - Safe Haul</title>
        <meta name="description" content="FMCSA announces new proposed safety regulations aimed at enhancing road safety through advanced driver assistance systems." />
      </Helmet>

      <div className="mb-10">
        <div className="text-sm font-medium mb-2">
          <span className="text-[#40CBB5] bg-[#40CBB5]/10 px-3 py-1 rounded-full">Latest News</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">FMCSA Proposes New Safety Regulations for Commercial Vehicles</h1>
        <div className="flex items-center text-gray-600 text-sm">
          <span className="font-medium">January 15, 2024</span>
          <span className="mx-2">•</span>
          <span>5 min read</span>
        </div>
      </div>

      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          The Federal Motor Carrier Safety Administration (FMCSA) has announced new proposed safety regulations aimed at enhancing road safety through advanced driver assistance systems.
        </p>

        <div className="bg-gradient-to-r from-[#40CBB5]/10 to-transparent p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Highlights of the Proposed Regulations</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-[#40CBB5] mr-2">•</span>
              Mandatory implementation of advanced driver assistance systems (ADAS) for new commercial vehicles
            </li>
            <li className="flex items-start">
              <span className="text-[#40CBB5] mr-2">•</span>
              Enhanced requirements for automatic emergency braking systems
            </li>
            <li className="flex items-start">
              <span className="text-[#40CBB5] mr-2">•</span>
              Updated standards for lane departure warning systems
            </li>
            <li className="flex items-start">
              <span className="text-[#40CBB5] mr-2">•</span>
              New protocols for driver monitoring systems
            </li>
          </ul>
        </div>

        <section className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Impact on Transportation Companies</h2>
            <p className="text-gray-700 mb-4">
              Transportation companies will need to evaluate their current fleet technology and plan for potential upgrades to meet these new requirements. The proposed regulations include a phased implementation approach to allow companies time to adapt.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Implementation Timeline</h2>
            <p className="text-gray-700 mb-4">The FMCSA has proposed a three-year implementation period:</p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#40CBB5] mr-2">1.</span>
                Year 1: Initial assessment and planning phase
              </li>
              <li className="flex items-start">
                <span className="text-[#40CBB5] mr-2">2.</span>
                Year 2: Begin implementation of basic safety systems
              </li>
              <li className="flex items-start">
                <span className="text-[#40CBB5] mr-2">3.</span>
                Year 3: Full compliance with all new requirements
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cost Considerations</h2>
            <p className="text-gray-700">
              While these new regulations will require initial investment in technology upgrades, the FMCSA estimates that the long-term benefits in reduced accidents and improved safety will outweigh the costs.
            </p>
          </div>
        </section>

        <div className="bg-gradient-to-br from-[#40CBB5]/20 to-white p-8 rounded-xl mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Next Steps for Transportation Companies</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#40CBB5] mr-2">✓</span>
                Review current safety systems and identify gaps
              </li>
              <li className="flex items-start">
                <span className="text-[#40CBB5] mr-2">✓</span>
                Develop an implementation strategy
              </li>
              <li className="flex items-start">
                <span className="text-[#40CBB5] mr-2">✓</span>
                Budget for necessary upgrades
              </li>
            </ul>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#40CBB5] mr-2">✓</span>
                Train staff on new systems
              </li>
              <li className="flex items-start">
                <span className="text-[#40CBB5] mr-2">✓</span>
                Monitor compliance requirements
              </li>
            </ul>
          </div>
          <div className="mt-6 text-center">
            <button 
              onClick={() => window.location.href = '/contact'}
              className="inline-flex items-center px-6 py-3 border-2 border-[#40CBB5] text-lg font-semibold rounded-full text-[#40CBB5] hover:bg-[#40CBB5] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              Get Help With Compliance
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FMCSASafetyRegulations;
