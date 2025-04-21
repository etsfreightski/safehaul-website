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
import FMCSASafetyRegulations from '@/components/blogposts/FMCSASafetyRegulations';
import InsuranceCostAnalysis from '@/components/blogposts/InsuranceCostAnalysis';
import ClaimsManagement2024 from '@/components/blogposts/ClaimsManagement2024';
import FutureTransportationClaims from '@/components/blogposts/FutureTransportationClaims';
import MaximizingFleetSafetyROI from '@/components/blogposts/MaximizingFleetSafetyROI';
import TechnologyClaimsPrevention from '@/components/blogposts/TechnologyClaimsPrevention';
import ELDClaimsAnalysis2024 from '@/components/blogposts/ELDClaimsAnalysis2024';
import ThirdPartyAdjusterAdvantage2024 from '@/components/blogposts/ThirdPartyAdjusterAdvantage2024';
import WinterSafetyGuide2024 from '@/components/blogposts/WinterSafetyGuide2024';
import Testimonials from '@/components/Testimonials';
import RiskAssessment from '@/components/RiskAssessment';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ServiceSchema from '@/components/ServiceSchema';
import CaseStudies from '@/components/CaseStudies';
import IndustryNews from '@/components/IndustryNews';
import ClaimsServicePage from '@/components/pages/ClaimsServicePage';
import VideoPlayer from './components/VideoPlayer';
import ReviewSection from '@/components/ReviewSection';
import { Helmet } from 'react-helmet';
import './styles/patterns.css';
import usePageTracking from './hooks/usePageTracking';

// SharedLayout component ensures consistent header and navigation across all pages
const SharedLayout = ({ children, title, description }) => (
  <div className="app-container">
    <ServiceSchema />
    <Helmet>
      <title>{title || "Safe Haul - Professional Transportation Claims & Safety Management"}</title>
      <meta name="description" content={description || "Expert transportation safety and claims management services in English, Polish, Russian, Spanish, and Ukrainian. DOT compliance, accident prevention, and fleet safety solutions."} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content={title || "Safe Haul - Transportation Claims & Safety Management"} />
      <meta property="og:description" content={description || "Expert transportation safety and claims management services. Available in English, Polish, Russian, Spanish, and Ukrainian."} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={window.location.href} />
      <meta property="og:site_name" content="Safe Haul" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || "Safe Haul - Transportation Safety Experts"} />
      <meta name="twitter:description" content={description || "Professional transportation safety and claims management services in multiple languages."} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="pl_PL" />
      <meta property="og:locale:alternate" content="ru_RU" />
      <meta property="og:locale:alternate" content="es_ES" />
      <meta property="og:locale:alternate" content="uk_UA" />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Safe Haul Claims & Safety Management" />
      <link rel="canonical" href={window.location.href} />
    </Helmet>
    <div className="site-content">
      <TopBar />
      <Header />
      <Breadcrumbs />
      {children}
    </div>
  </div>
);

// HomePage component combines all the main sections of the landing page
const HomePage = () => (
  <SharedLayout
    title="Safe Haul - Professional Transportation Claims & Safety Management"
    description="Expert transportation safety and claims management services. Multilingual support in English, Polish, Russian, Spanish, and Ukrainian. Get started today!"
  >
    <main>
      <HeroSection />
      <VideoPlayer />
      <ServicesSection />
      <PermitsSection />
      <CaseStudies />
      <IndustryNews />
      <SubscriptionsSection />
      <AboutSection />
      <FAQ />
      <ContactSection />
    </main>
  </SharedLayout>
);

function App() {
  return (
    <Router>
      <div className="App">
        <AppContent />
      </div>
    </Router>
  );
}

