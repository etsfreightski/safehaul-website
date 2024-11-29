import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell,
  ComposedChart, Area, Scatter, ScatterChart, RadarChart,
  PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar
} from 'recharts';

const ClaimsStudy = () => {
  // [Previous datasets and state remain the same]
  const [activeSection, setActiveSection] = useState('abstract');

  // Comprehensive datasets
  const theftTrendData = [
    { year: '2019', incidents: 1106, amount: 98, preventedLosses: 45, recoveryRate: 41 },
    { year: '2020', incidents: 1269, amount: 125, preventedLosses: 62, recoveryRate: 49 },
    { year: '2021', incidents: 1493, amount: 151, preventedLosses: 78, recoveryRate: 52 },
    { year: '2022', incidents: 1626, amount: 182, preventedLosses: 95, recoveryRate: 52 },
    { year: '2023', incidents: 1778, amount: 223, preventedLosses: 118, recoveryRate: 53 }
  ];

  const regionalAnalysis = [
    { state: 'CA', thefts: 243, claims: 892, avgCost: 412000, riskScore: 8.9, recoveryRate: 48 },
    { state: 'TX', thefts: 201, claims: 756, avgCost: 389000, riskScore: 8.4, recoveryRate: 52 },
    { state: 'FL', thefts: 187, claims: 678, avgCost: 367000, riskScore: 8.1, recoveryRate: 47 },
    { state: 'IL', thefts: 156, claims: 543, avgCost: 334000, riskScore: 7.8, recoveryRate: 51 },
    { state: 'GA', thefts: 132, claims: 489, avgCost: 298000, riskScore: 7.5, recoveryRate: 49 }
  ];

  // [Previous function content remains the same]
  return (
    <div className="bg-gray-200 min-h-screen pt-8">
      <div className="max-w-6xl mx-auto px-4 pb-16">
        {/* Navigation */}
        <nav className="bg-white p-4 rounded-lg shadow-lg mb-8 sticky top-4 z-50">
          <ul className="flex space-x-4 overflow-x-auto">
            {['abstract', 'introduction', 'methodology', 'results', 'discussion', 'conclusion'].map((section) => (
              <li key={section}>
                <button
                  onClick={() => setActiveSection(section)}
                  className={`px-4 py-2 rounded-full ${
                    activeSection === section 
                    ? 'bg-[#40CBB5] text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                  } font-bold transition-colors`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Title and Abstract */}
        <header className="bg-white rounded-lg shadow-xl p-8 mb-8">
          {/* [Previous header content remains the same] */}
        </header>

        {/* Introduction Section */}
        <section className="bg-white rounded-lg shadow-xl p-8 mb-8">
          {/* [Previous introduction content remains the same] */}
        </section>

        {/* Methodology Section */}
        <section className="bg-white rounded-lg shadow-xl p-8 mb-8">
          {/* [Previous methodology content remains the same] */}
        </section>

        {/* Results Section */}
        <section className="bg-white rounded-lg shadow-xl p-8 mb-8">
          {/* [Previous results content remains the same] */}
        </section>

        {/* Statistical Analysis Section */}
        <section className="bg-white rounded-lg shadow-xl p-8 mb-8">
          {/* [Previous statistical analysis content remains the same] */}
        </section>

        {/* Discussion Section */}
        <section className="bg-white rounded-lg shadow-xl p-8 mb-8">
          {/* [Previous discussion content remains the same] */}
        </section>

        {/* Recommendations Section */}
        <section className="bg-white rounded-lg shadow-xl p-8 mb-8">
          {/* [Previous recommendations content remains the same] */}
        </section>

        {/* Conclusion Section */}
        <section className="bg-white rounded-lg shadow-xl p-8 mb-8">
          {/* [Previous conclusion content remains the same] */}
        </section>

        {/* References Section */}
        <section className="bg-white rounded-lg shadow-xl p-8">
          {/* [Previous references content remains the same] */}
        </section>

      </div>
    </div>
  );
};

export default ClaimsStudy;