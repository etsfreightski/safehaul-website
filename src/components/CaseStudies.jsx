import React from 'react';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Multi-State Fleet Safety Transformation",
      challenge: "A 200+ truck fleet facing rising accident rates and compliance issues across multiple states.",
      solution: "Implemented comprehensive safety program, driver training, and compliance monitoring system.",
      results: [
        "47% reduction in preventable accidents",
        "32% decrease in insurance premiums",
        "Perfect DOT audit scores across all terminals"
      ],
      industry: "Long-haul Transportation",
      timeframe: "12 months"
    },
    {
      id: 2,
      title: "Complex Claims Resolution Success",
      challenge: "Major cargo claim dispute involving multiple parties and jurisdictions.",
      solution: "Detailed investigation, evidence preservation, and strategic negotiation approach.",
      results: [
        "Successfully defended $2.1M claim",
        "Established new claim handling procedures",
        "Strengthened carrier-shipper relationships"
      ],
      industry: "Intermodal Transport",
      timeframe: "6 months"
    },
    {
      id: 3,
      title: "Start-up to Scale Success Story",
      challenge: "New carrier struggling with rapid growth and safety compliance.",
      solution: "Structured safety management system and growth-oriented compliance program.",
      results: [
        "Scaled from 5 to 50 trucks safely",
        "Maintained excellent CSA scores",
        "Secured preferred insurance rates"
      ],
      industry: "Regional Carrier",
      timeframe: "18 months"
    }
  ];

  return (
    <section id="case-studies" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600">Real results from real transportation companies</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div 
              key={study.id}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{study.title}</h3>
                  <div className="flex space-x-4 text-sm text-gray-500">
                    <span>{study.industry}</span>
                    <span>•</span>
                    <span>{study.timeframe}</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-[#40CBB5] mb-2">Challenge:</h4>
                  <p className="text-gray-700">{study.challenge}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-[#40CBB5] mb-2">Solution:</h4>
                  <p className="text-gray-700">{study.solution}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-[#40CBB5] mb-2">Results:</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {study.results.map((result, index) => (
                      <li key={index}>{result}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#contact"
            className="inline-block bg-[#40CBB5] text-white font-bold px-8 py-4 rounded-full hover:bg-[#35ab98] transition-colors shadow-lg"
          >
            Get Similar Results for Your Company
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
