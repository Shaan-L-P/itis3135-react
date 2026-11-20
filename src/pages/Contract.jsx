const logo = 'https://raw.githubusercontent.com/Shaan-L-P/shaan-l-p.github.io/main/itis3135/images/silly-platypus-logo.jpg';

export default function Contract() {
  return (
    <main>
      <h2>Course Contract</h2>

      <img className="page-logo contract-logo" src={logo} alt="Silly Platypus logo" />

      <p className="contract-text">
        I, Shaan Patel, agree to abide by the terms of the course contract
        in my Fall 2026, ITIS 3135, Web-Based Application Design and
        Development class with my instructor, Professor von Briesen.
      </p>

      <p className="contract-text">
        I understand that all work that I do on publicly available online
        tools will be available to the world and will not put information
        there that is inappropriate for schoolwork, or that I wish to keep
        private.
      </p>

      <p className="contract-text">
        I also understand that it is my work that counts for attendance,
        not logins or simply showing up for class. As such, failure to turn
        in assignments may show as absences.
      </p>

      <p className="contract-text">
        I understand that given the structure and content of this class,
        it is possible to find many examples online or even view my
        classmates' code directly. I swear that I will only use these
        resources to learn and will not copy and paste code except where
        I have properly given credit, and never from my classmates.
      </p>

      <p className="signature">
        Signed: <i>Shaan Patel, September 5, 2026</i>
      </p>
    </main>
  );
}
