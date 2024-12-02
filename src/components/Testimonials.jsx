import React from 'react';
import { Quote } from 'lucide-react';

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
    },
    {
      id: 8,
      author: "Anna R.",
      title: "Transportation Company Owner",
      text: "When I started my trucking company, I was overwhelmed by the requirements—permits, insurance policies, DOT compliance, you name it. Safe Haul guided me through every step, from incorporating my business to growing a fleet of over 100 trucks.",
      category: "Business Development"
    },
    {
      id: 9,
      author: "Sarah H.",
      title: "LTL Carrier Owner",
      text: "We had a particularly complex freight claim that seemed unwinnable—until Safe Haul got involved. Their deep understanding of carrier operations and claims defense was the difference maker. They didn't settle for anything less than the best outcome, and their strategic approach saved us thousands.",
      category: "Claims Defense"
    },
    {
      id: 10,
      author: "Danielle T.",
      title: "Logistics Manager",
      text: "Safe Haul's owners have decades of experience as safety directors and managing a large safety services company, and it shows. They've defended our claims to the fullest, ensuring we get the best outcomes every time.",
      category: "Industry Experience"
    },
    {
      id: 11,
      author: "Tom W.",
      title: "Fleet Manager",
      text: "The driver training program offered by Safe Haul has been a game-changer for our company. Their experts provided hands-on workshops that taught our team the latest safety techniques and compliance requirements. Our drivers are now more confident and prepared.",
      category: "Training Programs"
    },
    {
      id: 12,
      author: "Michael G.",
      title: "Fleet Safety Director",
      text: "Safe Haul's decades of experience running safety and insurance departments gives them an edge that most safety companies just don't have. They know how to keep carriers compliant because they've done it themselves for years. Their advice isn't theoretical—it's practical, real-world solutions that work.",
      category: "Practical Solutions"
    },
    {
      id: 13,
      author: "Bryan K.",
      title: "Carrier Owner-Operator",
      text: "From starting our company to scaling to over 150 trucks, Safe Haul has been by our side. Their experience managing safety and claims departments means they know exactly what carriers need to grow while staying compliant.",
      category: "Growth Support"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h1>
          <p className="text-xl text-gray-600">Real experiences from transportation professionals</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} 
                 className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <Quote className="w-8 h-8 text-blue-600 mb-4" />
              <div className="space-y-4">
                <p className="text-gray-700 text-lg leading-relaxed min-h-[200px]">"{testimonial.text}"</p>
                <div className="pt-4 border-t border-gray-100">
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-600">{testimonial.title}</p>
                  <span className="inline-block mt-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {testimonial.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;