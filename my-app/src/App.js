import logo from './logo.svg';
import './App.css';
import './Components/Comp_Head.css';
import './Components/Comp_Form.css';
import Comp_Head from './Components/Comp_Head';
import Comp_Form from './Components/Comp_Form';

function App() {
  return (
    <div className="App">
      <Comp_Head />          
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
      </header>
      <Comp_Form />
    </div>
  );
}

export default App;
