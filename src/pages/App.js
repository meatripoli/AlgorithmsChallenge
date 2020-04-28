import React, {Component} from 'react';
import logo from '../images/logo.svg';
import './App.css';
import Welcome from '../components/Welcome';
import MyDropdown from '../components/MyDropdown';

function App() {
  return (
    <div className="App">
      <Welcome />
      <MyDropdown />
      <div className="App-header">
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
      </div>
    </div>
  );
}

export default App;
