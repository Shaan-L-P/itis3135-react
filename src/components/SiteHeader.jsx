import { NavLink } from 'react-router-dom';

const primaryLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/contract', label: 'Contract' },
  { to: '/introduction', label: 'Introduction' },
];

export default function SiteHeader() {
  return (
    <header className="site-header">
      <h1>Shaan Patel's Silly Platypus | ITIS3135</h1>

      <nav className="main-nav" aria-label="Main navigation">
        {primaryLinks.map(({ to, label, end }) => (
          <NavLink key={to} to={to} end={end}>
            {label}
          </NavLink>
        ))}
      </nav>

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
