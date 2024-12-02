import React, { useState } from 'react';
import { AlertTriangle, CheckCircle, HelpCircle } from 'lucide-react';

const RiskAssessment = () => {
  const [scores, setScores] = useState({});
  const [recommendations, setRecommendations] = useState([]);

  const categories = [
    {
      id: 'dqf',
      name: 'Driver Qualification Files',
      questions: [
        { id: 'psp', text: 'PSP reports reviewed and scored for all drivers', weight: 3 },
        { id: 'mvr', text: 'MVR monitoring system in place', weight: 3 },
        { id: 'medical', text: 'Medical card tracking system implemented', weight: 2 },
        { id: 'employment', text: 'Previous employment verification protocol', weight: 2 }
      ]
    },
    {
      id: 'hos',
      name: 'Hours of Service Compliance',
      questions: [
        { id: 'eld', text: 'ELD compliance and monitoring', weight: 3 },
        { id: 'violations', text: 'HOS violation tracking system', weight: 3 },
        { id: 'exemptions', text: 'Proper use of exemptions documented', weight: 2 },
        { id: 'training', text: 'Regular HOS compliance training', weight: 2 }
      ]
    },
    {
      id: 'drug',
      name: 'Drug and Alcohol Program',
      questions: [
        { id: 'clearinghouse', text: 'Clearinghouse compliance verified', weight: 3 },
        { id: 'random', text: 'Random testing program meets requirements', weight: 3 },
        { id: 'policy', text: 'Written policy meets current regulations', weight: 2 },
        { id: 'training_drug', text: 'Supervisor reasonable suspicion training', weight: 2 }
      ]
    },
    {
      id: 'claims',
      name: 'Claims Management',
      questions: [
        { id: 'reporting', text: 'Incident reporting procedures in place', weight: 3 },
        { id: 'investigation', text: 'Thorough investigation protocols', weight: 3 },
        { id: 'documentation', text: 'Evidence preservation procedures', weight: 2 },
        { id: 'trends', text: 'Claims trend analysis performed', weight: 2 }
      ]
    },
    {
      id: 'tech',
      name: 'Safety Technology',
      questions: [
        { id: 'cameras', text: 'Camera systems implemented', weight: 3 },
        { id: 'telematics', text: 'Telematics data monitored', weight: 3 },
        { id: 'maintenance', text: 'Preventive maintenance tracking', weight: 2 },
        { id: 'alerts', text: 'Real-time safety alerts system', weight: 2 }
      ]
    }
  ];

  const handleScoreChange = (categoryId, questionId, value) => {
    setScores(prev => ({
      ...prev,
      [`${categoryId}_${questionId}`]: parseInt(value)
    }));
  };

  const calculateRisk = () => {
    let totalScore = 0;
    let maxPossibleScore = 0;
    const newRecommendations = [];

    categories.forEach(category => {
      let categoryScore = 0;
      let categoryMax = 0;

      category.questions.forEach(question => {
        const score = scores[`${category.id}_${question.id}`] || 0;
        categoryScore += score * question.weight;
        categoryMax += 5 * question.weight;

        if (score <= 2) {
          newRecommendations.push({
            category: category.name,
            item: question.text,
            priority: question.weight === 3 ? 'High' : 'Medium'
          });
        }
      });

      totalScore += categoryScore;
      maxPossibleScore += categoryMax;
    });

    const riskPercentage = ((maxPossibleScore - totalScore) / maxPossibleScore) * 100;
    setRecommendations(newRecommendations);
    return riskPercentage;
  };

  const getRiskLevel = (percentage) => {
    if (percentage < 20) return { level: 'Low', color: 'text-green-600' };
    if (percentage < 40) return { level: 'Moderate', color: 'text-yellow-600' };
    return { level: 'High', color: 'text-red-600' };
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Carrier Risk Assessment</h1>
      
      <div className="space-y-8">
        {categories.map(category => (
          <div key={category.id} className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold text-gray-900 mb-4">{category.name}</h2>
            <div className="space-y-4">
              {category.questions.map(question => (
                <div key={question.id} className="flex items-center">
                  <select
                    className="form-select w-24 mr-4"
                    onChange={(e) => handleScoreChange(category.id, question.id, e.target.value)}
                    defaultValue=""
                  >
                    <option value="" disabled>Select</option>
                    <option value="5">Excellent</option>
                    <option value="4">Good</option>
                    <option value="3">Fair</option>
                    <option value="2">Poor</option>
                    <option value="1">Critical</option>
                  </select>
                  <span className="text-gray-700">{question.text}</span>
                  {question.weight === 3 && (
                    <span className="ml-2 text-red-500 text-sm">(Critical Factor)</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => calculateRisk()}
        className="mt-8 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
      >
        Calculate Risk Level
      </button>

      {recommendations.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Risk Analysis Results</h2>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Overall Risk Level</h3>
              <div className={`text-2xl font-bold ${getRiskLevel(calculateRisk()).color}`}>
                {getRiskLevel(calculateRisk()).level} Risk ({calculateRisk().toFixed(1)}%)
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-4">Priority Recommendations</h3>
            <div className="space-y-4">
              {recommendations.map((rec, index) => (
                <div key={index} className="flex items-start">
                  {rec.priority === 'High' ? (
                    <AlertTriangle className="w-5 h-5 text-red-500 mr-2 flex-shrink-0" />
                  ) : (
                    <HelpCircle className="w-5 h-5 text-yellow-500 mr-2 flex-shrink-0" />
                  )}
                  <div>
                    <div className="font-semibold">{rec.category}</div>
                    <div className="text-gray-600">{rec.item}</div>
                    <div className={`text-sm ${rec.priority === 'High' ? 'text-red-500' : 'text-yellow-500'}`}>
                      {rec.priority} Priority
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RiskAssessment;