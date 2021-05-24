import logo from './logo.png';
import './App.css';
import Dictionary from './Dictionary';

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> 
      </header>

<Dictionary defaultKeyword="alphabeth" />
      
      <footer className="App-footer">
          This app was coded by Lina Pek and is open sourced on GitHub
        </footer>
    </div>
    </div>
  );
}

export default App;
