import React from 'react';
import BlogLayout from '../../components/BlogLayout';

const DOTHoursOfService = () => {
  const blogContent = {
    title: "DOT Announces New Hours of Service Flexibility Rules",
    date: "November 28, 2024",
    author: "Safe Haul Team",
    content: `
      The Department of Transportation has introduced important changes to hours-of-service rules, providing commercial drivers with additional flexibility in their operations. These updates aim to improve safety while maintaining operational efficiency.

      Key Changes to Hours of Service Rules:
      • New Split-Sleeper Berth Options
      • Updated On-Duty Time Calculations
      • Modified Break Requirements
      • Extended Driving Window Provisions

      Important Updates:
      1. Split-Sleeper Berth Flexibility
      2. Break Time Modifications
      3. Adverse Driving Conditions Extensions
      4. Short-Haul Operations Changes

      Compliance Requirements:
      • Updated Log Book Procedures
      • New Documentation Standards
      • Modified Rest Period Tracking
      • Revised Violation Guidelines

      Safe Haul provides comprehensive support for hours-of-service compliance and can help ensure your operations meet all new requirements. Contact our team for guidance on implementing these changes.
    `
  };

  return <BlogLayout blogContent={blogContent} />;
};

export default DOTHoursOfService;
