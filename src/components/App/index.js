import React, {Component} from 'react';
import './App.css';
import SignInUpForm from "../SignInUpForm";

class App extends Component{
  state = {
    isOpen: true
  };

  render() {

    return (

      <div className="App" onClick={this.clickConsole}>
        <div className="App-form">
          <SignInUpForm />
        </div>

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
