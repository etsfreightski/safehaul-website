import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const blogPosts = [
  {
    id: 'winter-safety-guide-2024',
    title: 'Winter Safety Guide 2024: Comprehensive Analysis of Technology-Driven Risk Prevention',
    excerpt: 'An in-depth analysis of winter safety technologies and their impact on transportation claims prevention, featuring comprehensive data analysis and ROI studies from 2019-2023.',
    date: 'December 26, 2024',
    readTime: '25 min read'
  },
  {
    id: 'third-party-adjuster-advantage-2024',
    title: 'The Strategic Advantage of Carrier-Experienced Third-Party Claims Adjusters: A 2024 Analysis',
    excerpt: 'An in-depth analysis of how third-party claims adjusters with carrier-side experience deliver superior outcomes in transportation claims management, backed by research and industry data.',
    date: 'December 21, 2024',
    readTime: '25 min read'
  },
  {
    id: 'eld-claims-analysis-2024',
    title: 'The Impact of ELD Data on Transportation Claims: A 2024 Analysis',
    excerpt: 'An in-depth analysis of how Electronic Logging Device (ELD) data is revolutionizing transportation claims management, improving accuracy, and reducing fraud in 2024.',
    date: 'December 21, 2024',
    readTime: '20 min read'
  },
  {
    id: 'comprehensive-guide',
    title: 'Comprehensive Guide to Transportation Safety and Claims',
    excerpt: 'Understanding the interplay between safety measures and liability in transportation.',
    date: 'November 23, 2024',
    readTime: '8 min read'
  },
  {
    id: 'dot-compliance',
    title: 'DOT Compliance: Beyond the Basics',
    excerpt: 'Essential strategies for maintaining and improving your safety rating.',
    date: 'November 24, 2024',
    readTime: '6 min read'
  },
  {
    id: 'claims-management',
    title: 'The Art of Claims Management',
    excerpt: 'How professional claims handling can save your fleet millions.',
    date: 'November 25, 2024',
    readTime: '7 min read'
  },
  {
    id: 'safety-culture',
    title: 'Building a Strong Safety Culture',
    excerpt: 'Transform your fleet operations with a comprehensive safety program.',
    date: 'November 26, 2024',
    readTime: '5 min read'
  },
  {
    id: 'comprehensive-transportation-study',
    title: 'Transportation Claims Management: A Comprehensive Analysis',
    excerpt: 'An in-depth research study on modern challenges and solutions in transportation claims.',
    date: 'November 27, 2024',
    readTime: '15 min read'
  },
  {
    id: 'comprehensive-analysis',
    title: 'Transportation Safety and Claims Management: A Comprehensive Analysis',
    excerpt: 'An in-depth academic analysis of modern safety and claims management methodologies, including implementation frameworks and statistical validation.',
    date: 'November 27, 2024',
    readTime: '45 min read'
  },
  {
    id: 'mishandled-claims-costs',
    title: 'The True Cost of Mishandled Claims: Why Expert Claims Management is Essential',
    excerpt: 'A comprehensive analysis of how mishandled insurance claims impact carriers, from towing costs to regulatory compliance, with data-driven insights and industry statistics.',
    date: 'December 5, 2024',
    readTime: '15 min read'
  }
];

const BlogPage = () => {
  return (
    <>
      <Helmet>
        <title>Safe Haul Blog - Expert Transportation Safety & Claims Management Insights</title>
        <meta name="description" content="Stay informed with Safe Haul's expert insights on transportation safety, DOT compliance, claims management, and fleet operations best practices." />
        <meta name="keywords" content="transportation safety, DOT compliance, claims management, fleet safety, transportation blog, Safe Haul" />
        <meta property="og:title" content="Safe Haul Blog - Transportation Safety & Claims Management" />
        <meta property="og:description" content="Expert insights on transportation safety, DOT compliance, and claims management for fleet operators." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://safehaulsite.netlify.app/blog" />
      </Helmet>

      <div className="bg-gray-200 min-h-screen pt-8">
        <div className="max-w-4xl mx-auto px-4 pb-16">
          <h1 className="text-4xl font-black text-gray-900 mb-8">Safe Haul Blog</h1>
          <div className="grid gap-6">
            {blogPosts.map(post => (
              <Link 
                key={post.id} 
                to={`/blog/${post.id}`}
                className="bg-white rounded-lg shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300"
              >
                <article className="space-y-2">
                  <h2 className="text-2xl font-black text-gray-900 hover:text-[#40CBB5] transition-colors">
                    {post.title}
                  </h2>
                  <div className="flex gap-4 text-sm text-gray-600">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <span className="inline-block text-[#40CBB5] font-bold hover:underline">
                    Read more →
                  </span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;