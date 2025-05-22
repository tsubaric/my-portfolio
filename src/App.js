import React, { useState } from 'react';
import pfp from './Arthur_PFP.jpeg';
import portrait from './Arthur Morgan.jpeg';
import './App.css';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import PersonIcon from '@mui/icons-material/Person';
import DescriptionIcon from '@mui/icons-material/Description';
import WorkIcon from '@mui/icons-material/Work';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

function App() {
  const [showResume, setShowResume] = useState(false);

  const handleResumeClick = (e) => {
    e.preventDefault();
    setShowResume(true);
  };

  return (
    <div className="App">
      <div className="mint-green-bar">
        <h1>Tommy Subaric</h1>
        <div className="center-container">
          {/* eslint-disable-next-line */}
          <img src={pfp} alt="Profile Picture" className="profile-picture" />
          <div className="social-media-buttons">
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon fontSize="medium" color="primary" alt="LinkedIn" />
            </a>
            <a href="https://www.github.com/" target="_blank" rel="noopener noreferrer">
              <GitHubIcon fontSize="medium" color="primary" alt="GitHub" />
            </a>
          </div>
        </div>
        <h4>Hi, my name is Tommy Subaric and I'm a Software Engineer. Welcome to my personal website!</h4>
        <div className="separator"></div>
        <div className="holder">
          <IconButton aria-label="about me">
            <PersonIcon />
          </IconButton>
          About Me
        </div>
        <div className="holder">
          <IconButton aria-label="resume">
            <DescriptionIcon />
          </IconButton>
          Resume
        </div>
        <div className="holder">
          <IconButton aria-label="portfolio">
            <WorkIcon />
          </IconButton>
          Portfolio
        </div>
        <div className="separator"></div>
        <Button variant="contained" color="primary">Contact Me</Button>
      </div>
      <header className="App-header">
        <div className="text-section">
          <h2>Tommy Subaric</h2>
          <h3>Software Engineer</h3>
          <p>
            This is a description. Add more details about the person, their role, and any other relevant information here.
          </p>
          <div className="button-group">
            <Button
              variant="contained"
              color="primary"
              onClick={handleResumeClick}
            >
              View Resume
            </Button>
            <Button variant="contained" color="primary">View Portfolio</Button>
          </div>
        </div>
        <img src={portrait} className="App-logo" alt="Portrait" />
      </header>
      <h1>
        {showResume ? (
          <iframe
            src="/resume.html"
            title="Resume"
            style={{ width: '100%', height: '600px', border: 'none' }}
          />
        ) : (
          'Test Test'
        )}
      </h1>
    </div>
  );
}

export default App;