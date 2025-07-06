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

  const projects = [
    {
      title: "NFTicket",
      description: "A brief description of Project 1.",
      image: "src/project1.jpeg", // Replace with actual image paths
    },
    {
      title: "Doctor and Patient Healthcare Portal",
      description: "A brief description of Project 2.",
      image: "src/project2.jpeg",
    },
    {
      title: "SeekerPro",
      description: "A brief description of Project 3.",
      image: "src/project3.jpeg",
    },
    {
      title: "Pong Game",
      description: "A brief description of Project 4.",
      image: "src/project4.jpeg",
    },
    {
      title: "X Social Account Recommendations and Similarities",
      description: "A brief description of Project 5.",
      image: "src/project5.jpeg",
    },
    {
      title: "Asteroids Game",
      description: "A brief description of Project 6.",
      image: "src/project6.jpeg",
    },
    {
      title: "Theory of Computation",
      description: "A brief description of Project 7.",
      image: "src/project7.jpeg",
    },
    {
      title: "Wordle",
      description: "A brief description of Project 8.",
      image: "src/project8.jpeg",
    },
    {
      title: "Event Register Application",
      description: "A brief description of Project 8.",
      image: "src/project8.jpeg",
    },
  ];

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
            maxWidth: '95%', // Use more screen width
            margin: '0 auto',
            gap: '40px', // Add spacing between text and image
          }}>
            <div className="text-section" style={{
              flex: 4, // Increase space for the text section
              padding: '20px', // Add padding for better spacing
            }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>About</h2>
              <h3 style={{ fontSize: '2rem', marginBottom: '20px' }}>Software Engineer</h3>
              <p style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
                Hi, I’m Tommy Subaric, a passionate Software Automation Engineer. I work with everything from C#, Python, JavaScript and beyond, enabling me to build scalable applications across various platforms. Whether it’s cloud environments like AWS and Azure, or frameworks such as React, and .NET, I specialize in crafting high-performance, reliable solutions. I also apply AI and machine learning to real-world problems, creating automated systems that drive efficiency and innovation. I have experience in CI/CD pipelines, Microsoft Power Platform, SAP integrations, and IT Consulting to enhance system performance. My expertise covers backend architecture, database management (SQL, MongoDB, Redis), and front-end development, giving me a well-rounded approach to building software. Beyond my technical expertise, I bring strong problem-solving skills, adaptability, and a drive for continuous improvement.
              </p>
            </div>
            <div style={{
              flex: 1, // Keep the image section smaller
              display: 'flex',
              justifyContent: 'center', // Center the image horizontally
              alignItems: 'center', // Center the image vertically
            }}>
              <img
                src={portrait}
                alt="Profile"
                className="about-profile-pic"
                style={{
                  maxHeight: '600px', // Keep the image size
                  borderRadius: '50%', // Keep the image circular
                  objectFit: 'cover', // Ensure the image fits within the circular shape
                }}
              />
            </div>
          </div>
        </section>
        <hr className="section-divider" />
        <section ref={portfolioRef} className="section-portfolio" style={{ minHeight: '80vh', paddingBottom: 40 }}>
          <h2>Portfolio</h2>
          <div className="portfolio-grid">
            {projects.map((project, index) => (
              <Card key={index} className="portfolio-card" sx={{
                maxWidth: 345,
                backgroundColor: '#2e3a59', // Dark blue-gray background
                border: '2px solid #fff', // White outline
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow
                borderRadius: '8px', // Rounded corners
                padding: '20px', // Internal padding
                transition: 'transform 0.2s ease, box-shadow 0.2s ease' // Smooth hover effect
              }}>
                <CardMedia
                  component="img"
                  alt={project.title}
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
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
            justifyContent: 'center', // Center the columns horizontally
            gap: '160px', // Increased spacing between columns
            flexWrap: 'wrap', // Ensure responsiveness for smaller screens
          }}>
            <div className="footer-column">
              <h4 className="text-lg font-semibold mb-4">Tommy Subaric</h4>
              <p className="text-sm">AI and Automation Engineer</p>
            </div>
            <div className="footer-column">
              <h5 className="font-medium mb-2">Portfolio</h5>
              <ul>
                <li>Projects</li>
                <li>Experience</li>
                <li>Skills</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="footer-column">
              <h5 className="font-medium mb-2">Links</h5>
              <ul>
                <li>
                  <a href="#" className="hover:underline">GitHub</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">LinkedIn</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Resume PDF</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h5 className="font-medium mb-2">Contact</h5>
              <ul>
                <li>tjsubaric@gmail.com</li>
                <li>+1(847)271-0993</li>
                <li>Carpentersville, IL</li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;