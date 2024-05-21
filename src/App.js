import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';

import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

function App() {
  return (
    <div className="App">
      <div className="mint-green-bar">
        <h1>Title</h1>
        <img src={logo} alt="Logo" />
        <div className="social-media-buttons">
          <h4>Test Subheader</h4>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FacebookIcon fontSize="medium" alt="Facebook"/>
          </a>
          <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
            <TwitterIcon fontSize="medium" alt="Twitter"/>
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <InstagramIcon fontSize="medium" alt="Instagram"/>
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon fontSize="medium" alt="LinkedIn"/>
          </a>
          <a href="https://www.github.com/" target="_blank" rel="noopener noreferrer">
            <GitHubIcon fontSize="medium" alt="GitHub"/>
          </a>
        </div>
        <div className="separator"></div> {/* Faded line separator */}
        <div className="holder">Holder Value</div> {/* Holder value under the line */}
        <div className="separator"></div> {/* Another line */}
        <div className="holder">Another Holder Value</div> {/* Holder value under the second line */}
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
