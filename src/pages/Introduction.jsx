const bridgePhoto = 'https://raw.githubusercontent.com/Shaan-L-P/shaan-l-p.github.io/main/itis3135/images/brooklyn-bridge.jpg';

export default function Introduction() {
  return (
    <>
      <h6 className="student-name">Shaan Patel | Silly Platypus</h6>

      <main>
        <h2>Introduction</h2>

        <figure className="profile-figure">
          <img
            className="profile-image"
            src={bridgePhoto}
            alt="Shaan Patel on the Brooklyn Bridge in New York City"
          />
          <figcaption>Brooklyn Bridge, NYC Summer 2025</figcaption>
        </figure>

        <p>
          <strong>Personal Background:</strong> I am Shaan Patel, a student at UNC Charlotte studying Computer Science with a concentration in Cybersecurity.
        </p>

        <p>
          <strong>Professional Background:</strong> I am interested in cybersecurity, ethical hacking, and learning how technology can be used to protect people and organizations. I have experience working with children as a Youth Development Leader at the YMCA, where I helped supervise groups and maintain a safe environment.
        </p>

        <p>
          <strong>Academic Background:</strong> I am studying Computer Science at UNC Charlotte and focusing on cybersecurity. My coursework has helped me build skills in programming, databases, and technology.
        </p>

        <h3>Computer and Work Information</h3>

        <p><strong>Primary Work Computer:</strong> MacBook Pro.</p>
        <p><strong>Primary Work Location:</strong> Home or campus, depending on the assignment.</p>
        <p><strong>Alternate Computer:</strong> Campus computers when needed.</p>

        <h3>Courses</h3>
        <p><strong>Courses I'm Taking:</strong></p>

        <ol>
          <li>
            ITIS 3135: Web Application
            <ol><li>Learning to create and develop websites using HTML, CSS, and other web technologies.</li></ol>
          </li>
          <li>
            ITSC 2181: Intro to Computer Systems
            <ol><li>Learning about computer systems, hardware, software, and how computers operate.</li></ol>
          </li>
          <li>
            ITSC 3688: CS and AI: Ethics, Society, Communication
            <ol><li>Exploring the ethical, social, and communication challenges connected to computing and artificial intelligence.</li></ol>
          </li>
          <li>
            MATH 2164: Matrices and Linear Algebra
            <ol><li>Studying matrices, linear equations, and mathematical concepts used in computing and other fields.</li></ol>
          </li>
          <li>
            ENGL 3081: Authors, Pop Culture, and Genre Studies
            <ol><li>Exploring literature, popular culture, and different genres through reading, discussion, and writing.</li></ol>
          </li>
        </ol>

        <h3>Interests</h3>
        <p>
          I enjoy cybersecurity, technology, drawing, and electronic music. I also enjoy watching animated shows, including <em>Invincible</em>, and listening to artists such as Bunii.
        </p>

        <blockquote>
          “You will face many defeats in life, but never let yourself be defeated.”
          <span className="quote-credit">- Maya Angelou</span>
        </blockquote>
      </main>
    </>
  );
}
