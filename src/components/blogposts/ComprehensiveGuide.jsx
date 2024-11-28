import { Link } from 'react-router-dom';

const ComprehensiveGuide = () => {
  return (
    <div className="bg-gray-200 min-h-screen pt-8">
      <div className="max-w-4xl mx-auto px-4 pb-16">
        <Link to="/blog" className="text-[#40CBB5] font-bold mb-8 inline-block hover:underline">
          ← Back to Blog
        </Link>
        
        <article className="bg-white rounded-lg shadow-xl p-8">
          <header className="mb-12">
            <h1 className="text-4xl font-black text-gray-900 mb-6">
              Comprehensive Guide to Transportation Safety and Claims
            </h1>
            <div className="flex gap-4 text-sm text-gray-600 mb-6">
              <span>November 23, 2024</span>
              <span>•</span>
              <span>8 min read</span>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed">
              Transportation safety and claims management are critical concerns for businesses and individuals alike. 
              Whether you're managing a fleet, ensuring the safety of passengers, or navigating the complex process of claims, 
              understanding the interplay between safety measures and liability is essential.
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
          </section>
        </article>
      </div>
    </div>
  );
};

export default ComprehensiveGuide;