import React, { useRef } from 'react';
import portrait from './Arthur Morgan.jpeg';
import './App.css';
import IconButton from '@mui/material/IconButton';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import PersonIcon from '@mui/icons-material/Person';
import DescriptionIcon from '@mui/icons-material/Description';
import WorkIcon from '@mui/icons-material/Work';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';

function App() {
  // Create refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const resumeRef = useRef(null);
  const contactRef = useRef(null);

  // Scroll to section helper
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      {/* Top navigation bar */}
      <div className="top-bar" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center', // Center the nav bar content
        background: '#e0f7f1',
        padding: '0.5rem 2rem',
        borderBottom: '1px solid #b2dfdb'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div onClick={() => scrollToSection(homeRef)} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}>
            <IconButton aria-label="home" size="small"><HomeIcon /></IconButton>
            <span>Home</span>
          </div>
          <div onClick={() => scrollToSection(aboutRef)} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}>
            <IconButton aria-label="about me" size="small"><PersonIcon /></IconButton>
            <span>About</span>
          </div>
          <div onClick={() => scrollToSection(portfolioRef)} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}>
            <IconButton aria-label="portfolio" size="small"><WorkIcon /></IconButton>
            <span>Portfolio</span>
          </div>
          <div onClick={() => scrollToSection(resumeRef)} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}>
            <IconButton aria-label="resume" size="small"><DescriptionIcon /></IconButton>
            <span>Resume</span>
          </div>
          <div onClick={() => scrollToSection(contactRef)} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}>
            <IconButton aria-label="contact" size="small"><EmailIcon /></IconButton>
            <span>Contact</span>
          </div>
        </div>
      </div>
      {/* Main content */}
      <div style={{ padding: '2rem' }}>
        <section ref={homeRef} className="section-home" style={{ minHeight: '80vh', paddingBottom: 40 }}>
          <header className="App-header">
            <div className="text-section">
              <h2>Home</h2>
              <h3>Welcome to my portfolio site!</h3>
              <p>
                This is the home section. Add a welcome message or introduction here.
              </p>
            </div>
            <img src={portrait} className="App-logo" alt="Portrait" />
          </header>
        </section>
        <hr className="section-divider" />
        <section ref={aboutRef} className="section-about" style={{ minHeight: '80vh', paddingBottom: 40 }}>
          <header className="App-header">
            <div className="text-section">
              <h2>About</h2>
              <h3>Software Engineer</h3>
              <p>
                This is the about section. Add more details about yourself, your role, and any other relevant information here.
              </p>
            </div>
          </header>
        </section>
        <hr className="section-divider" />
        <section ref={portfolioRef} className="section-portfolio" style={{ minHeight: '80vh', paddingBottom: 40 }}>
          <h2>Portfolio</h2>
          <iframe
            src="/portfolio.html"
            title="Portfolio"
            style={{ width: '100%', height: '80vh', border: 'none' }}
          />
        </section>
        <hr className="section-divider" />
        <section ref={resumeRef} className="section-resume" style={{ minHeight: '80vh', paddingBottom: 40 }}>
          <h2>Resume</h2>
          <iframe
            src="/resume.html"
            title="Resume"
            style={{ width: '100%', height: '80vh', border: 'none' }}
          />
        </section>
        <hr className="section-divider" />
        <section ref={contactRef} className="section-contact" style={{ minHeight: '40vh', paddingBottom: 40 }}>
          <h2>Contact</h2>
          <p>Email: <a href="mailto:tjsubaric@gmail.com">tjsubaric@gmail.com</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/thomas-subaric/" target="_blank" rel="noopener noreferrer">linkedin.com/in/thomas-subaric</a></p>
          <p>GitHub: <a href="https://github.com/tsubaric" target="_blank" rel="noopener noreferrer">github.com/tsubaric</a></p>
        </section>
      </div>
    </div>
  );
}

export default App;