import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What makes Safe Haul different from other claims management companies?",
      answer: "Safe Haul specializes exclusively in transportation claims, bringing decades of industry-specific experience. We offer 24/7 emergency response, aggressive claims defense, and deep expertise in DOT compliance, setting us apart from generic claims management providers. Our multilingual support in English, Polish, Russian, Spanish, and Ukrainian ensures clear communication with all stakeholders."
    },
    {
      question: "How quickly can you respond to an accident scene?",
      answer: "Our emergency response team is available 24/7 and typically coordinates with local resources within 15-30 minutes of notification. We immediately dispatch qualified adjusters and, if necessary, coordinate with our network of trusted towing providers. Our multilingual team ensures effective communication regardless of the driver's preferred language."
    },
    {
      question: "What types of claims do you handle?",
      answer: "We handle all transportation-related claims including physical damage, cargo loss, auto liability, workers' compensation, and occupational accident claims. We also manage DOT compliance issues and provide comprehensive safety management services. Our expertise covers both domestic and international transportation claims."
    },
    {
      question: "How do you help reduce our insurance costs?",
      answer: "We help reduce insurance costs through proactive risk management, aggressive claims defense, and strategic negotiations with providers. Our clients typically see 15-30% reduction in claims costs within the first year through our comprehensive approach to claims and safety management."
    },
    {
      question: "Do you provide DOT compliance assistance?",
      answer: "Yes, we offer comprehensive DOT compliance services including audit preparation, safety rating improvement programs, driver qualification file management, and ongoing compliance monitoring. Our team stays up-to-date with the latest FMCSA regulations and industry best practices."
    },
    {
      question: "What is your approach to cargo claims?",
      answer: "We take a proactive approach to cargo claims, focusing on immediate response, thorough documentation, and strategic negotiation. We work closely with shippers to minimize claim severity and protect carrier-shipper relationships. Our multilingual capabilities ensure effective communication with all parties involved."
    },
    {
      question: "What languages do you support?",
      answer: "We provide full service support in English, Polish, Russian, Spanish, and Ukrainian. This includes all documentation, communication, and claims handling processes. Our multilingual team ensures nothing is lost in translation during critical claims management procedures."
    },
    {
      question: "How do you handle international transportation claims?",
      answer: "We have extensive experience with international transportation claims, including cross-border shipments and international logistics. Our multilingual team and global network of partners allow us to effectively manage claims across different jurisdictions and regulatory frameworks."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "inLanguage": ["en", "pl", "ru", "es", "uk"],
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <section className="py-12 bg-gray-50" id="faq">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Find answers to common questions about our transportation claims and safety management services
          </p>
        </div>
        
        <div className="mt-12">
          <dl className="space-y-6">
            {faqData.map((item, index) => (
              <div key={index} className="pt-6">
                <dt className="text-lg">
                  <button
                    className="text-left w-full flex justify-between items-start text-gray-400"
                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  >
                    <span className="font-medium text-gray-900">
                      {item.question}
                    </span>
                    <span className="ml-6 h-7 flex items-center">
                      <svg
                        className={`${
                          activeIndex === index ? '-rotate-180' : 'rotate-0'
                        } h-6 w-6 transform transition-transform duration-200 ease-in-out`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </button>
                </dt>
                <dd
                  className={`${
                    activeIndex === index ? 'mt-2' : 'hidden'
                  } pr-12`}
                >
                  <p className="text-base text-gray-500">
                    {item.answer}
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
    </section>
  );
};

export default FAQ;
