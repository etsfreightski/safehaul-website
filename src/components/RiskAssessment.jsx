import React, { useState } from 'react';
import { AlertTriangle, HelpCircle, Download, Search, TrendingUp, TrendingDown, Minus, AlertCircle, Truck, Clock, User, Pill, Wrench, Package, FileText } from 'lucide-react';

const RiskAssessment = () => {
 const [scores, setScores] = useState({});
 const [recommendations, setRecommendations] = useState([]);
 const [showResults, setShowResults] = useState(false);
 const [riskScore, setRiskScore] = useState(null);

 // CSA Integration
 const [usdotNumber, setUsdotNumber] = useState('');
 const [csaData, setCsaData] = useState(null);
 const [isLoading, setIsLoading] = useState(false);
 const [csaError, setCsaError] = useState(null);
 const [csaInsights, setCsaInsights] = useState([]);

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

 // Generate insights from CSA data
 const generateCSAInsights = (data) => {
   const insights = [];
   
   // Find BASICs above threshold
   const criticalBASICs = data.basics.filter(basic => basic.percentile >= basic.threshold);
   
   if (criticalBASICs.length > 0) {
     insights.push({
       type: 'critical',
       title: 'Critical BASICs Identified',
       content: `${criticalBASICs.length} BASIC${criticalBASICs.length > 1 ? 's' : ''} at or above intervention threshold: ${criticalBASICs.map(b => b.category).join(', ')}.`,
       icon: <AlertTriangle className="w-6 h-6 text-red-500" />
     });
   }
   
   // Find concerning trends
   const worseningTrends = data.basics.filter(basic => basic.trend === 'up' && basic.percentile > 65);
   
   if (worseningTrends.length > 0) {
     insights.push({
       type: 'warning',
       title: 'Worsening Trends',
       content: `${worseningTrends.length} BASIC${worseningTrends.length > 1 ? 's are' : ' is'} showing worsening trends: ${worseningTrends.map(b => b.category).join(', ')}.`,
       icon: <TrendingUp className="w-6 h-6 text-orange-500" />
     });
   }
   
   // Find improving trends
   const improvingTrends = data.basics.filter(basic => basic.trend === 'down');
   
   if (improvingTrends.length > 0) {
     insights.push({
       type: 'success',
       title: 'Improving Areas',
       content: `${improvingTrends.length} BASIC${improvingTrends.length > 1 ? 's are' : ' is'} showing improvement: ${improvingTrends.map(b => b.category).join(', ')}.`,
       icon: <TrendingDown className="w-6 h-6 text-green-500" />
     });
   }
   
   // Add general statistics
   insights.push({
     type: 'info',
     title: 'Safety Performance Summary',
     content: `${data.inspections} inspections, ${data.violations} violations, ${data.crashes} crashes, and ${data.outOfService} out-of-service orders in the last 24 months.`,
     icon: <FileText className="w-6 h-6 text-blue-500" />
   });
   
   setCsaInsights(insights);
 };

 // Integrate CSA data with risk assessment
 const calculateIntegratedRisk = () => {
   // First, calculate the standard risk assessment
   calculateRisk();
   
   // If we have CSA data, cross-reference with the assessment
   if (csaData) {
     const updatedRecommendations = [...recommendations];
     
     // Check for critical BASICs and add related recommendations
     csaData.basics.forEach(basic => {
       if (basic.percentile >= basic.threshold - 10) { // Include those nearing threshold too
         // Find assessment categories related to this BASIC
         basic.relatedCategories.forEach(catId => {
           const category = categories.find(c => c.id === catId);
           if (category) {
             // Prioritize questions that address this BASIC
             category.questions.forEach(question => {
               // Check if this recommendation already exists
               const existingRec = updatedRecommendations.find(
                 r => r.category === category.name && r.item === question.text
               );
               
               if (!existingRec) {
                 updatedRecommendations.push({
                   category: category.name,
                   item: question.text,
                   priority: basic.percentile >= basic.threshold ? 'High' : 'Medium',
                   csaRelated: true,
                   basicCategory: basic.category
                 });
               } else if (!existingRec.csaRelated) {
                 // Upgrade an existing recommendation with CSA data
                 existingRec.csaRelated = true;
                 existingRec.basicCategory = basic.category;
                 // Upgrade priority if needed
                 if (basic.percentile >= basic.threshold && existingRec.priority !== 'High') {
                   existingRec.priority = 'High';
                 }
               }
             });
           }
         });
       }
     });
     
     setRecommendations(updatedRecommendations);
   }
 };

 const getRiskLevel = (percentage) => {
   if (percentage < 20) return { level: 'Low', color: 'text-green-600' };
   if (percentage < 40) return { level: 'Moderate', color: 'text-yellow-600' };
   return { level: 'High', color: 'text-red-600' };
 };

 // Function to fetch or simulate CSA data
 const fetchCSAData = async () => {
   if (!usdotNumber || usdotNumber.trim() === '') {
     setCsaError('Please enter a valid USDOT number');
     return;
   }
   
   setIsLoading(true);
   setCsaError(null);
   
   try {
     // In production, this would be an API call to FMCSA or your data provider
     // For now, we'll generate different simulated data based on USDOT number
     setTimeout(() => {
       // Seed random data generation based on USDOT number to ensure consistency
       const numSeed = parseInt(usdotNumber) || usdotNumber.split('').reduce((a, b) => a + b.charCodeAt(0), 0);
       
       // Generate different carrier profiles based on USDOT patterns
       let carrierProfile;
       
       if (numSeed % 5 === 0) {
         // High-risk carrier with multiple critical BASICs
         carrierProfile = {
           basics: [
             { 
               category: 'Unsafe Driving', 
               score: 65, 
               threshold: 65, 
               percentile: 85,
               trend: 'up',
               relatedCategories: ['hos', 'tech']
             },
             { 
               category: 'Hours-of-Service Compliance', 
               score: 60, 
               threshold: 65, 
               percentile: 80,
               trend: 'up',
               relatedCategories: ['hos']
             },
             { 
               category: 'Driver Fitness', 
               score: 45, 
               threshold: 80, 
               percentile: 35,
               trend: 'down',
               relatedCategories: ['dqf']
             },
             { 
               category: 'Controlled Substances/Alcohol', 
               score: 30, 
               threshold: 80, 
               percentile: 45,
               trend: 'stable',
               relatedCategories: ['drug']
             },
             { 
               category: 'Vehicle Maintenance', 
               score: 75, 
               threshold: 80, 
               percentile: 90,
               trend: 'up',
               relatedCategories: ['tech']
             },
             { 
               category: 'Hazardous Materials Compliance', 
               score: 50, 
               threshold: 80, 
               percentile: 25,
               trend: 'down',
               relatedCategories: []
             },
             { 
               category: 'Crash Indicator', 
               score: 70, 
               threshold: 65, 
               percentile: 85,
               trend: 'up',
               relatedCategories: ['claims', 'tech']
             }
           ],
           inspections: 68,
           violations: 37,
           crashes: 6,
           outOfService: 8,
           lastUpdated: '2025-03-15'
         };
       } else if (numSeed % 5 === 1) {
         // Medium-risk carrier with HOS issues
         carrierProfile = {
           basics: [
             { 
               category: 'Unsafe Driving', 
               score: 65, 
               threshold: 65, 
               percentile: 55,
               trend: 'stable',
               relatedCategories: ['hos', 'tech']
             },
             { 
               category: 'Hours-of-Service Compliance', 
               score: 60, 
               threshold: 65, 
               percentile: 72,
               trend: 'up',
               relatedCategories: ['hos']
             },
             { 
               category: 'Driver Fitness', 
               score: 45, 
               threshold: 80, 
               percentile: 40,
               trend: 'stable',
               relatedCategories: ['dqf']
             },
             { 
               category: 'Controlled Substances/Alcohol', 
               score: 30, 
               threshold: 80, 
               percentile: 20,
               trend: 'down',
               relatedCategories: ['drug']
             },
             { 
               category: 'Vehicle Maintenance', 
               score: 75, 
               threshold: 80, 
               percentile: 65,
               trend: 'up',
               relatedCategories: ['tech']
             },
             { 
               category: 'Hazardous Materials Compliance', 
               score: 50, 
               threshold: 80, 
               percentile: 30,
               trend: 'stable',
               relatedCategories: []
             },
             { 
               category: 'Crash Indicator', 
               score: 70, 
               threshold: 65, 
               percentile: 60,
               trend: 'stable',
               relatedCategories: ['claims', 'tech']
             }
           ],
           inspections: 42,
           violations: 15,
           crashes: 3,
           outOfService: 2,
           lastUpdated: '2025-03-01'
         };
       } else if (numSeed % 5 === 2) {
         // Low-risk carrier with good compliance
         carrierProfile = {
           basics: [
             { 
               category: 'Unsafe Driving', 
               score: 65, 
               threshold: 65, 
               percentile: 35,
               trend: 'down',
               relatedCategories: ['hos', 'tech']
             },
             { 
               category: 'Hours-of-Service Compliance', 
               score: 60, 
               threshold: 65, 
               percentile: 25,
               trend: 'down',
               relatedCategories: ['hos']
             },
             { 
               category: 'Driver Fitness', 
               score: 45, 
               threshold: 80, 
               percentile: 15,
               trend: 'down',
               relatedCategories: ['dqf']
             },
             { 
               category: 'Controlled Substances/Alcohol', 
               score: 30, 
               threshold: 80, 
               percentile: 10,
               trend: 'stable',
               relatedCategories: ['drug']
             },
             { 
               category: 'Vehicle Maintenance', 
               score: 75, 
               threshold: 80, 
               percentile: 45,
               trend: 'down',
               relatedCategories: ['tech']
             },
             { 
               category: 'Hazardous Materials Compliance', 
               score: 50, 
               threshold: 80, 
               percentile: 20,
               trend: 'down',
               relatedCategories: []
             },
             { 
               category: 'Crash Indicator', 
               score: 70, 
               threshold: 65, 
               percentile: 30,
               trend: 'down',
               relatedCategories: ['claims', 'tech']
             }
           ],
           inspections: 53,
           violations: 8,
           crashes: 1,
           outOfService: 0,
           lastUpdated: '2025-02-28'
         };
       } else if (numSeed % 5 === 3) {
         // Maintenance-focused issues carrier
         carrierProfile = {
           basics: [
             { 
               category: 'Unsafe Driving', 
               score: 65, 
               threshold: 65, 
               percentile: 45,
               trend: 'stable',
               relatedCategories: ['hos', 'tech']
             },
             { 
               category: 'Hours-of-Service Compliance', 
               score: 60, 
               threshold: 65, 
               percentile: 40,
               trend: 'stable',
               relatedCategories: ['hos']
             },
             { 
               category: 'Driver Fitness', 
               score: 45, 
               threshold: 80, 
               percentile: 35,
               trend: 'stable',
               relatedCategories: ['dqf']
             },
             { 
               category: 'Controlled Substances/Alcohol', 
               score: 30, 
               threshold: 80, 
               percentile: 25,
               trend: 'stable',
               relatedCategories: ['drug']
             },
             { 
               category: 'Vehicle Maintenance', 
               score: 75, 
               threshold: 80, 
               percentile: 85,
               trend: 'up',
               relatedCategories: ['tech']
             },
             { 
               category: 'Hazardous Materials Compliance', 
               score: 50, 
               threshold: 80, 
               percentile: 30,
               trend: 'stable',
               relatedCategories: []
             },
             { 
               category: 'Crash Indicator', 
               score: 70, 
               threshold: 65, 
               percentile: 50,
               trend: 'stable',
               relatedCategories: ['claims', 'tech']
             }
           ],
           inspections: 35,
           violations: 22,
           crashes: 2,
           outOfService: 5,
           lastUpdated: '2025-03-10'
         };
       } else {
         // New carrier with limited history
         carrierProfile = {
           basics: [
             { 
               category: 'Unsafe Driving', 
               score: 65, 
               threshold: 65, 
               percentile: 0,
               trend: 'stable',
               relatedCategories: ['hos', 'tech']
             },
             { 
               category: 'Hours-of-Service Compliance', 
               score: 60, 
               threshold: 65, 
               percentile: 45,
               trend: 'up',
               relatedCategories: ['hos']
             },
             { 
               category: 'Driver Fitness', 
               score: 45, 
               threshold: 80, 
               percentile: 0,
               trend: 'stable',
               relatedCategories: ['dqf']
             },
             { 
               category: 'Controlled Substances/Alcohol', 
               score: 30, 
               threshold: 80, 
               percentile: 0,
               trend: 'stable',
               relatedCategories: ['drug']
             },
             { 
               category: 'Vehicle Maintenance', 
               score: 75, 
               threshold: 80, 
               percentile: 50,
               trend: 'up',
               relatedCategories: ['tech']
             },
             { 
               category: 'Hazardous Materials Compliance', 
               score: 50, 
               threshold: 80, 
               percentile: 0,
               trend: 'stable',
               relatedCategories: []
             },
             { 
               category: 'Crash Indicator', 
               score: 70, 
               threshold: 65, 
               percentile: 0,
               trend: 'stable',
               relatedCategories: ['claims', 'tech']
             }
           ],
           inspections: 12,
           violations: 3,
           crashes: 0,
           outOfService: 1,
           lastUpdated: '2025-03-20'
         };
       }
       
       setCsaData(carrierProfile);
       generateCSAInsights(carrierProfile);
       setIsLoading(false);
     }, 1500);
   } catch (error) {
     setCsaError('Error fetching CSA data. Please try again.');
     setIsLoading(false);
   }
 };

 return (
   <div className="max-w-4xl mx-auto p-6">
     <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
       <h1 className="text-3xl font-bold text-gray-900 mb-4">Enhanced Safety Risk Assessment Tool</h1>
       <p className="text-gray-600 mb-4">
         Integrate your CSA scores with our comprehensive safety assessment for detailed insights
       </p>
       
       {/* CSA Integration Section */}
       <div className="mt-6 p-4 bg-blue-50 rounded-lg">
         <h2 className="text-xl font-semibold text-blue-800 mb-3">CSA Score Integration</h2>
         <p className="text-gray-600 mb-4">
           Enter your USDOT number to incorporate your CSA data into the risk assessment
         </p>
         
         <div className="flex">
           <div className="relative flex-grow mr-2">
             <input
               type="text"
               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
               placeholder="Enter USDOT Number"
               value={usdotNumber}
               onChange={(e) => setUsdotNumber(e.target.value)}
             />
           </div>
           <button
             onClick={fetchCSAData}
             disabled={isLoading}
             className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 shadow-md flex items-center disabled:bg-blue-400"
           >
             {isLoading ? (
               <span>Loading...</span>
             ) : (
               <>
                 <Search className="w-5 h-5 mr-1" />
                 <span>Fetch CSA Data</span>
               </>
             )}
           </button>
         </div>
         
         {csaError && (
           <p className="mt-2 text-red-600">{csaError}</p>
         )}
       </div>
       
       {/* Display CSA Data if available */}
       {csaData && (
         <div className="mt-6 p-4 bg-gray-50 rounded-lg">
           <h3 className="text-lg font-semibold mb-3">CSA Performance Data</h3>
           <p className="text-sm text-gray-500 mb-4">Last updated: {csaData.lastUpdated}</p>
           
           <div className="overflow-x-auto">
             <table className="min-w-full bg-white">
               <thead>
                 <tr className="bg-gray-100">
                   <th className="py-2 px-3 text-left">BASIC</th>
                   <th className="py-2 px-3 text-center">Percentile</th>
                   <th className="py-2 px-3 text-center">Threshold</th>
                   <th className="py-2 px-3 text-center">Status</th>
                   <th className="py-2 px-3 text-center">Trend</th>
                 </tr>
               </thead>
               <tbody>
                 {csaData.basics.map((basic, index) => (
                   <tr key={index} className="border-t">
                     <td className="py-2 px-3">
                       {basic.category}
                     </td>
                     <td className="py-2 px-3 text-center">
                       <span className={`font-medium ${basic.percentile >= basic.threshold ? 'text-red-600' : 'text-gray-800'}`}>
                         {basic.percentile}%
                       </span>
                     </td>
                     <td className="py-2 px-3 text-center">{basic.threshold}%</td>
                     <td className="py-2 px-3 text-center">
                       {basic.percentile >= basic.threshold ? (
                         <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                           Alert
                         </span>
                       ) : basic.percentile >= basic.threshold - 10 ? (
                         <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                           Warning
                         </span>
                       ) : (
                         <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                           Good
                         </span>
                       )}
                     </td>
                     <td className="py-2 px-3 text-center">
                       {basic.trend === 'up' ? (
                         <TrendingUp className="w-5 h-5 text-red-500 inline" />
                       ) : basic.trend === 'down' ? (
                         <TrendingDown className="w-5 h-5 text-green-500 inline" />
                       ) : (
                         <Minus className="w-5 h-5 text-gray-400 inline" />
                       )}
                     </td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
           
           <div className="mt-4 bg-blue-50 p-3 rounded-lg">
             <h4 className="font-semibold text-blue-800">Safety Performance Summary</h4>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-2">
               <div className="bg-white p-2 rounded shadow-sm">
                 <div className="text-sm text-gray-500">Inspections</div>
                 <div className="text-xl font-bold">{csaData.inspections}</div>
               </div>
               <div className="bg-white p-2 rounded shadow-sm">
                 <div className="text-sm text-gray-500">Violations</div>
                 <div className="text-xl font-bold">{csaData.violations}</div>
               </div>
               <div className="bg-white p-2 rounded shadow-sm">
                 <div className="text-sm text-gray-500">Crashes</div>
                 <div className="text-xl font-bold">{csaData.crashes}</div>
               </div>
               <div className="bg-white p-2 rounded shadow-sm">
                 <div className="text-sm text-gray-500">Out of Service</div>
                 <div className="text-xl font-bold">{csaData.outOfService}</div>
               </div>
             </div>
           </div>
         </div>
       )}
       
       {/* CSA Insights */}
       {csaInsights.length > 0 && (
         <div className="mt-6 space-y-3">
           {csaInsights.map((insight, index) => (
             <div 
               key={index} 
               className={`p-3 rounded-lg flex items-start ${insight.type === 'critical' ? 'bg-red-50' : 
               insight.type === 'warning' ? 'bg-orange-50' : 
               insight.type === 'success' ? 'bg-green-50' : 'bg-blue-50'}`}
             >
               <div className="mr-3 mt-0.5">{insight.icon}</div>
               <div>
                 <h4 className="font-semibold">{insight.title}</h4>
                 <p className="text-sm">{insight.content}</p>
               </div>
             </div>
           ))}
         </div>
       )}
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

     <div className="flex justify-center mt-8 space-x-4">
       <button
         onClick={csaData ? calculateIntegratedRisk : calculateRisk}
         className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 shadow-lg flex items-center"
       >
         <FileText className="w-5 h-5 mr-2" />
         {csaData ? 'Calculate Integrated Risk' : 'Calculate Risk Level'}
       </button>
       
       {showResults && (
         <button
           className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 shadow-lg flex items-center"
           onClick={() => {
             // In a real implementation, this would generate and download a PDF
             alert('This would download a comprehensive PDF report in a real implementation');
           }}
         >
           <Download className="w-5 h-5 mr-2" />
           Download Report
         </button>
       )}
     </div>

     {showResults && riskScore !== null && (
       <div className="mt-8 bg-white p-8 rounded-xl shadow-lg">
         <h2 className="text-2xl font-bold text-gray-900 mb-6">Risk Analysis Results</h2>
         
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
           <div className="bg-gray-50 p-4 rounded-lg">
             <h3 className="text-xl font-bold mb-2">Overall Risk Level</h3>
             <div className={`text-3xl font-bold ${getRiskLevel(riskScore).color}`}>
               {getRiskLevel(riskScore).level} Risk ({riskScore.toFixed(1)}%)
             </div>
           </div>
           
           {csaData && (
             <div className="bg-gray-50 p-4 rounded-lg">
               <h3 className="text-xl font-bold mb-2">CSA Profile Summary</h3>
               <div className="text-gray-700">
                 <p className="mb-1"><span className="font-semibold">{csaData.basics.filter(b => b.percentile >= b.threshold).length}</span> BASICs above threshold</p>
                 <p className="mb-1"><span className="font-semibold">{csaData.inspections}</span> inspections in last 24 months</p>
                 <p className="mb-1"><span className="font-semibold">{csaData.crashes}</span> crashes reported</p>
               </div>
             </div>
           )}
         </div>
         
         {recommendations.length > 0 && (
           <>
             <h3 className="text-xl font-bold mb-4">Priority Recommendations</h3>
             <div className="space-y-4">
               {recommendations.map((rec, index) => (
                 <div 
                   key={index} 
                   className={`flex items-start p-4 rounded-lg ${rec.csaRelated ? 'bg-blue-50 border border-blue-200' : 'bg-gray-50'}`}
                 >
                   {rec.priority === 'High' ? (
                     <AlertTriangle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0" />
                   ) : (
                     <HelpCircle className="w-6 h-6 text-yellow-500 mr-3 flex-shrink-0" />
                   )}
                   <div className="flex-grow">
                     <div className="font-semibold text-lg">{rec.category}</div>
                     <div className="text-gray-600">{rec.item}</div>
                     <div className="flex items-center mt-1 justify-between">
                       <div className={`text-sm ${rec.priority === 'High' ? 'text-red-500' : 'text-yellow-500'}`}>
                         {rec.priority} Priority
                       </div>
                       {rec.csaRelated && (
                         <div className="text-sm bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                           Related to {rec.basicCategory} BASIC
                         </div>
                       )}
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