import React, { Component } from 'react';
import Hello from '../../Components/Hello'
import logo from '../../AppImages/logo.svg';
import '../../AppCSS/Home/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Hello id="a" name="b" roleid={1}></Hello>
      </div>
    );
  }
}

export default App;
