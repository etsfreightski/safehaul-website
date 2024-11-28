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
import ComprehensiveGuide from './components/blogPosts/ComprehensiveGuide';
import DOTCompliance from './components/blogPosts/DOTCompliance';
import ClaimsManagement from './components/blogPosts/ClaimsManagement';
import SafetyCulture from './components/blogPosts/SafetyCulture';

// Homepage component to hold your current layout
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
        <Route path="/blog" element={
          <>
            <TopBar />
            <Header />
            <BlogPage />
          </>
        } />
        <Route path="/blog/comprehensive-guide" element={
          <>
            <TopBar />
            <Header />
            <ComprehensiveGuide />
          </>
        } />
        <Route path="/blog/dot-compliance" element={
          <>
            <TopBar />
            <Header />
            <DOTCompliance />
          </>
        } />
        <Route path="/blog/claims-management" element={
          <>
            <TopBar />
            <Header />
            <ClaimsManagement />
          </>
        } />
        <Route path="/blog/safety-culture" element={
          <>
            <TopBar />
            <Header />
            <SafetyCulture />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;