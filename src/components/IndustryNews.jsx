import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, BookOpen, Scale, Star, ArrowRight } from 'lucide-react';

const IndustryNews = () => {
  const [activeTab, setActiveTab] = useState('news');

  const newsData = {
    news: [
      {
        id: 1,
        title: "FMCSA Announces 2025 Safety Technology Requirements",
        date: "2024-12-05",
        summary: "New mandates for advanced collision avoidance systems and driver monitoring technology to be implemented by Q3 2025.",
        category: "Regulatory",
        readTime: "5 min read",
        link: "/blog/fmcsa-safety-technology-requirements"
      },
      {
        id: 2,
        title: "AI Integration in Fleet Management: 2025 Outlook",
        date: "2024-12-01",
        summary: "How artificial intelligence is revolutionizing route optimization and predictive maintenance in transportation.",
        category: "Industry Trends",
        readTime: "4 min read",
        link: "/blog/ai-integration-fleet-management"
      },
      {
        id: 3,
        title: "Sustainable Transportation Strategies for 2025",
        date: "2024-11-28",
        summary: "Implementing eco-friendly practices while maintaining operational efficiency and cost-effectiveness.",
        category: "Best Practices",
        readTime: "6 min read",
        link: "/blog/sustainable-transportation-strategies"
      },
      {
        id: 4,
        title: "FMCSA Announces New Entry-Level Driver Training Requirements for 2024",
        date: "December 8, 2024",
        category: "Regulatory Update",
        summary: "The Federal Motor Carrier Safety Administration has implemented enhanced training requirements for entry-level drivers, focusing on safety protocols and advanced vehicle handling techniques.",
        readTime: "4 min read",
        link: "/blog/fmcsa-new-entry-level-driver-training-requirements"
      },
      {
        id: 5,
        title: "ELD Compliance: Updated Guidelines for Fleet Operators",
        date: "December 5, 2024",
        category: "Compliance",
        summary: "New electronic logging device (ELD) guidelines have been released, requiring fleet operators to upgrade their systems by March 2025 to meet enhanced data security standards.",
        readTime: "5 min read",
        link: "/blog/eld-compliance-updated-guidelines"
      },
      {
        id: 6,
        title: "Winter Weather Advisory: Updated Safety Protocols for Commercial Drivers",
        date: "December 1, 2024",
        category: "Safety",
        summary: "Latest winter safety protocols released for commercial drivers, including new requirements for chain usage and mandatory rest periods during severe weather conditions.",
        readTime: "3 min read",
        link: "/blog/winter-weather-advisory-updated-safety-protocols"
      },
      {
        id: 7,
        title: "DOT Announces New Hours of Service Flexibility Rules",
        date: "November 28, 2024",
        category: "Regulatory Update",
        summary: "The Department of Transportation has introduced new flexibility in hours-of-service rules, providing additional options for split-sleeper berth periods.",
        readTime: "6 min read",
        link: "/blog/dot-new-hours-of-service-flexibility-rules"
      }
    ],
    trends: [
      {
        id: 1,
        title: "AI Integration in Fleet Management",
        metric: "+127%",
        summary: "Adoption of AI-powered fleet management solutions sees significant growth",
        impact: "High",
        category: "Technology"
      },
      {
        id: 2,
        title: "Electric Commercial Vehicle Market",
        metric: "+85%",
        summary: "Electric truck deployments continue rapid expansion",
        impact: "High",
        category: "Sustainability"
      },
      {
        id: 3,
        title: "Driver Retention Rates",
        metric: "-12%",
        summary: "Industry faces ongoing challenges with driver retention",
        impact: "Medium",
        category: "Workforce"
      }
    ],
    regulatory: [
      {
        id: 1,
        title: "ELD Compliance Updates",
        status: "Pending",
        effectiveDate: "2025-03-01",
        summary: "New electronic logging device specifications for cross-border operations",
        impact: "High"
      },
      {
        id: 2,
        title: "Zero-Emission Vehicle Transition Plan",
        status: "In Effect",
        effectiveDate: "2025-01-15",
        summary: "Updated timeline for commercial fleet electrification requirements",
        impact: "Medium"
      },
      {
        id: 3,
        title: "Driver Training Requirements 2025",
        status: "Under Review",
        effectiveDate: "2025-02-01",
        summary: "Enhanced certification requirements for commercial drivers",
        impact: "High"
      }
    ],
    insights: [
      {
        id: 1,
        title: "The Future of Transportation Claims",
        author: "Safe Haul Team",
        date: "2024-01-08",
        summary: "Expert analysis on emerging trends in transportation claims management",
        readTime: "8 min read",
        link: "/blog/future-transportation-claims"
      },
      {
        id: 2,
        title: "Maximizing Fleet Safety ROI",
        author: "Safe Haul Team",
        date: "2024-01-05",
        summary: "Strategies for optimizing safety investments and reducing incidents",
        readTime: "7 min read",
        link: "/blog/maximizing-fleet-safety-roi"
      },
      {
        id: 3,
        title: "Technology's Role in Claims Prevention",
        author: "Safe Haul Team",
        date: "2024-01-03",
        summary: "How modern technology is revolutionizing claims prevention",
        readTime: "6 min read",
        link: "/blog/technology-claims-prevention"
      }
    ]
  };

  const tabs = [
    { id: 'news', label: 'Latest News', icon: BookOpen },
    { id: 'trends', label: 'Industry Trends', icon: TrendingUp },
    { id: 'regulatory', label: 'Regulatory Updates', icon: Scale },
    { id: 'insights', label: 'Safe Haul Insights', icon: Star }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'news':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsData.news.map((item) => (
              <Link 
                to={item.link}
                key={item.id}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="space-y-4">
                  <span className="inline-block px-3 py-1 bg-[#40CBB5] bg-opacity-10 text-[#40CBB5] rounded-full text-sm">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.summary}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{item.date}</span>
                    <span>{item.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        );

      case 'trends':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsData.trends.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-lg p-6">
                <div className="space-y-4">
                  <span className="inline-block px-3 py-1 bg-[#40CBB5] bg-opacity-10 text-[#40CBB5] rounded-full text-sm">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                  <div className="text-3xl font-bold text-[#40CBB5]">{item.metric}</div>
                  <p className="text-gray-600">{item.summary}</p>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500">Impact:</span>
                    <span className={`inline-block px-2 py-1 rounded text-sm ${
                      item.impact === 'High' ? 'bg-red-100 text-red-800' :
                      item.impact === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {item.impact}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case 'regulatory':
        return (
          <div className="space-y-6">
            {newsData.regulatory.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.summary}</p>
                  </div>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                    item.status === 'In Effect' ? 'bg-green-100 text-green-800' :
                    item.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {item.status}
                  </span>
                </div>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <span className="text-gray-500">Effective: {item.effectiveDate}</span>
                  <span className={`inline-block px-2 py-1 rounded ${
                    item.impact === 'High' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {item.impact} Impact
                  </span>
                </div>
              </div>
            ))}
          </div>
        );

      case 'insights':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsData.insights.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-[#40CBB5]" />
                    <span className="text-[#40CBB5] font-semibold">{item.author}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.summary}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{item.date}</span>
                    <span>{item.readTime}</span>
                  </div>
                  <Link 
                    to={item.link}
                    className="flex items-center space-x-2 text-[#40CBB5] hover:text-[#35ab98] transition-colors group"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Industry Updates</h2>
          <p className="text-xl text-gray-600">Stay informed with the latest transportation industry news and insights</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full text-sm font-semibold transition-colors ${
                activeTab === id
                  ? 'bg-[#40CBB5] text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{label}</span>
            </button>
          ))}
        </div>

        {renderContent()}
      </div>
    </section>
  );
};

export default IndustryNews;
