import React from 'react';

const BlogPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <article className="bg-white rounded-lg shadow-xl p-8">
          <header className="mb-12">
            <h1 className="text-4xl font-black text-gray-900 mb-6">
              Comprehensive Guide to Transportation Safety and Claims
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Transportation safety and claims management are critical concerns for businesses and individuals alike. 
              Whether you're managing a fleet, ensuring the safety of passengers, or navigating the complex process of claims, 
              understanding the interplay between safety measures and liability is essential. This guide dives into actionable strategies, 
              emerging trends, and best practices to help you minimize risks and protect your bottom line.
            </p>
          </header>

          <section className="mb-12">
            <h2 className="text-3xl font-black text-gray-900 mb-6">Understanding Transportation Safety</h2>
            <h3 className="text-2xl font-bold text-[#40CBB5] mb-4">What is Transportation Safety?</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Transportation safety encompasses the measures and practices put in place to prevent accidents and injuries across all modes of transport. 
              It ensures that vehicles, equipment, and systems operate safely, protecting passengers, operators, and cargo. 
              A robust safety framework is vital for reducing risks and ensuring regulatory compliance in industries such as logistics, public transit, and aviation.
            </p>

            <h3 className="text-2xl font-bold text-[#40CBB5] mb-4">Key Elements of Transportation Safety</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li><strong className="font-bold">Safety Protocols:</strong> Enforcing guidelines to handle operations efficiently and securely.</li>
              <li><strong className="font-bold">Equipment Maintenance:</strong> Routine inspections and servicing to prevent malfunctions.</li>
              <li><strong className="font-bold">Training for Personnel:</strong> Equipping drivers, operators, and managers with the skills to handle challenges.</li>
            </ul>
          </section>

          {/* Continue with other sections following the same pattern */}
          
          <footer className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-3xl font-black text-gray-900 mb-6">Conclusion</h2>
            <p className="text-gray-700 leading-relaxed">
              Transportation safety and claims management are intertwined aspects of a successful and sustainable transportation strategy. 
              By prioritizing safety, adopting best practices, and leveraging technology, businesses can significantly reduce claims and enhance their reputation. 
              Start today by fostering a safety-first culture and ensuring compliance with industry standards.
            </p>
          </footer>
        </article>
      </div>
    </div>
  );
};

export default BlogPage;