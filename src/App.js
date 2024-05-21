import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import IconButton from '@mui/material/IconButton';

import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

import Brightness6SharpIcon from '@mui/icons-material/Brightness6Sharp';
import PersonIcon from '@mui/icons-material/Person';
import DescriptionIcon from '@mui/icons-material/Description';
import WorkIcon from '@mui/icons-material/Work';
import MailIcon from '@mui/icons-material/Mail';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

function App() {
  return (
    <div className="App">
      <div className="mint-green-bar">
        <h1>Title</h1>
        <div className="center-container">
          <img src={logo} alt="Logo" />
          <div className="social-media-buttons">
            <h4>Test Subheader</h4>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FacebookIcon fontSize="medium" alt="Facebook" />
            </a>
            <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
              <TwitterIcon fontSize="medium" alt="Twitter" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <InstagramIcon fontSize="medium" alt="Instagram" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon fontSize="medium" alt="LinkedIn" />
            </a>
            <a href="https://www.github.com/" target="_blank" rel="noopener noreferrer">
              <GitHubIcon fontSize="medium" alt="GitHub" />
            </a>
          </div>
        </div>
        <div className="separator"></div> {/* Faded line separator */}

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
        <div className="holder">
          <IconButton aria-label="contact">
            <MailIcon />
          </IconButton>
          Contact
        </div>

        <div className="separator"></div> {/* Another line */}
        <div className="dark-mode-switch">
          <Brightness6SharpIcon fontSize="medium" alt="Dark Mode" />
          <Switch {...label} />
        </div>
        <div className="holder">Dark Mode</div> {/* Holder value under the second line */}
      </div>
      <header className="App-header">
        <div className="text-section">
          <h2>Name Title</h2>
          <h3>Job Title</h3>
          <p>
            This is a description. Add more details about the person, their role, and any other relevant information here.
          </p>
          <div className="button-group">
            <Button variant="contained" color="primary">Button 1</Button>
            <Button variant="contained" color="secondary">Button 2</Button>
          </div>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
