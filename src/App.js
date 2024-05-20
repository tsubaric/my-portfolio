import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="mint-green-bar">
        <h1>Title</h1>
        <img src={logo} alt="Logo" />
        <div className="social-media-buttons">
          <h4>Test Subheader</h4>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <img src="facebook-icon.png" alt="Facebook" />
          </a>
          <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
            <img src="twitter-icon.png" alt="Twitter" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <img src="instagram-icon.png" alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <img src="linkedin-icon.png" alt="LinkedIn" />
          </a>
          <a href="https://www.github.com/" target="_blank" rel="noopener noreferrer">
            <img src="github-icon.png" alt="GitHub" />
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
        </div>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
