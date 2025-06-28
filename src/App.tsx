import React from 'react';
import './App.css';

function App() {
  return (
    <div className="portfolio">
      <header className="header">
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="hero">
          <div className="hero-content">
            <h1>Your Name</h1>
            <p>Frontend Developer | UI/UX Enthusiast</p>
          </div>
        </section>

        <section id="about">
          <h2>About Me</h2>
          <p>
            I am a passionate developer with a love for creating beautiful and functional web experiences. I specialize in React and modern JavaScript, and I'm always looking to learn new things.
          </p>
        </section>

        <section id="projects">
          <h2>My Projects</h2>
          <div className="project-grid">
            <div className="project-card">
              <h3>Project One</h3>
              <p>A brief description of the project.</p>
              <a href="#">View Project</a>
            </div>
            <div className="project-card">
              <h3>Project Two</h3>
              <p>A brief description of the project.</p>
              <a href="#">View Project</a>
            </div>
            <div className="project-card">
              <h3>Project Three</h3>
              <p>A brief description of the project.</p>
              <a href="#">View Project</a>
            </div>
          </div>
        </section>

        <section id="contact">
          <h2>Get In Touch</h2>
          <p>I'm currently available for freelance work. Drop me a line!</p>
          <a href="mailto:your.email@example.com" className="cta-button">Email Me</a>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2025 Your Name. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;