// Separate component to use hooks within Router context
function AppContent() {
  usePageTracking();
  
  return (
    <Routes>
      {/* Main landing page route */}
      <Route path="/" element={<HomePage />} />
      
      {/* Reviews section route */}
      <Route path="/reviews" element={
        <SharedLayout 
          title="Client Reviews - Safe Haul Claims & Safety Management"
          description="Read what our clients say about Safe Haul's claims management and safety services. Share your experience with our expert team."
        >
          <ReviewSection />
        </SharedLayout>
      } />
      
      {/* Blog section routes */}
      <Route path="/blog" element={
        <SharedLayout 
          title="Safe Haul Blog - Transportation Safety & Claims Management Insights"
          description="Expert insights on transportation safety, DOT compliance, and claims management. Stay updated with industry best practices and regulations."
        >
          <BlogPage />
        </SharedLayout>
      } />
      
      <Route path="/blog/comprehensive-guide" element={
        <SharedLayout 
          title="Comprehensive Guide to Transportation Safety - Safe Haul"
          description="Complete guide to transportation safety management, DOT compliance, and claims handling. Learn industry best practices and expert strategies."
        >
          <ComprehensiveGuide />
        </SharedLayout>
      } />
      
      <Route path="/blog/dot-compliance" element={
        <SharedLayout 
          title="DOT Compliance Guide 2024 - Safe Haul"
          description="Stay compliant with DOT regulations. Expert guidance on safety ratings, CSA scores, and compliance management for transportation companies."
        >
          <DOTCompliance />
        </SharedLayout>
      } />
      
      <Route path="/blog/claims-management" element={
        <SharedLayout 
          title="Claims Management for Transportation Companies - Safe Haul"
          description="Expert claims management services for transportation companies. Reduce costs and improve safety with our proven strategies."
        >
          <ClaimsManagement />
        </SharedLayout>
      } />
      
      <Route path="/blog/safety-culture" element={
        <SharedLayout 
          title="Building a Safety Culture in Transportation - Safe Haul"
          description="Learn how to build a safety culture in your transportation company. Expert guidance on safety management and compliance."
        >
          <SafetyCulture />
        </SharedLayout>
      } />
      
      <Route path="/blog/comprehensive-transportation-study" element={
        <SharedLayout 
          title="Comprehensive Transportation Study - Safe Haul"
          description="In-depth study on transportation safety and compliance. Learn from industry experts and improve your safety management."
        >
          <ComprehensiveTransportationStudy />
        </SharedLayout>
      } />
      
      <Route path="/blog/comprehensive-analysis" element={
        <SharedLayout 
          title="Comprehensive Analysis of Transportation Safety - Safe Haul"
          description="Expert analysis of transportation safety and compliance. Learn from industry experts and improve your safety management."
        >
          <ComprehensiveAnalysisNavigator />
        </SharedLayout>
      } />
      
      <Route path="/blog/comprehensive-analysis/part2" element={
        <SharedLayout 
          title="Comprehensive Analysis of Transportation Safety Part 2 - Safe Haul"
          description="Expert analysis of transportation safety and compliance. Learn from industry experts and improve your safety management."
        >
          <ComprehensiveAnalysisPart2 />
        </SharedLayout>
      } />
      
      <Route path="/blog/comprehensive-analysis/part3" element={
        <SharedLayout 
          title="Comprehensive Analysis of Transportation Safety Part 3 - Safe Haul"
          description="Expert analysis of transportation safety and compliance. Learn from industry experts and improve your safety management."
        >
          <ComprehensiveAnalysisPart3 />
        </SharedLayout>
      } />
      
      <Route path="/blog/mishandled-claims-costs" element={
        <SharedLayout 
          title="The Cost of Mishandled Claims in Transportation - Safe Haul"
          description="Learn about the costs of mishandled claims in transportation. Expert guidance on claims management and safety compliance."
        >
          <MishandledClaimsCosts />
        </SharedLayout>
      } />
      
      <Route path="/blog/eld-claims-analysis-2024" element={
        <SharedLayout 
          title="The Impact of ELD Data on Transportation Claims: A 2024 Analysis - Safe Haul"
          description="An in-depth analysis of how Electronic Logging Device (ELD) data is revolutionizing transportation claims management, improving accuracy, and reducing fraud in 2024."
        >
          <ELDClaimsAnalysis2024 />
        </SharedLayout>
      } />
      
      <Route path="/blog/third-party-adjuster-advantage-2024" element={
        <SharedLayout 
          title="The Strategic Advantage of Carrier-Experienced Claims Adjusters - Safe Haul"
          description="An in-depth analysis of how third-party claims adjusters with carrier-side experience deliver superior outcomes in transportation claims management, backed by research and industry data."
        >
          <ThirdPartyAdjusterAdvantage2024 />
        </SharedLayout>
      } />
      
      <Route path="/blog/fmcsa-safety-regulations" element={
        <SharedLayout 
          title="FMCSA Safety Regulations for Transportation Companies - Safe Haul"
          description="Stay compliant with FMCSA safety regulations. Expert guidance on safety ratings, CSA scores, and compliance management for transportation companies."
        >
          <FMCSASafetyRegulations />
        </SharedLayout>
      } />
      
      <Route path="/blog/insurance-cost-analysis" element={
        <SharedLayout 
          title="Insurance Cost Analysis for Transportation Companies - Safe Haul"
          description="Expert analysis of insurance costs for transportation companies. Learn how to reduce costs and improve safety."
        >
          <InsuranceCostAnalysis />
        </SharedLayout>
      } />
      
      <Route path="/blog/claims-management-2024" element={
        <SharedLayout 
          title="Claims Management for Transportation Companies in 2024 - Safe Haul"
          description="Expert claims management services for transportation companies in 2024. Reduce costs and improve safety with our proven strategies."
        >
          <ClaimsManagement2024 />
        </SharedLayout>
      } />
      
      <Route path="/blog/future-transportation-claims" element={
        <SharedLayout 
          title="The Future of Transportation Claims - Safe Haul"
          description="Learn about the future of transportation claims. Expert guidance on claims management and safety compliance."
        >
          <FutureTransportationClaims />
        </SharedLayout>
      } />
      
      <Route path="/blog/maximizing-fleet-safety-roi" element={
        <SharedLayout 
          title="Maximizing Fleet Safety ROI - Safe Haul"
          description="Learn how to maximize fleet safety ROI. Expert guidance on safety management and compliance."
        >
          <MaximizingFleetSafetyROI />
        </SharedLayout>
      } />
      
      <Route path="/blog/technology-claims-prevention" element={
        <SharedLayout 
          title="Using Technology for Claims Prevention in Transportation - Safe Haul"
          description="Learn how to use technology for claims prevention in transportation. Expert guidance on safety management and compliance."
        >
          <TechnologyClaimsPrevention />
        </SharedLayout>
      } />
      
      <Route path="/blog/winter-safety-guide-2024" element={
        <SharedLayout 
          title="Winter Safety Guide 2024: Comprehensive Analysis - Safe Haul"
          description="In-depth analysis of winter safety technologies and their impact on transportation claims prevention, featuring comprehensive data analysis and ROI studies."
        >
          <WinterSafetyGuide2024 />
        </SharedLayout>
      } />
      
      <Route path="/testimonials" element={
        <SharedLayout 
          title="Client Success Stories - Safe Haul Transportation Safety"
          description="Read what our clients say about Safe Haul's transportation safety and claims management services. Real results from real companies."
        >
          <Testimonials />
        </SharedLayout>
      } />
      
      <Route path="/risk-assessment" element={
        <SharedLayout 
          title="Transportation Risk Assessment - Safe Haul Safety Solutions"
          description="Professional risk assessment services for transportation companies. Identify and mitigate safety risks with expert guidance."
        >
          <RiskAssessment />
        </SharedLayout>
      } />
      
      <Route path="/services/claims" element={
        <SharedLayout 
          title="Claims Service - Safe Haul"
          description="Expert claims management services for transportation companies. Reduce costs and improve safety with our proven strategies."
        >
          <ClaimsServicePage />
        </SharedLayout>
      } />

      <Route path="/contact" element={
        <SharedLayout 
          title="Contact Safe Haul - Get Started with Professional Safety Management"
          description="Contact Safe Haul for professional transportation safety and claims management services. Get expert help today."
        >
          <ContactSection />
        </SharedLayout>
      } />
    </Routes>
  );
}

export default App;