import React from 'react';
const logo = 'https://raw.githubusercontent.com/Shaan-L-P/shaan-l-p.github.io/main/itis3135/images/silly-platypus-logo.jpg';

export default function Home() {
  return (
    <main className="home-page">
      <h2 className="home-heading">Home</h2>

      <img className="home-logo" src={logo} alt="Cartoon drawing of a brown platypus with a gray bill" />

      <p>Welcome to my webpage for ITIS3135!</p>

      <p>
        This site brings together my course work and the web projects I have
        developed throughout the semester. Use the navigation above to explore
        my introduction, course contract, and background.
      </p>

      <p className="home-profile-links">
        <a href="https://webpages.charlotte.edu/spate338/">Visit My UNC Charlotte Webspace</a>
      </p>
    </main>
  );
}
