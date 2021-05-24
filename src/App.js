import logo from './logo.png';
import linkedin from './linkedin.png';
import gitublogo from './githublogo.png';
import './App.css';
import Dictionary from './Dictionary';

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> 
      </header>

<Dictionary defaultKeyword="hello" />
      
      <footer className="App-footer">
          This app was coded by <strong>Lina Pek</strong> and is open sourced on 
          <div>
            <a href="https://github.com/carpek/dictionary-react-app" target="_blank" rel="noreferrer"> <img src={gitublogo} className="githublogo" alt="github"/> </a> </div>
          <div> Find me on LinkedIn
            <a href="https://at.linkedin.com/in/caroline-pekar-5310aa33" target="_blank" rel="noreferrer"> <img src={linkedin} className="linkedin-logo" alt="linkedin" /> </a> 
          </div>
        </footer>
    </div>
    </div>
  );
}

export default App;
