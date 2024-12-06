import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What makes Safe Haul different from other claims management companies?",
      answer: "Safe Haul specializes exclusively in transportation claims, bringing decades of industry-specific experience. We offer 24/7 emergency response, aggressive claims defense, and deep expertise in DOT compliance, setting us apart from generic claims management providers."
    },
    {
      question: "How quickly can you respond to an accident scene?",
      answer: "Our emergency response team is available 24/7 and typically coordinates with local resources within 15-30 minutes of notification. We immediately dispatch qualified adjusters and, if necessary, coordinate with our network of trusted towing providers."
    },
    {
      question: "What types of claims do you handle?",
      answer: "We handle all transportation-related claims including physical damage, cargo loss, auto liability, workers' compensation, and occupational accident claims. We also manage DOT compliance issues and provide comprehensive safety management services."
    },
    {
      question: "How do you help reduce our insurance costs?",
      answer: "We help reduce insurance costs through proactive risk management, aggressive claims defense, and strategic negotiations with providers. Our clients typically see 15-30% reduction in claims costs within the first year."
    },
    {
      question: "Do you provide DOT compliance assistance?",
      answer: "Yes, we offer comprehensive DOT compliance services including audit preparation, safety rating improvement programs, driver qualification file management, and ongoing compliance monitoring."
    },
    {
      question: "What is your approach to cargo claims?",
      answer: "We take a proactive approach to cargo claims, focusing on immediate response, thorough documentation, and strategic negotiation. We work closely with shippers to minimize claim severity and protect carrier-shipper relationships."
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData.map(item => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
              }
            }))
          })}
        </script>
      </Helmet>

      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-black text-gray-900 mb-8 text-center">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div 
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden bg-white"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                <span className={`transform transition-transform ${activeIndex === index ? 'rotate-180' : ''}`}>
                  <svg 
                    className="w-5 h-5 text-gray-500"
                    fill="none" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path d="M19 9l-7 7-7-7"></path>
                  </svg>
                </span>
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-200 ease-in-out ${
                  activeIndex === index ? 'max-h-96 py-4' : 'max-h-0'
                }`}
              >
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
