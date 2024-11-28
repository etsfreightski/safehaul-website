import { Link } from 'react-router-dom';

const ClaimsManagement = () => {
  return (
    <div className="bg-gray-200 min-h-screen pt-8">
      <div className="max-w-4xl mx-auto px-4 pb-16">
        <Link to="/blog" className="text-[#40CBB5] font-bold mb-8 inline-block hover:underline">
          ← Back to Blog
        </Link>
        
        <article className="bg-white rounded-lg shadow-xl p-8">
          <header className="mb-12">
            <h1 className="text-4xl font-black text-gray-900 mb-6">
              The Art of Claims Management
            </h1>
            <div className="flex gap-4 text-sm text-gray-600 mb-6">
              <span>November 25, 2024</span>
              <span>•</span>
              <span>7 min read</span>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed">
              Professional claims management can save fleets millions in potential losses. 
              Learn how expert handling and proper documentation make all the difference.
            </p>
          </header>

          <section className="mb-12">
            <h2 className="text-3xl font-black text-gray-900 mb-6">The First 24 Hours</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              The actions taken immediately following an incident often determine the final outcome of a claim. 
              Critical steps include:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>Immediate incident documentation and photography</li>
              <li>Proper driver statement collection</li>
              <li>Witness identification and statements</li>
              <li>Scene preservation when necessary</li>
              <li>Rapid claims professional involvement</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-black text-gray-900 mb-6">Documentation Best Practices</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Thorough documentation is your best defense against expensive claims. Essential elements include:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>Detailed incident reports with supporting photographs</li>
              <li>Driver qualification and training records</li>
              <li>Vehicle maintenance history</li>
              <li>ELD data and dashcam footage</li>
              <li>Weather and road condition reports</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-black text-gray-900 mb-6">Claims Prevention Strategies</h2>
            <h3 className="text-2xl font-bold text-[#40CBB5] mb-4">Driver Training</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              A well-trained driver is your first line of defense against claims. Focus areas should include:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>Defensive driving techniques</li>
              <li>Proper accident scene procedures</li>
              <li>Documentation requirements</li>
              <li>Communication protocols</li>
            </ul>

            <h3 className="text-2xl font-bold text-[#40CBB5] mb-4">Technology Integration</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Modern technology provides powerful tools for claims prevention and management:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>AI-powered dashcams</li>
              <li>Advanced telematics systems</li>
              <li>Electronic logging devices</li>
              <li>Maintenance tracking software</li>
            </ul>
          </section>

          <footer className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-3xl font-black text-gray-900 mb-6">The Bottom Line</h2>
            <p className="text-gray-700 leading-relaxed">
              Professional claims management isn't just about handling incidents after they occur—it's about 
              creating a comprehensive system that prevents claims, minimizes their impact when they do happen, 
              and protects your fleet's financial interests. Investment in proper claims management typically 
              pays for itself many times over through reduced claim costs and lower insurance premiums.
            </p>
          </footer>
        </article>
      </div>
    </div>
  );
};

export default ClaimsManagement;