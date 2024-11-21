import React from 'react';
import { Check } from 'lucide-react';

const SubscriptionsSection = () => {
  const tiers = [
    {
      tier: "Basic Compliance Package",
      features: [
        "DOT Compliance Assistance",
        "Guidance on meeting DOT regulations",
        "Assistance with necessary filings",
        "Regular safety audits",
        "Basic safety training materials",
        "Access to standard templates",
        "Compliance checklists",
        "Incident reporting forms",
      ],
    },
    {
      tier: "Enhanced Safety & Claims",
      isPopular: true,
      features: [
        "All Basic Package features",
        "Professional claims management",
        "Insurance company liaison",
        "Customized safety training",
        "Online training platforms",
        "Compliance reviews & updates",
        "Quarterly compliance reports",
        "Regular regulatory updates",
      ],
    },
    {
      tier: "Comprehensive Management",
      features: [
        "All Enhanced Package features",
        "24/7 Emergency support",
        "Proactive risk assessment",
        "Risk mitigation strategies",
        "DOT audit representation",
        "Dedicated account manager",
        "Strategy meetings",
        "Personalized consulting",
      ],
    },
  ];

  const PricingTier = ({ tier, features, isPopular }) => (
    <div
      className={`bg-white rounded-2xl shadow-2xl p-8 ${isPopular ? "border-4 border-[#40CBB5] relative transform hover:scale-105 transition-transform duration-300" : "hover:shadow-3xl transition-shadow duration-300"}`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#40CBB5] text-white px-6 py-2 rounded-full text-lg font-black shadow-lg">
          Most Popular
        </div>
      )}
      <div className="text-center mb-8">
        <h3 className="text-3xl font-black text-gray-900 drop-shadow-xl mb-4">
          {tier}
        </h3>
      </div>
      <ul className="space-y-4 min-h-[400px]">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check
              className="text-[#40CBB5] mt-1 mr-2 flex-shrink-0 drop-shadow-md"
              size={24}
            />
            <span className="text-lg text-gray-900 font-bold drop-shadow-md">
              {feature}
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <a
          href="#contact"
          className="block w-full bg-[#40CBB5] text-white py-4 rounded-lg hover:bg-[#35af9e] transition-all text-xl font-black text-center shadow-xl hover:shadow-2xl"
        >
          Contact for Pricing
        </a>
      </div>
    </div>
  );

  return (
    <div id="subscriptions" className="py-24 bg-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6 text-gray-900 drop-shadow-xl">
            Subscription Packages
          </h2>
          <p className="text-2xl text-gray-900 max-w-3xl mx-auto font-bold drop-shadow-lg">
            Choose the perfect plan for your fleet. Contact us for customized pricing based on your fleet size and specific needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <PricingTier key={index} {...tier} />
          ))}
        </div>

        <div className="mt-16">
          <div className="text-center">
            <h3 className="text-3xl font-black mb-6 text-gray-900 drop-shadow-xl">
              Additional Services Available
            </h3>
            <p className="text-xl text-gray-900 font-bold drop-shadow-lg">
              • Customized Reporting Dashboards • Legal Consultation Services • Insurance Liaison Services
            </p>
            <a
              href="#contact"
              className="inline-block mt-8 bg-[#FFB951] text-white px-12 py-4 rounded-full hover:bg-[#f0aa42] transition-all shadow-xl hover:shadow-2xl text-xl font-black"
            >
              Contact Us for Custom Package Pricing
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionsSection;