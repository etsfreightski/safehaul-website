import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const BlogPostSchema = ({ 
  title,
  description,
  publishDate,
  modifiedDate,
  author = "Safe Haul Team",
  imageUrl = "https://safehaulsite.netlify.app/images/blog-default.jpg",
  url
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "image": imageUrl,
    "author": {
      "@type": "Organization",
      "name": author,
      "url": "https://safehaulsite.netlify.app"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Safe Haul",
      "logo": {
        "@type": "ImageObject",
        "url": "https://safehaulsite.netlify.app/images/logo.png"
      }
    },
    "datePublished": publishDate,
    "dateModified": modifiedDate || publishDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

BlogPostSchema.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  publishDate: PropTypes.string.isRequired,
  modifiedDate: PropTypes.string,
  author: PropTypes.string,
  imageUrl: PropTypes.string,
  url: PropTypes.string.isRequired
};

export default BlogPostSchema;
