import React from 'react';
import { Helmet } from 'react-helmet';

const ServiceSchema = () => {
  const services = [
    {
      "@type": "Service",
      "name": "Claims Management",
      "description": "Professional transportation claims management including physical damage, cargo, and liability claims.",
      "provider": {
        "@type": "Organization",
        "name": "Safe Haul"
      },
      "areaServed": "United States",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Transportation Claims Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Physical Damage Claims",
              "description": "Expert handling of truck and trailer damage claims"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Cargo Claims",
              "description": "Professional cargo loss and damage claims management"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Liability Claims",
              "description": "Comprehensive auto liability claims handling"
            }
          }
        ]
      }
    },
    {
      "@type": "Service",
      "name": "DOT Compliance",
      "description": "Comprehensive DOT compliance management and consulting services.",
      "provider": {
        "@type": "Organization",
        "name": "Safe Haul"
      },
      "areaServed": "United States"
    },
    {
      "@type": "Service",
      "name": "Safety Management",
      "description": "Professional safety program development and management for transportation companies.",
      "provider": {
        "@type": "Organization",
        "name": "Safe Haul"
      },
      "areaServed": "United States"
    }
  ];

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Safe Haul",
          "url": window.location.origin,
          "logo": `${window.location.origin}/logo.png`,
          "description": "Professional transportation claims and safety management services",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Safe Haul Services",
            "itemListElement": services
          }
        })}
      </script>
    </Helmet>
  );
};

export default ServiceSchema;
