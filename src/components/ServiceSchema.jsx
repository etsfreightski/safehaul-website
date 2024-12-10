import React from 'react';
import { Helmet } from 'react-helmet';

const ServiceSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Safe Haul",
    "description": "Expert transportation safety and claims management services available in English, Polish, Russian, Spanish, and Ukrainian.",
    "url": "https://safehaulclaims.com",
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
      "name": "Transportation Safety & Claims Services",
      "itemListElement": [
        {
          "@type": "Service",
          "name": "Claims Management",
          "description": "Professional transportation claims management including physical damage, cargo, and liability claims.",
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock"
          }
        },
        {
          "@type": "Service",
          "name": "DOT Compliance",
          "description": "Comprehensive DOT compliance services and auditing",
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock"
          }
        },
        {
          "@type": "Service",
          "name": "Safety Management",
          "description": "Fleet safety programs and risk management solutions",
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock"
          }
        }
      ]
    },
    "knowsLanguage": ["en", "pl", "ru", "es", "ua"],
    "sameAs": [
      "https://www.facebook.com/safehaulclaims",
      "https://www.linkedin.com/company/safe-haul"
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
