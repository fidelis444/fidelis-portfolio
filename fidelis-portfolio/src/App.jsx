
import { useEffect } from 'react';
import profilePhoto from './assets/profile.png';
import './App.css';

function App() {
  // Scroll-triggered reveal animation
  useEffect(() => {
    const sections = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="portfolio">

      {/* Navigation */}
      <nav className="navbar">
        <a href="#home" className="logo">
          Fidelis<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certificates">Certificates</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="hero reveal">
        <div className="hero-content">
          <p className="hero-greeting">Hello, welcome to my portfolio!</p>

          <h1>
            Hi, I'm <span>Fidelis Ochieng</span>
          </h1>

          <h2>Software Engineering Student</h2>

          <p>
            I am a passionate software engineering student interested in
            building useful, creative, and user-friendly applications.
            I enjoy learning new technologies and turning ideas into
            practical software solutions.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="github-button">
              View My Projects
            </a>
            

            <a
             href="/Fidelis-Ochieng-CV.pdf"
             download="Fidelis-Ochieng-CV.pdf"
             className="github-button"
             >
              Download My CV
            </a>

            <a href="#contact" className="github-button">
              Contact Me
            </a>

          </div>
        </div>

        <div className="profile-card">
          <img
            src={profilePhoto}
            alt="Fidelis Ochieng"
            className="profile-photo"
          />

          <h3>Fidelis Ochieng</h3>

          <p>Software Engineering Student</p>

          <p>USIU-Africa</p>

          <p>Nairobi, Kenya</p>

          <div className="profile-status">
            <span className="status-dot"></span>
            Open to Internship Opportunities
          </div>

          <div className="profile-details">
            <a
              href="https://github.com/fidelis444"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/fidelis-ochieng-8a9b1b338"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section reveal">
        <div className="section-heading">
          <p className="section-subtitle">Get to know me</p>
          <h2>About Me</h2>
        </div>

        <div className="about-content">
          <p>
            I am a second-year Software Engineering student at USIU-Africa
            with an interest in software development, web development,
            mobile application development, and database systems.
          </p>

          <p>
            Through my academic projects, I have gained practical experience
            in programming, designing application interfaces, working with
            databases, and solving problems using technology.
          </p>

          <p>
            I am eager to gain industry experience through an internship
            where I can improve my technical skills, learn from experienced
            developers, and contribute to real-world projects.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section reveal">
        <div className="section-heading">
          <p className="section-subtitle">What I work with</p>
          <h2>My Skills</h2>
        </div>

        <div className="skills-grid">
          <div className="skill-card">
            <h3>Java</h3>
            <p>Object-oriented programming and Android development.</p>
          </div>

          <div className="skill-card">
            <h3>JavaScript</h3>
            <p>Building interactive web applications.</p>
          </div>

          <div className="skill-card">
            <h3>React</h3>
            <p>Creating reusable components and user interfaces.</p>
          </div>

          <div className="skill-card">
            <h3>React Native</h3>
            <p>Developing mobile application interfaces.</p>
          </div>

          <div className="skill-card">
            <h3>HTML & CSS</h3>
            <p>Designing and styling responsive websites.</p>
          </div>

          <div className="skill-card">
            <h3>SQL</h3>
            <p>Working with databases and structured information.</p>
          </div>

          <div className="skill-card">
            <h3>Android Development</h3>
            <p>Building Android applications using Java and XML.</p>
          </div>

          <div className="skill-card">
            <h3>Problem Solving</h3>
            <p>Analysing problems and developing practical solutions.</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section reveal">
        <div className="section-heading">
          <p className="section-subtitle">Some of my work</p>
          <h2>My Projects</h2>
        </div>

        <div className="projects-grid">

          <div className="project-card">
            <h3>Food Ordering App</h3>

            <p>
              An Android application that allows users to browse food items,
              search for meals, view prices, and manage their orders.
            </p>

            <div className="project-tech">
              <span>Java</span>
              <span>XML</span>
              <span>Android</span>
            </div>

            <a
              href="https://github.com/fidelis444"
              target="_blank"
              rel="noreferrer"
              className="github-button"
            >
              View on GitHub
            </a>
          </div>

          <div className="project-card">
            <h3>Machine Learning Comparison</h3>

            <p>
              A Python project comparing machine learning algorithms,
              including Logistic Regression, KNN, Decision Trees,
              Naive Bayes, LDA, and SVM.
            </p>

            <div className="project-tech">
              <span>Python</span>
              <span>Scikit-learn</span>
              <span>Matplotlib</span>
            </div>

            <a
              href="https://github.com/fidelis444"
              target="_blank"
              rel="noreferrer"
              className="github-button"
            >
              View on GitHub
            </a>
          </div>

          <div className="project-card">
            <h3>Fashion Store Website</h3>

            <p>
              A fashion shopping website concept featuring product
              browsing, categories, and a user-friendly shopping interface.
            </p>

            <div className="project-tech">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>

            <a
              href="https://github.com/fidelis444"
              target="_blank"
              rel="noreferrer"
              className="github-button"
            >
              View on GitHub
            </a>
          </div>

        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="certificates-section reveal">
        <div className="section-heading">
          <p className="section-subtitle">My learning journey</p>
          <h2>Certificates & Training</h2>
        </div>

        <div className="certificates-grid">
          <div className="certificate-card">
            <h3>Introduction to IoT</h3>
            <p>Cisco Networking Academy</p>
          </div>

          <div className="certificate-card">
            <h3>Introduction to Networking</h3>
            <p>Cisco Networking Academy</p>
          </div>

          <div className="certificate-card">
            <h3>Transformative Leadership Training</h3>
            <p>Completed leadership training and community development activities.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section reveal">
        <div className="section-heading">
          <p className="section-subtitle">Let's connect</p>
          <h2>Contact Me</h2>
        </div>

        <p>
          I am interested in internship opportunities, software development,
          and collaborating on technology projects.
        </p>

        <div className="contact-details">
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:ochiengfidelis96@gmail.com">
              ochiengfidelis96@gmail.com
            </a>
          </p>

          <p>
            <strong>Location:</strong> Nairobi, Kenya
          </p>

          <p>
            <strong>University:</strong> USIU-Africa
          </p>
        </div>

        <div className="contact-buttons">
          <a
            href="mailto:ochiengfidelis96@gmail.com"
            className="github-button"
          >
            Send Me an Email
          </a>

          <a
            href="https://linkedin.com/in/fidelis-ochieng-8a9b1b338"
            target="_blank"
            rel="noreferrer"
            className="github-button"
          >
            Connect on LinkedIn
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Fidelis Ochieng. All rights reserved.
        </p>

        <a
          href="https://github.com/fidelis444"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </footer>

    </div>
  );
}

export default App;
