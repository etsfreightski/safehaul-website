import React from 'react';
import { Shield, FileCheck, Truck, Globe } from 'lucide-react';

const PermitsSection = () => {
  const permits = [
    {
      icon: Shield,
      title: "DOT Permits & Federal Authority",
      description: `Our comprehensive DOT permit and authority management ensures your fleet operates legally across state lines. We handle:

     • New DOT Number and MC Number Applications
     • BOC-3 Process Agent Filing and Updates
     • UCR (Unified Carrier Registration) Annual Filings
     • MCS-150 Biennial Updates
     • FMCSA Authority Applications and Reinstatements
     • Operating Authority Transfer Assistance
     • DOT Pin Number Management
     • Process Agent Documentation

     With our experience as Safety Directors, we understand both the regulatory requirements and operational needs, helping you maintain valid permits without disrupting operations.`,
    },
    {
      icon: FileCheck,
      title: "Tax Registrations & IFTA Management",
      description: `Complete tax registration and IFTA management services, including:

     • Form 2290 (Heavy Vehicle Use Tax) Filing
     • IFTA License and Decal Applications
     • Quarterly IFTA Return Preparation and Filing
     • IRP (International Registration Plan) Registration
     • State Fuel Tax Reporting
     • Tax Account Setup and Maintenance
     • Fuel Tax Audit Preparation
     • Multi-State Tax Compliance

     Our carrier-side experience ensures accurate filings while maximizing legitimate tax benefits.`,
    },
    {
      icon: Truck,
      title: "State-Specific Permits & Compliance",
      description: `Comprehensive state permit management tailored to your operation:

     • Oversize/Overweight Permits
     • State Fuel and Mile Tax Permits
     • Intrastate Authority Applications
     • State DOT Number Registration
     • Weight Distance Tax Permits
     • State-Specific Insurance Filings
     • Bridge and Tunnel Permits
     • Local Operation Permits

     We've helped carriers maintain perfect compliance records across multiple jurisdictions.`,
    },
    {
      icon: Globe,
      title: "Specialized Permits & Programs",
      description: `Complete management of specialized permits and program registrations:

     • Hazardous Materials Registration
     • TSA Security Threat Assessment
     • Border Crossing Permits (US/Canada/Mexico)
     • New Entrant Program Management
     • Kentucky KYU Number Registration
     • New Mexico Weight Distance Permit
     • Oregon Weight Mile Tax Permits
     • Non-Consensual Tow Authority

     Our proven systems help you maintain all required permits while identifying potential compliance gaps before they become issues.`,
    },
  ];

  return (
    <div id="permits" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black text-gray-900 sm:text-6xl mb-6 drop-shadow-xl">
            Permits & Compliance Services
          </h2>
          <p className="max-w-3xl mx-auto text-2xl text-gray-900 font-bold drop-shadow-lg">
            Comprehensive permit management and compliance solutions from experienced professionals
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:gap-16">
          {permits.map((permit, index) => (
            <div
              key={index}
              className="flex flex-col items-start p-8 bg-white rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 border-2 border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center h-24 w-24 rounded-xl bg-[#40CBB5] text-white mr-6 shadow-xl">
                  <permit.icon size={56} className="drop-shadow-lg" />
                </div>
                <h3 className="text-3xl font-black text-gray-900 drop-shadow-xl">
                  {permit.title}
                </h3>
              </div>
              <div className="text-lg text-gray-900 leading-relaxed whitespace-pre-line font-bold drop-shadow-md">
                {permit.description}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-block bg-[#FFB951] text-white px-12 py-4 rounded-full hover:bg-[#f0aa42] transition-all shadow-xl hover:shadow-2xl text-xl font-black"
          >
            Get Your Permits & Compliance Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default PermitsSection;