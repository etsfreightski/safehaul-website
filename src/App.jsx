import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import PermitsSection from './components/PermitsSection';
import SubscriptionsSection from './components/SubscriptionsSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import BlogPage from './components/BlogPage';
import BlogLayout from './components/BlogLayout';
import ComprehensiveGuide from './components/blogposts/ComprehensiveGuide';
import DOTCompliance from './components/blogposts/DOTCompliance';
import ClaimsManagement from './components/blogposts/ClaimsManagement';
import SafetyCulture from './components/blogposts/SafetyCulture';

const HomePage = () => (
  <>
    <TopBar />
    <Header />
    <main>
      <HeroSection />
      <ServicesSection />
      <PermitsSection />
      <SubscriptionsSection />
      <AboutSection />
      <ContactSection />
    </main>
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="blog" element={<BlogLayout />}>
          <Route index element={<BlogPage />} />
          <Route path="comprehensive-guide" element={<ComprehensiveGuide />} />
          <Route path="dot-compliance" element={<DOTCompliance />} />
          <Route path="claims-management" element={<ClaimsManagement />} />
          <Route path="safety-culture" element={<SafetyCulture />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;