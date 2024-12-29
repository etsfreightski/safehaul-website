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
                  href="https://www.instagram.com/safehaulclaims"
                  className="text-gray-400 hover:text-gray-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="https://x.com/safe_haul"
                  className="text-gray-400 hover:text-gray-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">X (Twitter)</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
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