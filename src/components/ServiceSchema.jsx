import React from 'react';
import { Helmet } from 'react-helmet';

const ServiceSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Safe Haul Claims and Safety Management",
    "description": "Industry-leading transportation claims adjuster and DOT compliance experts. Specialized in truck accident investigations, FMCSA compliance consulting, and cargo claims processing. Professional safety audits and risk management solutions for carriers nationwide. Expert DOT audit defense and CSA score improvement services.",
    "url": "https://safehaulclaims.com",
    "logo": "https://safehaulclaims.com/icon-512.png",
    "image": "https://safehaulclaims.com/icon-512.png",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Chicago",
      "addressRegion": "IL",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "41.8781",
      "longitude": "-87.6298"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "availableLanguage": [
      {
        "@type": "Language",
        "name": "English",
        "alternateName": "en"
      },
      {
        "@type": "Language",
        "name": "Polish",
        "alternateName": "pl"
      },
      {
        "@type": "Language",
        "name": "Russian",
        "alternateName": "ru"
      },
      {
        "@type": "Language",
        "name": "Spanish",
        "alternateName": "es"
      },
      {
        "@type": "Language",
        "name": "Ukrainian",
        "alternateName": "ua"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Transportation Safety & Claims Management Services",
      "itemListElement": [
        {
          "@type": "Service",
          "name": "Professional Claims Adjusting Services",
          "description": "Comprehensive transportation claims management including physical damage assessment, cargo claims resolution, liability claims handling, and workers compensation. Expert claims adjusting services for insurance companies and carriers.",
          "serviceType": "Claims Adjustment",
          "provider": {
            "@type": "Organization",
            "name": "Safe Haul Claims and Safety Management"
          }
        },
        {
          "@type": "Service",
          "name": "DOT Compliance and Safety Consulting",
          "description": "Expert DOT compliance consulting, safety audits, regulatory compliance management, and comprehensive safety program development for transportation companies.",
          "serviceType": "Safety Consulting",
          "provider": {
            "@type": "Organization",
            "name": "Safe Haul Claims and Safety Management"
          }
        }
      ]
    },
    "keywords": [
      "transportation claims adjuster",
      "truck accident investigation",
      "FMCSA compliance consultant",
      "cargo claims processing",
      "freight claims management",
      "DOT safety consultant",
      "transportation safety audit",
      "hazmat compliance",
      "ELD compliance solutions",
      "driver qualification files",
      "trucking safety rating",
      "CSA score improvement",
      "transportation risk assessment",
      "cargo damage claims",
      "truck accident reconstruction",
      "safety management systems",
      "DOT audit defense",
      "fleet safety programs",
      "transportation compliance training",
      "BASIC score improvement"
    ],
    "sameAs": [
      "https://www.linkedin.com/company/safe-haul-claims",
      "https://www.facebook.com/safehaulclaims"
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default ServiceSchema;
