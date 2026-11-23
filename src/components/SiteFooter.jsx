import React, { useEffect, useState } from 'react';

export default function SiteFooter() {
  const [footerMarkup, setFooterMarkup] = useState('');

  useEffect(() => {
    let isMounted = true;

    fetch(`${import.meta.env.BASE_URL}components/footer.html`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Unable to load footer component: ${response.status}`);
        }
        return response.text();
      })
      .then((html) => {
        if (isMounted) setFooterMarkup(html);
      })
      .catch((error) => console.error(error));

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div
      className="shared-footer"
      dangerouslySetInnerHTML={{ __html: footerMarkup }}
    />
  );
}
