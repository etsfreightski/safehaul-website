import { Link } from 'react-router-dom';

const SafetyCulture = () => {
  return (
    <div className="bg-gray-200 min-h-screen pt-8">
      <div className="max-w-4xl mx-auto px-4 pb-16">
        <Link to="/blog" className="text-[#40CBB5] font-bold mb-8 inline-block hover:underline">
          ← Back to Blog
        </Link>
        
        <article className="bg-white rounded-lg shadow-xl p-8">
          <header className="mb-12">
            <h1 className="text-4xl font-black text-gray-900 mb-6">
              Building a Strong Safety Culture
            </h1>
            <div className="flex gap-4 text-sm text-gray-600 mb-6">
              <span>November 26, 2024</span>
              <span>•</span>
              <span>5 min read</span>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed">
              A strong safety culture is the foundation of any successful transportation operation. 
              Learn how to build and maintain a culture where safety is everyone's priority.
            </p>
          </header>

          <section className="mb-12">
            <h2 className="text-3xl font-black text-gray-900 mb-6">Elements of a Strong Safety Culture</h2>
            
            <h3 className="text-2xl font-bold text-[#40CBB5] mb-4">Leadership Commitment</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Safety culture starts at the top. Leadership must demonstrate their commitment through:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>Active participation in safety programs</li>
              <li>Regular safety communications</li>
              <li>Investment in safety resources</li>
              <li>Recognition of safe behaviors</li>
            </ul>

            <h3 className="text-2xl font-bold text-[#40CBB5] mb-4">Employee Engagement</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              When employees are actively engaged in safety programs, results improve dramatically:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>Safety committee participation</li>
              <li>Peer-to-peer observations</li>
              <li>Near-miss reporting</li>
              <li>Safety suggestion programs</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-black text-gray-900 mb-6">Communication and Training</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Effective safety communication includes:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>Regular safety meetings and briefings</li>
              <li>Clear safety policies and procedures</li>
              <li>Ongoing training programs</li>
              <li>Open-door policies for safety concerns</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-black text-gray-900 mb-6">Measuring Safety Culture</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Key performance indicators for safety culture include:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>Employee safety perception surveys</li>
              <li>Safety meeting attendance</li>
              <li>Near-miss reporting rates</li>
              <li>Safety suggestion implementation</li>
              <li>Incident rates and severity</li>
            </ul>
          </section>

          <footer className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-3xl font-black text-gray-900 mb-6">Making Safety Culture Sustainable</h2>
            <p className="text-gray-700 leading-relaxed">
              Building a strong safety culture is an ongoing process that requires consistent effort and 
              commitment. When done right, it becomes self-sustaining as employees at all levels embrace 
              their role in maintaining a safe operation. The result is fewer incidents, lower costs, 
              and a more engaged workforce.
            </p>
          </footer>
        </article>
      </div>
    </div>
  );
};

export default SafetyCulture;