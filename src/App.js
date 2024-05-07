import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="mint-green-bar">
        <h1>Title</h1>
        <img src={logo} alt="Logo" />
        <div className="social-media-buttons">
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
          {/* <a href="https://www.example.com/" target="_blank" rel="noopener noreferrer">
            <img src="x-icon.png" alt="X" />
          </a> */}
        </div>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
