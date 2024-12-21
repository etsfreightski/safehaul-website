import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        'service_sq8n3ug',
        'template_wkmanjf',
        formRef.current,
        'O47UT-NgPjCcsMJtP'
      );
      setSubmitted(true);
      
      // Track form submission conversion
      if (typeof gtag === 'function') {
        gtag('event', 'conversion', {
          'send_to': 'AW-6848128318/form_submit',
          'value': 1.0,
          'currency': 'USD',
          'transaction_id': Date.now().toString()
        });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact" className="py-24 bg-[#0A3622]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="bg-white p-8 rounded-lg shadow-2xl transform hover:shadow-3xl transition-all duration-300">
            {submitted ? (
              <div className="text-center py-8">
                <h3 className="text-2xl font-black text-[#40CBB5] mb-4">Thank You!</h3>
                <p className="text-lg font-bold text-gray-900">Your message has been sent. We'll get back to you soon.</p>
              </div>
            ) : (
              <form 
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div>
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Name"
                    required
                    className="w-full p-4 border-b-3 border-gray-300 focus:border-[#40CBB5] outline-none text-lg font-bold text-gray-900 shadow-sm"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Email"
                    required
                    className="w-full p-4 border-b-3 border-gray-300 focus:border-[#40CBB5] outline-none text-lg font-bold text-gray-900 shadow-sm"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone_number"
                    placeholder="Phone"
                    required
                    className="w-full p-4 border-b-3 border-gray-300 focus:border-[#40CBB5] outline-none text-lg font-bold text-gray-900 shadow-sm"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="company_name"
                    placeholder="Company"
                    required
                    className="w-full p-4 border-b-3 border-gray-300 focus:border-[#40CBB5] outline-none text-lg font-bold text-gray-900 shadow-sm"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Message"
                    required
                    rows={3}
                    className="w-full p-4 border-b-3 border-gray-300 focus:border-[#40CBB5] outline-none text-lg font-bold text-gray-900 shadow-sm resize-none"
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-[#FFB951] text-white px-12 py-4 rounded-full hover:bg-[#f0aa42] transition-all duration-300 text-xl font-black shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Sending...' : 'SUBMIT'}
                  </button>
                </div>
              </form>
            )}
          </div>

          <div className="text-white">
            <h2 className="text-5xl font-black mb-12 drop-shadow-xl">
              Contact Us
            </h2>
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <Mail size={32} className="text-white drop-shadow-lg" />
                <a
                  href="mailto:info@safehaulclaims.com"
                  className="text-2xl font-bold hover:text-[#40CBB5] drop-shadow-lg"
                >
                  info@safehaulclaims.com
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <Phone size={32} className="text-white drop-shadow-lg" />
                <a
                  href="tel:+12182032097"
                  className="text-2xl font-bold hover:text-[#40CBB5] drop-shadow-lg"
                >
                  +1 218-203-2097
                </a>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin
                  size={32}
                  className="text-white flex-shrink-0 drop-shadow-lg"
                />
                <span className="text-2xl font-bold drop-shadow-lg">
                  Proudly Serving the Greater Chicagoland Area and Beyond
                </span>
              </div>
              <div className="mt-8 flex gap-6">
                <a
                  href="https://www.facebook.com/SafeHaulClaims"
                  className="text-gray-400 hover:text-gray-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@SafeHaulClaimsandSafetyManagem"
                  className="text-gray-400 hover:text-gray-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">YouTube</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.504 2.504 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.418-4.814c.23-.861.907-1.538 1.768-1.768C5.746 5 12 5 12 5s6.255 0 7.814.418z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M15.194 12 10 15V9l5.194 3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;