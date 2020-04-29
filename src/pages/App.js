import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Welcome from '../components/Welcome';
import MyDropdown from '../components/MyDropdown';


function App() {
  return (
    <div className="App-header">
      <Welcome />
      <MyDropdown />
    </div>
  );
}

export default App;
