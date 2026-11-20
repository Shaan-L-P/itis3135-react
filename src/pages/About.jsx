const logo = 'https://raw.githubusercontent.com/Shaan-L-P/shaan-l-p.github.io/main/itis3135/images/silly-platypus-logo.jpg';

export default function About() {
  return (
    <main>
      <h2>About</h2>

      <img className="page-logo about-logo" src={logo} alt="Silly Platypus logo" />

      <h3>Where This Is All Headed</h3>
      <p>
        By this point in the semester I've built out several separate but
        connected corners of the web, each one serving a different purpose
        but all tied back together through links. Rather than cramming
        everything into one page, the goal has been to keep personal,
        academic, and professional content cleanly separated while still
        making it easy to move between them.
      </p>

      <p>
        This course site in particular exists to document that process. It's
        where my coursework, assignments, and reflections for ITIS 3135
        live, and it links out to my other projects so anyone visiting can
        see how the whole structure fits together.
      </p>

      <h3>Tools and Resources</h3>
      <p>
        Throughout the development process, I've used Visual Studio Code
        (VS Code) as my primary code editor and Emmet to speed up writing
        HTML and CSS. These tools make it easier to organize code and build
        pages more efficiently. I also use{' '}
        <a href="https://divonbriesen.github.io/teaching/" target="_blank" rel="noreferrer">
          Professor von Briesen's teaching site
        </a>{' '}
        as a resource for course materials, examples, and assignment guidance.
      </p>

      <h3>My Websites and Projects</h3>
      <p>
        The following sites and projects make up the different parts of my
        web presence and coursework:
      </p>

      <ul className="project-list">
        <li>
          <strong>Personal Home Page:</strong> Sits at the root of my
          webspace account and works as my general landing page and
          portfolio, separate from any single class.
        </li>
        <li>
          <strong>Course Site:</strong> Lives inside the <code>itis3135</code>
          {' '}folder and holds everything built specifically for this class,
          including my introduction, assignments, and reflections.
        </li>
        <li>
          <strong>Design Firm Site:</strong> A separate site inside its
          own folder, built to look and feel like a real freelance design
          business rather than a class assignment, with its own distinct
          branding and layout.
        </li>
        <li>
          <strong>CRAPpy Page:</strong> A deliberately poorly designed
          page that demonstrates common design problems and provides
          examples of what to avoid when building a website.
        </li>
        <li>
          <strong>Whimsical Product Company Site:</strong> A creative
          website concept for a fictional product company, giving me
          an opportunity to experiment with branding and a more playful
          design.
        </li>
        <li>
          <strong>Client Project Site:</strong> A website project focused
          on meeting a client's needs and presenting information in
          a useful and professional way.
        </li>
      </ul>
    </main>
  );
}
