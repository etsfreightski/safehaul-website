import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import PermitsSection from '@/components/PermitsSection';
import SubscriptionsSection from '@/components/SubscriptionsSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import BlogPage from '@/components/BlogPage';
import ComprehensiveGuide from '@/components/blogposts/ComprehensiveGuide';
import DOTCompliance from '@/components/blogposts/DOTCompliance';
import ClaimsManagement from '@/components/blogposts/ClaimsManagement';
import SafetyCulture from '@/components/blogposts/SafetyCulture';
import ComprehensiveTransportationStudy from '@/components/blogposts/ComprehensiveTransportationStudy';
import ComprehensiveAnalysisNavigator from '@/components/blogposts/ComprehensiveAnalysisNavigator';
import ComprehensiveAnalysisPart2 from '@/components/blogposts/ComprehensiveAnalysisPart2';
import ComprehensiveAnalysisPart3 from '@/components/blogposts/ComprehensiveAnalysisPart3';
import MishandledClaimsCosts from '@/components/blogposts/MishandledClaimsCosts';
import Testimonials from '@/components/Testimonials';
import RiskAssessment from '@/components/RiskAssessment';

// SharedLayout component ensures consistent header and navigation across all pages
const SharedLayout = ({ children }) => (
 <>
   <TopBar />
   <Header />
   {children}
 </>
);

// HomePage component combines all the main sections of the landing page
const HomePage = () => (
 <SharedLayout>
   <main>
     <HeroSection />
     <ServicesSection />
     <PermitsSection />
     <SubscriptionsSection />
     <AboutSection />
     <ContactSection />
   </main>
 </SharedLayout>
);

function App() {
 return (
   <Router>
     <Routes>
       {/* Main landing page route */}
       <Route path="/" element={<HomePage />} />
       
       {/* Blog section routes */}
       <Route path="/blog" element={<SharedLayout><BlogPage /></SharedLayout>} />
       <Route 
         path="/blog/comprehensive-guide" 
         element={<SharedLayout><ComprehensiveGuide /></SharedLayout>} 
       />
       <Route 
         path="/blog/dot-compliance" 
         element={<SharedLayout><DOTCompliance /></SharedLayout>} 
       />
       <Route 
         path="/blog/claims-management" 
         element={<SharedLayout><ClaimsManagement /></SharedLayout>} 
       />
       <Route 
         path="/blog/safety-culture" 
         element={<SharedLayout><SafetyCulture /></SharedLayout>} 
       />
       <Route 
         path="/blog/comprehensive-transportation-study" 
         element={<SharedLayout><ComprehensiveTransportationStudy /></SharedLayout>} 
       />
       <Route 
         path="/blog/comprehensive-analysis" 
         element={<SharedLayout><ComprehensiveAnalysisNavigator /></SharedLayout>} 
       />
       <Route 
         path="/blog/comprehensive-analysis/part2" 
         element={<SharedLayout><ComprehensiveAnalysisPart2 /></SharedLayout>} 
       />
       <Route 
         path="/blog/comprehensive-analysis/part3" 
         element={<SharedLayout><ComprehensiveAnalysisPart3 /></SharedLayout>} 
       />
       <Route 
         path="/blog/mishandled-claims-costs" 
         element={<SharedLayout><MishandledClaimsCosts /></SharedLayout>} 
       />
       
       {/* Additional feature routes */}
       <Route 
         path="/testimonials" 
         element={<SharedLayout><Testimonials /></SharedLayout>}
       />  
       <Route 
         path="/risk-assessment" 
         element={<SharedLayout><RiskAssessment /></SharedLayout>} 
       />
     </Routes>
   </Router>
 );
}

export default App;