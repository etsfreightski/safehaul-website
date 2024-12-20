import React from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      author: "John M.",
      title: "Logistics Manager",
      text: "I was at my wit's end trying to resolve a complex transportation claim that no one else could handle. I'd been bounced around by multiple companies with no clear answers until I found Safe Haul. Their expertise and dedication were unparalleled. They took the time to analyze every detail, advocated on my behalf, and ultimately resolved the issue quickly and efficiently. I can't recommend them enough!",
      category: "Claims Resolution"
    },
    {
      id: 2,
      author: "Emily R.",
      title: "Fleet Operator",
      text: "Safe Haul's organization and professionalism blew me away. From the initial consultation to the final resolution, every step was clearly communicated. They kept me updated regularly and always had answers to my questions. It's rare to find a team so committed to both results and client satisfaction. They've earned a lifelong customer!",
      category: "Client Service"
    },
    {
      id: 3,
      author: "Sarah T.",
      title: "Independent Truck Owner",
      text: "The claims process had always been a headache for me—until I partnered with Safe Haul. They took over what felt like a mountain of paperwork, explained everything in plain English, and made the whole experience stress-free. I could finally breathe knowing my case was in the hands of true professionals. Absolutely outstanding service!",
      category: "Claims Management"
    },
    {
      id: 4,
      author: "James W.",
      title: "Multi-State Carrier",
      text: "Unlike other safety companies that only understand carriers from the outside, Safe Haul's team has lived it. With their experience running safety and insurance departments, they bring an insider perspective that you won't find anywhere else. They've kept us compliant, defended claims with expert precision, and helped us establish operations across multiple locations.",
      category: "Industry Expertise"
    },
    {
      id: 5,
      author: "Peter S.",
      title: "Carrier Owner",
      text: "We started as a small operation with just a couple of trucks, and Safe Haul has been with us every step of the way. They helped us set up our MC and DOT, manage insurance renewals, and navigate contracts. Thanks to their expertise in safety and claims, we've grown into a multi-state carrier with over 200 trucks.",
      category: "Business Growth"
    },
    {
      id: 6,
      author: "Lisa B.",
      title: "Intermodal Operations Manager",
      text: "Running a multi-location operation with intermodal and LTL freight services is no easy task, but Safe Haul makes it manageable. Their extensive experience in motor carrier safety and claims is unmatched—they know exactly what a carrier needs to stay compliant and defend claims effectively.",
      category: "Operations Management"
    },
    {
      id: 7,
      author: "David R.",
      title: "Fleet Safety Manager",
      text: "We were struggling with frequent safety violations and accidents in our fleet, but Safe Haul completely turned things around. They assessed our safety procedures, implemented new protocols, and provided training for our team. Since working with them, our safety record has improved dramatically.",
      category: "Safety Improvement"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: true,
    nextArrow: <div className="slick-next"><ChevronRight size={24} /></div>,
    prevArrow: <div className="slick-prev"><ChevronLeft size={24} /></div>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 mb-8">Real experiences from transportation professionals</p>
        </div>

        <div className="relative px-8">
          <Slider {...settings} className="testimonials-slider">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="px-4">
                <div className="bg-white rounded-xl shadow-lg p-8 h-full">
                  <Quote className="w-8 h-8 text-[#40CBB5] mb-4" />
                  <div className="space-y-4">
                    <p className="text-gray-700 text-lg leading-relaxed min-h-[150px]">
                      "{testimonial.text}"
                    </p>
                    <div className="pt-4 border-t border-gray-100">
                      <p className="font-semibold text-gray-900">{testimonial.author}</p>
                      <p className="text-gray-600">{testimonial.title}</p>
                      <span className="inline-block mt-2 px-3 py-1 bg-[#40CBB5] bg-opacity-10 text-[#40CBB5] rounded-full text-sm">
                        {testimonial.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <style jsx>{`
          .testimonials-slider .slick-slide {
            padding: 1rem;
          }
          .testimonials-slider .slick-dots li button:before {
            color: #40CBB5;
          }
          .testimonials-slider .slick-dots li.slick-active button:before {
            color: #40CBB5;
          }
          .testimonials-slider .slick-prev,
          .testimonials-slider .slick-next {
            width: 40px;
            height: 40px;
            background: white;
            border-radius: 50%;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            z-index: 1;
            transition: all 0.3s ease;
          }
          .testimonials-slider .slick-prev:hover,
          .testimonials-slider .slick-next:hover {
            background: #40CBB5;
            color: white;
            transform: scale(1.1);
          }
          .testimonials-slider .slick-prev {
            left: -50px;
          }
          .testimonials-slider .slick-next {
            right: -50px;
          }
          .testimonials-slider .slick-prev:before,
          .testimonials-slider .slick-next:before {
            display: none;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Testimonials;