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
      title: "Project 1",
      description: "A brief description of Project 1.",
      image: "src/project1.jpeg", // Replace with actual image paths
    },
    {
      title: "Project 2",
      description: "A brief description of Project 2.",
      image: "src/project2.jpeg",
    },
    {
      title: "Project 3",
      description: "A brief description of Project 3.",
      image: "src/project3.jpeg",
    },
    {
      title: "Project 4",
      description: "A brief description of Project 4.",
      image: "src/project4.jpeg",
    },
    {
      title: "Project 5",
      description: "A brief description of Project 5.",
      image: "src/project5.jpeg",
    },
    {
      title: "Project 6",
      description: "A brief description of Project 6.",
      image: "src/project6.jpeg",
    },
    {
      title: "Project 7",
      description: "A brief description of Project 7.",
      image: "src/project7.jpeg",
    },
    {
      title: "Project 8",
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
        <footer className="py-16 border-t" style={{ backgroundColor: '#2e3a59', color: '#fff' }}>
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-5 gap-8">
            <div className="footer-column">
              <h4 className="text-lg font-semibold mb-4">TOMMY JOHNSON</h4>
              <p className="text-sm">Senior Software Engineer</p>
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
                <li>tommy.engineer@email.com</li>
                <li>+1 (555) 123-4567</li>
                <li>New York, NY</li>
              </ul>
            </div>
            <div className="footer-column">
              <h5 className="font-medium mb-2">Social</h5>
              <ul>
                <li>
                  <a href="#" className="hover:underline">Twitter</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Blog</a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;