import React from 'react';
import { Shield, TrendingUp, FileCheck, Users } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Shield,
      title: "DOT Compliance Management",
      description: `Our comprehensive DOT compliance management ensures your fleet operates safely and legally. We handle:

     • Complete DOT audit preparation and representation
     • Safety rating challenges and improvements
     • CSA score monitoring and enhancement strategies
     • Development of customized safety policies and procedures
     • Regular compliance reviews and updates
     • HOS compliance monitoring and management
     • Equipment maintenance program oversight

     With decades of experience as Safety Directors, we understand both the regulatory requirements and operational challenges, helping you maintain compliance without sacrificing efficiency.`,
    },
    {
      icon: FileCheck,
      title: "Claims Management & Prevention",
      description: `Expert claims handling from start to finish, with a focus on both resolution and future prevention:

     • Immediate accident response and investigation
     • Evidence preservation and documentation
     • Claim filing and tracking
     • Negotiation with insurance providers
     • Implementation of preventive measures
     • Root cause analysis
     • Post-incident training development

     Our carrier-side experience gives us unique insight into managing claims while maintaining operational productivity.`,
    },
    {
      icon: TrendingUp,
      title: "Safety Program Development",
      description: `Custom safety programs designed for your specific operation, including:

     • Driver safety training and certification
     • Accident prevention strategies
     • Safety meeting content and schedules
     • Risk assessment and management
     • Performance monitoring systems
     • Incentive program development
     • Emergency response planning

     We've helped carriers grow from startups to 200+ trucks while maintaining excellent safety records.`,
    },
    {
      icon: Users,
      title: "Driver Qualification & Management",
      description: `Complete driver qualification file management and ongoing monitoring:

     • DQ file creation and maintenance
     • Background checks and MVR monitoring
     • Drug and alcohol program management
     • Ongoing driver performance evaluation
     • Remedial training identification
     • Qualification documentation tracking
     • Driver safety scoring systems

     Our proven systems help you maintain perfect DQ files while identifying potential issues.`,
    },
  ];

  return (
    <div id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black text-gray-900 sm:text-6xl mb-6 drop-shadow-xl">
            Our Services
          </h2>
          <p className="max-w-3xl mx-auto text-2xl text-gray-900 font-bold drop-shadow-lg">
            Comprehensive transportation safety solutions from experienced professionals
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:gap-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-start p-8 bg-white rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 border-2 border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center h-24 w-24 rounded-xl bg-[#40CBB5] text-white mr-6 shadow-xl">
                  <service.icon size={56} className="drop-shadow-lg" />
                </div>
                <h3 className="text-3xl font-black text-gray-900 drop-shadow-xl">
                  {service.title}
                </h3>
              </div>
              <div className="text-lg text-gray-900 leading-relaxed whitespace-pre-line font-bold drop-shadow-md">
                {service.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;