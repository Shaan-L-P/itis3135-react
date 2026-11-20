import React from 'react';

const primaryLinks = [
  { href: '/itis3135-react/#/', label: 'Home' },
  { href: '/itis3135-react/#/about', label: 'About' },
  { href: '/itis3135-react/#/contract', label: 'Contract' },
  { href: '/itis3135-react/#/introduction', label: 'Introduction' },
];

export default function SiteHeader() {
  return (
    <header className="site-header">
      <h1>Shaan Patel's Silly Platypus | ITIS3135</h1>

      {/* These class names apply shared navigation layout and responsive styling. */}
      <nav className="main-nav" aria-label="Main navigation">
        {primaryLinks.map(({ href, label }) => (
          <a key={href} href={href}>{label}</a>
        ))}
      </nav>

      {/* This span separates external project links without creating another navigation item. */}
      <nav className="secondary-nav" aria-label="Additional project navigation">
        <a href="https://webpages.charlotte.edu/spate338/itis3135/stuff/My%20BAD%20pAgE%20%F0%9F%A4%A1.htm">
          CRAPpy Page
        </a>
        <span aria-hidden="true"> | </span>
        <a href="https://webpages.charlotte.edu/spate338/itis3135/hobby/index.html">
          Hobby Site
        </a>
        <span aria-hidden="true"> | </span>
        <a href="https://webpages.charlotte.edu/spate338/itis3135/sillyplatypus/index.html">
          Mascot Company
        </a>
      </nav>
    </header>
  );
}
