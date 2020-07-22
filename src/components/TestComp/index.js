import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  state = {
    isOpen: true
  };

  render() {
    const paragraph = this.state.isOpen && (
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
    );
    return (
      <div className="App" onClick={this.clickConsole}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {paragraph}
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

  clickConsole = () => {
    this.setState(state => {
      return {
        isOpen: !this.state.isOpen
      }
    })
  }
}

export default App;
