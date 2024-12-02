import React, { useState } from 'react';
import { AlertTriangle, HelpCircle, Download } from 'lucide-react';

const RiskAssessment = () => {
 const [scores, setScores] = useState({});
 const [recommendations, setRecommendations] = useState([]);
 const [showResults, setShowResults] = useState(false);
 const [riskScore, setRiskScore] = useState(null);

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
   let maxScore = 0;
   const newRecommendations = [];

   categories.forEach(category => {
     category.questions.forEach(question => {
       const score = scores[`${category.id}_${question.id}`] || 0;
       totalScore += score * question.weight;
       maxScore += 5 * question.weight;

       if (score <= 2) {
         newRecommendations.push({
           category: category.name,
           item: question.text,
           priority: question.weight === 3 ? 'High' : 'Medium'
         });
       }
     });
   });

   const riskPercentage = Math.max(0, Math.min(100, ((maxScore - totalScore) / maxScore) * 100));
   setRiskScore(riskPercentage);
   setRecommendations(newRecommendations);
   setShowResults(true);
 };

 const getRiskLevel = (percentage) => {
   if (percentage < 20) return { level: 'Low', color: 'text-green-600' };
   if (percentage < 40) return { level: 'Moderate', color: 'text-yellow-600' };
   return { level: 'High', color: 'text-red-600' };
 };

 return (
   <div className="max-w-4xl mx-auto p-6">
     <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
       <h1 className="text-3xl font-bold text-gray-900 mb-4">Safety Risk Assessment Tool</h1>
       <p className="text-gray-600 mb-8">
         Rate each item from 1 (Critical) to 5 (Excellent)
       </p>
     </div>
     
     <div className="space-y-8">
       {categories.map(category => (
         <div key={category.id} className="bg-white p-6 rounded-xl shadow-lg">
           <h2 className="text-xl font-bold text-gray-900 mb-4">{category.name}</h2>
           <div className="space-y-4">
             {category.questions.map(question => (
               <div key={question.id} className="flex items-center p-2 hover:bg-gray-50 rounded-lg">
                 <select
                   className="form-select w-32 mr-4 rounded-lg border-gray-300 shadow-sm"
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

     <div className="flex justify-center mt-8">
       <button
         onClick={calculateRisk}
         className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 shadow-lg"
       >
         Calculate Risk Level
       </button>
     </div>

     {showResults && riskScore !== null && (
       <div className="mt-8 bg-white p-8 rounded-xl shadow-lg">
         <h2 className="text-2xl font-bold text-gray-900 mb-6">Risk Analysis Results</h2>
         
         <div className="mb-8">
           <h3 className="text-xl font-bold mb-2">Overall Risk Level</h3>
           <div className={`text-3xl font-bold ${getRiskLevel(riskScore).color}`}>
             {getRiskLevel(riskScore).level} Risk ({riskScore.toFixed(1)}%)
           </div>
         </div>
         
         {recommendations.length > 0 && (
           <>
             <h3 className="text-xl font-bold mb-4">Priority Recommendations</h3>
             <div className="space-y-4">
               {recommendations.map((rec, index) => (
                 <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                   {rec.priority === 'High' ? (
                     <AlertTriangle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0" />
                   ) : (
                     <HelpCircle className="w-6 h-6 text-yellow-500 mr-3 flex-shrink-0" />
                   )}
                   <div>
                     <div className="font-semibold text-lg">{rec.category}</div>
                     <div className="text-gray-600">{rec.item}</div>
                     <div className={`text-sm mt-1 ${rec.priority === 'High' ? 'text-red-500' : 'text-yellow-500'}`}>
                       {rec.priority} Priority
                     </div>
                   </div>
                 </div>
               ))}
             </div>
           </>
         )}
       </div>
     )}
   </div>
 );
};

export default RiskAssessment;