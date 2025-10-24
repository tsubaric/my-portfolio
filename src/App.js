import React, { useRef } from 'react';
import portrait from './images/ArthurMorgan.jpeg';
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
import Typography from '@mui/material/Typography';
import projects from './projects.json';
import LinkIcon from '@mui/icons-material/Link';

function App() {
  // Create refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);
  const experienceRef = useRef(null);

  // Scroll to section helper
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Example experience entries
  const experiences = [
    {
      title: "Senior Automation Engineer",
      company: "Acme Corp",
      period: "2022 — Present",
      description: "Built automation pipelines, improved CI/CD reliability and implemented ML-driven testing.",
      image: "" // optional
    },
    {
      title: "Software Engineer",
      company: "Tech Solutions",
      period: "2019 — 2022",
      description: "Developed backend services, integrations with SAP, and cloud migrations.",
      image: ""
    },
    {
      title: "DevOps Engineer",
      company: "CloudWorks",
      period: "2017 — 2019",
      description: "Architected CI/CD pipelines and monitored platform reliability.",
      image: ""
    },
    {
      title: "Consultant",
      company: "IT Consulting LLC",
      period: "2015 — 2017",
      description: "Delivered enterprise solutions and Power Platform integrations.",
      image: ""
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
          <div onClick={() => scrollToSection(experienceRef)} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}>
            <IconButton aria-label="experience" size="small"><WorkIcon /></IconButton>
            <span>Experience</span>
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
              <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>About Me</h2>
              <p style={{ fontSize: '1.2rem', lineHeight: '1.8', fontWeight: 'bold' }}>
               A passionate Software Automation Engineer focused on building scalable, high-performance solutions across diverse platforms. I work fluently with C#, Python, Java, JavaScript, and more, enabling cross-platform development from backend services to front-end interfaces. My experience spans cloud platforms like AWS and Azure, along with frameworks such as .NET and React. I specialize in automation, AI, and machine learning — designing intelligent systems that streamline operations and solve complex real-world challenges. My background includes architecting CI/CD pipelines, integrating with SAP, and leveraging Microsoft Power Platform for enterprise solutions. With a strong grasp of backend architecture, database technologies (SQL, MongoDB, Redis), and frontend development, I bring a full-stack perspective to every project. I’m also experienced in IT consulting, helping organizations enhance performance and adopt modern, efficient systems. At the core, I’m a problem solver with a mindset of continuous improvement — adaptable, analytical, and always looking to drive innovation.
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
        <section ref={experienceRef} className="section-experience" style={{ minHeight: '80vh', paddingTop: '130px', paddingBottom: 40 }}>
          <h2>Experience</h2>
          <div className="portfolio-grid">
            {experiences.map((exp, idx) => (
              <Card key={idx} className="portfolio-card" sx={{
                maxWidth: 345,
                backgroundColor: '#3b4a6b',
                border: '2px solid #fff',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                borderRadius: '8px',
                padding: '20px',
              }}>
                {exp.image && (
                  <CardMedia component="img" alt={exp.title} height="140" image={exp.image} />
                )}
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" style={{ fontFamily: 'Courier New, monospace', color: '#fff', fontWeight: 'bold' }}>
                    {exp.title}
                  </Typography>
                  <Typography variant="subtitle2" style={{ fontFamily: 'Courier New, monospace', color: '#fff', fontWeight: 'bold' }}>
                    {exp.company} • {exp.period}
                  </Typography>
                  <Typography variant="body2" style={{ fontFamily: 'Courier New, monospace', color: '#fff', fontWeight: 'bold', marginTop: 8 }}>
                    {exp.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        <hr className="section-divider" />
        <section ref={portfolioRef} className="section-portfolio" style={{ minHeight: '80vh', paddingTop: '130px', paddingBottom: 40 }}>
          <h2>Portfolio</h2>
          <div className="portfolio-grid">
            {projects.map((project, index) => (
              <Card key={index} className="portfolio-card" sx={{
                maxWidth: 345,
                backgroundColor: '#3b4a6b',
                border: '2px solid #fff',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                borderRadius: '8px',
                padding: '20px',
              }}>
                <CardMedia
                  component="img"
                  alt={project.title}
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    style={{
                      fontFamily: 'Courier New, monospace',
                      color: '#fff',
                      fontWeight: 'bold',
                    }}
                  >
                    {project.title}
                  </Typography>
                  {/* Source Code Button: Outlined oval, smaller, with link icon */}
                  {project.source && (
                    <a
                      href={project.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="source-btn"
                    >
                      <span>
                        <LinkIcon style={{ fontSize: 18, marginRight: 4, color: "#3ec6b8" }} />
                        Source
                      </span>
                    </a>
                  )}
                  <Typography
                    variant="body2"
                    style={{
                      fontFamily: 'Courier New, monospace',
                      color: '#fff',
                      fontWeight: 'bold',
                    }}
                  >
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center', gap: 2 }}>
                  {/* Unified Class and Skills Section */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '8px',
                      marginLeft: 8,
                      justifyContent: 'center',
                      width: '100%',
                    }}
                  >
                    {/* Dynamic Class oval (always 1 if present) */}
                    {Array.isArray(project.class) && project.class.length > 0 && (
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderRadius: '999px',
                          background: 'transparent',
                          minWidth: 80,
                          height: 32,
                          border: '2px solid #ffa900',
                          padding: '0 14px',
                          margin: 0,
                        }}
                      >
                        <span style={{
                          color: '#ffa900',
                          fontWeight: 'bold',
                          fontFamily: 'Courier New, monospace',
                          fontSize: '0.95rem',
                          whiteSpace: 'nowrap'
                        }}>
                          {project.class[0].label || 'Class'}
                        </span>
                      </div>
                    )}
                    {/* Dynamic Skills ovals */}
                    {Array.isArray(project.skills) && project.skills.length > 0
                      ? project.skills.slice(0, 7).map((item, idx) => (
                          <div
                            key={idx}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              borderRadius: '999px',
                              background: 'transparent',
                              minWidth: 80,
                              height: 32,
                              border: '2px solid #fff',
                              padding: '0 14px',
                              margin: 0,
                            }}
                          >
                            <span style={{
                              color: '#fff',
                              fontWeight: 'bold',
                              fontFamily: 'Courier New, monospace',
                              fontSize: '0.95rem',
                              whiteSpace: 'nowrap'
                            }}>
                              {item.label || 'Skill'}
                            </span>
                          </div>
                        ))
                      : (
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '999px',
                            background: 'transparent',
                            minWidth: 80,
                            height: 32,
                            border: '2px solid #fff',
                            padding: '0 14px',
                            margin: 0,
                          }}
                        >
                          <span style={{
                            color: '#fff',
                            fontWeight: 'bold',
                            fontFamily: 'Courier New, monospace',
                            fontSize: '0.95rem'
                          }}>
                            Skills
                          </span>
                        </div>
                      )
                    }
                  </div>
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
              <p className="text-sm" style={{ fontWeight: 'bold' }}>Software Automation Engineer</p>
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