import React, { useRef } from 'react';
import portrait from './Arthur Morgan.jpeg';
import './App.css';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description'; // Add this import

function App() {
  // Create refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
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
        background: '#2e3a59',
        padding: '0.5rem 2rem',
        borderBottom: '1px solidrgb(14, 15, 82)'
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
          {/* Removed Resume Tab */}
          <div onClick={() => scrollToSection(contactRef)} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}>
            <IconButton aria-label="contact" size="small"><EmailIcon /></IconButton>
            <span>Contact</span>
          </div>
        </div>
      </div>
      <div style={{ padding: '2rem' }}>
        <section
          ref={homeRef}
          className="section-home"
          style={{
            minHeight: '80vh',
            paddingBottom: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <div className="home-intro" style={{ position: 'relative' }}>
            {/* Removed top-right logo that links to resume */}
            <div className="home-subtitle">Hi! my name is</div>
            <div className="home-title">
              Tommy Subaric
              <span className="blinking-cursor" style={{
                display: 'inline-block',
                width: '18px',
                marginLeft: '2px',
                color: '#2e3a59',
                fontWeight: 400,
                fontSize: '3rem',
                verticalAlign: 'bottom'
              }}>|</span>
            </div>
            <div className="home-icons">
              <a href="https://www.linkedin.com/in/thomas-subaric/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <LinkedInIcon style={{ fontSize: 40, color: '#0077b5' }} />
              </a>
              <a href="https://github.com/tsubaric" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <GitHubIcon style={{ fontSize: 40, color: '#222' }} />
              </a>
              {/* Resume Doc Icon */}
              <a
                href="/resume.html"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Resume"
                style={{ display: 'inline-block', marginLeft: 8, verticalAlign: 'middle' }}
              >
                <DescriptionIcon style={{
                  fontSize: 40, // Match other icons
                  color: '#2e3a59',
                  // Removed background, border, borderRadius, boxShadow, and padding
                  transition: 'transform 0.2s',
                  cursor: 'pointer'
                }}
                onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.08)')}
                onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
                />
              </a>
            </div>
          </div>
        </section>
        <hr className="section-divider" />
        <section ref={aboutRef} className="section-about" style={{ minHeight: '80vh', paddingBottom: 40 }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            maxWidth: 900,
            margin: '0 auto'
          }}>
            <div className="text-section">
              <h2>About</h2>
              <h3>Software Engineer</h3>
              <p>
                Experienced in the fields of Software Engineering, Applied AI/ML, and Human-Computer Interaction. Outside of programming, I enjoy lifting weights, cooking, and watching UFC events. I'm always eager to learn new skills and technologies, so feel free to reach out regarding any software engineering related opportunities.
                Languages: C++, Python, Java, Swift, JavaScript
                Technologies: PyTorch, TensorFlow, React.js, Node.js, AWS, Docker, Git, HTML/CSS
                Engineering Experience: SWE Intern @ Apple, John Deere, Bio::Neos
                Notable Experience: Holo Reality Lab Undergraduate Researcher, University of Iowa Teaching Assistant
              </p>
            </div>
            <img
              src={portrait}
              alt="Profile"
              className="about-profile-pic"
            />
          </div>
        </section>
        <hr className="section-divider" />
        <section ref={portfolioRef} className="section-portfolio" style={{ minHeight: '80vh', paddingBottom: 40 }}>
          <h2>Portfolio</h2>
          <iframe
            src="/portfolio.html"
            title="Portfolio"
            style={{
              width: '100%',
              height: '80vh',
              border: 'none',
              background: 'transparent',
              boxShadow: 'none' // Remove any shadow/border
            }}
          />
        </section>
        <hr className="section-divider" />
        {/* Removed Resume Section */}
        <footer
          ref={contactRef}
          className="section-contact footer-contact"
          style={{
            minHeight: 'unset',
            padding: '40px 0 20px 0',
            background: 'transparent', // Changed from '#2e3a59' to transparent
            color: '#fff',
            boxShadow: 'none' // Ensure no shadow
          }}
        >
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'stretch',
            gap: '4rem',
            maxWidth: 1100,
            margin: '0 auto',
            flexWrap: 'wrap'
          }}>
            {/* Contact Me Title Column */}
            <div style={{
              flex: 1,
              minWidth: 180,
              display: 'flex',
              alignItems: 'center', // Vertically center
              justifyContent: 'flex-start',
              height: '100%'
            }}>
              <span style={{
                fontSize: '2.2rem',
                fontWeight: 700,
                color: '#fff',
                letterSpacing: 1
              }}>Contact Me</span>
            </div>
            {/* Social Media Column */}
            <div style={{ flex: 1, minWidth: 180 }}>
              <h3 style={{ color: '#fff', marginBottom: 12 }}>Socials</h3>
              <p>
                <a href="https://www.linkedin.com/in/thomas-subaric/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'underline' }}>
                  LinkedIn
                </a>
              </p>
              <p>
                <a href="https://github.com/tsubaric" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'underline' }}>
                  GitHub
                </a>
              </p>
            </div>
            {/* Resume Column */}
            <div style={{ flex: 1, minWidth: 180 }}>
              <h3 style={{ color: '#fff', marginBottom: 12 }}>My Resume</h3>
              <p>
                <a href="/resume.html" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'underline' }}>
                  View Resume
                </a>
              </p>
            </div>
            {/* Contact Info Column */}
            <div style={{ flex: 1, minWidth: 180 }}>
              <h3 style={{ color: '#fff', marginBottom: 12 }}>Contact</h3>
              <p>
                <a href="mailto:tjsubaric@gmail.com" style={{ color: '#fff', textDecoration: 'underline' }}>
                  tjsubaric@gmail.com
                </a>
              </p>
              <p>
                <span style={{ color: '#fff' }}>847-271-0993</span>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;