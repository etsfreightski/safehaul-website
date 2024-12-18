import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const ClaimsServicePage = () => {
  return (
    <>
      <Helmet>
        <title>Transportation Claims Management Services | Safe Haul Claims</title>
        <meta name="description" content="Expert transportation claims processing and management. Specialized in cargo claims, accident investigations, and liability claims resolution. Professional claims adjusting services nationwide." />
        <meta name="keywords" content="transportation claims adjuster, cargo claims processing, freight claims management, truck accident claims, cargo damage claims, liability claims resolution, claims investigation services" />
      </Helmet>

      <div className="bg-gradient-to-b from-[#0A3622] to-[#0A3622]/90 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-black mb-8">Transportation Claims Management Services</h1>
          <p className="text-xl mb-8">Professional claims processing and resolution for the transportation industry</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-[#0A3622] mb-6">Comprehensive Claims Services</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-[#FFB951] mr-2">✓</span>
                <div>
                  <strong className="block text-lg">Cargo Claims Processing</strong>
                  <p>Expert handling of freight damage, loss, and theft claims</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#FFB951] mr-2">✓</span>
                <div>
                  <strong className="block text-lg">Accident Investigation</strong>
                  <p>Thorough investigation and documentation of transportation accidents</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#FFB951] mr-2">✓</span>
                <div>
                  <strong className="block text-lg">Liability Claims Management</strong>
                  <p>Professional handling of third-party liability claims</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#FFB951] mr-2">✓</span>
                <div>
                  <strong className="block text-lg">Claims Resolution</strong>
                  <p>Efficient negotiation and settlement of transportation claims</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-xl">
            <h3 className="text-2xl font-bold text-[#0A3622] mb-6">Why Choose Our Claims Services?</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold mb-2">Expert Claims Adjusters</h4>
                <p>Our team brings decades of experience in transportation claims management</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Fast Response Time</h4>
                <p>24/7 claims reporting and immediate response to urgent situations</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Nationwide Coverage</h4>
                <p>Serving transportation companies across all 48 continental states</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Technology-Driven</h4>
                <p>Advanced claims management system for efficient processing</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-[#0A3622]/5 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-[#0A3622] mb-6">Our Claims Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-black text-[#FFB951] mb-4">01</div>
              <h3 className="text-xl font-bold mb-2">Initial Report</h3>
              <p>Quick and easy claims reporting through our 24/7 system</p>
            </div>
            <div>
              <div className="text-3xl font-black text-[#FFB951] mb-4">02</div>
              <h3 className="text-xl font-bold mb-2">Investigation</h3>
              <p>Thorough documentation and evidence collection</p>
            </div>
            <div>
              <div className="text-3xl font-black text-[#FFB951] mb-4">03</div>
              <h3 className="text-xl font-bold mb-2">Assessment</h3>
              <p>Expert evaluation and liability determination</p>
            </div>
            <div>
              <div className="text-3xl font-black text-[#FFB951] mb-4">04</div>
              <h3 className="text-xl font-bold mb-2">Resolution</h3>
              <p>Efficient negotiation and claim settlement</p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-[#0A3622] mb-8">Ready to Get Started?</h2>
          <Link 
            to="/contact"
            className="inline-block bg-[#FFB951] text-white px-8 py-4 rounded-full text-xl font-bold hover:bg-[#f0aa42] transition-all duration-300"
          >
            Contact Us Now
          </Link>
        </div>
      </div>
    </>
  );
};

export default ClaimsServicePage;
