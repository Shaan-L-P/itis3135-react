import React, { useEffect, useState } from 'react';

export default function SiteHeader() {
  const [headerMarkup, setHeaderMarkup] = useState('');

  useEffect(() => {
    let isMounted = true;

    fetch(`${import.meta.env.BASE_URL}components/header.html`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Unable to load header component: ${response.status}`);
        }
        return response.text();
      })
      .then((html) => {
        if (isMounted) setHeaderMarkup(html);
      })
      .catch((error) => console.error(error));

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div
      className="shared-header"
      dangerouslySetInnerHTML={{ __html: headerMarkup }}
    />
  );
}
