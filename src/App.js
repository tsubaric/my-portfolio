import React, { useRef } from 'react';
import portrait from './images/Arthur Morgan.jpeg';
import './App.css';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import projects from './projects.json';

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
        borderBottom: '1px solid rgb(14, 15, 82)',
        // border: '1px solid #fff', // Add white outline
        borderRadius: '18px', // Optional: Add rounded corners for the outline
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
            paddingTop: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <div className="home-intro" style={{ position: 'relative' }}>
            <div className="home-subtitle" style={{ fontSize: '2rem', fontWeight: 'bold' }}>
              <span style={{ fontSize: '2rem' }}>👋</span> Hi! My name is
            </div>
            <div className="home-title" style={{ fontSize: '3rem' }}>
              Tommy Subaric
              <span className="blinking-cursor" style={{
                display: 'inline-block',
                width: '18px',
                marginLeft: '3px',
                color: '#2e3a59',
                fontWeight: 400,
                fontSize: '4rem',
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
              <a href="/resume.html" aria-label="Resume" style={{ display: 'inline-block', marginLeft: 8, verticalAlign: 'middle' }}>
                <DescriptionIcon
                  style={{
                    fontSize: 40,
                    color: '#2e3a59',
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
            maxWidth: '95%', // Use more screen width
            margin: '0 auto',
            gap: '0px', // Add spacing between text and image
          }}>
            <div className="text-section" style={{
              flex: 4, // Increase space for the text section
              padding: '40px', // Add padding for better spacing
              paddingTop: '140px', // Add more padding to the top
            }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>About</h2>
              <h3 style={{ fontSize: '2rem', marginBottom: '20px' }}>Software Automation Engineer</h3>
              <p style={{ fontSize: '1.2rem', lineHeight: '1.8', fontWeight: 'bold' }}>
                Hi, I’m Tommy Subaric, a passionate Software Automation Engineer. I program with everything from C#, Python, JavaScript and beyond, enabling me to build scalable applications across various platforms. Whether it’s cloud environments like AWS and Azure, or frameworks such as React, and .NET, I specialize in crafting high-performance, reliable solutions. I also apply AI and machine learning to real-world problems, creating automated systems that drive efficiency and innovation. I have experience in CI/CD pipelines, Microsoft Power Platform, SAP integrations, and IT Consulting to enhance system performance. My expertise covers backend architecture, database management (SQL, MongoDB, Redis), and front-end development, giving me a well-rounded approach to building software. Beyond my technical expertise, I bring strong problem-solving skills, adaptability, and a drive for continuous improvement.
              </p>
            </div>
            <div style={{
              flex: 2, // Keep the image section smaller
              display: 'flex',
              justifyContent: 'center', // Center the image horizontally
              alignItems: 'center', // Center the image vertically
              paddingTop: '140px', // Add padding to align with text
            }}>
              <img
                src={portrait}
                alt="Profile"
                className="about-profile-pic"
              />
            </div>
          </div>
        </section>
        <hr className="section-divider" />
        <section ref={portfolioRef} className="section-portfolio" style={{ minHeight: '80vh', paddingTop: '130px', paddingBottom: 40 }}>
          <h2>Portfolio</h2>
          <div className="portfolio-grid">
            {projects.map((project, index) => (
              <Card key={index} className="portfolio-card" sx={{
                maxWidth: 345,
                backgroundColor: '#3b4a6b', // Slightly lighter blue-gray background
                border: '2px solid #fff', // White outline
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow
                borderRadius: '8px', // Rounded corners
                padding: '20px', // Internal padding
              }}>
                <CardMedia
                  component="img"
                  alt={project.title}
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" style={{ fontFamily: 'Courier New, monospace', color: '#fff', fontWeight: 'bold' }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" style={{ fontFamily: 'Courier New, monospace', color: '#fff', fontWeight: 'bold' }}>
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" style={{ fontFamily: 'Courier New, monospace', color: '#fff', fontWeight: 'bold' }}>Share</Button>
                  <Button size="small" style={{ fontFamily: 'Courier New, monospace', color: '#fff', fontWeight: 'bold' }}>Learn More</Button>
                </CardActions>
              </Card>
            ))}
          </div>
        </section>
        <hr className="section-divider" />
        {/* Removed Resume Section */}
        {/* Footer */}
        <footer ref={contactRef} className="section-contact" style={{ backgroundColor: '#2e3a59', color: '#fff', padding: '40px 20px' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between', // Spread the columns evenly
            gap: '60px', // Increase spacing between columns
            flexWrap: 'wrap', // Ensure responsiveness for smaller screens
            maxWidth: '1200px', // Limit the width for better layout
            margin: '0 auto', // Center the footer content
          }}>
            <div className="footer-column">
              <h4 className="text-lg font-semibold mb-4" style={{ fontWeight: 'bold' }}>Tommy Subaric</h4>
              <p className="text-sm" style={{ fontWeight: 'bold' }}>AI and Automation Engineer</p>
            </div>
            <div className="footer-column">
              <h5 className="font-medium mb-2" style={{ fontWeight: 'bold' }}>Portfolio</h5>
              <ul>
                <li style={{ fontWeight: 'bold' }}>Projects</li>
                <li style={{ fontWeight: 'bold' }}>Experience</li>
                <li style={{ fontWeight: 'bold' }}>Skills</li>
                <li style={{ fontWeight: 'bold' }}>Contact</li>
              </ul>
            </div>
            <div className="footer-column">
              <h5 className="font-medium mb-2" style={{ fontWeight: 'bold' }}>Links</h5>
              <ul>
                <li>
                  <a href="https://www.linkedin.com/in/thomas-subaric/" className="hover:underline" style={{ fontWeight: 'bold' }}>LinkedIn</a>
                </li>
                <li>
                  <a href="https://github.com/tsubaric" className="hover:underline" style={{ fontWeight: 'bold' }}>GitHub</a>
                </li>
                <li>
                  <a href="/resume.html" className="hover:underline" style={{ fontWeight: 'bold' }}>Resume PDF</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h5 className="font-medium mb-2" style={{ fontWeight: 'bold' }}>Contact</h5>
              <ul>
                <li style={{ fontWeight: 'bold' }}>tjsubaric@gmail.com</li>
                <li style={{ fontWeight: 'bold' }}>+1(847)271-0993</li>
                <li style={{ fontWeight: 'bold' }}>Carpentersville, IL</li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;