import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaStar } from 'react-icons/fa';

const ReviewSection = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [name, setName] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Example reviews - you can replace these with real reviews from your database
  const existingReviews = [
    {
      author: "John D.",
      rating: 5,
      text: "Safe Haul's expertise in claims management saved our fleet thousands. Their carrier-side experience made all the difference.",
      date: "2024-12-01"
    },
    {
      author: "Michael R.",
      rating: 5,
      text: "Their understanding of both carrier and adjuster perspectives helped resolve our claims faster than ever before.",
      date: "2024-11-15"
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the review to your backend
    // For now, we'll just show a success message
    setSubmitted(true);

    // Optional: Send an email notification
    window.location.href = `mailto:info@safehaulclaims.com?subject=New Review Submission&body=Name: ${name}%0D%0ARating: ${rating} stars%0D%0AReview: ${reviewText}`;
  };

  const renderStars = (value, isInteractive = false) => {
    return [...Array(5)].map((_, index) => {
      const ratingValue = index + 1;
      return (
        <FaStar
          key={index}
          className={`cursor-pointer ${
            (isInteractive ? hover || rating : value) >= ratingValue
              ? 'text-[#40CBB5]'
              : 'text-gray-300'
          }`}
          size={isInteractive ? 24 : 20}
          onClick={() => isInteractive && setRating(ratingValue)}
          onMouseEnter={() => isInteractive && setHover(ratingValue)}
          onMouseLeave={() => isInteractive && setHover(0)}
        />
      );
    });
  };

  // Calculate average rating
  const averageRating = existingReviews.reduce((acc, review) => acc + review.rating, 0) / existingReviews.length;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Safe Haul Claims and Safety Management",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "2801 Superior Dr NW",
              "addressLocality": "Rochester",
              "addressRegion": "MN",
              "postalCode": "55901",
              "addressCountry": "US"
            },
            "url": "https://safehaulsite.netlify.app",
            "telephone": "+12182032097",
            "image": "https://lh3.googleusercontent.com/p/AF1QipPKt7lGgxVbR3KLH5n_7-3kIVJvYG9nHydRF0Y=s1360-w1360-h1020",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": averageRating.toFixed(1),
              "reviewCount": existingReviews.length
            },
            "review": existingReviews.map(review => ({
              "@type": "Review",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": review.rating
              },
              "author": {
                "@type": "Person",
                "name": review.author
              },
              "reviewBody": review.text,
              "datePublished": review.date
            }))
          })}
        </script>
      </Helmet>

      <div className="bg-white rounded-lg shadow-xl p-8">
        <h2 className="text-3xl font-black text-gray-900 mb-8">Client Reviews</h2>

        {/* Existing Reviews */}
        <div className="mb-12 space-y-6">
          {existingReviews.map((review, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-2">
                <div className="flex mr-2">
                  {renderStars(review.rating)}
                </div>
                <span className="text-gray-600">{review.author}</span>
              </div>
              <p className="text-gray-700">{review.text}</p>
              <p className="text-sm text-gray-500 mt-2">{review.date}</p>
            </div>
          ))}
        </div>

        {/* Review Form */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Leave a Review</h3>
          
          <div className="mb-6">
            <a 
              href="https://g.page/r/CXoQOPQHrJPMEBM/review" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-[#4285F4] text-white px-6 py-3 rounded-lg hover:bg-[#3367D6] transition-colors mb-4"
            >
              Leave a Google Review
            </a>
            <p className="text-sm text-gray-600">
              Your Google review helps others find reliable claims management services. It will appear both on Google and our website.
            </p>
          </div>
            
          {submitted ? (
            <div className="text-green-600 p-4 bg-green-50 rounded-lg">
              Thank you for your review! It will be visible after moderation.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Your Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#40CBB5] focus:border-[#40CBB5]"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Rating</label>
                <div className="flex space-x-2">
                  {renderStars(rating, true)}
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Your Review</label>
                <textarea
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#40CBB5] focus:border-[#40CBB5]"
                  rows="4"
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-[#40CBB5] text-white px-6 py-2 rounded-lg hover:bg-[#3BB5A1] transition-colors"
              >
                Submit Review
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
