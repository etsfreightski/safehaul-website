import React from "react";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import PermitsSection from "./components/PermitsSection";
import SubscriptionsSection from "./components/SubscriptionsSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import "./styles/globals.css";

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <style>{`
        .text-shadow {
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
        .drop-shadow-xl {
          filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.2));
        }
        .shadow-3xl {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.35);
        }
        .text-shadow-outline {
          text-shadow:
            -1px -1px 0 #000,
            1px -1px 0 #000,
            -1px 1px 0 #000,
            1px 1px 0 #000;
        }
      `}</style>
      <TopBar />
      <Header />
      <HeroSection />
      <ServicesSection />
      <PermitsSection />
      <SubscriptionsSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default App;