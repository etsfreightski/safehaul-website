import React from 'react';
import { Helmet } from 'react-helmet';

const FMCSASafetyRegulations = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Helmet>
        <title>FMCSA Proposes New Safety Regulations - Safe Haul</title>
        <meta name="description" content="Learn about the FMCSA's new proposed safety regulations for commercial vehicles and how they impact the transportation industry." />
      </Helmet>

      <div className="mb-8">
        <span className="text-sm text-[#40CBB5] font-semibold">Regulatory</span>
        <h1 className="text-3xl font-bold mt-2 mb-4">FMCSA Proposes New Safety Regulations for Commercial Vehicles</h1>
        <div className="flex items-center text-gray-600 text-sm">
          <span>January 15, 2024</span>
          <span className="mx-2">•</span>
          <span>5 min read</span>
        </div>
      </div>

      <div className="prose prose-lg max-w-none">
        <p className="lead">
          The Federal Motor Carrier Safety Administration (FMCSA) has announced new proposed safety regulations aimed at enhancing road safety through advanced driver assistance systems.
        </p>

        <h2>Key Highlights of the Proposed Regulations</h2>
        <ul>
          <li>Mandatory implementation of advanced driver assistance systems (ADAS) for new commercial vehicles</li>
          <li>Enhanced requirements for automatic emergency braking systems</li>
          <li>Updated standards for lane departure warning systems</li>
          <li>New protocols for driver monitoring systems</li>
        </ul>

        <h2>Impact on Transportation Companies</h2>
        <p>
          Transportation companies will need to evaluate their current fleet technology and plan for potential upgrades to meet these new requirements. The proposed regulations include a phased implementation approach to allow companies time to adapt.
        </p>

        <h2>Implementation Timeline</h2>
        <p>
          The FMCSA has proposed a three-year implementation period:
        </p>
        <ul>
          <li>Year 1: Initial assessment and planning phase</li>
          <li>Year 2: Begin implementation of basic safety systems</li>
          <li>Year 3: Full compliance with all new requirements</li>
        </ul>

        <h2>Cost Considerations</h2>
        <p>
          While these new regulations will require initial investment in technology upgrades, the FMCSA estimates that the long-term benefits in reduced accidents and improved safety will outweigh the costs.
        </p>

        <h2>Next Steps for Transportation Companies</h2>
        <ol>
          <li>Review current safety systems and identify gaps</li>
          <li>Develop an implementation strategy</li>
          <li>Budget for necessary upgrades</li>
          <li>Train staff on new systems</li>
          <li>Monitor compliance requirements</li>
        </ol>

        <div className="bg-gray-100 p-4 rounded-lg mt-8">
          <h3>How Safe Haul Can Help</h3>
          <p>
            Our team of experts can assist you in understanding these new regulations and developing a comprehensive implementation plan. Contact us to learn more about our compliance consulting services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FMCSASafetyRegulations;
