import { Link } from 'react-router-dom';

const DOTCompliance = () => {
  return (
    <div className="bg-gray-200 min-h-screen pt-8">
      <div className="max-w-4xl mx-auto px-4 pb-16">
        <Link to="/blog" className="text-[#40CBB5] font-bold mb-8 inline-block hover:underline">
          ← Back to Blog
        </Link>
        
        <article className="bg-white rounded-lg shadow-xl p-8">
          <header className="mb-12">
            <h1 className="text-4xl font-black text-gray-900 mb-6">
              DOT Compliance: Beyond the Basics
            </h1>
            <div className="flex gap-4 text-sm text-gray-600 mb-6">
              <span>November 24, 2024</span>
              <span>•</span>
              <span>6 min read</span>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed">
              Understanding DOT compliance is crucial for fleet safety and operational success. 
              This guide explores advanced strategies for maintaining compliance and improving safety ratings.
            </p>
          </header>

          <section className="mb-12">
            <h2 className="text-3xl font-black text-gray-900 mb-6">Key Components of DOT Compliance</h2>
            
            <h3 className="text-2xl font-bold text-[#40CBB5] mb-4">Driver Qualification Files</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Maintaining complete and accurate driver qualification files is fundamental to DOT compliance. 
              Each file must contain specific documents, including MVR reports, medical certificates, and employment history.
              Regular audits of these files help prevent compliance issues before they arise.
            </p>

            <h3 className="text-2xl font-bold text-[#40CBB5] mb-4">Hours of Service Compliance</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              ELD mandates have transformed hours of service compliance. Understanding proper use of personal conveyance, 
              yard moves, and unidentified driving time is crucial for maintaining accurate records.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-black text-gray-900 mb-6">Vehicle Maintenance and Inspections</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              A robust maintenance program goes beyond basic requirements. Key elements include:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>Systematic pre-trip and post-trip inspection procedures</li>
              <li>Regular preventive maintenance schedules</li>
              <li>Detailed documentation of all repairs and maintenance activities</li>
              <li>Annual inspection compliance</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-black text-gray-900 mb-6">Drug and Alcohol Testing Programs</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Maintaining a compliant drug and alcohol testing program requires attention to:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>Random testing pools and selection processes</li>
              <li>Post-accident testing procedures</li>
              <li>Reasonable suspicion training for supervisors</li>
              <li>Clear documentation and record-keeping</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-black text-gray-900 mb-6">Best Practices for Maintaining Compliance</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Success in DOT compliance requires a systematic approach:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>Regular internal audits of all compliance areas</li>
              <li>Ongoing driver training and education</li>
              <li>Clear policies and procedures</li>
              <li>Technology integration for better record-keeping</li>
            </ul>
          </section>

          <footer className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-3xl font-black text-gray-900 mb-6">Conclusion</h2>
            <p className="text-gray-700 leading-relaxed">
              DOT compliance isn't just about meeting minimum requirements—it's about building a culture of safety 
              and responsibility. By implementing these advanced strategies, carriers can maintain excellent 
              safety ratings and reduce their risk of violations and accidents.
            </p>
          </footer>
        </article>
      </div>
    </div>
  );
};

export default DOTCompliance;