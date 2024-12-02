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
import Testimonials from '@/components/Testimonials';

const SharedLayout = ({ children }) => (
  <>
    <TopBar />
    <Header />
    {children}
  </>
);

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
        <Route path="/" element={<HomePage />} />
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
	  path="/testimonials" 
	  element={<SharedLayout><Testimonials /></SharedLayout>} 
      </Routes>
    </Router>
  );
}

export default App;