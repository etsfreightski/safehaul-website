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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;