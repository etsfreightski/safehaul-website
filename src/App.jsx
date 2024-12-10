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
import Testimonials from '@/components/Testimonials';
import RiskAssessment from '@/components/RiskAssessment';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ServiceSchema from '@/components/ServiceSchema';
import CaseStudies from '@/components/CaseStudies';
import IndustryNews from '@/components/IndustryNews';
import { Helmet } from 'react-helmet';

// SharedLayout component ensures consistent header and navigation across all pages
const SharedLayout = ({ children }) => (
  <>
    <ServiceSchema />
    <Helmet>
      <title>Safe Haul - Professional Transportation Claims & Safety Management</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Expert transportation safety and claims management services in English, Polish, Russian, Spanish, and Ukrainian. DOT compliance, accident prevention, and fleet safety solutions." />
      <meta name="keywords" content="transportation safety, DOT compliance, claims management, fleet safety, accident prevention, CSA scores, safety rating, HOS compliance, Polish trucking, Russian trucking, Spanish trucking, Ukrainian trucking" />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content="Safe Haul - Transportation Claims & Safety Management" />
      <meta property="og:description" content="Expert transportation safety and claims management services. Available in English, Polish, Russian, Spanish, and Ukrainian." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://safehaulclaims.com" />
      <meta property="og:site_name" content="Safe Haul" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Safe Haul - Transportation Safety Experts" />
      <meta name="twitter:description" content="Professional transportation safety and claims management services in multiple languages." />
      
      {/* Language Support Tags */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="pl_PL" />
      <meta property="og:locale:alternate" content="ru_RU" />
      <meta property="og:locale:alternate" content="es_ES" />
      <meta property="og:locale:alternate" content="uk_UA" />
      
      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Safe Haul Claims & Safety Management" />
      <link rel="canonical" href="https://safehaulclaims.com" />
    </Helmet>
    <TopBar />
    <Header />
    <Breadcrumbs />
    {children}
  </>
);

// HomePage component combines all the main sections of the landing page
const HomePage = () => (
  <SharedLayout>
    <Helmet>
      <title>Safe Haul - Professional Transportation Claims & Safety Management</title>
      <meta name="description" content="Expert transportation claims management, DOT compliance, and safety services. Protect your fleet with industry-leading solutions from Safe Haul." />
      <meta property="og:title" content="Safe Haul - Transportation Claims & Safety Management" />
      <meta property="og:description" content="Expert transportation claims management and safety services for carriers." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={window.location.href} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Safe Haul - Transportation Claims & Safety Management" />
      <meta name="twitter:description" content="Expert transportation claims management and safety services for carriers." />
    </Helmet>
    <main>
      <HeroSection />
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
        
        {/* Industry News routes */}
        <Route 
          path="/blog/fmcsa-safety-regulations" 
          element={<SharedLayout><FMCSASafetyRegulations /></SharedLayout>} 
        />
        <Route 
          path="/blog/insurance-cost-analysis" 
          element={<SharedLayout><InsuranceCostAnalysis /></SharedLayout>} 
        />
        <Route 
          path="/blog/claims-management-2024" 
          element={<SharedLayout><ClaimsManagement2024 /></SharedLayout>} 
        />
        
        {/* Safe Haul Team Insights routes */}
        <Route 
          path="/blog/future-transportation-claims" 
          element={<SharedLayout><FutureTransportationClaims /></SharedLayout>} 
        />
        <Route 
          path="/blog/maximizing-fleet-safety-roi" 
          element={<SharedLayout><MaximizingFleetSafetyROI /></SharedLayout>} 
        />
        <Route 
          path="/blog/technology-claims-prevention" 
          element={<SharedLayout><TechnologyClaimsPrevention /></SharedLayout>} 
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