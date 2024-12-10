import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Function to format breadcrumb names
  const formatName = (name) => {
    return name
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  // Generate breadcrumb data
  const breadcrumbs = [
    {
      name: 'Home',
      path: '/',
      position: 1
    },
    ...pathnames.map((name, index) => ({
      name: formatName(name),
      path: `/${pathnames.slice(0, index + 1).join('/')}`,
      position: index + 2
    }))
  ];

  // Schema.org breadcrumb data
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map(({ name, path, position }) => ({
      "@type": "ListItem",
      "position": position,
      "name": name,
      "item": `${window.location.origin}${path}`
    }))
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <nav 
        aria-label="Breadcrumb" 
        className="bg-gray-50 py-3 mb-6"
      >
        <div className="max-w-6xl mx-auto px-4">
          <ol className="flex items-center space-x-2 text-sm" role="list">
            {breadcrumbs.map((item, index) => {
              const isLast = index === breadcrumbs.length - 1;

              return (
                <li 
                  key={item.path}
                  className="flex items-center"
                >
                  {index > 0 && (
                    <span 
                      className="mx-2 text-gray-400" 
                      aria-hidden="true"
                    >
                      /
                    </span>
                  )}
                  
                  {isLast ? (
                    <span 
                      className="text-gray-700" 
                      aria-current="page"
                    >
                      {item.name}
                    </span>
                  ) : (
                    <Link
                      to={item.path}
                      className="text-[#40CBB5] hover:text-[#35a996] transition-colors"
                      aria-label={`Go to ${item.name}`}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </nav>
    </>
  );
};

export default Breadcrumbs;
