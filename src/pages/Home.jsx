import React from 'react';
const logo = 'https://raw.githubusercontent.com/Shaan-L-P/shaan-l-p.github.io/main/itis3135/images/silly-platypus-logo.jpg';

const profiles = [
  { label: 'Webspace', href: 'https://webpages.charlotte.edu/spate338/', external: true },
  { label: 'GitHub.com', href: 'https://github.com/Shaan-L-P/shaan-l-p.github.io', external: true },
  { label: 'Github.io', href: 'https://shaan-l-p.github.io/', external: true },
  { label: 'FreeCodeCamp', href: 'https://www.freecodecamp.org/shaanpateluncc', external: true },
  { label: 'Codecademy', href: 'https://www.codecademy.com/profiles/ShaanPatelUNCC', external: true },
];

export default function Home() {
  return (
    <main className="home-page">
      <h2>Home</h2>

      <img className="home-logo" src={logo} alt="Cartoon drawing of a brown platypus with a gray bill" />

      <p>Welcome to my webpage for ITIS3135!</p>

      <ul className="home-profile-links">
        {profiles.map(({ label, href, external }) => (
          <li key={label}>
            <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
