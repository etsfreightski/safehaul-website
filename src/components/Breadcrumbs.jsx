import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Schema.org breadcrumb data
  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": pathnames.map((name, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": name.charAt(0).toUpperCase() + name.slice(1).replace(/-/g, ' '),
      "item": `${window.location.origin}/${pathnames.slice(0, index + 1).join('/')}`
    }))
  };

  return (
    <nav className="bg-gray-50 py-3 mb-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center space-x-2 text-sm">
          <Link to="/" className="text-[#40CBB5] hover:text-[#35a996]">
            Home
          </Link>

          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;

            return (
              <React.Fragment key={name}>
                <span className="text-gray-500">/</span>
                {isLast ? (
                  <span className="text-gray-700">
                    {name.charAt(0).toUpperCase() + name.slice(1).replace(/-/g, ' ')}
                  </span>
                ) : (
                  <Link
                    to={routeTo}
                    className="text-[#40CBB5] hover:text-[#35a996]"
                  >
                    {name.charAt(0).toUpperCase() + name.slice(1).replace(/-/g, ' ')}
                  </Link>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
      
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbList)}
      </script>
    </nav>
  );
};

export default Breadcrumbs;
